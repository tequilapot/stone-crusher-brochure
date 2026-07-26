/*
 * Market Overview: Interactive charts — Industrial Documentation style
 * - Heavy borders, mono labels, grid scaffolding
 * - Orange/amber as analytical signals
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  AreaChart, Area,
} from "recharts";

const marketGrowthData = [
  { year: "2025", crushing: 4.61, mobile: 3.15, aggregate: 629.8 },
  { year: "2026", crushing: 4.88, mobile: 3.33, aggregate: 654.2 },
  { year: "2028", crushing: 5.45, mobile: 3.72, aggregate: 720.1 },
  { year: "2030", crushing: 6.15, mobile: 4.18, aggregate: 785.5 },
  { year: "2032", crushing: 6.49, mobile: 4.65, aggregate: 835.2 },
  { year: "2034", crushing: 7.48, mobile: 5.24, aggregate: 922.7 },
  { year: "2035", crushing: 8.21, mobile: 5.51, aggregate: 960.3 },
];

const regionalData = [
  { name: "Asia Pacific", value: 42.3, color: "#e17055" },
  { name: "North America", value: 28.7, color: "#2d3436" },
  { name: "Europe", value: 16.4, color: "#636e72" },
  { name: "Latin America & MEA", value: 12.6, color: "#fdcb6e" },
];

const constructionEquipData = [
  { year: "2024", value: 175.6 },
  { year: "2026", value: 184.9 },
  { year: "2028", value: 205.3 },
  { year: "2030", value: 230.5 },
  { year: "2032", value: 258.2 },
  { year: "2034", value: 292.8 },
];

const chartStyle = {
  contentStyle: {
    backgroundColor: "oklch(0.98 0.002 80)",
    border: "2px solid oklch(0.65 0.18 40)",
    borderRadius: "0",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "12px",
    padding: "8px 12px",
  },
  cursor: { stroke: "oklch(0.65 0.18 40)", strokeWidth: 1 },
};

export default function MarketOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market" className="py-20 lg:py-28 bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="data-label mb-3">Section 02 — Market Intelligence</p>
          <div className="section-rule mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
            MARKET DATA
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            The aggregate equipment industry is experiencing robust growth driven by
            global infrastructure investment, urbanization, and the transition toward
            sustainable processing technologies.
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Market Growth Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="card-brutalist bg-card p-6"
          >
            <p className="data-label mb-1">FIG. 01 — Crushing & Screening Market</p>
            <h3 className="font-display font-bold text-lg mb-1">Market Growth Projections</h3>
            <p className="font-mono text-[11px] text-muted-foreground mb-5">USD BILLIONS | CAGR: 6.1%</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketGrowthData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,85%)" />
                <XAxis dataKey="year" tick={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }} />
                <YAxis tick={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }} />
                <Tooltip {...chartStyle} />
                <Bar dataKey="crushing" name="Crushing & Screening" fill="#e17055" radius={[2, 2, 0, 0]} />
                <Bar dataKey="mobile" name="Mobile Plants" fill="#2d3436" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Regional Breakdown Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="card-brutalist bg-card p-6"
          >
            <p className="data-label mb-1">FIG. 02 — Regional Market Share</p>
            <h3 className="font-display font-bold text-lg mb-1">Geographic Distribution</h3>
            <p className="font-mono text-[11px] text-muted-foreground mb-5">MOBILE CRUSHING & SCREENING PLANTS — 2025</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  labelLine={{ stroke: "hsl(0,0%,60%)", strokeWidth: 1 }}
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...chartStyle} formatter={(value: number) => [`${value}%`, "Market Share"]} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Equipment Market Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="card-brutalist bg-card p-6 lg:col-span-2"
          >
            <p className="data-label mb-1">FIG. 03 — Aggregate Equipment Trajectory</p>
            <h3 className="font-display font-bold text-lg mb-1">Equipment Market Growth</h3>
            <p className="font-mono text-[11px] text-muted-foreground mb-5">USD BILLIONS | CAGR: 5.3% (2024–2034)</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={constructionEquipData}>
                <defs>
                  <linearGradient id="colorEquip" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e17055" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#e17055" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,85%)" />
                <XAxis dataKey="year" tick={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }} />
                <YAxis tick={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }} />
                <Tooltip {...chartStyle} formatter={(value: number) => [`$${value}B`, "Market Size"]} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#e17055"
                  strokeWidth={2.5}
                  fill="url(#colorEquip)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
