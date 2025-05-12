"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

// Helper function to format price
const formatPrice = (priceString) => {
  const price = parseFloat(priceString);
  if (isNaN(price)) {
    return "Preço indisponível";
  }
  return price.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AKZ";
};

// Helper function to extract image URL
const extractImageUrl = (imageField) => {
  if (imageField && imageField.startsWith('["') && imageField.endsWith('"]')) {
    try {
      const arr = JSON.parse(imageField);
      return arr[0] || "/placeholder.svg";
    } catch (e) {
      // Fallback for simple "[\"url\"]" or other non-JSON but bracketed strings
      let cleanedString = imageField.replace(/^\["|"\]$/g, ''); // Remove [" and "]
      cleanedString = cleanedString.replace(/^\[|\]$/g, ''); // Remove [ and ] if they are still there
      cleanedString = cleanedString.replace(/^"|"$/g, ''); // Remove " and " if they are still there
      return cleanedString || "/placeholder.svg";
    }
  }
  return imageField || "/placeholder.svg";
};

// Helper function to create relative link
const createProductLink = (absoluteUrl) => {
  try {
    const url = new URL(absoluteUrl);
    return `/loja${url.pathname}`;
  } catch (e) {
    if (typeof absoluteUrl === 'string' && absoluteUrl.startsWith('/')) {
      return absoluteUrl;
    }
    return "/loja/produto-indisponivel";
  }
};

const allProductsData = [
  {
    csvName: "ROUTER MI WIFI 4A AC1200 BRANCO",
    csvPrice: "29500.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/162050-198-198?v=638730536437070000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/router-mi-wifi-4a-ac1200-branco/p",
    description: "Router Xiaomi Mi WiFi 4A AC1200, cor branca, alta velocidade."
  },
  {
    csvName: "Router Wifi AC1200 Dual Band",
    csvPrice: "35800.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/167091-198-198?v=638774518264730000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/router-wifi-ac1200-dual-band/p",
    description: "Router TP-Link Wifi AC1200 Dual Band para conexões estáveis."
  },
  {
    csvName: "Toner 17a preto (cf217a)",
    csvPrice: "78450.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165417-198-198?v=638757239899930000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-17a-preto-cf217a/p",
    description: "Toner HP 17A Preto Original LaserJet (CF217A)."
  },
  {
    csvName: "Toner 415a preto lj pro m45x/m47x (2 400 pag)",
    csvPrice: "96500.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164323-198-198?v=638752149887870000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner--415a-preto-lj-pro-m45xm47x-2-400-pag/p",
    description: "Toner HP 415A Preto para LaserJet Pro M45x/M47x."
  },
  {
    csvName: "Toner 415a amarelo lj pro m45x/m47x (2.100 pag)",
    csvPrice: "135450.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164530-198-198?v=638753874008630000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-amarelo-lj-pro-m45xm47x-2100-pag/p",
    description: "Toner HP 415A Amarelo para LaserJet Pro M45x/M47x."
  },
  {
    csvName: "Toner 415a ciano lj pro m45x/m47x (2 100 pag)",
    csvPrice: "135450.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/162608-198-198?v=638737573426200000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-ciano-lj-pro-m45xm47x-2-100-pag/p",
    description: "Toner HP 415A Ciano para LaserJet Pro M45x/M47x."
  },
  {
    csvName: "Toner 415a magenta lj pro m45x/m47x (2 100 pag)",
    csvPrice: "135450.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163674-198-198?v=638748618283500000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-magenta-lj-pro-m45xm47x-2-100-pag/p",
    description: "Toner HP 415A Magenta para LaserJet Pro M45x/M47x."
  },
  {
    csvName: "Tinteiro 650 2515/3515 color (cz102ae)",
    csvPrice: "16150.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/158640-198-198?v=638676152274570000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-650-25153515--color-cz102ae/p",
    description: "Tinteiro HP 650 Color Original (CZ102AE)."
  },
  {
    csvName: "Toner 44a m15x/m28x preto",
    csvPrice: "61750.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164751-198-198?v=638754014234330000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-44a-m15xm28x-preto/p",
    description: "Toner HP 44A Preto para impressoras M15x/M28x."
  },
  {
    csvName: "Toner 85a 1102/m1132/m1212nf (ce285a)",
    csvPrice: "85600.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/166393-198-198?v=638759998305130000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-85a-1102m1132m1212nf-ce285a/p",
    description: "Toner HP 85A Preto Original (CE285A)."
  },
  {
    csvName: "Toner 59a laserjet pro preto",
    csvPrice: "135800.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165212-198-198?v=638755628585500000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-59a-laserjet-pro-preto/p",
    description: "Toner HP 59A Preto para LaserJet Pro."
  },
  {
    csvName: "Tinteiro 650 2515/3515 preto (cz101ae)",
    csvPrice: "18500.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/158649-198-198?v=638676152439170000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-650-25153515-preto-cz101ae/p",
    description: "Tinteiro HP 650 Preto Original (CZ101AE)."
  },
  {
    csvName: "Tinteiro 652 3835 tricolour (f6v24ae)",
    csvPrice: "17000.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164440-198-198?v=638753840283370000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-652-3835-tricolour-f6v24ae/p",
    description: "Tinteiro HP 652 Tricolor Original (F6V24AE)."
  },
  {
    csvName: "Tinteiro 123 2000/3000 preto (f6v17ae)",
    csvPrice: "17200.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163768-198-198?v=638748671617100000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-123-20003000-preto-f6v17ae/p",
    description: "Tinteiro HP 123 Preto Original (F6V17AE)."
  },
  {
    csvName: "Tinteiro 123 2000/3000 tricolour (f6v16ae)",
    csvPrice: "19350.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164744-198-198?v=638754013032830000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-123-20003000-tricolour--f6v16ae/p",
    description: "Tinteiro HP 123 Tricolor Original (F6V16AE)."
  },
  {
    csvName: "Tinteiro 652 3835 preto (f6v25ae)",
    csvPrice: "19950.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164483-198-198?v=638753854757800000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-652-3835-preto-f6v25ae/p",
    description: "Tinteiro HP 652 Preto Original (F6V25AE)."
  },
  {
    csvName: "Tinteiro 122 1000/2000/3000 preto (ch561he)",
    csvPrice: "18950.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165032-198-198?v=638754868627700000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-122-100020003000-preto-ch561he/p",
    description: "Tinteiro HP 122 Preto Original (CH561HE)."
  },
  {
    csvName: "Tinteiro 122 1000/2000/3000 tri-color (ch562he)",
    csvPrice: "22500.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163758-198-198?v=638748668849200000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-122-100020003000-tri-color-ch562he/p",
    description: "Tinteiro HP 122 Tricolor Original (CH562HE)."
  },
  {
    csvName: "Tinteiro 305 3ym61ae preto 2720",
    csvPrice: "15000.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164712-198-198?v=638753999597100000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-305-3ym61ae-preto-2720/p",
    description: "Tinteiro HP 305 Preto Original (3YM61AE) para série 2720."
  },
  {
    csvName: "Tinteiro 305 3ym60ae color 2720",
    csvPrice: "15000.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165173-198-198?v=638755614938400000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-305-3ym60ae-color-2720/p",
    description: "Tinteiro HP 305 Color Original (3YM60AE) para série 2720."
  },
  {
    csvName: "Toner t-2309 preto",
    csvPrice: "33750.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/160035-198-198?v=638676177187800000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-t-2309-preto/p",
    description: "Toner Toshiba T-2309 Preto Original."
  },
  {
    csvName: "Toner t-2323 e-studio 2323/2823",
    csvPrice: "32950.00",
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163786-198-198?v=638748732679070000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-t-2323-e-studio-23232823/p",
    description: "Toner Toshiba T-2323 para e-Studio 2323/2823."
  },
  {
    csvName: "Papel para Fotocopiadora A4 80grs",
    csvPrice: "4375.00",
    csvImage: "[\"https://grupoysam.com/wp-content/uploads/2025/05/Resma.webp\"]", // MODIFIED LINE
    csvLink: "https://www.ncrangola.com/papel-para-fotocopiadora-a4-75grs/p",
    description: "Resma de Papel A4 80grs para fotocopiadora e impressão."
  }
];

const featuredProducts = allProductsData.map((p, index) => ({
  id: index + 1,
  name: p.csvName,
  description: p.description || `Consumível original ${p.csvName.includes("HP") ? "HP" : p.csvName.includes("Toshiba") ? "Toshiba" : "de qualidade"}.`,
  price: formatPrice(p.csvPrice),
  image: extractImageUrl(p.csvImage),
  link: createProductLink(p.csvLink),
}));


export function FeaturedProductsSlider() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
    <section className="py-16 md:py-24 fluid-bg text-white">
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Produtos em Destaque na Angbu Comércio</h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Descubra os nossos produtos mais populares de informática e telecomunicações
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
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <Card className="overflow-hidden h-full border-angbu-orange/20 card-fluid flex flex-col">
                    <div className="relative aspect-square bg-white w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="h-[150px] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-sm text-white/80 mb-2">{product.description}</p>
                        <div className="text-lg font-bold text-angbu-orange">{product.price}</div>
                      </div>

                      <div className="mt-auto pt-4">
                        <Button asChild className="w-full bg-angbu-orange text-white hover:bg-angbu-orange/90">
                          <Link href={product.link}>Ver na Loja Virtual</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {featuredProducts.map((_, index) => (
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
