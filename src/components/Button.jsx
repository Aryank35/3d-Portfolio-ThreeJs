/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with the given targetId,
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, targetId }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
