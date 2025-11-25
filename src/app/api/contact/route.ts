import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic in-memory rate limiter (per IP)
const requestCounts = new Map<string, { timestamps: number[] }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ipAddress: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const entry = requestCounts.get(ipAddress) || { timestamps: [] };
  const recentTimestamps = entry.timestamps.filter((t) => t > windowStart);
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  recentTimestamps.push(now);
  requestCounts.set(ipAddress, { timestamps: recentTimestamps });
  return false;
}

function getClientIp(request: Request): string {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
      return forwardedFor.split(",")[0].trim();
    }
    return request.headers.get("x-real-ip") || "unknown";
  } catch {
    return "unknown";
  }
}

type Payload = {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
};

function validatePayload(payload: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!payload || typeof payload !== "object") {
    errors.push("Missing request body");
    return { valid: false, errors };
  }

  const { name, email, number, message } = payload as Payload;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("A valid email is required");
  }
  if (!number || typeof number !== "string" || number.trim().length < 6) {
    errors.push("Phone number is required and must be valid");
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    errors.push("Message is required and must be at least 5 characters");
  }
  return { valid: errors.length === 0, errors };
}

async function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error(
      "SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASS."
    );
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { valid, errors } = validatePayload(payload);
  if (!valid) {
    return NextResponse.json(
      { success: false, error: "Validation failed", details: errors },
      { status: 400 }
    );
  }

  try {
    const transporter = await createTransport();
    const toAddress = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const { name, email, number, message } = payload as Payload;
    const subject = `New Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`;
    const html = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${number}</p>
			<hr />
			<p>${message?.replace(/\n/g, "<br/>")}</p>
		`;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";

