# Bolty SEO Quick Reference - Developer Guide

## 🎯 Quick Links

- 📋 Full Guide: [SEO-IMPLEMENTATION-GUIDE.md](SEO-IMPLEMENTATION-GUIDE.md)
- 📊 Site Structure: [/public/site-structure.json](/public/site-structure.json)
- 🏢 Organization Schema: [/public/schema/organization.json](/public/schema/organization.json)
- 📝 SEO Metadata: [/public/SEO-metadata.md](/public/SEO-metadata.md)
- 🌐 OG Configuration: [/public/opengraph-config.md](/public/opengraph-config.md)
- 🤖 Robots Config: [/public/robots.txt](/public/robots.txt)

---

## 🔑 Key Files Changed

### Components
- **BaseHead.astro** - Enhanced with keywords, schema, robots, OG tags
- **MasterLayout.astro** - Now properly passes SEO props to BaseHead

### Layouts
- **BlogPost.astro** - Added BlogPosting schema markup

### Pages - Updated with SEO
```
index.astro                          ✅
contact.astro                        ✅
team.astro                           ✅
blog/index.astro                     ✅
links/index.astro                    ✅
get-free-estimation.astro            ✅
privacy-policy.astro                 ✅
terms-and-conditions.astro           ✅
refund-and-cancellation-policy.astro ✅
shipping-and-delivery.astro          ✅
success.astro                        ✅
delete-account.astro                 ✅
delete-account-success.astro         ✅
```

### Content Files - Enhanced
**Blog Posts** (all have improved titles, descriptions, keywords):
- what-is-bolty.md ✅
- why-choose-bolty.md ✅
- bolty-mobile-apps-anouncement.md ✅

**Products** (all have improved titles, descriptions, keywords):
- 3m-car-wash-shampoo.md ✅
- auto-hub-microfiber.md ✅
- autokaar-car-door-handle-protector.md ✅
- car-tyre-stone-removal-tool.md ✅
- sheen-micro-fiber.md ✅
- shine-x-pro.md ✅
- wavex-wonder-wash.md ✅

### New Files Created
```
robots.txt                          📄 Search engine crawler rules
SEO-IMPLEMENTATION-GUIDE.md         📄 Complete implementation guide
public/SEO-metadata.md              📄 Metadata reference for LLMs
public/opengraph-config.md          📄 Social media OG configuration
public/site-structure.json          📄 Machine-readable site structure
public/schema/organization.json     📄 Organization schema markup
```

---

## 📝 Adding a New Page - SEO Checklist

When adding a new page, follow this pattern:

```astro
---
import MasterLayout from "../layouts/MasterLayout.astro";

const pageTitle = "Page Title - Bolty | Tagline (50-60 chars total)";
const pageDescription = "Compelling description of the page, highlighting value proposition. 150-160 characters.";
const pageKeywords = "keyword1, keyword2, keyword3, keyword4, keyword5";

// Optional: Add schema markup for specific page type
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageTitle,
  "description": pageDescription,
  "url": "https://bolty.in/your-page"
};
---

<MasterLayout 
  title={pageTitle} 
  description={pageDescription}
  keywords={pageKeywords}
  schemaMarkup={schemaMarkup}
>
  <!-- Page content -->
</MasterLayout>
```

---

## 📄 Adding Blog Post - SEO Checklist

Front matter template:

```yaml
---
title: "Blog Title - Specific Benefit or Question (50-60 chars)"
description: "150-160 character description with value prop and keywords"
publishedDate: "Month DD YYYY"
updatedDate: "Month DD YYYY"
isFeatured: true/false
tags: ['tag1', 'tag2', 'tag3', 'specific-keywords']
heroImage:
    url: "/path/to/image.jpg"
    alt: "Descriptive alt text for image"
---
```

Best practices:
- Use descriptive title with keywords
- Include 3-5 relevant tags
- Write 150+ word descriptions
- Add hero image with descriptive alt text
- Link to related pages in content

---

## 🛍️ Adding Product Link - SEO Checklist

Front matter template:

```yaml
---
title: "Product Name - Key Features | Brand (50-60 chars)"
description: "What it does, key benefits, who it's for. 150-160 characters."
publishedDate: "Month DD YYYY"
updatedDate: "Month DD YYYY"
isFeatured: false
tags: ['category', 'feature', 'use-case', 'specificity']
heroImage:
    url: "/links/product-image.jpg"
    alt: "Descriptive product image alt text"
affiliateLink: "https://affiliate-link"
productCode: 'XXXX'
---
```

Best practices:
- Use action-oriented title
- Highlight key features
- Include 4-6 descriptive tags
- Use professional product images
- Add affiliate link for monetization

---

## 🔍 SEO Meta Tag Reference

### Required for Every Page

```astro
<MasterLayout 
  title="50-60 character title with keywords"
  description="150-160 character compelling description"
  keywords="keyword1, keyword2, keyword3, keyword4, keyword5"
/>
```

### Optional but Recommended

```astro
<MasterLayout 
  title="..."
  description="..."
  keywords="..."
  image="/path/to/og-image-1200x630.jpg"  // For OG tags
  ogType="article|business.business|website"
  schemaMarkup={{...}}  // JSON-LD structured data
/>
```

---

## 📊 SEO Metrics to Monitor

### In Google Search Console
- [ ] Total impressions
- [ ] Total clicks
- [ ] Average CTR
- [ ] Average position
- [ ] Coverage (indexed pages)

### In Google Analytics 4
- [ ] Organic search traffic
- [ ] Landing page performance
- [ ] Conversion rate (goal: /success page)
- [ ] Session duration
- [ ] Bounce rate

### External Tools
- [ ] Keyword rankings (SEMrush, Ahrefs)
- [ ] Backlinks (Moz, Ahrefs)
- [ ] Page speed (Google PageSpeed Insights)
- [ ] Mobile usability (Google Mobile Friendly Test)

---

## 🚀 Pre-Deployment Checklist

Before pushing to production:

```
SEO Quality Check:
☐ All pages have unique title (50-60 chars)
☐ All pages have unique description (150-160 chars)
☐ All pages have keywords
☐ All images have alt text
☐ Internal links use descriptive anchor text
☐ No broken links
☐ Mobile responsive design working
☐ Page speed > 80 (Google PageSpeed)

Technical Check:
☐ robots.txt is accessible
☐ Sitemap is accessible (sitemap-index.xml)
☐ Canonical URLs are set
☐ Schema markup validates
☐ OG tags render correctly
☐ Analytics tracking active
☐ 404 page is optimized

Content Check:
☐ No duplicate content
☐ Proper heading hierarchy (H1, H2, H3)
☐ Images are optimized
☐ Content is well-structured
☐ CTAs are clear and present

Search Engine Check:
☐ Submit sitemap to Google
☐ Submit sitemap to Bing
☐ Verify in Google Search Console
☐ Verify in Bing Webmaster
☐ Monitor indexing status
```

---

## 🎓 SEO Best Practices

### Titles
- ✅ Include primary keyword first
- ✅ Use 50-60 characters
- ✅ Include brand name
- ✅ Use power words (Ultimate, Best, Complete)
- ❌ Avoid keyword stuffing
- ❌ Don't exceed 60 characters

### Descriptions
- ✅ Include main keyword
- ✅ Use 150-160 characters
- ✅ Include CTA or value prop
- ✅ Make it compelling
- ❌ Don't repeat title
- ❌ Don't exceed 160 characters

### Keywords
- ✅ Research user intent
- ✅ Use 5-8 keywords per page
- ✅ Mix short and long-tail
- ✅ Natural language
- ❌ No keyword stuffing
- ❌ Don't repeat same keyword

### Content
- ✅ Proper heading hierarchy
- ✅ 300+ words per page (except landing pages)
- ✅ Internal links to related pages
- ✅ External links to authority sources
- ✅ Include images with alt text
- ❌ Duplicate content
- ❌ Thin content (< 100 words)

---

## 📞 Contact & Support

For SEO questions or updates:
- 📧 Email: support@bolty.in
- 📱 WhatsApp: https://wa.me/919963017273
- 🔗 Website: https://bolty.in

---

## 📚 Additional Resources

- [SEO-IMPLEMENTATION-GUIDE.md](SEO-IMPLEMENTATION-GUIDE.md) - Full guide
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Astro Documentation](https://docs.astro.build)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 15, 2026 | Initial SEO implementation |

---

**Last Updated**: January 15, 2026  
**Status**: ✅ Complete and Deployed  
**Maintained by**: Bolty Development Team
