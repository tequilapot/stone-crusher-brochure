export default function ProjectSpreadSection() {
 return (
 <>
 {/* Spread Page 1: Overview & Challenge */}
 <section className="page-a4 bg-white flex flex-col relative overflow-hidden">
 {/* Background Grid Overlay */}
 <div 
 className="absolute inset-0 opacity-5 pointer-events-none" 
 style={{ 
 backgroundImage: 'linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)',
 backgroundSize: '20px 20px'
 }}
 />

 {/* Top Header */}
 <div className="absolute top-0 left-0 right-0 h-2 bg-[#0B1F3A] z-20" />
 <div className="px-16 pt-12 pb-6 relative z-10 flex justify-between items-end border-b border-[#D9D9D9]">
 <div>
 <p className="text-[10px] tracking-[0.2em] uppercase text-[#F2B233] font-bold mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Featured Project Spread</p>
 <h2 className="font-display font-extrabold text-4xl text-[#0B1F3A] tracking-tight uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 Crushing & Demolition<br />Recycling Plant
 </h2>
 </div>
 <div className="text-right">
 <p className="text-[9px] tracking-widest text-[#0B1F3A]/50 uppercase font-semibold">Location</p>
 <p className="text-lg font-bold text-[#0B1F3A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hyderabad, India</p>
 </div>
 </div>

 {/* Main Content Grid */}
 <div className="flex-1 grid grid-cols-12 gap-8 px-16 py-8 relative z-10">
 
 {/* Left Column: Hero Image & Gallery */}
 <div className="col-span-7 flex flex-col gap-4">
 <div className="relative aspect-square w-full bg-gray-100 border border-[#D9D9D9] p-2">
 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0B1F3A]" />
 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0B1F3A]" />
 <img 
 src="/images/recycling.jpg" 
 alt="Hyderabad C&D Recycling Plant Hero" 
 className="w-full h-full object-cover mix-blend-multiply border-none outline-none ring-0 shadow-none"
 onError={(e) => { e.currentTarget.style.display = 'none' }}
 />
 {/* Fallback pattern if image is missing */}
 <div className="absolute inset-0 bg-[#0B1F3A]/5 -z-10 flex items-center justify-center">
 <span className="text-[#0B1F3A]/20 font-bold uppercase tracking-widest">Primary Plant View</span>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="bg-gray-100 border border-[#D9D9D9] p-1 aspect-square relative">
 <img src="/images/Projects/project4.jpg" alt="Detail 1" className="w-full h-full object-cover mix-blend-multiply border-none outline-none ring-0 shadow-none" onError={(e) => { e.currentTarget.style.display = 'none' }} />
 <div className="absolute inset-0 bg-[#0B1F3A]/5 -z-10 flex items-center justify-center">
 <span className="text-[#0B1F3A]/20 text-[10px] uppercase font-bold">Process Feed</span>
 </div>
 </div>
 <div className="bg-gray-100 border border-[#D9D9D9] p-1 aspect-square relative">
 <img src="/images/Projects/project5.jpg" alt="Detail 2" className="w-full h-full object-cover mix-blend-multiply border-none outline-none ring-0 shadow-none" onError={(e) => { e.currentTarget.style.display = 'none' }} />
 <div className="absolute inset-0 bg-[#0B1F3A]/5 -z-10 flex items-center justify-center">
 <span className="text-[#0B1F3A]/20 text-[10px] uppercase font-bold">Screening Unit</span>
 </div>
 </div>
 </div>
 </div>

 {/* Right Column: Editorial Text */}
 <div className="col-span-5 flex flex-col">
 
 {/* Overview */}
 <div className="mb-8">
 <h3 className="flex items-center gap-2 font-bold text-[#0B1F3A] uppercase tracking-wider text-sm mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 <span className="text-[#F2B233]">■</span> Project Overview
 </h3>
 <p className="text-[13px] text-[#2B2B2B] leading-relaxed">
 Designed, manufactured, and commissioned a state-of-the-art Construction & Demolition (C&D) waste recycling plant in Hyderabad. This facility transforms urban demolition debris into high-quality secondary raw materials, promoting sustainable construction practices while minimizing landfill impact.
 </p>
 </div>

 {/* Challenge */}
 <div className="mb-8">
 <h3 className="flex items-center gap-2 font-bold text-[#0B1F3A] uppercase tracking-wider text-sm mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 <span className="text-[#F2B233]">■</span> Client Challenge
 </h3>
 <p className="text-[13px] text-[#2B2B2B] leading-relaxed">
 The municipality required a high-capacity system capable of handling heterogeneous demolition waste containing heavy rebar, concrete chunks, plastics, and wood, with strict emission and dust control regulations.
 </p>
 </div>

 {/* Solution */}
 <div className="bg-[#0B1F3A] text-white p-6 relative overflow-hidden flex-1">
 <div className="absolute right-0 bottom-0 w-32 h-32 border-r border-b border-[#F2B233]/20 translate-x-4 translate-y-4" />
 <h3 className="font-bold text-[#F2B233] uppercase tracking-wider text-sm mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 Engineering Solution
 </h3>
 <p className="text-[12px] text-white/90 leading-relaxed">
 SREW Projects implemented a heavy-duty customized Jaw Crusher equipped with a magnetic separator to instantly remove rebar. This was coupled with our proprietary Damping Vibrating Screen and an advanced dust-suppression system to ensure zero-emission compliance.
 </p>
 
 <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
 <div>
 <p className="text-[9px] text-[#F2B233] uppercase tracking-widest mb-1">Capacity</p>
 <p className="text-xl font-bold font-display">200 TPH</p>
 </div>
 <div>
 <p className="text-[9px] text-[#F2B233] uppercase tracking-widest mb-1">Status</p>
 <p className="text-xl font-bold font-display">Operational</p>
 </div>
 </div>
 </div>

 </div>
 </div>

 {/* Footer */}
 <div className="absolute bottom-6 left-16 right-16 flex justify-between items-center text-[8px] text-[#0B1F3A]/50 uppercase tracking-widest font-semibold border-t border-[#D9D9D9] pt-4">
 <span>Project Profile • SREW Projects</span>
 <span>Page 06</span>
 </div>
 </section>

 {/* Spread Page 2: Specs & Outcomes */}
 <section className="page-a4 bg-[#0B1F3A] text-white flex flex-col relative overflow-hidden">
 {/* Technical Blueprint Background */}
 <div 
 className="absolute inset-0 opacity-[0.03] pointer-events-none" 
 style={{ 
 backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
 backgroundSize: '10px 10px'
 }}
 />
 
 <div className="px-16 py-12 flex-1 flex flex-col relative z-10">
 
 <div className="mb-10">
 <h2 className="font-display font-extrabold text-3xl text-white tracking-tight uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 Technical Specifications <span className="text-[#F2B233]">&</span> Equipment Supply
 </h2>
 <div className="w-24 h-1 bg-[#F2B233] mt-4" />
 </div>

 <div className="grid grid-cols-12 gap-12 flex-1">
 
 {/* Left Col: Specs */}
 <div className="col-span-5 flex flex-col gap-6">
 
 <div className="border border-white/10 bg-white/5 p-6">
 <h3 className="text-[11px] text-[#F2B233] uppercase tracking-widest font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Supplied Machinery</h3>
 <ul className="space-y-3 text-[13px] text-white/90">
 <li className="flex justify-between border-b border-white/10 pb-2">
 <span>Primary Crusher</span> <span className="font-bold">Heavy-Duty Jaw</span>
 </li>
 <li className="flex justify-between border-b border-white/10 pb-2">
 <span>Secondary Crusher</span> <span className="font-bold">Impact Crusher</span>
 </li>
 <li className="flex justify-between border-b border-white/10 pb-2">
 <span>Screening</span> <span className="font-bold">3-Deck Vibrating</span>
 </li>
 <li className="flex justify-between border-b border-white/10 pb-2">
 <span>Material Handling</span> <span className="font-bold">Belt Conveyors (6)</span>
 </li>
 <li className="flex justify-between border-b border-white/10 pb-2">
 <span>Sorting</span> <span className="font-bold">Magnetic Separators</span>
 </li>
 <li className="flex justify-between">
 <span>Automation</span> <span className="font-bold">PLC Control Panel</span>
 </li>
 </ul>
 </div>

 <div className="bg-[#F2B233] text-[#0B1F3A] p-6 mt-auto">
 <h3 className="text-[11px] uppercase tracking-widest font-extrabold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Project Outcomes</h3>
 <p className="text-[13px] font-medium leading-snug">
 Successful diversion of 90% of demolition waste from landfills. The processed output is now actively utilized in local road base construction and brick manufacturing, yielding an ROI for the municipality in under 24 months.
 </p>
 </div>

 </div>

 {/* Right Col: Process Flow Diagram */}
 <div className="col-span-7 flex flex-col">
 <h3 className="text-[11px] text-white/50 uppercase tracking-widest font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>System Process Flow</h3>
 
 <div className="flex-1 border border-white/20 relative p-8 flex items-center justify-center">
 {/* Abstract Process Flow graphic using HTML/CSS */}
 <div className="w-full flex flex-col items-center gap-6">
 
 <div className="flex w-full items-center justify-between">
 <div className="w-24 h-16 border-2 border-[#F2B233] flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10">
 Raw Waste<br/>Hopper
 </div>
 <div className="flex-1 h-[2px] bg-white/20 relative">
 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-white/20 rotate-45" />
 </div>
 <div className="w-24 h-16 border-2 border-white flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10">
 Magnetic<br/>Separator
 </div>
 <div className="flex-1 h-[2px] bg-white/20 relative">
 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-white/20 rotate-45" />
 </div>
 <div className="w-24 h-16 border-2 border-white flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10">
 Jaw<br/>Crusher
 </div>
 </div>

 <div className="h-12 w-[2px] bg-white/20 self-end mr-[3rem] relative">
 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white/20 rotate-45" />
 </div>

 <div className="flex w-full items-center justify-between flex-row-reverse">
 <div className="w-24 h-16 border-2 border-[#F2B233] flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10 text-[#F2B233]">
 Processed<br/>Aggregates
 </div>
 <div className="flex-1 h-[2px] bg-white/20 relative">
 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b-2 border-l-2 border-white/20 rotate-45" />
 </div>
 <div className="w-24 h-16 border-2 border-white flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10">
 Vibrating<br/>Screen
 </div>
 <div className="flex-1 h-[2px] bg-white/20 relative">
 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b-2 border-l-2 border-white/20 rotate-45" />
 </div>
 <div className="w-24 h-16 border-2 border-white flex items-center justify-center text-[9px] uppercase font-bold text-center p-2 relative bg-[#0B1F3A] z-10">
 Impact<br/>Crusher
 </div>
 </div>

 </div>
 
 {/* Engineering Accents */}
 <div className="absolute top-2 left-2 text-[8px] text-white/20 font-mono">FLOW_DIAG_v2.1</div>
 <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#F2B233]" />
 </div>

 </div>

 </div>
 </div>

 {/* Footer */}
 <div className="absolute bottom-6 left-16 right-16 flex justify-between items-center text-[8px] text-white/30 uppercase tracking-widest font-semibold border-t border-white/10 pt-4">
 <span>Project Profile • SREW Projects</span>
 <span>Page 07</span>
 </div>
 </section>
 </>
 );
}
