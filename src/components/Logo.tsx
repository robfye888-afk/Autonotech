interface LogoProps {
  setCurrentPage: (page: string) => void;
}

export default function Logo({ setCurrentPage }: LogoProps) {
  return (
    <div
      onClick={() => setCurrentPage("home")}
      className="fixed top-6 left-6 z-50 group cursor-pointer"
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black rounded-full border-2 border-[#d4af37] overflow-hidden shadow-lg shadow-[#d4af37]/20">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  rgba(212, 175, 55, 0.05) 0px,
                  transparent 1px,
                  transparent 2px,
                  rgba(212, 175, 55, 0.05) 3px
                ),
                repeating-linear-gradient(
                  -45deg,
                  rgba(212, 175, 55, 0.05) 0px,
                  transparent 1px,
                  transparent 2px,
                  rgba(212, 175, 55, 0.05) 3px
                )
              `,
              backgroundSize: '8px 8px'
            }}
          />

          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="20" cy="30" r="1" fill="#d4af37" opacity="0.4" />
              <circle cx="40" cy="50" r="1" fill="#d4af37" opacity="0.6" />
              <circle cx="60" cy="35" r="1" fill="#d4af37" opacity="0.5" />
              <circle cx="75" cy="60" r="1" fill="#d4af37" opacity="0.4" />
              <circle cx="30" cy="70" r="1" fill="#d4af37" opacity="0.5" />
              <line x1="20" y1="30" x2="40" y2="50" stroke="#d4af37" strokeWidth="0.3" opacity="0.3" />
              <line x1="40" y1="50" x2="60" y2="35" stroke="#d4af37" strokeWidth="0.3" opacity="0.3" />
              <line x1="60" y1="35" x2="75" y2="60" stroke="#d4af37" strokeWidth="0.3" opacity="0.3" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 L50 75"
              stroke="url(#rocketGradient)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            <path
              d="M50 10 L35 30 L50 25 L65 30 Z"
              fill="url(#noseGradient)"
              stroke="#d4af37"
              strokeWidth="1.5"
            />

            <path
              d="M35 35 L20 55 L35 50 Z"
              fill="url(#finGradient)"
              stroke="#d4af37"
              strokeWidth="1.5"
            />

            <path
              d="M65 35 L80 55 L65 50 Z"
              fill="url(#finGradient)"
              stroke="#d4af37"
              strokeWidth="1.5"
            />

            <ellipse cx="50" cy="45" rx="8" ry="6" fill="#1a1a1a" stroke="#d4af37" strokeWidth="1" />

            <path
              d="M35 75 L30 90 L40 85 Z"
              fill="url(#flameGradient)"
              opacity="0.9"
            >
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M50 75 L45 95 L55 95 Z"
              fill="url(#flameCenterGradient)"
              opacity="0.9"
            >
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M65 75 L70 90 L60 85 Z"
              fill="url(#flameGradient)"
              opacity="0.9"
            >
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </path>

            <line x1="40" y1="55" x2="40" y2="65" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
            <line x1="60" y1="55" x2="60" y2="65" stroke="#d4af37" strokeWidth="1" opacity="0.5" />

            <defs>
              <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#b8941f" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>

              <linearGradient id="noseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b8941f" />
              </linearGradient>

              <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#9d7f1a" />
              </linearGradient>

              <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" />
                <stop offset="50%" stopColor="#ff9500" />
                <stop offset="100%" stopColor="#ffc400" />
              </linearGradient>

              <linearGradient id="flameCenterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffaa00" />
                <stop offset="50%" stopColor="#ffc400" />
                <stop offset="100%" stopColor="#ffe600" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute -inset-1 bg-[#d4af37]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/50 animate-ping opacity-0 group-hover:opacity-75" />
      </div>
    </div>
  );
}
