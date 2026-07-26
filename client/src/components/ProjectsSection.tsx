import { MapPin, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "200 TPH Crushing & Screening Plant",
    location: "West Bengal, India",
    description: "Delivered 3 output sizes and washed sand within a compact 3-acre plant. Complete turnkey solution with jaw crusher, cone crusher, vibrating screens, and sand washing system.",
    image: "/images/Projects/project1.jpg",
    highlights: ["3 Output Sizes", "Washed Sand", "3-Acre Plant", "Turnkey"],
  },
  {
    title: "400 TPH Aggregate Plant",
    location: "Singareni, India",
    description: "Achieved production stability at 385+ TPH even in monsoon due to superior water management systems. Heavy-duty aggregate plant with advanced screening and washing.",
    image: "/images/Projects/project2.jpg",
    highlights: ["385+ TPH Output", "Monsoon-Proof", "Water Management", "Aggregate"],
  },
  {
    title: "40 TPH Mobile Crushing Unit",
    location: "Odisha, India",
    description: "Deployed in 20 days, running successfully in 6+ locations. Fully autonomous crawler mobile crushing plant with intelligent PLC controls.",
    image: "/images/Projects/project3.jpg",
    highlights: ["20-Day Deployment", "6+ Locations", "Mobile/Crawler", "Autonomous"],
  }
];

const clients = [
  "NCC Urban", "Balaji Builders", "Aparna Enterprises", "Toshani Projects",
  "Patel Infrastructure", "SSREC", "Glindco", "Magnatech", "Markolines", "Versan",
];

const serviceLocations = [
  { state: "Telangana", city: "Hyderabad (HQ)" },
  { state: "Andhra Pradesh", city: "Multiple Sites" },
  { state: "Odisha", city: "Bhubaneswar Region" },
  { state: "West Bengal", city: "Kolkata Region" },
  { state: "Kerala", city: "Multiple Sites" },
  { state: "Karnataka", city: "Bangalore Region" },
];

export default function ProjectsSection() {
  return (
    <section className="page-a4 bg-[#F8F9FA] flex flex-col p-16 relative">
      {/* Section Header */}
      <div className="mb-10 flex-shrink-0">
        <p className="data-label data-label-dark mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>03 / Deployment Capabilities</p>
        <div className="section-rule mb-4" />
        <h2 className="font-display font-bold text-3xl text-[#0A1628] tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          FEATURED PROJECTS &<br />
          <span className="text-[#1B3A6B]">CLIENT NETWORK</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8">
        
        {/* Project Cards */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-white border border-[#D9D9D9] overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] w-full p-1 bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                <div className="absolute top-2 right-2 bg-[#0A1628] px-2 py-1 flex items-center gap-1">
                  <MapPin size={8} className="text-[#F2B233]" />
                  <span className="text-[7px] tracking-[0.2em] uppercase text-white font-bold">{project.location}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-sm text-[#0A1628] leading-tight mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-[10px] text-[#2B2B2B] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1 text-[7px] tracking-wider uppercase bg-gray-100 text-[#0A1628] px-1.5 py-0.5 font-bold border border-gray-200"
                    >
                      <CheckCircle size={6} className="text-[#F2B233]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8 mt-4">
          {/* Service Locations */}
          <div className="col-span-5 border-t border-[#D9D9D9] pt-4">
            <h3 className="font-display font-bold text-sm text-[#0A1628] mb-4 uppercase tracking-widest text-[9px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Service Network
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {serviceLocations.map((loc, i) => (
                <div key={i} className="bg-white border border-[#D9D9D9] p-3">
                  <p className="font-display font-bold text-[10px] text-[#0A1628] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>{loc.state}</p>
                  <p className="text-[8px] text-[#6B6B6B] tracking-wider mt-1">{loc.city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clients Strip */}
          <div className="col-span-7 border-t border-[#D9D9D9] pt-4">
            <h3 className="font-display font-bold text-sm text-[#0A1628] mb-4 uppercase tracking-widest text-[9px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Trusted by Industry Leaders
            </h3>
            <div className="flex flex-wrap gap-2">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#D9D9D9] px-3 py-2"
                >
                  <span className="font-display font-bold text-[10px] text-[#0A1628] uppercase tracking-wider">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Footer / Pagination */}
      <div className="mt-8 pt-4 flex justify-between items-center text-[8px] text-[#6B6B6B] uppercase tracking-widest font-semibold border-t border-[#D9D9D9]">
        <span>Corporate Profile • SREW Projects</span>
        <span>Page 08</span>
      </div>
    </section>
  );
}
