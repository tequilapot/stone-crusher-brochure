/*
 * Manufacturers Section: Top 10 global manufacturers — Industrial table
 * - Sortable columns with heavy header styling
 * - Download CSV button
 * - Industrial card container
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpDown, Download } from "lucide-react";

const manufacturers = [
  { rank: 1, name: "Metso", country: "Finland", founded: 1999, specialty: "Nordberg HP Cone, Lokotrack Mobile, Metso Metrics", position: "Global Leader" },
  { rank: 2, name: "Sandvik", country: "Sweden", founded: 1862, specialty: "CH800 Series, AutoMine Autonomous, QJ341 Mobile", position: "Premium Engineering" },
  { rank: 3, name: "Terex Corp.", country: "USA", founded: 1933, specialty: "Cedarapids MJ55, TC1150 Cone, ProCare Service", position: "Robust & Reliable" },
  { rank: 4, name: "Thyssenkrupp", country: "Germany", founded: 1999, specialty: "ERC Eccentric Roll, Kubria Cone, HydroClean", position: "European Leader" },
  { rank: 5, name: "SBM", country: "China", founded: 1987, specialty: "HPT Multi-Cylinder, CI5X Impact Crusher", position: "Emerging Global" },
  { rank: 6, name: "Astec Industries", country: "USA", founded: 1972, specialty: "Kodiak Plus Cone, Pioneer Jaw Crusher", position: "North American" },
  { rank: 7, name: "McCloskey Intl.", country: "Canada", founded: 1985, specialty: "Mobile Crushing & Screening, Compact Tracked", position: "Mobile Specialist" },
  { rank: 8, name: "Eagle Crusher", country: "USA", founded: 1987, specialty: "UltraMax Series, 3260 Portable Jaw", position: "Portable Equipment" },
  { rank: 9, name: "McLanahan Corp.", country: "USA", founded: 1835, specialty: "Universal Jaw, NGS Impact, Wet Processing", position: "Heritage Leader" },
  { rank: 10, name: "ZENITH", country: "China", founded: 1987, specialty: "PEW Jaw, HPT Cone, Turnkey Solutions", position: "Value Performance" },
];

type SortKey = "rank" | "name" | "country" | "founded";

export default function ManufacturersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...manufacturers].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const modifier = sortDir === "asc" ? 1 : -1;
    if (typeof aVal === "number" && typeof bVal === "number") {
      return (aVal - bVal) * modifier;
    }
    return (String(aVal).localeCompare(String(bVal))) * modifier;
  });

  const handleDownload = () => {
    const csv = [
      ["Rank", "Manufacturer", "Country", "Founded", "Key Products", "Position"],
      ...manufacturers.map(m => [m.rank, m.name, m.country, String(m.founded), m.specialty, m.position])
    ].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "top-10-stone-crusher-manufacturers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="data-label mb-3">Section 07 — Competitive Landscape</p>
          <div className="section-rule mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
            TOP 10 GLOBAL
            <br />
            <span className="text-primary">MANUFACTURERS</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Established European and American manufacturers dominate, while Chinese
            producers rapidly expand their global footprint through competitive pricing
            and turnkey solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="card-brutalist bg-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border bg-secondary/50">
                  <th
                    className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort("rank")}
                  >
                    <span className="flex items-center gap-1">
                      # <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th
                    className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort("name")}
                  >
                    <span className="flex items-center gap-1">
                      Manufacturer <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th
                    className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort("country")}
                  >
                    <span className="flex items-center gap-1">
                      HQ <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th
                    className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort("founded")}
                  >
                    <span className="flex items-center gap-1">
                      Founded <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Key Products
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((mfr, i) => (
                  <tr
                    key={mfr.rank}
                    className={`border-b border-border/50 transition-colors duration-200 ${
                      hoveredRow === i ? "bg-primary/5" : "hover:bg-secondary/30"
                    }`}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-4 py-3 font-mono text-sm font-bold text-primary">
                      {mfr.rank}
                    </td>
                    <td className="px-4 py-3 font-display font-bold text-sm">
                      {mfr.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {mfr.country}
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                      {mfr.founded}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground max-w-[260px]">
                      {mfr.specialty}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-secondary px-2 py-1 text-muted-foreground">
                        {mfr.position}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Download */}
        <div className="mt-6">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all duration-200 active:scale-[0.97]"
          >
            <Download size={14} />
            Export Manufacturer Data (CSV)
          </button>
        </div>
      </div>
    </section>
  );
}
