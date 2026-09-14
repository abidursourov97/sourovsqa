import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
const cvUrl = `${import.meta.env.BASE_URL}Abidur-Rahman-Sourov-CV.pdf`;
const profilePhotoUrl = `${import.meta.env.BASE_URL}profile-photo.jpg`;

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

const achievements = [
  ["3.5+", "Years of QA Experience"],
  ["96", "Documented Issues"],
  ["4", "Testing Coverage Layers"],
  ["14", "Public GitHub Repositories"],
];

const skillGroups = [
  {
    number: "01",
    title: "Manual Testing",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Exploratory Testing",
      "Integration Testing",
      "UAT",
      "Test Planning",
      "Test Case Design",
      "Bug Reporting",
    ],
  },
  {
    number: "02",
    title: "Automation",
    items: ["Playwright", "Selenium", "API Automation", "Page Object Model", "GitHub Actions"],
  },
  {
    number: "03",
    title: "API & Performance",
    items: ["Postman", "REST API Testing", "GraphQL Testing", "Newman", "Apache JMeter"],
  },
  {
    number: "04",
    title: "Tools & Technologies",
    items: [
      "Jira",
      "GitLab",
      "Trello",
      "GitHub",
      "SQL",
      "Java",
      "C",
      "Visual Studio",
      "Agile",
      "Scrum",
      "SDLC",
      "STLC",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "Allred’s Playwright Automation",
    category: "End-to-end automation",
    description:
      "An end-to-end Playwright automation framework covering homepage, search, product, authentication and dashboard workflows.",
    evidence: [
      "10 automated test cases",
      "Page Object Model",
      "HTML test reports",
      "Failure screenshots and videos",
      "GitHub Actions integration",
    ],
    technologies: ["Playwright", "JavaScript", "POM", "GitHub Actions"],
    repository: "https://github.com/abidursourov97/allreds-playwright-automation",
  },
  {
    index: "02",
    title: "Plastics Inc. B2B Manual Testing",
    category: "Manual QA case study",
    description:
      "A detailed manual QA project covering functional, UI, UX, validation, cart, order and access-control testing.",
    evidence: [
      "96 documented issues",
      "21 high-priority issues",
      "48 medium-priority issues",
      "26 low-priority issues",
    ],
    technologies: ["Manual Testing", "Test Cases", "Bug Reporting", "Regression Testing"],
    repository: "https://github.com/abidursourov97/Plastics_Manual-Testing-Bug_Report",
  },
  {
    index: "03",
    title: "DummyJSON API Testing",
    category: "API test suite",
    description:
      "A structured API testing project covering CRUD operations, positive and negative scenarios, assertions and response validation.",
    evidence: [
      "8 API requests",
      "CRUD coverage",
      "Automated assertions",
      "Response-time validation",
      "Newman execution",
    ],
    technologies: ["Postman", "REST API", "Newman", "JavaScript"],
    repository: "https://github.com/abidursourov97/DummyJSON-API-Testing-Portfolio",
  },
  {
    index: "04",
    title: "JMeter Performance Testing",
    category: "Performance validation",
    description:
      "A performance testing project created to evaluate system behaviour, response time and stability under load.",
    evidence: ["Load-test scenarios", "Response-time analysis", "Stability validation"],
    technologies: ["Apache JMeter", "Performance Testing", "Load Testing"],
    repository: "https://github.com/abidursourov97/Performance-Testing-Project-",
  },
];

const experience = [
  ["QA Engineer, Contractual", "EasyAsk", "February 2025 – Present"],
  ["Software Quality Assurance Engineer", "Blue Solutions", "January 2023 – January 2025"],
  ["Trainee Software Quality Assurance Engineer", "Blue Solutions", "April 2022 – January 2023"],
  ["Junior Network Officer Intern", "Gazi Network", "November 2021 – February 2022"],
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {label}
      </p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abidur Rahman Sourov, home">
          <span className="brand-mark">AR</span>
          <span className="brand-name">Abidur Rahman Sourov</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <Button asChild size="sm" className="nav-download">
            <a href={cvUrl} download="Abidur-Rahman-Sourov-CV.pdf">
              <Download />
              Download CV
            </a>
          </Button>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="availability">
              <span />
              Open to full-time and contract QA roles
            </div>
            <p className="hero-kicker">Software Quality Assurance Engineer</p>
            <h1>
              I test beyond
              <br />
              the <em>happy path.</em>
            </h1>
            <p className="hero-description">
              I’m Abidur Rahman Sourov, a Software Quality Assurance Engineer with 3.5+ years of
              experience testing web and mobile applications through manual, API, automation and
              performance testing.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowDown />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={cvUrl} download="Abidur-Rahman-Sourov-CV.pdf">
                  Download CV
                  <Download />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline">
                <a
                  href="https://github.com/abidursourov97"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline">
                <a
                  href="https://www.linkedin.com/in/abidursourov"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </Button>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin />
                Dhaka, Bangladesh
              </span>
              <span>
                <ShieldCheck />
                Quality backed by evidence
              </span>
            </div>
            <div className="hero-proof" aria-label="Core testing coverage">
              <div>
                <strong>Web + Mobile</strong>
                <span>Product testing</span>
              </div>
              <div>
                <strong>UI + API</strong>
                <span>Layered coverage</span>
              </div>
              <div>
                <strong>Manual + Automation</strong>
                <span>Practical QA</span>
              </div>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-code" aria-hidden="true">
              TEST / VERIFY / RELEASE
            </div>
            <div className="portrait-frame">
              <img className="portrait-photo" src={profilePhotoUrl} alt="Abidur Rahman Sourov" />
              <span className="portrait-scan" aria-hidden="true" />
              <div>
                <small>Software QA Engineer</small>
                <strong>Abidur Rahman Sourov</strong>
              </div>
            </div>
            <div className="quality-chip">
              <Check />
              <span>
                <strong>Quality first</strong>
                <small>Every release. Every path.</small>
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <Reveal>
            <SectionHeading
              label="01 / About"
              title="Quality backed by evidence."
              copy="I help teams release reliable software by identifying risks early, designing practical test coverage and reporting defects clearly. My experience includes functional, regression, exploratory, API, automation and performance testing across web and mobile products."
            />
            <div className="achievement-grid">
              {achievements.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <div className="quality-principles">
              <article>
                <span>01</span>
                <div>
                  <h3>Think in risk</h3>
                  <p>
                    Focus coverage where defects can hurt users, data and release confidence most.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Report with clarity</h3>
                  <p>
                    Turn findings into reproducible evidence that helps teams decide and act faster.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Automate with purpose</h3>
                  <p>
                    Build repeatable checks for valuable workflows while keeping exploration human.
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="section section-alt">
          <Reveal>
            <SectionHeading label="02 / Skills" title="Coverage across the quality lifecycle." />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="card-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects" className="section">
          <Reveal>
            <SectionHeading
              label="03 / Featured Projects"
              title="Test work you can inspect."
              copy="Practical QA repositories with traceable coverage, reporting and execution evidence."
            />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project) => (
              <Reveal key={project.title} className="project-reveal">
                <article className="project-card">
                  <div className="project-top">
                    <span>{project.index}</span>
                    <p>{project.category}</p>
                    <Github />
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-evidence">
                    <small>Key evidence</small>
                    <ul>
                      {project.evidence.map((item) => (
                        <li key={item}>
                          <Check />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tag-list">
                    {project.technologies.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="repo-button">
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      View Repository
                      <ArrowUpRight />
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <Reveal>
            <SectionHeading
              label="04 / Experience"
              title="A track record of dependable delivery."
            />
            <div className="timeline">
              {experience.map(([role, company, date], index) => (
                <article className="timeline-item" key={`${role}-${company}`}>
                  <div className="timeline-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-copy">
                    <p>{date}</p>
                    <h3>{role}</h3>
                    <strong>{company}</strong>
                  </div>
                </article>
              ))}
            </div>
            <div className="education-block">
              <div>
                <p className="eyebrow">
                  <span />
                  Education
                </p>
                <h3>BSc in Software Engineering</h3>
                <p>Daffodil International University · 2017–2021</p>
              </div>
              <div>
                <p className="eyebrow">
                  <span />
                  Certifications
                </p>
                <h3>Software Quality Assurance and Cyber Security</h3>
                <p>IT Training BD · 2024</p>
                <h3>CCNA Training</h3>
                <p>2022</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal>
            <SectionHeading
              label="05 / Contact"
              title="Let’s build reliable software."
              copy="I’m currently open to Software Quality Assurance opportunities, including remote and on-site roles."
            />
            <div className="contact-actions">
              <Button asChild size="lg">
                <a href="mailto:sourovsqa@gmail.com">
                  <Mail />
                  Email
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+8801737584897">
                  <Phone />
                  Phone
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://www.linkedin.com/in/abidursourov" target="_blank" rel="noreferrer">
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/abidursourov97" target="_blank" rel="noreferrer">
                  <Github />
                  GitHub
                </a>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">AR</span>
          <span className="brand-name">Abidur Rahman Sourov</span>
        </a>
        <p>© {new Date().getFullYear()} · Software Quality Assurance Engineer</p>
        <a href="mailto:sourovsqa@gmail.com">sourovsqa@gmail.com</a>
      </footer>
    </div>
  );
}
