"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const partners = [
  { id: 1, name: "YSAM", logo: "/images/partners/ysam.webp" },
  { id: 2, name: "Angola Telecom", logo: "/images/partners/angola-telecom.webp" },
  { id: 3, name: "Agrogebil", logo: "/images/partners/agrogebil.webp" },
  { id: 4, name: "Grupo APN", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "DSTV", logo: "/images/partners/dstv.webp" },
  { id: 6, name: "MSByte", logo: "/images/partners/msbyte.webp" },
  { id: 7, name: "Paratus", logo: "/images/partners/paratus.webp" },
  { id: 8, name: "Stylus", logo: "/images/partners/stylus.webp" },
  { id: 9, name: "Apolonia", logo: "/images/partners/apolonia.webp" },
  { id: 10, name: "CMA CGM", logo: "/images/partners/cma-cgm.webp" },
  { id: 11, name: "Baker Hughes", logo: "/images/partners/baker-hughes.webp" },
  { id: 12, name: "LM Entretenimentos", logo: "/images/partners/lm-entretenimentos.webp" },
  { id: 13, name: "Movicel", logo: "/images/partners/movicel.webp" },
  { id: 14, name: "Smaut", logo: "/images/partners/smaut.webp" },
  { id: 15, name: "PLB Plando Business", logo: "/images/partners/plb.webp" },
  { id: 16, name: "CJB Tchiowa Serviços", logo: "/images/partners/cjb-tchiowa.webp" },
  { id: 17, name: "KixiCrédito", logo: "/images/partners/kixicredito.webp" },
  { id: 18, name: "INEFOP", logo: "/images/partners/inefop.webp" },
  { id: 19, name: "PDCVAC", logo: "/images/partners/pdcvac.webp" },
  { id: 20, name: "World Vision", logo: "/images/partners/world-vision.webp" },
  { id: 21, name: "INACOM", logo: "/images/partners/inacom.webp" },
]

// Group partners into sets of 5
const partnerGroups = []
for (let i = 0; i < partners.length; i += 5) {
  partnerGroups.push(partners.slice(i, i + 5))
}

export function PartnersSlider() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  // Setup autoplay
  useEffect(() => {
    if (!api) return

    // Reset interval when slide changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())

      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      intervalRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0) // Loop back to start if at the end
        }
      }, 5000) // 5 seconds between slides
    }

    api.on("select", onSelect)

    // Initialize autoplay
    intervalRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0) // Loop back to start if at the end
      }
    }, 5000)

    // Cleanup
    return () => {
      api.off("select", onSelect)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  return (
    <section className="py-16 md:py-24 bg-muted text-white">
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Os Nossos Parceiros de Confiança</h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Trabalhamos com as melhores empresas para garantir a qualidade dos nossos serviços
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partnerGroups.map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="basis-full">
                  <div className="flex justify-center items-center gap-4 py-4">
                    {group.map((partner) => (
                      <div
                        key={partner.id}
                        className="flex justify-center items-center h-24 w-40 bg-white rounded-lg p-4 card-fluid m-2 shadow-md transition-transform hover:scale-105"
                      >
                        {partner.logo.includes("placeholder") ? (
                          <span className="text-angbu-blue font-bold text-center">{partner.name}</span>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {partnerGroups.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${index === current ? "bg-angbu-orange" : "bg-white/30"}`}
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
