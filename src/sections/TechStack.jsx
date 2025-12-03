import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <section
      id="skills"
      className="
        w-full min-h-screen 
        flex flex-col items-center justify-center 
        py-16 px-5 md:px-10
        text-center
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading center */}
        <div className="mb-10">
          <TitleHeader
            title="How I Can Contribute & My Key Skills"
            sub="🤝 What I Bring to the Table"
          />
        </div>

        {/* Grid Centered + Responsive */}
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            gap-6 md:gap-8 
            place-items-center
          "
        >
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content flex flex-col items-center">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full mt-3">
                  <p className="font-medium">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
