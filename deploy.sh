#\!/bin/sh
# Combined build + deploy for axeltang.me + axeltang.me/research/
# Usage: sh deploy.sh
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RESEARCH_PATH="${RESEARCH_PATH:-$SCRIPT_DIR/../research/Untitled/research}"

echo "Building main portfolio..."
cd "$SCRIPT_DIR/my-app" && npm run build && cd "$SCRIPT_DIR"

echo "Building research hub..."
cd "$RESEARCH_PATH" && npm run build && cd "$SCRIPT_DIR"

echo "Combining builds..."
mkdir -p my-app/build/research/Reports
cp -r "$RESEARCH_PATH/dist/"* my-app/build/research/
cp "$RESEARCH_PATH/public/Reports/"* my-app/build/research/Reports/ 2>/dev/null || true

echo "Deploying to gh-pages..."
git checkout --orphan gh-pages-temp 2>/dev/null
git rm -rf . >/dev/null 2>&1 || true
cp -r my-app/build/* .
touch .nojekyll
git add -A
git commit -m "deploy $(date +%Y-%m-%d)"
git push origin gh-pages-temp:gh-pages --force
git checkout main -q
git branch -D gh-pages-temp >/dev/null 2>&1 || true
echo "Done\! https://axeltang.me"
