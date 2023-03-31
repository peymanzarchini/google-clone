import Footer from "@/components/footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Google Clone</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
