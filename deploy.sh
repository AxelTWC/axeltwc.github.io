#!/bin/bash
# Combined deploy script for axeltang.me + axeltang.me/research/
# Usage:
#   bash deploy.sh                                    # uses default research path
#   RESEARCH_PATH=/path/to/research bash deploy.sh    # custom research path

set -e

# Default: looks for research repo relative to this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RESEARCH_PATH="${RESEARCH_PATH:-$SCRIPT_DIR/../research/Untitled/research}"

echo "🚀 Building main portfolio..."
cd "$SCRIPT_DIR/my-app"
npm run build
cd "$SCRIPT_DIR"

echo "🔬 Building research hub from: $RESEARCH_PATH"
cd "$RESEARCH_PATH"
npm run build
cd "$SCRIPT_DIR"

echo "🔗 Combining builds..."
mkdir -p my-app/build/research
cp -r "$RESEARCH_PATH/dist/"* my-app/build/research/
mkdir -p my-app/build/research/Reports
cp "$RESEARCH_PATH/public/Reports/"* my-app/build/research/Reports/ 2>/dev/null || true

echo "📦 Deploying to GitHub Pages..."
cd my-app
npx gh-pages -d build
cd ..

echo "✅ Done! Site deployed to https://axeltang.me"
