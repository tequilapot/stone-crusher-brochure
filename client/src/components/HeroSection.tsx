export default function HeroSection() {
    return (
        <section className="page-a4 relative flex items-center bg-[#0B1F3A] overflow-hidden">
            {/* High Quality Render / Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-background.jpg"
                    alt="SREW industrial crushing plant"
                    className="w-full h-full object-cover mix-blend-overlay opacity-50 grayscale border-none outline-none ring-0 shadow-none"
                />
                {/* Navy to Transparent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-transparent" />
            </div>

            {/* Engineering Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-[900px] w-full px-16">
                {/* Yellow accent line */}
                <div className="w-24 h-2 bg-[#F2B233] mb-8" />

                <p className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="text-[#F2B233]">SREW Projects</span> · ISO 9001:2015 · HYDERABAD, INDIA
                </p>

                <h1 className="text-[4.5rem] font-display font-extrabold text-white leading-[0.95] tracking-tight mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    BUILT FOR <span className="text-[#F2B233]">INDIA.</span><br />
                    <span className="text-white/40 font-light">ENGINEERED FOR THE</span><br />
                    WORLD.
                </h1>

                <p className="text-lg text-white/80 leading-relaxed max-w-lg mb-8" style={{ fontFamily: "'Calibri', sans-serif" }}>
                    Powering India's infrastructure growth with premium industrial crushing,
                    screening, and material handling solutions. Delivering uncompromising
                    reliability for heavy-duty applications across the globe.
                </p>

                {/* Global Premium CTA (Print Friendly) */}
                <div className="flex items-center gap-8 mt-4 pt-6 border-t border-white/10">
                    <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#F2B233] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Global Inquiries</p>
                        <p className="text-white font-display text-sm tracking-wide font-medium">sales@srenggworks.com</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20" />
                    <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#F2B233] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Direct Contact</p>
                        <p className="text-white font-display text-sm tracking-wide font-medium">+91 999 999 9999</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20" />
                    <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#F2B233] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Discover More</p>
                        <p className="text-white font-display text-sm tracking-wide font-medium">www.srenggworks.com</p>
                    </div>
                </div>
                {/* Premium Spec Cards */}
                <div className="mt-16 grid grid-cols-4 gap-4 max-w-[800px]">
                    {[
                        { value: "30-400", label: "TPH Capacity", sub: "Engineered" },
                        { value: "120+", label: "Global Projects", sub: "Delivered" },
                        { value: "45+", label: "Enterprise Clients", sub: "Trusted" },
                        { value: "10+", label: "Years Excellence", sub: "Manufacturing" },
                    ].map((stat, i) => (
                        <div key={i} className="border-l-[3px] border-[#F2B233] pl-5 py-1">
                            <p className="font-display font-bold text-3xl text-white tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.value}</p>
                            <p className="text-[9px] tracking-[0.2em] uppercase text-white mt-2 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.label}</p>
                            <p className="text-[8px] tracking-[0.1em] uppercase text-white/40 mt-1" style={{ fontFamily: "'Calibri', sans-serif" }}>{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Print Footer / Pagination */}
            <div className="absolute bottom-8 left-16 right-16 flex justify-between items-center text-[8px] text-white/30 uppercase tracking-widest font-semibold border-t border-white/10 pt-4 z-20">
                <span>Corporate Profile • SREW Projects</span>
                <span>Page 01</span>
            </div>
        </section>
    );
}
