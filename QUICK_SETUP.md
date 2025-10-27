# Quick Setup Guide - Get Real YouTube Data

## What You Need

Just your YouTube API key - it's free and takes 5 minutes!

## Steps (Copy-Paste Ready)

1. **Get YouTube API Key**

   - Go to: https://console.cloud.google.com/
   - Create project → Name it "Legal Olympiad"
   - Enable "YouTube Data API v3"
   - Create API Key
   - Copy your key

2. **Add to Backend**

   Edit `backend/server.js` line 251:

   Find this line:

   ```javascript
   const API_KEY = process.env.YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";
   ```

   Replace with:

   ```javascript
   const API_KEY =
     process.env.YOUTUBE_API_KEY || "AIzaSyC...PASTE_YOUR_KEY_HERE";
   ```

3. **Restart Backend**
   ```bash
   cd backend
   npm start
   ```

## Done! ✨

Your website will now show **real-time YouTube statistics**!

## Test It

Visit: http://localhost:5001/api/youtube/D9jiBPJqPTs

You'll see real views, likes, and comments from YouTube!

