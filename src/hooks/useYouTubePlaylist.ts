"use client";

import { useEffect, useState, startTransition } from "react";

type VideoItem = {
  id: string;
  title: string;
  channelTitle: string;
  videoId: string;
};

type PlaylistState =
  | { status: "idle"; videos: VideoItem[] }
  | { status: "loading"; videos: VideoItem[] }
  | { status: "success"; videos: VideoItem[] }
  | { status: "error"; error: string; videos: VideoItem[] };

type PlaylistResponse = {
  items?: Array<{
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      resourceId: { videoId: string };
    };
  }>;
};

export function useYouTubePlaylist(playlistId: string, maxResults = 8) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const [state, setState] = useState<PlaylistState>(() =>
    apiKey
      ? { status: "idle", videos: [] }
      : {
          status: "error",
          error: "YouTube API key is not configured. Add NEXT_PUBLIC_YOUTUBE_API_KEY to your environment.",
          videos: [],
        }
  );

  useEffect(() => {
    if (!playlistId || !apiKey) {
      return;
    }

    startTransition(() => {
      setState({ status: "loading", videos: [] });
    });

    const controller = new AbortController();

    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`,
      { signal: controller.signal }
    )
      .then(async (res) => {
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: { message?: string } };
          throw new Error(data?.error?.message || "Failed to fetch playlist");
        }
        return (await res.json()) as PlaylistResponse;
      })
      .then((data) => {
        const videos: VideoItem[] =
          data.items?.map((item) => ({
            id: item.id,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            videoId: item.snippet.resourceId.videoId,
          })) ?? [];

        startTransition(() => {
          setState({ status: "success", videos });
        });
      })
      .catch((error) => {
        if ((error as Error).name === "AbortError") return;
        startTransition(() => {
          setState({
            status: "error",
            error: error instanceof Error ? error.message : "Failed to fetch playlist",
            videos: [],
          });
        });
      });

    return () => controller.abort();
  }, [playlistId, maxResults, apiKey]);

  return state;
}


