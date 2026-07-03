#!/bin/sh
# Build + deploy for axeltang.me
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Building main portfolio..."
cd "$SCRIPT_DIR/my-app"
npm run build
cd "$SCRIPT_DIR"

DEPLOY_TMP="${TMPDIR:-/tmp}/axeltwc-deploy-$$"
rm -rf "$DEPLOY_TMP"
mkdir -p "$DEPLOY_TMP"
cp -R my-app/build/. "$DEPLOY_TMP/"

echo "Deploying to gh-pages..."
git branch -D gh-pages-temp >/dev/null 2>&1 || true
git checkout --orphan gh-pages-temp

# Ensure the publish branch only contains deploy artifacts.
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$DEPLOY_TMP/." .
rm -rf "$DEPLOY_TMP"

touch .nojekyll
git add -A
git commit -m "deploy $(date +%Y-%m-%d)"
git push origin gh-pages-temp:gh-pages --force
git checkout -f main -q
git branch -D gh-pages-temp >/dev/null 2>&1 || true
echo "Done\! https://axeltang.me"
