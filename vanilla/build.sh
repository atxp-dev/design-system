#!/bin/bash

# ATXP Design System - Vanilla Build Script
# This script prepares the vanilla HTML/CSS/JS site for deployment

set -e

echo "🚀 Building ATXP Design System - Vanilla Version"
echo "================================================"

# Detect if we're in the vanilla directory or the repo root
if [ -f "package.json" ]; then
  # We're in the repo root (e.g., Render deployment)
  REPO_ROOT="$(pwd)"
  VANILLA_DIR="$(pwd)/vanilla"
elif [ -f "../package.json" ]; then
  # We're in the vanilla directory (e.g., local development)
  REPO_ROOT="$(cd .. && pwd)"
  VANILLA_DIR="$(pwd)"
else
  echo "❌ Error: Cannot find package.json. Please run from repo root or vanilla directory."
  exit 1
fi

echo "📍 Repository root: $REPO_ROOT"
echo "📍 Vanilla directory: $VANILLA_DIR"

# Step 1: Build the main design system (generates dist/styles.css)
echo "📦 Step 1: Building design system..."
cd "$REPO_ROOT"
pnpm build:css
pnpm build

# Step 2: Copy dist/ into vanilla/dist/
echo "📁 Step 2: Copying dist/ files into vanilla..."
cd "$VANILLA_DIR"
rm -rf dist
cp -r "$REPO_ROOT/dist" ./dist

# Step 3: Update all references from ../dist to ./dist
echo "🔄 Step 3: Updating file references..."

# Update all HTML files
for file in *.html components/*.html; do
  if [ -f "$file" ]; then
    echo "   Updating $file"
    # macOS sed requires -i '' for in-place editing
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' 's|href="../dist/|href="./dist/|g' "$file"
      sed -i '' 's|src="../dist/|src="./dist/|g' "$file"
    else
      sed -i 's|href="../dist/|href="./dist/|g' "$file"
      sed -i 's|src="../dist/|src="./dist/|g' "$file"
    fi
  fi
done

# Step 4: Create downloadable GZIP archive
echo "📦 Step 4: Creating downloadable archive..."

# Create a temporary directory for the archive contents
TEMP_DIR="atxp-design-system-vanilla"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy all files to the temp directory
cp -r dist "$TEMP_DIR/"
cp -r components "$TEMP_DIR/"
cp -r js "$TEMP_DIR/"
cp *.html "$TEMP_DIR/" 2>/dev/null || true
[ -f README.md ] && cp README.md "$TEMP_DIR/"

# Create the tar.gz file
ARCHIVE_NAME="atxp-design-system-vanilla.tar.gz"
tar -czf "$ARCHIVE_NAME" "$TEMP_DIR"

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Get sizes for output (works from vanilla directory)
DIST_SIZE=$(du -sh dist 2>/dev/null | cut -f1)
HTML_COUNT=$(ls -1 *.html 2>/dev/null | wc -l | tr -d ' ')
COMPONENT_COUNT=$(ls -1 components/*.html 2>/dev/null | wc -l | tr -d ' ')
JS_COUNT=$(ls -1 js/*.js 2>/dev/null | wc -l | tr -d ' ')
ARCHIVE_SIZE=$(du -sh "$ARCHIVE_NAME" 2>/dev/null | cut -f1)

echo "✅ Build complete!"
echo ""
echo "📊 Build output:"
echo "   - vanilla/dist/ ($DIST_SIZE - CSS and assets)"
echo "   - vanilla/*.html ($HTML_COUNT files)"
echo "   - vanilla/components/*.html ($COMPONENT_COUNT files)"
echo "   - vanilla/js/*.js ($JS_COUNT file)"
echo "   - $ARCHIVE_NAME ($ARCHIVE_SIZE)"
echo ""
echo "🌐 Site ready for deployment from $VANILLA_DIR directory"
echo "📥 Download archive: $VANILLA_DIR/$ARCHIVE_NAME"
