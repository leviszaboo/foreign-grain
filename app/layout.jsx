import "@/app/styles/helpers.css";
import "@/app/styles/_global.css";
import "@/app/styles/mainpage.css";
import "@/app/styles/work.css";
import "@/app/styles/contact.css";
import "@/app/styles/aboutme.css";
import Header from "./components/Header/Header";
import Script from "next/script";

const SITE_URL = "https://luigisimiani.com";
const SITE_NAME = "Luigi Simiani Photography";
const SITE_DESCRIPTION =
  "Portfolio of Luigi Simiani, a professional photographer based in Amsterdam specializing in fashion, editorial, and commercial photography.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luigi Simiani | Professional Photographer Amsterdam",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Luigi Simiani",
    "photographer Amsterdam",
    "fashion photography",
    "editorial photography",
    "commercial photography",
    "portrait photography",
    "Amsterdam photographer",
    "professional photography",
    "photography portfolio",
  ],
  authors: [{ name: "Luigi Simiani", url: SITE_URL }],
  creator: "Luigi Simiani",
  publisher: "Luigi Simiani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Luigi Simiani | Professional Photographer Amsterdam",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luigi Simiani Photography Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luigi Simiani",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: "Professional Photographer",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  sameAs: [
    // Add social media profiles when available
    "https://instagram.com/goombasteppa",
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
