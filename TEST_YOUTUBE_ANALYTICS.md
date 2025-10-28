# 🎬 Test YouTube Analytics - Get Real-Time Data

## How to Use

### Step 1: Change Video ID (Optional)

Open `frontend/src/components/PodcastSection.jsx` and change line 23:

```javascript
// Change THIS line:
const VIDEO_ID = "D9jiBPJqPTs";

// To any YouTube video ID you want, for example:
const VIDEO_ID = "jNQXAC9IVRw"; // Or any other video ID
```

### Step 2: Get YouTube API Key (For Real Data)

**Quick Setup (5 minutes):**

1. Go to: https://console.cloud.google.com/
2. Create project → "Legal Olympiad"
3. Enable "YouTube Data API v3"
4. Create API Key
5. Copy your key

### Step 3: Add API Key to Backend

Edit `backend/server.js` line 258:

```javascript
// Find this:
const API_KEY = process.env.YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";

// Replace with:
const API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyC...YOUR_KEY_HERE";
```

### Step 4: Start Servers

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Step 5: View Analytics

**In Browser:**

- Open: http://localhost:5173
- Check browser console (F12) for real-time analytics!

**Direct API Test:**

- Visit: http://localhost:5001/api/youtube/D9jiBPJqPTs
- See JSON with all analytics!

---

## What You'll Get

### Without API Key (Mock Data):

```json
{
  "statistics": {
    "viewCount": "5.8K",
    "likeCount": "187",
    "commentCount": "14"
  },
  "mock": true
}
```

### With API Key (REAL Data):

```json
{
  "statistics": {
    "viewCount": "15.2K", // REAL views
    "likeCount": "342", // REAL likes
    "commentCount": "89", // REAL comments
    "rawViews": "15234", // Exact number
    "rawLikes": "342",
    "rawComments": "89"
  },
  "mock": false
}
```

---

## Test With Any Video ID

### Example 1: Test with Any Legal Video

```javascript
const VIDEO_ID = "jNQXAC9IVRw"; // Any YouTube video ID
```

### Example 2: Test with Your Channel's Videos

```javascript
const VIDEO_ID = "YOUR_VIDEO_ID_HERE";
```

**To find a video ID:**

1. Go to the YouTube video
2. Look at the URL: `youtube.com/watch?v=VIDEO_ID_HERE`
3. Copy the part after `v=`

---

## Expected Output

### Backend Console (When Using Real API):

```
📊 Fetching YouTube analytics for video: D9jiBPJqPTs
🔑 YouTube API key found - Fetching REAL data from YouTube...
✅ YouTube API request successful!
📊 Real-time YouTube Analytics:
  👁️  Views: 15234
  ❤️   Likes: 342
  💬 Comments: 89
  📅 Published: 2024-12-01T10:00:00Z
```

### Frontend Console (Browser DevTools):

```
Fetching analytics for video: D9jiBPJqPTs
✅ Real-time YouTube data received: {statistics: {...}}
✅ Using REAL YouTube API data!
```

---

## Troubleshooting

### "Using mock data" message

- **Cause**: YouTube API key not configured
- **Fix**: Add your API key to `backend/server.js` line 258

### "Failed to fetch YouTube data"

- **Cause**: Backend server not running
- **Fix**: Start backend with `cd backend && npm start`

### CORS Error

- **Cause**: Frontend can't reach backend
- **Fix**: Check backend is running on port 5001

---

## Real-Time Analytics Features

✅ **Live Views** - Updates every page refresh  
✅ **Live Likes** - Real-time like count  
✅ **Live Comments** - Current comment count  
✅ **Video Duration** - From YouTube  
✅ **Upload Date** - Real publication date  
✅ **Thumbnail** - High-quality thumbnail  
✅ **Title & Description** - From YouTube

---

## Quick Test Command

Test any video directly:

```bash
curl http://localhost:5001/api/youtube/D9jiBPJqPTs
```

Or visit in browser:

```
http://localhost:5001/api/youtube/D9jiBPJqPTs
```

---

## Success! 🎉

Your website now fetches **REAL-TIME YouTube analytics** for any video you specify!





