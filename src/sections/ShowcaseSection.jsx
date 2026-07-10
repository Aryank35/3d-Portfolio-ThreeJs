import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Per-technology badge colors ───────────────────────────────────────────────
const TECH_PALETTE = {
  "React":          { bg: "#061A27", color: "#61DAFB" },
  "React.js":       { bg: "#061A27", color: "#61DAFB" },
  "Node.js":        { bg: "#071C0F", color: "#4ADE80" },
  "Express.js":     { bg: "#1A1A1E", color: "#A3A3A3" },
  "MongoDB":        { bg: "#071C0F", color: "#47A248" },
  "JWT":            { bg: "#231600", color: "#FBBF24" },
  "Tailwind CSS":   { bg: "#061824", color: "#38BDF8" },
  "TypeScript":     { bg: "#061224", color: "#60A5FA" },
  "Three.js":       { bg: "#1C0E06", color: "#FF8C42" },
  "GLSL":           { bg: "#150824", color: "#C084FC" },
  "Chart.js":       { bg: "#200808", color: "#F87171" },
  "GSAP":           { bg: "#061606", color: "#88CE02" },
  "JavaScript":     { bg: "#1C1600", color: "#FDE047" },
  "Bootstrap":      { bg: "#100820", color: "#A78BFA" },
  "Google Sheets":  { bg: "#061606", color: "#4ADE80" },
};

const techStyle = (name) =>
  TECH_PALETTE[name] ?? { bg: "#111128", color: "#A0A0C0" };

// ─── Project data — aligned with resume ────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "TenantFlow",
    subtitle: "Smart Property & Tenant Management",
    year: "2025",
    description:
      "A modular, SaaS-style property management platform with centralized feature toggles for subscription-based tiers — enabling owners to manage tenants, rooms, rent, utility bills, deposits, agreements, complaints, and notices from one mobile-first dashboard.",
    features: [
      "Subscription-based feature toggles",
      "Multi-property management architecture",
      "Automated rent & utility bill tracking",
      "Real-time tenant-owner chat & notifications",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/images/smart_rent_management.jpg",
    link: "https://smart-rental-management.vercel.app/",
    accent: "#6366F1",
    category: "Full-Stack SaaS",
  },
  {
    id: "02",
    title: "MoneyMind AI",
    subtitle: "Full-Stack Personal Finance Platform",
    year: "2025",
    description:
      "A full-stack MERN personal finance platform with secure JWT authentication and an AI-ready insights layer — covering account management, budgeting, income & expense tracking, investments, insurance, and savings goals with real-time analytics dashboards.",
    features: [
      "Multi-account banking sync",
      "Smart budget allocation & tracking",
      "Investment portfolio management",
      "AI-ready financial insights layer",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    image: "/images/Money_Mind.jpg",
    link: "https://money-mind-ai-two.vercel.app/",
    accent: "#10B981",
    category: "FinTech · MERN Stack",
  },
  {
    id: "03",
    title: "Blob Landing Page",
    subtitle: "Interactive 3D Shader Experience",
    year: "2025",
    description:
      "An interactive blob built with Three.js custom GLSL shaders — blending design and code to create a fluid, mouse-reactive web experience with real-time deformation and zero external shader dependencies.",
    features: [
      "Custom GLSL vertex & fragment shaders",
      "Real-time mouse-tracked deformation",
      "Smooth 60fps animation loop",
      "Zero external shader libraries",
    ],
    tech: ["Three.js", "GLSL", "React", "Tailwind CSS"],
    image: "/images/project1.png",
    link: "https://blob-landing-page-eight.vercel.app/",
    accent: "#F59E0B",
    category: "3D · WebGL",
  },
  {
    id: "04",
    title: "The Planets",
    subtitle: "3D Solar System Explorer",
    year: "2024",
    description:
      "A Three.js 3D solar system featuring orbiting planets, a procedural 10,000-star field, and smooth camera animations — built to explore physics-inspired orbital mechanics in the browser.",
    features: [
      "Physics-inspired orbital paths",
      "Procedural star field (10,000+ stars)",
      "Interactive camera orbit controls",
      "Texture-mapped planet surfaces",
    ],
    tech: ["Three.js", "React", "GSAP", "JavaScript"],
    image: "/images/project2.png",
    link: "https://plannets-3d.vercel.app/",
    accent: "#8B5CF6",
    category: "3D · Animation",
  },
  {
    id: "05",
    title: "Utsaah",
    subtitle: "College Fest Management Platform",
    year: "2024",
    description:
      "A fest management platform serving 1,500+ attendees and 40 volunteer organizers — covering student registration, event scheduling, live results, and a multimedia gallery, integrated with Google Sheets for real-time data.",
    features: [
      "Live registration for 1,500+ students",
      "Real-time event schedule & results board",
      "Coordinator hub & organizer dashboard",
      "Multimedia gallery & feedback system",
    ],
    tech: ["React", "Bootstrap", "JavaScript", "Google Sheets"],
    image: "/images/project3.png",
    link: "https://gita-fest-google.vercel.app/",
    accent: "#EC4899",
    category: "Event Management",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function AppShowcase() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Fade section in on mount
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power1.out" }
    );

    projectRefs.current.forEach((el, i) => {
      if (!el) return;

      const isEven = i % 2 === 0;
      const imgWrap  = el.querySelector(".proj-img-wrap");
      const content  = el.querySelector(".proj-content");
      const accentBar = el.querySelector(".accent-bar");
      const bullets  = el.querySelectorAll(".feature-item");
      const badges   = el.querySelectorAll(".tech-badge");

      const trigger = {
        trigger: el,
        start: "top 78%",
        toggleActions: "play none none reverse",
      };

      // Image slides from the side it starts on
      gsap.fromTo(
        imgWrap,
        { x: isEven ? -80 : 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out", scrollTrigger: trigger }
      );

      // Content rises up
      gsap.fromTo(
        content,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: "power3.out", scrollTrigger: trigger }
      );

      // Accent bar expands from top
      if (accentBar) {
        gsap.fromTo(
          accentBar,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.9,
            delay: 0.25,
            ease: "power3.out",
            transformOrigin: "top",
            scrollTrigger: trigger,
          }
        );
      }

      // Feature bullets stagger from left
      if (bullets.length) {
        gsap.fromTo(
          bullets,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.55,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: trigger,
          }
        );
      }

      // Tech badges float up with stagger
      if (badges.length) {
        gsap.fromTo(
          badges,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.45,
            delay: 0.55,
            ease: "power2.out",
            scrollTrigger: trigger,
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ backgroundColor: "#08080F", fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}
      className="relative w-full py-24 px-4 md:px-10"
    >
      {/* ── Section header ── */}
      <div className="max-w-6xl mx-auto mb-28">
        <p
          className="text-xs font-semibold uppercase tracking-[0.28em] mb-5"
          style={{ color: "#6366F1" }}
        >
          Selected Work
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            Featured
            <br />
            Projects
          </h1>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6B6B8A" }}>
            5 projects spanning 3D WebGL, full-stack product engineering, and
            event-management platforms.
          </p>
        </div>

        {/* Gradient rule */}
        <div
          className="mt-10 h-px w-full"
          style={{ background: "linear-gradient(to right, #6366F1, transparent)" }}
        />
      </div>

      {/* ── Project list ── */}
      <div className="max-w-6xl mx-auto space-y-36">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <article
              key={project.id}
              ref={(el) => (projectRefs.current[i] = el)}
              className={`relative flex flex-col gap-12 md:gap-16 items-start md:items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Glowing accent bar on the leading edge */}
              <div
                className="accent-bar absolute top-0 hidden md:block w-px h-full"
                style={{
                  left: isEven ? "-28px" : "auto",
                  right: isEven ? "auto" : "-28px",
                  backgroundColor: project.accent,
                  boxShadow: `0 0 14px 2px ${project.accent}55`,
                }}
              />

              {/* ── Image side ── */}
              <div className="proj-img-wrap w-full md:w-1/2 flex-shrink-0">
                {/* Image with hover overlay */}
                <div
                  className="group relative overflow-hidden rounded-2xl"
                  style={{
                    background: "#12121E",
                    outline: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Gradient hover overlay */}
                  <div
                    className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: `linear-gradient(to top, ${project.accent}F0 0%, ${project.accent}55 45%, transparent 100%)`,
                    }}
                  >
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">
                        {project.title}
                      </p>
                      <p className="text-white/75 text-sm mt-0.5">{project.category}</p>
                    </div>

                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 bg-white text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 flex-shrink-0"
                      >
                        View ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Category + year below image */}
                <div className="flex items-center justify-between mt-3.5 px-0.5">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[11px]" style={{ color: "#44445A" }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* ── Content side ── */}
              <div className="proj-content w-full md:w-1/2 space-y-5">
                {/* Ghosted watermark number */}
                <div className="relative select-none pointer-events-none h-0 overflow-visible">
                  <span
                    className="absolute -top-10 -left-2 text-[8rem] font-black leading-none"
                    style={{ color: project.accent, opacity: 0.055 }}
                  >
                    {project.id}
                  </span>
                </div>

                {/* Title block */}
                <div className="relative z-10 pt-6">
                  <h2
                    className="text-4xl md:text-[2.75rem] font-black text-white leading-tight tracking-tight"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium" style={{ color: "#7070A0" }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-[1.75]" style={{ color: "#8A8AAA" }}>
                  {project.description}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-2.5 pt-1">
                  {project.features.map((feat, j) => (
                    <li
                      key={j}
                      className="feature-item flex items-center gap-3 text-sm"
                      style={{ color: "#B8B8D0" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-px"
                        style={{ backgroundColor: project.accent }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => {
                    const s = techStyle(t);
                    return (
                      <span
                        key={t}
                        className="tech-badge inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                        style={{
                          backgroundColor: s.bg,
                          color: s.color,
                          border: `1px solid ${s.color}25`,
                        }}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>

                {/* View project link */}
                <div className="pt-1">
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-75"
                      style={{ color: project.accent }}
                    >
                      View Project
                      <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold opacity-35 cursor-not-allowed"
                      style={{ color: project.accent }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Bottom rule ── */}
      <div className="max-w-6xl mx-auto mt-36">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #6366F1 40%, transparent)",
          }}
        />
      </div>
    </section>
  );
}