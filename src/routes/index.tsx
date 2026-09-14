import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abidur Rahman Sourov | Software QA Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Abidur Rahman Sourov, a Software Quality Assurance Engineer with 3.5+ years in web, mobile, API and automation testing.",
      },
      { property: "og:title", content: "Abidur Rahman Sourov | Software QA Engineer" },
      {
        property: "og:description",
        content: "Software QA portfolio spanning manual, automated, API and AI application testing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

const skillGroups = [
  {
    title: "Testing",
    items: ["Manual Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "Test Planning", "Test Case Design", "Exploratory Testing", "Bug Reporting", "Release Validation"],
  },
  { title: "Automation", items: ["Selenium", "Playwright", "API Automation"] },
  { title: "API & Performance", items: ["Postman", "REST API Testing", "Apache JMeter"] },
  { title: "Tools", items: ["Jira", "GitLab", "Trello", "Microsoft Excel", "Microsoft Teams", "GitHub", "Visual Studio"] },
  { title: "Programming", items: ["Java", "C", "SQL"] },
  { title: "Methodologies", items: ["Agile", "Scrum", "SDLC", "AI-Assisted Testing"] },
];

const roles = [
  {
    role: "QA Engineer, Contractual",
    company: "EasyAsk",
    date: "February 2025 — Present",
    points: ["Manual, regression and API testing for AI-powered e-commerce applications", "Test-case design and execution", "Defect documentation and tracking using Jira", "Agile collaboration and release validation", "Testing-process improvement"],
  },
  {
    role: "SQA Engineer",
    company: "Blue Solutions Ltd.",
    date: "January 2023 — January 2025",
    points: ["Web and mobile application testing", "Functional, regression and API testing", "Postman and Playwright testing", "Defect tracking through Jira and Trello", "Collaboration with developers and product teams", "QA-process and release-workflow improvement"],
  },
  {
    role: "Trainee SQA Engineer",
    company: "Blue Solutions Ltd.",
    date: "April 2022 — January 2023",
    points: ["Manual, regression and API testing", "Test-case preparation and execution", "Defect identification and documentation", "Agile team collaboration", "Release validation"],
  },
  {
    role: "Junior Network Officer Intern",
    company: "Gazi Network",
    date: "November 2021 — February 2022",
    points: ["Daily transmission-link monitoring", "Server-health checking", "Router and switch configuration"],
  },
];

const projects = [
  { index: "01", name: "Steven Engineering", type: "Enterprise Web Application Testing", description: "An enterprise platform supporting business operations and workflow management." },
  { index: "02", name: "Allred’s", type: "B2B eCommerce Platform", description: "An HVAC product-distribution and business-operations platform." },
  { index: "03", name: "BongoBD", type: "OTT Streaming Platform", description: "A web and mobile entertainment platform supporting streaming, subscriptions, authentication, content discovery, playback and multi-device access." },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function ExternalLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const light = saved === "light";
    setLightTheme(light);
    document.documentElement.classList.toggle("light", light);
  }, []);

  const toggleTheme = () => {
    const next = !lightTheme;
    setLightTheme(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("portfolio-theme", next ? "light" : "dark");
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:sourovsqa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Abidur Rahman Sourov, home">
          <span className="brand-mark">AS</span>
          <span className="brand-copy"><strong>Abidur Rahman Sourov</strong><small>Quality assurance engineer</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={lightTheme ? "Use dark theme" : "Use light theme"} title={lightTheme ? "Dark theme" : "Light theme"}>
            {lightTheme ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <div className="status-badge"><span />Open to QA Opportunities</div>
            <p className="hero-kicker">Software Quality Assurance Engineer · Bangladesh</p>
            <h1>I Test Beyond<br />the <em>Happy Path.</em></h1>
            <p className="hero-description">Software Quality Assurance Engineer with 3.5+ years of experience in manual and automated testing across web, mobile, API, and AI-powered applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View My Projects <ArrowDown size={17} /></a>
              <a className="button button-secondary" href="/Abidur-Rahman-Sourov-CV.txt" download>Download CV <Download size={17} /></a>
              <a className="button button-quiet" href="#contact">Let’s Connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><BriefcaseBusiness size={16} />3.5+ years experience</span>
              <span><MapPin size={16} />Bangladesh</span>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="Portrait placeholder for Abidur Rahman Sourov">
            <div className="portrait-grid" />
            <div className="portrait-frame">
              <div className="portrait-monogram">AS</div>
              <p>Professional portrait</p>
              <span>Abidur Rahman Sourov</span>
            </div>
            <div className="portrait-note"><ShieldCheck size={19} /><span><strong>Quality first.</strong><small>Every release, every path.</small></span></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <SectionHeading eyebrow="01 / About" title="Quality is a team practice, not a final checkpoint." />
          <div className="about-layout">
            <p className="about-lead">I am a Software Quality Assurance Engineer focused on building reliable, user-friendly software through thoughtful testing and early defect prevention.</p>
            <div className="about-body">
              <p>My experience includes manual testing, test automation, API validation, defect management, and release testing across web and mobile products. I enjoy collaborating with development and product teams to improve quality throughout the software development lifecycle.</p>
              <div className="principles">
                {[["01", "Think like a user"], ["02", "Test with intent"], ["03", "Communicate clearly"]].map(([n, text]) => <div key={n}><span>{n}</span><strong>{text}</strong></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <SectionHeading eyebrow="02 / Capabilities" title="A practical toolkit for dependable software." description="Hands-on experience across the full quality lifecycle—from understanding requirements to validating releases." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading eyebrow="03 / Experience" title="Building quality into every stage." />
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="timeline-item" key={`${role.company}-${role.role}`}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-date">{role.date}</div>
                <div className="timeline-content">
                  <h3>{role.role}</h3><p className="company">{role.company}</p>
                  <ul>{role.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <SectionHeading eyebrow="04 / Selected work" title="Products tested with care and context." description="A selection of platforms where quality, usability and dependable behavior matter." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  <span>{project.index}</span>
                  <div className="test-window" aria-hidden="true"><div className="window-top"><i /><i /><i /></div><div className="window-content"><b /><b /><b /><b /></div></div>
                </div>
                <div className="project-copy">
                  <p>{project.type}</p><h3>{project.name}</h3><span>{project.description}</span>
                  <div className="project-note">Case study details available on request</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <SectionHeading eyebrow="05 / QA Process" title="A clear path from requirement to release." />
          <div className="process-flow" id="process-title">
            {["Requirement Analysis", "Test Planning", "Test Execution", "Defect Reporting", "Retesting", "Release Validation"].map((step, index, items) => (
              <div className="process-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < items.length - 1 ? <ChevronRight size={19} /> : null}</div>
            ))}
          </div>
        </section>

        <section id="education" className="section section-alt">
          <SectionHeading eyebrow="06 / Education" title="A foundation built for technology and quality." />
          <div className="education-grid">
            <article className="education-feature"><GraduationCap size={28} /><p>2017 — 2021</p><h3>Bachelor of Science in Software Engineering</h3><span>Daffodil International University of Bangladesh</span></article>
            <div className="credentials">
              <article><span>2022</span><div><h3>Cisco Certified Network Associate</h3><p>Professional certification</p></div></article>
              <article><span>2024</span><div><h3>SQA and Cyber Security Course</h3><p>IT Training BD</p></div></article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy">
            <SectionHeading eyebrow="07 / Contact" title="Let’s build software people can trust." />
            <p>Have a QA opportunity or a product that needs thoughtful testing? I’d be glad to hear about it.</p>
            <div className="contact-links">
              <a href="mailto:sourovsqa@gmail.com"><Mail size={18} /><span><small>Email</small>sourovsqa@gmail.com</span></a>
              <a href="tel:+8801737584897"><Phone size={18} /><span><small>Phone</small>+880 1737 584897</span></a>
              <a href="https://www.linkedin.com/in/abidursourov" target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small>/in/abidursourov</span></a>
              <a href="https://github.com/abidursourov97" target="_blank" rel="noreferrer"><Github size={18} /><span><small>GitHub</small>/abidursourov97</span></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <div className="field-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
            <label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label>
            <label>Message<textarea name="message" required rows={5} placeholder="Tell me about the opportunity or project..." /></label>
            <button className="button button-primary submit-button" type="submit">Send Message <Send size={17} /></button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">AS</span><p>Designed to demonstrate quality, clarity and attention to detail.</p></div>
        <div className="footer-links"><ExternalLink href="https://www.linkedin.com/in/abidursourov" label="LinkedIn"><Linkedin size={18} /></ExternalLink><ExternalLink href="https://github.com/abidursourov97" label="GitHub"><Github size={18} /></ExternalLink><a className="icon-link" href="mailto:sourovsqa@gmail.com" aria-label="Email"><Mail size={18} /></a></div>
        <p>© {new Date().getFullYear()} Abidur Rahman Sourov</p>
      </footer>
    </div>
  );
}