// YouTube API Integration Hook
// This can be used to fetch real YouTube video data in the future
// You'll need to get a YouTube API key from Google Cloud Console

import { useState, useEffect } from "react";

const useYouTubeVideo = (videoId) => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // YouTube API key - replace with your actual API key
  const API_KEY = "YOUR_YOUTUBE_API_KEY_HERE";
  const API_URL = `https://www.googleapis.com/youtube/v3/videos`;

  useEffect(() => {
    if (!videoId || !API_KEY) return;

    const fetchVideoData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_URL}?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          setVideoData({
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail:
              video.snippet.thumbnails.maxres?.url ||
              video.snippet.thumbnails.high?.url,
            channelTitle: video.snippet.channelTitle,
            publishedAt: video.snippet.publishedAt,
            duration: video.contentDetails?.duration,
            statistics: {
              viewCount: formatNumber(video.statistics.viewCount),
              likeCount: formatNumber(video.statistics.likeCount),
              commentCount: formatNumber(video.statistics.commentCount),
            },
          });
        }
      } catch (err) {
        setError(err.message);
        console.error("YouTube API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return { videoData, loading, error };
};

// Helper function to format numbers (e.g., 1234 -> 1.2K)
const formatNumber = (num) => {
  if (!num) return "0";

  const number = parseInt(num);
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }
  return number.toString();
};

export default useYouTubeVideo;

// Usage example:
// const { videoData, loading, error } = useYouTubeVideo('i3-7xon7SxA');
//
// if (loading) return <div>Loading...</div>;
// if (error) return <div>Error: {error}</div>;
// if (videoData) {
//   // Use videoData.title, videoData.thumbnail, etc.
// }
