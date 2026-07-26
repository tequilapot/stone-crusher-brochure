export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <img
            src="/images/srew%20projects-logo.png"
            alt="SREW Logo"
            className="w-7 h-7"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-[13px] tracking-tight text-white leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              S<span className="text-[#F5C518]">R</span> ENGG WORKS
            </span>
            <span className="text-[7px] tracking-[0.2em] text-white/30 uppercase mt-0.5" style={{ fontFamily: "'Calibri', sans-serif" }}>
              Crushing · Screening · Sand Processing
            </span>
          </div>
        </div>
        <div className="text-[9px] tracking-[0.15em] text-white/25 uppercase" style={{ fontFamily: "'Calibri', sans-serif" }}>
          Premium Brochure 2026
        </div>
      </div>
    </header>
  );
}
