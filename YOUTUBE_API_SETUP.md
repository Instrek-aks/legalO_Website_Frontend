# YouTube API Setup Guide

## Quick Start - Get Real-Time YouTube Data

### Step 1: Get YouTube API Key (5 minutes)

1. **Go to Google Cloud Console**

   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a Project** (if you don't have one)

   - Click "New Project"
   - Name it: "Legal Olympiad"
   - Click "Create"

3. **Enable YouTube Data API v3**

   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key (looks like: `AIzaSyC...`)

### Step 2: Add API Key to Backend

**Option A: Environment Variable (Recommended)**

1. Create a `.env` file in the `backend` folder:

   ```bash
   YOUTUBE_API_KEY=your_api_key_here
   ```

2. Install dotenv package (if not already installed):

   ```bash
   cd backend
   npm install dotenv
   ```

3. Update `backend/server.js` to load the environment variable (already done in the code!)

**Option B: Direct Configuration (Quick Test)**

1. Open `backend/server.js`
2. Find line 251:
   ```javascript
   const API_KEY = process.env.YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";
   ```
3. Replace `"YOUR_API_KEY_HERE"` with your actual API key:
   ```javascript
   const API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyC...your_actual_key";
   ```

### Step 3: Restart Backend Server

```bash
cd backend
npm start
# or
npm run dev
```

### Step 4: Test It!

1. Open your browser
2. Navigate to: `http://localhost:5001/api/youtube/D9jiBPJqPTs`
3. You should see real YouTube data instead of mock data!

## What You'll Get

✅ **Real-time views count**  
✅ **Real-time likes**  
✅ **Real-time comments count**  
✅ **Actual video title from YouTube**  
✅ **Actual video description**  
✅ **Real publication date**  
✅ **Actual video duration**

## Video Information

- **Video ID**: D9jiBPJqPTs
- **YouTube URL**: https://www.youtube.com/watch?v=D9jiBPJqPTs

## Troubleshooting

### Error: "API key not valid"

- Make sure you copied the entire key (starts with AIzaSyC...)
- Check that YouTube Data API v3 is enabled in Google Cloud

### Error: "Quota exceeded"

- YouTube API has daily quotas (10,000 units per day by default)
- For a single video, you won't hit this limit
- Can refresh stats up to 1,000 times per day

### Still seeing mock data?

- Make sure backend server is restarted
- Check backend console for any error messages
- Verify API key is being loaded correctly

## API Limits

- Free tier: 10,000 units per day
- One video stats request = 1 unit
- You can refresh stats 10,000 times per day = more than enough!

## Security Note

⚠️ **Never commit your API key to GitHub!**

- The `.env` file should be in `.gitignore`
- Use environment variables in production

## Done! 🎉

Your Podcast Section will now show real-time YouTube statistics automatically!

