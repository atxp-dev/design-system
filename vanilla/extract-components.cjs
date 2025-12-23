#!/usr/bin/env node

/**
 * ATXP Design System - Component Extractor
 *
 * This script extracts component class names and variant patterns from React
 * components to help generate vanilla HTML/CSS/JS versions.
 *
 * Usage:
 *   node extract-components.js <component-name>
 *   node extract-components.js Button
 *   node extract-components.js --all
 */

const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');
const OUTPUT_DIR = path.join(__dirname, 'extracted');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract class names from a component file
 */
function extractClassNames(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classNames = [];

  // Match className strings (both template literals and regular strings)
  const classNameRegex = /className\s*=\s*{?\s*cn\s*\(\s*['"`]([^'"`]+)['"`]/g;
  const simpleClassNameRegex = /className\s*=\s*['"`]([^'"`]+)['"`]/g;

  let match;

  // Extract cn() wrapped classNames
  while ((match = classNameRegex.exec(content)) !== null) {
    classNames.push({
      type: 'cn-wrapped',
      classes: match[1].trim()
    });
  }

  // Extract simple classNames
  while ((match = simpleClassNameRegex.exec(content)) !== null) {
    classNames.push({
      type: 'simple',
      classes: match[1].trim()
    });
  }

  return classNames;
}

/**
 * Extract variant definitions from CVA (class-variance-authority)
 */
function extractVariants(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const variants = {};

  // Find CVA variant definitions
  const cvaRegex = /const\s+\w+Variants\s*=\s*cva\s*\(\s*['"`]([^'"`]+)['"`]\s*,\s*{[\s\S]*?variants:\s*{([\s\S]*?)}\s*,/;
  const match = cvaRegex.exec(content);

  if (match) {
    const baseClasses = match[1].trim();
    const variantsBlock = match[2];

    variants.base = baseClasses;
    variants.variants = {};

    // Extract each variant type
    const variantRegex = /(\w+):\s*{([^}]+)}/g;
    let variantMatch;

    while ((variantMatch = variantRegex.exec(variantsBlock)) !== null) {
      const variantName = variantMatch[1].trim();
      const variantOptions = variantMatch[2];

      variants.variants[variantName] = {};

      // Extract each option within the variant
      const optionRegex = /['"`]?(\w+)['"`]?\s*:\s*['"`]([^'"`]+)['"`]/g;
      let optionMatch;

      while ((optionMatch = optionRegex.exec(variantOptions)) !== null) {
        const optionName = optionMatch[1].trim();
        const optionClasses = optionMatch[2].trim();
        variants.variants[variantName][optionName] = optionClasses;
      }
    }
  }

  return variants;
}

/**
 * Extract subcomponents from a component file
 */
function extractSubcomponents(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const subcomponents = [];

  // Find React.forwardRef components
  const componentRegex = /const\s+(\w+)\s*=\s*React\.forwardRef[\s\S]*?className\s*=\s*{?\s*cn\s*\(\s*['"`]([^'"`]+)['"`]/g;
  let match;

  while ((match = componentRegex.exec(content)) !== null) {
    subcomponents.push({
      name: match[1],
      classes: match[2].trim()
    });
  }

  return subcomponents;
}

/**
 * Generate HTML template for a component
 */
function generateHTMLTemplate(componentName, data) {
  let html = `<!-- ${componentName} Component -->\n\n`;

  if (data.variants && data.variants.base) {
    html += `<!-- Base classes -->\n`;
    html += `<button class="${data.variants.base}">\n`;
    html += `  ${componentName}\n`;
    html += `</button>\n\n`;

    if (data.variants.variants) {
      for (const [variantType, options] of Object.entries(data.variants.variants)) {
        html += `<!-- ${variantType} variants -->\n`;
        for (const [optionName, classes] of Object.entries(options)) {
          html += `<!-- ${variantType}="${optionName}" -->\n`;
          html += `<button class="${data.variants.base} ${classes}">\n`;
          html += `  ${componentName} (${optionName})\n`;
          html += `</button>\n\n`;
        }
      }
    }
  }

  if (data.subcomponents && data.subcomponents.length > 0) {
    html += `<!-- Subcomponents -->\n`;
    data.subcomponents.forEach(sub => {
      html += `<!-- ${sub.name} -->\n`;
      html += `<div class="${sub.classes}">\n`;
      html += `  ${sub.name} content\n`;
      html += `</div>\n\n`;
    });
  }

  return html;
}

/**
 * Process a single component
 */
function processComponent(componentName) {
  const componentPath = path.join(COMPONENTS_DIR, componentName, `${componentName}.tsx`);

  if (!fs.existsSync(componentPath)) {
    console.error(`❌ Component not found: ${componentName}`);
    return;
  }

  console.log(`\n📦 Processing ${componentName}...`);

  const classNames = extractClassNames(componentPath);
  const variants = extractVariants(componentPath);
  const subcomponents = extractSubcomponents(componentPath);

  const data = {
    componentName,
    classNames,
    variants,
    subcomponents
  };

  // Save extraction data as JSON
  const jsonOutput = path.join(OUTPUT_DIR, `${componentName}.json`);
  fs.writeFileSync(jsonOutput, JSON.stringify(data, null, 2));
  console.log(`✅ Saved extraction data: ${jsonOutput}`);

  // Generate HTML template
  const htmlTemplate = generateHTMLTemplate(componentName, data);
  const htmlOutput = path.join(OUTPUT_DIR, `${componentName}.html`);
  fs.writeFileSync(htmlOutput, htmlTemplate);
  console.log(`✅ Generated HTML template: ${htmlOutput}`);

  // Print summary
  console.log(`\n📊 Summary:`);
  console.log(`   Class names found: ${classNames.length}`);
  console.log(`   Has variants: ${!!variants.base}`);
  console.log(`   Subcomponents: ${subcomponents.length}`);

  if (variants.base) {
    console.log(`\n   Base classes: ${variants.base}`);
    if (variants.variants) {
      for (const [variantType, options] of Object.entries(variants.variants)) {
        console.log(`   ${variantType}: ${Object.keys(options).join(', ')}`);
      }
    }
  }

  return data;
}

/**
 * Process all components
 */
function processAllComponents() {
  const components = fs.readdirSync(COMPONENTS_DIR)
    .filter(name => {
      const componentPath = path.join(COMPONENTS_DIR, name);
      return fs.statSync(componentPath).isDirectory();
    });

  console.log(`\n🚀 Processing ${components.length} components...\n`);

  const results = {};
  components.forEach(componentName => {
    try {
      results[componentName] = processComponent(componentName);
    } catch (error) {
      console.error(`❌ Error processing ${componentName}:`, error.message);
    }
  });

  // Save combined results
  const combinedOutput = path.join(OUTPUT_DIR, '_all-components.json');
  fs.writeFileSync(combinedOutput, JSON.stringify(results, null, 2));
  console.log(`\n✅ Saved combined results: ${combinedOutput}`);

  return results;
}

/**
 * Generate a class reference guide
 */
function generateClassReference(results) {
  let markdown = '# ATXP Design System - Vanilla Class Reference\n\n';
  markdown += 'This document provides a reference of all component class names extracted from the React components.\n\n';

  for (const [componentName, data] of Object.entries(results)) {
    if (!data) continue;

    markdown += `## ${componentName}\n\n`;

    if (data.variants && data.variants.base) {
      markdown += `### Base Classes\n\n`;
      markdown += '```html\n';
      markdown += data.variants.base + '\n';
      markdown += '```\n\n';

      if (data.variants.variants) {
        for (const [variantType, options] of Object.entries(data.variants.variants)) {
          markdown += `### ${variantType} Variants\n\n`;
          for (const [optionName, classes] of Object.entries(options)) {
            markdown += `**${optionName}:**\n`;
            markdown += '```html\n';
            markdown += classes + '\n';
            markdown += '```\n\n';
          }
        }
      }
    }

    if (data.subcomponents && data.subcomponents.length > 0) {
      markdown += `### Subcomponents\n\n`;
      data.subcomponents.forEach(sub => {
        markdown += `**${sub.name}:**\n`;
        markdown += '```html\n';
        markdown += sub.classes + '\n';
        markdown += '```\n\n';
      });
    }

    markdown += '---\n\n';
  }

  const markdownOutput = path.join(OUTPUT_DIR, 'CLASS_REFERENCE.md');
  fs.writeFileSync(markdownOutput, markdown);
  console.log(`\n✅ Generated class reference: ${markdownOutput}`);
}

// Main execution
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
ATXP Design System - Component Extractor

Usage:
  node extract-components.js <component-name>  Extract a single component
  node extract-components.js --all             Extract all components

Examples:
  node extract-components.js Button
  node extract-components.js Card
  node extract-components.js --all
    `);
    return;
  }

  if (args[0] === '--all') {
    const results = processAllComponents();
    generateClassReference(results);
  } else {
    processComponent(args[0]);
  }

  console.log('\n✨ Done!\n');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  processComponent,
  processAllComponents,
  extractClassNames,
  extractVariants,
  extractSubcomponents
};
