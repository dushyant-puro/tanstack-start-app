# Architecture Overview - AI Search Integration

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERFACE                               │
│                  (Search Page - React)                          │
│                                                                 │
│  ┌──────────────────────────────────────┐                      │
│  │ "Search a politician, party, or..."  │ ← SearchBar          │
│  └──────────────────────┬───────────────┘                      │
│                         │ (user types: "crypto")               │
└─────────────────────────┼─────────────────────────────────────┘
                          │ Form Submit
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│              FRONTEND LOGIC (React Hook)                        │
│                                                                 │
│  1. useEffect triggered                                        │
│  2. setLoading(true) ← Show spinner                            │
│  3. Call searchWithAI(query)                                   │
└─────────────────────────┬─────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│         SERVER-SIDE FUNCTION (ai-search.ts)                    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ 1. Validate query                                      │   │
│  │ 2. Check API key exists                                │   │
│  │ 3. Create Gemini model instance                        │   │
│  │ 4. Format flips database as JSON                       │   │
│  │ 5. Create AI prompt                                    │   │
│  └────────────────────────┬───────────────────────────────┘   │
│                           │                                    │
│                           ▼                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │     GOOGLE GEMINI API (Cloud)                          │   │
│  │                                                        │   │
│  │  Prompt: Analyze "crypto" + 12 flips database         │   │
│  │  ├─ Match politician Aarav Kapoor                      │   │
│  │  ├─ Find category match "Tech & AI"                   │   │
│  │  ├─ Rank by relevance (flip score: 82)                │   │
│  │  └─ Generate insights                                 │   │
│  │                                                        │   │
│  │  Response: JSON with matched IDs + reasoning          │   │
│  └────────────────────────┬───────────────────────────────┘   │
│                           │                                    │
│                           ▼                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ 6. Parse AI response                                   │   │
│  │ 7. Fetch full flip objects from database               │   │
│  │ 8. Return results + reasoning + insights               │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────┬─────────────────────────────────────┘
                          │ Response JSON:
                          │ {
                          │   results: [...Flip objects],
                          │   reasoning: "...",
                          │   insights: "...",
                          │   usingAI: true
                          │ }
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│              FRONTEND RENDERING                                │
│                                                                 │
│  1. setLoading(false) ← Hide spinner                           │
│  2. setResults(response.results)                               │
│  3. setReasoning(response.reasoning)                           │
│  4. setInsights(response.insights)                             │
│  5. Display AI info box with reasoning                         │
│  6. Map and render FlipCard components                         │
│                                                                 │
│  Output: "⚡ AI-Powered" badge + ranked flip results           │
└─────────────────────────────────────────────────────────────────┘
```

## File Dependencies

```
SearchPage (src/routes/search.tsx)
    ├── imports searchWithAI() from src/lib/ai-search.ts
    ├── imports searchFlips() from src/data/flips.ts (fallback)
    ├── imports FlipCard from src/components/FlipCard.tsx
    ├── imports SearchBar from src/components/SearchBar.tsx
    └── imports Loader2 icon from lucide-react

ai-search.ts (src/lib/ai-search.ts)
    ├── imports GoogleGenerativeAI from @google/generative-ai
    ├── imports FLIPS from src/data/flips.ts
    ├── imports Flip type from src/types/flip.ts
    └── uses process.env.VITE_GEMINI_API_KEY
```

## Component Tree

```
SearchPage
├── motion.div (page container)
│   ├── Header section
│   │   ├── "The Archive ⚡ AI-Powered"
│   │   ├── "Search the flip record"
│   │   └── SearchBar
│   └── Info box (if AI reasoning exists)
│       ├── Reasoning text
│       └── Insights paragraph
├── Loading state (if searching)
│   ├── Loader2 (spinning icon)
│   └── "Searching with AI..."
├── Results section
│   ├── Empty state (if no results)
│   │   ├── "कुछ नहीं मिला" (Hindi: "Nothing found")
│   │   └── "No flips matched..."
│   └── Results grid (if found)
│       └── FlipCard[] (mapped)
```

## Data Flow

```
Query: "crypto" 
   ↓
{q: "crypto"} from URL search params
   ↓
useEffect hook triggered
   ↓
searchWithAI("crypto")
   ↓
[SERVER] Format data:
   FLIPS database → JSON string for AI
   ↓
[CLOUD] Gemini AI processes:
   - Query semantic analysis
   - Database matching
   - Ranking algorithm
   ↓
[SERVER] Parse response:
   matchedFlipIds: ["4"] (Aarav Kapoor)
   reasoning: "Found exact match..."
   insights: "Aarav reversed..."
   ↓
[SERVER] Fetch objects:
   Get full flip objects by ID
   ↓
Return Response Object:
   {
     results: [Flip#4],
     reasoning: "...",
     insights: "...",
     totalMatches: 1,
     usingAI: true
   }
   ↓
[FRONTEND] Update state:
   setResults([...])
   setReasoning("...")
   setInsights("...")
   setUsingAI(true)
   ↓
[FRONTEND] Re-render:
   Show "⚡ AI-Powered" badge
   Show reasoning box
   Show ranked flip results
   ↓
User sees AI-powered search results! 🎉
```

## Fallback Mechanism

```
Normal Flow:
  Query → searchWithAI() → ✅ Gemini API → Results with AI insights

Error Scenarios:

1. No API Key:
   Query → searchWithAI() → ⚠️ No key → Keyword search fallback
   Returns: results, reasoning: "Keyword search (AI not configured)"

2. API Error:
   Query → searchWithAI() → ❌ API error → Catch block
   Falls back to keyword search automatically

3. Rate Limit:
   Query → searchWithAI() → ⏱️ Rate limit → Error response
   Falls back automatically

4. Network Down:
   Query → searchWithAI() → 🌐 Network error → Exception
   Falls back to keyword search

All fallbacks:
  - Still return results (Flip objects)
  - Set usingAI: false
  - Log errors for debugging
  - Transparent to user (still works!)
```

## Environment Variables

```
.env.local
├── VITE_GEMINI_API_KEY=sk-xxx...
│   ├── Loaded by Vite at build time
│   ├── Available as process.env.VITE_GEMINI_API_KEY
│   ├── NEVER sent to frontend
│   ├── ONLY used in server functions
│   └── Must be in .gitignore
```

## Key Technologies

```
Google Generative AI (Gemini)
├── Model: gemini-1.5-flash
│   ├── Fast response time
│   ├── Low cost
│   └── Perfect for search ranking
├── API: Google Cloud
└── Authentication: API Key in env vars

TanStack React Start
├── Server Functions (createServerFn)
├── Client-side (useEffect, useState)
└── Route-based file structure

React 19
├── useState for state management
├── useEffect for side effects
├── Motion for animations

Tailwind CSS
└── UI styling and animations
```

## Performance Optimization

```
Current:
- Each search = 1 API call to Gemini
- ~1-2 second response time
- Streaming not implemented

Future Improvements:
- ✅ Cache popular searches
- ✅ Debounce rapid searches
- ✅ Prefetch trending searches
- ✅ Use streaming responses
- ✅ Batch multiple queries
```

## Security Model

```
API Key: VITE_GEMINI_API_KEY
├── Stored in .env.local (not in repo)
├── Loaded by build system
├── NEVER exposed to frontend
├── Only available in server functions
└── Should be rotated periodically

Data Flow:
1. User query (frontend)
2. Server function receives query
3. Flip database (local, trusted)
4. Format prompt with data
5. Send to Gemini API (encrypted)
6. Receive results
7. Filter/validate results
8. Return to frontend (safe)

No sensitive data exposed to:
- Frontend bundles
- Browser storage
- Gemini logs
- User's browser
```

## Monitoring & Debugging

```
Logs:
- Check browser console (F12) for frontend errors
- Check server logs for API errors
- Error messages in catch blocks

Debug Info:
- response.usingAI → boolean (AI or keyword search)
- response.error → any errors encountered
- response.reasoning → why these results
- response.insights → AI analysis

API Rate Limit:
- Free tier: 15 requests/minute
- Monitor in Google Cloud Console
- Auto-fallback if limit exceeded
```

---

**Questions?** Read the detailed guides:
- `SETUP_CHECKLIST.md` - Step-by-step setup
- `AI_SEARCH_SETUP.md` - Configuration & features
- `IMPLEMENTATION_SUMMARY.md` - Overview & next steps
