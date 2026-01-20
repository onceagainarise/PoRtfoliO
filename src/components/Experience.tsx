import Section from './ui/Section'
import Card from './ui/Card'
import Divider from './ui/Divider'
import Meta from './ui/Meta'

export default function Experience() {
  const experiences = [
    {
      title: "AI AUTOMATION INTERN",
      company: "WARDENERA (HOUSING MANAGEMENT AUTOMATION STARTUP)",
      period: "OCT 2025 – DEC 2025",
      location: "REMOTE",
      type: "INTERNSHIP",
      achievements: [
        "Designed data-driven automation pipelines using LLMs to convert unstructured user inputs into structured specifications, reducing manual processing time by 60% through intelligent data transformation workflows",
        "Built adaptive agentic systems with dynamic querying and feedback loops, improving data completion accuracy by 40% through iterative refinement and statistical validation",
        "Deployed AI solutions serving 500+ users while implementing testing protocols and performance monitoring to ensure system reliability and optimize model behavior"
      ]
    },
    {
      title: "MACHINE LEARNING ENGINEER",
      company: "TECH INNOVATIONS LAB",
      period: "JAN 2024 – MAY 2024",
      location: "NEW DELHI, INDIA",
      type: "FULL-TIME",
      achievements: [
        "Developed real-time anomaly detection system processing 1M+ financial transactions daily with sub-second latency and 99.99% accuracy",
        "Built predictive maintenance scheduler using ML models that reduced equipment downtime by 35% and generated $200K+ annual savings",
        "Led team of 3 engineers in implementing MLOps practices and CI/CD pipelines for model deployment and monitoring"
      ]
    },
    {
      title: "DATA SCIENCE INTERN",
      company: "ANALYTICS CONSULTING FIRM",
      period: "JUN 2023 – AUG 2023",
      location: "BENGALURU, INDIA",
      type: "INTERNSHIP",
      achievements: [
        "Analyzed 50GB+ of customer data to identify churn patterns and developed predictive models with 85% accuracy",
        "Created automated ETL pipelines using Python and SQL that reduced data processing time by 70% and improved data quality",
        "Built interactive dashboards using Streamlit for real-time business metrics visualization, adopted by 3 business units"
      ]
    },
    {
      title: "FULL STACK DEVELOPER",
      company: "FINTECH STARTUP",
      period: "DEC 2022 – MAR 2023",
      location: "REMOTE",
      type: "PART-TIME",
      achievements: [
        "Developed RESTful APIs using FastAPI and PostgreSQL for financial transaction processing with 99.9% uptime",
        "Built responsive React frontend with TypeScript for user management and transaction history features",
        "Implemented authentication, authorization, and security measures compliant with financial industry standards"
      ]
    }
  ]

  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="heading heading-lg text-4xl mb-4">
          EXPERIENCE
        </h2>
        <p className="text-lg text-text-primary max-w-3xl mx-auto">
          Professional experience in AI/ML engineering, data science, and full-stack development.
        </p>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index}>
            <Card>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div>
                        <h3 className="heading text-xl text-text-primary">
                          {exp.title}
                        </h3>
                        <Meta className="block mt-1">{exp.type}</Meta>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-text-primary font-medium">
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text-primary">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Divider />
                
                <div className="space-y-3">
                  <h4 className="meta mb-3">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <Card className="border-accent">▸</Card>
                        <span className="text-text-primary leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
            
            {index < experiences.length - 1 && (
              <div className="py-8">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
