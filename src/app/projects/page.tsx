import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Zap, BarChart3, GitBranch, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

const projects = [
  {
    id: "fake-shop-analytics",
    title: "Fake Shop Analytics",
    description:
      "Enabled customer funnel and retention tracking for a fake e-commerce store, simulating a startup-grade analytics stack.",
    impact: "Improved understanding of drop-off points and customer lifetime value alignment",
    icon: Database,
    gradient: "from-primary/20 to-secondary/20",
    iconColor: "text-primary",
    tags: ["Airflow", "dbt", "DuckDB", "Metabase", "Docker"],
    links: {
      github: "#",
      demo: "#",
      blog: "#",
    },
  },
  {
    id: "nyc-taxi-optimization",
    title: "NYC Taxi Price Optimization",
    description:
      "Built a streaming pipeline to optimize taxi fares in real time, reducing pricing gaps and improving revenue.",
    impact: "Reduced pricing gaps by 15% and improved revenue through dynamic fare optimization",
    icon: Zap,
    gradient: "from-secondary/20 to-accent/20",
    iconColor: "text-secondary",
    tags: ["Kafka", "Spark Streaming", "Redis", "Python", "Azure"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "financial-lakehouse",
    title: "Financial Data Lakehouse",
    description: "Delivered enterprise-ready risk dashboards and anomaly detection using Databricks + Delta Lake.",
    impact: "Enabled real-time risk monitoring and reduced compliance reporting time by 60%",
    icon: BarChart3,
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
    tags: ["Databricks", "Delta Lake", "Spark", "MLflow", "Tableau"],
    links: {
      github: "#",
      demo: "#",
      blog: "#",
    },
  },
  {
    id: "customer-segmentation-ml",
    title: "Customer Segmentation ML Pipeline",
    description:
      "Built an end-to-end ML pipeline for customer segmentation using behavioral data and purchase patterns.",
    impact: "Increased marketing campaign effectiveness by 40% through targeted customer segments",
    icon: GitBranch,
    gradient: "from-chart-4/20 to-chart-5/20",
    iconColor: "text-chart-4",
    tags: ["Scikit-learn", "Airflow", "PostgreSQL", "Docker", "FastAPI"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "iot-sensor-analytics",
    title: "IoT Sensor Analytics Platform",
    description: "Real-time processing of IoT sensor data for predictive maintenance in manufacturing environments.",
    impact: "Reduced equipment downtime by 25% through predictive maintenance insights",
    icon: Globe,
    gradient: "from-chart-3/20 to-chart-1/20",
    iconColor: "text-chart-3",
    tags: ["InfluxDB", "Grafana", "Python", "MQTT", "TimescaleDB"],
    links: {
      github: "#",
      demo: "#",
      blog: "#",
    },
  },
  {
    id: "social-media-sentiment",
    title: "Social Media Sentiment Pipeline",
    description:
      "Batch and streaming pipeline for social media sentiment analysis to track brand perception in real-time.",
    impact: "Enabled proactive brand management with 95% sentiment classification accuracy",
    icon: BarChart3,
    gradient: "from-chart-2/20 to-chart-4/20",
    iconColor: "text-chart-2",
    tags: ["Apache Beam", "BigQuery", "NLP", "Kubernetes", "GCP"],
    links: {
      github: "#",
      demo: "#",
    },
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen gradient-bg dark:gradient-bg-dark">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
                Data Engineering <span className="text-shimmer">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Real-world data engineering solutions that solve business problems and deliver measurable impact. Each
                project demonstrates scalable architecture, modern data stack implementation, and business-first
                thinking.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <ScrollAnimation key={project.id} animation="fade-in-up" delay={index * 100}>
                  <Card className="bg-card/60 backdrop-blur-sm border-border/20 hover-lift hover-glow transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      {/* Project Thumbnail */}
                      <div
                        className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                      >
                        <div className="text-center z-10">
                          <IconComponent className={`h-16 w-16 ${project.iconColor} mx-auto mb-3`} />
                          <p className="text-sm text-muted-foreground font-medium">Architecture Diagram</p>
                        </div>
                        {/* Subtle animated background pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                          <div className="absolute top-8 right-8 w-1 h-1 bg-current rounded-full animate-pulse delay-300"></div>
                          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-current rounded-full animate-pulse delay-700"></div>
                          <div className="absolute bottom-4 right-4 w-2 h-2 bg-current rounded-full animate-pulse delay-500"></div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                          <div className="flex gap-2 ml-4">
                            {project.links.github && (
                              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                                <Link href={project.links.github}>
                                  <GitBranch className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            {project.links.demo && (
                              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                                <Link href={project.links.demo}>
                                  <ExternalLink className="h-4 w-4" />
                                  <span className="sr-only">Live Demo</span>
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                        {/* Impact Statement */}
                        <div className="bg-accent/10 rounded-lg p-3 mb-4">
                          <p className="text-sm font-medium text-accent-foreground">
                            <span className="text-accent">Impact:</span> {project.impact}
                          </p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Learn More Button */}
                        <Button
                          asChild
                          variant="ghost"
                          className="group-hover:text-primary transition-colors w-full justify-between"
                        >
                          <Link href={`/projects/${project.id}`}>
                            View Project Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build Your Next Data Platform?</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              {`Let's discuss how I can help you build scalable data pipelines that deliver reliable insights and drive
              business impact.`}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {"Let's Talk Data"} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
