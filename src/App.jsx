import { useEffect, useState } from 'react';
import './App.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function HeroDiagram() {
  return (
    <svg
      className="hero-diagram"
      viewBox="0 0 480 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated diagram of an AWS cloud architecture: request flows from a client through CloudFront, an EC2 application tier and an RDS database, guarded by IAM and observed by CloudWatch."
    >
      {/* blueprint grid */}
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid-line)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="480" height="420" fill="url(#grid)" />

      {/* VPC boundary */}
      <rect x="120" y="90" width="300" height="230" rx="10" className="vpc-boundary" />
      <text x="132" y="112" className="node-tag">VPC — 10.0.0.0/16</text>

      {/* connectors */}
      <path className="link link-a" d="M50,60 L150,60 L150,140" />
      <path className="link link-b" d="M150,140 L150,220" />
      <path className="link link-c" d="M170,180 L330,180" />
      <path className="link link-d" d="M330,180 L330,260" />
      <path className="link link-e" d="M150,220 L60,300" />
      <path className="link link-f" d="M330,260 L330,300" />

      {/* traveling pulse */}
      <circle r="4" className="pulse pulse-a">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M50,60 L150,60 L150,140 L150,220" />
      </circle>
      <circle r="4" className="pulse pulse-b">
        <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path="M170,180 L330,180 L330,260" />
      </circle>

      {/* Client node */}
      <g className="node" transform="translate(50,60)">
        <circle r="20" className="node-circle" />
        <text y="4" className="node-icon">👤</text>
        <text y="38" className="node-label">Client</text>
      </g>

      {/* CloudFront */}
      <g className="node" transform="translate(150,140)">
        <circle r="22" className="node-circle node-accent" />
        <text y="4" className="node-icon">☁︎</text>
        <text y="42" className="node-label">CloudFront</text>
      </g>

      {/* EC2 */}
      <g className="node" transform="translate(150,220)">
        <circle r="22" className="node-circle node-accent" />
        <text y="4" className="node-icon">▣</text>
        <text y="42" className="node-label">EC2</text>
      </g>

      {/* RDS */}
      <g className="node" transform="translate(330,260)">
        <circle r="22" className="node-circle node-accent" />
        <text y="4" className="node-icon">⛁</text>
        <text y="42" className="node-label">RDS</text>
      </g>

      {/* CloudWatch */}
      <g className="node" transform="translate(330,180)">
        <circle r="20" className="node-circle" />
        <text y="4" className="node-icon">◈</text>
        <text y="38" className="node-label">CloudWatch</text>
      </g>

      {/* IAM */}
      <g className="node" transform="translate(60,300)">
        <circle r="20" className="node-circle" />
        <text y="4" className="node-icon">🔒</text>
        <text y="38" className="node-label">IAM</text>
      </g>
    </svg>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div className="app">
      {/* Navbar */}
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="brand">
          <span className="brand-mark">LV</span>
          <span className="brand-name">Logesh&nbsp;V</span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="btn btn-primary nav-cta">
            Resume
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AWS Cloud &amp; DevOps Engineer</p>
            <h1>
              I design, deploy &amp; monitor
              <br />
              cloud infrastructure that <span className="accent">stays up.</span>
            </h1>
            <p className="hero-sub">
              B.Tech CSE graduate with hands-on AWS DevOps internship experience.
              I provision infrastructure, automate CI/CD pipelines, and keep systems
              observable — across 10+ AWS services and a modern DevOps toolchain.
            </p>
            <div className="hero-actions">
              <a href="/resume.pdf" download className="btn btn-primary">
                Download Resume
              </a>
              <a href="#projects" className="btn btn-ghost">
                View Projects
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>10+</strong>
                <span>AWS services used</span>
              </div>
              <div>
                <strong>3</strong>
                <span>End-to-end projects</span>
              </div>
              <div>
                <strong>5 mo</strong>
                <span>DevOps internship</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <HeroDiagram />
          </div>
        </section>

        {/* Tech strip */}
        <section className="tech-strip" aria-label="Core tools and platforms">
          <div className="tech-track">
            {[
              'AWS EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Lambda', 'CloudWatch',
              'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub Actions',
              'AWS EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Lambda', 'CloudWatch',
              'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub Actions',
            ].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Fresher engineer, production-grade habits</h2>
          </div>
          <div className="about-grid">
            <img src="/profile.jpg" alt="Logesh V" className="about-photo" />
            <div className="about-body">
              <p>
                I'm a 2026 B.Tech Computer Science graduate from PRIST University,
                Thanjavur, focused on AWS Cloud and DevOps engineering. During my
                internship at GreenTechnology, I provisioned and managed real AWS
                infrastructure, built CI/CD pipelines with Jenkins, and monitored
                production workloads with CloudWatch and Splunk.
              </p>
              <p>
                Outside the internship, I've shipped a full 3-tier AWS web
                application from scratch and a Dockerized Kubernetes deployment
                with an automated GitHub Actions pipeline — because I'd rather
                learn a service by deploying it than by reading about it.
              </p>
              <ul className="about-facts">
                <li><span>Based in</span> Thanjavur, Tamil Nadu — open to Chennai, Bangalore, Trichy, Coimbatore &amp; remote</li>
                <li><span>Education</span> B.Tech CSE, PRIST University (2022 – 2026)</li>
                <li><span>Focus</span> Cloud infrastructure, CI/CD automation, monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Where I've worked</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>AWS DevOps Intern</h3>
                  <span className="timeline-date">Feb 2026 – Jun 2026</span>
                </div>
                <p className="sub">GreenTechnology, Chennai</p>
                <ul>
                  <li>Provisioned and managed AWS infrastructure including EC2, S3, VPC, and IAM roles, supporting 3+ internal projects</li>
                  <li>Set up and maintained CI/CD pipelines using Jenkins, automating build and release workflows</li>
                  <li>Monitored application performance using CloudWatch and Splunk, improving issue resolution time</li>
                  <li>Implemented Terraform scripts for infrastructure-as-code provisioning on AWS</li>
                  <li>Gained practical experience in Linux server administration, Git, Docker, and cloud networking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Things I've built end-to-end</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-top">
                <h3>FreshMart</h3>
                <span className="project-badge">10 AWS services</span>
              </div>
              <p className="sub">Highly available 3-tier grocery web application</p>
              <p>
                Architected and deployed a full-stack app using S3 + CloudFront
                (frontend), EC2 + Node.js (backend) and RDS MySQL (database).
                Built authentication, product catalog and order placement, with
                IAM least-privilege policies and CloudWatch + SNS monitoring.
              </p>
              <div className="project-tags">
                <span>VPC</span><span>EC2</span><span>S3</span><span>CloudFront</span><span>RDS</span><span>IAM</span>
              </div>
              <a href="https://github.com/loki307/freshmart-grocery" target="_blank" rel="noreferrer" className="project-link">
                View code →
              </a>
            </article>

            <article className="project-card">
              <div className="project-top">
                <h3>K8s CI/CD Pipeline</h3>
                <span className="project-badge">Automated</span>
              </div>
              <p className="sub">Dockerized Flask app on Kubernetes</p>
              <p>
                Built a Python Flask app, containerized it with Docker, and
                deployed it on Kubernetes (Minikube) with 2 replicas for high
                availability. GitHub Actions triggers the full CI/CD pipeline
                on every push to main.
              </p>
              <div className="project-tags">
                <span>Docker</span><span>Kubernetes</span><span>GitHub Actions</span><span>Flask</span>
              </div>
              <a href="https://github.com/loki307/myapp" target="_blank" rel="noreferrer" className="project-link">
                View code →
              </a>
            </article>

            <article className="project-card">
              <div className="project-top">
                <h3>Smart Energy Meter</h3>
                <span className="project-badge">IoT + AI</span>
              </div>
              <p className="sub">Cloud &amp; AI-analytics energy monitoring</p>
              <p>
                Built an IoT-based smart energy monitoring system using AWS IoT
                Core for real-time data ingestion, with cloud storage and
                AI-driven analytics for usage insights and remote monitoring.
              </p>
              <div className="project-tags">
                <span>AWS IoT Core</span><span>Python</span>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Stack I work in</h2>
          </div>
          <div className="skills-panel">
            <div className="skill-group">
              <h4>Cloud Platforms</h4>
              <div className="skill-tags">
                <span>EC2</span><span>S3</span><span>RDS</span><span>VPC</span>
                <span>Lambda</span><span>CloudWatch</span><span>IAM</span>
                <span>API Gateway</span><span>CloudFront</span><span>SNS</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>DevOps &amp; CI/CD</h4>
              <div className="skill-tags">
                <span>Jenkins</span><span>Git</span><span>GitHub</span>
                <span>Docker</span><span>Kubernetes</span><span>GitHub Actions</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Infrastructure as Code</h4>
              <div className="skill-tags"><span>Terraform</span></div>
            </div>
            <div className="skill-group">
              <h4>Monitoring &amp; Logging</h4>
              <div className="skill-tags">
                <span>CloudWatch</span><span>Splunk</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Networking</h4>
              <div className="skill-tags">
                <span>VPC</span><span>Subnets</span><span>Security Groups</span>
                <span>Internet Gateway</span><span>VPC Peering</span><span>Elastic IP</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Programming</h4>
              <div className="skill-tags"><span>Python (Basics)</span></div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's build something reliable together</h2>
              <p className="hero-sub">
                Open to entry-level Cloud &amp; DevOps roles in Chennai, Bangalore,
                Trichy, Coimbatore, or remote. Reach out — I reply fast.
              </p>
            </div>
            <div className="contact-details">
              <a href="mailto:lokeshpandian232@gmail.com">📧 lokeshpandian232@gmail.com</a>
              <a href="tel:+916385885011">📞 +91 63858 85011</a>
              <span>📍 Thanjavur, Tamil Nadu</span>
              <div className="contact-links">
                <a href="mailto:lokeshpandian232@gmail.com" className="btn btn-primary">Email Me</a>
                <a href="https://linkedin.com/in/logesh-v" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
                <a href="https://github.com/loki307" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Logesh V — Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/loki307" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/logesh-v" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:lokeshpandian232@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
