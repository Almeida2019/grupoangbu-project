"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Wrench, GraduationCapIcon, Wifi, Building, ShoppingBag } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const companies = [
  {
    id: 1,
    name: "Angbu Comércio",
    description: "Venda de material informático e de telecomunicações, com loja física e virtual.",
    icon: ShoppingBag,
    image: "/images/angbu-comercio.webp",
    link: "/empresas/angbu-comercio",
  },
  {
    id: 2,
    name: "Cab-Ração",
    description: "Produção e comercialização de rações para animais.",
    icon: Wheat,
    image: "/images/cab-racao1.webp",
    link: "/empresas/cab-racao",
  },
  {
    id: 3,
    name: "Angbu Telecomunicação e Electrónica",
    description: "Serviços de reparação e manutenção de equipamentos eletrónicos.",
    icon: Wrench,
    image: "/images/angbu-telecomunicacao.webp",
    link: "/empresas/angbu-telecomunicacao",
  },
  {
    id: 4,
    name: "Angbu Training Center (ATC)",
    description: "Centro de formação profissional com diversos cursos técnicos.",
    icon: GraduationCapIcon,
    image: "/images/angbu-training-center.webp",
    link: "/empresas/atc",
  },
  {
    id: 5,
    name: "Tchiowa Net",
    description: "Fornecimento de serviços de Internet em Cabinda e Soyo.",
    icon: Wifi,
    image: "/images/tchiowa-net.webp",
    link: "/empresas/tchiowa-net",
  },
  {
    id: 6,
    name: "Angbu Empreitada",
    description: "Serviços de construção civil e obras públicas.",
    icon: Building,
    image: "/images/angbu-empreitada.webp",
    link: "/empresas/angbu-empreitada",
  },
]

export function CompaniesSlider() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const startAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        api.scrollNext()
      }, 5000)
    }

    startAutoplay()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (!api) return

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 5000)
  }

  return (
    <section className="py-16 md:py-24 fluid-bg text-white">
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Conheça as Empresas do Grupo Angbu</h2>
          <p className="mx-auto max-w-3xl text-lg">
            Um conglomerado de empresas angolanas comprometidas com a excelência
          </p>
        </div>

        <div
          className="relative mx-auto max-w-5xl px-6 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {companies.map((company) => {
                const Icon = company.icon

                return (
                  <CarouselItem key={company.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                    <div className="h-full">
                      <Card className="overflow-hidden border-none bg-angbu-blue/50 card-fluid h-full flex flex-col">
                        <div
                          className="relative w-full"
                          style={{
                            height: "240px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#111",
                          }}
                        >
                          <Image
                            src={company.image || "/placeholder.svg"}
                            alt={company.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex flex-col items-center text-center">
                            <div className="rounded-full bg-angbu-blue/80 p-4 -mt-10 mb-4 border-4 border-angbu-blue shadow-md">
                              <Icon className="h-8 w-8 text-angbu-orange" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                            <p className="text-white/80">{company.description}</p>
                          </div>

                          <div className="mt-auto pt-5">
                            <Button
                              asChild
                              variant="outline"
                              className="border-angbu-orange text-angbu-orange hover:bg-angbu-orange hover:text-white w-full"
                            >
                              <Link href={company.link}>Saber Mais</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                  index === current ? "bg-angbu-orange" : "bg-white/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
