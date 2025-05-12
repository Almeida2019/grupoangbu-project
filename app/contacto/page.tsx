"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"

export default function Contacto() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })

      // Reset do estado de submissão após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <section className="bg-angbu-blue py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contacte-nos
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              Estamos disponíveis para responder às suas questões e ajudá-lo com os nossos serviços.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold tracking-tight">Informações de Contacto</h2>

              <div className="grid gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-start p-6">
                    <MapPin className="mr-4 mt-1 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">Morada</h3>
                      <p className="text-muted-foreground">Bairro Deolinda Rodrigues, Rua Gago Coutinho, Cabinda</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-start p-6">
                    <Phone className="mr-4 mt-1 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">Telefone</h3>
                      <p className="text-muted-foreground">
                        +244 946 503 710
                        <br />
                        +244 913 226 684
                        <br />
                        +244 927 919 117
                        <br />
                        +244 990 919 117
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-start p-6">
                    <Mail className="mr-4 mt-1 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:angbu@grupoangbu.com" className="hover:text-angbu-orange transition-colors">
                          angbu@grupoangbu.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight">Nossa Localização</h3>
                <Card className="overflow-hidden border-2 border-angbu-orange/30">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d262.4100909928364!2d12.191474401530323!3d-5.559133639465269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sza!4v1746997792020!5m2!1sen!2sza" // <<< YOUR CORRECT LINK IS NOW HERE
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Angbu em Cabinda"
                    ></iframe>
                  </CardContent>
                </Card>
                 <p className="mt-2 text-sm text-muted-foreground">
                  Visite-nos na nossa localização em Cabinda.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold tracking-tight">Envie-nos uma Mensagem</h2>

              {isSubmitted ? (
                <Card className="bg-green-500/10 border-green-500/30">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="mb-2 text-2xl font-bold text-white">Mensagem Enviada!</h3>
                    <p className="text-green-200/90">
                      Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-angbu-blue/50">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome Completo</Label>
                          <Input id="nome" name="nome" placeholder="Ex: João Silva" value={formState.nome} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Endereço de Email</Label>
                          <Input id="email" name="email" type="email" placeholder="Ex: joao.silva@email.com" value={formState.email} onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone <span className="text-xs text-muted-foreground">(Opcional)</span></Label>
                        <Input id="telefone" name="telefone" type="tel" placeholder="Ex: (+244) 9xx xxx xxx" value={formState.telefone} onChange={handleChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Input id="assunto" name="assunto" placeholder="Ex: Pedido de orçamento para..." value={formState.assunto} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Sua Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          rows={5}
                          placeholder="Descreva aqui a sua questão ou o serviço que procura..."
                          value={formState.mensagem}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-angbu-orange text-white hover:bg-angbu-orange/90 py-3 text-base font-semibold transition-colors duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            A enviar...
                          </span>
                        ) : (
                          <>
                            Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
