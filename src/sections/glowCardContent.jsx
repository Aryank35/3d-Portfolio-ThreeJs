import React from "react";

/**
 * GlowCardContent
 * - Expects `card` prop with: badges (string[]), achievement (string), stats (array of {label, value})
 */
export default function GlowCardContent({ card }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
      {/* Company small badge */}
      <div className="mb-3 flex items-center gap-3">
        {card.logoPath && (
          <img
            src={card.logoPath}
            alt={`${card.title} logo`}
            className="w-10 h-10 rounded-md object-cover shadow-sm"
          />
        )}
        <div className="text-left">
          <div className="text-sm font-semibold leading-none">{card.companyShort || card.title.split("·")[0]}</div>
          <div className="text-xs text-white-50">{card.date.split("·")[0]?.trim?.()}</div>
        </div>
      </div>

      {/* Tech badges */}
      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {(card.badges || []).map((b, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white/8 backdrop-blur-sm border border-white/10"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Achievement highlight */}
      {card.achievement && (
        <div className="mb-4 max-w-xs">
          <div className="text-sm italic text-[#bfe7ff]">Key Achievement</div>
          <div className="mt-2 text-center font-semibold text-lg leading-tight">{card.achievement}</div>
        </div>
      )}

      {/* Stats row */}
      {card.stats && card.stats.length > 0 && (
        <div className="mt-3 flex gap-4 justify-center items-center">
          {card.stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-xl font-bold">{s.value}</div>
              <div className="text-xs text-white-50">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
