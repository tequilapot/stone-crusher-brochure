export default function AboutSection() {
  return (
    <section className="page-a4 bg-white flex flex-col p-16">
      
      {/* Section Header */}
      <div className="mb-10 flex-shrink-0">
        <p className="data-label data-label-dark mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>01 / About SREW</p>
        <div className="section-rule mb-4" />
        <h2 className="font-display font-bold text-4xl text-[#0A1628] tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          ENGINEERED FOR
          <br />
          <span className="text-[#1B3A6B]">MAXIMUM YIELD</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-12 gap-12">
        
        {/* Left Col: Images */}
        <div className="col-span-7 flex flex-col gap-4">
          <div className="relative aspect-[4/3] w-full bg-gray-100 p-2 border border-[#D9D9D9]">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#F5C518]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#F5C518]" />
            <img
              src="/images/about-company.jpg"
              alt="SREW manufacturing facility"
              className="w-full h-full object-cover mix-blend-multiply"
            />
            <div className="absolute top-4 left-4 bg-[#0A1628]/85 px-3 py-1">
              <span className="text-[8px] tracking-[0.2em] uppercase text-white/90" style={{ fontFamily: "'Calibri', sans-serif" }}>
                Manufacturing Facility
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-[4/3] bg-gray-100 border border-[#D9D9D9] p-1">
              <img
                src="/images/Projects/project1.jpg"
                alt="SREW facility view"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-100 border border-[#D9D9D9] p-1">
              <img
                src="/images/Projects/project2.jpg"
                alt="SREW site operations"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="aspect-[4/3] bg-gray-100 border border-[#D9D9D9] p-1">
              <img
                src="/images/Projects/project3.jpg"
                alt="SREW project deployment"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Right Col: Text */}
        <div className="col-span-5 flex flex-col">
          <div className="space-y-4">
            <p className="text-[13px] text-[#2B2B2B] leading-relaxed">
              SREW Projects (SREW) is a premier manufacturer dedicated to heavy-duty
              industrial fabrication and precision engineering. We specialize in end-to-end
              design, proprietary manufacturing, and turnkey installation of high-capacity
              crushing, screening, sand processing, and material handling plants.
            </p>
            <p className="text-[13px] text-[#2B2B2B] leading-relaxed">
              Operating from Hyderabad, India, we serve top-tier operators across mining,
              aggregate, infrastructure, and heavy recycling sectors — delivering plants
              that are built for durability and long-term performance.
            </p>
            <p className="text-[13px] text-[#2B2B2B] leading-relaxed">
              Our integrated manufacturing facility features CNC machining centers,
              fabrication bays, hydraulic press shops, and PLC panel manufacturing —
              all under one roof, ensuring quality control at every stage.
            </p>
          </div>

          <div className="border-t border-[#D9D9D9] pt-6 mt-6">
            <p className="data-label data-label-dark mb-1 text-[9px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Leadership</p>
            <h3 className="font-display font-bold text-lg text-[#0A1628]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Mr. Ranga Reddy J.
            </h3>
            <p className="text-[9px] tracking-[0.1em] uppercase text-[#F5C518] font-bold mt-1" style={{ fontFamily: "'Calibri', sans-serif" }}>
              Founder & Managing Director
            </p>
            <p className="text-[12px] text-[#2B2B2B] leading-relaxed mt-2 bg-gray-50 p-4 border border-gray-100">
              With over 30 years of field-tested expertise, Ranga Reddy leads SREW with a
              focus on reliability and execution quality. His career includes serving
              as Operations Head for major projects in Kenya and key roles at Srisailam and
              Singareni Collieries.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mt-auto pt-6 border-t border-[#D9D9D9]">
        {[
          { value: "10+", label: "Years of Experience" },
          { value: "45+", label: "Clients Served" },
          { value: "120+", label: "Projects Delivered" },
          { value: "4.8", label: "Google Rating" },
        ].map((stat, i) => (
          <div key={i}>
            <p className="font-display font-bold text-2xl text-[#0A1628]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.value}</p>
            <p className="text-[8px] tracking-[0.15em] uppercase text-[#6B6B6B] mt-1 font-bold" style={{ fontFamily: "'Calibri', sans-serif" }}>{stat.label}</p>
            <div className="w-6 h-[2px] bg-[#F5C518] mt-2" />
          </div>
        ))}
      </div>

      {/* Print Footer / Pagination */}
      <div className="mt-8 flex justify-between items-center text-[8px] text-[#6B6B6B] uppercase tracking-widest font-semibold">
        <span>Corporate Profile • SREW Projects</span>
        <span>Page 02</span>
      </div>
      
    </section>
  );
}
