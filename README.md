# Next.js Template - Modern Landing Page

A modern and optimized Next.js 16 template for quickly creating professional landing pages. Built with the latest technologies and best practices.

## 🚀 Why this template?

This template allows you to:

- **Save time**: Complete structure ready to use
- **Stay modern**: Next.js 16, React 19, TypeScript
- **Be performant**: Built-in SEO and performance optimizations
- **Have professional design**: Modern UI/UX with Tailwind CSS
- **Be flexible**: Easily customizable for your needs

## 📦 Installation and usage

### 1. Clone the template

```bash
git clone https://github.com/virtuosa-agency/template-next-js.git
cd template-next-js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables (optional)

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://www.yourdomain.com

# Required only for the contact form email sending via Resend
RESEND_API_KEY=your_resend_api_key
MAIL_TO=your_email@example.com
MAIL_FROM=noreply@yourdomain.com
```

> **Note**: Without Resend variables, the contact form still validates inputs but won't send emails. `NEXT_PUBLIC_BASE_URL` is used for SEO (canonical, Open Graph, JSON-LD).

### 4. Start the project

```bash
npm run dev
```

Your site will be accessible at `http://localhost:3000`

## 🛠️ Customization

### Colors and design

Modify `tailwind.config.ts` to adapt the color palette:

```typescript
colors: {
  primary: "#FDFDFD",    // Primary color
  secondary: "#121212",  // Secondary color
  tertiary: "#EFEFEF",   // Tertiary color
}
```

### Content

- **Navigation**: `app/data/navigation.ts`
- **Contact information**: `app/data/contact-infos.ts`
- **Sections**: `app/(landing-page)/sections/`

### Contact form

The form is already configured with:

- Field validation (Zod)
- Anti-spam protection (honeypot)
- Rate limiting
- Professional email templates

## 🆘 Need help?

Are you stuck? Do you want to be trained on this template or Next.js in general?

**We're here to help!**

Contact us directly at [contact@virtuosa.fr](mailto:contact@virtuosa.fr) for:

- Technical support
- Custom training
- Custom development
- Specific optimizations

## ✅ Post-installation checklist

Once the template is installed, don't forget to:

- [ ] **Create your custom sections** in `app/(landing-page)/sections/` - This is the most important step! Replace the demo sections with your own content
- [ ] **Customize colors** in `tailwind.config.ts`
- [ ] **Modify contact information** in `app/data/contact-infos.ts`
- [ ] **Adapt navigation** in `app/data/navigation.ts`
- [ ] **Replace logo** in `app/assets/images/logos/`
- [ ] **Replace social preview** `public/images/og.png` (1200×630) — Open Graph, Twitter and JSON-LD use this file
- [ ] **Configure Resend** for email sending (optional)
- [ ] **Configure domain** in environment variables
- [ ] **Test contact form**
- [ ] **Optimize images** for production

### SEO (real project)

- [ ] Set `NEXT_PUBLIC_BASE_URL` to the production URL (no trailing slash)
- [ ] Replace placeholders in `app/utils/meta/metadata.ts` and `jsonLd.ts` (name, address, `sameAs`, Twitter)
- [ ] Confirm `siteConfig.ogImage` still matches your file under `public/`
- [ ] After deploy: submit `/sitemap.xml` in Search Console and validate JSON-LD (Rich Results Test)

## 🛡️ Included features

- ✅ **Responsive design** mobile-first
- ✅ **Smooth animations** with Motion (formerly Framer Motion)
- ✅ **Functional contact form**
- ✅ **SEO setup** (Metadata API, JSON-LD, `robots.ts`, `sitemap.ts`, OG image)
- ✅ **Performance optimized** (Next.js 16)
- ✅ **TypeScript** for code safety
- ✅ **ESLint + Prettier** for quality
- ✅ **Rate limiting** on API

---

**Feel free to share your feedback! This template is meant to evolve and improve over time.**
