// src/app/layout.js
import "@/app/global.css";

const title = "Manal Jaber-Shehayeb";
const url = "https://manal-jaber.github.io/";
const description = "Manal Jaber-Shehayeb Portfolio";
const author = "Manal Jaber-Shehayeb";
const twitter = "@ManalJaber94";
const keywords =
  "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist";

export const metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  publisher: author,
  keywords: keywords.split(","),
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: title,
    description: description,
    creator: twitter,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
