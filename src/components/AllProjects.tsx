import Section from './ui/Section'
import Card from './ui/Card'
import Meta from './ui/Meta'

export default function AllProjects() {
  const projects = [
  {
    title: "TRUST-AWARE RAG SYSTEM",
    description: "Production-oriented Retrieval-Augmented Generation system with deterministic trust gates. Implemented vector retrieval with reranking, external confidence scoring, hard refusal logic, and strict source attribution. LLM used only for explanation, not decision-making. Designed to reduce hallucinations and enable enterprise-safe AI responses.",
    tech: "Python, FastAPI, LangChain, Vector DB, Reranking, LLM Guardrails",
    outcome: "Hallucination risk reduced • deterministic gating • enterprise-safe design",
    featured: true
  },
  {
    title: "LEAD AUTOMATION PIPELINE",
    description: "End-to-end automation system for scraping, scoring, and qualifying leads. Built using n8n with Apify for data ingestion, LLM-based relevance scoring, structured storage in Airtable, and alerting for high-priority leads. Designed with retries, logging, and production-ready error handling.",
    tech: "n8n, OpenAI API, Apify, Airtable, Automation Pipelines",
    outcome: "Automated lead qualification • production-ready workflows",
    featured: true
  },
  {
    title: "MARS SEISMIC EVENT DETECTION",
    description: "Signal processing and ML pipeline to detect seismic events from Mars InSight mission data. Applied STA/LTA algorithms, frequency analysis, and noise filtering to distinguish real events from noise spikes. Evaluated against cataloged events and explored ML-based detection for uncataloged signals.",
    tech: "Python, Signal Processing, STA/LTA, Pandas, Scientific Data",
    outcome: "Accurate event detection • noise filtering • real scientific dataset",
    featured: false
  },
  {
    title: "HOSPITAL READMISSION PREDICTION",
    description: "Predictive modeling pipeline analyzing 50,000+ patient records using ensemble methods. Built robust preprocessing for missing data and outliers, applied cross-validation and hyperparameter tuning, and deployed a Streamlit dashboard for real-time risk assessment.",
    tech: "Python, XGBoost, Scikit-learn, Pandas, Streamlit",
    outcome: "0.91 ROC-AUC • 87% precision • improved risk assessment",
    featured: false
  },
  {
    title: "LLM FINE-TUNING PIPELINE",
    description: "Fine-tuned CodeLlama-7B using parameter-efficient methods (LoRA, PEFT). Built automated data pipelines for large-scale code datasets and evaluated outputs using custom quality and accuracy metrics. Focused on reproducibility and evaluation rigor.",
    tech: "PyTorch, Transformers, LoRA, PEFT",
    outcome: "Improved code generation quality • scalable fine-tuning",
    featured: false
  },
  {
    title: "REPO-SURFER AI",
    description: "RAG-based system for analyzing large GitHub repositories. Implemented vector search over codebases, semantic querying, and structured insights into architecture and commit history to reduce onboarding time for complex projects.",
    tech: "LangChain, Vector Embeddings, GitHub API, RAG",
    outcome: "Faster repo understanding • structured code insights",
    featured: false
  },
  ]

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="heading heading-lg text-4xl mb-4">
          ALL PROJECTS
        </h2>
        <p className="text-lg text-text-primary max-w-3xl mx-auto">
          9 key projects showcasing ML engineering, automation, and system design expertise.
        </p>
      </div>
      
      <div className="overflow-x-auto pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-max">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`w-80 aspect-square flex flex-col p-6 hover:border-accent transition-colors overflow-hidden ${
                project.featured ? 'border-accent' : ''
              }`}
            >
            <div className="flex flex-col h-full space-y-4">
              <div className="flex-shrink-0">
                <h3 className="heading text-lg text-text-primary mb-2">
                  {project.title}
                  {project.featured && (
                    <span className="meta ml-2 text-accent">★</span>
                  )}
                </h3>
              </div>
              
              <div className="flex-1 overflow-y-auto scrollbar-thin">
                <div className="space-y-3">
                  <p className="text-text-primary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-accent text-xs font-medium mb-1">OUTCOME</p>
                    <p className="text-text-primary text-xs leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <Meta>{project.tech}</Meta>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    </Section>
  )
}
