/*
 * Technology Section: Our Accelerators — Dark industrial
 * - Heavy typography, mono data labels
 * - Two-column layout with image and corner brackets
 * - Icon-based feature cards with metrics
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Eye, Zap, ThermometerSun, BarChart3, Radio,
} from "lucide-react";

const accelerators = [
  {
    icon: Brain,
    title: "AI Predictive Analytics",
    description: "Machine learning algorithms analyze operational data to predict equipment failures before they occur, scheduling maintenance proactively.",
    metric: "40%",
    metricLabel: "Less Downtime",
  },
  {
    icon: Eye,
    title: "Digital Twin Technology",
    description: "Real-time virtual replicas of physical crushing equipment enable operators to simulate improvements without interrupting production.",
    metric: "37.4%",
    metricLabel: "CAGR in Adoption",
  },
  {
    icon: Zap,
    title: "Hybrid Diesel-Electric Drives",
    description: "Next-generation crushers combine diesel and electric power, reducing fuel consumption and significantly lowering carbon emissions.",
    metric: "30%",
    metricLabel: "Fuel Savings",
  },
  {
    icon: ThermometerSun,
    title: "IoT Condition Monitoring",
    description: "Embedded sensors continuously track vibration, temperature, bearing health, and throughput, feeding data to cloud platforms for instant alerts.",
    metric: "24/7",
    metricLabel: "Real-Time Monitoring",
  },
  {
    icon: BarChart3,
    title: "SCADA-Based PLC Controls",
    description: "Fully automated supervisory control systems enable one-touch startup, parameter optimization, and remote management of crushing operations.",
    metric: "3x",
    metricLabel: "Faster Setup",
  },
  {
    icon: Radio,
    title: "Remote Operations Center",
    description: "Centralized control rooms allow operators to manage multiple crushing sites from a single location, improving safety and reducing personnel costs.",
    metric: "60%",
    metricLabel: "Safety Improvement",
  },
];

export default function TechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[oklch(0.15_0.01_260)]">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3">Section 06 — Technology Accelerators</p>
          <div className="w-12 h-[3px] bg-primary mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.05]">
            OUR ACCELERATORS
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed max-w-2xl">
            Cutting-edge technologies transforming aggregate processing into
            a data-driven, efficient, and sustainable operation.
          </p>
        </motion.div>

        {/* Image + Text row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <img
              src="/images/about-company.jpg"
              alt="Smart crusher with IoT monitoring"
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-primary" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-primary" />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                IoT-Enabled Smart Crusher — Industry 4.0
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-xl lg:text-2xl text-white mb-4 tracking-tight">
              Industry 4.0 for Aggregates
            </h3>
            <p className="text-white/55 leading-relaxed text-sm mb-4">
              The integration of Industry 4.0 technologies — automation, IoT, AI, and data analytics —
              is revolutionizing plant operations. By 2026, automation is becoming standard with smart
              control systems enabling dynamic parameter optimization.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              Metso, Sandvik, and Thyssenkrupp are leading this transformation,
              offering integrated platforms that combine multiple crushing stages with real-time
              monitoring systems and autonomous operation capabilities.
            </p>
            <div className="mt-6 flex gap-6">
              {[
                { label: "METSO", value: "Nordberg HP" },
                { label: "SANDVIK", value: "AutoMine" },
                { label: "TK", value: "HydroClean" },
              ].map((brand, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/30">{brand.label}</p>
                  <p className="font-display font-semibold text-sm text-white">{brand.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Accelerators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {accelerators.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[oklch(0.20_0.008_260)] border border-white/10 p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <acc.icon size={20} className="text-primary" />
                <div className="text-right">
                  <span className="font-display font-bold text-xl text-white">{acc.metric}</span>
                </div>
              </div>
              <h4 className="font-display font-bold text-sm text-white mb-2 tracking-tight">
                {acc.title}
              </h4>
              <p className="text-[12px] text-white/45 leading-relaxed">
                {acc.description}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{acc.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
