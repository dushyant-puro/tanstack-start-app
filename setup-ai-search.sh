#!/bin/bash
# Quick setup script for AI Search

echo "🚀 Setting up Gemini AI Search..."
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "✅ .env.local created!"
    echo ""
    echo "⚠️  NEXT STEP: Add your Gemini API key to .env.local"
    echo "   Get it from: https://aistudio.google.com/app/apikey"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔄 Replacing search route..."
if [ -f src/routes/search-new.tsx ]; then
    if [ -f src/routes/search.tsx ]; then
        mv src/routes/search.tsx src/routes/search-old.tsx
        echo "  - Backed up old search route to search-old.tsx"
    fi
    mv src/routes/search-new.tsx src/routes/search.tsx
    echo "✅ Search route updated!"
else
    echo "⚠️  search-new.tsx not found"
fi

echo ""
echo "✨ Setup complete! Start with: npm run dev"
echo ""
