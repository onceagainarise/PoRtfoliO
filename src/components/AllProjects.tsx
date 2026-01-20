import Section from './ui/Section'
import Card from './ui/Card'
import Meta from './ui/Meta'

export default function AllProjects() {
  const projects = [
    {
      title: "HOSPITAL READMISSION",
      description: "Predictive modeling pipeline analyzing 50,000+ patient records with XGBoost ensemble for real-time risk assessment. Developed comprehensive data preprocessing pipeline handling missing values and outliers. Implemented cross-validation strategies and hyperparameter tuning using GridSearchCV. Created Streamlit dashboard for real-time predictions and model interpretability.",
      tech: "Python, XGBoost, Scikit-learn, Pandas, Streamlit",
      outcome: "87% precision • 0.91 ROC-AUC • 65% data issues reduced",
      featured: true
    },
    {
      title: "LLM FINE-TUNING",
      description: "Fine-tuned CodeLlama-7B using parameter-efficient techniques with LoRA and PEFT. Implemented rigorous A/B testing framework with statistical significance testing. Created automated data pipelines for processing 15,000+ code samples. Developed evaluation metrics for code generation quality and accuracy.",
      tech: "PyTorch, Transformers, LoRA, PEFT, Scikit-learn",
      outcome: "15% accuracy improvement • 15,000+ samples • automated pipelines",
      featured: false
    },
    {
      title: "REPO-SURFER AI",
      description: "Autonomous AI agent with RAG architecture for GitHub repository analysis. Built vector database using ChromaDB for efficient code similarity search. Implemented LangChain workflows for intelligent code exploration and analysis. Created interactive visualizations for commit history and code relationships.",
      tech: "LangChain, ChromaDB, GitHub API, RAG, Vector Embeddings",
      outcome: "70% onboarding reduction • comprehensive analysis • interactive viz",
      featured: false
    },
    {
      title: "HOUSING AUTOMATION",
      description: "Built intelligent automation pipelines using LLMs to convert unstructured user inputs into structured specifications. Implemented OpenAI and Groq APIs for natural language processing. Created adaptive agentic systems with dynamic querying and feedback loops. Served 500+ users with 60% reduction in manual processing time.",
      tech: "Python, OpenAI APIs, Groq API, Data Processing, Automation",
      outcome: "60% time reduction • 40% accuracy improvement • 500+ users",
      featured: false
    },
    {
      title: "ANOMALY DETECTION",
      description: "Developed streaming analytics platform for real-time detection of anomalies in financial transactions. Implemented Apache Kafka and Spark for sub-second data processing. Created TensorFlow models with 99.99% accuracy. Deployed using Docker and Kubernetes with 1M+ transactions processed daily.",
      tech: "Apache Kafka, Apache Spark, TensorFlow, Docker, Kubernetes",
      outcome: "Sub-second latency • 99.99% accuracy • 1M+ transactions",
      featured: false
    },
    {
      title: "MAINTENANCE SCHEDULER",
      description: "Created ML-powered system to predict equipment failures and optimize maintenance schedules. Used Random Forest and time series analysis for 95% prediction accuracy. Built FastAPI backend with React frontend. Generated $200K+ annual savings through 35% downtime reduction.",
      tech: "Python, Random Forest, FastAPI, React, PostgreSQL",
      outcome: "35% downtime reduction • $200K+ savings • 95% accuracy",
      featured: false
    },
    {
      title: "DOCUMENT PROCESSOR",
      description: "Built NLP system to extract and classify information from unstructured documents. Implemented spaCy and BERT for 90% classification accuracy. Created Elasticsearch integration for efficient document search. Processed 10K+ documents with 80% reduction in processing time.",
      tech: "spaCy, BERT, Transformers, Elasticsearch, FastAPI",
      outcome: "90% accuracy • 80% time reduction • 10K+ documents",
      featured: false
    },
    {
      title: "IMAGE PROCESSING",
      description: "Scalable system for batch processing and analysis of satellite imagery using distributed computing. Implemented Dask for parallel processing of 1000+ images daily. Used OpenCV and NumPy for image analysis. Achieved 80% cost reduction while processing 5TB of data.",
      tech: "Dask, OpenCV, NumPy, AWS Lambda, S3",
      outcome: "1000+ images daily • 5TB processed • 80% cost reduction",
      featured: false
    },
    {
      title: "MODEL MONITORING",
      description: "Comprehensive monitoring platform for ML model performance, data drift, and prediction quality. Implemented Grafana dashboards with Prometheus metrics. Created automated alerting system for performance degradation. Achieved 99.9% uptime with real-time monitoring capabilities.",
      tech: "Grafana, Prometheus, Docker, Kubernetes, Redis",
      outcome: "Real-time monitoring • 99.9% uptime • automated alerting",
      featured: false
    }
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
