# ANtech Corporate Website

Welcome to the official website for ANtech, a leading technology solutions provider based in Pakistan. This website showcases our range of SaaS products, ERP systems, and digital services.

## Project Overview

This is a Next.js 16 application built with TypeScript, Tailwind CSS, and the App Router architecture. The site features:

- Professional presentation of ANtech's products and services
- Clear distinction between in-house products and Vision Plus solutions
- Contact form with validation and rate limiting
- SEO-optimized pages with unique metadata
- Mobile-responsive design
- Strategic partnership highlighting with Vision Plus

## Features

- **Product Showcase**: Detailed pages for POS, FBR Invoicing, ERP, HCM, HMIS, and REMS
- **Service Catalog**: Information about Web Development, SEO, Hosting, and SMM services
- **Contact System**: Form with validation and API endpoint
- **Blog Section**: Articles and company updates
- **About Page**: Company information and partnership details
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom built with Tailwind
- **Deployment**: Vercel (recommended) or any Node.js hosting platform

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd antech-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add environment variables:
   ```env
   # Contact form submission endpoint
   CONTACT_FORM_API_URL=<your-contact-form-api-endpoint>

   # Google Maps API key (for contact page)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-google-maps-api-key>

   # Analytics (optional)
   NEXT_PUBLIC_ANALYTICS_ID=<your-analytics-id>
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs the linter

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with navigation
│   ├── page.tsx         # Home page
│   ├── about/
│   ├── services/
│   ├── products/
│   ├── blog/
│   ├── contact/
│   └── api/             # API routes
├── components/          # Reusable UI components
│   ├── ui/              # Basic UI components
│   ├── forms/           # Form components
│   ├── seo/             # SEO components
│   └── sections/        # Page sections
├── lib/                 # Utilities and constants
├── styles/              # Global styles
└── types/               # Type definitions
```

## Environment Variables

- `CONTACT_FORM_API_URL`: Endpoint for contact form submissions
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Google Maps API key for the contact page
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics tracking ID (optional)

## Contributing

We welcome contributions to improve the ANtech website. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Performance

This website is optimized for performance with:
- 90+ Lighthouse scores
- Image optimization
- Code splitting
- Minimal third-party dependencies
- Efficient component rendering

## License

This project is proprietary to ANtech. All rights reserved.