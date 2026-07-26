import {
  Shield, Flame, Headphones, Cpu, Layers, Wrench,
} from "lucide-react";

const accelerators = [
  {
    icon: Layers,
    title: "Turnkey EPC Integration",
    description: "From site blueprint design to equipment manufacturing and plant commissioning. Complete end-to-end project delivery.",
    metric: "30–400",
    metricLabel: "TPH Capacity Range",
  },
  {
    icon: Flame,
    title: "High-Manganese Steel Casting",
    description: "Proprietary hard-metal alloys reduce wear-parts replacement costs up to 30%. Superior metallurgical durability.",
    metric: "30%",
    metricLabel: "Cost Reduction",
  },
  {
    icon: Headphones,
    title: "24/7 OEM Parts & Support",
    description: "Guaranteed critical spares in stock for standard machine models. Lifetime customer support with prompt service.",
    metric: "24/7",
    metricLabel: "Parts Availability",
  },
  {
    icon: Cpu,
    title: "PLC Intelligent Control",
    description: "In-house PLC panel manufacturing with advanced automation capabilities. One-touch startup and remote management.",
    metric: "100%",
    metricLabel: "Guaranteed Uptime",
  },
  {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    description: "International quality management standards ensure every plant meets rigorous global benchmarks for capacity and efficiency.",
    metric: "ISO",
    metricLabel: "Quality Certified",
  },
  {
    icon: Wrench,
    title: "In-House CNC Manufacturing",
    description: "Advanced CNC machining centers, fabrication bays, hydraulic press shops, and PLC panel manufacturing — all under one roof.",
    metric: "4",
    metricLabel: "Manufacturing Bays",
  },
];

export default function AcceleratorsSection() {
  return (
    <section className="page-a4 bg-[#0B1F3A] flex flex-col p-16 relative">
      {/* Background Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Section Header */}
      <div className="mb-10 flex-shrink-0 relative z-10">
        <p className="data-label text-[#F2B233] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>04 / Engineering Excellence</p>
        <div className="section-rule mb-4" />
        <h2 className="font-display font-bold text-3xl text-white tracking-tight leading-tight uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          THE SREW ADVANTAGE
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-10 relative z-10">
        
        {/* Top Split: Image + Text */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-10">
          <div className="relative aspect-[16/9] border border-white/20 p-2 bg-white/5">
            <img
              src="/images/Products/srew-triple-shaft-vibrating-screen.png"
              alt="SREW equipment"
              className="w-full h-full object-cover mix-blend-screen opacity-80"
            />
            <div className="absolute top-4 left-4 bg-[#0B1F3A] px-3 py-1 border border-[#F2B233]/30">
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#F2B233] font-bold" style={{ fontFamily: "'Calibri', sans-serif" }}>
                Precision Manufacturing
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center text-white">
            <h3 className="font-display font-bold text-xl mb-4 tracking-tight leading-tight uppercase text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              India's Premier<br />Engineering Firm
            </h3>
            <p className="text-white/70 leading-relaxed text-[12px] mb-3" style={{ fontFamily: "'Calibri', sans-serif" }}>
              SREW Projects specializes in heavy-duty industrial fabrication and
              precision engineering, serving top-tier operators across the mining,
              aggregate, infrastructure, and heavy recycling sectors.
            </p>
            <p className="text-white/70 leading-relaxed text-[12px]" style={{ fontFamily: "'Calibri', sans-serif" }}>
              SREW plants are built to rigorous global standards, delivering
              uncompromising operational uptime, superior metallurgical durability,
              and precise material shaping.
            </p>
          </div>
        </div>

        {/* Accelerators Grid */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {accelerators.map((acc, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-full bg-[#F2B233]/10 flex items-center justify-center">
                  <acc.icon size={14} className="text-[#F2B233]" />
                </div>
                <span className="font-display font-bold text-lg text-[#F2B233]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{acc.metric}</span>
              </div>
              <h4 className="font-display font-bold text-[11px] text-white mb-2 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {acc.title}
              </h4>
              <p className="text-[10px] text-white/50 leading-relaxed flex-1" style={{ fontFamily: "'Calibri', sans-serif" }}>
                {acc.description}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[7px] tracking-[0.2em] uppercase text-[#F2B233] font-bold" style={{ fontFamily: "'Calibri', sans-serif" }}>{acc.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Print Footer / Pagination */}
      <div className="mt-8 pt-4 flex justify-between items-center text-[8px] text-white/30 uppercase tracking-widest font-semibold border-t border-white/10 relative z-10">
        <span>Corporate Profile • SREW Projects</span>
        <span>Page 09</span>
      </div>
    </section>
  );
}
