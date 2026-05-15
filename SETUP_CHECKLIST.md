# ✅ AI Search Setup Checklist

Complete these steps in order:

## Phase 1: Get API Key ⚙️

- [ ] Go to https://aistudio.google.com/app/apikey
- [ ] Sign in with your Google account
- [ ] Click "Create API Key"
- [ ] Copy the generated API key
- [ ] Keep it safe (don't share!)

## Phase 2: Configure Project 📋

- [ ] Create file `.env.local` in project root
- [ ] Add this line to `.env.local`:
  ```
  VITE_GEMINI_API_KEY=your_api_key_here
  ```
- [ ] Replace `your_api_key_here` with your actual key
- [ ] Save the file
- [ ] Verify `.env.local` is in `.gitignore` (it should be)

## Phase 3: Install Dependencies 📦

Run in terminal (in project root):
```bash
npm install @google/generative-ai
```

Or if using bun (your project has bun.lock):
```bash
bun install @google/generative-ai
```

Wait for installation to complete ✓

## Phase 4: Update Search Route 🔄

Manual file replacement:

**Option A: Using File Explorer**
1. Navigate to `src/routes/`
2. Rename `search.tsx` to `search-old.tsx` (backup)
3. Rename `search-new.tsx` to `search.tsx`

**Option B: Using Terminal**
```bash
# Windows Command Prompt
move src\routes\search.tsx src\routes\search-old.tsx
move src\routes\search-new.tsx src\routes\search.tsx

# Mac/Linux Terminal
mv src/routes/search.tsx src/routes/search-old.tsx
mv src/routes/search-new.tsx src/routes/search.tsx
```

## Phase 5: Verify Files ✓

Check that these files exist:

- [ ] `src/lib/ai-search.ts` ✓
- [ ] `src/routes/search.tsx` ✓ (renamed from search-new.tsx)
- [ ] `src/routes/search-old.tsx` ✓ (backup of original)
- [ ] `.env.local` ✓ (with your API key)
- [ ] `package.json` ✓ (has @google/generative-ai in dependencies)

## Phase 6: Start Dev Server 🚀

```bash
npm run dev
```

Or with bun:
```bash
bun dev
```

Wait for compilation to complete. You should see:
```
  ➜  Local:   http://localhost:5173/
```

## Phase 7: Test Search 🧪

1. Open http://localhost:5173/ in browser
2. Go to search page (look for "The Archive" link)
3. Type a search query, e.g., "crypto"
4. You should see:
   - ✨ "⚡ AI-Powered" badge appears
   - ⏳ Loading spinner while searching
   - 📊 Results appear with AI reasoning
   - 💭 Insights about politicians

## Phase 8: Troubleshoot (if needed) 🔧

**Problem: "Gemini API key not configured"**
```bash
# Solution: Check your .env.local file
# 1. Make sure .env.local exists in project root
# 2. Make sure it has VITE_GEMINI_API_KEY=...
# 3. Make sure no extra spaces or quotes
# 4. Restart dev server: npm run dev
```

**Problem: Search results are blank**
```bash
# Solution: Check browser console (F12)
# Look for error messages
# Common issues:
# - Invalid API key
# - Network error
# - Falls back to keyword search automatically
```

**Problem: Still using keyword search?**
```bash
# Solution: This is actually OK! It means:
# - API might be down
# - Rate limit hit (15 req/min free tier)
# - API key issue
# App gracefully falls back to keyword search
```

## Phase 9: You're Done! 🎉

Your app now has AI-powered search!

### What works:
✅ Smart semantic search
✅ Ranked results by relevance  
✅ AI insights about politicians
✅ Loading feedback
✅ Automatic fallback to keyword search
✅ Error handling

### Quick commands:
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code quality
npm run format       # Auto-format code
```

## Need Help?

1. **Setup guide**: Read `AI_SEARCH_SETUP.md`
2. **Implementation details**: Read `IMPLEMENTATION_SUMMARY.md`
3. **Google AI docs**: https://ai.google.dev/
4. **Get API key**: https://aistudio.google.com/app/apikey
5. **Check API status**: https://status.cloud.google.com/

## Next Steps (Optional)

Once everything is working, you can:

- 📊 Add usage tracking/analytics
- 🔍 Implement search caching
- 🎯 Add filters (party, category, date)
- 💬 Display more detailed analysis
- 🚀 Deploy to production
- 📈 Monitor API usage and costs

Enjoy your AI-powered search! 🚀
