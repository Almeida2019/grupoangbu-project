import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function LojaFisica() {
  return (
    <>
      <section className="fluid-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Visite a Nossa Nova Loja Física Angbu Comércio</h1>
            <p className="text-lg md:text-xl">
              Conheça o nosso espaço físico em Cabinda e descubra uma experiência de compra única para produtos de
              informática e telecomunicações.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">Informações da Loja</h2>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-6 w-6 shrink-0 text-angbu-orange" />
                      <div>
                        <h3 className="mb-1 font-semibold">Morada</h3>
                        <p className="text-muted-foreground">Bairro Deolinda Rodrigues, Rua Gago Coutinho, Cabinda</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="mr-3 h-6 w-6 shrink-0 text-angbu-orange" />
                      <div>
                        <h3 className="mb-1 font-semibold">Horário de Funcionamento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h00 - 17h00
                          <br />
                          Sábado: 9h00 - 13h00
                          <br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="mr-3 h-6 w-6 shrink-0 text-angbu-orange" />
                      <div>
                        <h3 className="mb-1 font-semibold">Telefone</h3>
                        <p className="text-muted-foreground">
                          +244 946 503 710
                          <br />
                          +244 913 226 684
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="mr-3 h-6 w-6 shrink-0 text-angbu-orange" />
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:angbu@grupoangbu.com" className="hover:text-angbu-orange">
                            angbu@grupoangbu.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h2>O Que Oferecemos</h2>
                <p className="text-muted-foreground">
                  Na nossa loja física, encontrará uma vasta gama de produtos informáticos e de telecomunicações, desde
                  computadores e portáteis até smartphones, tablets, acessórios e muito mais.
                </p>
                <p className="text-muted-foreground">
                  A nossa equipa de especialistas está pronta para o ajudar a encontrar a solução perfeita para as suas
                  necessidades tecnológicas.
                </p>
                <Button asChild className="mt-4 bg-angbu-orange text-white hover:bg-angbu-orange/90">
                  <Link href="/loja">Explorar Produtos Online</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loja%20Fi%CC%81sica-QgqLydrvY1WkPiLDipKByh3CEJqBsc.webp"
                    alt="Loja Física Angbu Comércio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="h-[400px] overflow-hidden rounded-lg bg-muted">
                {/* Aqui seria inserido um mapa do Google Maps */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Mapa do Google será carregado aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
