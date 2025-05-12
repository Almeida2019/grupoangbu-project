"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-angbu-orange/20 bg-angbu-blue/95 backdrop-blur supports-[backdrop-filter]:bg-angbu-blue/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo%20Angbu%20Logo-z6UW9QLTrQWAgOEdOFpD3yVLXtJqvB.webp"
            alt="Grupo Angbu Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-angbu-orange">
            Início
          </Link>
          <Link href="/sobre" className="text-sm font-medium text-white/80 transition-colors hover:text-angbu-orange">
            Sobre
          </Link>
          <Link
            href="/empresas"
            className="text-sm font-medium text-white/80 transition-colors hover:text-angbu-orange"
          >
            Empresas
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-white/80 transition-colors hover:text-angbu-orange"
          >
            Contacto
          </Link>
          <Button asChild variant="secondary" className="bg-angbu-orange text-white hover:bg-angbu-orange/80">
            <Link href="/loja">Loja</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-angbu-blue md:hidden", isMenuOpen ? "flex flex-col" : "hidden")}>
        <div className="flex items-center justify-between border-b px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo%20Angbu%20Logo-z6UW9QLTrQWAgOEdOFpD3yVLXtJqvB.webp"
              alt="Grupo Angbu Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className="text-lg font-medium text-white/80 transition-colors hover:text-angbu-orange"
            onClick={toggleMenu}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-lg font-medium text-white/80 transition-colors hover:text-angbu-orange"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            href="/empresas"
            className="text-lg font-medium text-white/80 transition-colors hover:text-angbu-orange"
            onClick={toggleMenu}
          >
            Empresas
          </Link>
          <Link
            href="/contacto"
            className="text-lg font-medium text-white/80 transition-colors hover:text-angbu-orange"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
          <Button asChild variant="secondary" className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
            <Link href="/loja" onClick={toggleMenu}>
              Loja
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
