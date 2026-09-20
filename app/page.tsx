import Image from "next/image";
import ContactForm from "./components/ContactForm";
import SectionTitle from "./components/SectionTitle";
import Services from "./components/Services";
import {
  ArrowUpIcon,
  ChevronDownIcon,
  GithubIcon,
  HomeIcon,
  MailIcon,
} from "./components/icons";

const EMAIL = "tontakarn.phachansitthi46@gmail.com";
const GITHUB = "https://github.com/TonnPcst";

export default function Home() {
  const skills = {
    Backend: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Java",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "WebSockets",
      "SSE",
    ],
    "Databases & Caching": [
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "MySQL",
      "Mongoose",
      "RabbitMQ",
    ],
    "Cloud & DevOps": [
      "AWS EC2",
      "ECS",
      "S3",
      "RDS",
      "Google Cloud (GCP)",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
    ],
    "Testing & Tools": ["Swagger", "Postman", "Jira", "ClickUp"],
  };

  const techBadges = [
    { label: "NestJS", short: "Nest", className: "bg-[#e0234e] text-white" },
    {
      label: "Node.js",
      short: "node",
      className: "bg-[#1f1f1f] text-[#6cc24a]",
    },
    { label: "TypeScript", short: "TS", className: "bg-[#3178c6] text-white" },
    { label: "PostgreSQL", short: "PG", className: "bg-[#336791] text-white" },
    { label: "Docker", short: "Docker", className: "bg-[#2496ed] text-white" },
    { label: "Kubernetes", short: "K8s", className: "bg-[#326ce5] text-white" },
    { label: "AWS", short: "aws", className: "bg-[#232f3e] text-[#ff9900]" },
  ];

  const services = [
    {
      label: "API & Integration",
      title: "API Development & Integration",
      description:
        "Designing and implementing secure, scalable APIs that connect applications and third-party systems seamlessly.",
      features: [
        "RESTful API design for high-throughput services",
        "Banking payment gateway integration (BCEL, LDB, LVB)",
        "SMS gateway / OTP and FCM notification services",
        "Authentication with social sign-in (Google, Apple, Facebook)",
      ],
      tags: ["API", "NestJS", "Payments"],
      art: "api" as const,
    },
    {
      label: "Microservices",
      title: "Microservices & Databases",
      description:
        "Building event-friendly microservice backends with reliable data layers and fast caching.",
      features: [
        "NestJS / Prisma / PostgreSQL microservices",
        "Database schema design and modelling",
        "RabbitMQ messaging between services",
        "Redis caching for faster data retrieval",
      ],
      tags: ["Microservices", "PostgreSQL", "Redis"],
      art: "microservices" as const,
    },
    {
      label: "Cloud & DevOps",
      title: "Cloud & DevOps",
      description:
        "Shipping containerized applications with automated pipelines and repeatable infrastructure.",
      features: [
        "Docker and Kubernetes deployments",
        "CI/CD pipelines with GitHub Actions",
        "AWS (EC2, ECS, S3, RDS) and Google Cloud",
        "Infrastructure as code with Terraform",
      ],
      tags: ["AWS", "Kubernetes", "CI/CD"],
      art: "cloud" as const,
    },
  ];

  const languages = [
    { name: "Lao", level: "Excellent" },
    { name: "Thai", level: "Fluent" },
    { name: "English", level: "Intermediate" },
  ];

  const experience = [
    {
      company: "ATCODE",
      role: "Backend Developer",
      period: "2025 – Present",
      projects: [
        {
          name: "Panda EV",
          period: "2026 – Present",
          points: [
            "Built the Prisma database schema and CI/CD/Kubernetes deployment pipeline for the OCPP 1.6J EV-charging platform.",
          ],
        },
        {
          name: "HANKAN",
          period: "2026 – Present",
          points: [
            "Built the authentication service (registration, login, and social sign-in via Google, Apple, and Facebook) and its SMS gateway/OTP service as primary backend developer.",
          ],
        },
        {
          name: "DAOFAGO",
          period: "2025 – Present",
          points: [
            "Built core backend microservices (NestJS/Prisma/PostgreSQL) for a digital lottery platform — lottery, points, and customer services — with payment integration across three Lao banks (BCEL, LDB, LVB).",
            "Built the SMS gateway and FCM notification services for OTP delivery and customer alerts.",
          ],
        },
        {
          name: "Tigerhead Chat Bot",
          period: "2025 – 2026",
          points: [
            "Built the backend handling bottle-cap code validation, redemption, duplicate prevention, and reward management.",
          ],
        },
      ],
    },
    {
      company: "UNITEL TELECOM",
      role: "Backend Developer",
      period: "2024",
      projects: [
        {
          name: "Ambulance Program",
          period: "",
          points: [
            "Developed a Java-based ambulance program for emergency dispatch and vehicle tracking/monitoring.",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      name: "Panda EV",
      period: "2026 – Present",
      description:
        "OCPP 1.6J EV-charging platform — Prisma database schema and a CI/CD pipeline deploying to Kubernetes.",
      tags: ["Prisma", "Kubernetes", "CI/CD"],
      logo: "/projects/pandaev.jpg",
      gradient: "linear-gradient(135deg, #23282f, #3aa655)",
    },
    {
      name: "HANKAN",
      period: "2026 – Present",
      description:
        "Authentication service with registration, login, and social sign-in (Google, Apple, Facebook), plus an SMS gateway/OTP service.",
      tags: ["NestJS", "OAuth", "REST API"],
      logo: "/projects/hankan.png",
      gradient: "linear-gradient(135deg, #1a3a5f, #4b80aa)",
    },
    {
      name: "DAOFAGO",
      period: "2025 – Present",
      description:
        "Digital lottery platform — lottery, points, and customer microservices, payments across BCEL, LDB, and LVB, and SMS/FCM notifications.",
      tags: ["NestJS", "Prisma", "PostgreSQL", "Payments"],
      logo: "/projects/daofago.jpg",
      gradient: "linear-gradient(135deg, #24559b, #4390c9)",
    },
    {
      name: "Tigerhead Chat Bot",
      period: "2025 – 2026",
      description:
        "Backend for validating bottle-cap codes, preventing duplicates, handling redemption, and managing rewards.",
      tags: ["Node.js", "TypeScript", "Redis"],
      logo: "/projects/tigerhead.jpg",
      gradient: "linear-gradient(135deg, #061d47, #1d4a8c)",
    },
  ];

  const sectionIndex = [
    { id: "top", label: "00" },
    { id: "services", label: "01" },
    { id: "experience", label: "02" },
    { id: "projects", label: "03" },
    { id: "contact", label: "04" },
  ];

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="#top"
            className="pointer-events-auto flex items-center gap-3"
          >
            <span className="size-10 rounded-full bg-black text-white grid place-items-center text-xs font-medium tracking-wider">
              TP
            </span>
            <span className="hidden sm:block border-l border-black/30 pl-3 text-xs leading-tight text-black/70">
              Tontakarn
              <br />
              Phachansitthi
            </span>
          </a>

          <nav className="pointer-events-auto flex items-center gap-1 rounded-xl bg-black/[0.07] backdrop-blur p-1.5 text-sm">
            <a
              href="#top"
              aria-label="Home"
              className="rounded-lg bg-white p-2 text-black/70 shadow-sm"
            >
              <HomeIcon className="size-5" />
            </a>
            <a
              href="#services"
              className="px-2.5 sm:px-4 py-2 text-black/60 hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#experience"
              className="hidden sm:block px-4 py-2 text-black/60 hover:text-black transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-2.5 sm:px-4 py-2 text-black/60 hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-2.5 sm:px-4 py-2 text-black/60 hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="pointer-events-auto hidden md:flex items-center gap-2.5 rounded-xl bg-[#1b1b1b] px-5 py-3 text-sm text-white"
          >
            <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />
            Open to work
          </a>
          <span className="md:hidden size-10" aria-hidden="true" />
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-6">
        {/* social rail */}
        <div className="hidden lg:flex absolute left-8 top-44 flex-col items-center gap-5 text-black/60">
          <span className="h-24 w-px bg-black/30" />
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition-colors"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="hover:text-black transition-colors"
          >
            <MailIcon className="size-5" />
          </a>
          <span className="h-24 w-px bg-black/30" />
        </div>

        {/* section index */}
        <div className="hidden lg:flex absolute right-8 top-44 flex-col items-end gap-6 text-sm text-black/30">
          {sectionIndex.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-black transition-colors ${i === 0 ? "text-black/70" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mx-auto w-56 md:w-72">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Tontakarn Phachansitthi in front of a waterfall"
              width={964}
              height={1280}
              sizes="(min-width: 768px) 288px, 224px"
              priority
              className="w-full h-auto rounded-t-[112px] md:rounded-t-[144px] rounded-b-3xl shadow-xl ring-1 ring-black/10"
            />
            <div
              className="absolute -top-2 -right-16 md:-right-24 w-28 md:w-36"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 140 110"
                fill="#f1f1f1"
                stroke="#111"
                strokeWidth="2.5"
                strokeLinejoin="round"
              >
                <path d="M70 6C36 6 8 24 8 48c0 22 22 38 50 41-2 8-8 14-16 17 14 0 26-6 32-15 3 0 6 1 8 1 36 0 58-18 58-44S106 6 70 6Z" />
              </svg>
              <span className="absolute inset-0 grid place-items-center pb-3 font-hand text-3xl md:text-4xl font-bold -rotate-6">
                hello!
              </span>
            </div>
          </div>

          <h1 className="mt-10 text-5xl md:text-7xl font-medium tracking-tight">
            Back-End Developer
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-xs md:text-sm text-black/50 leading-relaxed">
            Backend developer with hands-on experience building scalable
            microservice architectures using NestJS, TypeScript, and Java.
            Skilled in designing high-throughput REST APIs, working with
            PostgreSQL/Prisma, RabbitMQ, and Redis caching, and deploying
            containerized applications on AWS and Kubernetes with CI/CD
            pipelines. Experienced integrating banking payment gateways and SMS
            providers.
          </p>

          <div className="mt-8 mx-auto max-w-md flex items-center gap-4">
            <ChevronDownIcon className="size-5 text-black/70 shrink-0" />
            <a
              href="#contact"
              className="flex-1 rounded-lg bg-gradient-to-b from-[#3a3a3a] to-[#0d0d0d] py-3 text-sm text-white hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <ChevronDownIcon className="size-5 text-black/70 shrink-0" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="scroll-mt-20 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Services</SectionTitle>
          <Services services={services} />
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={`size-16 md:size-20 rounded-full grid place-items-center text-sm md:text-base font-semibold shadow-md ${badge.className}`}
                >
                  {badge.short}
                </span>
                <span className="text-xs text-black/40">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/15 pt-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs text-black/40 uppercase tracking-widest mb-4">
                  {category}
                </p>
                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-black/60 hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="scroll-mt-20 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-xl bg-white/60 border border-black/10 p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-lg font-medium">{job.company}</h3>
                    <p className="text-xs text-black/40 uppercase tracking-widest mt-1">
                      {job.role}
                    </p>
                  </div>
                  <span className="text-sm text-black/40 shrink-0">
                    {job.period}
                  </span>
                </div>
                <div className="space-y-6">
                  {job.projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h4 className="text-sm font-medium text-black/80">
                          {project.name}
                        </h4>
                        {project.period && (
                          <span className="text-xs text-black/35 shrink-0">
                            {project.period}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 text-sm text-black/60 leading-relaxed">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="text-black/25 mt-0.5">—</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="scroll-mt-20 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-xl overflow-hidden bg-white/60 border border-black/10"
              >
                <div
                  className="relative h-48 p-5 flex flex-col justify-between text-white"
                  style={{ background: project.gradient }}
                >
                  <div className="flex items-start justify-between">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={72}
                      height={72}
                      className="size-[72px] rounded-2xl object-cover bg-white shadow-lg ring-1 ring-white/30 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-xs text-white/70">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight">
                    {project.name}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-black/55 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full border border-black/15 text-black/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACKGROUND (education + languages) ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Background</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/60 border border-black/10 p-6">
              <p className="text-xs text-black/40 uppercase tracking-widest mb-3">
                Education
              </p>
              <h3 className="font-medium">National University of Laos</h3>
              <p className="text-sm text-black/50 mt-1">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-black/40 mt-3">2020 – 2024</p>
            </div>
            <div className="rounded-xl bg-white/60 border border-black/10 p-6">
              <p className="text-xs text-black/40 uppercase tracking-widest mb-3">
                Languages
              </p>
              <ul className="space-y-1.5 text-sm">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex justify-between text-black/70"
                  >
                    <span>{language.name}</span>
                    <span className="text-black/40">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-20 py-16 px-4 sm:px-6">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl bg-card-dark text-white px-6 sm:px-12 md:px-20 py-14">
          {/* decoration */}
          <span
            className="absolute -bottom-16 -left-16 size-44 rounded-full border-[14px] border-white/70"
            aria-hidden="true"
          />
          <span
            className="absolute top-6 right-6 size-20 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
            aria-hidden="true"
          />
          <span className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 text-xs tracking-widest text-white/50 [writing-mode:vertical-rl] rotate-180">
            Social Media
          </span>

          <div className="relative text-center">
            <SectionTitle tone="dark">Contact</SectionTitle>
            <p className="mx-auto max-w-xl text-sm text-white/75 leading-relaxed mb-8">
              Let&apos;s build something amazing together! Whether you have a
              project idea, a collaboration in mind or just want to say hi —
              I&apos;d love to hear from you. Open to backend roles, freelance
              projects, and interesting collaborations.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white break-all"
            >
              <MailIcon className="size-4 shrink-0" />
              {EMAIL}
            </a>

            <div className="mt-6">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-10 py-2.5 text-sm text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </div>

            <p className="mt-10 mb-5 text-sm text-white/80">
              If you have any idea we can talk about it, lets do something
              together . . . !
            </p>
            <div className="mx-auto max-w-2xl">
              <ContactForm email={EMAIL} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 pt-10 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between border-b border-black/60 pb-3 text-sm sm:text-base font-medium">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:opacity-60 transition-opacity"
            >
              {/* Chat with me */}
            </a>
            <span>Thanks For Visiting</span>
          </div>
          <div className="flex items-center justify-between pt-3 text-[11px] text-black/40">
            <span>© {new Date().getFullYear()} Tontakarn Phachansitthi</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-black transition-colors"
            >
              <ArrowUpIcon className="size-3" />
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
