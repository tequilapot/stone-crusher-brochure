import React from 'react';
import {
  Cog, Grid3X3, Droplets, Truck, Flame, Wrench,
  Layers, ArrowDown, Maximize, Gauge, Zap, Settings,
  Target, Cpu, MoveHorizontal
} from "lucide-react";

const allProducts = [
  // ── Crushing Equipment ──
  {
    name: "Jaw Crusher",
    application: "Primary Crushing",
    category: "Crushing Equipment",
    badge: "Best Seller",
    image: "/images/Products/srew-jaw-crusher.png",
    price: "₹18L - ₹55L*",
    specs: [
      { label: "Feed Size", value: "125-1200 mm", icon: Maximize },
      { label: "Capacity", value: "30-400 TPH", icon: Gauge },
      { label: "Motor Power", value: "90-200 HP", icon: Zap },
      { label: "Type", value: "Fixed Jaw", icon: Settings }
    ]
  },
  {
    name: "European Type Jaw Crusher",
    application: "Primary Crushing",
    category: "Crushing Equipment",
    badge: "Premium Series",
    image: "/images/Products/srew-european-type-jaw-crusher.png",
    price: "₹35L - ₹85L*",
    specs: [
      { label: "Feed Size", value: "480-1200 mm", icon: Maximize },
      { label: "Capacity", value: "80-500 TPH", icon: Gauge },
      { label: "Motor Power", value: "90-315 HP", icon: Zap },
      { label: "Type", value: "Hydraulic Wedge", icon: Settings }
    ]
  },
  {
    name: "Grease Jaw Crusher",
    application: "Primary Crushing",
    category: "Crushing Equipment",
    badge: "Heavy Duty",
    image: "/images/Products/srew-grease-jaw-crusher.png",
    price: "₹8L - ₹28L*",
    specs: [
      { label: "Feed Size", value: "200-750 mm", icon: Maximize },
      { label: "Capacity", value: "20-150 TPH", icon: Gauge },
      { label: "Motor Power", value: "15-75 HP", icon: Zap },
      { label: "Lubrication", value: "Grease", icon: Droplets }
    ]
  },
  {
    name: "Cone Crusher Plant",
    application: "Secondary Crushing",
    category: "Crushing Equipment",
    badge: "High Efficiency",
    image: "/images/Products/srew-cone-crusher-plant.png",
    price: "₹2.2Cr - ₹7Cr*",
    specs: [
      { label: "Capacity", value: "50-350 TPH", icon: Gauge },
      { label: "Plant Type", value: "2/3 Stage", icon: Layers },
      { label: "Configuration", value: "Stationary", icon: Settings },
      { label: "Automation", value: "Optional PLC", icon: Cpu }
    ]
  },
  {
    name: "Single Cylinder Cone Crusher",
    application: "Secondary Crushing",
    category: "Crushing Equipment",
    badge: "High Performance",
    image: "/images/Products/srew-single-cylinder-cone-crusher.png",
    price: "₹28L - ₹85L*",
    specs: [
      { label: "Capacity", value: "80-350 TPH", icon: Gauge },
      { label: "System", value: "Hydraulic", icon: Droplets },
      { label: "Protection", value: "Overload", icon: Settings },
      { label: "Control", value: "Automatic", icon: Cpu }
    ]
  },
  {
    name: "Multi Cylinder Cone Crusher",
    application: "High Capacity Crushing",
    category: "Crushing Equipment",
    badge: "Export Model",
    image: "/images/Products/srew-multi-cylinder-hydraulic-cone-crusher.png",
    price: "₹45L - ₹1.2Cr*",
    specs: [
      { label: "Capacity", value: "80-600 TPH", icon: Gauge },
      { label: "Control", value: "PLC", icon: Cpu },
      { label: "Hydraulic", value: "Multi Cylinder", icon: Droplets },
      { label: "Automation", value: "Smart Control", icon: Zap }
    ]
  },
  {
    name: "Hydraulic Impact Crusher",
    application: "Secondary Crushing",
    category: "Crushing Equipment",
    badge: "Industrial Grade",
    image: "/images/Products/srew-hydraulic-impact-crusher.png",
    price: "₹14L - ₹48L*",
    specs: [
      { label: "Feed Size", value: "350 mm", icon: Maximize },
      { label: "Capacity", value: "50-350 TPH", icon: Gauge },
      { label: "Output", value: "Cubical Aggregate", icon: Layers },
      { label: "Rotor", value: "Heavy Duty", icon: Settings }
    ]
  },
  {
    name: "Hammer Crusher",
    application: "Primary / Secondary",
    category: "Crushing Equipment",
    badge: "Best Seller",
    image: "/images/Products/srew-hammer-crusher.png",
    price: "₹4.5L - ₹18L*",
    specs: [
      { label: "Feed Size", value: "150 mm", icon: Maximize },
      { label: "Capacity", value: "10-150 TPH", icon: Gauge },
      { label: "Rotor", value: "High Speed", icon: Zap },
      { label: "Application", value: "Coal/Limestone", icon: Target }
    ]
  },
  {
    name: "Roller Crusher",
    application: "Fine Crushing",
    category: "Crushing Equipment",
    badge: "Low Maintenance",
    image: "/images/Products/srew-roller-crusher.jpg",
    price: "₹3.5L - ₹14L*",
    specs: [
      { label: "Output Size", value: "2-50 mm", icon: Maximize },
      { label: "Capacity", value: "15-100 TPH", icon: Gauge },
      { label: "Roll Type", value: "Double Roller", icon: Layers },
      { label: "Adjustment", value: "Hydraulic", icon: Droplets }
    ]
  },

  // ── Screening & Washing Equipment ──
  {
    name: "Vertical Shaft Impactor (VSI)",
    application: "M-Sand Production",
    category: "Screening Equipment",
    badge: "High Efficiency",
    image: "/images/Products/srew-vsi.png", // Ensure image path
    price: "₹16L - ₹48L*",
    specs: [
      { label: "Capacity", value: "30-400 TPH", icon: Gauge },
      { label: "Rotor", value: "High Speed", icon: Zap },
      { label: "Feed", value: "Rock to Sand", icon: Target },
      { label: "Motor", value: "75-250 HP", icon: Zap }
    ]
  },
  {
    name: "Vibrating Screen",
    application: "Material Screening",
    category: "Screening Equipment",
    badge: "Best Seller",
    image: "/images/Products/srew-triple-shaft-vibrating-screen.png",
    price: "₹3.5L - ₹9L*",
    specs: [
      { label: "Capacity", value: "30-450 TPH", icon: Gauge },
      { label: "Deck", value: "2 Deck", icon: Layers },
      { label: "Screen Size", value: "6×1.8 m", icon: Maximize },
      { label: "Motor", value: "2×7.5 kW", icon: Zap }
    ]
  },
  {
    name: "3 Deck Vibrating Screen",
    application: "Triple Classification",
    category: "Screening Equipment",
    badge: "High Performance",
    image: "/images/Products/Vibrating-Screen-3-deck.png",
    price: "₹5L - ₹12L*",
    specs: [
      { label: "Capacity", value: "40-500 TPH", icon: Gauge },
      { label: "Deck", value: "3 Deck", icon: Layers },
      { label: "Screen Size", value: "6×1.8 m", icon: Maximize },
      { label: "Output", value: "3 Product Sizes", icon: Target }
    ]
  },
  {
    name: "Damping Vibrating Screen",
    application: "Reduced Vibration",
    category: "Screening Equipment",
    badge: "Heavy Duty",
    image: "/images/Products/srew-Damping-vibrating-screen.png",
    price: "₹6L - ₹15L*",
    specs: [
      { label: "Capacity", value: "50-350 TPH", icon: Gauge },
      { label: "Mounting", value: "Rubber", icon: Settings },
      { label: "Noise", value: "Low", icon: Target },
      { label: "Frame", value: "Heavy Duty", icon: Wrench }
    ]
  },
  {
    name: "Triple Shaft Vibrating Screen",
    application: "High Efficiency Screening",
    category: "Screening Equipment",
    badge: "Export Model",
    image: "/images/Products/srew-triple-shaft-vibrating-screen.png",
    price: "₹9L - ₹22L*",
    specs: [
      { label: "Capacity", value: "100-500 TPH", icon: Gauge },
      { label: "Shaft", value: "3 Shaft", icon: Layers },
      { label: "Drive", value: "Gearbox", icon: Settings },
      { label: "Screen", value: "Heavy Duty", icon: Wrench }
    ]
  },
  {
    name: "Sand Washer",
    application: "Sand Washing",
    category: "Sand Processing",
    badge: "Best Seller",
    image: "/images/Products/srew-sand-washer.png",
    price: "₹3.5L - ₹10L*",
    specs: [
      { label: "Capacity", value: "20-200 TPH", icon: Gauge },
      { label: "Diameter", value: "750-1200 mm", icon: Maximize },
      { label: "Motor", value: "15-30 kW", icon: Zap },
      { label: "Recovery", value: "High", icon: Target }
    ]
  },
  {
    name: "Series Sand Washer",
    application: "Multi Stage Washing",
    category: "Sand Processing",
    badge: "High Efficiency",
    image: "/images/Products/srew-series-sand-washer.png",
    price: "₹7L - ₹16L*",
    specs: [
      { label: "Capacity", value: "30-250 TPH", icon: Gauge },
      { label: "Configuration", value: "Dual Screw", icon: Settings },
      { label: "Cleaning", value: "Deep Wash", icon: Target },
      { label: "Recovery", value: "High", icon: ArrowDown }
    ]
  },
  {
    name: "Fine Sand Recycling Machine",
    application: "Fine Sand Recovery",
    category: "Sand Processing",
    badge: "Low Maintenance",
    image: "/images/Products/srew-fine-sand-recycling-machine.png",
    price: "₹4L - ₹11L*",
    specs: [
      { label: "Capacity", value: "15-150 TPH", icon: Gauge },
      { label: "Recovery Rate", value: "85-95%", icon: Target },
      { label: "Cyclone", value: "Hydro System", icon: Droplets },
      { label: "Motor", value: "15-75 kW", icon: Zap }
    ]
  },
  {
    name: "Sand Dryer",
    application: "Sand Drying",
    category: "Sand Processing",
    badge: "Industrial Grade",
    image: "/images/Products/srew-sand-dryer.jpg",
    price: "₹12L - ₹32L*",
    specs: [
      { label: "Fuel", value: "LPG/Diesel", icon: Flame },
      { label: "Moisture", value: "<1%", icon: Droplets },
      { label: "Capacity", value: "5-50 TPH", icon: Gauge },
      { label: "Heating", value: "Rotary Drum", icon: Settings }
    ]
  },

  // ── Mobile Equipment ──
  {
    name: "Mobile Crushing Plant",
    application: "Mobile Crushing",
    category: "Mobile Plants",
    badge: "Made in India",
    image: "/images/Products/srew-mobile-crushing-plant.png",
    price: "₹85L - ₹2.8Cr*",
    specs: [
      { label: "Crawler Type", value: "Tracked", icon: Truck },
      { label: "Capacity", value: "60-300 TPH", icon: Gauge },
      { label: "Mobility", value: "Tracked", icon: Target },
      { label: "Setup", value: "Quick Deployment", icon: Zap }
    ]
  },
  {
    name: "Modular Mobile Crusher",
    application: "Portable Crushing",
    category: "Mobile Plants",
    badge: "Heavy Duty",
    image: "/images/Products/srew-modular-mobile-crusher.png",
    price: "₹55L - ₹1.8Cr*",
    specs: [
      { label: "Mounting", value: "Skid Mounted", icon: Settings },
      { label: "Capacity", value: "40-250 TPH", icon: Gauge },
      { label: "Transport", value: "Easy", icon: Truck },
      { label: "Installation", value: "Fast", icon: Zap }
    ]
  },
  {
    name: "Tire Mobile Crusher",
    application: "Portable Crushing",
    category: "Mobile Plants",
    badge: "Premium Series",
    image: "/images/Products/srew-tire-mobile-crusher.png",
    price: "₹48L - ₹1.5Cr*",
    specs: [
      { label: "Mounting", value: "Wheel Mounted", icon: Settings },
      { label: "Towable", value: "Yes", icon: Truck },
      { label: "Capacity", value: "40-250 TPH", icon: Gauge },
      { label: "Setup", value: "Quick Setup", icon: Zap }
    ]
  },
  {
    name: "Tracked Screen",
    application: "Mobile Screening",
    category: "Mobile Plants",
    badge: "Export Model",
    image: "/images/Products/srew-mobile-crushing-plant.png", // Fallback image for now
    price: "₹32L - ₹95L*",
    specs: [
      { label: "Capacity", value: "80-450 TPH", icon: Gauge },
      { label: "Deck", value: "3 Deck", icon: Layers },
      { label: "Drive", value: "Hydraulic", icon: Droplets },
      { label: "Mobility", value: "Tracked", icon: Truck }
    ]
  },

  // ── Other Equipment ──
  {
    name: "Belt Conveyor",
    application: "Material Transport",
    category: "Other Equipment",
    badge: "Low Maintenance",
    image: "/images/Products/srew-belt-conveyor.png",
    price: "₹1.2L - ₹5L*",
    specs: [
      { label: "Belt Width", value: "500-1400 mm", icon: MoveHorizontal },
      { label: "Length", value: "5-40 m", icon: Maximize },
      { label: "Capacity", value: "100-1000 TPH", icon: Gauge },
      { label: "Drive", value: "Geared Motor", icon: Settings }
    ]
  },
  {
    name: "Loading Hopper",
    application: "Material Feeding",
    category: "Other Equipment",
    badge: "Heavy Duty",
    image: "/images/Products/srew-hopper.jpg",
    price: "₹15L - ₹45L*",
    specs: [
      { label: "Capacity", value: "5-25 m³", icon: Gauge },
      { label: "Construction", value: "Heavy Duty", icon: Wrench },
      { label: "Liner", value: "Wear Resistant", icon: Layers },
      { label: "Feeder", value: "Vibratory", icon: Settings }
    ]
  },
  {
    name: "Silo Storage System",
    application: "Bulk Storage",
    category: "Other Equipment",
    badge: "Industrial Grade",
    image: "/images/Products/srew-silo.jpg",
    price: "₹4L - ₹18L*",
    specs: [
      { label: "Capacity", value: "50-500 Ton", icon: Gauge },
      { label: "Material", value: "MS/SS", icon: Settings },
      { label: "Type", value: "Bolted/Welded", icon: Wrench },
      { label: "Discharge", value: "Automatic", icon: Cpu }
    ]
  },
  {
    name: "Control Panel Board",
    application: "PLC Automation",
    category: "Other Equipment",
    badge: "High Efficiency",
    image: "/images/Products/srew-panel-board.jpg",
    price: "₹1.8L - ₹6L*",
    specs: [
      { label: "PLC", value: "Siemens/Schneider", icon: Cpu },
      { label: "Control", value: "VFD Compatible", icon: Settings },
      { label: "Safety", value: "Auto Interlock", icon: Target },
      { label: "Monitoring", value: "HMI Touch Panel", icon: Maximize }
    ]
  },
  {
    name: "C&D Recycling Plant",
    application: "Construction Waste Recycling",
    category: "Other Equipment",
    badge: "Made in India",
    image: "/images/Products/srew-cd-recycling.jpg",
    price: "₹65L - ₹2Cr*",
    specs: [
      { label: "Capacity", value: "50-200 TPH", icon: Gauge },
      { label: "Plant Type", value: "Turnkey", icon: Settings },
      { label: "Output", value: "Recycled Aggregate", icon: Target },
      { label: "Automation", value: "PLC", icon: Cpu }
    ]
  }
];

/* ─── CATEGORY GROUPING ─── */
const categories = [
  {
    name: "Crushing Equipment",
    icon: Cog,
    color: "#0B2341", // Navy Blue
    products: allProducts.filter(p => p.category === "Crushing Equipment"),
  },
  {
    name: "Screening Equipment",
    icon: Grid3X3,
    color: "#0B2341",
    products: allProducts.filter(p => p.category === "Screening Equipment"),
  },
  {
    name: "Sand Processing",
    icon: Droplets,
    color: "#0B2341",
    products: allProducts.filter(p => p.category === "Sand Processing"),
  },
  {
    name: "Mobile Plants",
    icon: Truck,
    color: "#0B2341",
    products: allProducts.filter(p => p.category === "Mobile Plants"),
  },
  {
    name: "Other Equipment",
    icon: Wrench,
    color: "#0B2341",
    products: allProducts.filter(p => p.category === "Other Equipment"),
  },
];

export default function ProductsSection() {
  // Since we have a massive 3-column layout and cards are huge, we need to paginate carefully.
  // We can fit maybe 6 cards per page max (2 rows of 3). 
  // Let's create pages based on 6 products per page, grouped by category if possible.
  // Actually, standardizing 6 per page is good.
  
  const pages: any[] = [];
  let currentPageItems: any[] = [];
  let currentCategory = "";

  allProducts.forEach((product, index) => {
    if (currentPageItems.length === 6) {
      pages.push(currentPageItems);
      currentPageItems = [];
    }
    currentPageItems.push(product);
  });
  if (currentPageItems.length > 0) {
    pages.push(currentPageItems);
  }

  return (
    <>
      {pages.map((pageProducts, pageIndex) => (
        <section key={pageIndex} className="page-a4 bg-[#F9FAFB] p-16 flex flex-col">
          {pageIndex === 0 && (
            <div className="mb-10 flex-shrink-0">
              <p className="data-label data-label-dark mb-2 text-[#0B2341] tracking-widest font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>02 / Complete Product Range</p>
              <div className="w-16 h-[3px] bg-[#D4AF37] mb-4" />
              <h2 className="font-display font-black text-[32px] text-[#0B2341] tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                PREMIUM EQUIPMENT CATALOGUE
              </h2>
            </div>
          )}
          {pageIndex > 0 && (
            <div className="mb-10 flex-shrink-0">
              <p className="data-label data-label-dark mb-2 text-[#0B2341] tracking-widest font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>02 / Continued</p>
              <div className="w-16 h-[3px] bg-[#D4AF37] mb-4" />
            </div>
          )}

          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6 h-full">
              {pageProducts.map((product: any, i: number) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full relative">
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#0B2341] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Image Container: 60-65% height */}
                  <div className="h-[240px] w-full bg-white p-6 flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col flex-1 bg-white">
                    <div className="mb-4">
                      <h3 className="font-display font-black text-[18px] text-[#0B2341] leading-tight mb-1 line-clamp-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[#D4AF37]">
                        <Target size={12} strokeWidth={3} />
                        <span className="text-[11px] font-bold tracking-wide uppercase">{product.application}</span>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-auto">
                      {product.specs.map((spec: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="mt-0.5 text-gray-400">
                            <spec.icon size={13} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-0.5 leading-none">{spec.label}</div>
                            <div className="text-[11px] text-[#0B2341] font-bold leading-tight">{spec.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex justify-end items-end">
                      <div className="text-right">
                        <div className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Est. Price</div>
                        <div className="text-[18px] font-black text-[#D4AF37] leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between items-center text-[8px] text-gray-400 font-semibold">
            <span className="uppercase tracking-widest text-[#0B2341]">SREW Projects • Premium Catalogue</span>
            <span>* Terms and conditions apply</span>
            <span className="uppercase tracking-widest text-[#0B2341]">Page 0{3 + pageIndex}</span>
          </div>
        </section>
      ))}
    </>
  );
}
