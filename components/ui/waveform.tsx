"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface WaveformProps {
  className?: string;
  barCount?: number;
  isAnimated?: boolean;
}

export function Waveform({ 
  className, 
  barCount = 8, 
  isAnimated = true 
}: WaveformProps) {
  const [heights, setHeights] = useState<number[]>([]);
  
  useEffect(() => {
    if (!isAnimated) {
      // Generate random heights between 10 and 30 for static display
      const randomHeights = Array.from({ length: barCount }, () => 
        Math.floor(Math.random() * 20) + 10
      );
      setHeights(randomHeights);
    }
  }, [barCount, isAnimated]);

  return (
    <div className={cn("flex items-end h-8", className)}>
      {isAnimated ? (
        // Animated waveform
        Array.from({ length: barCount }).map((_, index) => (
          <div
            key={index}
            className="waveform-bar h-5"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))
      ) : (
        // Static waveform with random heights
        heights.map((height, index) => (
          <div
            key={index}
            className="bg-chart-4 w-1 mx-[2px] rounded-full"
            style={{ height: `${height}px` }}
          />
        ))
      )}
    </div>
  );
}