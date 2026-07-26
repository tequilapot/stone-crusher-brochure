/*
 * Trends Section: 6 key industry trends — Dark brutalism
 * - Numbered cards with thick left borders
 * - Mono data callouts
 * - Heavy Space Grotesk headlines
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu, Wifi, Recycle, Leaf, Package, Shield,
} from "lucide-react";

const trends = [
  {
    number: "01",
    icon: Cpu,
    title: "Autonomy & AI Automation",
    description: "Autonomous crushers and AI-powered monitoring are becoming standard. Smart control systems dynamically optimize crushing parameters. Caterpillar announced at CES 2026 that autonomy technology will extend beyond haul trucks to excavators, loaders, and dozers.",
    metric: "+15%",
    metricLabel: "Production Increase",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Digital Twins & IoT",
    description: "Digital twin technology (37.4% CAGR) mirrors physical crushers in real-time. IoT sensors collect vibration, temperature, and throughput data, enabling predictive maintenance and reducing unplanned downtime by up to 40%.",
    metric: "37.4%",
    metricLabel: "CAGR in Adoption",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Sustainability & Electric Drives",
    description: "Electric and hybrid crushing equipment reduces fuel consumption and emissions. Hybrid diesel-electric crushers save up to 10 liters/hour. EU Circular Economy mandates 70% recovery of construction waste by 2030.",
    metric: "-30%",
    metricLabel: "Energy Reduction",
  },
  {
    number: "04",
    icon: Recycle,
    title: "C&D Waste Recycling",
    description: "Construction and demolition waste recycling is the fastest-growing segment at 7.8% CAGR. Mobile screening plants separate concrete, wood, metals, and asphalt into reusable fractions, reducing landfill dependency.",
    metric: "600M",
    metricLabel: "Tons C&D Waste/Year",
  },
  {
    number: "05",
    icon: Package,
    title: "Modular & Mobile Plants",
    description: "Mobile crushing and screening systems projected to capture 52.3% market share by 2035. Modular components allow operators to scale capacity based on project needs, reducing capital expenditure.",
    metric: "52.3%",
    metricLabel: "Mobile Share by 2035",
  },
  {
    number: "06",
    icon: Shield,
    title: "Safety & Compliance",
    description: "Proximity detection, wearable fatigue monitoring, and drone-based inspections. Stricter EPA and EU emissions regulations drive equipment upgrades. MSHA reported 27% increase in industry fatalities in 2025.",
    metric: "27%",
    metricLabel: "Fatality Increase (MSHA)",
  },
];

export default function TrendsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trends" className="py-20 lg:py-28 bg-[oklch(0.18_0.01_260)]">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3">Section 04 — Industry Trends</p>
          <div className="w-12 h-[3px] bg-primary mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.05]">
            2026 TRENDS
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed max-w-2xl">
            Six transformative forces reshaping the aggregate equipment industry,
            from AI-driven automation to circular economy mandates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trends.map((trend, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[oklch(0.22_0.008_260)] border border-white/10 p-6 hover:border-primary/30 transition-all duration-300 group relative"
            >
              {/* Thick left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/0 group-hover:bg-primary transition-colors duration-300" />

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xl font-bold text-primary/30">
                  {trend.number}
                </span>
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center">
                  <trend.icon size={18} className="text-primary" />
                </div>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-3 tracking-tight">
                {trend.title}
              </h3>
              <p className="text-[13px] text-white/45 leading-relaxed mb-5">
                {trend.description}
              </p>
              <div className="flex items-center gap-3 bg-primary/8 px-3 py-2 border border-primary/15">
                <span className="font-display font-bold text-lg text-primary">{trend.metric}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary/60">{trend.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
