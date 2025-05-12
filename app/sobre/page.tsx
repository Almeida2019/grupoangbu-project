import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Target, Award } from "lucide-react"

export default function Sobre() {
  return (
    <>
      {/* HERO */}
      <section className="geometric-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Grupo Angbu: Experiência e Diversificação</h1>
            <p className="text-lg md:text-xl">
              Conheça a nossa história, missão e visão como empresa angolana comprometida com a excelência e inovação.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSA HISTORIA */}
      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">A Nossa História</h2>
              <p className="mb-4 text-muted-foreground">
                O Grupo Angbu foi fundado a 18 de abril de 2017 pelo Engº Ângelo Gabriel Buanga, com a visão de criar
                uma empresa angolana que oferecesse serviços e produtos de excelência em diversos sectores.
              </p>
              <p className="mb-4 text-muted-foreground">
                Sediada em Cabinda, Angola, a empresa começou com um foco na área de informática e rapidamente expandiu
                para outros sectores, incluindo construção civil e obras públicas, formação profissional, fornecimento
                de internet, produção de ração animal, comércio e reparação electrónica.
              </p>
              <p className="mb-4 text-muted-foreground">
                Hoje, o Grupo Angbu é um conglomerado de empresas angolanas comprometidas com a excelência, oferecendo
                soluções completas para diversas áreas de atuação, sempre com o objetivo de contribuir para o
                desenvolvimento sustentável de Angola.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Calendar className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Fundação</h3>
                    <p className="text-sm text-muted-foreground">18 de abril de 2017</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Target className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Sectores</h3>
                    <p className="text-sm text-muted-foreground">7 áreas de atuação</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Award className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Compromisso</h3>
                    <p className="text-sm text-muted-foreground">Excelência e inovação</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* IMAGE */}
            <div className="flex items-center justify-center">
              <div className="h-[400px] w-[400px] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/sobre-nos.webp"
                  alt="Sobre Nós - Grupo Angbu"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSAO VISAO E VALORES */}
      <section className="py-16 md:py-24 fluid-bg-muted text-white">
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Missão, Visão e Valores</h2>
            <p className="mx-auto max-w-3xl text-lg text-white/80">
              Conheça os princípios que orientam o nosso trabalho e o nosso compromisso com a excelência.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="card-fluid">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer serviços e produtos de excelência em diversas áreas, contribuindo para o desenvolvimento
                  sustentável de Angola e para a satisfação dos nossos clientes, colaboradores e parceiros.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecido como um grupo empresarial de referência em Angola, destacando-se pela qualidade,
                  inovação e compromisso com o desenvolvimento do país e o bem-estar da sociedade.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Excelência em tudo o que fazemos</li>
                  <li>• Integridade e ética nos negócios</li>
                  <li>• Inovação e melhoria contínua</li>
                  <li>• Responsabilidade social e ambiental</li>
                  <li>• Valorização das pessoas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EQUIPA */}
      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">A Nossa Equipa</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Conheça os profissionais dedicados que fazem parte do Grupo Angbu e contribuem para o nosso sucesso.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="card-fluid">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/angelo-buanga.webp"
                    alt="Ângelo Gabriel Buanga"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">Ângelo Buanga</h3>
                <p className="mb-3 text-sm text-angbu-orange">Fundador e CEO</p>
                <p className="text-sm text-muted-foreground">
                  Fundador e CEO do Grupo ANGBU LDA, Ângelo é o principal estratega e visionário do grupo. Com uma
                  liderança orientada para resultados e inovação, ele tem sido essencial para o crescimento e sucesso do
                  Grupo ANGBU LDA desde a sua fundação.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/albertina-buanga.webp"
                    alt="Albertina Buanga"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">Albertina Buanga</h3>
                <p className="mb-3 text-sm text-angbu-orange">Diretora de Capital Humano</p>
                <p className="text-sm text-muted-foreground">
                  Responsável pela gestão de talentos e pelo desenvolvimento do capital humano no Grupo ANGBU LDA. A
                  Albertina é fundamental na criação de uma cultura organizacional positiva e no suporte ao crescimento
                  profissional dos colaboradores.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/nataniel-massiala.webp"
                    alt="Nataniel Massiala"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">Nataniel Massiala</h3>
                <p className="mb-3 text-sm text-angbu-orange">Diretor Administrativo</p>
                <p className="text-sm text-muted-foreground">
                  Com vasta experiência em gestão administrativa, o Nataniel é responsável por assegurar a eficiência
                  dos processos operacionais e administrativos do grupo, mantendo a organização e o cumprimento dos
                  objetivos internos.
                </p>
              </CardContent>
            </Card>

            <Card className="card-fluid">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/almeida-jose.webp"
                    alt="Almeida José"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">Almeida José</h3>
                <p className="mb-3 text-sm text-angbu-orange">Diretor de Operações</p>
                <p className="text-sm text-muted-foreground">
                  Como Diretor de Operações, Almeida é responsável por garantir que as operações do grupo sejam
                  executadas de forma eficiente, garantindo a qualidade e a satisfação dos clientes em todos os serviços
                  prestados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-angbu-blue py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Junte-se à Nossa Equipa</h2>
            <p className="mb-8 text-lg">
              Estamos sempre à procura de talentos para fazer parte da nossa equipa. Se tem paixão pela excelência e
              quer fazer parte de um grupo em crescimento, envie-nos o seu currículo.
            </p>
            <Button asChild size="lg" className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
              <Link href="/contacto">Contacte-nos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
