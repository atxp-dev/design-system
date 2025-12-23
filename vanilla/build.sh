#!/bin/bash

# ATXP Design System - Vanilla Build Script
# This script prepares the vanilla HTML/CSS/JS site for deployment

set -e

echo "🚀 Building ATXP Design System - Vanilla Version"
echo "================================================"

# Step 1: Build the main design system (generates dist/styles.css)
echo "📦 Step 1: Building design system..."
cd ..
pnpm build:css
pnpm build
cd vanilla

# Step 2: Copy dist/ into vanilla/dist/
echo "📁 Step 2: Copying dist/ files into vanilla..."
rm -rf dist
cp -r ../dist ./dist

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

echo "✅ Build complete!"
echo ""
echo "📊 Build output:"
echo "   - vanilla/dist/ ($(du -sh dist 2>/dev/null | cut -f1) - CSS and assets)"
echo "   - vanilla/*.html ($(ls -1 *.html | wc -l | tr -d ' ') files)"
echo "   - vanilla/components/*.html ($(ls -1 components/*.html 2>/dev/null | wc -l | tr -d ' ') files)"
echo "   - vanilla/js/*.js ($(ls -1 js/*.js 2>/dev/null | wc -l | tr -d ' ') file)"
echo "   - $ARCHIVE_NAME ($(du -sh $ARCHIVE_NAME 2>/dev/null | cut -f1))"
echo ""
echo "🌐 Site ready for deployment from ./vanilla directory"
echo "📥 Download archive: ./$ARCHIVE_NAME"
