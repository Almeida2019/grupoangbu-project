import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingBag, Store } from "lucide-react"
import { FeaturedProductsSlider } from "@/components/featured-products-slider"
import { CompaniesSlider } from "@/components/companies-slider"
import { PartnersSlider } from "@/components/partners-slider"

export default function Home() {
  return (
    <>
      {/* Hero Section - Angbu Comércio Highlight */}
      <section className="relative overflow-hidden bg-angbu-blue py-20 text-white md:py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Angbu Comércio: A Sua Nova Loja de Informática e Telecomunicações - Física e Online!
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Descubra a nova experiência de compra de material informático e telecomunicações, com a confiança do Grupo
              Angbu (fundado em 2017).
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-angbu-orange text-white hover:bg-angbu-orange/90 font-medium">
                <Link href="/loja">Visitar Loja Virtual</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-angbu-blue"
              >
                <Link href="/loja-fisica">Encontrar Loja Física</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <FeaturedProductsSlider />

      {/* Loja Física e Virtual Preview */}
      <section className="py-16 md:py-24 bg-muted text-white">
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Duas Formas de Comprar, Uma Experiência de Qualidade</h2>
            <p className="mx-auto max-w-3xl text-lg text-white/80">
              Na Angbu Comércio, oferecemos a flexibilidade de comprar os melhores produtos de informática e
              telecomunicações da forma que preferir.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Loja Física Card */}
            <Card className="overflow-hidden bg-muted border-angbu-orange/20 card-fluid h-full flex flex-col">
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loja%20Fi%CC%81sica-QgqLydrvY1WkPiLDipKByh3CEJqBsc.webp"
                  alt="Loja Física Angbu Comércio"
                  fill
                  className="object-contain bg-gray-900/50"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex items-center">
                  <Store className="mr-2 h-6 w-6 text-angbu-orange" />
                  <h3 className="text-2xl font-bold">Nova Loja Física</h3>
                </div>
                <p className="mb-6 text-white/80">
                  Visite a nossa nova loja em Cabinda e receba atendimento personalizado dos nossos especialistas.
                  Experimente os produtos antes de comprar!
                </p>
                <div className="mt-auto">
                  <Button asChild variant="outline" className="group w-full">
                    <Link href="/loja-fisica">
                      Saiba Mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Loja Virtual Card */}
            <Card className="overflow-hidden bg-muted border-angbu-orange/20 card-fluid h-full flex flex-col">
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loja%20Virtual-9OzqLiotBJQ15mu8El7zapxiCrta5a.webp"
                  alt="Loja Virtual Angbu Comércio"
                  fill
                  className="object-contain bg-gray-900/50"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex items-center">
                  <ShoppingBag className="mr-2 h-6 w-6 text-angbu-orange" />
                  <h3 className="text-2xl font-bold">Nova Loja Virtual</h3>
                </div>
                <p className="mb-6 text-white/80">
                  Compre online com facilidade e segurança. Navegue pelo nosso catálogo completo de produtos
                  informáticos e de telecomunicações.
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="group bg-angbu-orange text-white hover:bg-angbu-orange/90 font-medium w-full"
                  >
                    <Link href="/loja">
                      Comprar Agora{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Companies Slider */}
      <CompaniesSlider />

      {/* Partners Slider */}
      <PartnersSlider />

      {/* CTA Section */}
      <section className="bg-angbu-blue py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Pronto para Descobrir a Nova Angbu Comércio?</h2>
            <p className="mb-8 text-lg">
              Visite a nossa loja física ou explore a nossa loja virtual para encontrar os melhores produtos de
              informática e telecomunicações.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-angbu-orange text-white hover:bg-angbu-orange/90 font-medium">
                <Link href="/loja">Visitar Loja Virtual</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-angbu-blue"
              >
                <Link href="/loja-fisica">Encontrar Loja Física</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
