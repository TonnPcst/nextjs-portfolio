export default function Home() {
  const skills = {
    "Backend": ["NestJS", "Node.js", "TypeScript", "JavaScript", "Express.js", "RESTful APIs", "Microservices", "WebSockets", "SSE"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Mongoose"],
    "Cloud & DevOps": ["AWS EC2", "ECS", "S3", "RDS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Terraform"],
    "Tools": ["Swagger", "Postman", "Git", "Jira"],
  };

  const projects = [
    {
      name: "DAOFAGO",
      period: "May 2024 – Present",
      description: "Backend system for a digital lottery platform — ticket purchasing, multi-bank payment processing, and automatic prize distribution.",
      tags: ["NestJS", "PostgreSQL", "Payments"],
    },
    {
      name: "HANKAN",
      period: "July 2025 – Present",
      description: "Backend auth system with social sign-in (Google, Apple, Facebook), user management, and a sports expense calculator with friends connections.",
      tags: ["NestJS", "OAuth", "REST API"],
    },
    {
      name: "Tigerhead Chat Bot",
      period: "May 2025 – Present",
      description: "System for validating bottle-cap codes, duplicate prevention, prize redemption tracking, and reward management.",
      tags: ["Node.js", "TypeScript", "Redis"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#fafafa]/90 backdrop-blur border-b border-black/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-black/40 uppercase">
            VELENTON
          </span>
          <div className="flex gap-8 text-sm font-medium text-black/40">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-40 pb-24 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-black/30 uppercase mb-6">
            Backend Developer
          </p>
          <h1 className="text-7xl font-extrabold tracking-tighter mb-2 leading-none">
            Tontakarn
          </h1>
          <h1 className="text-7xl font-extrabold tracking-tighter mb-8 leading-none text-black/20">
            Phachansitthi
          </h1>
          <p className="max-w-2xl text-base text-black/50 leading-relaxed mb-10">
            Backend developer with hands-on experience building scalable microservice
            architectures using NestJS and TypeScript. Skilled in designing high-throughput
            REST APIs, Redis caching, and cloud-native deployments on AWS.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-full font-semibold text-sm hover:bg-black/80 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-black/20 text-black/60 rounded-full font-semibold text-sm hover:border-black/60 hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT / EXPERIENCE ── */}
      <section id="about" className="py-24 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-black/30 uppercase mb-4">
              Contact
            </p>
            <div className="space-y-1 text-black/50 text-sm">
              <p>Vientiane, Laos</p>
              <a href="https://mail.google.com/mail/u/0/#inbox" className="block hover:text-black transition-colors break-all">
                tontakarn.phachansitthi46@gmail.com
              </a>
              <a href="https://github.com/TonnPcst" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">
                github.com/TonnPcst
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="border border-black/10 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">[ ATCODE ]</h3>
                  <p className="text-black/40 text-sm font-mono uppercase tracking-wider mt-0.5">Backend Developer</p>
                </div>
                <span className="text-black/30 text-sm font-mono">May 2026 – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-black/60 leading-relaxed">
                <li className="flex gap-2"><span className="text-black/20 mt-1">—</span><span>Architected microservices platform with NestJS & TypeScript, improving scalability by <strong className="text-black/80">40%</strong> and reducing latency by <strong className="text-black/80">18%</strong>.</span></li>
                <li className="flex gap-2"><span className="text-black/20 mt-1">—</span><span>Led APIs handling <strong className="text-black/80">2M+ daily requests</strong> at <strong className="text-black/80">99.9% uptime</strong>, avg response time 50ms.</span></li>
                <li className="flex gap-2"><span className="text-black/20 mt-1">—</span><span>Introduced Redis caching — <strong className="text-black/80">25% less DB load</strong>, <strong className="text-black/80">15% faster</strong> data retrieval.</span></li>
                <li className="flex gap-2"><span className="text-black/20 mt-1">—</span><span>Mentored interns & ran code reviews, reducing post-deployment bugs by <strong className="text-black/80">30%</strong>.</span></li>
                <li className="flex gap-2"><span className="text-black/20 mt-1">—</span><span>Integrated AWS (EC2, ECS, S3) into CI/CD, cutting release cycles by <strong className="text-black/80">50%</strong>.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-black/30 uppercase mb-12">Skills & Stack</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-mono text-black/30 uppercase tracking-widest mb-4">{category}</p>
                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="text-sm text-black/50 hover:text-black transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-black/30 uppercase mb-12">Projects</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-base group-hover:text-black transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono text-black/30 text-right leading-tight ml-2">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-black/50 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 border border-black/10 text-black/30 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-16 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-black/30 uppercase mb-2">Education</p>
            <h3 className="font-bold">National University of Laos</h3>
            <p className="text-sm text-black/40">BSc Computer Science — GPA 3.02 / 4.00</p>
          </div>
          <span className="font-mono text-sm text-black/30">Jan 2020 – 2024</span>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-xs tracking-widest text-black/30 uppercase mb-6">Contact</p>
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4">Let's work together.</h2>
          <p className="text-black/40 mb-10 max-w-md mx-auto text-sm">
            Open to backend roles, freelance projects, and interesting collaborations.
          </p>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold text-sm hover:bg-black/80 transition-colors"
          >
            tontakarn.phachansitthi46@gmail.com
          </a>
          <div className="flex justify-center gap-8 mt-10 text-black/30 text-xs font-mono">
            <a href="https://github.com/TonnPcst" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors uppercase tracking-widest">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 text-center text-black/20 text-xs font-mono border-t border-black/10">
        © {new Date().getFullYear()} Tontakarn Phachansitthi
      </footer>
    </div>
  );
}
