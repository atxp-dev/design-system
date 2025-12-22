# Publishing Guide for @atxp/design-system

## Prerequisites

### 1. NPM Account & Organization Setup
- [ ] Have an npm account (create at https://www.npmjs.com/signup)
- [ ] Be a member of the @atxp organization on npm
  - If the org doesn't exist, create it at: https://www.npmjs.com/org/create
  - If it exists, have an admin add you as a member

### 2. Local NPM Authentication
```bash
# Login to npm (only needed once per machine)
npm login

# Verify you're logged in
npm whoami
# Should output: your-npm-username

# Verify you can access the @atxp organization
npm access ls-packages @atxp
```

## Pre-Publish Checklist

### 1. Version Check
- [ ] Update version in `package.json` if needed (currently `0.1.0`)
  - First publish: keep `0.1.0`
  - Patch (bug fixes): `0.1.1`
  - Minor (new features): `0.2.0`
  - Major (breaking changes): `1.0.0`

### 2. Build Verification
```bash
# Clean build from scratch
rm -rf dist node_modules
pnpm install
pnpm build

# Verify build output
ls -la dist/
# Should see: index.js, index.cjs, index.d.ts, styles.css
```

### 3. Quality Checks
```bash
# Run type checking
pnpm typecheck

# Run linting
pnpm lint

# Test in Storybook
pnpm storybook
# Verify all components work correctly
```

### 4. Documentation
- [ ] Ensure README.md is up to date with installation and usage instructions
- [ ] Check that examples reference `@atxp/design-system` (not old name)
- [ ] Verify CHANGELOG.md exists and documents changes

### 5. Package Content Verification
```bash
# Dry run to see what will be published
npm pack --dry-run

# Or create actual tarball to inspect
npm pack
tar -tzf atxp-design-system-0.1.0.tgz
```

## Publishing

### First Time Publish
```bash
# Publish the package
pnpm publish

# Or with npm
npm publish
```

### Update Existing Package
```bash
# 1. Update version in package.json
# 2. Build and test
pnpm build
pnpm typecheck

# 3. Commit version bump
git add package.json
git commit -m "chore: bump version to X.X.X"
git push

# 4. Publish
pnpm publish
```

## Post-Publish Verification

### 1. Verify on npm
```bash
# Check package is live
npm view @atxp/design-system

# Check all versions
npm view @atxp/design-system versions
```

### 2. Test Installation
```bash
# In a new test directory
mkdir test-install && cd test-install
npm init -y
npm install @atxp/design-system react react-dom

# Verify files
ls node_modules/@atxp/design-system/dist/
```

### 3. Test Usage
Create a test file to verify imports work:
```tsx
// test.tsx
import { Button } from '@atxp/design-system';
import '@atxp/design-system/styles.css';

export default function App() {
  return <Button>Test</Button>;
}
```

## Troubleshooting

### "You do not have permission to publish"
- Verify you're a member of @atxp organization on npm
- Contact the organization owner to add you

### "Package already exists"
- Choose a different package name, or
- Contact current package owner to transfer ownership

### "402 Payment Required"
- Scoped packages (@atxp/*) are private by default
- Ensure `publishConfig.access: "public"` is in package.json ✅ (already set)

### Build fails before publish
- Check `prepublishOnly` script runs successfully
- Ensure all dependencies are installed

## Package Information

- **Name**: `@atxp/design-system`
- **Current Version**: `0.1.0`
- **Public**: Yes ✅
- **Registry**: https://registry.npmjs.org/
- **Package URL** (after publish): https://www.npmjs.com/package/@atxp/design-system

## Installation Instructions (for users)

```bash
# npm
npm install @atxp/design-system react react-dom

# pnpm
pnpm add @atxp/design-system react react-dom

# yarn
yarn add @atxp/design-system react react-dom
```

## Usage Example (for users)

```tsx
import { Button, Select, Card } from '@atxp/design-system';
import '@atxp/design-system/styles.css';

function App() {
  return (
    <Card>
      <h1>My App</h1>
      <Button>Click me</Button>
    </Card>
  );
}
```
