import Image from "next/image";

const projects = [
  {
    index: "01",
    title: "Viqium AI",
    category: "AI Commerce · Production",
    description:
      "A multi-channel commerce platform that lets sellers build AI chatbots for websites, TikTok, and Facebook—automating recommendations, sales, and order tracking.",
    role: "Frontend Developer · Team of 3",
    stack: ["Next.js", "TypeScript", "NextAuth", "Redux", "Tailwind"],
    href: "https://viqiumproduction.vercel.app",
    visual: "viqium",
  },
  {
    index: "02",
    title: "Skye Education",
    category: "EdTech · Production",
    description:
      "A platform connecting students with tutors, supported by learning resources, secure authentication, automated delivery, and a production AWS infrastructure.",
    role: "Frontend Developer · Team of 3",
    stack: ["Next.js", "Framer Motion", "Docker", "AWS", "CI/CD"],
    href: "https://skyeeducation.com",
    visual: "skye",
  },
  {
    index: "03",
    title: "Smart Nutrition",
    category: "AI Research · Mobile",
    description:
      "A React Native app that analyzes food images to identify ingredients, estimate quantities, and visualize nutritional content—backed by published research.",
    role: "Frontend & AI Developer · Team of 5",
    stack: ["React Native", "Expo", "Python", "Computer Vision"],
    href: "https://github.com/TuananhDo0308/nutrition-app-mobile",
    visual: "nutrition",
  },
  {
    index: "04",
    title: "Real-time Chat",
    category: "Full-stack · Solo",
    description:
      "A responsive instant-messaging application built end-to-end with WebSocket communication and a lightweight JavaScript interface.",
    role: "Full-stack JavaScript Developer",
    stack: ["Node.js", "Express", "Socket.IO", "JavaScript"],
    href: "https://github.com/TuananhDo0308/chat-app-nodejs",
    visual: "chat",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "MS SQL"],
  },
  {
    label: "Ship & Scale",
    skills: ["Docker", "AWS", "Azure", "GitHub Actions", "System Design"],
  },
];

const achievements = [
  {
    year: "2025",
    title: "3rd Prize · Ministry Level",
    detail: "Scientific Research Competition, HCMUE",
  },
  {
    year: "2025",
    title: "Published Research Paper",
    detail: "Asian Journal of Research in Computer Science",
    href: "https://doi.org/10.9734/ajrcos/2025/v18i5650",
  },
  {
    year: "2024",
    title: "2nd Runner-up · Coderace",
    detail: "Bosch Global Software Vietnam",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "skye") {
    return (
      <div className="project-art project-art-skye">
        <Image
          src="/projects/skye-education.png"
          alt="Skye Education project preview"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (type === "viqium") {
    return (
      <div className="project-art project-art-viqium" aria-hidden="true">
        <div className="viqium-orbit orbit-one" />
        <div className="viqium-orbit orbit-two" />
        <div className="viqium-chat">
          <span className="chat-dot" />
          <span className="chat-dot" />
          <span className="chat-dot" />
        </div>
        <strong>VQ</strong>
        <span className="art-caption">AI that sells while you sleep.</span>
      </div>
    );
  }

  if (type === "nutrition") {
    return (
      <div className="project-art project-art-nutrition" aria-hidden="true">
        <div className="nutrition-phone">
          <div className="nutrition-scan">
            <span>AI</span>
          </div>
          <div className="nutrition-data">
            <i />
            <i />
            <i />
          </div>
        </div>
        <span className="art-caption">See food differently.</span>
      </div>
    );
  }

  return (
    <div className="project-art project-art-chat" aria-hidden="true">
      <div className="message message-one">Hey, are we shipping?</div>
      <div className="message message-two">Already live.</div>
      <div className="message message-three">Nice ⚡</div>
      <span className="art-caption">Made for now.</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <a className="logo" href="#top" aria-label="Anh Do Tran Tuan — Home">
          AD<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-contact" href="mailto:TuananhDo0308@gmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-status">
          <span className="status-pulse" />
          Open to opportunities · HCMC
        </div>
        <p className="hero-intro">Hello, I&apos;m Anh.</p>
        <h1>
          I build digital
          <br />
          products that <em>work.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            Frontend-focused developer crafting fast, thoughtful experiences
            with React, Next.js, and a healthy obsession with the details.
          </p>
          <a className="scroll-cue" href="#work">
            Selected work
            <span>↓</span>
          </a>
        </div>
        <div className="hero-code" aria-hidden="true">
          <span>01</span>
          <span>23</span>
          <span>45</span>
          <span>67</span>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work · 2023—2026</p>
          <h2>Things I&apos;ve helped bring to life.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <a
                className="project-visual-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
              >
                <ProjectVisual type={project.visual} />
              </a>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-intro">
          <p className="section-kicker">Experience</p>
          <h2>
            Built in teams.
            <br />
            Tested in the real world.
          </h2>
          <p>
            I care about the path from rough idea to reliable product—designing,
            building, integrating, and shipping alongside people who care too.
          </p>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-date">Jul 2025 — Jan 2026</span>
            <div>
              <h3>Frontend Intern</h3>
              <p className="timeline-company">
                Bosch Global Software Vietnam
              </p>
              <p>
                Built a responsive event and news platform with CMS and chatbot
                integration. Led frontend stack decisions, translated Bosch
                design standards into UI, integrated Node.js services, and
                implemented Azure SSO in an Agile team.
              </p>
              <div className="tag-list dark-tags">
                <span>React</span>
                <span>Vite</span>
                <span>Redux Toolkit</span>
                <span>Azure SSO</span>
                <span>Node.js</span>
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">2023 — 2025</span>
            <div>
              <h3>Freelance Frontend Developer</h3>
              <p className="timeline-company">Independent · Remote</p>
              <p>
                Designed and shipped production products for AI commerce and
                education, working in small teams across UI design,
                authentication, state management, CI/CD, Docker, and AWS.
              </p>
              <div className="tag-list dark-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Figma</span>
                <span>Docker</span>
                <span>AWS</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-lead">
          <p className="section-kicker">About me</p>
          <h2>
            Code is the medium.
            <br />
            <em>Impact is the point.</em>
          </h2>
          <p>
            I&apos;m a final-year Information Technology student at Ho Chi Minh
            City University of Education, with a 3.5/4.0 GPA. I&apos;m drawn to
            ambitious problems where design, engineering, and human needs meet.
          </p>
          <a
            className="resume-link"
            href="/documents/AnhDoTranTuan_CV.pdf"
            download
          >
            Download résumé <span>PDF · 139 KB</span>
          </a>
        </div>

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section achievements-section">
        <div className="section-heading compact-heading">
          <p className="section-kicker">Recognition</p>
          <h2>A little proof of the curiosity.</h2>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => {
            const content = (
              <>
                <span className="achievement-year">{achievement.year}</span>
                <div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.detail}</p>
                </div>
                <span className="achievement-arrow">↗</span>
              </>
            );

            return achievement.href ? (
              <a
                className="achievement"
                href={achievement.href}
                target="_blank"
                rel="noreferrer"
                key={achievement.title}
              >
                {content}
              </a>
            ) : (
              <div className="achievement" key={achievement.title}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <p className="section-kicker">Have a project or an opportunity?</p>
        <h2>
          Let&apos;s make something
          <br />
          <em>worth using.</em>
        </h2>
        <a className="footer-email" href="mailto:TuananhDo0308@gmail.com">
          TuananhDo0308@gmail.com <ArrowIcon />
        </a>
        <div className="footer-bottom">
          <span>© 2026 Anh Do Tran Tuan</span>
          <div>
            <a
              href="https://github.com/TuananhDo0308"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/do-tran-tuan-anh"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="tel:+84784699510">Phone</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
