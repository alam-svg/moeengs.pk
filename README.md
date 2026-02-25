# Moeen GS - Premium Cosmetics & Beauty Store Website

A clean, modern, professional static website for a cosmetics and general store business. Built with pure HTML, CSS, and vanilla JavaScript - no frameworks required.

## 📋 Features

- **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- **Modern Design** - Elegant cosmetics theme with professional aesthetics
- **Fast Loading** - Optimized for performance with minimal dependencies
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Easy to Deploy** - Static files ready for any hosting platform
- **Customizable** - Well-commented code for easy modifications

## 📁 File Structure

```
moeen-gs-website/
│
├── index.html          # Home page
├── about.html          # About Us page
├── contact.html        # Contact page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── logo.png            # Your logo (to be added)
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Add Your Logo

Replace `logo.png` with your actual business logo. The logo should be:
- Square or horizontal format
- PNG format with transparent background (recommended)
- Minimum 300x300 pixels for best quality
- File name must be exactly `logo.png`

If the logo is not found, a fallback design with "MGS" letters will display automatically.

### 2. Update Business Information

Open `script.js` and update the `SITE_CONFIG` object (lines 237-256) with your information:

```javascript
const SITE_CONFIG = {
    whatsappNumber: '1234567890',           // Your WhatsApp number
    phoneNumber: '+1 (234) 567-890',        // Your phone number
    email: 'info@moeengs.com',              // Your email
    address: '123 Main St, City, Country',  // Your address
    mapEmbedUrl: 'YOUR_GOOGLE_MAPS_URL',    // Google Maps embed URL
    hours: {
        weekday: '9:00 AM - 9:00 PM',
        weekend: '10:00 AM - 6:00 PM'
    }
};
```

### 3. Add Google Maps

To add your store location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" button
4. Select "Embed a map"
5. Copy the iframe code
6. In `contact.html`, find the iframe with `id="google-map"` (around line 117)
7. Replace the `src` attribute with your embed URL

OR update the `mapEmbedUrl` in `SITE_CONFIG` in `script.js`.

### 4. Deploy to Hosting

Choose any of these free hosting options:

#### **Option A: Cloudflare Pages**
1. Create account at [Cloudflare Pages](https://pages.cloudflare.com/)
2. Upload your files or connect GitHub repository
3. Deploy - your site will be live instantly!

#### **Option B: GitHub Pages**
1. Create a GitHub account
2. Create a new repository named `moeen-gs-website`
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select branch `main` and folder `/root`
6. Your site will be live at `https://yourusername.github.io/moeen-gs-website`

#### **Option C: Netlify**
1. Create account at [Netlify](https://www.netlify.com/)
2. Drag and drop your folder into Netlify
3. Site goes live immediately!

#### **Option D: Vercel**
1. Create account at [Vercel](https://vercel.com/)
2. Import project from GitHub or upload files
3. Deploy with one click

## 🎨 Customization Guide

### Colors

All colors are defined in CSS variables at the top of `style.css`:

```css
:root {
    --primary-color: #c9a173;      /* Main brand color (gold) */
    --primary-dark: #a67d52;       /* Darker shade */
    --primary-light: #e5d4bc;      /* Lighter shade */
    --secondary-color: #2d2d2d;    /* Dark gray */
    --accent-color: #d4af37;       /* Gold accent */
    /* ... more colors ... */
}
```

To change the color scheme, simply update these values.

### Fonts

The website uses:
- **Cormorant Garamond** (serif) - For headings
- **Montserrat** (sans-serif) - For body text

To change fonts, update the Google Fonts link in each HTML file and the CSS variables in `style.css`.

### Content

To modify page content:

1. **Home Page** - Edit `index.html`
   - Hero section (lines 31-72)
   - About preview (lines 74-109)
   - Product categories (lines 111-170)

2. **About Page** - Edit `about.html`
   - Our story (lines 35-68)
   - Mission & vision (lines 70-100)
   - Values (lines 102-145)

3. **Contact Page** - Edit `contact.html`
   - Contact info cards (lines 46-130)
   - Contact form fields (lines 138-189)

### Flash Banner

To modify or remove the flash banner:

**To change text:** Edit the `<p>` tag in the flash banner section (found at the top of each HTML file)

**To remove:** Delete the entire `<div class="flash-banner">...</div>` section from all HTML files

## 📱 Mobile Navigation

The mobile menu automatically activates on screens smaller than 968px. The hamburger icon appears and the menu slides in from the left.

## 📧 Contact Form

The contact form currently uses frontend-only validation. To make it functional:

1. **Option A: Use a form service**
   - [Formspree](https://formspree.io/) - Free form backend
   - [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify
   - [Web3Forms](https://web3forms.com/) - Free email forms

2. **Option B: Connect to your backend**
   - Uncomment the fetch code in `script.js` (lines 110-120)
   - Replace `/api/contact` with your endpoint
   - Handle the POST request on your server

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images:**
   - Compress your logo using [TinyPNG](https://tinypng.com/)
   - Keep file size under 100KB

2. **Enable Caching:**
   - Most hosting platforms do this automatically
   - For custom servers, set cache headers

3. **Use a CDN:**
   - Cloudflare automatically provides CDN
   - Improves global loading speed

## 🎯 SEO Tips

1. **Update Meta Tags:**
   - Each HTML file has meta tags in the `<head>` section
   - Customize descriptions for each page
   - Add relevant keywords

2. **Add Sitemap:**
   - Create `sitemap.xml` with your pages
   - Submit to Google Search Console

3. **Google My Business:**
   - Claim your business listing
   - Link to your website

## 📞 Support

If you need help with customization:

1. Check the commented code - all sections are clearly labeled
2. Modern browser dev tools (F12) help debug issues
3. Consider hiring a web developer for advanced customizations

## 📄 License

This website template is provided as-is for Moeen GS business use.

## 🔄 Updates

To update content:
1. Edit the HTML files directly
2. Save changes
3. Re-upload to your hosting (or push to GitHub if using GitHub Pages)
4. Changes appear immediately

## ✅ Checklist Before Going Live

- [ ] Logo added and displays correctly
- [ ] All contact information updated
- [ ] Google Maps embedded
- [ ] WhatsApp number configured
- [ ] Phone numbers updated
- [ ] Email addresses updated
- [ ] Business hours correct
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Contact form working (if using backend)
- [ ] All links working
- [ ] Spell-checked all content
- [ ] SEO meta tags customized

## 🌟 Pro Tips

1. **Regular Updates:** Update business hours, contact info when they change
2. **Add Products:** Consider adding a products page with your offerings
3. **Blog Section:** Add a blog for SEO and customer engagement
4. **Analytics:** Add Google Analytics to track visitors
5. **Social Media:** Add social media links to footer
6. **Newsletter:** Consider adding email newsletter signup
7. **Reviews:** Add customer testimonials section
8. **E-commerce:** If selling online, consider integrating Shopify Buy Button

---

**Built with care for Moeen GS** 🌸

For questions or support, contact your web developer.
