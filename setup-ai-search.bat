@echo off
REM Quick setup script for AI Search on Windows

echo.
echo 🚀 Setting up Gemini AI Search...
echo.

REM Check if .env.local exists
if not exist .env.local (
    echo 📝 Creating .env.local from template...
    copy .env.local.example .env.local
    echo ✅ .env.local created!
    echo.
    echo ⚠️  NEXT STEP: Add your Gemini API key to .env.local
    echo    Get it from: https://aistudio.google.com/app/apikey
) else (
    echo ✅ .env.local already exists
)

echo.
echo 📦 Installing dependencies...
call npm install

echo.
echo 🔄 Replacing search route...
if exist src\routes\search-new.tsx (
    if exist src\routes\search.tsx (
        move src\routes\search.tsx src\routes\search-old.tsx
        echo   - Backed up old search route to search-old.tsx
    )
    move src\routes\search-new.tsx src\routes\search.tsx
    echo ✅ Search route updated!
) else (
    echo ⚠️  search-new.tsx not found
)

echo.
echo ✨ Setup complete! Start with: npm run dev
echo.
pause
