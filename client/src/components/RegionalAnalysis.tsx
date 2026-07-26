/*
 * Regional Analysis: Interactive horizontal bar chart + regional cards
 * - Industrial documentation style with mono labels
 * - Interactive bars with hover states
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

const regionalData = [
  { region: "Asia Pacific", share: 42.3, cagr: "6.5%", markets: "China, India, Southeast Asia, Australia" },
  { region: "North America", share: 28.7, cagr: "5.2%", markets: "United States, Canada" },
  { region: "Europe", share: 16.4, cagr: "4.8%", markets: "Germany, UK, France, Italy" },
  { region: "Latin America", share: 6.8, cagr: "7.2%", markets: "Brazil, Mexico, Chile" },
  { region: "Middle East & Africa", share: 5.8, cagr: "7.0%", markets: "GCC, South Africa, Nigeria" },
];

const COLORS = ["#e17055", "#2d3436", "#636e72", "#fdcb6e", "#b2bec3"];

export default function RegionalAnalysis() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="data-label mb-3">Section 05 — Regional Analysis</p>
          <div className="section-rule mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
            GLOBAL MARKET
            <br />
            <span className="text-primary">LANDSCAPE</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Asia Pacific dominates market share while Latin America and Africa
            show the highest growth rates, fueled by mining expansion and
            infrastructure development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3 card-brutalist bg-card p-6"
          >
            <p className="data-label mb-1">FIG. 04 — Regional Market Share</p>
            <h3 className="font-display font-bold text-lg mb-6">Share by Region (%)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={regionalData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,85%)" horizontal={false} />
                <XAxis type="number" domain={[0, 50]} tick={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }} />
                <YAxis dataKey="region" type="category" tick={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11 }} width={130} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.98 0.002 80)",
                    border: "2px solid oklch(0.65 0.18 40)",
                    borderRadius: "0",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    padding: "8px 12px",
                  }}
                  formatter={(value: number) => [`${value}%`, "Market Share"]}
                />
                <Bar dataKey="share" radius={[0, 3, 3, 0]} barSize={24}>
                  {regionalData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      opacity={hoveredRegion === null || hoveredRegion === index ? 1 : 0.35}
                      onMouseEnter={() => setHoveredRegion(index)}
                      onMouseLeave={() => setHoveredRegion(null)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Regional Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2 space-y-3"
          >
            {regionalData.map((region, i) => (
              <div
                key={i}
                className="bg-card border-2 border-border p-4 hover:border-primary/30 transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredRegion(i)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {region.region}
                  </h4>
                  <span className="font-display font-bold text-lg text-primary">
                    {region.share}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span>{region.markets}</span>
                  <span className="bg-secondary px-2 py-0.5">CAGR {region.cagr}</span>
                </div>
                <div className="mt-3 h-1.5 bg-secondary overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${(region.share / 50) * 100}%`,
                      backgroundColor: COLORS[i],
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
