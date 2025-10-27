const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

// Load environment variables (optional - only if .env file exists)
try {
  require("dotenv").config();
} catch (e) {
  // dotenv not installed, that's okay
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, "registrations.json");

// Ensure data file exists
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read registrations from file
async function readRegistrations() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading registrations:", error);
    return [];
  }
}

// Write registrations to file
async function writeRegistrations(registrations) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(registrations, null, 2));
  } catch (error) {
    console.error("Error writing registrations:", error);
    throw error;
  }
}

// Routes
app.get("/api/registrations", async (req, res) => {
  try {
    await ensureDataFile();
    const registrations = await readRegistrations();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
});

app.get("/api/registrations/stats", async (req, res) => {
  try {
    await ensureDataFile();
    const registrations = await readRegistrations();

    const stats = {
      total: registrations.length,
      byType: {
        free: registrations.filter((reg) => reg.registrationType === "free")
          .length,
        individual: registrations.filter(
          (reg) => reg.registrationType === "individual"
        ).length,
        group: registrations.filter((reg) => reg.registrationType === "group")
          .length,
      },
      byStatus: {
        active: registrations.filter((reg) => reg.status === "active").length,
        pending_payment: registrations.filter(
          (reg) => reg.status === "pending_payment"
        ).length,
      },
      recent: registrations
        .sort(
          (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
        )
        .slice(0, 10),
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registration statistics" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const registrationData = req.body;
    const { registrationType } = registrationData;

    // Validate registration type
    if (
      !registrationType ||
      !["free", "individual", "group"].includes(registrationType)
    ) {
      return res.status(400).json({
        error:
          "Invalid registration type. Must be 'free', 'individual', or 'group'",
      });
    }

    // Base required fields for all registration types
    const baseRequiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "address",
      "city",
      "state",
      "pincode",
      "education",
      "institution",
      "graduationYear",
      "courseInterest",
      "motivation",
    ];

    // Additional required fields for group registration
    const groupRequiredFields = ["teamName", "teamMembers", "teamLeader"];

    // Determine required fields based on registration type
    const requiredFields =
      registrationType === "group"
        ? [...baseRequiredFields, ...groupRequiredFields]
        : baseRequiredFields;

    const missingFields = requiredFields.filter(
      (field) => !registrationData[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required fields",
        missingFields,
        registrationType,
      });
    }

    // Add timestamp, ID, and registration type
    const newRegistration = {
      ...registrationData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
      registrationType,
      status: registrationType === "free" ? "active" : "pending_payment",
    };

    // Read existing registrations
    await ensureDataFile();
    const registrations = await readRegistrations();

    // Check for duplicate email (only for individual and group registrations)
    if (registrationType !== "free") {
      const existingEmail = registrations.find(
        (reg) =>
          reg.email === registrationData.email &&
          reg.registrationType !== "free"
      );
      if (existingEmail) {
        return res.status(400).json({
          error: "Email already registered for a paid plan",
        });
      }
    }

    // Add new registration
    registrations.push(newRegistration);

    // Write back to file
    await writeRegistrations(registrations);

    // Log registration with type
    console.log(
      `New ${registrationType} registration: ${registrationData.firstName} ${registrationData.lastName} (${registrationData.email})`
    );

    // Return appropriate response based on registration type
    const response = {
      message: "Registration successful",
      registrationId: newRegistration.id,
      registrationType,
    };

    if (registrationType === "free") {
      response.message =
        "Free registration successful! Welcome to Legal Olympiad.";
    } else if (registrationType === "individual") {
      response.message =
        "Individual registration submitted! Please complete payment to activate your account.";
      response.paymentRequired = true;
      response.amount = 2999;
    } else if (registrationType === "group") {
      response.message =
        "Group registration submitted! Please complete payment to activate your team account.";
      response.paymentRequired = true;
      response.amount = 4999;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register student" });
  }
});

app.get("/api/registrations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await readRegistrations();
    const registration = registrations.find((reg) => reg.id === id);

    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    res.json(registration);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registration" });
  }
});

app.delete("/api/registrations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await readRegistrations();
    const filteredRegistrations = registrations.filter((reg) => reg.id !== id);

    if (filteredRegistrations.length === registrations.length) {
      return res.status(404).json({ error: "Registration not found" });
    }

    await writeRegistrations(filteredRegistrations);
    res.json({ message: "Registration deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete registration" });
  }
});

// YouTube API endpoint
app.get("/api/youtube/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;
    const API_KEY = process.env.YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";

    console.log(`📊 Fetching YouTube analytics for video: ${videoId}`);

    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
      console.log(
        "⚠️  WARNING: Using MOCK data - YouTube API key not configured"
      );
      console.log(
        "💡 To get REAL data, add your YouTube API key in backend/server.js"
      );

      // Return mock data if API key is not configured
      return res.json({
        videoId,
        title:
          "From Student Leader to India's Top Law Officer - Sr. Advocate Sanjay Jain's Inspiring Journey",
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        publishedAt: "2024-12-01T10:00:00Z",
        statistics: {
          viewCount: "5.8K",
          likeCount: "187",
          commentCount: "14",
        },
        channelInfo: {
          title: "Legal Olympiad",
          subscriberCount: "42",
        },
        mock: true,
        message:
          "Using mock data - Configure YouTube API key for real-time data",
      });
    }

    console.log(
      "🔑 YouTube API key found - Fetching REAL data from YouTube..."
    );

    // Fetch video data from YouTube API
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`
    );

    if (!response.ok) {
      console.error(
        `❌ YouTube API error: ${response.status} ${response.statusText}`
      );
      throw new Error(`YouTube API failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ YouTube API request successful!");

    if (data.items && data.items.length > 0) {
      const video = data.items[0];

      // Format numbers for display
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

      // Parse duration from ISO 8601 format
      const parseDuration = (duration) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = parseInt(match[1] || 0);
        const minutes = parseInt(match[2] || 0);
        const seconds = parseInt(match[3] || 0);
        if (hours > 0) {
          return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
        }
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      };

      const videoData = {
        videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail:
          video.snippet.thumbnails.maxres?.url ||
          video.snippet.thumbnails.high?.url,
        publishedAt: video.snippet.publishedAt,
        duration: parseDuration(video.contentDetails?.duration || ""),
        statistics: {
          viewCount: formatNumber(video.statistics.viewCount),
          likeCount: formatNumber(video.statistics.likeCount),
          commentCount: formatNumber(video.statistics.commentCount),
          rawViews: video.statistics.viewCount,
          rawLikes: video.statistics.likeCount,
          rawComments: video.statistics.commentCount,
        },
        channelInfo: {
          title: video.snippet.channelTitle,
          channelId: video.snippet.channelId,
        },
        mock: false,
      };

      console.log("📊 Real-time YouTube Analytics:");
      console.log(`  👁️  Views: ${video.statistics.viewCount}`);
      console.log(`  ❤️   Likes: ${video.statistics.likeCount}`);
      console.log(`  💬 Comments: ${video.statistics.commentCount}`);
      console.log(`  📅 Published: ${video.snippet.publishedAt}`);

      res.json(videoData);
    } else {
      res.status(404).json({ error: "Video not found" });
    }
  } catch (error) {
    console.error("YouTube API Error:", error);

    // Return fallback data on error
    const { videoId } = req.params;
    res.json({
      videoId,
      title:
        "From Student Leader to India's Top Law Officer - Sr. Advocate Sanjay Jain's Inspiring Journey",
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      publishedAt: "2024-12-01T10:00:00Z",
      statistics: {
        viewCount: "5.8K",
        likeCount: "187",
        commentCount: "14",
      },
      channelInfo: {
        title: "Legal Olympiad",
        subscriberCount: "42",
      },
      mock: true,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data file: ${DATA_FILE}`);
});

module.exports = app;
