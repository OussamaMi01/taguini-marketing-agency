import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import SessionProviderComp from "@/app/provider/nextauth/SessionProvider";
import { AuthDialogProvider } from "@/context/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taguini Marketing - Agence de Marketing Digital",
  description: "Agence de marketing digital spécialisée en stratégie digitale, création de contenu, gestion des médias sociaux et publicité en ligne.",
  keywords: ["marketing digital", "agence marketing", "création de contenu", "social media", "publicité", "SEO", "Sfax", "Tunisie"],
  authors: [{ name: "Taguini Marketing" }],
  creator: "Taguini Marketing",
  publisher: "Taguini Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://taguini.com',
    title: 'Taguini Marketing - Agence de Marketing Digital',
    description: 'Agence de marketing digital spécialisée en stratégie digitale, création de contenu et gestion des médias sociaux.',
    siteName: 'Taguini Marketing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taguini Marketing - Agence de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taguini Marketing - Agence de Marketing Digital',
    description: 'Agence de marketing digital spécialisée en stratégie digitale, création de contenu et gestion des médias sociaux.',
    images: ['/images/twitter-image.jpg'],
    creator: '@taguinimarketing',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#EF4444',
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#EF4444" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <NextTopLoader 
          color="#EF4444" 
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #EF4444,0 0 5px #EF4444"
        />
        <AuthDialogProvider>
          <SessionProviderComp session={session}>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
              storageKey="taguini-theme"
              disableTransitionOnChange={false}
            >
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#1F2937',
                    color: '#F9FAFB',
                    borderRadius: '12px',
                    border: '1px solid #374151',
                  },
                  success: {
                    iconTheme: {
                      primary: '#10B981',
                      secondary: '#F9FAFB',
                    },
                  },
                  error: {
                    iconTheme: {
                      primary: '#EF4444',
                      secondary: '#F9FAFB',
                    },
                  },
                }}
              />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}