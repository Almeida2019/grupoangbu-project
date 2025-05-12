import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, GraduationCapIcon as Graduation, Wifi, Building, Wheat, ShoppingBag } from "lucide-react"

export default function Empresas() {
  return (
    <>
      <section className="geometric-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Empresas do Grupo Angbu</h1>
            <p className="text-lg md:text-xl">
              Conheça as nossas empresas e os serviços que oferecemos em diversas áreas de atuação.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12">
            {/* Angbu Comércio */}
            <div id="angbu-comercio" className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image src="/images/angbu-comercio.webp" alt="Angbu Comércio" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center">
                  <ShoppingBag className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Angbu Comércio</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Fundada em 2018, a Angbu Comércio é especializada na venda de material informático e de
                  telecomunicações. Recentemente, lançámos a nossa nova loja física em Cabinda e a nossa loja virtual,
                  oferecendo uma experiência de compra completa e conveniente.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Na Angbu Comércio, encontrará uma vasta gama de produtos, desde computadores e portáteis até
                  smartphones, tablets, acessórios e muito mais, sempre com a garantia de qualidade e o suporte técnico
                  especializado do Grupo Angbu.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                    <Link href="/loja">Visitar Loja Virtual</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/loja-fisica">Encontrar Loja Física</Link>
                  </Button>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Cab-Ração */}
            <div id="cab-racao" className="grid gap-8 md:grid-cols-2">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image src="/images/cab-racao1.webp" alt="Cab-Ração" fill className="object-cover" />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 flex items-center">
                  <Wheat className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Cab-Ração</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  A Cab-Ração é especializada na produção e venda de rações para animais, utilizando tecnologia avançada
                  e matérias-primas de qualidade para garantir a nutrição adequada dos animais.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Oferecemos uma variedade de rações para diferentes tipos de animais, desde aves e suínos até bovinos e
                  peixes, sempre com foco na qualidade e no bem-estar animal.
                </p>
                <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/empresas/cab-racao">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Angbu Telecomunicação e Electrónica */}
            <div id="angbu-telecomunicacao" className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/angbu-telecomunicacao.webp"
                    alt="Angbu Telecomunicação e Electrónica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center">
                  <Wrench className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Angbu Telecomunicação e Electrónica</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  A Angbu Telecomunicação e Electrónica oferece serviços especializados de reparação de equipamentos
                  eletrónicos, desde smartphones e tablets até computadores, impressoras e outros dispositivos.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Com uma equipa de técnicos qualificados e equipamentos de diagnóstico avançados, garantimos reparações
                  rápidas e eficientes, devolvendo os seus dispositivos ao funcionamento normal.
                </p>
                <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/empresas/angbu-telecomunicacao">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Angbu Training Center */}
            <div id="atc" className="grid gap-8 md:grid-cols-2">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/angbu-training-center.webp"
                    alt="Angbu Training Center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 flex items-center">
                  <Graduation className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Angbu Training Center (ATC)</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  O Angbu Training Center (ATC) é o nosso centro de formação profissional, oferecendo cursos em diversas
                  áreas técnicas, desde informática e telecomunicações até gestão e administração.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Com formadores qualificados e instalações modernas, proporcionamos uma formação de qualidade,
                  preparando os nossos alunos para os desafios do mercado de trabalho.
                </p>
                <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/empresas/atc">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Tchiowa Net */}
            <div id="tchiowa-net" className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image src="/images/tchiowa-net.webp" alt="Tchiowa Net" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center">
                  <Wifi className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Tchiowa Net</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  A Tchiowa Net é a nossa empresa de fornecimento de Internet, oferecendo serviços de alta velocidade e
                  qualidade em Cabinda e Soyo.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Com infraestrutura moderna e suporte técnico especializado, garantimos uma conexão estável e rápida
                  para residências e empresas, contribuindo para a inclusão digital em Angola.
                </p>
                <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/empresas/tchiowa-net">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Angbu Empreitada */}
            <div id="angbu-empreitada" className="grid gap-8 md:grid-cols-2">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="h-[300px] w-full rounded-lg overflow-hidden relative">
                  <Image src="/images/angbu-empreitada.webp" alt="Angbu Empreitada" fill className="object-cover" />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 flex items-center">
                  <Building className="mr-3 h-8 w-8 text-angbu-orange" />
                  <h2>Angbu Empreitada</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  A Angbu Empreitada é a nossa empresa de construção civil e obras públicas, oferecendo serviços de
                  qualidade e compromisso com os prazos estabelecidos.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Com uma equipa de engenheiros e técnicos qualificados, realizamos projetos de construção e
                  reabilitação de edifícios, estradas e outras infraestruturas, contribuindo para o desenvolvimento de
                  Angola.
                </p>
                <Button asChild className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/empresas/angbu-empreitada">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
