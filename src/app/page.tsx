import FlowingRaysBackground from "@/components/FlowingRaysBackground"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCard, ImageCardImage, ImageCardContent } from "@/components/ImageCard"
import { ArrowRight, Database, Zap, BarChart3, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

// Project data structure
const featuredProjects = [
  {
    id: 5,
    title: "Assembly Line Performance",
    description: "Real-time manufacturing analytics dashboard to track assembly line efficiency and performance metrics.",
    icon: TrendingUp,
    iconColor: "text-chart-5",
    gradientFrom: "from-chart-5/20",
    gradientTo: "to-chart-3/20",
    diagramLabel: "Performance Dashboard",
    href: "/projects/assembly-line-performance",
    delay: 100
  },
  // {
  //   id: 4,
  //   title: "Work Schedule Sync",
  //   description: "Automated scraping of restaurant shifts and syncing them with Google Calendar using a GCP-first architecture.",
  //   icon: Calendar,
  //   iconColor: "text-chart-1",
  //   gradientFrom: "from-chart-1/20",
  //   gradientTo: "to-chart-2/20",
  //   diagramLabel: "Cloud Workflow",
  //   href: "/projects/work-schedule-sync",
  //   delay: 200
  // },
  {
    id: 1,
    title: "Shop Analytics",
    description: "Enabled customer funnel and retention tracking for an e-commerce store, for an analytics stack.",
    icon: Database,
    iconColor: "text-primary",
    gradientFrom: "from-primary/20",
    gradientTo: "to-secondary/20",
    diagramLabel: "Architecture Diagram",
    href: "/projects/fake-shop-analytics",
    delay: 300
  },
  {
    id: 2,
    title: "NYC Taxi Price Optimization",
    description: "Built a streaming pipeline to optimize taxi fares in real time, reducing pricing gaps and improving revenue.",
    icon: Zap,
    iconColor: "text-secondary",
    gradientFrom: "from-secondary/20",
    gradientTo: "to-accent/20",
    diagramLabel: "Streaming Pipeline",
    href: "/projects/nyc-taxi-optimization",
    delay: 400
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg dark:gradient-bg-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="h-screen relative">
        <FlowingRaysBackground
          primaryColor="59,130,246"    // blue-500
          secondaryColor="96,165,250"  // blue-400  
          accentColor="37,99,235"      // blue-600
          animationSpeed={0.8}
          threadOpacity={0.9}
          pulseIntensity={1.1}
          threadCount={18}
          opacity={0.9} // New prop to control visibility
          showBackground={true}
          showHeroBackground={true}
        />

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-6xl mx-auto space-y-8">
            <ScrollAnimation animation="fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-balance mb-4">
                Data pipelines that deliver{" "}
                <span className="text-shimmer">business value</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
                I turn raw events into business-ready insights — from scalable real-time processing and orchestration to Analytics and ML-ready
                datasets and dashboards.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-8 pulse-glow">
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent hover-lift">
                  <Link href="/contact">{"Let's Talk Data"}</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-left" delay={100}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Scalable Ingestion</h3>
                  <p className="text-muted-foreground">
                    Build robust data pipelines that handle millions of events per day with reliable orchestration and
                    monitoring.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
                  <p className="text-muted-foreground">
                    Stream processing systems that deliver insights in milliseconds, enabling real-time decision making.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={300}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
                  <p className="text-muted-foreground">
                    Transform raw data into actionable insights with comprehensive dashboards and ML-ready datasets.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world data engineering solutions that deliver measurable business impact
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const IconComponent = project.icon
              return (
                <ScrollAnimation 
                  key={project.id} 
                  animation="fade-in-up" 
                  delay={project.delay}
                >
                  <ImageCard className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300 group">
                    <ImageCardImage className={`aspect-video bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center diagram-zoom`}>
                      <div className="text-center">
                        <IconComponent className={`h-12 w-12 ${project.iconColor} mx-auto mb-2`} />
                        <p className="text-sm text-muted-foreground">{project.diagramLabel}</p>
                      </div>
                    </ImageCardImage>
                    <ImageCardContent>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                        <Link href={project.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </ImageCardContent>
                  </ImageCard>
                </ScrollAnimation>
              )
            })}
          </div>

          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="text-center mt-12 mb-16">
              <Button asChild size="lg" variant="outline" className="hover-lift bg-transparent">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}