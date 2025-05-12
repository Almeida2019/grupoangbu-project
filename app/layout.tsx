import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grupo Angbu - O Seu Parceiro de Confiança",
  description:
    "Grupo Angbu: Informática, Construção Civil, Formação Profissional, Internet, Produção de Ração Animal e mais. Conheça a nova Angbu Comercia - agora com loja física e virtual!",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
