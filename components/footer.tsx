import Link from "next/link"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-angbu-blue text-white border-t border-angbu-orange/20 fluid-bg">
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              GRUPO ANGBU<span className="text-angbu-orange">, LDA</span>
            </span>
            <p className="text-sm">
              Fundado a 18 de abril de 2017 por Engº Ângelo Gabriel Buanga. Empresa angolana sediada em Cabinda.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-angbu-orange"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-angbu-orange"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-angbu-orange"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Empresas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/empresas#angbu-comercio" className="hover:text-angbu-orange">
                  Angbu Comércio
                </Link>
              </li>
              <li>
                <Link href="/empresas#cab-racao" className="hover:text-angbu-orange">
                  Cab-Ração
                </Link>
              </li>
              <li>
                <Link href="/empresas#angbu-telecomunicacao" className="hover:text-angbu-orange">
                  Angbu Telecomunicação e Electrónica
                </Link>
              </li>
              <li>
                <Link href="/empresas#atc" className="hover:text-angbu-orange">
                  Angbu Training Center (ATC)
                </Link>
              </li>
              <li>
                <Link href="/empresas#tchiowa-net" className="hover:text-angbu-orange">
                  Tchiowa Net
                </Link>
              </li>
              <li>
                <Link href="/empresas#angbu-empreitada" className="hover:text-angbu-orange">
                  Angbu Empreitada
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-angbu-orange">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-angbu-orange">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="hover:text-angbu-orange">
                  Nossas Empresas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-angbu-orange">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/loja" className="hover:text-angbu-orange">
                  Loja Virtual
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-angbu-orange" />
                <span>Bairro Deolinda Rodrigues, Rua Gago Coutinho, Cabinda</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-angbu-orange" />
                <span>+244 946 503 710 | +244 913 226 684</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-angbu-orange" />
                <span>+244 927 919 117 | +244 990 919 117</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-angbu-orange" />
                <a href="mailto:angbu@grupoangbu.com" className="hover:text-angbu-orange">
                  angbu@grupoangbu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Grupo Angbu, LDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
