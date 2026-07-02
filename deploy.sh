#!/bin/bash
# Combined deploy script for axeltang.me + axeltang.me/research/
# Usage: bash deploy.sh

set -e

echo "🚀 Building main portfolio..."
cd my-app
npm run build
cd ..

echo "🔬 Building research hub..."
cd ../research/Untitled/research
npm run build
cd ../../../axeltwc.github.io

echo "🔗 Combining builds..."
mkdir -p my-app/build/research
cp -r ../research/Untitled/research/dist/* my-app/build/research/
mkdir -p my-app/build/research/Reports
cp ../research/Untitled/research/public/Reports/* my-app/build/research/Reports/ 2>/dev/null || true

echo "📦 Deploying to GitHub Pages..."
cd my-app
npx gh-pages -d build
cd ..

echo "✅ Done! Site deployed to https://axeltang.me"
