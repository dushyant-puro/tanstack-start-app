# 🎨 Visual Setup Guide - AI Search

## Step-by-Step Visual Walkthrough

### STEP 1️⃣: Get Your API Key (2 minutes)

```
Browser:
┌─────────────────────────────────────────────┐
│ https://aistudio.google.com/app/apikey      │
├─────────────────────────────────────────────┤
│  🔐 Sign in with Google                     │
│                                             │
│  [Click: Create API Key]                    │
│                                             │
│  Your API Key:                              │
│  ┌─────────────────────────────────────┐   │
│  │ AIzaSyD_abc123xyz...                │   │
│  ├─────────────────────────────────────┤   │
│  │ [Copy to Clipboard] ✓                │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

**What you'll get:**
- A long string starting with `AIzaSy...`
- Keep this safe (don't share with anyone!)

---

### STEP 2️⃣: Create `.env.local` (1 minute)

```
Project Root:
paltu-ai-the-flip-tracker-main/
├── src/
├── package.json
├── .env.local ← CREATE THIS FILE
└── .env.local.example ← Copy from here

.env.local (NEW FILE):
┌────────────────────────────────────┐
│ VITE_GEMINI_API_KEY=AIzaSy...      │
│ (paste your API key)                │
└────────────────────────────────────┘

⚠️ IMPORTANT: Add to .gitignore
   (Don't commit this file!)
```

**Using File Explorer:**
1. Navigate to project folder
2. Right-click → New → Text File
3. Name it `.env.local`
4. Open with Notepad
5. Paste: `VITE_GEMINI_API_KEY=your_key_here`
6. Replace `your_key_here` with your actual key
7. Save

**Using Terminal:**
```bash
# Windows
copy .env.local.example .env.local
# Then edit .env.local in text editor

# Mac/Linux  
cp .env.local.example .env.local
# Then edit .env.local in text editor
```

---

### STEP 3️⃣: Install Dependencies (3 minutes)

```
Terminal/Command Prompt:

C:\...\paltu-ai-the-flip-tracker-main> npm install

Processing...
├─ Installing @google/generative-ai@0.21.0
├─ Adding 5 new packages
├─ Updating package-lock.json
└─ Done! ✓

Result:
node_modules/
├─ @google/
│  └─ generative-ai/  ← NEW!
└─ ... (many other packages)
```

**What to wait for:**
```
added XX packages
audited XXXX packages in 2.3s
```

---

### STEP 4️⃣: Update Search Route (30 seconds)

```
Before:
src/routes/
├─ index.tsx
├─ search.tsx ← OLD VERSION
├─ search-new.tsx ← NEW VERSION (with AI)
└─ random.tsx

After:
src/routes/
├─ index.tsx
├─ search.tsx ← NEW VERSION (with AI)
├─ search-old.tsx ← BACKUP of old
└─ random.tsx

How to do it:
Option A: File Explorer
  1. Right-click search.tsx → Rename
  2. Type: search-old.tsx
  3. Right-click search-new.tsx → Rename
  4. Type: search.tsx
  ✓ Done!

Option B: Terminal
  # Windows
  move src\routes\search.tsx src\routes\search-old.tsx
  move src\routes\search-new.tsx src\routes\search.tsx
  
  # Mac/Linux
  mv src/routes/search.tsx src/routes/search-old.tsx
  mv src/routes/search-new.tsx src/routes/search.tsx
```

---

### STEP 5️⃣: Start Development Server (2 minutes)

```
Terminal:

C:\...\paltu-ai-the-flip-tracker-main> npm run dev

Building...
│ vite v7.3.1
│ ➜ Local: http://localhost:5173/
│ ➜ press h + enter to show help
│
✓ Built successfully!
```

**Leave terminal running!**

Open Browser:
```
http://localhost:5173
         ↓
    [Your App Loads]
         ↓
  [Search Button Shows]
```

---

### STEP 6️⃣: Test AI Search (1 minute)

```
Browser:
┌──────────────────────────────────────────────┐
│ पलटू - Flip Tracker                          │
├──────────────────────────────────────────────┤
│                                              │
│     THE ARCHIVE ⚡ AI-POWERED              │
│                                              │
│  Search the flip record                      │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ 🔍 Search a politician, party, or...   │  │
│  │ [Type: crypto]                         │  │
│  │              [DIG →]                   │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ⏳ Searching with AI...                     │
│  [Loading spinner]                           │
│                                              │
│  Results for "crypto" · 1 found              │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ 💡 AI Reasoning:                       │  │
│  │ User searched for crypto regulations. │  │
│  │ Found Aarav Kapoor's crypto flip      │  │
│  │ (flip score: 82)                      │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ Aarav Kapoor - Yuva Manch             │  │
│  │                                        │  │
│  │ 2021: "Banning TikTok is anti-       │  │
│  │       creator. Government overreach" │  │
│  │                                        │  │
│  │ 2024: "National security supersedes  │  │
│  │       entertainment. Ban was overdue."│  │
│  │                                        │  │
│  │ Flip Score: 82/100                   │  │
│  └────────────────────────────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘

✨ SUCCESS! Your AI search is working! 🎉
```

---

## Auto-Setup Scripts (One Command!)

### Windows Users:

```
File Explorer:
  1. Navigate to project folder
  2. Find setup-ai-search.bat
  3. Double-click it
  4. Follow prompts
  ✓ Setup complete!

Or Terminal:
  setup-ai-search.bat
```

### Mac/Linux Users:

```
Terminal:
  bash setup-ai-search.sh
  
Then:
  Follow prompts
  ✓ Setup complete!
```

---

## File Structure After Setup

```
paltu-ai-the-flip-tracker-main/
│
├── src/
│   ├── lib/
│   │   └── ai-search.ts ← NEW!
│   ├── routes/
│   │   ├── search.tsx ← UPDATED (was search-new.tsx)
│   │   ├── search-old.tsx ← BACKUP
│   │   └── ...
│   └── ...
│
├── .env.local ← NEW! (with your API key)
├── .env.local.example ← Template
├── .gitignore (already ignores .env.local)
│
├── package.json ← UPDATED (has @google/generative-ai)
│
├── Setup Guides:
│   ├── QUICK_START.md ← Start here!
│   ├── SETUP_CHECKLIST.md ← Detailed steps
│   ├── AI_SEARCH_SETUP.md ← Full documentation
│   ├── ARCHITECTURE.md ← Technical details
│   └── IMPLEMENTATION_SUMMARY.md ← Overview
│
├── setup-ai-search.bat ← Windows auto-setup
├── setup-ai-search.sh ← Mac/Linux auto-setup
│
└── ... (other project files)
```

---

## Visual: Search Flow

```
🧑 User Types: "crypto"
        ↓
    [Search Button]
        ↓
⏳ Loading Spinner
  "Searching with AI..."
        ↓
☁️  Google Gemini AI
    Analyzes query + database
        ↓
💡 Results with AI insights:
   "Found Aarav Kapoor's crypto flip
    (flip score: 82)"
        ↓
🎉 Display Results:
   - ⚡ AI-Powered badge
   - Reasoning box
   - Ranked flip cards
```

---

## Common Questions

**Q: Is this safe?**
✅ Yes! Your API key is:
   - Stored locally in .env.local
   - Never sent to browser
   - Only used server-side
   - Not committed to Git

**Q: What if API fails?**
✅ Automatic fallback to keyword search
   - Still returns results
   - App keeps working
   - No interruption to user

**Q: How much does it cost?**
✅ Free tier:
   - 15 requests/minute
   - 1,500 requests/day
   - $0 cost
   - Perfect for development

**Q: Can I deploy this?**
✅ Yes! Just:
   - Add .env.local to deployment
   - Or set VITE_GEMINI_API_KEY env var
   - Deploy normally

---

## Troubleshooting Visual

```
Error: "API key not configured"
├─ Check 1: Does .env.local exist?
│  └─ File Explorer: See .env.local in root?
├─ Check 2: Is API key inside .env.local?
│  └─ Notepad: Open .env.local, see VITE_GEMINI_API_KEY=...?
├─ Check 3: Dev server restarted?
│  └─ Terminal: Stop (Ctrl+C), npm run dev
└─ Solution: Do all three ✓

Error: Search still shows keyword results
├─ This is OK! Means:
│  ├─ API key might be invalid
│  ├─ Rate limit exceeded (15 req/min)
│  └─ Network issue
└─ App falls back gracefully ✓

Error: "Cannot find module @google/generative-ai"
├─ Solution: npm install @google/generative-ai
└─ Then: npm run dev
```

---

## 🎉 You're All Set!

```
✅ API key configured
✅ Dependencies installed  
✅ Search route updated
✅ Dev server running
✅ Ready to search!

Open: http://localhost:5173
Try: "crypto", "environment", "farmers"

Enjoy your AI-powered search! 🚀
```

---

**Next:** Read the full guides for advanced features!
- Quick Start: `QUICK_START.md`
- Setup Details: `SETUP_CHECKLIST.md`
- Full Docs: `AI_SEARCH_SETUP.md`
