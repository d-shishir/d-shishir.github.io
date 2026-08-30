import "../hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SharedHeader } from "../components/SharedHeader";

type ProfileType = "swe" | "ai";

const sweExperience = [
  {
    period: "May 2025 – Present",
    title: "Freelance Software Engineer",
    company: "Self-employed",
    location: "Remote",
    points: [
      "Designing, developing, and publishing cross-platform mobile and web applications using React Native, React, Django, and FastAPI.",
      "Utilizing 'vibe coding' workflows with advanced agentic tools like Antigravity, Claude Code, and Cursor to significantly accelerate full-stack development and architectural iteration.",
      "Collaborating directly with clients to gather requirements and translate them into robust technical specifications.",
      "Architecting backend APIs and integrating them with frontend interfaces, managing application state efficiently.",
      "Optimising performance, resolving platform-specific bugs, and ensuring seamless user experiences.",
    ],
  },
  {
    period: "Apr 2023 – May 2025",
    title: "Jr. Software Engineer (Part Time)",
    company: "GivingbackAI",
    location: "Remote · United States",
    points: [
      "Focused on software design and development while concurrently handling technical customer support.",
      "Investigated user-reported technical issues by analysing logs and system behaviour.",
      "Escalated complex cases to development teams with detailed reproduction steps.",
      "Improved support resolution efficiency through structured documentation and assisted in pre-deployment testing.",
    ],
  },
  {
    period: "2020 – 2023",
    title: "Freelance · Social Media Management & Digital Marketing",
    company: "Self-employed",
    location: "Remote",
    points: [
      "Managed social media accounts and executed digital marketing strategies across multiple platforms.",
      "Created engaging content, scheduled posts, and analysed performance metrics.",
      "Optimised client presence through targeted campaigns, SEO strategies, and audience engagement.",
    ],
  },
];

const aiExperience = [
  {
    period: "May 2025 – Present",
    title: "AI Creative & AI Filmmaker",
    company: "Self-employed",
    location: "Remote",
    points: [
      "Create cinematic AI short films, narrative shorts, character-driven stories, and episodic/series concepts using generative AI as a primary creative and production medium.",
      "Develop end-to-end AI filmmaking workflows covering concept development, story structure, visual development, storyboarding, shot design, cinematography, character consistency, motion, dialogue, and sound.",
      "Work with the latest generation of AI video, image, audio, and multimodal models, continuously evaluating emerging tools and integrating the strongest capabilities into production workflows.",
      "Create fully AI-generated content spanning comedy, action, emotional storytelling, cultural themes, experimental concepts, and cinematic narratives.",
      "Utilize advanced workflows including text-to-video, image-to-video, reference-based generation, character consistency, motion control, choreography, and multimodal generation.",
      "Direct AI-generated scenes with attention to camera language, composition, lighting, pacing, continuity, character performance, and visual storytelling.",
      "Produce short-form content optimized for audience retention, engagement, shareability, and viral distribution across TikTok, Instagram, Facebook, and other platforms.",
      "Recognized member of the Kling AI Elite Creators Program (ECP) for advanced generative AI content creation and cinematic production.",
      "Participate in creator/CPP programs with Kinovi AI, OiiOii AI, HappyHorse AI, Pollo AI, Flova AI, and ImagineArt.",
      "Experiment with newly released AI models and production techniques, adapting creative workflows as generative AI capabilities rapidly evolve.",
      "Manage AI-focused social media brands and develop original concepts, recurring characters, and narrative formats for digital audiences.",
      "Built a combined social media audience of 100K+ followers, with individual AI productions reaching millions of views.",
    ],
  },
];

const education = [
  {
    period: "2020 – 2025",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ratna Rajyalaxmi Campus, Tribhuvan University",
    location: "Kathmandu, Nepal",
    points: [
      "GPA: 3.47 / 4.0 — ranked in the top 10% of the class.",
      "Coursework: Software Engineering, Algorithms, Database Systems, Mobile & Web Development.",
    ],
  },
  {
    period: "Graduated 2020",
    degree: "High School (+2 Science)",
    institution: "Trinity International College",
    location: "Kathmandu, Nepal",
    points: ["GPA: 3.41.", "Specialisation in Mathematics, Physics, and Computer Science."],
  },
];

const sweSkills = [
  { label: "Languages", value: "JavaScript, TypeScript, Python" },
  { label: "Frontend", value: "React, React Native, Expo" },
  { label: "Backend", value: "Node.js, Django, FastAPI, RESTful APIs & Backend Integration" },
  { label: "State & Data", value: "Redux, Context API, SQL, NoSQL (Database Management)" },
  { label: "Tools & OS", value: "Git, CI/CD, Windows, macOS, Linux" },
  { label: "Practices", value: "Agile Methodologies, Remote Work, Technical Troubleshooting & Debugging" },
  { label: "Other", value: "VPN setup & DNS/IP diagnostics, Mobile & Web UI/UX Implementation" },
  { label: "AI & Vibe Coding", value: "Antigravity, Claude Code, Cursor, Replit Agent, v0" },
];

const aiCapabilities = [
  { label: "AI Filmmaking", value: "Cinematic storytelling · Short films · AI series · Narrative development · Storyboarding · Shot design · Cinematography · Visual direction · Character development · World building" },
  { label: "AI Video Production", value: "Text-to-video · Image-to-video · Reference-based generation · Character consistency · Motion control · Choreography · Multi-shot storytelling · Cinematic camera direction" },
  { label: "AI Image & Visual Development", value: "Character design · Environment design · Concept art · Visual development · Generative image workflows · Image-to-video pipelines" },
  { label: "AI Audio & Voice", value: "AI voice generation · Character dialogue · Voice direction · Audio-driven creative workflows" },
  { label: "Creative Direction", value: "Concept development · Story structure · Visual language · Composition · Lighting · Pacing · Continuity · Performance direction · Creative experimentation" },
  { label: "Social Content", value: "TikTok · Instagram · Facebook · X · Short-form storytelling · Audience retention · Viral content strategy · Content ideation · Social analytics" },
];

const aiToolsAndModels = [
  { label: "AI Video", value: "Kling · Google Veo · Hailuo · Seedance · Wan · Higgsfield · Luma · Other emerging video-generation models" },
  { label: "AI Image & Visuals", value: "Nano Banana · Midjourney · ComfyUI · Other generative image workflows" },
  { label: "AI Audio", value: "ElevenLabs · AI voice generation · AI-assisted audio workflows" },
  { label: "Creative AI Workflows", value: "Prompt engineering · Multimodal workflows · Reference-based generation · Model evaluation · AI production pipelines · Rapid creative iteration" },
];

const technicalBackground = [
  { label: "Programming", value: "TypeScript · JavaScript · Python" },
  { label: "Frontend", value: "React · React Native · Expo" },
  { label: "Backend", value: "Node.js · Django · FastAPI · REST APIs" },
  { label: "AI-Assisted Development", value: "Claude Code · Cursor · Antigravity · Replit Agent · v0" },
];

const sweProjects = [
  {
    name: "Nepali Puran",
    url: "play.google.com/store/apps/details?id=com.nepalipuran.app",
    desc: "A digital library preserving Nepali religious texts. Features offline reading, smart bookmarks, and a privacy-first experience without ads or tracking.",
  },
  {
    name: "Baghchal Royale",
    url: "play.google.com/store/apps/details?id=com.baghchal.royale",
    desc: "Digital version of the traditional Nepali board game. Features a Minimax-based AI opponent and offline multiplayer mode built with React Native.",
  },
  {
    name: "InsightStack",
    url: "github.com/d-shishir/InsightStack",
    desc: "A modern productivity and analytics web application built with React and Vite, focusing on clean data visualisation.",
  },
  {
    name: "Finance Sathi",
    url: "github.com/d-shishir/Finanace-Sathi",
    desc: "Personal finance management app to track expenses, income, and savings goals with clear health analytics.",
  },
  {
    name: "Kanban Board",
    url: "github.com/d-shishir/Kanban-Board",
    desc: "Production-quality Kanban board with drag-and-drop task management, priority tagging, and local data persistence.",
  },
  {
    name: "ShadeScape",
    url: "github.com/d-shishir/ShadeScape",
    desc: "A creative wallpaper and theme exploration application that allows users to generate, preview, and export beautiful aesthetic backgrounds and palettes.",
  },
];

const aiProjects = [
  {
    name: "Ramailo AI — AI Entertainment & Creative Media",
    url: "instagram.com/ramailo.ai",
    desc: "AI-first creative brand producing fully AI-generated entertainment, cinematic shorts, character-driven stories, comedy, and experimental visual content. Multi-platform presence across TikTok, Instagram, and Facebook with 100K+ followers and millions of views.",
  },
  {
    name: "Cute Animal Circle — AI Visuals & Media",
    url: "instagram.com/cuteanimalcircle",
    desc: "Creative AI-generated content focusing on cute animal AI visuals, animations, dance, and viral short-form storytelling across social platforms.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: 0.05 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function ResumePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType>("swe");

  const currentExperience = profile === "swe" ? sweExperience : aiExperience;
  const currentProjects = profile === "swe" ? sweProjects : aiProjects;

  return (
    <div className="resume-page">
      <div className="projects-bg" />

      <SharedHeader />
      
      {/* Floating Download Button */}
      <motion.div 
        className="resume-download-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <button className="resume-download-btn" onClick={() => window.print()} id="resume-print">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download PDF
        </button>
      </motion.div>

      <main className="resume-main" id="resume-document">
        {/* Identity */}
        <motion.div className="resume-identity" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="resume-identity-left">
            <h1 className="resume-name">
              <span>Shishir</span>
              <span className="italic">Lamichhane</span>
            </h1>
            <p className="resume-headline">
              {profile === "swe" ? "Software Engineer" : "AI Creative · AI Filmmaker"} · Kathmandu, Nepal
            </p>
            
            <motion.div className="resume-profile-toggle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="toggle-pill">
                <button className={`toggle-btn ${profile === "swe" ? "active" : ""}`} onClick={() => setProfile("swe")}>Software Engineer</button>
                <button className={`toggle-btn ${profile === "ai" ? "active" : ""}`} onClick={() => setProfile("ai")}>AI Creative</button>
              </div>
            </motion.div>
          </div>
          <div className="resume-identity-right">
            <a href="mailto:dshishir13@gmail.com" className="resume-contact-item">dshishir13@gmail.com</a>
            <a href="tel:+9779822447613" className="resume-contact-item">+977 982 244 7613</a>
            <a href="https://d-shishir.github.io/" target="_blank" rel="noreferrer" className="resume-contact-item">d-shishir.github.io</a>
            <a href="https://github.com/d-shishir" target="_blank" rel="noreferrer" className="resume-contact-item">github.com/d-shishir</a>
            <a href="https://www.linkedin.com/in/dshishir13" target="_blank" rel="noreferrer" className="resume-contact-item">linkedin.com/in/dshishir13</a>
            <a href="https://x.com/shishirdotai" target="_blank" rel="noreferrer" className="resume-contact-item">x.com/shishirdotai</a>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div className="resume-summary" custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <p>
            {profile === "swe" 
              ? "Results-driven Software Engineer with expertise in full-stack and mobile application development. Experienced in building responsive UIs with React and React Native, and designing robust backend architectures using Django and FastAPI. Adept at integrating REST APIs, troubleshooting complex systems, and bridging the gap between engineering and user experience to deliver high-quality, scalable applications." 
              : "AI Creative and filmmaker with a software engineering background, specializing in AI filmmaking, cinematic storytelling, visual development, character-driven narratives, and short-form content. Experienced across the latest generation of AI video, image, audio, and multimodal models, with the ability to develop complete creative workflows from concept and story development to visual direction, generation, and final narrative production. Member of the Kling AI Elite Creators Program (ECP) and creator/program partner with multiple AI companies. Built AI-first social media brands with a multi-platform audience of 100K+ followers and content reaching millions of views."}
          </p>
        </motion.div>

        <div className="resume-divider" />

        {/* Experience */}
        <motion.section className="resume-section" custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="resume-section-heading">Experience</h2>
          {currentExperience.map((job, i) => (
            <div key={i} className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <div className="resume-entry-title">{job.title}</div>
                  <div className="resume-entry-sub">
                    {job.company}<span className="resume-entry-dot">·</span>{job.location}
                  </div>
                </div>
                <span className="resume-entry-period">{job.period}</span>
              </div>
              <ul className="resume-entry-points">
                {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </motion.section>

        <div className="resume-divider" />

        {/* Creator Programs (AI profile only) */}
        {profile === "ai" && (
          <>
            <motion.section className="resume-section" custom={1.5} variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="resume-section-heading">Creator Programs</h2>
              
              <div className="resume-entry" style={{ marginBottom: "1.25rem" }}>
                <div className="resume-entry-title">Creative Partner Programs (CPP)</div>
                <div className="resume-entry-sub" style={{ marginTop: "0.2rem", marginBottom: "0.4rem" }}>
                  <a href="https://kinovi.ai" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>Kinovi AI</a> <span className="resume-entry-dot">·</span>{" "}
                  <a href="https://oiioii.ai" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>OiiOii AI</a> <span className="resume-entry-dot">·</span>{" "}
                  <a href="https://happy-horse.art" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>HappyHorse AI</a> <span className="resume-entry-dot">·</span>{" "}
                  <a href="https://pollo.ai" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>Pollo AI</a> <span className="resume-entry-dot">·</span>{" "}
                  <a href="https://flova.ai" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>Flova AI</a> <span className="resume-entry-dot">·</span>{" "}
                  <a href="https://imagine.art" target="_blank" rel="noreferrer" className="resume-project-url" style={{ textDecoration: "none" }}>ImagineArt</a>
                </div>
                <p style={{ color: "#a1a1aa", fontSize: "0.95rem", lineHeight: 1.5, marginTop: "0.25rem" }}>
                  Creative Partner across leading AI platforms, working with emerging generative AI models and technologies to explore new possibilities in <strong>AI filmmaking, visual storytelling, and creative production</strong>.
                </p>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-title">Kling AI — Elite Creators Program (ECP)</div>
                <p style={{ color: "#a1a1aa", fontSize: "0.95rem", lineHeight: 1.5, marginTop: "0.25rem" }}>
                  Selected as an <strong>Elite Creator</strong> within Kling AI's creator ecosystem, producing advanced AI-generated content and cinematic productions while exploring the platform's latest video-generation capabilities.
                </p>
              </div>
            </motion.section>
            <div className="resume-divider" />
          </>
        )}

        {/* Projects / AI Creative Portfolio */}
        <motion.section className="resume-section" custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="resume-section-heading">
            {profile === "swe" ? "Projects" : "AI Creative Portfolio"}
          </h2>
          <div className="resume-projects-list">
            {currentProjects.map((p, i) => (
              <div key={i} className="resume-project-item">
                <div className="resume-project-header">
                  <span className="resume-project-name">{p.name}</span>
                  <a href={`https://${p.url}`} target="_blank" rel="noreferrer" className="resume-project-url">{p.url} ↗</a>
                </div>
                <p className="resume-project-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="resume-divider" />

        {/* Skills / Capabilities */}
        <motion.section className="resume-section" custom={3} variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="resume-section-heading">
            {profile === "swe" ? "Technical Skills" : "Creative Capabilities"}
          </h2>
          <div className="resume-skills-table">
            {(profile === "swe" ? sweSkills : aiCapabilities).map((s) => (
              <div key={s.label} className="resume-skill-row">
                <span className="resume-skill-label">{s.label}</span>
                <span className="resume-skill-value">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="resume-divider" />

        {/* AI Tools & Models + Technical Background (AI profile only) */}
        {profile === "ai" && (
          <>
            <motion.section className="resume-section" custom={3.5} variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="resume-section-heading">AI Tools & Models</h2>
              <div className="resume-skills-table">
                {aiToolsAndModels.map((s) => (
                  <div key={s.label} className="resume-skill-row">
                    <span className="resume-skill-label">{s.label}</span>
                    <span className="resume-skill-value">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.section>
            <div className="resume-divider" />

            <motion.section className="resume-section" custom={3.8} variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="resume-section-heading">Technical Background</h2>
              <div className="resume-skills-table">
                {technicalBackground.map((s) => (
                  <div key={s.label} className="resume-skill-row">
                    <span className="resume-skill-label">{s.label}</span>
                    <span className="resume-skill-value">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.section>
            <div className="resume-divider" />
          </>
        )}

        {/* Education */}
        <motion.section className="resume-section" custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="resume-section-heading">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <div className="resume-entry-title">{edu.degree}</div>
                  <div className="resume-entry-sub">
                    {edu.institution}<span className="resume-entry-dot">·</span>{edu.location}
                  </div>
                </div>
                <span className="resume-entry-period">{edu.period}</span>
              </div>
              <ul className="resume-entry-points">
                {edu.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </motion.section>

        <div className="resume-divider" />

        {/* Languages */}
        <motion.section className="resume-section" custom={5} variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="resume-section-heading">Languages</h2>
          <div className="resume-skills-table">
            {[["Nepali", "Native"], ["English", "Advanced"], ["Hindi", "Intermediate"]].map(([lang, level]) => (
              <div key={lang} className="resume-skill-row">
                <span className="resume-skill-label">{lang}</span>
                <span className="resume-skill-value">{level}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="resume-divider" />

        <motion.div className="resume-footer-note" custom={6} variants={fadeUp} initial="hidden" animate="visible">
          <span>Available for freelance and full-time opportunities · </span>
          <button className="resume-footer-link" onClick={() => navigate("/contact")} id="resume-footer-contact">Get in touch</button>
        </motion.div>
      </main>
    </div>
  );
}

