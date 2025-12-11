import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.utils.toArray(".edu-card").forEach((card) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education"
          sub="📚 My Academic Journey"
        />

        <div className="mt-16 flex flex-col gap-10">
          {educationCards.map((edu) => (
            <div
              key={`${edu.title}-${edu.duration}`}
              className="edu-card rounded-2xl border border-white bg-[#000308] px-5 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={edu.logoPath}
                  alt={edu.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {edu.title}
                </h3>
                <p className="text-sm sm:text-base text-white-50">
                  {edu.course}
                </p>
                <p className="text-sm sm:text-base text-white-50">
                  {edu.grade}
                </p>
                <p className="text-sm sm:text-base text-white-50">
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
