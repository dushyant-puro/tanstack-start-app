# ⚡ AI Search - Quick Reference

## 🚀 Start Here

```bash
# 1. Get API Key
# → https://aistudio.google.com/app/apikey

# 2. Setup (Windows)
setup-ai-search.bat

# OR Setup (Mac/Linux)
bash setup-ai-search.sh

# OR Manual Setup
cp .env.local.example .env.local
# Edit .env.local, add your API key
npm install @google/generative-ai

# 3. Replace search route
move src\routes\search.tsx src\routes\search-old.tsx
move src\routes\search-new.tsx src\routes\search.tsx

# 4. Start dev server
npm run dev

# 5. Open http://localhost:5173 and search! 🎉
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/lib/ai-search.ts` | Server function calling Gemini API |
| `src/routes/search-new.tsx` | New search page with AI |
| `.env.local.example` | Template (copy to .env.local) |
| `setup-ai-search.bat` | Windows auto-setup |
| `setup-ai-search.sh` | Mac/Linux auto-setup |
| `SETUP_CHECKLIST.md` | Step-by-step guide |
| `AI_SEARCH_SETUP.md` | Complete documentation |
| `ARCHITECTURE.md` | Technical deep dive |

## 🔑 Environment Variable

```
.env.local (do NOT commit this!)
VITE_GEMINI_API_KEY=your_api_key_here
```

Get key: https://aistudio.google.com/app/apikey

## 💡 How It Works

```
User Search Query
       ↓
searchWithAI() [Server Function]
       ↓
Google Gemini API
  ├─ Analyzes query
  ├─ Matches against flips DB
  ├─ Ranks by relevance
  └─ Generates insights
       ↓
Returns Results + Reasoning
       ↓
Display with "⚡ AI-Powered" Badge
```

## 🧪 Test These Searches

- **"crypto"** → Aarav Kapoor's Web3 flip
- **"environment"** → Raghav Mishra's climate flip
- **"foreign policy"** → Meera's diplomacy flip
- **"farmers"** → Devraj's MSP flip
- **"AI and tech"** → Cross-politician results

## ✅ Verification Checklist

- [ ] API key from https://aistudio.google.com/app/apikey
- [ ] `.env.local` created with API key
- [ ] `npm install @google/generative-ai` completed
- [ ] `src/routes/search-new.tsx` → `search.tsx`
- [ ] `npm run dev` running
- [ ] Search page shows "⚡ AI-Powered" badge
- [ ] Search returns ranked results

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "API key not configured" | Check .env.local exists, has correct key, restart dev server |
| No results showing | Check browser console (F12), network tab |
| Still using keyword search | This is OK! API might be down. Falls back automatically. |
| Rate limit exceeded | Free tier = 15 req/min. Wait a moment. |
| Type errors | Make sure @google/generative-ai is installed |

## 📊 API Limits

| Tier | Requests/min | Requests/day | Cost |
|------|-------------|------------|------|
| Free | 15 | 1,500 | $0 |
| Pro | Unlimited | Unlimited | Pay-as-you-go |

See: https://ai.google.dev/pricing

## 🔗 Useful Links

- **Get API Key**: https://aistudio.google.com/app/apikey
- **Google AI Docs**: https://ai.google.dev/
- **Gemini Pricing**: https://ai.google.dev/pricing
- **Status/Support**: https://status.cloud.google.com/

## 📚 Documentation Files

1. **SETUP_CHECKLIST.md** ← Start here for setup
2. **AI_SEARCH_SETUP.md** ← Features & configuration
3. **ARCHITECTURE.md** ← Technical details
4. **IMPLEMENTATION_SUMMARY.md** ← Overview

## 💬 What's New

✨ **Before**: Keyword-only search
✨ **After**: 
  - AI-powered semantic search
  - Ranked by relevance
  - AI reasoning explanations
  - Contextual insights
  - Automatic fallback if API unavailable

## 🎯 Next Steps

- [ ] Complete setup (see SETUP_CHECKLIST.md)
- [ ] Test search with example queries
- [ ] Monitor API usage
- [ ] Add caching for popular searches
- [ ] Deploy to production

## 🚀 Ready?

```bash
setup-ai-search.bat    # Windows
bash setup-ai-search.sh # Mac/Linux
npm run dev
```

Then open http://localhost:5173 and start searching! 🔍

---

**Need help?** Read the detailed guides linked above or check:
- https://ai.google.dev/ (Google AI docs)
- Browser console (F12) for errors
