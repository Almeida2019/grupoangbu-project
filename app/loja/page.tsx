import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Truck, CreditCard } from "lucide-react"

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
    return `/loja${url.pathname}`; // Ensures it always starts with /loja/
  } catch (e) {
    // If it's already a relative path or invalid, try to use it or a fallback
    if (typeof absoluteUrl === 'string' && absoluteUrl.startsWith('/')) {
      return absoluteUrl;
    }
    return "/loja/produto-indisponivel";
  }
};

const allProductsData = [
  {
    csvName: "ROUTER MI WIFI 4A AC1200 BRANCO",
    csvPrice: "29500.00", // Updated Price
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/162050-198-198?v=638730536437070000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/router-mi-wifi-4a-ac1200-branco/p",
    description: "Router Xiaomi Mi WiFi 4A AC1200, cor branca, alta velocidade.",
    brand: "XIAOMI"
  },
  {
    csvName: "Router Wifi AC1200 Dual Band",
    csvPrice: "35800.00", // Updated Price (from TP-LINK AC 1200)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/167091-198-198?v=638774518264730000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/router-wifi-ac1200-dual-band/p",
    description: "Router TP-Link Wifi AC1200 Dual Band para conexões estáveis.",
    brand: "TP-Link"
  },
  {
    csvName: "Toner 17a preto (cf217a)",
    csvPrice: "78450.00", // Updated Price (from TONER HP LASERJET 17A)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165417-198-198?v=638757239899930000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-17a-preto-cf217a/p",
    description: "Toner HP 17A Preto Original LaserJet (CF217A).",
    brand: "HP"
  },
  {
    csvName: "Toner 415a preto lj pro m45x/m47x (2 400 pag)",
    csvPrice: "96500.00", // Updated Price (from TONER HP LASERJET 415A PT)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164323-198-198?v=638752149887870000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner--415a-preto-lj-pro-m45xm47x-2-400-pag/p",
    description: "Toner HP 415A Preto para LaserJet Pro M45x/M47x.",
    brand: "HP"
  },
  {
    csvName: "Toner 415a amarelo lj pro m45x/m47x (2.100 pag)",
    csvPrice: "135450.00", // Updated Price (from TONER HP LASERJET 415A AM)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164530-198-198?v=638753874008630000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-amarelo-lj-pro-m45xm47x-2100-pag/p",
    description: "Toner HP 415A Amarelo para LaserJet Pro M45x/M47x.",
    brand: "HP"
  },
  {
    csvName: "Toner 415a ciano lj pro m45x/m47x (2 100 pag)",
    csvPrice: "135450.00", // Updated Price (from TONER HP LASERJET 415A AZ)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/162608-198-198?v=638737573426200000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-ciano-lj-pro-m45xm47x-2-100-pag/p",
    description: "Toner HP 415A Ciano para LaserJet Pro M45x/M47x.",
    brand: "HP"
  },
  {
    csvName: "Toner 415a magenta lj pro m45x/m47x (2 100 pag)",
    csvPrice: "135450.00", // Updated Price (from TONER HP LASERJET 415A MG)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163674-198-198?v=638748618283500000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-415a-magenta-lj-pro-m45xm47x-2-100-pag/p",
    description: "Toner HP 415A Magenta para LaserJet Pro M45x/M47x.",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 650 2515/3515 color (cz102ae)",
    csvPrice: "16150.00", // Updated Price (from TINTEIRO 650 HP COR)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/158640-198-198?v=638676152274570000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-650-25153515--color-cz102ae/p",
    description: "Tinteiro HP 650 Color Original (CZ102AE).",
    brand: "HP"
  },
  {
    csvName: "Toner 44a m15x/m28x preto",
    csvPrice: "61750.00", // Updated Price (from TONER LASERJET HP 44A)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164751-198-198?v=638754014234330000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-44a-m15xm28x-preto/p",
    description: "Toner HP 44A Preto para impressoras M15x/M28x.",
    brand: "HP"
  },
  {
    csvName: "Toner 85a 1102/m1132/m1212nf (ce285a)",
    csvPrice: "85600.00", // Updated Price (from TONER LASERJET HP 85A)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/166393-198-198?v=638759998305130000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-85a-1102m1132m1212nf-ce285a/p",
    description: "Toner HP 85A Preto Original (CE285A).",
    brand: "HP"
  },
  {
    csvName: "Toner 59a laserjet pro preto",
    csvPrice: "135800.00", // Updated Price (from TONER LASERJET HP 59A)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165212-198-198?v=638755628585500000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-59a-laserjet-pro-preto/p",
    description: "Toner HP 59A Preto para LaserJet Pro.",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 650 2515/3515 preto (cz101ae)",
    csvPrice: "18500.00", // Updated Price (from TINTEIRO 650 HP BLACK)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/158649-198-198?v=638676152439170000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-650-25153515-preto-cz101ae/p",
    description: "Tinteiro HP 650 Preto Original (CZ101AE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 652 3835 tricolour (f6v24ae)",
    csvPrice: "17000.00", // Updated Price (from TINTEIRO 652 HP COR)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164440-198-198?v=638753840283370000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-652-3835-tricolour-f6v24ae/p",
    description: "Tinteiro HP 652 Tricolor Original (F6V24AE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 123 2000/3000 preto (f6v17ae)",
    csvPrice: "17200.00", // Updated Price (from TINTEIRO 123 HP BLACK)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163768-198-198?v=638748671617100000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-123-20003000-preto-f6v17ae/p",
    description: "Tinteiro HP 123 Preto Original (F6V17AE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 123 2000/3000 tricolour (f6v16ae)",
    csvPrice: "19350.00", // Updated Price (from TINTEIRO 123 HP COR)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164744-198-198?v=638754013032830000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-123-20003000-tricolour--f6v16ae/p",
    description: "Tinteiro HP 123 Tricolor Original (F6V16AE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 652 3835 preto (f6v25ae)",
    csvPrice: "19950.00", // Updated Price (from TINTEIRO 652 HP PT)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164483-198-198?v=638753854757800000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-652-3835-preto-f6v25ae/p",
    description: "Tinteiro HP 652 Preto Original (F6V25AE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 122 1000/2000/3000 preto (ch561he)",
    csvPrice: "18950.00", // Updated Price (from TINTEIRO 122 HP PT)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165032-198-198?v=638754868627700000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-122-100020003000-preto-ch561he/p",
    description: "Tinteiro HP 122 Preto Original (CH561HE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 122 1000/2000/3000 tri-color (ch562he)",
    csvPrice: "22500.00", // Updated Price (from TINTEIRO 122 HP COR)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163758-198-198?v=638748668849200000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-122-100020003000-tri-color-ch562he/p",
    description: "Tinteiro HP 122 Tricolor Original (CH562HE).",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 305 3ym61ae preto 2720",
    csvPrice: "15000.00", // Updated Price (from TINTEIRO 305 HP PT)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/164712-198-198?v=638753999597100000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-305-3ym61ae-preto-2720/p",
    description: "Tinteiro HP 305 Preto Original (3YM61AE) para série 2720.",
    brand: "HP"
  },
  {
    csvName: "Tinteiro 305 3ym60ae color 2720",
    csvPrice: "15000.00", // Updated Price (from TINTEIRO 305 HP COR)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/165173-198-198?v=638755614938400000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/tinteiro-305-3ym60ae-color-2720/p",
    description: "Tinteiro HP 305 Color Original (3YM60AE) para série 2720.",
    brand: "HP"
  },
  {
    csvName: "Toner t-2309 preto",
    csvPrice: "33750.00", // Updated Price (from TONER TOSHIBA T-2309E)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/160035-198-198?v=638676177187800000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-t-2309-preto/p",
    description: "Toner Toshiba T-2309 Preto Original.",
    brand: "TOSHIBA"
  },
  {
    csvName: "Toner t-2323 e-studio 2323/2823",
    csvPrice: "32950.00", // Updated Price (from TONER TOSHIBA T-2323E)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/163786-198-198?v=638748732679070000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/toner-t-2323-e-studio-23232823/p",
    description: "Toner Toshiba T-2323 para e-Studio 2323/2823.",
    brand: "TOSHIBA"
  },
  {
    csvName: "Papel para Fotocopiadora A4 75grs",
    csvPrice: "4375.00", // Updated Price (from PAPEL RESMA A4 PAPERLINE 80G)
    csvImage: "[\"https://ncrangola.vtexassets.com/arquivos/ids/167415-198-198?v=638778217602470000&width=198&height=198&aspect=true\"]",
    csvLink: "https://www.ncrangola.com/papel-para-fotocopiadora-a4-75grs/p",
    description: "Resma de Papel A4 75grs para fotocopiadora e impressão.",
    brand: "Novidade"
  }
];

const products = allProductsData.map((p, index) => ({
  id: index + 1,
  name: p.csvName,
  description: p.description || `Consumível original ${p.brand || "de qualidade"}.`,
  price: formatPrice(p.csvPrice),
  image: extractImageUrl(p.csvImage),
  link: createProductLink(p.csvLink),
  brand: p.brand || "N/A",
}));


export default function Loja() {
  return (
    <>
      <section className="bg-angbu-blue py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Compre Online: Material Informático e Telecomunicações</h1>
            <p className="text-lg md:text-xl">
              Descubra a nossa nova loja virtual com uma vasta gama de produtos de informática e telecomunicações de
              alta qualidade.
            </p>
            <Button asChild size="lg" className="mt-8 bg-angbu-orange text-white hover:bg-angbu-orange/90">
              <Link href="#produtos">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Porquê Escolher a Nossa Loja Virtual?</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              A Angbu Comércio oferece uma experiência de compra online segura e conveniente, com produtos de qualidade
              e suporte especializado.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="card-fluid">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-angbu-orange/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loja%20Virtual-9OzqLiotBJQ15mu8El7zapxiCrta5a.webp"
                    alt="Loja Virtual"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">Compra Fácil</h3>
                <p className="text-muted-foreground">
                  Interface intuitiva para uma experiência de compra simples e rápida.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-angbu-orange/10">
                  <Truck className="h-6 w-6 text-angbu-orange" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Entrega Rápida</h3>
                <p className="text-muted-foreground">
                  Entregamos os seus produtos com rapidez e segurança em toda Angola.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-angbu-orange/10">
                  <CreditCard className="h-6 w-6 text-angbu-orange" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Pagamento Seguro</h3>
                <p className="text-muted-foreground">Múltiplas opções de pagamento seguro para sua tranquilidade.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-muted py-16 md:py-24 text-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Os Nossos Produtos</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Explore a nossa seleção de produtos de informática e telecomunicações de alta qualidade.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden card-fluid flex flex-col h-full">
                <div className="relative aspect-square bg-white w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="mb-1 text-xs text-angbu-orange font-semibold">{product.brand}</div>
                  <h3 className="mb-2 text-base font-bold h-14 overflow-hidden">{product.name}</h3>
                  <p className="mb-2 text-xs text-muted-foreground h-20 overflow-hidden">{product.description}</p>
                  <div className="mb-4 text-lg font-bold text-angbu-orange">{product.price}</div>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-angbu-orange text-white hover:bg-angbu-orange/90">
                      <Link href={product.link}>Ver Detalhes</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
              <Link href="/loja">
                Ver Todos os Produtos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-angbu-blue text-white">
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">Como Comprar Online</h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-angbu-orange text-white">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Navegue pelos Produtos</h3>
                    <p className="text-white/80">
                      Explore a nossa vasta gama de produtos de informática e telecomunicações.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-angbu-orange text-white">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Adicione ao Carrinho</h3>
                    <p className="text-white/80">
                      Selecione os produtos desejados e adicione-os ao seu carrinho de compras.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-angbu-orange text-white">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Finalize a Compra</h3>
                    <p className="text-white/80">Preencha os seus dados de entrega e escolha o método de pagamento.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-angbu-orange text-white">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Receba em Casa</h3>
                    <p className="text-white/80">
                      Aguarde a entrega dos seus produtos no conforto da sua casa ou escritório.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loja%20Virtual-9OzqLiotBJQ15mu8El7zapxiCrta5a.webp"
                  alt="Compra Online"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
