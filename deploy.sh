#\!/bin/sh
# Combined build + deploy for axeltang.me + axeltang.me/research/
# Usage:
#   ./deploy.sh         -> deploy axeltwc.github.io (main site + embedded /research)
#   ./deploy.sh --both  -> also deploy standalone research repo gh-pages
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RESEARCH_PATH="${RESEARCH_PATH:-$SCRIPT_DIR/../research/Untitled/research}"
DEPLOY_BOTH=0

if [ "${1:-}" = "--both" ]; then
	DEPLOY_BOTH=1
fi

echo "Building main portfolio..."
cd "$SCRIPT_DIR/my-app" && npm run build && cd "$SCRIPT_DIR"

echo "Building research hub..."
cd "$RESEARCH_PATH" && npm run build && cd "$SCRIPT_DIR"

echo "Combining builds..."
mkdir -p my-app/build/research/Reports

if [ ! -d "$RESEARCH_PATH/dist" ]; then
	echo "Error: expected build output not found at $RESEARCH_PATH/dist"
	exit 1
fi

# Copy directory contents without shell glob expansion pitfalls.
cp -R "$RESEARCH_PATH/dist/." my-app/build/research/

if [ -d "$RESEARCH_PATH/public/Reports" ]; then
	cp -R "$RESEARCH_PATH/public/Reports/." my-app/build/research/Reports/
fi

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

if [ "$DEPLOY_BOTH" -eq 1 ]; then
	echo "Deploying standalone research repo..."
	cd "$RESEARCH_PATH"
	npm run deploy
	cd "$SCRIPT_DIR"
	echo "Done\! Standalone research gh-pages deployed."
fi
