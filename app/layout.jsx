import "@/app/styles/helpers.css";
import "@/app/styles/_global.css";
import "@/app/styles/mainpage.css";
import "@/app/styles/work.css";
import "@/app/styles/contact.css";
import "@/app/styles/aboutme.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Luigi Simiani | Photography",
  description:
    "Portfolio of Luigi Simiani, professional photographer based in Amsterdam.",
  keywords: [
    "Luigi Simiani",
    "photographer",
    "photography portfolio",
    "fashion photography",
    "street photography",
    "commercial photography",
    "photography in Amsterdam",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://luigisimiani.com",
    siteName: "Luigi Simiani Photography",
    // TODO
    // images: [
    //   {
    //     url: "https://luigisimiani.com/og-default.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Luigi Simiani Photography",
    //   },
    // ],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
