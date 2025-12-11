import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer bg-[#0b0f1a] text-white py-10">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-5 md:px-20">
        
        {/* Left: Terms */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-white/70 hover:text-white cursor-pointer transition-colors duration-200">
            Terms & Conditions
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="socials flex gap-5">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon transition-transform duration-300 hover:scale-110"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-7 h-7 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm text-white/70">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Aryan Kumar Mohapatra
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
