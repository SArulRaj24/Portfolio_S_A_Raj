import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Terminal, Code2, BrainCircuit, Cloud, ExternalLink,
  FileText, CheckCircle2, ChevronRight
} from 'lucide-react'

const profile = {
  name: 'Arulraj S.',
  role: 'Software Engineer · AI/ML Developer',
  email: 'sarulrajofficial@gmail.com',
  github: 'https://github.com/SArulRaj24',
  linkedin: 'https://www.linkedin.com/in/arulraj-s-b-tech/',
  leetcode: 'https://leetcode.com/u/Arulraj24/',
  resume: '/Arulraj_S_Resume.pdf',
}

const projects = [
  {
    number: '01',
    category: 'BACKEND / FULL STACK',
    title: 'VolunteerHub',
    subtitle: 'Community Volunteer Management System',
    description: 'A web platform for organizing community events, managing volunteer registrations, tracking check-ins, collecting feedback, and sending scheduled email reminders.',
    stack: ['Java 21', 'Spring Boot', 'React', 'MySQL', 'Spring Scheduler'],
    image: '/event.png',
    repo: 'https://github.com/SArulRaj24/Volunteer_management_system',
    highlight: 'REST APIs · RBAC · Automated email workflows',
  },
  {
    number: '02',
    category: 'MACHINE LEARNING',
    title: 'Pancreatic Cancer Detection',
    subtitle: 'ML-driven medical image analysis research',
    description: 'An experimental CT-image classification pipeline using a CNN feature extractor and XGBoost classifier, presented through a Streamlit interface.',
    stack: ['Python', 'CNN', 'XGBoost', 'TensorFlow', 'Streamlit'],
    repo: 'https://github.com/SArulRaj24/Pancreatic-cancer',
    image: '/cancer.png',
    highlight: 'Image preprocessing · Feature extraction · Evaluation',
  },
  {
    number: '03',
    category: 'FORECASTING / CLOUD',
    title: 'DrugForecasting',
    subtitle: 'Medicine demand forecasting application',
    description: 'A forecasting application exploring time-series models to estimate medicine demand and help communicate inventory-planning insights through an interactive interface.',
    stack: ['Python', 'FastAPI', 'Streamlit', 'SQL', 'Azure'],
    repo: 'https://github.com/SArulRaj24/DrugForecasting',
    image: 'drug.png',
    highlight: 'Time-series models · API development · Forecast metrics',
  },
  {
    number: '04',
    category: 'GENERATIVE AI',
    title: 'Local RAG Assistant',
    subtitle: 'Document question-answering prototype',
    description: 'A retrieval-augmented generation workflow that indexes documents, retrieves relevant chunks, and passes context to a locally hosted language model.',
    stack: ['Python', 'LangChain', 'FAISS', 'Ollama', 'Llama 3'],
    repo: 'https://github.com/SArulRaj24/EP_BOT',
    image: '/rag.png',
    highlight: 'Vector search · Retrieval pipeline · Local inference',
  },
]

const skillGroups = [
  { title: 'Backend Engineering', icon: Code2, skills: ['Java', 'Spring Boot', 'REST APIs', 'Python', 'SQL','Fastapi'] },
  { title: 'Frontend Development', icon: Terminal, skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Data & AI/ML', icon: BrainCircuit, skills: ['Machine Learning', 'CNNs', 'XGBoost', 'Pandas', 'RAG / LLM apps'] },
  { title: 'Tools & Cloud', icon: Cloud, skills: ['Git & GitHub', 'Azure', 'MySQL', 'Linux basics','Postman'] },
]

const experience = [
  {
    period: 'PROJECT / INTERNSHIP',
    role: 'Backend Developer — VolunteerHub',
    org: 'Community volunteer management platform',
    details: [
      'Built organizer-side REST API functionality for event management and volunteer workflows.',
      'Implemented scheduled email reminders and registration-related notifications using JavaMailSender and Spring Scheduler.',
      'Worked on check-in tracking, feedback collection, and analytics-oriented features.',
    ],
  },
  {
    period: 'TRAINING PROGRAM',
    role: 'Data Science & AI/ML Trainee',
    org: 'Cognizant (CTS) training program',
    details: [
      'Practiced data handling, Python, SQL, data warehousing and ETL fundamentals.',
      'Explored PySpark and generative AI concepts through guided learning and projects.',
      'Developed presentation, communication, and collaboration skills during behavioral sessions.',
    ],
  },
]

function SectionLabel({ children }) {
  return <p className="section-label"><span className="prompt">▸</span> {children}</p>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Arulraj home"><span className="brand-mark">&lt;/&gt;</span><span>arulraj<span className="accent">.dev</span></span></a>
        <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
        <p className="terminal-line"><span>arulraj@portfolio</span>:<span className="path">~</span>$ whoami</p>
        <h1>Hi, I'm <span className="text-gradient">Arulraj S.</span><br />I build software that <span className="underline-accent">solves problems.</span></h1>
        <p className="hero-subtitle">Software Engineer <span className="accent">/</span> AI/ML Developer</p>
        <p className="hero-description">I enjoy building reliable backend systems, full-stack applications, and practical machine learning solutions. I turn ideas into useful, maintainable software.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore projects <ArrowUpRight size={17} /></a>
          <a href={profile.resume} className="button button-secondary" download><FileText size={16} /> Download resume</a>
        </div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Decorative code terminal">
        <div className="terminal-window">
          <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span><Terminal size={13} /> arulraj — zsh</span><span className="terminal-top-right">80 × 24</span></div>
          <div className="terminal-body">
            <p><span className="term-green">➜</span> <span className="term-blue">~</span> cat developer.json</p>
            <div className="code-block">
              <p><span className="code-brace">{'{'}</span></p>
              <p className="indent"><span className="code-key">"name"</span>: <span className="code-string">"Arulraj S."</span>,</p>
              <p className="indent"><span className="code-key">"focus"</span>: <span className="code-string">"Software Engineering"</span>,</p>
              <p className="indent"><span className="code-key">"interests"</span>: [</p>
              <p className="indent2"><span className="code-string">"Machine Learning"</span>,</p>
              <p className="indent2"><span className="code-string">"Backend Engineer"</span>,</p>
              <p className="indent2"><span className="code-string">"Linux"</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="code-key">"currently"</span>: <span className="code-string">"building & learning"</span></p>
              <p><span className="code-brace">{'}'}</span></p>
            </div>
            <p className="terminal-output"><span className="term-green">✓</span> Loaded developer profile successfully.</p>
            <p className="terminal-prompt"><span className="term-green">➜</span> <span className="term-blue">~</span> <span className="cursor" /></p>
          </div>
          <div className="terminal-footer"><span><span className="status-dot" /> system ready</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
        </div>
        <div className="float-chip chip-one"><span className="chip-symbol"></span><span><b>cmd</b><small>profile</small></span></div>
        <div className="float-chip chip-two"><BrainCircuit size={19} /><span><b>AI / ML</b><small>Applied projects</small></span></div>
        <div className="visual-grid" />
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section container">
      <SectionLabel>01 / ABOUT ME</SectionLabel>
      <div className="about-grid">
        <div>
          <h2>Curious by nature.<br /><span className="muted-heading">Engineer by practice.</span></h2>
        </div>
        <div className="about-copy">
          <p>I'm a B.Tech graduate in Artificial Intelligence and Machine Learning, interested in software engineering, backend development, and applied AI.</p>
          <p>I like understanding how systems work end-to-end — from API design and database modeling to interfaces, data pipelines, and model evaluation. My projects help me connect concepts with practical implementation.</p>
          <div className="about-facts">
            <div><span className="fact-icon"><CheckCircle2 size={16} /></span><span>Hands-on project experience</span></div>
            <div><span className="fact-icon"><CheckCircle2 size={16} /></span><span>Continuous learning mindset</span></div>
            <div><span className="fact-icon"><CheckCircle2 size={16} /></span><span>Java · Full-stack · AI/ML</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <SectionLabel>02 / TECH STACK</SectionLabel>
        <div className="section-heading-row"><div><h2>Tools I work with<span className="accent">.</span></h2><p className="section-intro">A practical toolkit across application development and machine learning.</p></div><span className="small-code">const skills = [ ... ]</span></div>
        <div className="skill-grid">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
              <h3>{title}</h3>
              <div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionLabel>03 / SELECTED PROJECTS</SectionLabel>
      <div className="section-heading-row"><div><h2>Things I've built<span className="accent">.</span></h2><p className="section-intro">A selection of projects where I applied engineering and ML concepts.</p></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a></div>
      <div className="project-list">
        {projects.map(project => {
          return <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main">
              <div className="project-meta">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-highlight"><span className="accent">↳</span> {project.highlight}</div>
              <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer"><Github size={15} /> View source <ArrowUpRight size={14} /></a></div>
            </div>
            <div className="project-art">
              <div className="project-art-top"><span>PROJECT_{project.number}</span><ExternalLink size={14} /></div>
              {project.image ? (
                <img className="project-art-image" src={project.image} alt={`${project.title} preview`} />
              ) : (
                <div className="project-art-placeholder"><span>{project.title}</span><small>PROJECT SCREENSHOT</small></div>
              )}
              <div className="project-art-bottom"><span className="status-dot" /> BUILD / LEARN / ITERATE</div>
            </div>
          </article>
        })}
      </div>
      </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container">
        <SectionLabel>04 / EXPERIENCE & LEARNING</SectionLabel>
        <div className="section-heading-row"><div><h2>Where I've grown<span className="accent">.</span></h2><p className="section-intro">Learning through project delivery, training, and collaboration.</p></div></div>
        <div className="timeline">
          {experience.map((item, index) => <article className="timeline-item" key={item.role}>
            <div className="timeline-marker"><span>{index + 1}</span></div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3><p className="timeline-org">{item.org}</p>
              <ul>{item.details.map(detail => <li key={detail}><ChevronRight size={15} />{detail}</li>)}</ul>
            </div>
          </article>)}
        </div>
        
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="section container contact-section">
      <SectionLabel>05 / CONTACT</SectionLabel>
      <div className="contact-panel">
        <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
        <div className="contact-content">
          <p className="terminal-line"><span>arulraj@portfolio</span>:<span className="path">~</span>$ ./connect.sh</p>
          <h2>Have an opportunity<br />or an interesting problem?</h2>
          <p>I'm interested in entry-level software engineering opportunities where I can build, learn, and contribute to useful products.</p>
          <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16} /> Email me <ArrowUpRight size={16} /></a><button className="button button-secondary" onClick={copyEmail}>{copied ? <CheckCircle2 size={16} /> : <FileText size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div>
          <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
        </div>
        <div className="contact-code"><span className="code-key">response.status</span> = <span className="code-string">"ready_to_connect"</span>;<br /><span className="code-key">response.message</span> = <span className="code-string">"Let's build something."</span>;</div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a href="#home" className="brand"><span className="brand-mark">&lt;/&gt;</span><span>arulraj<span className="accent">.dev</span></span></a><p>@copyright 2026 <span className="accent"></span></p><a href="#home" className="back-top">Back to top ↑</a></div></footer>
}

export default function App() {
  return <div className="app-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Header /><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></div>
}