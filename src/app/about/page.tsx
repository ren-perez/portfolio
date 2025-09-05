import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Zap, BarChart3, Cloud, Cpu, GitBranch } from "lucide-react"
import Link from "next/link"

const skills = [
  { name: "Python", category: "Languages", icon: Code },
  { name: "SQL", category: "Languages", icon: Database },
  { name: "Airflow", category: "Orchestration", icon: GitBranch },
  { name: "dbt", category: "Transformation", icon: Code },
  { name: "Spark", category: "Processing", icon: Zap },
  { name: "Kafka", category: "Streaming", icon: Zap },
  { name: "Databricks", category: "Platform", icon: Cloud },
  { name: "Fivetran", category: "Integration", icon: Database },
  { name: "DuckDB", category: "Analytics", icon: BarChart3 },
  { name: "Azure", category: "Cloud", icon: Cloud },
  { name: "Docker", category: "Infrastructure", icon: Cpu },
  { name: "Kubernetes", category: "Infrastructure", icon: Cpu },
]

const experience = [
  {
    title: "Senior Data Engineer",
    company: "TechCorp Analytics",
    period: "2022 - Present",
    description:
      "Lead data platform architecture serving 50M+ daily events. Built real-time ML pipelines that increased revenue by $2M annually through personalization and fraud detection.",
    achievements: [
      "Reduced data pipeline latency from hours to minutes",
      "Implemented automated data quality monitoring",
      "Led migration to modern data stack (Databricks + Delta Lake)",
    ],
  },
  {
    title: "Data Engineer",
    company: "StartupScale Inc",
    period: "2020 - 2022",
    description:
      "Built analytics infrastructure from scratch for fast-growing SaaS platform. Enabled data-driven decision making that supported 10x user growth and successful Series B funding.",
    achievements: [
      "Designed scalable ETL pipelines handling 1TB+ daily",
      "Created self-service analytics platform for business teams",
      "Established data governance and quality standards",
    ],
  },
  {
    title: "Analytics Engineer",
    company: "DataFirst Solutions",
    period: "2018 - 2020",
    description:
      "Specialized in transforming raw business data into actionable insights. Worked with cross-functional teams to deliver analytics solutions that drove strategic business decisions.",
    achievements: [
      "Built customer segmentation models improving marketing ROI by 40%",
      "Automated financial reporting reducing manual work by 80%",
      "Implemented A/B testing framework for product optimization",
    ],
  },
]

const values = [
  {
    title: "Business Impact First",
    description:
      "Every pipeline, model, and dashboard should solve a real business problem. I focus on delivering measurable value, not just technical sophistication.",
    icon: BarChart3,
  },
  {
    title: "Reliability & Scale",
    description:
      "Data systems must be dependable. I build with monitoring, testing, and graceful failure handling to ensure business continuity.",
    icon: Database,
  },
  {
    title: "Modern Stack Adoption",
    description:
      "I stay current with data engineering best practices, adopting proven tools that improve developer productivity and system performance.",
    icon: Zap,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg dark:gradient-bg-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-8">
            {"I'm a Data Engineer who builds data systems that"} <span className="text-primary">power decisions</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              My work focuses on designing pipelines — batch and streaming — that transform raw events into reliable
              datasets for analytics and machine learning. I combine modern data stack tools (dbt, Airflow, Delta Lake,
              Kafka, Databricks) with a business-first mindset to deliver insights, models, and dashboards that drive
              impact.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              {`I believe the best data engineering isn't just about moving data efficiently — it's about enabling
              organizations to make better decisions faster. Whether it's real-time fraud detection, customer
              segmentation, or operational analytics, I build systems that turn data into competitive advantage.`}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Modern data stack tools chosen for reliability, scalability, and developer productivity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => {
              const IconComponent = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-card/60 backdrop-blur-sm border-border/20 hover:bg-card/80 transition-all duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building data systems that drive business impact across different scales and industries
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {job.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-accent">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Approach</h2>
            <p className="text-xl text-muted-foreground">
              Core principles that guide how I design and build data systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border-border/20 hover:bg-card/80 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{"Let's Build Something Together"}</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              {`Whether you need to scale your data infrastructure, implement real-time analytics, or build ML pipelines,
              I'd love to discuss how we can solve your data challenges.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
