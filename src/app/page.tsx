
import FlowingRaysBackground from "@/components/FlowingRaysBackground"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Database, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

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
          threadCount={24}
          opacity={0.9} // New prop to control visibility
          showBackground={true}
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
            {/* Project Card 1 */}
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center diagram-zoom">
                    <div className="text-center">
                      <Database className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Architecture Diagram</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Fake Shop Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Enabled customer funnel and retention tracking for a fake e-commerce store, simulating a
                      startup-grade analytics stack.
                    </p>
                    <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                      <Link href="/projects/fake-shop-analytics">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Project Card 2 */}
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-t-lg flex items-center justify-center diagram-zoom">
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-secondary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Streaming Pipeline</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">NYC Taxi Price Optimization</h3>
                    <p className="text-muted-foreground mb-4">
                      Built a streaming pipeline to optimize taxi fares in real time, reducing pricing gaps and
                      improving revenue.
                    </p>
                    <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                      <Link href="/projects/nyc-taxi-optimization">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Project Card 3 */}
            <ScrollAnimation animation="fade-in-up" delay={300}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg flex items-center justify-center diagram-zoom">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-accent mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Data Lakehouse</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Financial Data Lakehouse</h3>
                    <p className="text-muted-foreground mb-4">
                      Delivered enterprise-ready risk dashboards and anomaly detection using Databricks + Delta Lake.
                    </p>
                    <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                      <Link href="/projects/financial-lakehouse">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="text-center mt-12">
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
