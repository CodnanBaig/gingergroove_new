# Cleanup Guide - Old Files Removal

## Overview

Since the complete site has been migrated to `ggs-nextjs/` with a new UI, TypeScript, and all optimizations, the old files in the root directory are no longer needed.

**Status**: ✅ API route migrated to new project

---

## What Can Be Safely Deleted

### 1. Old Next.js App Directory
**Path**: `/app/`

**Contains**:
- Old Bootstrap-based pages
- Old layout files
- Old API route (now migrated to `ggs-nextjs/src/app/api/contact/route.ts`)
- Old robots.js and sitemap.js (replaced by TypeScript versions)

**Safe to Delete**: ✅ Yes

**Reason**: All pages have been recreated in `ggs-nextjs/src/app/` with the new UI

---

### 2. Old Components Directory
**Path**: `/components/`

**Contains**:
- All old React components (HomeHero, Nav, Footer, etc.)
- Bootstrap-based components
- Old structured data component

**Safe to Delete**: ✅ Yes

**Reason**: All components have been recreated in `ggs-nextjs/src/components/` with TypeScript and new design

---

### 3. Old Public Assets (if duplicated)
**Path**: `/public/`

**Contains**:
- Assets folder with images, logos, etc.

**Safe to Delete**: ⚠️ **Check First**

**Reason**: Assets should already be copied to `ggs-nextjs/public/`. Verify all assets are present in the new location before deleting.

**Action**: Compare `/public/assets/` with `/ggs-nextjs/public/assets/` to ensure nothing is missing.

---

### 4. Old Configuration Files
**Path**: Root directory

**Files**:
- `next.config.js` (old)
- `package.json` (old)
- `package-lock.json` (old)
- `pnpm-lock.yaml` (old - if not using)
- `jsconfig.json` (old)
- `eslint.config.js` (old)
- `middleware.js` (check if needed)

**Safe to Delete**: ✅ Yes (after verification)

**Reason**: New project has its own configs in `ggs-nextjs/`

**Note**: Check `middleware.js` to see if it contains any logic needed for the new project.

---

### 5. Old Documentation/Reports
**Path**: Root directory

**Files**:
- `SEO_AUDIT_REPORT.md`
- `SEO_AUDIT_REPORT_UPDATED.md`
- `README.md` (old - if replaced)

**Safe to Delete**: ⚠️ **Optional**

**Reason**: These are reference documents. Keep if you want historical reference, delete if not needed.

---

### 6. Lighthouse Reports
**Path**: `/lighthouserc.cjs` and `/lighthouse-reports/`

**Safe to Delete**: ⚠️ **Optional**

**Reason**: Old performance reports. Can be regenerated for the new site.

---

## What to Keep

### 1. Brain Directory
**Path**: `/brain/`

**Keep**: ✅ **YES - Important Documentation**

**Contains**:
- `SITE_REWORK_PLAN.md` - Migration plan
- `PERFORMANCE_OPTIMIZATION.md` - Performance guide
- `CHANGELOG.md` - Change log
- `CLEANUP_GUIDE.md` - This file

---

### 2. New Project Directory
**Path**: `/ggs-nextjs/`

**Keep**: ✅ **YES - This is the active project**

---

## Migration Checklist

Before deleting old files, verify:

- [x] ✅ API route migrated (`/api/contact/route.ts` in new project)
- [x] ✅ All pages migrated to new project
- [x] ✅ All components recreated
- [x] ✅ Assets copied to new project
- [ ] ⚠️ Verify all assets are in `ggs-nextjs/public/`
- [ ] ⚠️ Check `middleware.js` for any needed logic
- [ ] ⚠️ Backup old files (optional but recommended)

---

## Recommended Cleanup Steps

### Step 1: Verify Assets
```bash
# Compare asset directories
diff -r public/assets ggs-nextjs/public/assets
```

### Step 2: Check Middleware
```bash
# Review middleware.js to see if any logic is needed
cat middleware.js
```

### Step 3: Backup (Optional but Recommended)
```bash
# Create a backup of old files
tar -czf old-project-backup.tar.gz app/ components/ public/ *.js *.json
```

### Step 4: Delete Old Files
```bash
# Delete old app directory
rm -rf app/

# Delete old components
rm -rf components/

# Delete old configs (after verification)
rm next.config.js jsconfig.json eslint.config.js

# Delete old package files (if not using)
rm package-lock.json  # if using pnpm
# or
rm pnpm-lock.yaml     # if using npm

# Delete old public (after verifying assets are copied)
# rm -rf public/  # Only after verification!
```

### Step 5: Update Root README
Update the root `README.md` to point to the new project location.

---

## Files Already Migrated

✅ **API Route**: `/app/api/contact/route.js` → `/ggs-nextjs/src/app/api/contact/route.ts`
- Converted to TypeScript
- Uses NextResponse instead of Response
- Type-safe validation

---

## Post-Cleanup Verification

After cleanup, verify:

1. ✅ New project builds successfully
2. ✅ Contact form works (API route functional)
3. ✅ All assets load correctly
4. ✅ No broken imports or references
5. ✅ Git history preserved (if using version control)

---

## Git Considerations

If using Git:

1. **Commit new project first**:
   ```bash
   git add ggs-nextjs/
   git commit -m "Add new Next.js project with TypeScript and modern UI"
   ```

2. **Then remove old files**:
   ```bash
   git rm -r app/ components/
   git commit -m "Remove old project files after migration"
   ```

3. **Keep brain/ directory**:
   ```bash
   git add brain/
   git commit -m "Add project documentation"
   ```

---

## Summary

**Safe to Delete Now**:
- `/app/` directory
- `/components/` directory
- Old config files (`next.config.js`, `jsconfig.json`, `eslint.config.js`)
- Old package lock files (if not using)

**Verify Before Deleting**:
- `/public/` assets (ensure copied to new project)
- `middleware.js` (check for needed logic)

**Keep**:
- `/brain/` directory (documentation)
- `/ggs-nextjs/` directory (active project)
- Old documentation files (optional, for reference)

---

**Last Updated**: 2025-11-25  
**Status**: Ready for cleanup

