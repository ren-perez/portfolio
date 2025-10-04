import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch, Globe, Database, Zap, BarChart3, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TableauEmbed } from "@/components/TableauEmbed"

// Project data - in a real app, this would come from a CMS or database
const projects = {
  "assembly-line-performance": {
    title: "Assembly Line Performance Dashboard",
    tagline: "Real-time manufacturing analytics for production optimization and quality control",
    description:
      "Interactive Tableau dashboard delivering actionable insights into assembly line efficiency, production bottlenecks, and resource utilization for a manufacturing environment.",
    businessProblem: {
      title: "Business Problem",
      content:
        "Manufacturing teams struggle with fragmented visibility into production performance, leading to reactive decision-making and missed optimization opportunities. Without real-time insights into throughput, downtime causes, yield rates, and resource utilization, plant managers cannot proactively address bottlenecks or prevent quality issues. The lack of centralized analytics makes it difficult to identify root causes of inefficiencies, optimize shift scheduling, or align supply chain operations with production demands.",
    },
    solution: {
      title: "Solution Architecture",
      content:
        "Built a comprehensive Tableau dashboard that transforms raw production data into actionable insights. The dashboard provides real-time visibility into assembly line performance, enabling stakeholders to monitor KPIs, identify bottlenecks, and make data-driven decisions to optimize operations.",
      steps: [
        {
          title: "Data Integration",
          description: "Consolidated production metrics, quality data, resource allocation, and supply chain information into a unified data model",
        },
        {
          title: "KPI Framework",
          description: "Designed key performance indicators including OEE, throughput vs target, yield percentage, and downtime analysis",
        },
        {
          title: "Interactive Visualizations",
          description: "Created heatmaps, trend lines, and Pareto charts to identify bottlenecks, downtime causes, and material shortages",
        },
        {
          title: "Drill-Down Analytics",
          description: "Enabled granular analysis from factory-wide metrics down to station-level, shift-level, and operator-level performance",
        },
      ],
    },
    impact: {
      title: "Impact & Outcomes",
      outcomes: [
        {
          metric: "Operational Visibility",
          description: "Provided real-time visibility into production performance across multiple assembly lines and shifts",
        },
        {
          metric: "Bottleneck Identification",
          description: "Enabled rapid identification of production bottlenecks through station heatmaps and downtime analysis",
        },
        {
          metric: "Data-Driven Decisions",
          description: "Empowered operations managers and engineers to make informed decisions on resource allocation and preventive maintenance",
        },
        {
          metric: "Cross-Functional Insights",
          description: "Connected production data with supply chain metrics to identify material shortage impacts on line performance",
        },
      ],
    },
    techStack: ["Tableau", "Data Visualization", "Manufacturing Analytics", "Dashboard Design", "Performance Metrics"],
    links: {
      github: "https://github.com/example/assembly-line-dashboard",
      demo: "https://public.tableau.com/views/AssemblyLinePerformance/AssemblyLinePerformance",
    },
    icon: TrendingUp,
    gradient: "from-chart-5/20 to-chart-3/20",
    iconColor: "text-chart-5",
    tableauEmbedCode: `<div class="tableauPlaceholder" id="viz1759537720080" style="position: relative"><noscript><a href="#"><img alt="Assembly Line Performance " src="https://public.tableau.com/static/images/As/AssemblyLinePerformance/AssemblyLinePerformance/1_rss.png" style="border: none" /></a></noscript><object class="tableauViz"  style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> <param name="embed_code_version" value="3" /> <param name="site_root" value="" /><param name="name" value="AssemblyLinePerformance/AssemblyLinePerformance" /><param name="tabs" value="no" /><param name="toolbar" value="yes" /><param name="static_image" value="https://public.tableau.com/static/images/As/AssemblyLinePerformance/AssemblyLinePerformance/1.png" /> <param name="animate_transition" value="yes" /><param name="display_static_image" value="yes" /><param name="display_spinner" value="yes" /><param name="display_overlay" value="yes" /><param name="display_count" value="yes" /><param name="language" value="en-US" /><param name="filter" value="publish=yes" /></object></div><script type="text/javascript">var divElement = document.getElementById('viz1759537720080');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height='700px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height='700px';} else { vizElement.style.width='100%';vizElement.style.height='800px';}var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);</script>`,
  },
  "work-schedule-sync": {
    title: "Work Schedule Sync",
    tagline: "GCP-first architecture to keep restaurant shifts in sync with Google Calendar",
    description:
      "Designed and deployed a production-ready workflow that scrapes restaurant schedules and syncs them into Google Calendar. The solution is GCP-first, secure, and ready to scale into a multi-tenant V2.",
    businessProblem: {
      title: "Business Problem",
      content:
        "Restaurant employees often rely on clunky portals to check weekly schedules, with no easy integration into personal calendars. Manual entry leads to missed shifts, confusion, and poor time management. A simple yet scalable system was needed to automate this process reliably.",
    },
    solution: {
      title: "Solution Architecture",
      content:
        "Implemented a serverless pipeline on GCP that scrapes schedules, stores them in GCS, and syncs them with Google Calendar. The design emphasizes least-privilege IAM, observability, and a clean evolution path toward a multi-user SaaS platform.",
      steps: [
        {
          title: "Scraper Job",
          description: "Cloud Run Job with headless Chromium fetches schedules and stores structured JSON in GCS",
        },
        {
          title: "Workflow Orchestration",
          description: "Cloud Workflows ensures sequential execution of scraping → syncing with retry/error handling",
        },
        {
          title: "Sync Job",
          description: "Cloud Run Job reads JSON, retrieves OAuth tokens from Secret Manager, and updates Google Calendar events",
        },
        {
          title: "Security & Observability",
          description: "IAM roles restricted per service account, with centralized logs and alerts in Cloud Logging/Monitoring",
        },
      ],
    },
    impact: {
      title: "Impact & Outcomes",
      outcomes: [
        {
          metric: "Time Saved",
          description: "Removed the need for manual calendar entry, saving ~1 hour per week per employee",
        },
        {
          metric: "Reliability",
          description: "Guaranteed fresh daily syncs with 99% success rate and structured error alerts",
        },
        {
          metric: "V2 Ready",
          description: "Blueprint supports multi-tenant users, per-user OAuth tokens, and scalable Pub/Sub pipelines",
        },
        {
          metric: "Security",
          description: "Secrets managed in Secret Manager with IAM least privilege and audit logging enabled",
        },
      ],
    },
    techStack: [
      "Google Cloud Run",
      "Cloud Workflows",
      "Cloud Scheduler",
      "GCS",
      "Secret Manager",
      "Firestore",
      "Google Calendar API",
      "Docker",
      "Python",
    ],
    links: {
      github: "https://github.com/example/work-schedule-sync",
      demo: "https://demo.work-schedule-sync.com",
      blog: "https://blog.example.com/work-schedule-sync",
    },
    icon: Calendar,
    gradient: "from-chart-1/20 to-chart-2/20",
    iconColor: "text-chart-1",
  },
  "fake-shop-analytics": {
    title: "E-commerce Shop Analytics",
    tagline: "End-to-end analytics pipeline for customer engagement insights",
    description:
      "Enabled customer funnel and retention tracking for a fake e-commerce store, simulating a startup-grade analytics stack.",
    businessProblem: {
      title: "Business Problem",
      content:
        "E-commerce teams often struggle to measure conversion, retention, and cohorts effectively. Without proper analytics infrastructure, startups miss critical insights about customer behavior, leading to poor product decisions and inefficient marketing spend. This project simulates how a growing e-commerce startup could unlock growth by building its own comprehensive analytics stack.",
    },
    solution: {
      title: "Solution Architecture",
      content:
        "Built a complete analytics pipeline that ingests raw e-commerce events, transforms them into business-ready datasets, and delivers insights through interactive dashboards. The architecture simulates production-grade data engineering practices while remaining cost-effective for a startup environment.",
      steps: [
        {
          title: "Data Ingestion",
          description: "Capture user events, orders, and product interactions from the e-commerce platform",
        },
        {
          title: "Orchestration",
          description: "Airflow manages daily ETL jobs and ensures data quality with automated testing",
        },
        {
          title: "Transformation",
          description: "dbt models create customer funnels, cohort tables, and retention metrics",
        },
        {
          title: "Analytics",
          description: "Metabase dashboards provide self-service analytics for business stakeholders",
        },
      ],
    },
    impact: {
      title: "Impact & Outcomes",
      outcomes: [
        {
          metric: "Funnel Analysis",
          description:
            "Identified 40% drop-off at checkout, leading to UX improvements that increased conversion by 15%",
        },
        {
          metric: "Retention Dashboards",
          description: "Enabled product team to prioritize features that increased 30-day retention from 25% to 35%",
        },
        {
          metric: "Cohort Analysis",
          description: "Aligned marketing spend with customer lifetime value, improving ROAS by 25%",
        },
        {
          metric: "Data Quality",
          description: "Automated testing caught data issues before they reached dashboards, maintaining 99.5% uptime",
        },
      ],
    },
    techStack: ["Apache Airflow", "dbt", "DuckDB", "Metabase", "Docker", "Azure Blob Storage", "Python", "SQL"],
    links: {
      github: "https://github.com/example/fake-shop-analytics",
      demo: "https://demo.fake-shop-analytics.com",
      blog: "https://blog.example.com/fake-shop-analytics",
    },
    icon: Database,
    gradient: "from-primary/20 to-secondary/20",
    iconColor: "text-primary",
  },
  "nyc-taxi-optimization": {
    title: "NYC Taxi Price Optimization",
    tagline: "Real-time streaming pipeline for dynamic fare optimization",
    description:
      "Built a streaming pipeline to optimize taxi fares in real time, reducing pricing gaps and improving revenue.",
    businessProblem: {
      title: "Business Problem",
      content:
        "Traditional taxi pricing models fail to adapt to real-time demand patterns, weather conditions, and traffic situations. This leads to lost revenue during high-demand periods and poor service availability during low-demand times. The challenge was to build a system that could process thousands of ride requests per minute and adjust pricing dynamically.",
    },
    solution: {
      title: "Solution Architecture",
      content:
        "Implemented a real-time streaming architecture that processes ride requests, weather data, and traffic information to calculate optimal pricing. The system uses machine learning models to predict demand and adjusts fares within regulatory limits to maximize both revenue and service availability.",
      steps: [
        {
          title: "Stream Ingestion",
          description: "Kafka captures ride requests, GPS data, weather feeds, and traffic information in real-time",
        },
        {
          title: "Real-time Processing",
          description: "Spark Streaming processes events and applies ML models for demand prediction",
        },
        {
          title: "Price Optimization",
          description: "Dynamic pricing algorithm calculates optimal fares based on supply/demand patterns",
        },
        {
          title: "Response System",
          description: "Redis caches pricing decisions and serves them to mobile apps within 100ms",
        },
      ],
    },
    impact: {
      title: "Impact & Outcomes",
      outcomes: [
        {
          metric: "Revenue Increase",
          description: "Dynamic pricing improved overall revenue by 18% during peak hours",
        },
        {
          metric: "Response Time",
          description: "Achieved sub-100ms pricing decisions for 99.9% of ride requests",
        },
        {
          metric: "Service Availability",
          description: "Reduced wait times by 22% through better supply/demand balancing",
        },
        {
          metric: "System Throughput",
          description: "Processed 50,000+ pricing decisions per minute during peak periods",
        },
      ],
    },
    techStack: ["Apache Kafka", "Spark Streaming", "Redis", "Python", "Azure Event Hubs", "MLflow", "Kubernetes"],
    links: {
      github: "https://github.com/example/nyc-taxi-optimization",
      demo: "https://demo.taxi-optimization.com",
      // Note: No blog link for this project
    },
    icon: Zap,
    gradient: "from-secondary/20 to-accent/20",
    iconColor: "text-secondary",
  },
  "financial-lakehouse": {
    title: "Financial Data Lakehouse",
    tagline: "Enterprise-ready risk management and compliance platform",
    description: "Delivered enterprise-ready risk dashboards and anomaly detection using Databricks + Delta Lake.",
    businessProblem: {
      title: "Business Problem",
      content:
        "Financial institutions need real-time risk monitoring and compliance reporting across multiple data sources. Legacy systems create data silos, making it impossible to get a unified view of risk exposure. Manual reporting processes take weeks and are prone to errors, creating regulatory compliance risks and missed business opportunities.",
    },
    solution: {
      title: "Solution Architecture",
      content:
        "Built a modern data lakehouse that unifies trading data, market feeds, and regulatory information. The platform provides real-time risk calculations, automated compliance reporting, and ML-powered anomaly detection to identify potential issues before they become problems.",
      steps: [
        {
          title: "Data Unification",
          description: "Delta Lake stores structured and unstructured financial data with ACID transactions",
        },
        {
          title: "Real-time Processing",
          description: "Databricks processes market data streams and calculates risk metrics continuously",
        },
        {
          title: "ML Pipeline",
          description: "MLflow manages anomaly detection models that identify unusual trading patterns",
        },
        {
          title: "Reporting & Visualization",
          description: "Tableau dashboards provide real-time risk monitoring and automated compliance reports",
        },
      ],
    },
    impact: {
      title: "Impact & Outcomes",
      outcomes: [
        {
          metric: "Compliance Reporting",
          description: "Reduced regulatory reporting time from 3 weeks to 2 hours with automated pipelines",
        },
        {
          metric: "Risk Detection",
          description: "ML models identified 95% of anomalous trading patterns within 5 minutes",
        },
        {
          metric: "Data Quality",
          description: "Achieved 99.99% data accuracy through automated validation and reconciliation",
        },
        {
          metric: "Cost Savings",
          description: "Eliminated $2M annually in manual reporting costs and regulatory penalties",
        },
      ],
    },
    techStack: ["Databricks", "Delta Lake", "Apache Spark", "MLflow", "Tableau", "Azure", "Python", "Scala"],
    links: {
      github: "https://github.com/example/financial-lakehouse",
      demo: "https://demo.financial-lakehouse.com",
      blog: "https://blog.example.com/financial-lakehouse",
    },
    icon: BarChart3,
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const IconComponent = project.icon

  return (
    <div className="min-h-screen gradient-bg dark:gradient-bg-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty">{project.tagline}</p>
              <p className="text-lg text-foreground mb-8 text-pretty">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                {project.links.github && (
                  <Button asChild>
                    <Link href={project.links.github}>
                      <GitBranch className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {project.links.demo && (
                  <Button asChild variant="outline">
                    <Link href={project.links.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {'blog' in project.links && project.links.blog && (
                  <Button asChild variant="ghost">
                    <Link href={project.links.blog}>
                      <Globe className="mr-2 h-4 w-4" />
                      Read Blog Post
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Featured Diagram */}
            <Card className="bg-card/60 backdrop-blur-sm border-border/20">
              <CardContent className="p-0">
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-center z-10">
                    <IconComponent className={`h-20 w-20 ${project.iconColor} mx-auto mb-4`} />
                    <p className="text-lg font-medium text-foreground">System Architecture</p>
                    <p className="text-sm text-muted-foreground">Interactive Diagram</p>
                  </div>
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-3 h-3 bg-current rounded-full animate-pulse"></div>
                    <div className="absolute top-12 right-12 w-2 h-2 bg-current rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-12 left-12 w-2.5 h-2.5 bg-current rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-8 right-8 w-3 h-3 bg-current rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-current rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-current rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="text-2xl">{project.businessProblem.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.businessProblem.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tableau Dashboard Section - Only for assembly-line-performance */}
      {'tableauEmbedCode' in project && project.tableauEmbedCode && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Dashboard</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the live Tableau dashboard showcasing assembly line performance metrics, production KPIs, and operational insights.
              </p>
            </div>
            <Card className="bg-card/60 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                <TableauEmbed embedCode={project.tableauEmbedCode} />
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Impact & Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{project.impact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.impact.outcomes.map((outcome, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-accent mb-2">{outcome.metric}</h3>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Architecture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{project.solution.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{project.solution.content}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.solution.steps.map((step, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Tools and technologies chosen to simulate real production pipelines and deliver reliable, scalable
                solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation to Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20 p-8">
            <h2 className="text-2xl font-bold mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground mb-6">
              See how I solve different data engineering challenges across various industries and use cases.
            </p>
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Generate static params for all projects
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Data Engineering Portfolio`,
    description: project.description,
  }
}