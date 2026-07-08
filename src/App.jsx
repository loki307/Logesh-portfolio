import './App.css';
function App() {
  return (
    <div className="app">
      {/* Left Fixed Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <img src="/profile.jpg" alt="Logesh V" className="profile-photo" />
          <h1>Logesh V</h1>
          <h2>AWS Cloud & DevOps Engineer</h2>
          <p>
            Motivated fresher AWS Cloud & DevOps Engineer with hands-on
            internship experience. Proficient in 10+ AWS services and DevOps
            tools. Seeking a cloud-focused entry-level role.
          </p>

          <a href="/resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>

          <div className="sidebar-links">
            <a href="https://github.com/loki307" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/logesh-v" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <nav className="sidebar-nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </aside>

      {/* Right Scrollable Content */}
      <main className="content">

        {/* Education */}
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="card">
            <h3>B.Tech – Computer Science and Engineering</h3>
            <p className="sub">PRIST University, Thanjavur | 2022 – 2026</p>
            <p>Relevant Coursework: Cloud Computing, Computer Networks, Operating Systems, Data Structures</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h2>Internship Experience</h2>
          <div className="card">
            <h3>AWS DevOps Intern – GreenTechnology, Chennai</h3>
            <p className="sub">February 2026 – June 2026</p>
            <ul>
              <li>Provisioned and managed AWS infrastructure including EC2, S3, VPC, and IAM roles, supporting 3+ internal projects</li>
              <li>Set up and maintained CI/CD pipelines using Jenkins, automating build and release workflows</li>
              <li>Monitored application performance using CloudWatch and Splunk, improving issue resolution time</li>
              <li>Implemented Terraform scripts for infrastructure-as-code provisioning on AWS</li>
              <li>Gained practical experience in Linux server administration, Git, Docker, and cloud networking</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="card">
            <h3>FreshMart – Highly Available 3-Tier Grocery Web Application</h3>
            <p className="sub">AWS | 10 AWS Services</p>
            <p>
              Architected and deployed a full-stack 3-tier grocery web app using
              S3 + CloudFront (frontend), EC2 + Node.js (backend), RDS MySQL
              (database). Built complete e-commerce functionality including
              authentication, product catalog, and order placement. Configured
              IAM least-privilege policies and monitored via CloudWatch + SNS.
            </p>
            <a href="https://github.com/loki307/freshmart-grocery" target="_blank" rel="noreferrer">View Code →</a>
          </div>

          <div className="card">
            <h3>DevOps CI/CD Pipeline with Kubernetes</h3>
            <p className="sub">Docker, Kubernetes, GitHub Actions, Python, Flask</p>
            <p>
              Developed a Python Flask app, containerized with Docker, and
              deployed on Kubernetes (Minikube) with 2 replicas for high
              availability. Fully automated CI/CD pipeline via GitHub Actions
              triggers builds on every push to main.
            </p>
            <a href="https://github.com/loki307/myapp" target="_blank" rel="noreferrer">View Code →</a>
          </div>

          <div className="card">
            <h3>IoT-Enabled Smart Energy Meter with Cloud & AI Analytics</h3>
            <p className="sub">AWS IoT Core, Python</p>
            <p>
              Developed an IoT-based smart energy monitoring system using AWS
              IoT Core for real-time data ingestion. Integrated cloud storage
              and AI-driven analytics for energy usage insights and remote
              monitoring.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2>Technical Skills</h2>

          <div className="skill-group">
            <h4>Cloud Platforms</h4>
            <div className="skill-tags">
              <span>EC2</span><span>S3</span><span>RDS</span><span>VPC</span>
              <span>Lambda</span><span>CloudWatch</span><span>IAM</span>
              <span>API Gateway</span><span>CloudFront</span><span>SNS</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>DevOps & CI/CD</h4>
            <div className="skill-tags">
              <span>Jenkins</span><span>Git</span><span>GitHub</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>GitHub Actions</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Infrastructure as Code</h4>
            <div className="skill-tags"><span>Terraform</span></div>
          </div>

          <div className="skill-group">
            <h4>Monitoring & Logging</h4>
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
        </section>

        {/* Contact / Hire Me */}
        <section id="contact" className="section">
          <h2>Hire Me</h2>
          <div className="card contact-card">
            <p>📧 lokeshpandian232@gmail.com</p>
            <p>📞 +91 6385885011</p>
            <p>📍 Thanjavur, Tamil Nadu</p>
            <div className="contact-links">
              <a href="mailto:lokeshpandian232@gmail.com" className="resume-btn">Email Me</a>
              <a href="https://linkedin.com/in/logesh-v" target="_blank" rel="noreferrer" className="resume-btn outline">LinkedIn</a>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2026 Logesh V. Built with React.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;