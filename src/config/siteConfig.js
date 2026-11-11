/**
 * CamMap Central Site Configuration
 * 
 * Update `SITE_URL` when connecting your custom production domain
 * (e.g. 'https://cammap.emeacollege.ac.in' or your custom Vercel domain).
 * 
 * This constant serves as the single source of truth for:
 * - Canonical URLs
 * - Open Graph & Social sharing URLs
 * - Sitemap and Robots.txt reference
 * - Schema.org JSON-LD structured data
 */

export const SITE_CONFIG = {
  // Production domain for CamMap on Vercel
  siteUrl: "https://cammap-react.vercel.app",
  siteName: "CamMap",
  title: "CamMap — EMEA College Campus Map & Navigation",
  description:
    "CamMap is an interactive campus map and navigation tool for EMEA College. Find buildings, departments, facilities, and walking routes across campus.",
  institution: "EMEA College of Arts and Science, Kondotti",
  institutionUrl: "https://emeacollege.ac.in/",
  author: "Muhammed Swalih P",
  themeColor: "#0d1b2a",
  ogImage: "/emea.png",
  // Google Search Console verification token placeholder (paste when obtained from Google)
  googleSiteVerification: "",
};

export default SITE_CONFIG;
