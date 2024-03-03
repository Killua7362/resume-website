import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body>
        <head>
          <title>Killua&apos;s Resume</title>
          <link rel="icon" href="/website-icon.png" sizes="any" />
        </head>
        <main
         className="w-full flex justify-center items-center py-5 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
