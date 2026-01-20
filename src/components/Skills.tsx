import Section from './ui/Section'

export default function Skills() {
  const skills = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Pinecone", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
  ]

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="heading heading-lg text-4xl mb-4">
          TECH STACK
        </h2>
        <p className="text-lg text-text-primary max-w-3xl mx-auto">
          Technologies I work with across ML engineering, full-stack development, and cloud infrastructure.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-4 group cursor-pointer"
              title={skill.name}
            >
              <div className="transition-all duration-300 group-hover:scale-125">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  width="40"
                  height="40"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 px-6 py-4 group cursor-pointer"
              title={skill.name}
            >
              <div className="transition-all duration-300 group-hover:scale-125">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  width="40"
                  height="40"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
