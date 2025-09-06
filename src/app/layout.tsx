import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

/* Updated fonts to match style guide specifications */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Data Engineering Portfolio | Reliable Data Pipelines & Analytics",
  description:
    "I build batch and real-time data pipelines that deliver reliable data for analytics and machine learning.",
  generator: "v0.app",
  keywords: [
    "data engineering",
    "data pipelines",
    "analytics",
    "machine learning",
    "ETL",
    "real-time processing",
    "data architecture",
  ],
  authors: [{ name: "Data Engineer" }],
  creator: "Data Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dataengineer.dev",
    title: "Data Engineering Portfolio | Reliable Data Pipelines & Analytics",
    description:
      "I build batch and real-time data pipelines that deliver reliable data for analytics and machine learning.",
    siteName: "DataEng Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering Portfolio | Reliable Data Pipelines & Analytics",
    description:
      "I build batch and real-time data pipelines that deliver reliable data for analytics and machine learning.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
          {/* <Analytics /> */}
        </Suspense>
      </body>
    </html>
  )
}
