import "./globals.css";

export const metadata = {
  title: "Sindhu Export | Industrial Opulence",
  description: "Crafted In INDIA. Worn By The WORLD. Since 2007.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
