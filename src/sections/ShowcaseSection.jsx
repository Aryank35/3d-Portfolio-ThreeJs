import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Blob Landing Page 🌐",
    year: "2025",
    description:
      "An interactive blob landing page built using Three.js shaders — blending design and code to create a fluid, animated web experience.",
    tech: "Three.js, GLSL, React, TailwindCSS",
    image: "/images/project1.png",
    bg: "#E0F7FA",
    link: "https://blob-landing-page-eight.vercel.app/",
  },
  {
    title: "The Planets (3D) 🪐",
    year: "2024",
    description:
      "A Three.js project with orbiting planets, starry backgrounds, and smooth animations — exploring the universe of 3D web development.",
    tech: "Three.js, React, Animation",
    image: "/images/project2.png",
    bg: "#F3E5F5",
    link: "https://plannets-3d.vercel.app/",
  },
  {
    title: "College Fest Platform (UTSAAH)",
    year: "2024",
    description: `Developed a web application to streamline event management, including student registration, event updates,
schedules, and results. Integrated Google Sheets for data handling.
• Implemented features like event coordinator details, a gallery for multimedia, and feedback mechanisms to ensure
smooth communication and support for participants and organizers.`,
    tech: "ReactJS, Bootstrap, JavaScript",
    image: "/images/project3.png",
    bg: "#FFF0F6",
    link: "https://gita-fest-google.vercel.app/",
  },
  {
    title: "Hotel Booking System",
    year: "2024",
    description:
      "Hotel management and booking system built with WordPress, PHP, and SQL for a smooth reservation experience.",
    tech: "WordPress, PHP, SQL, JavaScript",
    image: "/images/project4.png",
    bg: "#E6F7FF",
    link: "https://hotel-management-seven-topaz.vercel.app/",
  },
  {
    title: "Mohapatra Estate (Rent hub)",
    year: "2023",
    description:
      "A responsive real-estate platform built using React and TailwindCSS with smooth property filtering and search functionality.",
    tech: "ReactJS, TailwindCSS, JavaScript",
    image: "/images/project5.png",
    bg: "#FFF7E6",
    link: "https://house-rental-system-kohl.vercel.app/user-dashboard",
  },
];

export default function AppShowcase() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const elements = projectRefs.current;

    // Smooth fade + slide animations per project
    elements.forEach((el, index) => {
      const img = el.querySelector(".proj-img");
      const content = el.querySelector(".proj-content");

      gsap.fromTo(
        img,
        { x: index % 2 === 0 ? -150 : 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Fade in section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-black text-white min-h-screen mx-4 my-10 rounded-3xl"
    >
      <h1 className="text-5xl font-bold text-center py-20 tracking-tight">
        Featured Projects 🚀
      </h1>

      {projects.map((project, i) => (
        <div
          key={i}
          ref={(el) => (projectRefs.current[i] = el)}
          className={`min-h-screen w-[80%] mx-auto rounded-3xl my-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 transition-all duration-700`}
          style={{ backgroundColor: project.bg }}
        >
          {/* IMAGE */}
          <div
            className={`proj-img w-full md:w-1/2 flex justify-center ${
              i % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-3xl shadow-2xl w-5/6 md:w-[80%] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* TEXT CONTENT */}
          <div
            className={`proj-content w-full md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0 ${
              i % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {project.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm uppercase tracking-wide text-gray-600">
              {project.tech}
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-gray-700 font-semibold">
                {project.year}
              </span>
              <span className="h-[1px] w-10 bg-gray-500"></span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-700 transition"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
