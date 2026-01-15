# 📝 Content & Page Update Guide - Bolty Website

## Overview

When you add new content or update existing content on the Bolty website, you need to update multiple files to maintain consistency and SEO optimization. This guide shows you exactly where to update and how.

---

## 🔄 Files That Need Updating

| File | Location | Purpose | When to Update |
|------|----------|---------|-----------------|
| **Page/Post/Product** | src/pages/ or src/content/ | Main content | Always (new content) |
| **site-structure.json** | public/ | Site hierarchy | Always (new pages) |
| **SEO-metadata.md** | public/ | SEO reference | Always (new pages) |
| **BaseHead in page** | In frontmatter or page props | Meta tags | Always (new pages) |
| **SEO-QUICK-REFERENCE.md** | Root | Dev reference | When adding new types |
| **README.md** | Root | Project overview | Periodically |

---

## 📋 Checklist by Content Type

### 1️⃣ Adding a NEW PAGE (e.g., /faq, /gallery)

#### Step 1: Create the Page File
**File**: `src/pages/your-page-name.astro`
```astro
---
import MasterLayout from "../layouts/MasterLayout.astro";

const pageTitle = "Your Page - Benefit or Keyword | Bolty";
const pageDescription = "150-160 character compelling description with keywords.";
const pageKeywords = "keyword1, keyword2, keyword3, keyword4, keyword5";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageTitle,
  "description": pageDescription,
  "url": "https://bolty.in/your-page-name"
};
---

<MasterLayout 
  title={pageTitle} 
  description={pageDescription}
  keywords={pageKeywords}
  schemaMarkup={schemaMarkup}
>
  <!-- Your content here -->
</MasterLayout>
```

#### Step 2: Update site-structure.json
Add to the `"pages"` array:
```json
{
  "path": "/your-page-name",
  "name": "Your Page Name",
  "title": "Your Page - Benefit or Keyword | Bolty",
  "description": "150-160 character compelling description.",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "type": "landing_page|service_page|info_page",
  "components": ["hero", "features", "cta"]
}
```

#### Step 3: Update SEO-metadata.md
Add to the "Pages" section:
```markdown
### Your Page Name
- **URL**: https://bolty.in/your-page-name
- **Title**: Your Page - Benefit or Keyword | Bolty
- **Description**: 150-160 character compelling description.
- **Keywords**: keyword1, keyword2, keyword3
- **Type**: Page Type
```

#### Step 4: Update website object in site-structure.json
Update `lastUpdated` date:
```json
"website": {
  "version": "1.0.1",
  "lastUpdated": "2026-01-16"
}
```

---

### 2️⃣ Adding a NEW BLOG POST

#### Step 1: Create Blog Content File
**File**: `src/content/blog/your-blog-title.md`
```yaml
---
title: "Blog Title - Specific Benefit or Question (50-60 chars)"
description: "150-160 character description with value prop and keywords"
publishedDate: "Jan 15 2026"
updatedDate: "Jan 15 2026"
isFeatured: true/false
tags: ['tag1', 'tag2', 'tag3', 'specific-keywords']
heroImage:
    url: "/path/to/image.jpg"
    alt: "Descriptive alt text for image"
---

# Blog content here
```

#### Step 2: Update site-structure.json
Add to the `"pages"` array:
```json
{
  "path": "/blog/your-blog-title",
  "name": "Your Blog Title",
  "title": "Blog Title - Specific Benefit (50-60 chars)",
  "description": "150-160 character description with keywords",
  "type": "blog_post",
  "tags": ["tag1", "tag2", "tag3"]
}
```

#### Step 3: Update SEO-metadata.md
Add to the "Blog Posts" section:
```markdown
#### Your Blog Title
- **URL**: https://bolty.in/blog/your-blog-title
- **Title**: Blog Title - Specific Benefit or Question
- **Description**: 150-160 character description
- **Keywords**: tag1, tag2, tag3
- **Type**: Blog Post
```

#### Step 4: Update blog index description (optional)
If it's a featured post, update the blog index page's schema to mention it.

#### Step 5: Update website version
Update `lastUpdated` in site-structure.json:
```json
"website": {
  "version": "1.0.1",
  "lastUpdated": "2026-01-16"
}
```

---

### 3️⃣ Adding a NEW PRODUCT

#### Step 1: Create Product Content File
**File**: `src/content/links/product-name.md`
```yaml
---
title: "Product Name - Key Features | Brand (50-60 chars)"
description: "What it does, key benefits, who it's for. 150-160 characters."
publishedDate: "Jan 15 2026"
updatedDate: "Jan 15 2026"
isFeatured: false
tags: ['category', 'feature', 'use-case', 'specificity']
heroImage:
    url: "/links/product-image.jpg"
    alt: "Descriptive product image alt text"
affiliateLink: "https://affiliate-link"
productCode: 'XXXX'
---

Product description and details here.
```

#### Step 2: Update site-structure.json
Add to the `"pages"` array:
```json
{
  "path": "/links/product-name",
  "name": "Product Name",
  "title": "Product Name - Key Features | Brand",
  "description": "150-160 character product description",
  "type": "product_link",
  "tags": ["category", "feature", "use-case"]
}
```

#### Step 3: Update SEO-metadata.md
Add to the "Product Links" section:
```markdown
#### Product Name
- **URL**: https://bolty.in/links/product-name
- **Title**: Product Name - Key Features | Brand
- **Description**: 150-160 character product description
- **Keywords**: category, feature, use-case
- **Type**: Product Link
```

#### Step 4: Update website version
```json
"website": {
  "version": "1.0.1",
  "lastUpdated": "2026-01-16"
}
```

---

### 4️⃣ UPDATING EXISTING PAGE/BLOG/PRODUCT

#### If changing Title or Description:
1. Update the page/post/product file
2. Update `site-structure.json` with new title/description
3. Update `SEO-metadata.md` with new title/description
4. Update `website.lastUpdated` date
5. Update `updatedDate` in content frontmatter (for blog/products)

#### If adding/changing Keywords or Tags:
1. Update page frontmatter or props
2. Update `site-structure.json` keywords array
3. Update `SEO-metadata.md` keywords list
4. Update `website.lastUpdated` date

#### If changing URL/Path:
⚠️ **Important**: Also update:
1. `site-structure.json` path field
2. `SEO-metadata.md` URL reference
3. Any internal links pointing to old URL
4. Create 301 redirect (if available)
5. Update `website.lastUpdated` date

---

## 📐 site-structure.json Structure Reference

### Adding a New Page Entry

```json
{
  "path": "/your-unique-path",           // Must be unique
  "name": "Display Name",                 // Human-readable name
  "title": "50-60 char SEO title",        // With keywords
  "description": "150-160 char desc",     // Action-oriented
  "keywords": ["key1", "key2"],           // 5-8 keywords
  "type": "landing_page|blog_post|product_link|service_page|policy_page",
  "tags": ["optional", "tags"],           // For blog/products
  "components": ["hero", "cta"]           // Optional: page components
}
```

### Page Types Reference

| Type | Example Path | When to Use |
|------|--------------|-------------|
| `landing_page` | / | Homepage, major sections |
| `service_page` | /get-free-estimation | Service offering pages |
| `contact_page` | /contact | Contact forms |
| `about_page` | /team | About/team pages |
| `blog_post` | /blog/title | Individual blog articles |
| `product_link` | /links/product | Product recommendations |
| `policy_page` | /privacy-policy | Legal/policy pages |
| `collection_page` | /blog | Index pages (lists multiple items) |
| `confirmation_page` | /success | Form success pages |

---

## 📝 SEO-metadata.md Structure Reference

When adding to SEO-metadata.md, use this format:

```markdown
### Page Title
- **URL**: https://bolty.in/path
- **Title**: "Your Page Title - 50-60 chars"
- **Description**: "150-160 character description with keywords"
- **Keywords**: keyword1, keyword2, keyword3
- **Type**: Page type
- **Components**: hero, features, cta (if applicable)
```

For blog posts:
```markdown
#### Blog Title
- **URL**: https://bolty.in/blog/slug
- **Title**: Blog Title - Benefit or Question
- **Description**: What the post covers
- **Keywords**: tag1, tag2, tag3
- **Type**: Blog Post
```

For products:
```markdown
#### Product Name
- **URL**: https://bolty.in/links/slug
- **Title**: Product Name - Features | Brand
- **Description**: What it does and benefits
- **Keywords**: feature1, category, use-case
- **Type**: Product Link
```

---

## 🔗 Internal Links to Update

When adding new pages, check if you need to update:

1. **Navigation menus** (in Header component)
2. **Blog/Product index pages** (if it's a blog post or product)
3. **Existing pages** that reference related content
4. **Sitemap** (auto-generated, no manual update needed)
5. **robots.txt** (usually no update needed)

---

## 🎯 Quick Update Checklist

### For Every New Page:
```
☐ Create page file (src/pages/ or src/content/)
☐ Add to site-structure.json pages array
☐ Add to SEO-metadata.md
☐ Update website.lastUpdated date
☐ Update navigation if needed
☐ Test page loads correctly
☐ Verify SEO tags in browser (DevTools)
```

### For Every Page/Content Update:
```
☐ Update content file
☐ Update site-structure.json if title/description changed
☐ Update SEO-metadata.md if title/description changed
☐ Update website.lastUpdated date
☐ Update updatedDate in frontmatter (blog/products)
☐ Test changes render correctly
```

### Before Deploying:
```
☐ Validate site-structure.json (JSON validator)
☐ Check for broken internal links
☐ Verify all pages in site-structure.json exist
☐ Test on mobile
☐ Clear cache if applicable
```

---

## 📊 Example: Adding a New Blog Post

### 1. Create file: `src/content/blog/ceramic-coating-benefits.md`
```yaml
---
title: "Ceramic Coating Benefits - 5 Year Paint Protection | Bolty"
description: "Learn about ceramic coating benefits: UV protection, water beading, scratch resistance, and long-lasting shine for your car."
publishedDate: "Jan 16 2026"
updatedDate: "Jan 16 2026"
isFeatured: true
tags: ['ceramic-coating', 'paint-protection', 'car-maintenance', 'long-term-care']
heroImage:
    url: "/blog/ceramic-coating.jpg"
    alt: "Ceramic coating applied to car - glossy finish with water beading"
---

# Ceramic Coating Benefits...
```

### 2. Update site-structure.json
Find the pages array and add:
```json
{
  "path": "/blog/ceramic-coating-benefits",
  "name": "Ceramic Coating Benefits",
  "title": "Ceramic Coating Benefits - 5 Year Paint Protection | Bolty",
  "description": "Learn about ceramic coating benefits: UV protection, water beading, scratch resistance.",
  "type": "blog_post",
  "tags": ["ceramic-coating", "paint-protection", "car-maintenance"]
}
```

Also update:
```json
"website": {
  "version": "1.0.2",
  "lastUpdated": "2026-01-16"
}
```

### 3. Update SEO-metadata.md
Add to Blog Posts section:
```markdown
#### Ceramic Coating Benefits
- **URL**: https://bolty.in/blog/ceramic-coating-benefits
- **Title**: Ceramic Coating Benefits - 5 Year Paint Protection | Bolty
- **Description**: Learn about ceramic coating benefits: UV protection, water beading, scratch resistance.
- **Keywords**: ceramic coating, paint protection, car maintenance, long-term care
- **Type**: Blog Post
```

### 4. Optional: Update blog/index.astro
If you want to feature it, update the schema or add a "Featured Posts" section.

---

## 🚨 Common Mistakes to Avoid

❌ **DON'T**:
- Add page to site-structure.json but forget the actual page file
- Update title in page but forget site-structure.json
- Use same keywords across multiple pages (make them unique)
- Leave `lastUpdated` as old date (update it!)
- Add duplicate paths in site-structure.json
- Use special characters in URLs (use hyphens only)

✅ **DO**:
- Keep all three files in sync (page, site-structure.json, SEO-metadata.md)
- Use consistent naming conventions
- Update `website.lastUpdated` every time you add/change content
- Test the page after creating it
- Validate JSON syntax in site-structure.json

---

## 🔍 Validation Checklist

### After adding new content, verify:

```
JSON Validation:
☐ site-structure.json is valid JSON (use https://jsonlint.com/)
☐ All paths start with /
☐ All required fields present
☐ No duplicate paths

Page Validation:
☐ Page file exists at specified path
☐ Page loads without errors
☐ SEO tags appear in HTML (check DevTools)
☐ Meta title/description correct
☐ Hero image loads

Documentation:
☐ Entry in site-structure.json exists
☐ Entry in SEO-metadata.md exists
☐ Descriptions match between files
☐ Keywords are relevant

Links:
☐ Internal links work correctly
☐ Navigation updated if needed
☐ No broken references
```

---

## 📱 Version Management

Every time you update the website significantly, increment the version:

```json
"website": {
  "version": "1.0.0",      // Major.Minor.Patch
  "lastUpdated": "2026-01-15"
}
```

- **Major** (1.x.x): Large restructuring or new section
- **Minor** (x.1.x): New page or significant feature
- **Patch** (x.x.1): Content updates, bug fixes, or minor changes

---

## 📞 Questions?

For specific file structures, refer to:
- [SEO-QUICK-REFERENCE.md](SEO-QUICK-REFERENCE.md) - Developer reference
- [SEO-metadata.md](public/SEO-metadata.md) - All page metadata
- [site-structure.json](public/site-structure.json) - Current site structure

---

## 🎓 Summary

**When you add/update content, update these 3 files:**

1. **Your content file** (`src/pages/`, `src/content/blog/`, `src/content/links/`)
   - Add frontmatter with title, description, keywords
   - Add schema markup to page props
   
2. **site-structure.json** (`public/site-structure.json`)
   - Add/update entry in pages array
   - Update website.lastUpdated date
   
3. **SEO-metadata.md** (`public/SEO-metadata.md`)
   - Add/update entry with same information
   - Keep descriptions consistent

**Pro Tip**: Copy from site-structure.json to SEO-metadata.md to ensure consistency!

---

*Last Updated: January 15, 2026*
*Version: 1.0*
