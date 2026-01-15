# Open Graph Configuration for Bolty

This file documents the Open Graph protocol implementation for improved social media sharing and preview optimization.

## General OG Tags Applied to All Pages

- `og:site_name`: "Bolty"
- `og:locale`: "en_IN"
- `og:type`: Varies by page (website, article, business.business)
- Default `og:image`: `/img/bolty-f2.png` (Bolty service vehicle image)
- Default image dimensions: 1200x630px (recommended by OG protocol)

## Page-Specific OG Configuration

### Homepage
- `og:type`: business.business
- `og:title`: "Bolty - Online Denting, Painting & Detailing Services | 100% Color Match"
- `og:description`: "Get hassle-free car denting and painting services at home with 100% color match guarantee."
- `og:url`: https://bolty.in

### Blog Posts
- `og:type`: article
- `og:title`: Blog post title
- `og:description`: Blog post description
- `og:image`: Customizable per post (if hero image exists)
- `og:url`: Individual blog post URL

### Service Pages
- `og:type`: website
- `og:title`: Service page title
- `og:description`: Service page description

### Policy Pages
- `og:type`: website
- `og:title`: Policy title
- `og:description`: Policy description

## Twitter Card Configuration

All pages include Twitter Card meta tags:

- `twitter:card`: "summary_large_image"
- `twitter:creator`: "@bolty_app"
- `twitter:title`: Page title
- `twitter:description`: Page description
- `twitter:image`: og:image URL

## Image Guidelines

### Hero Images for Blog Posts
- Recommended size: 1200x630px (16:9 aspect ratio)
- Format: JPG, PNG, or WebP
- Location: Place in `/src/content/blog/` directories or `/public/img/`

### Product Images
- Recommended size: 1200x630px or larger
- Format: JPG, PNG, or WebP
- Location: `/public/links/` directory
- Examples: carwashshampoo.jpg, autohub.jpg, sheenmicrofiber.jpg

## Social Media Integration

### Instagram
- Profile: https://instagram.com/bolty_app
- Content: Customer testimonials, before/after service photos, app updates

### WhatsApp
- Contact: https://wa.me/919963017273
- Primary communication channel for service inquiries

### Facebook
- Custom audience targeting for service promotions
- Open Graph tags ensure proper preview display

## Optimization Best Practices

1. **Keep OG descriptions concise**: 150-160 characters for optimal display
2. **Use high-quality images**: Ensure 1200x630px images for best preview quality
3. **Unique titles**: Each page should have unique OG title
4. **Consistent branding**: Use Bolty branding in all social shares
5. **Call-to-action**: Include subtle CTAs in descriptions for service pages

## Implementation

All OG tags are automatically implemented in the `BaseHead.astro` component and inherited by:
- MasterLayout (for policy and service pages)
- BlogPost layout (for blog posts)

Each page file can pass custom:
- `ogType`: "article", "business.business", "website", etc.
- `image`: Custom image URL
- Other custom OG properties if needed

---

This configuration ensures that when Bolty pages are shared on social media platforms (Facebook, LinkedIn, Twitter, WhatsApp), they display with proper titles, descriptions, and thumbnail images.
