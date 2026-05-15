# ⚡ AI-Powered Search Setup Guide

## Quick Start

### 1. Get Your Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key

### 2. Set Environment Variable
Create a `.env.local` file in the project root:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and paste your API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

⚠️ **Important**: Never commit `.env.local` to Git!

### 3. Install Dependencies
```bash
npm install @google/generative-ai
```

### 4. Replace Search Route
Rename the new search route:
```bash
# On Windows
move src\routes\search.tsx src\routes\search-old.tsx
move src\routes\search-new.tsx src\routes\search.tsx
```

### 5. Start Development Server
```bash
npm run dev
```

## How It Works

### Search Flow
1. User enters search query in SearchBar
2. Query sent to server via `searchWithAI()` function
3. Gemini AI analyzes query + flip database
4. AI returns:
   - **matchedFlipIds**: Ranked by relevance
   - **reasoning**: Why these results match
   - **insights**: AI analysis of the topic

### Fallback to Keyword Search
If Gemini API fails or key is missing:
- Falls back to original keyword search
- Works exactly like before
- No loss of functionality

## Features

✅ **AI-Enhanced Search**: Semantic understanding of queries
✅ **Ranked Results**: Most relevant flips first
✅ **AI Insights**: Get summary analysis of politicians
✅ **Fallback Mode**: Works without API key
✅ **Loading State**: Visual feedback while searching
✅ **Error Handling**: Graceful degradation

## Example Queries

Try these to see AI search in action:

- "Crypto regulations" → Finds Aarav Kapoor's flip
- "Environmental commitments" → Finds Raghav Mishra's flip
- "Foreign policy changes" → Finds Meera Vasudevan's flip
- "Farmers policy" → Finds Devraj Patil's flip

## Troubleshooting

### "Gemini API key not configured"
- Check `.env.local` exists and has correct key
- Restart dev server after adding env var
- Verify key format (no extra quotes/spaces)

### Search returns old results
- Server function might be cached
- Restart dev server: `npm run dev`
- Clear browser cache

### API quota exceeded
- Free Gemini API has rate limits (~2 req/min)
- Wait a moment before searching again
- Falls back to keyword search automatically

## API Costs

**Free Tier**: 15 requests per minute, 1,500 requests per day
- Perfect for development and testing
- No payment required

**Pricing**: Pay-as-you-go after free tier
- Check [Google AI Pricing](https://ai.google.dev/pricing)

## File Changes

### New Files
- `src/lib/ai-search.ts` - Server function for AI search
- `.env.local.example` - Environment template
- `src/routes/search-new.tsx` - Updated search page

### Modified Files
- `src/routes/search.tsx` - Now uses AI search
- `package.json` - Added @google/generative-ai

## Next Steps

### Enhance Further
- Cache popular searches
- Add sentiment analysis
- Track which searches are most popular
- A/B test AI vs keyword search
- Add filters by party, category, date range

### Security
- Consider API key rotation
- Monitor usage in Google Cloud Console
- Set up alerts for quota usage

## Support

For issues:
1. Check that API key is valid at [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Verify `.env.local` is in root directory
3. Check browser console for error details
4. Restart dev server

Happy searching! 🔍
