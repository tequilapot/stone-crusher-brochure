export default function Footer() {
  return (
    <section className="page-a4 bg-[#0B1F3A] text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-[#F2B233]/20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-r border-t border-[#F2B233]/20" />

      <div className="relative z-10 max-w-[800px] w-full text-center px-16">
        <div className="flex justify-center mb-12">
          <img
            src="/images/srew%20projects-logo.png"
            alt="SREW Logo"
            className="w-20 h-20 opacity-90"
          />
        </div>
        
        <h2 className="font-display font-extrabold text-5xl mb-6 tracking-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          S<span className="text-[#F2B233]">R</span> ENGG WORKS
        </h2>
        
        <div className="w-16 h-1 bg-[#F2B233] mx-auto mb-10" />
        
        <p className="text-sm tracking-[0.2em] uppercase text-white/50 mb-16 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Crushing · Screening · Sand Processing
        </p>

        <div className="grid grid-cols-2 gap-12 text-left bg-white/5 p-12 border border-white/10">
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#F2B233] mb-4 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Corporate Office & Works</h3>
            <p className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "'Calibri', sans-serif" }}>
              11-125, Dulapally<br />
              Hyderabad, Telangana 500100<br />
              India
            </p>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#F2B233] mb-4 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact Information</h3>
            <p className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "'Calibri', sans-serif" }}>
              srenggworks2016@gmail.com<br />
              +91 7075061622<br />
              +91 7997076361
            </p>
          </div>
        </div>
        
        <p className="mt-16 text-[9px] tracking-widest text-white/30 uppercase" style={{ fontFamily: "'Calibri', sans-serif" }}>
          &copy; 2026 SREW Projects. ISO 9001:2015 CERTIFIED MANUFACTURER.
        </p>
      </div>
    </section>
  );
}
