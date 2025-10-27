import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  ThumbsUp,
  Users,
  Calendar,
  Clock,
  ExternalLink,
  Youtube,
  Star,
  Eye,
  Download,
  Volume2,
  Headphones,
} from "lucide-react";

const PodcastSection = () => {
  // YouTube Video ID - Change this to any video you want!
  const VIDEO_ID = "D9jiBPJqPTs";
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [videoStats, setVideoStats] = useState({
    views: "8.1K",
    likes: "40",
    comments: "18",
    subscribers: "44",
  });

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: "Legal Student",
      avatar: "/lawstudents.jpg",
      text: "Amazing insights from Mr. Sanjay Jain! This episode really opened my eyes to the legal profession.",
      time: "2 hours ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Aspiring Lawyer",
      avatar: "/lawyer_photo.jpg",
      text: "The discussion about BCI and legal education was incredibly valuable. Thank you for this content!",
      time: "5 hours ago",
      likes: 8,
    },
    {
      id: 3,
      author: "Legal Professional",
      avatar: "/judge.jpg",
      text: "Mr. Jain's experience as ASG really shows in his practical advice. Looking forward to more episodes!",
      time: "1 day ago",
      likes: 15,
    },
  ];

  // Fetch real YouTube data - This fetches REAL-TIME analytics!
  useEffect(() => {
    const fetchYouTubeData = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`Fetching analytics for video: ${VIDEO_ID}`);
        const response = await fetch(`${API_BASE_URL}/api/youtube/${VIDEO_ID}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();

        if (data) {
          console.log("✅ Real-time YouTube data received:", data);
          setVideoData(data);
          setVideoStats({
            views: data.statistics.viewCount || "5.8K",
            likes: data.statistics.likeCount || "188",
            comments: data.statistics.commentCount || "14",
            subscribers: data.channelInfo?.subscriberCount || "42",
          });

          // Show if using real data or mock data
          if (data.mock) {
            console.warn("⚠️ Using mock data - YouTube API key not configured");
          } else {
            console.log("✅ Using REAL YouTube API data!");
          }
        }
      } catch (error) {
        console.error("❌ Failed to fetch YouTube data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    if (videoStats.likes) {
      const currentLikes =
        parseInt(videoStats.likes.replace("K", "").replace("M", "")) || 188;
      setVideoStats((prev) => ({
        ...prev,
        likes: newLikedState
          ? (currentLikes + 1).toString()
          : (currentLikes - 1).toString(),
      }));
    }
  };

  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const openYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${VIDEO_ID}`, "_blank");
  };

  // YouTube embed URL with all controls enabled
  const getYouTubeEmbedUrl = () => {
    return `https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&origin=${window.location.origin}&modestbranding=1&rel=0&controls=1&showinfo=1&playsinline=1&cc_load_policy=0&iv_load_policy=3&loop=0&fs=1&autoplay=0`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Oct 2024";
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C6930A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C6930A] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Youtube size={16} />
            Latest Episode
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Student Leader to India's Top Law Officer - Sr. Advocate Sanjay
            Jain's Inspiring Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Exclusive conversations with legal luminaries, featuring insights
            from India's most respected legal minds.
          </p>
        </div>

        {/* Main Podcast Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            {/* YouTube Video Embed Section */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                {/* YouTube iframe Embed */}
                <iframe
                  src={getYouTubeEmbedUrl()}
                  title="Legal Olympiad Podcast Episode 1 - Senior Advocate Mr. Sanjay Jain"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              {/* Podcast Player Section */}
              {/* <div className="bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-xl border border-orange-200 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C6930A] to-orange-600 rounded-full flex items-center justify-center">
                    <Headphones size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Audio Available</h4>
                    <p className="text-sm text-gray-600">
                      Listen on the go with our podcast player
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isPlaying
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-[#C6930A] hover:bg-[#C6930A]/90 text-white"
                    }`}
                  >
                    {isPlaying ? (
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-4 bg-white rounded-full animate-pulse"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1 h-4 bg-white rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    ) : (
                      <Play size={20} className="ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#C6930A] h-2 rounded-full w-1/3 transition-all duration-300"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>12:30</span>
                      <span>45:30</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-gray-600" />
                    <div className="w-16 bg-gray-200 rounded-full h-1">
                      <div className="bg-[#C6930A] h-1 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Episode Info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#C6930A] rounded-full"></div>
                  <span className="text-sm font-semibold text-[#C6930A]">
                    Episode 1
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">45 minutes</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {videoData?.title ||
                    "Legal Excellence with Senior Advocate Mr. Sanjay Jain"}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Join us for an exclusive conversation with Senior Advocate Mr.
                  Sanjay Jain, Former Additional Solicitor General and BCI
                  Chairman, as he shares invaluable insights about the legal
                  profession, career guidance, and the future of legal
                  education.
                </p>

                {/* Guest Info */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C6930A] to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SJ</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Senior Advocate Mr. Sanjay Jain
                      </h4>
                      <p className="text-sm text-gray-600">
                        Former ASG & BCI Chairman
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star
                          size={14}
                          className="text-yellow-500 fill-yellow-500"
                        />
                        <span className="text-sm text-gray-600">
                          Distinguished Legal Expert
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  onClick={openYouTube}
                  className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={18} />
                  View on YouTube
                </Button>

                <Button
                  onClick={toggleSubscribe}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    isSubscribed
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  <Users size={18} />
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>

                <Button
                  onClick={toggleLike}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    isLiked
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  <Heart size={18} className={isLiked ? "fill-current" : ""} />
                  {videoStats.likes}
                </Button>

                <Button
                  onClick={toggleComments}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={18} />
                  {videoStats.comments} Comments
                </Button>

                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
                  <Share2 size={18} />
                  Share
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {videoStats.views}
                  </div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {videoStats.likes}
                  </div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {videoStats.comments}
                  </div>
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {videoStats.subscribers}
                  </div>
                  <div className="text-sm text-gray-600">Subscribers</div>
                </div>
              </div>

              {/* Comments Section */}
              {showComments && (
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Comments
                  </h4>
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">
                              {comment.author}
                            </span>
                            <span className="text-sm text-gray-500">
                              {comment.time}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{comment.text}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 transition-colors">
                              <ThumbsUp size={14} />
                              {comment.likes}
                            </button>
                            <button className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#C6930A] to-orange-500 p-8 rounded-2xl text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-4 h-4 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Headphones size={16} />
                  New Episode Every Week
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Don't Miss Our Next Episode!
                </h3>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  Subscribe to our YouTube channel for more insightful legal
                  discussions, expert interviews, and exclusive content from
                  India's leading legal minds.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button
                    onClick={openYouTube}
                    className="bg-white text-[#C6930A] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Youtube size={20} />
                    Subscribe on YouTube
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#C6930A] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <Download size={20} />
                    Get Notifications
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-6 text-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{videoStats.subscribers} Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    <span>{videoStats.views} Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={16} />
                    <span>{videoStats.likes} Likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
