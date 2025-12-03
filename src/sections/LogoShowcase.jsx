import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React.js", img: "/icons/react.svg", color: "#61DAFB" },
  { name: "JavaScript", img: "/icons/js.svg", color: "#F7DF1E" },
  { name: "Three.js", img: "/icons/threejs.svg", color: "#000000" },
  { name: "Tailwind CSS", img: "/icons/tailwind.svg", color: "#38BDF8" },
  { name: "Node.js", img: "/icons/nodejs.svg", color: "#8CC84B" },
  { name: "WordPress", img: "/icons/wordpress.svg", color: "#21759B" },
  { name: "GSAP", img: "/icons/gsap.svg", color: "#88CE02" },
  { name: "Bootstrap", img: "/icons/bootstrap.svg", color: "#7952B3" },
  { name: "Vercel", img: "/icons/vercel.svg", color: "#FFFFFF" },
];

const LogoShowcase = () => {
  const sectionRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    // Scroll-triggered reveal
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Floating animation for icons
    logoRefs.current.forEach((el, index) => {
      gsap.to(el, {
        y: "random(-8, 8)",
        duration: 2 + Math.random(),
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: index * 0.15,
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white relative overflow-hidden"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-2">
          Technologies & Tools ⚙️
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I love building immersive and dynamic web experiences using these technologies.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            ref={(el) => (logoRefs.current[i] = el)}
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div
              className="rounded-2xl p-5 bg-gray-900/40 shadow-md backdrop-blur-sm border border-gray-700 transition-all duration-300 group-hover:border-gray-500"
              style={{ boxShadow: `0 0 15px ${tech.color}20` }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="mt-4 text-sm font-medium text-gray-300 group-hover:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* background glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default LogoShowcase;
