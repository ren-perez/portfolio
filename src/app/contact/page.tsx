import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, ArrowRight, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    title: "Email",
    description: "Best for detailed project discussions and collaboration opportunities",
    href: "mailto:hello@dataengineer.dev",
    label: "resebpego@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally and see my latest updates",
    href: "https://linkedin.com/in/renato-perezg",
    label: "Connect",
    icon: Linkedin,
    primary: false,
  },
  {
    title: "GitHub",
    description: "Explore my code, contributions, and open source projects",
    href: "https://github.com/dataengineer",
    label: "Explore",
    icon: Github,
    primary: false,
  },
]

const collaborationTypes = [
  {
    title: "Data Platform Architecture",
    description: "Design and build scalable data infrastructure from scratch or modernize existing systems",
    icon: MessageSquare,
  },
  {
    title: "Real-time Analytics",
    description: "Implement streaming pipelines for real-time insights and data-driven decision making",
    icon: Calendar,
  },
  {
    title: "ML Pipeline Development",
    description: "Build end-to-end machine learning pipelines from data ingestion to model deployment",
    icon: ArrowRight,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen gradient-bg dark:gradient-bg-dark relative overflow-hidden">
      {/* Enhanced background gradients for strongest visual impact */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-chart-4/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-8">
            {"Let's talk about building your next"} <span className="text-shimmer">data platform</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
            {`Whether you're scaling your data infrastructure, implementing real-time analytics, or building ML pipelines,
            I'd love to discuss how we can solve your data challenges together.`}
          </p>

          {/* Primary CTA */}
          <div className="mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6 pulse-glow">
              <Link href="mailto:reseb">
                <Mail className="mr-2 h-5 w-5" />
                Start the Conversation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Choose the best way to connect based on your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={method.title}
                  className={`bg-card/70 backdrop-blur-md border-border/30 hover:bg-card/90 transition-all duration-300 group ${
                    method.primary ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                        method.primary ? "bg-primary/20" : "bg-secondary/10"
                      }`}
                    >
                      <IconComponent className={`h-8 w-8 ${method.primary ? "text-primary" : "text-secondary"}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{method.description}</p>
                    <Button
                      asChild
                      variant={method.primary ? "default" : "outline"}
                      className="w-full group-hover:scale-105 transition-transform"
                    >
                      <Link href={method.href}>
                        <span className="font-mono text-sm">{method.label}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How I Can Help</h2>
            <p className="text-xl text-muted-foreground">
              Areas where I deliver the most impact for data-driven organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border-border/20 hover:bg-card/80 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Response Time & Availability */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/70 backdrop-blur-md border-border/30 p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  {`I typically respond to emails within 24 hours. For urgent data infrastructure issues, please mention
                  "URGENT" in the subject line.`}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Availability</h3>
                <p className="text-muted-foreground">
                  Currently accepting new projects. I work with 2-3 clients at a time to ensure focused
                  attention and quality delivery.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/80 backdrop-blur-lg border-border/40 p-12 relative overflow-hidden">
            {/* Additional background effect for final impact */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Ready to transform your data into competitive advantage?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {`Let's discuss your data challenges and explore how modern data engineering can accelerate your business
                goals.`}
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="mailto:hello@dataengineer.dev">
                  <Mail className="mr-2 h-6 w-6" />
                  {"Let's Build Something Great"}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
