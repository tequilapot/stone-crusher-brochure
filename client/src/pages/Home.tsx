import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronRight, Phone, Mail, Globe, MapPin, MessageCircle, X, Send, Loader2, Settings, Zap, Maximize, Layers, Factory, Ruler, Trophy } from 'lucide-react';

const A4_ASPECT_RATIO = 210 / 297; // Width / height for A4 portrait (0.707)

const BrochurePage = ({ children, className = '', isNeutralBg = false }: { children: React.ReactNode, className?: string, isNeutralBg?: boolean }) => (
  <div
    className={`${isNeutralBg ? 'bg-[#F6F7F9]' : 'bg-white'} w-full max-w-[794px] border border-[#D9DEE5] rounded-[9px] relative overflow-hidden mx-auto brochure-page page-a4 ${className}`}
    style={{ aspectRatio: `210 / 297` }}
  >
    {children}
  </div>
);

const CoverPage = () => (
 <BrochurePage className="relative overflow-hidden flex flex-col justify-between">

 {/* Background Image Layer (Unclipped) */}
 <div className="absolute inset-0 z-0 bg-[#E5E7EB]">
 <img src="/images/hero-background.jpg" alt="Industrial Plant" className="cover-photo w-full h-full object-cover object-[center_80%] grayscale opacity-90 border-none outline-none ring-0 shadow-none" />
 <div className="absolute inset-0 bg-[#0F172A]" style={{ opacity: 0.2 }}></div>
 </div>

 {/* Reliable Native CSS Geometric Overlays */}
 <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
 {/* Dark Blue wedge to hide bottom of image */}
 <div className="absolute inset-0 bg-[#0F172A]" style={{ clipPath: 'polygon(0 85%, 100% 60%, 100% 100%, 0 100%)' }}></div>
 
 {/* Top-Left Dark Blue Triangle */}
 <div className="absolute inset-0 bg-[#0F172A]" style={{ clipPath: 'polygon(0 0, 45% 0, 0 25%)' }}></div>
 
 {/* Thick Diagonal Yellow Band */}
 <div className="absolute inset-0 bg-[#F2B233]" style={{ clipPath: 'polygon(0 10%, 100% 95%, 100% 100%, 35.3% 100%, 0 70%)' }}></div>
 </div>

 {/* Content Layer */}
 <div className="relative z-40 w-full h-full p-16 flex flex-col justify-end">
 <div className="flex flex-col justify-end mb-16 relative h-full">
 {/* Left Text centered inside Yellow Band */}
 <div className="text-[#0F172A] flex flex-col justify-end absolute bottom-12 left-[12%] w-[80%] z-50">
 <h1 className="text-[32px] md:text-[42px] leading-[1.1] tracking-tight mb-2 font-medium">
 TOGETHER,<br />
 WE BUILD<br />
 <span className="font-black">STRONGER</span><br />
 <span className="font-black">FOUNDATIONS.</span>
 </h1>
 <div className="w-12 h-[4px] bg-[#0F172A] mt-6"></div>
 </div>
 </div>

 {/* Top Right Logo */}
 <div className="absolute top-8 right-8 z-50">
 <img
 src="/images/srew-logo.png"
 alt="SREW Projects"
 className="h-14 w-auto object-contain border-none outline-none ring-0 shadow-none"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 </div>
 </div>
 </BrochurePage>
);

const AboutPage = () => (
  <BrochurePage isNeutralBg={false} className="p-6 flex flex-col justify-between">
    <div className="flex-grow flex flex-col justify-between space-y-4">
      {/* Page Header */}
      <div className="brochure-page-header">
        <div className="flex items-center mb-2.5 mt-1">
          <span className="section-accent"></span>
          <span className="section-label font-bold text-[#0B2341]">01 / ABOUT SREW</span>
        </div>

        <h2 className="brochure-main-heading uppercase mb-3">
          Engineering Heavy-Duty Crushing & Screening Solutions
          <span className="brochure-subtitle block normal-case tracking-normal">For the Mining, Quarrying & Infrastructure Industries</span>
        </h2>
        <div className="editorial-divider my-3 border-t border-[#D9DEE5]"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-between space-y-4">
        {/* Paragraph Top + Product Photo Bottom */}
        <div className="flex flex-col gap-5 items-center">
          <p className="brochure-body text-justify w-full">
            <strong className="text-[#0A2342] font-semibold">SREW Projects (SREW)</strong> is an ISO 9001:2015 certified manufacturer dedicated to heavy-duty industrial fabrication and precision engineering operating from Hyderabad, India. We specialize in end-to-end design, proprietary manufacturing, and turnkey installation of high-capacity crushing, screening, sand processing, and material handling plants ranging from 30 to 800 TPH.
          </p>

          <div className="brochure-image-frame w-full h-[22rem] flex items-center justify-center">
            <img
              src="/images/Products/image.png"
              alt="SREW Manufacturing Facility"
              className="w-full h-full object-contain p-4"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* 4 Stat Metrics Bar */}
        <div className="grid grid-cols-4 gap-3">
          <div className="brochure-stat-card flex flex-col items-center justify-center text-center">
            <div className="text-[32px] stat-number leading-none mb-1.5">400</div>
            <div className="data-label text-[9px] text-[#64748B]">MAX TPH CAPACITY</div>
          </div>
          <div className="brochure-stat-card flex flex-col items-center justify-center text-center">
            <div className="text-[32px] stat-number leading-none mb-1.5">120<span className="text-[18px] text-[#9CA3AF] align-top">+</span></div>
            <div className="data-label text-[9px] text-[#64748B]">GLOBAL PROJECTS</div>
          </div>
          <div className="brochure-stat-card flex flex-col items-center justify-center text-center">
            <div className="text-[32px] stat-number leading-none mb-1.5">45<span className="text-[18px] text-[#9CA3AF] align-top">+</span></div>
            <div className="data-label text-[9px] text-[#64748B]">ENTERPRISE CLIENTS</div>
          </div>
          <div className="brochure-stat-card flex flex-col items-center justify-center text-center">
            <div className="text-[32px] stat-number leading-none mb-1.5">20<span className="text-[18px] text-[#9CA3AF] align-top">+</span></div>
            <div className="data-label text-[9px] text-[#64748B]">YEARS EXPERTISE</div>
          </div>
        </div>

        {/* ENTERPRISE CLIENTELE */}
        <div className="brochure-logo-panel">
          <h3 className="section-label mb-3 text-center pb-2 text-[13px] font-bold text-[#0B2341] tracking-wider uppercase border-b border-[#D9DEE5]">
            ENTERPRISE CLIENTELE
          </h3>
          <div className="grid grid-cols-5 gap-2.5">
            {[
              { name: "Patel Infra", logo: "/images/clients/Patel-logo.png" },
              { name: "SSREC", logo: "/images/clients/SSREC-logo.png" },
              { name: "Aparna Ent.", logo: "/images/clients/aparna-enterprises-logo.png" },
              { name: "Balaji Crushing", logo: "/images/clients/balaji-crushing-screening-logo.png" },
              { name: "Glindco", logo: "/images/clients/glindco-logo.png" },
              { name: "Magnatech", logo: "/images/clients/magnatech-logo.png" },
              { name: "Markolines", logo: "/images/clients/markolines-registered-logo.png" },
              { name: "NCC Urban", logo: "/images/clients/ncc-urban-infrastructure-logo.png" },
              { name: "Toshani Projects", logo: "/images/clients/toshani-projects-logo.png" },
              { name: "Versan", logo: "/images/clients/versan-logo.png" }
            ].map((c, i) => (
              <div key={i} className="brochure-logo-cell">
                <img
                  src={c.logo}
                  alt={c.name}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Page Footer */}
    <div className="brochure-footer flex justify-between border-t border-[#D9DEE5] pt-2.5 mt-3 shrink-0">
      <span>SREW Projects - ABOUT US</span>
      <span>PAGE 02</span>
    </div>
  </BrochurePage>
);

const catalogProducts = [
  { 
    name: "Jaw Crusher", 
    application: "Primary Crushing", 
    specs: [
      { label: "Feed Size", value: "125-1200 mm", icon: "maximize" }, 
      { label: "Capacity", value: "30-400 TPH", icon: "factory" },
      { label: "Power", value: "90-200 HP", icon: "zap" }
    ], 
    price: "₹18L - ₹55L*", tag: "Best Seller", image: "/images/Products/srew-jaw-crusher.png" 
  },
  { 
    name: "European Jaw Crusher", 
    application: "Primary Crushing", 
    specs: [
      { label: "Feed Size", value: "480-1200 mm", icon: "maximize" }, 
      { label: "Capacity", value: "80-500 TPH", icon: "factory" },
      { label: "Power", value: "90-315 HP", icon: "zap" }
    ], 
    price: "₹35L - ₹85L*", tag: "Export Model", image: "/images/Products/srew-european-type-jaw-crusher.png" 
  },
  { 
    name: "Grease Jaw Crusher", 
    application: "Primary Crushing", 
    specs: [
      { label: "Feed Size", value: "200-750 mm", icon: "maximize" }, 
      { label: "Capacity", value: "20-150 TPH", icon: "factory" },
      { label: "Power", value: "15-75 HP", icon: "zap" }
    ], 
    price: "₹8L - ₹28L*", tag: "Low Maintenance", image: "/images/Products/srew-grease-jaw-crusher.png" 
  },
  { 
    name: "Cone Crusher Plant", 
    application: "Secondary Crushing", 
    specs: [
      { label: "Capacity", value: "50-350 TPH", icon: "factory" }, 
      { label: "Plant", value: "2/3 Stage Plant", icon: "layers" },
      { label: "Control", value: "PLC Option", icon: "settings" }
    ], 
    price: "₹2.2Cr - ₹7Cr*", tag: "Energy Efficient", image: "/images/Products/srew-cone-crusher-plant.png" 
  },
  { 
    name: "Single Cylinder Cone Crusher", 
    application: "Secondary Crushing", 
    specs: [
      { label: "Capacity", value: "80-350 TPH", icon: "factory" }, 
      { label: "Type", value: "Hydraulic", icon: "settings" },
      { label: "Control", value: "Automatic", icon: "zap" }
    ], 
    price: "₹28L - ₹85L*", tag: "Heavy Duty", image: "/images/Products/srew-single-cylinder-cone-crusher.png" 
  },
  { 
    name: "Multi Cylinder Cone Crusher", 
    application: "High Capacity Crushing", 
    specs: [
      { label: "Capacity", value: "80-600 TPH", icon: "factory" }, 
      { label: "System", value: "Multi Cylinder", icon: "settings" },
      { label: "Control", value: "PLC Smart", icon: "zap" }
    ], 
    price: "₹45L - ₹1.2Cr*", image: "/images/Products/srew-multi-cylinder-hydraulic-cone-crusher.png" 
  },
  { 
    name: "Hydraulic Impact Crusher", 
    application: "Secondary Crushing", 
    specs: [
      { label: "Feed Size", value: "350 mm", icon: "maximize" }, 
      { label: "Capacity", value: "50-350 TPH", icon: "factory" },
      { label: "Rotor", value: "Heavy Duty", icon: "settings" }
    ], 
    price: "₹14L - ₹48L*", tag: "Heavy Duty", image: "/images/Products/srew-hydraulic-impact-crusher.png" 
  },
  { 
    name: "Hammer Crusher", 
    application: "Primary / Secondary", 
    specs: [
      { label: "Feed Size", value: "150 mm", icon: "maximize" }, 
      { label: "Capacity", value: "10-150 TPH", icon: "factory" },
      { label: "Rotor", value: "High Speed", icon: "zap" }
    ], 
    price: "₹4.5L - ₹98L*", tag: "Energy Efficient", image: "/images/Products/srew-hammer-crusher.png" 
  },
  { 
    name: "Roller Crusher", 
    application: "Fine Crushing", 
    specs: [
      { label: "Output Size", value: "2-50 mm", icon: "ruler" }, 
      { label: "Capacity", value: "15-100 TPH", icon: "factory" },
      { label: "Type", value: "Double Roll", icon: "layers" }
    ], 
    price: "₹3.5L - ₹44L*", tag: "Best Seller", image: "/images/Products/srew-roller-crusher.jpg" 
  },
  { 
    name: "Vertical Shaft Impactor (VSI)", 
    application: "M-Sand Production", 
    specs: [
      { label: "Capacity", value: "30-400 TPH", icon: "factory" },
      { label: "Rotor", value: "High Speed", icon: "settings" },
      { label: "Power", value: "75-250 HP", icon: "zap" }
    ], 
    price: "₹16L - ₹48L*", tag: "Best Seller", image: "/images/Products/srew-vertical-shaft-crusher.png" 
  },
  { 
    name: "Vibrating Screen", 
    application: "Material Screening", 
    specs: [
      { label: "Capacity", value: "30-450 TPH", icon: "factory" },
      { label: "Deck", value: "2 Deck", icon: "layers" }, 
      { label: "Area", value: "6-20 m²", icon: "maximize" }
    ], 
    price: "₹3.5L - ₹40L*", tag: "Energy Efficient", image: "/images/Products/srew-triple-shaft-vibrating-screen.png" 
  },
  { 
    name: "3 Deck Vibrating Screen", 
    application: "Triple Classification", 
    specs: [
      { label: "Capacity", value: "40-500 TPH", icon: "factory" },
      { label: "Deck", value: "3 Deck", icon: "layers" },
      { label: "Output Size", value: "3 Products", icon: "layers" }
    ], 
    price: "₹5L - ₹48L*", image: "/images/Products/Vibrating-Screen-3-deck.png" 
  },
  { 
    name: "Damping Vibrating Screen", 
    application: "Reduced Vibration", 
    specs: [
      { label: "Capacity", value: "50-350 TPH", icon: "factory" },
      { label: "Feature", value: "Low Noise", icon: "settings" }, 
      { label: "Mount", value: "Rubber", icon: "layers" }
    ], 
    price: "₹6L - ₹35L*", tag: "Low Maintenance", image: "/images/Products/srew-Damping-vibrating-screen.png" 
  },
  { 
    name: "Triple Shaft Screen", 
    application: "High Efficiency Screening", 
    specs: [
      { label: "Capacity", value: "100-500 TPH", icon: "factory" },
      { label: "Shaft", value: "3 Shaft", icon: "settings" },
      { label: "Drive", value: "Gearbox", icon: "zap" }
    ], 
    price: "₹9L - ₹42L*", tag: "Heavy Duty", image: "/images/Products/srew-triple-shaft-vibrating-screen.png" 
  },
  { 
    name: "Sand Washer", 
    application: "Sand Washing", 
    specs: [
      { label: "Capacity", value: "20-200 TPH", icon: "factory" },
      { label: "Screw Dia", value: "750-1200", icon: "maximize" },
      { label: "Recovery", value: "High", icon: "layers" }
    ], 
    price: "₹3.5L - ₹40L*", tag: "Best Seller", image: "/images/Products/srew-sand-washer.png" 
  },
  { 
    name: "Series Sand Washer", 
    application: "Multi Stage Washing", 
    specs: [
      { label: "Capacity", value: "30-250 TPH", icon: "factory" },
      { label: "Type", value: "Dual Screw", icon: "settings" }, 
      { label: "Process", value: "Deep Wash", icon: "layers" }
    ], 
    price: "₹7L - ₹16L*", tag: "Export Model", image: "/images/Products/srew-series-sand-washer.png" 
  },
  { 
    name: "Fine Sand Recycling Machine", 
    application: "Fine Sand Recovery", 
    specs: [
      { label: "Capacity", value: "15-150 TPH", icon: "factory" },
      { label: "Recovery", value: "85-95%", icon: "layers" },
      { label: "System", value: "Hydro Cyclone", icon: "settings" }
    ], 
    price: "₹4L - ₹11L*", tag: "Energy Efficient", image: "/images/Products/srew-fine-sand-recycling-machine.png" 
  },
  { 
    name: "Sand Dryer", 
    application: "Sand Drying", 
    specs: [
      { label: "Capacity", value: "5-50 TPH", icon: "factory" },
      { label: "Fuel", value: "LPG/Diesel", icon: "zap" }, 
      { label: "Moisture", value: "<1%", icon: "settings" }
    ], 
    price: "₹12L - ₹32L*", image: "/images/Products/srew-sand-dryer.jpg" 
  },
  { 
    name: "Mobile Crushing Plant", 
    application: "Mobile Crushing", 
    specs: [
      { label: "Capacity", value: "60-300 TPH", icon: "factory" },
      { label: "Type", value: "Crawler", icon: "settings" }, 
      { label: "Deploy", value: "Quick", icon: "zap" }
    ], 
    price: "₹85L - ₹2.8Cr*", tag: "Best Seller", image: "/images/Products/srew-mobile-crushing-plant.png" 
  },
  { 
    name: "Modular Mobile Crusher", 
    application: "Portable Crushing", 
    specs: [
      { label: "Capacity", value: "40-250 TPH", icon: "factory" },
      { label: "Mount", value: "Skid Mount", icon: "layers" }, 
      { label: "Setup", value: "Fast", icon: "zap" }
    ], 
    price: "₹55L - ₹1.8Cr*", tag: "Heavy Duty", image: "/images/Products/srew-modular-mobile-crusher.png" 
  },
  { 
    name: "Tire Mobile Crusher", 
    application: "Portable Crushing", 
    specs: [
      { label: "Capacity", value: "40-250 TPH", icon: "factory" },
      { label: "Mount", value: "Wheel", icon: "settings" }, 
      { label: "Mobility", value: "Towable", icon: "layers" }
    ], 
    price: "₹48L - ₹1.5Cr*", tag: "Export Model", image: "/images/Products/srew-tire-mobile-crusher.png" 
  },
  { 
    name: "Tracked Screen", 
    application: "Mobile Screening", 
    specs: [
      { label: "Capacity", value: "80-450 TPH", icon: "factory" },
      { label: "Mobility", value: "Tracked", icon: "settings" }, 
      { label: "Deck", value: "3 Deck", icon: "layers" }
    ], 
    price: "₹32L - ₹95L*", tag: "Heavy Duty", image: "/images/Products/srew-mobile-crushing-plant.png" 
  },
  { 
    name: "Belt Conveyor", 
    application: "Material Transport", 
    specs: [
      { label: "Width", value: "500-1400", icon: "maximize" },
      { label: "Capacity", value: "100-1000", icon: "factory" },
      { label: "Drive", value: "Geared", icon: "settings" }
    ], 
    price: "₹1.2L - ₹35L*", tag: "Best Seller", image: "/images/Products/srew-belt-conveyor.png" 
  },
  { 
    name: "Loading Hopper", 
    application: "Material Feeding", 
    specs: [
      { label: "Capacity", value: "5-25 m³", icon: "factory" },
      { label: "Liner", value: "Wear Resist", icon: "settings" },
      { label: "Feeder", value: "Vibratory", icon: "zap" }
    ], 
    price: "₹15L - ₹45L*", tag: "Low Maintenance", image: "/images/Products/srew-hopper.jpg" 
  },
  { 
    name: "Silo Storage System", 
    application: "Bulk Storage", 
    specs: [
      { label: "Capacity", value: "50-500 Ton", icon: "factory" },
      { label: "Type", value: "Welded/Bolt", icon: "layers" },
      { label: "Discharge", value: "Auto", icon: "settings" }
    ], 
    price: "₹4L - ₹38L*", tag: "Heavy Duty", image: "/images/Products/srew-silo.jpg" 
  },
  { 
    name: "Control Panel Board", 
    application: "PLC Automation", 
    specs: [
      { label: "Control", value: "PLC/VFD", icon: "zap" }, 
      { label: "Safety", value: "Interlock", icon: "settings" },
      { label: "Panel", value: "HMI Touch", icon: "maximize" }
    ], 
    price: "₹1.8L - ₹6L*", tag: "Energy Efficient", image: "/images/Products/srew-panel-board.jpg" 
  },
  { 
    name: "C&D Recycling Plant", 
    application: "Construction Waste Recycling", 
    specs: [
      { label: "Capacity", value: "50-200 TPH", icon: "factory" },
      { label: "Plant", value: "Turnkey", icon: "layers" }, 
      { label: "Control", value: "PLC", icon: "settings" }
    ], 
    price: "₹65L - ₹4Cr*", image: "/images/Products/srew-cd-recycling.jpg" 
  }
];

const ProductCard = ({ product }: { product: any }) => {
  const getIcon = (name: string) => {
    const iconClass = "text-[#D4AF37] mr-1.5 shrink-0";
    switch (name) {
      case 'maximize': return <Maximize size={12} className={iconClass} />;
      case 'zap': return <Zap size={12} className={iconClass} />;
      case 'layers': return <Layers size={12} className={iconClass} />;
      case 'factory': return <Factory size={12} className={iconClass} />;
      case 'ruler': return <Ruler size={12} className={iconClass} />;
      default: return <Settings size={12} className={iconClass} />;
    }
  };

  return (
    <div className="bg-white border border-[#D9DEE5] rounded-[9px] flex flex-col relative overflow-hidden h-full p-2 product-card">
      {/* A common image frame keeps every product aligned without cropping. */}
      <div className="relative h-[120px] w-full flex items-center justify-center p-1.5 bg-white shrink-0 mb-1.5 border border-[#D9DEE5] rounded-[8px] product-image-frame">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain relative z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      
      {/* Product Info Section */}
      <div className="flex flex-col flex-grow border-t border-[#D9DEE5] pt-1.5 min-h-0">
        <div>
          <h4 className="font-bold uppercase text-[#0B2341] text-[10px] leading-[1.1] mb-1 shrink-0 whitespace-normal line-clamp-2 min-h-[22px] flex items-center">
            {product.name}
          </h4>
          <div className="flex items-center text-[#64748B] text-[8.5px] font-semibold uppercase tracking-[0.04em] mb-1.5 border-b border-[#D9DEE5] pb-1 shrink-0">
            <Settings size={9} className="mr-1 text-[#D4AF37]" />
            {product.application}
          </div>
        </div>
        
        {/* Specs */}
        <div className="flex flex-col gap-0.5 mb-1.5 shrink-0 product-specs">
          {product.specs.map((spec: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between border-b border-[#EEF2F5] pb-0.5 last:border-0 last:pb-0 product-spec-row">
              <span className="text-[9px] text-[#64748B] flex items-center">
                {getIcon(spec.icon)} {spec.label}
              </span>
              <span className="text-[9px] font-bold text-[#0F172A] text-right">{spec.value}</span>
            </div>
          ))}
        </div>
        
        {/* Price Section */}
        <div className="mt-auto pt-1.5 border-t border-[#D9DEE5] flex justify-between items-center shrink-0 product-price">
          <span className="text-[8px] text-[#64748B] uppercase font-bold tracking-[0.04em]">PRICE RANGE</span>
          <span className="text-[#D4AF37] text-[11px] font-bold tracking-tight">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const projectEquipmentBanners: Record<string, { image: string; subtitle: string }> = {
  "Jaw Crusher": {
    image: "/images/Products/srew-jaw-crusher.png",
    subtitle: "PRIMARY CRUSHING",
  },
  "3 Deck Vibrating Screen": {
    image: "/images/Products/Vibrating-Screen-3-deck.png",
    subtitle: "TRIPLE CLASSIFICATION",
  },
  "Sand Dryer": {
    image: "/images/Products/srew-sand-dryer.jpg",
    subtitle: "THERMAL DRYING",
  },
  "Belt Conveyor": {
    image: "/images/Products/srew-belt-conveyor.png",
    subtitle: "MATERIAL HANDLING",
  },
  "Cone Crusher Plant": {
    image: "/images/Products/srew-cone-crusher-plant.png",
    subtitle: "SECONDARY CRUSHING",
  },
  "Hydraulic Impact Crusher": {
    image: "/images/Products/srew-hydraulic-impact-crusher.png",
    subtitle: "SECONDARY CRUSHING",
  },
};

const ProjectEquipmentBanner = ({
  index,
  productName,
  titleOverride,
}: {
  index: string;
  productName: string;
  titleOverride: string;
}) => {
  const config = projectEquipmentBanners[productName] ?? {
    image: "/images/Projects/image.png",
    subtitle: "EQUIPMENT SUPPLIED",
  };

  const getProductDesc = (name: string) => {
    switch (name) {
      case "Jaw Crusher":
        return "Primary rock reduction with heavy-duty cast flywheels and hydraulic wedge adjustment.";
      case "3 Deck Vibrating Screen":
        return "Triple-shaft circular motion screen for precise multi-size aggregate classification.";
      case "Sand Dryer":
        return "LPG-fired thermal rotary dryer reducing sand moisture levels below 1% efficiently.";
      case "Belt Conveyor":
        return "Continuous bulk material transport with high-tensile multi-ply belts and geared drives.";
      case "Cone Crusher Plant":
        return "High-capacity secondary/tertiary crushing with hydraulic automation and safety systems.";
      case "Hydraulic Impact Crusher":
        return "Secondary high-reduction impact crusher delivering premium cubical shape aggregates.";
      default:
        return "Industrial-grade processing machinery engineered for maximum uptime and capacity.";
    }
  };

  return (
    <div className="flex items-center gap-3 w-full bg-white border border-[#D9DEE5] rounded-[9px] overflow-hidden p-2 relative project-equipment-banner aspect-[16/6.4]">
      <div className="w-[42%] h-full flex items-center justify-center rounded-[6px] p-0.5 shrink-0 bg-transparent">
        <img
          src={config.image}
          alt={titleOverride}
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex-grow flex flex-col justify-center min-w-0 pr-1 text-left">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[8.5px] font-black uppercase tracking-wider text-[#F2B233] bg-[#0F172A] px-1.5 py-0.5 rounded-sm shrink-0">
            {index}
          </span>
          <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B2341] truncate">
            {titleOverride}
          </span>
        </div>
        <p className="text-[10.5px] font-extrabold text-[#0B2341] uppercase tracking-[0.02em] leading-tight mb-0.5">
          {productName}
        </p>
        <p className="text-[9px] text-[#64748B] leading-snug font-medium line-clamp-2">
          {getProductDesc(productName)}
        </p>
      </div>
    </div>
  );
};

const CatalogFooter = () => (
  <div className="mt-auto border-t border-[#D9DEE5] pt-3 pb-2 text-[10px] font-bold text-[#0B2341] uppercase tracking-[0.15em] flex justify-between items-center bg-[#F9FAFB] px-4 rounded-md">
    <span className="flex items-center"><span className="text-[#D4AF37] mr-2 text-[14px]">✓</span> 30–500 TPH Solutions</span>
    <span className="flex items-center"><span className="text-[#D4AF37] mr-2 text-[14px]">✓</span> Turnkey Plants</span>
    <span className="flex items-center"><span className="text-[#D4AF37] mr-2 text-[14px]">✓</span> Spare Parts</span>
    <span className="flex items-center"><span className="text-[#D4AF37] mr-2 text-[14px]">✓</span> Installation & Commissioning</span>
    <span className="text-[#6B7280]">www.srewprojects.com</span>
  </div>
);

const ProductCatalogPage1 = () => {
  return (
    <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between">
      <div className="brochure-page-header flex items-center shrink-0">
        <span className="section-accent"></span>
        <span className="section-label font-bold text-[#0B2341]">02 / COMPLETE PRODUCT RANGE</span>
      </div>

      <h2 className="brochure-main-heading uppercase tracking-tight leading-none mb-2 shrink-0">
        SREW EQUIPMENT CATALOG
      </h2>
      <p className="text-[#D4AF37] font-bold tracking-wide uppercase text-[10px] mb-3 shrink-0">
        Crushing • Screening • Washing • Material Handling
      </p>
      <div className="editorial-divider mb-3 mt-0 border-t border-[#D9DEE5] shrink-0"></div>

      <div className="flex-grow flex flex-col min-h-0">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full min-h-0 auto-rows-fr catalog-product-grid">
          {catalogProducts.slice(0, 9).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div className="mt-2.5 text-[10px] text-[#64748B] font-medium italic shrink-0 leading-snug">
        * Prices are indicative ex-works and vary based on capacity, motor brand, electricals, steel grade, automation, and customer specifications. GST, freight, installation, and commissioning are extra where applicable.
      </div>
      <div className="brochure-footer flex justify-between items-end mt-2.5 pt-2 border-t border-[#D9DEE5] shrink-0">
        <span>SREW Projects - PRODUCT CATALOG</span>
        <span>PAGE 03</span>
      </div>
    </BrochurePage>
  );
};

const ProductCatalogPage2 = () => {
  return (
    <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between">
      <div className="flex items-center mb-1 shrink-0">
        <span className="section-accent"></span>
        <span className="section-label text-[13px] font-bold text-[#0B2341] tracking-wider uppercase">02 / CONTINUED</span>
      </div>
      <div className="editorial-divider mb-3 mt-0 border-t border-[#D9DEE5] shrink-0"></div>

      <div className="flex-grow flex flex-col min-h-0">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full min-h-0 auto-rows-fr catalog-product-grid">
          {catalogProducts.slice(9, 18).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div className="mt-2.5 text-[10px] text-[#64748B] font-medium italic shrink-0 leading-snug">
        * Prices are indicative ex-works and vary based on capacity, motor brand, electricals, steel grade, automation, and customer specifications. GST, freight, installation, and commissioning are extra where applicable.
      </div>
      <div className="brochure-footer flex justify-between items-end mt-2.5 pt-2 border-t border-[#D9DEE5] shrink-0">
        <span>SREW Projects - PRODUCT CATALOG</span>
        <span>PAGE 04</span>
      </div>
    </BrochurePage>
  );
}

const ProductCatalogPage3 = () => {
  return (
    <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between">
      <div className="flex items-center mb-1 shrink-0">
        <span className="section-accent"></span>
        <span className="section-label text-[13px] font-bold text-[#0B2341] tracking-wider uppercase">02 / CONTINUED</span>
      </div>
      <div className="editorial-divider mb-3 mt-0 border-t border-[#D9DEE5] shrink-0"></div>

      <div className="flex-grow flex flex-col min-h-0">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full min-h-0 auto-rows-fr catalog-product-grid">
          {catalogProducts.slice(18, 27).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div className="mt-2.5 text-[10px] text-[#64748B] font-medium italic shrink-0 leading-snug">
        * Prices are indicative ex-works and vary based on capacity, motor brand, electricals, steel grade, automation, and customer specifications. GST, freight, installation, and commissioning are extra where applicable.
      </div>
      <div className="brochure-footer flex justify-between items-end mt-2.5 pt-2 border-t border-[#D9DEE5] shrink-0">
        <span>SREW Projects - PRODUCT CATALOG</span>
        <span>PAGE 05</span>
      </div>
    </BrochurePage>
  );
}

const ProjectProfilePage1 = () => {
 return (
 <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between relative">
 <div className="relative z-10 flex flex-col h-full justify-between">
 <div className="flex flex-col flex-grow min-h-0">
 {/* Page Header */}
 <div className="flex justify-between items-end border-b border-[#D9DEE5] pb-3 mb-4">
 <div>
 <div className="text-[10px] font-bold tracking-[0.18em] text-[#F2B233] uppercase mb-1 flex items-center">
 <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
 FEATURED PROJECT SPREAD
 </div>
 <h2 className="text-[28px] font-black text-[#0B2341] uppercase tracking-tight leading-[1.05] border-l-4 border-[#F2B233] pl-3">
 CRUSHING & DEMOLITION RECYCLING PLANT
 </h2>
 </div>
 <div className="text-right">
 <div className="text-[9px] text-[#64748B] uppercase tracking-[0.18em] mb-0.5">LOCATION</div>
 <div className="text-sm font-black text-[#0B2341] tracking-tight">HYDERABAD, INDIA</div>
 </div>
 </div>

 {/* Full-Height A4 Layout with Stacked Equipment Banners */}
 <div className="grid grid-cols-[44fr_56fr] gap-4 items-stretch flex-grow min-h-0 case-study-layout">
 {/* LEFT COLUMN - Stacked Equipment Banners */}
 <div className="flex flex-col gap-3 min-h-0 case-study-equipment">
 {/* 01 / HERO IMAGE */}
 <div className="relative aspect-[16/9] w-full bg-white overflow-hidden border border-[#D9DEE5] rounded-[9px]">
 <img
 src="/images/Projects/image.png"
 alt="Main Project View"
 className="w-full h-full object-contain p-2"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 <div className="absolute bottom-0 left-0 right-0 case-study-caption-bar flex flex-col justify-end p-2.5">
 <div className="flex justify-between items-center text-white">
 <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono rounded-sm">
 01 / MAIN C&D PLANT VIEW
 </span>
 </div>
 </div>
 </div>

 <ProjectEquipmentBanner index="02" productName="Jaw Crusher" titleOverride="PRIMARY JAW CRUSHER" />
 <ProjectEquipmentBanner index="03" productName="3 Deck Vibrating Screen" titleOverride="3-DECK VIBRATING SCREEN" />
 <ProjectEquipmentBanner index="04" productName="Sand Dryer" titleOverride="ROTARY SAND DRYER" />
 <ProjectEquipmentBanner index="05" productName="Belt Conveyor" titleOverride="BELT CONVEYOR SYSTEM" />
 </div>

 {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
 <div className="flex flex-col gap-2 justify-between h-full">
 {/* OVERVIEW & PROCESS CARD */}
 <div className="bg-white border border-[#D9DEE5] rounded-[9px] p-4 flex flex-col justify-between space-y-3 flex-grow">
 <div>
 <div className="flex justify-between items-center mb-1.5">
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
 ENGINEERING APPROACH & BUILD
 </h3>

 </div>
 <p className="text-[10.5px] text-[#334155] leading-relaxed font-normal text-justify">
 Designed for Hyderabad's green smart city initiatives, this integrated C&D waste recycling plant features inline magnetic separators, a heavy-duty trommel classifier, a robust jaw crusher, and a custom LPG-fired Sand Dryer to produce dry manufactured sand.
 <br /><br />
 <strong>Technical Achievement:</strong> We engineered a multi-stage classification matrix with high-torque feeders to handle urban debris. Thermal drying reduces moisture below 1%.
 </p>
 </div>

  <div className="bg-white p-5 border border-[#D9DEE5] rounded-[9px] flex-grow">
  <div className="flex items-center mb-3">
  <h4 className="text-[13px] font-bold text-[#0B2341] uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
  PLANT MATERIAL FLOW PROCESS
  </h4>
  </div>
  <div className="relative border-l border-[#F2B233] ml-2.5 space-y-6 pb-2 pt-1">
  {/* Step 1 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">1</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Urban C&D Debris</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Building rubble loaded to feeder.</p>
  </div>
  {/* Step 2 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">2</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Trommel Classifier</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Clears mud & wood bits dynamically.</p>
  </div>
  {/* Step 3 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">3</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Magnetic Separator</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Retrieves scrap steel for recycling.</p>
  </div>
  {/* Step 4 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#F2B233] text-[#0B2341] flex items-center justify-center text-[10px] font-bold">4</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">SREW Sand Dryer</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Dries sand to below 1% moisture.</p>
  </div>

  {/* Success Milestone Block */}
  <div className="mt-5 pt-4 border-t border-dashed border-[#E2E6EB]">
  <div className="flex items-start gap-3 bg-[#FFFBF0] border border-[#FDE047] rounded-lg p-2.5">
  <div className="w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center shrink-0">
  <Trophy size={14} className="font-bold" />
  </div>
  <div>
  <h6 className="text-[10.5px] font-black uppercase text-[#0B2341] tracking-wide mb-0.5">
  PROJECT SUCCESS MILESTONE
  </h6>
  <p className="text-[9.5px] text-[#514324] leading-snug font-medium text-justify">
  Circular economy compliance achieved, delivering premium recycled sand and aggregate stockpiles to regional concrete mixing firms.
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>

 {/* Project Outcome & Circular Economy */}
 <div>
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center mb-1 uppercase border-l-2 border-[#F2B233] pl-2">
 PROJECT PERFORMANCE & OUTCOME
 </h3>
 <p className="text-[10px] text-[#334155] leading-relaxed font-normal">
 Converted municipal debris into usable construction aggregates and sand, supplying premium dry-mix packaging firms in Hyderabad.
 </p>
 </div>
 </div>

 {/* TECHNICAL SPECIFICATIONS TABLE */}
 <div className="w-full">
 <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B2341] mb-1">TECHNICAL SPECIFICATIONS - SREW BLUEPRINT</h3>
 <table className="editorial-table text-[10px]">
 <tbody>
 <tr>
 <th style={{ width: '35%', padding: '4px 8px' }}>Plant Capacity</th>
 <td style={{ padding: '4px 8px' }}>40 to 50 TPH</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Core Crusher</th>
 <td style={{ padding: '4px 8px' }}>SREW Heavy C&D Modified Jaw Crusher</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Thermal Dryer</th>
 <td style={{ padding: '4px 8px' }}>SREW Thermal Sand Dryer (LPG-fired)</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Metal Recovery</th>
 <td style={{ padding: '4px 8px' }}>Inline cross-belt magnetic separator</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>

 {/* Footer */}
 <div className="flex justify-between items-end mt-2.5 brochure-footer border-t border-[#D9DEE5] pt-2">
 <span>PROJECT PROFILE - SREW Projects</span>
 <span>PAGE 06</span>
 </div>
 </div>
 </BrochurePage>
 );
};

const ProjectProfilePage2 = () => {
 return (
 <BrochurePage className="p-16 flex flex-col bg-white">
 <div className="text-[10px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase mb-16 flex items-center justify-between">
 <span className="w-16 h-[2px] bg-[#EAB308]"></span>
 <span className="text-[#EAB308] text-3xl font-serif font-black">&</span>
 <span className="w-16 h-[2px] bg-[#EAB308] opacity-0"></span>
 </div>

 <div className="flex-grow flex flex-col justify-center items-center">
 <div className="w-full max-w-4xl">
 <h3 className="text-xs font-bold text-[#EAB308] uppercase tracking-[0.2em] mb-12 border-b border-[#F3F4F6] pb-4 border-l-4 border-[#F2B233] pl-3">
 SUPPLIED MACHINERY
 </h3>

 <div className="grid grid-cols-3 gap-8 mb-20">
 {[
 "RAW WASTE HOPPER",
 "MAGNETIC SEPARATOR",
 "JAW CRUSHER",
 "IMPACT CRUSHER",
 "VIBRATING SCREEN",
 "PROCESSED AGGREGATES"
 ].map((item, i) => (
 <div key={i} className="bg-[#0F172A] text-white p-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] flex items-center justify-center min-h-[100px] shadow-lg border-b-4 border-[#EAB308] hover:-translate-y-1 transition-transform">
 {item}
 </div>
 ))}
 </div>

 <div className="bg-[#EAB308] p-10 text-[#0F172A] shadow-xl relative ml-auto w-[80%]">
 {/* Decorative corner element */}
 <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#0F172A]"></div>
 <h3 className="text-sm font-black mb-6 uppercase tracking-wider border-b border-[#0F172A]/20 pb-4 border-l-4 border-[#F2B233] pl-3">
 PROJECT OUTCOMES
 </h3>
 <p className="text-[15px] font-medium leading-relaxed">
 Successful diversion of 90% of demolition waste from landfills. The processed output is now actively utilized in local road base construction and brick manufacturing, yielding an ROI for the municipality in under 24 months.
 </p>
 </div>
 </div>
 </div>

 <div className="flex justify-end mt-12 pt-8 border-t border-[#F3F4F6]">
 <div className="text-[9px] text-[#9CA3AF] font-bold tracking-[0.2em] uppercase">
 PAGE 06
 </div>
 </div>
 </BrochurePage>
 )
}



const SparePartsPage = () => {
 return (
 <BrochurePage className="p-16 flex flex-col bg-white">
 <div className="text-[10px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase mb-8 flex items-center">
 <span className="w-4 h-[2px] bg-[#EAB308] mr-4"></span> 06 / SPARE PARTS & SERVICES
 </div>

 <h2 className="text-[44px] font-black text-[#0F172A] mb-12 uppercase tracking-tight w-3/4 leading-[0.95] border-l-8 border-[#F2B233] pl-6">
 GENUINE OEM SPARE PARTS
 </h2>

 <div className="flex-grow grid grid-cols-2 gap-12">
 <div>
 <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-l-4 border-[#F2B233] pl-3">MAINTENANCE EXCELLENCE</h3>
 <p className="text-[#4B5563] mb-6 text-sm leading-relaxed">SREW Projects provides a comprehensive range of genuine OEM spare parts specifically engineered to maintain the performance and longevity of our crushing and screening plants. Our high-grade manganese wear parts ensure maximum uptime and operational efficiency.</p>

 <ul className="space-y-4">
 <li className="flex items-start">
 <span className="w-2 h-2 bg-[#EAB308] mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
 <div>
 <h4 className="font-bold text-[#0F172A] text-sm">Jaw Crusher Wear Parts</h4>
 <p className="text-xs text-[#6B7280]">Manganese jaw plates, cheek plates, toggle plates</p>
 </div>
 </li>
 <li className="flex items-start">
 <span className="w-2 h-2 bg-[#EAB308] mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
 <div>
 <h4 className="font-bold text-[#0F172A] text-sm">Cone & Impact Crusher Spares</h4>
 <p className="text-xs text-[#6B7280]">Mantles, bowl liners, blow bars, impact plates</p>
 </div>
 </li>
 <li className="flex items-start">
 <span className="w-2 h-2 bg-[#EAB308] mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
 <div>
 <h4 className="font-bold text-[#0F172A] text-sm">Screening Media</h4>
 <p className="text-xs text-[#6B7280]">High-tensile wire mesh, polyurethane screen panels</p>
 </div>
 </li>
 </ul>
 </div>
 <div className="bg-[#F3F4F6] p-8 flex flex-col justify-center border-t-4 border-[#0F172A]">
 <h3 className="font-bold text-[#0F172A] mb-4 uppercase tracking-widest text-sm border-l-4 border-[#F2B233] pl-3">24/7 SUPPORT SERVICES</h3>
 <p className="text-[#4B5563] text-sm mb-6">Our dedicated service network spans across India, ensuring rapid deployment of maintenance crews and parts delivery to minimize your plant downtime.</p>
 <div className="bg-white p-6 shadow-sm border border-[#E5E7EB]">
 <div className="text-xs text-[#9CA3AF] font-bold tracking-widest mb-1">SERVICE HELPLINE</div>
 <div className="text-lg font-black text-[#CA8A04]">+91 8790759460</div>
 <div className="text-lg font-black text-[#CA8A04]">+91 7075061622</div>
 </div>
 </div>
 </div>

 <div className="flex justify-between items-end mt-12 text-[9px] text-[#9CA3AF] font-bold tracking-[0.2em] uppercase">
 <span>Spare Parts Division</span>
 <span>PAGE 10</span>
 </div>
 </BrochurePage>
 );
};

const FeaturedProjectsPage = () => {
 return (
 <BrochurePage className="p-16 flex flex-col bg-white">
 <div className="text-[10px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase mb-8 flex items-center">
 <span className="w-4 h-[2px] bg-[#EAB308] mr-4"></span> 07 / FEATURED PROJECTS
 </div>

 <h2 className="text-[44px] font-black text-[#0F172A] mb-16 uppercase tracking-tight w-3/4 leading-[0.95] border-l-8 border-[#F2B233] pl-6">
 FEATURED PROJECTS & CLIENT NETWORK
 </h2>

 <div className="flex flex-col gap-10 flex-grow pb-8">
 {[
 { title: "200 TPH C&D Plant, Hyderabad", desc: "Turnkey installation processing mixed demolition waste into usable aggregates. This smart city initiative incorporates advanced inline magnetic separation and a high-capacity thermal sand dryer for circular economy compliance.", tags: ["C&D WASTE", "TURNKEY", "200 TPH"], image: "/images/Projects/about-company-CXrgqQ2f.jpg" },
 { title: "500 TPH Aggregates Line, Odisha", desc: "Heavy-duty primary jaw and secondary cone setup engineered for hard granite crushing. Built with extreme durability to withstand continuous impact in severe mining environments while delivering maximum yield.", tags: ["GRANITE", "MINING", "500 TPH"], image: "/images/Projects/image.png" }
 ].map((p, i) => (
 <div key={i} className="bg-[#F9FAFB] border border-[#E5E7EB] flex flex-row flex-grow group shadow-sm hover:shadow-md transition-all">
 <div className="w-[45%] bg-[#0F172A] relative overflow-hidden">
 <img
 src={p.image}
 alt={p.title}
 className="w-full h-full object-contain opacity-90 transition-transform duration-700 group-hover:scale-105 border-none outline-none ring-0 shadow-none"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 </div>
 <div className="p-12 flex flex-col flex-grow w-[55%] justify-center border-l-4 border-[#F2B233]">
 <h3 className="font-bold text-[#0F172A] text-[28px] mb-6 leading-snug">{p.title}</h3>
 <p className="text-[17px] text-[#4B5563] mb-10 leading-relaxed font-light">{p.desc}</p>
 <div className="flex flex-wrap gap-3 mt-auto">
 {p.tags.map(tag => (
 <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0F172A] bg-[#FEF9C3] px-4 py-2 border border-[#FEF08A]">
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>

 <div className="flex justify-between items-end mt-12 text-[9px] text-[#9CA3AF] font-bold tracking-[0.2em] uppercase">
 <span>SREW Projects</span>
 <span>PAGE 11</span>
 </div>
 </BrochurePage>
 );
};

const EngineeringExcellencePage = () => {
 return (
 <BrochurePage className="p-16 flex flex-col bg-white">
 <div className="flex items-center mb-4 mt-4">
 <span className="section-accent"></span>
 <span className="section-label">04 / ENGINEERING EXCELLENCE</span>
 </div>
 <div className="editorial-divider"></div>

 <div className="flex-grow flex flex-col justify-center relative my-12">
 <div className="absolute inset-0 bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center shadow-inner">
 <span className="text-[#9CA3AF] font-medium text-sm tracking-wider uppercase">Large Technical Schematic / Blueprint Visual Here</span>
 </div>

 <div className="absolute top-8 left-8 bg-[#0A2342] text-white text-[10px] px-6 py-3 font-bold tracking-[0.2em] uppercase z-10 shadow-xl border-l-4 border-[#F4B400]">
 PRECISION MANUFACTURING
 </div>
 </div>

 <div className="flex justify-between items-end mt-12 text-[9px] text-[#9CA3AF] font-bold tracking-[0.2em] uppercase pt-4 border-t border-[#F3F4F6]">
 <span>Engineering Excellence</span>
 <span>PAGE 12</span>
 </div>
 </BrochurePage>
 );
}

const BackCoverPage = () => {
 return (
 <BrochurePage className="relative overflow-hidden flex flex-col justify-between">
 {/* Reliable Native CSS Geometric Overlays */}
 <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
 {/* Background Yellow */}
 <div className="absolute inset-0 bg-[#F2B233]" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 85% 100%)' }}></div>
 
 {/* Top-Left Dark Blue Triangle */}
 <div className="absolute inset-0 bg-[#0F172A]" style={{ clipPath: 'polygon(0 0, 30% 0, 0 35%)' }}></div>
 
 {/* Bottom-Right Dark Blue Triangle */}
 <div className="absolute inset-0 bg-[#0F172A]" style={{ clipPath: 'polygon(100% 75%, 100% 100%, 75% 100%)' }}></div>
 </div>

 {/* Content Layer */}
 <div className="relative z-40 w-full h-full p-16 flex flex-col justify-center">

 <div className="w-[55%] flex flex-col items-start pl-8">
 <h1 className="text-[72px] font-black text-[#0F172A] leading-[1.05] mb-5 tracking-tight">
 THANK<br />YOU!
 </h1>
 <p className="text-[#0F172A] text-[20px] leading-relaxed mb-4 font-medium max-w-[460px]">
 We appreciate your time and<br />
 consideration. We look forward<br />
 to the opportunity to work<br />
 <span className="font-bold">together.</span>
 </p>
 <div className="w-16 h-[4px] bg-[#F2B233] mb-10"></div>

 {/* Contact Info */}
 <div className="flex flex-col gap-6 text-[16px] font-medium text-[#0F172A]">
 <div className="flex items-center gap-5">
 <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
 <Phone size={18} className="text-white" />
 </div>
 <div className="w-[1px] h-12 bg-gray-300"></div>
 <div className="leading-snug">
 +91 8790759460<br />
 +91 7997076361
 </div>
 </div>

 <div className="flex items-center gap-5">
 <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
 <Mail size={18} className="text-white" />
 </div>
 <div className="w-[1px] h-8 bg-gray-300"></div>
 <div className="leading-snug">
 contact@srewprojects.com
 </div>
 </div>

 <div className="flex items-center gap-5">
 <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
 <Globe size={18} className="text-white" />
 </div>
 <div className="w-[1px] h-8 bg-gray-300"></div>
 <div className="leading-snug">
 www.srewprojects.com
 </div>
 </div>

 <div className="flex items-center gap-5">
 <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
 <MapPin size={18} className="text-white" />
 </div>
 <div className="w-[1px] h-12 bg-gray-300"></div>
 <div className="leading-snug">
 155/A, Dulapally Road,<br />
 Hyderabad, TG. 500100
 </div>
 </div>
 </div>
 </div>

 </div>
 </BrochurePage>
 )
}

const AIChatbot = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [messages, setMessages] = useState([
 { role: 'model', text: 'Hello! I am the SREW Projects AI assistant. I can answer questions about our products, manufacturing capabilities, and projects detailed in this brochure. How can I help you today?' }
 ]);
 const [input, setInput] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const messagesEndRef = useRef<HTMLDivElement>(null);

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
 if (isOpen) {
 scrollToBottom();
 }
 }, [messages, isOpen]);

 const handleSendMessage = async () => {
 if (!input.trim()) return;

 const newMessages = [...messages, { role: 'user', text: input }];
 setMessages(newMessages);
 setInput('');
 setIsLoading(true);

 try {
 // Provide context about the brochure to the AI
 const systemPrompt = `You are a helpful and knowledgeable sales assistant for SREW Projects (SREW). 
 You are assisting a customer who is reading the company's premium digital brochure.
 
 Here is the information contained in the brochure that you should use to answer questions:
 - **Company Name:** SREW Projects (SREW)
 - **Location:** Hyderabad, India (Plot No. 123, Industrial Estate, Phase-II, IDA Cherlapally, Hyderabad - 500051, Telangana)
 - **Certifications:** ISO 9001:2015
 - **Leadership:** Mr. Ranga Reddy J. (Founder & Managing Director) with over 30 years of expertise.
 - **Key Stats:** 30-400 TPH Capacity engineered, 120+ global projects delivered, 45+ enterprise clients trusted, 10+ years of manufacturing excellence, 30% cost reduction, 24/7 parts availability.
 - **About:** Premier manufacturer of heavy-duty industrial fabrication and precision engineering. Specializes in end-to-end design, proprietary manufacturing, and turnkey installation of crushing, screening, sand processing, and material handling plants. Serves mining, aggregate, infrastructure, and recycling sectors.
 - **Facilities:** Integrated manufacturing with CNC machining, fabrication bays, hydraulic press shops, and PLC panel manufacturing under one roof.
 
 **Crushing Equipment:**
 - Jaw Crusher (Primary, 30-400 TPH)
 - European Type Jaw Crusher (Advanced, Hydraulic Wedge)
 - Grease Jaw Crusher (Primary, Grease Lubricated)
 - Cone Crusher Plant (Secondary, Tertiary)
 - Single-Cylinder Cone Crusher (Secondary, Tertiary)
 - Multi-Cylinder Hydraulic Cone Crusher (Advanced, PLC Control)
 - Hydraulic Impact Crusher (Secondary, Cubical)
 - Hammer Crusher (Primary/Secondary)
 - Roller Crusher (Tertiary, Fine Crushing)
 - Vertical Shaft Impactor (VSI) (Tertiary, 30-400 TPH)
 
 **Sand Processing Equipment:**
 - Sand Washer (Screw Type)
 - Series Sand Washer (Multi-Stage Washing)
 - Fine Sand Recycling Machine (Recovery System)
 - Sand Dryer (Rotary Drying)
 
 **Mobile Plants:**
 - Mobile Crushing Plant (Crawler Tracked)
 - Modular Mobile Crusher (Semi-Mobile)
 - Tire Mobile Crusher (Wheel Mounted)
 
 **Conveyors & Handling:**
 - Belt Conveyor, Loading Hopper, Silo Storage System
 
 **Featured Project 1 (C&D Recycling):**
 - Location: Hyderabad
 - Plant type: Crushing & Demolition Recycling Plant
 - Details: 200 TPH capacity, diverts 90% of waste from landfills, ROI under 24 months. Uses Jaw Crusher with magnetic separator, Damping Vibrating Screen, dust suppression.
 
 **Other Featured Projects:**
 - 200 TPH Crushing & Screening Plant (West Bengal) - 3 output sizes, washed sand, compact 2-acre turnkey.
 - 400 TPH Aggregate Plant (Odisha) - High yield, monsoon-proof water management.
 - 40 TPH Mobile Crushing Unit (Odisha) - 23-day deployment, crawler tracked, PLC controls.
 
 **Service Network:** Telangana, Andhra Pradesh, Odisha, West Bengal.
 **Clients:** NCC Urban, Balaji Builders, Aparna Enterprises, Toshani Projects, Patel Infrastructure, NTPC, Glenco, Magnatech.
 
 **Contact:** sales@srenggworks.com, +91 98765 43210, www.srenggworks.com
 
 Answer questions concisely, professionally, and enthusiastically based ONLY on this provided information. If asked something outside this scope, politely state you only have information related to the SREW Projects brochure content and provide contact info for further inquiries. Keep responses to a short paragraph or bullet points.`;

 const payload = {
 contents: [{ parts: [{ text: input }] }],
 systemInstruction: { parts: [{ text: systemPrompt }] },
 };

 const apiKey = ""; // API key populated by environment
 const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

 const response = await fetch(apiUrl, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(payload)
 });

 const result = await response.json();
 const candidate = result.candidates?.[0];

 if (candidate && candidate.content?.parts?.[0]?.text) {
 setMessages([...newMessages, { role: 'model', text: candidate.content.parts[0].text }]);
 } else {
 setMessages([...newMessages, { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our sales team directly." }]);
 }
 } catch (error) {
 console.error("Error calling Gemini API:", error);
 setMessages([...newMessages, { role: 'model', text: "I encountered an error processing your request. Please try again." }]);
 } finally {
 setIsLoading(false);
 }
 };

 return (
 <>
 {/* Chatbot Toggle Button */}
 <button
 onClick={() => setIsOpen(true)}
 className={`fixed bottom-6 right-6 bg-[#0F172A] hover:bg-[#1E293B] text-[#EAB308] p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
 aria-label="Open AI Assistant"
 >
 <MessageCircle size={28} />
 <span className="absolute -top-2 -right-2 bg-[#EAB308] text-[#0F172A] text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
 AI
 </span>
 </button>

 {/* Chatbot Window */}
 <div className={`fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>

 {/* Header */}
 <div className="bg-[#0F172A] text-white p-4 flex justify-between items-center">
 <div className="flex items-center gap-3">
 <div className="bg-[#EAB308] text-[#0F172A] p-1.5 rounded-full">
 <MessageCircle size={18} />
 </div>
 <div>
 <h3 className="font-bold text-sm tracking-wider uppercase">SREW AI Assistant</h3>
 <p className="text-[10px] text-[#9CA3AF]">Powered by Gemini</p>
 </div>
 </div>
 <button onClick={() => setIsOpen(false)} className="text-[#9CA3AF] hover:text-white transition-colors">
 <X size={20} />
 </button>
 </div>

 {/* Messages Area */}
 <div className="flex-grow p-4 overflow-y-auto bg-[#F9FAFB] flex flex-col gap-3">
 {messages.map((msg, idx) => (
 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
 <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user'
 ? 'bg-[#0F172A] text-white rounded-br-sm'
 : 'bg-white border border-[#E5E7EB] text-[#374151] rounded-bl-sm shadow-sm'
 }`}>
 {msg.role === 'model' && (
 <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-bold text-[#CA8A04] uppercase tracking-widest">
 <MessageCircle size={10} /> AI
 </div>
 )}
 <div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>
 </div>
 </div>
 ))}
 {isLoading && (
 <div className="flex justify-start">
 <div className="bg-white border border-[#E5E7EB] text-[#6B7280] rounded-2xl rounded-bl-sm p-4 shadow-sm flex items-center gap-2">
 <Loader2 size={16} className="animate-spin" />
 <span className="text-xs">Thinking...</span>
 </div>
 </div>
 )}
 <div ref={messagesEndRef} />
 </div>

 {/* Input Area */}
 <div className="p-3 border-t border-[#E5E7EB] bg-white">
 <div className="flex items-center bg-[#F3F4F6] rounded-full overflow-hidden border border-[#E5E7EB] focus-within:border-[#EAB308] transition-colors">
 <input
 type="text"
 className="flex-grow bg-transparent px-4 py-2 text-sm focus:outline-none text-[#374151] placeholder-gray-400"
 placeholder="Ask about our products..."
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
 disabled={isLoading}
 />
 <button
 onClick={handleSendMessage}
 disabled={isLoading || !input.trim()}
 className="bg-[#EAB308] text-[#0F172A] p-2 m-1 rounded-full hover:bg-[#FACC15] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
 >
 <Send size={16} />
 </button>
 </div>
 </div>
 </div>
 </>
 );
};

const CaseStudyPage1 = () => {
 return (
 <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between relative">
 <div className="relative z-10 flex flex-col h-full justify-between">
 <div className="flex flex-col flex-grow min-h-0">
 {/* Page Header */}
 <div className="flex justify-between items-end border-b border-[#D9DEE5] pb-3 mb-4">
 <div>
 <div className="text-[10px] font-bold tracking-[0.18em] text-[#F2B233] uppercase mb-1 flex items-center">
 <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
 FEATURED PROJECT SPREAD
 </div>
 <h2 className="text-[28px] font-black text-[#0B2341] uppercase tracking-tight leading-[1.05] border-l-4 border-[#F2B233] pl-3">
 200 TPH CRUSHING & SCREENING PLANT
 </h2>
 </div>
 <div className="text-right">
 <div className="text-[9px] text-[#64748B] uppercase tracking-[0.18em] mb-0.5">LOCATION</div>
 <div className="text-sm font-black text-[#0B2341] tracking-tight">WEST BENGAL, INDIA</div>
 </div>
 </div>

 {/* Full-Height A4 Layout with Stacked Equipment Banners */}
 <div className="grid grid-cols-[44fr_56fr] gap-4 items-stretch flex-grow min-h-0 case-study-layout">
 {/* LEFT COLUMN - Stacked Equipment Banners */}
 <div className="flex flex-col gap-3 min-h-0 case-study-equipment">
 {/* 01 / HERO IMAGE */}
 <div className="relative aspect-[16/9] w-full bg-white overflow-hidden border border-[#D9DEE5] rounded-[9px]">
 <img
 src="/images/Projects/project2.jpg"
 alt="Main Project View"
 className="w-full h-full object-contain p-2"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 <div className="absolute bottom-0 left-0 right-0 case-study-caption-bar flex flex-col justify-end p-2.5">
 <div className="flex justify-between items-center text-white">
 <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono rounded-sm">
 01 / 200 TPH PLANT VIEW
 </span>
 <span className="text-[8.5px] tracking-widest text-[rgba(255,255,255,0.8)] font-mono">WEST BENGAL PROJECT</span>
 </div>
 </div>
 </div>

 {/* 02 / JAW CRUSHER */}
 <ProjectEquipmentBanner index="02" productName="Jaw Crusher" titleOverride="PRIMARY JAW CRUSHER" />

 {/* 03 / CONE CRUSHER */}
 <ProjectEquipmentBanner index="03" productName="Cone Crusher Plant" titleOverride="SECONDARY CONE CRUSHER" />

 {/* 04 / VIBRATING SCREEN */}
 <ProjectEquipmentBanner index="04" productName="3 Deck Vibrating Screen" titleOverride="3-DECK VIBRATING SCREEN" />

 {/* 05 / BELT CONVEYOR */}
 <ProjectEquipmentBanner index="05" productName="Belt Conveyor" titleOverride="BELT CONVEYOR SYSTEM" />
 </div>

 {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
 <div className="flex flex-col gap-2 justify-between h-full">
 {/* OVERVIEW & PROCESS CARD */}
 <div className="bg-white border border-[#D9DEE5] rounded-[9px] p-4 flex flex-col justify-between space-y-3 flex-grow">
 <div>
 <div className="flex justify-between items-center mb-1.5">
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
 ENGINEERING APPROACH & BUILD
 </h3>

 </div>
 <p className="text-[10.5px] text-[#334155] leading-relaxed font-normal text-justify">
 SREW Projects engineered and commissioned a high-efficiency 200 TPH two-stage crushing plant optimized for space-constrained basalt quarry operations. Installed on a compact 3-acre footprint, the system utilizes a heavy-duty grease-lubricated jaw crusher for primary reduction, followed by a secondary cone crusher and high-frequency screening to maximize shape index.
 <br /><br />
 <strong>Technical Achievement:</strong> Designed a zero-spill material handling loop with automated conveyor speed matching. Achieved 98% plant utilization rate.
 </p>
 </div>

  <div className="bg-white p-5 border border-[#D9DEE5] rounded-[9px] flex-grow">
  <div className="flex items-center mb-3">
  <h4 className="text-[13px] font-bold text-[#0B2341] uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
  PLANT MATERIAL FLOW PROCESS
  </h4>
  </div>
  <div className="relative border-l border-[#F2B233] ml-2.5 space-y-6 pb-2 pt-1">
  {/* Step 1 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">1</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Feed Hopper</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Receives raw mountain basalt feed.</p>
  </div>
  {/* Step 2 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">2</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Jaw Crusher</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">SREW 900x600 primary reduction of basalt.</p>
  </div>
  {/* Step 3 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">3</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Cone Crusher</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">SREW secondary Cone Crusher resizing feed.</p>
  </div>
  {/* Step 4 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#F2B233] text-[#0B2341] flex items-center justify-center text-[10px] font-bold">4</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Vibrating Screen</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Precision classification into 10mm, 20mm, and 40mm outputs.</p>
  </div>

  {/* Success Milestone Block */}
  <div className="mt-5 pt-4 border-t border-dashed border-[#E2E6EB]">
  <div className="flex items-start gap-3 bg-[#FFFBF0] border border-[#FDE047] rounded-lg p-2.5">
  <div className="w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center shrink-0">
  <Trophy size={14} className="font-bold" />
  </div>
  <div>
  <h6 className="text-[10.5px] font-black uppercase text-[#0B2341] tracking-wide mb-0.5">
  PROJECT SUCCESS MILESTONE
  </h6>
  <p className="text-[9.5px] text-[#514324] leading-snug font-medium text-justify">
  High-cubicity aggregate stockpiling loop active, successfully feeding NHAI national highway infrastructure layouts.
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>

 {/* Project Outcome & Circular Economy */}
 <div>
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center mb-1 uppercase border-l-2 border-[#F2B233] pl-2">
 PROJECT PERFORMANCE & OUTCOME
 </h3>
 <p className="text-[10px] text-[#334155] leading-relaxed font-normal">
 Delivered over 200 TPH of precision aggregates with high shape-cubicity and captured washed plaster sand on-site.
 </p>
 </div>
 </div>

 {/* TECHNICAL SPECIFICATIONS TABLE */}
 <div className="w-full">
 <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B2341] mb-1">TECHNICAL SPECIFICATIONS - SREW BLUEPRINT</h3>
 <table className="editorial-table text-[10px]">
 <tbody>
 <tr>
 <th style={{ width: '35%', padding: '4px 8px' }}>Plant Capacity</th>
 <td style={{ padding: '4px 8px' }}>200 TPH (Tonnes Per Hour)</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Primary Crusher</th>
 <td style={{ padding: '4px 8px' }}>SREW Heavy-Duty Grease Jaw Crusher</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Secondary Crusher</th>
 <td style={{ padding: '4px 8px' }}>SREW High-Efficiency Cone Crusher</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Sizing Screen</th>
 <td style={{ padding: '4px 8px' }}>SREW Multi-Deck Vibrating Screen</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>

 {/* Footer */}
 <div className="flex justify-between items-end mt-2.5 brochure-footer border-t border-[#D9DEE5] pt-2">
 <span>PROJECT PROFILE - SREW Projects</span>
 <span>PAGE 07</span>
 </div>
 </div>
 </BrochurePage>
 );
};


const CaseStudyPage2 = () => {
 return (
 <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between relative">
 <div className="relative z-10 flex flex-col h-full justify-between">
 <div className="flex flex-col flex-grow min-h-0">
 {/* Page Header */}
 <div className="flex justify-between items-end border-b border-[#D9DEE5] pb-3 mb-4">
 <div>
 <div className="text-[10px] font-bold tracking-[0.18em] text-[#F2B233] uppercase mb-1 flex items-center">
 <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
 FEATURED PROJECT SPREAD
 </div>
 <h2 className="text-[28px] font-black text-[#0B2341] uppercase tracking-tight leading-[1.05] border-l-4 border-[#F2B233] pl-3">
 400 TPH AGGREGATE PLANT
 </h2>
 </div>
 <div className="text-right">
 <div className="text-[9px] text-[#64748B] uppercase tracking-[0.18em] mb-0.5">LOCATION</div>
 <div className="text-sm font-black text-[#0B2341] tracking-tight">TELANGANA, INDIA</div>
 </div>
 </div>

 {/* Full-Height A4 Layout with Stacked Equipment Banners */}
 <div className="grid grid-cols-[44fr_56fr] gap-4 items-stretch flex-grow min-h-0 case-study-layout">
 {/* LEFT COLUMN - Stacked Equipment Banners */}
 <div className="flex flex-col gap-3 min-h-0 case-study-equipment">
 {/* 01 / HERO IMAGE */}
 <div className="relative aspect-[16/9] w-full bg-white overflow-hidden border border-[#D9DEE5] rounded-[9px]">
 <img
 src="/images/Projects/project3.jpg"
 alt="Main Project View"
 className="w-full h-full object-contain p-2"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 <div className="absolute bottom-0 left-0 right-0 case-study-caption-bar flex flex-col justify-end p-2.5">
 <div className="flex justify-between items-center text-white">
 <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono rounded-sm">
 01 / 400 TPH MINING SETUP
 </span>
 <span className="text-[8.5px] tracking-widest text-[rgba(255,255,255,0.8)] font-mono">TELANGANA PROJECT</span>
 </div>
 </div>
 </div>

 {/* 02 / JAW CRUSHER */}
 <ProjectEquipmentBanner index="02" productName="Jaw Crusher" titleOverride="PRIMARY JAW CRUSHER" />

 {/* 03 / HSI IMPACT CRUSHER */}
 <ProjectEquipmentBanner index="03" productName="Hydraulic Impact Crusher" titleOverride="SECONDARY IMPACT CRUSHER" />

 {/* 04 / VIBRATING SCREEN */}
 <ProjectEquipmentBanner index="04" productName="3 Deck Vibrating Screen" titleOverride="3-DECK VIBRATING SCREEN" />

 {/* 05 / BELT CONVEYOR */}
 <ProjectEquipmentBanner index="05" productName="Belt Conveyor" titleOverride="BELT CONVEYOR SYSTEM" />
 </div>

 {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
 <div className="flex flex-col gap-2 justify-between h-full">
 {/* OVERVIEW & PROCESS CARD */}
 <div className="bg-white border border-[#D9DEE5] rounded-[9px] p-4 flex flex-col justify-between space-y-3 flex-grow">
 <div>
 <div className="flex justify-between items-center mb-1.5">
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
 ENGINEERING APPROACH & BUILD
 </h3>

 </div>
 <p className="text-[10.5px] text-[#334155] leading-relaxed font-normal text-justify">
 Engineered for heavy quarry operations, this high-capacity 400 TPH aggregate plant operates continuously under demanding geological conditions. The system features high-capacity dual-toggle primary jaw crushers integrated with a high-torque secondary impact crusher (HSI) to process abrasive granite feed into premium cubical aggregates.
 <br /><br />
 <strong>Technical Achievement:</strong> Configured a heavy-duty vibratory grizzly bypass to prevent over-crushing of fines. Features advanced dust suppression systems.
 </p>
 </div>

  <div className="bg-white p-5 border border-[#D9DEE5] rounded-[9px] flex-grow">
  <div className="flex items-center mb-3">
  <h4 className="text-[13px] font-bold text-[#0B2341] uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
  PLANT MATERIAL FLOW PROCESS
  </h4>
  </div>
  <div className="relative border-l border-[#F2B233] ml-2.5 space-y-6 pb-2 pt-1">
  {/* Step 1 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">1</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Raw Mining Feed</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Heavy quarry stone fed via apron feeder.</p>
  </div>
  {/* Step 2 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">2</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Dual Jaw Crusher</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">SREW dual-toggle Jaw crushers for primary crushing.</p>
  </div>
  {/* Step 3 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">3</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Grizzly Feeder</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Bypasses pre-crushed materials to secondary circuit.</p>
  </div>
  {/* Step 4 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#F2B233] text-[#0B2341] flex items-center justify-center text-[10px] font-bold">4</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">HSI Crusher</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Secondary high-reduction impact crushing for exact sizing.</p>
  </div>

  {/* Success Milestone Block */}
  <div className="mt-5 pt-4 border-t border-dashed border-[#E2E6EB]">
  <div className="flex items-start gap-3 bg-[#FFFBF0] border border-[#FDE047] rounded-lg p-2.5">
  <div className="w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center shrink-0">
  <Trophy size={14} className="font-bold" />
  </div>
  <div>
  <h6 className="text-[10.5px] font-black uppercase text-[#0B2341] tracking-wide mb-0.5">
  PROJECT SUCCESS MILESTONE
  </h6>
  <p className="text-[9.5px] text-[#514324] leading-snug font-medium text-justify">
  Continuous 24/7 quarrying established, delivering high-strength concrete aggregates for major commercial setups.
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>

 {/* Project Outcome & Circular Economy */}
 <div>
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center mb-1 uppercase border-l-2 border-[#F2B233] pl-2">
 PROJECT PERFORMANCE & OUTCOME
 </h3>
 <p className="text-[10px] text-[#334155] leading-relaxed font-normal">
 Achieved consistent daily yields averaging over 385+ TPH even under harsh monsoon operations.
 </p>
 </div>
 </div>

 {/* TECHNICAL SPECIFICATIONS TABLE */}
 <div className="w-full">
 <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B2341] mb-1">TECHNICAL SPECIFICATIONS - SREW BLUEPRINT</h3>
 <table className="editorial-table text-[10px]">
 <tbody>
 <tr>
 <th style={{ width: '35%', padding: '4px 8px' }}>Plant Capacity</th>
 <td style={{ padding: '4px 8px' }}>400 TPH (Tonnes Per Hour)</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Primary Crusher</th>
 <td style={{ padding: '4px 8px' }}>Dual SREW Heavy-Duty Toggle Jaw Crushers</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Secondary Crusher</th>
 <td style={{ padding: '4px 8px' }}>SREW High-Performance HSI Impact Crusher</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Sizing Screen</th>
 <td style={{ padding: '4px 8px' }}>Dual SREW 4-Deck Heavy Vibrating Screens</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>

 {/* Footer */}
 <div className="flex justify-between items-end mt-2.5 brochure-footer border-t border-[#D9DEE5] pt-2">
 <span>PROJECT PROFILE - SREW Projects</span>
 <span>PAGE 08</span>
 </div>
 </div>
 </BrochurePage>
 );
};

const CaseStudyPage3 = () => {
 return (
 <BrochurePage isNeutralBg={true} className="p-6 flex flex-col justify-between relative">
 <div className="relative z-10 flex flex-col h-full justify-between">
 <div className="flex flex-col flex-grow min-h-0">
 {/* Page Header */}
 <div className="flex justify-between items-end border-b border-[#D9DEE5] pb-3 mb-4">
 <div>
 <div className="text-[10px] font-bold tracking-[0.18em] text-[#F2B233] uppercase mb-1 flex items-center">
 <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
 FEATURED PROJECT SPREAD
 </div>
 <h2 className="text-[28px] font-black text-[#0B2341] uppercase tracking-tight leading-[1.05] border-l-4 border-[#F2B233] pl-3">
 40 TPH MOBILE CRUSHING UNIT
 </h2>
 </div>
 <div className="text-right">
 <div className="text-[9px] text-[#64748B] uppercase tracking-[0.18em] mb-0.5">LOCATION</div>
 <div className="text-sm font-black text-[#0B2341] tracking-tight">ODISHA, INDIA</div>
 </div>
 </div>

 {/* Full-Height A4 Layout with Stacked Equipment Banners */}
 <div className="grid grid-cols-[44fr_56fr] gap-4 items-stretch flex-grow min-h-0 case-study-layout">
 {/* LEFT COLUMN - Stacked Equipment Banners */}
 <div className="flex flex-col gap-3 min-h-0 case-study-equipment">
 {/* 01 / HERO IMAGE */}
 <div className="relative aspect-[16/9] w-full bg-white overflow-hidden border border-[#D9DEE5] rounded-[9px]">
 <img
 src="/images/Projects/image.png"
 alt="Main Project View"
 className="w-full h-full object-contain p-2"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 <div className="absolute bottom-0 left-0 right-0 case-study-caption-bar flex flex-col justify-end p-2.5">
 <div className="flex justify-between items-center text-white">
 <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono rounded-sm">
 01 / MOBILE CRUSHING UNIT
 </span>
 <span className="text-[8.5px] tracking-widest text-[rgba(255,255,255,0.8)] font-mono">ODISHA PROJECT</span>
 </div>
 </div>
 </div>

 {/* 02 / JAW CRUSHER */}
 <ProjectEquipmentBanner index="02" productName="Jaw Crusher" titleOverride="PRIMARY JAW CRUSHER" />

 {/* 03 / VIBRATING SCREEN */}
 <ProjectEquipmentBanner index="03" productName="3 Deck Vibrating Screen" titleOverride="3-DECK VIBRATING SCREEN" />

 {/* 04 / BELT CONVEYOR */}
 <ProjectEquipmentBanner index="04" productName="Belt Conveyor" titleOverride="BELT CONVEYOR SYSTEM" />
 </div>

 {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
 <div className="flex flex-col gap-2 justify-between h-full">
 {/* OVERVIEW & PROCESS CARD */}
 <div className="bg-white border border-[#D9DEE5] rounded-[9px] p-4 flex flex-col justify-between space-y-3 flex-grow">
 <div>
 <div className="flex justify-between items-center mb-1.5">
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
 ENGINEERING APPROACH & BUILD
 </h3>

 </div>
 <p className="text-[10.5px] text-[#334155] leading-relaxed font-normal text-justify">
 Designed for linear infrastructure projects requiring rapid mobilization, this 40 TPH skid-mounted mobile crushing unit offers rapid deployment. SREW configured a self-contained primary crushing and screening loop that can be disassembled, transported, and re-commissioned within 72 hours without permanent foundations.
 <br /><br />
 <strong>Technical Achievement:</strong> Engineered a unified heavy-channel structural steel skid framework that absorbs structural vibrations and houses the primary jaw crusher and sizing screen.
 </p>
 </div>

  <div className="bg-white p-5 border border-[#D9DEE5] rounded-[9px] flex-grow">
  <div className="flex items-center mb-3">
  <h4 className="text-[13px] font-bold text-[#0B2341] uppercase tracking-wide border-l-2 border-[#F2B233] pl-2">
  PLANT MATERIAL FLOW PROCESS
  </h4>
  </div>
  <div className="relative border-l border-[#F2B233] ml-2.5 space-y-6 pb-2 pt-1">
  {/* Step 1 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">1</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Granite Excavation</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Local granite loaded directly to hopper.</p>
  </div>
  {/* Step 2 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">2</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Skid Jaw Crusher</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">SREW mobile skid jaw primary reduction.</p>
  </div>
  {/* Step 3 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#0B2341] text-[#F2B233] flex items-center justify-center text-[10px] font-bold">3</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Dismountable Screen</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Vibrating classification screen segregates sizes.</p>
  </div>
  {/* Step 4 */}
  <div className="relative pl-5 group">
  <div className="absolute -left-[11px] top-0.5 w-[22px] h-[22px] rounded-full bg-[#F2B233] text-[#0B2341] flex items-center justify-center text-[10px] font-bold">4</div>
  <h5 className="font-bold text-[#0B2341] text-[11.5px] leading-tight mb-1 uppercase">Radial Conveyors</h5>
  <p className="text-[10px] text-[#64748B] leading-snug">Conveyors stockpile materials directly to site.</p>
  </div>

  {/* Success Milestone Block */}
  <div className="mt-5 pt-4 border-t border-dashed border-[#E2E6EB]">
  <div className="flex items-start gap-3 bg-[#FFFBF0] border border-[#FDE047] rounded-lg p-2.5">
  <div className="w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center shrink-0">
  <Trophy size={14} className="font-bold" />
  </div>
  <div>
  <h6 className="text-[10.5px] font-black uppercase text-[#0B2341] tracking-wide mb-0.5">
  PROJECT SUCCESS MILESTONE
  </h6>
  <p className="text-[9.5px] text-[#514324] leading-snug font-medium text-justify">
  Rapid site mobilization validated, significantly reducing aggregate transportation costs and carbon footprint.
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>

 {/* Project Outcome & Circular Economy */}
 <div>
 <h3 className="text-[13px] font-bold text-[#0B2341] flex items-center mb-1 uppercase border-l-2 border-[#F2B233] pl-2">
 PROJECT PERFORMANCE & OUTCOME
 </h3>
 <p className="text-[10px] text-[#334155] leading-relaxed font-normal">
 Rapidly deployed at road construction layouts across Odisha, cutting down truck aggregate transportation costs dramatically.
 </p>
 </div>
 </div>

 {/* TECHNICAL SPECIFICATIONS TABLE */}
 <div className="w-full">
 <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-[#0B2341] mb-1">TECHNICAL SPECIFICATIONS - SREW BLUEPRINT</h3>
 <table className="editorial-table text-[10px]">
 <tbody>
 <tr>
 <th style={{ width: '40%', padding: '4px 8px' }}>Unit Capacity</th>
 <td style={{ padding: '4px 8px' }}>40 TPH (Tonnes Per Hour)</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Crushing Machine</th>
 <td style={{ padding: '4px 8px' }}>SREW Skid-Mounted Grease Jaw Crusher</td>
 </tr>
 <tr>
 <th style={{ padding: '4px 8px' }}>Classification</th>
 <td style={{ padding: '4px 8px' }}>Integrated SREW 2-Deck Vibrating Screen</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>

 {/* Footer */}
 <div className="flex justify-between items-end mt-2.5 brochure-footer border-t border-[#D9DEE5] pt-2">
 <span>PROJECT PROFILE - SREW Projects</span>
 <span>PAGE 09</span>
 </div>
 </div>
 </BrochurePage>
 );
};




export default function Brochure() {
 const [isDownloading, setIsDownloading] = useState(false);

 const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      
      // We use the browser's native print function to generate the PDF.
      // This ensures 100% vector text quality and perfect A4 scaling,
      // whereas html2pdf rasterizes the page into a blurry image.
      // The CSS @media print rules in index.css automatically handle A4 formatting.
      
      // Small timeout to allow state to settle if needed
      setTimeout(() => {
        window.print();
        setIsDownloading(false);
      }, 100);

    } catch (error) {
      console.error('Failed to trigger print:', error);
      alert('Could not open print dialog. Please press Ctrl+P or Cmd+P manually.');
      setIsDownloading(false);
    }
  };

 return (
 <div className="min-h-screen bg-[#E5E7EB] py-12 px-4 font-sans flex flex-col items-center">

 {/* Header Info */}
 <div className="pdf-hide-header max-w-[1200px] w-full mb-8 flex justify-between items-center text-[#6B7280]">
 <h1 className="text-xl font-bold text-[#0F172A] tracking-wider uppercase">SREW Projects <span className="text-[#EAB308]">|</span> Premium Brochure</h1>
 <div className="flex items-center gap-4 text-sm font-medium">
 <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex items-center gap-2 hover:text-[#CA8A04] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
 <Download size={16} /> {isDownloading ? 'Generating PDF...' : 'PDF Version'}
 </button>
 <span className="text-[#9CA3AF]">|</span>
 <span>Optimized for A4 Portrait Printing</span>
 </div>
 </div>

 {/* Container for pages */}
 <div id="brochure-container" className="flex flex-col gap-16 w-full items-center pb-24 relative">
 <CoverPage />
 <AboutPage />
 <ProductCatalogPage1 />
 <ProductCatalogPage2 />
 <ProductCatalogPage3 />
 <ProjectProfilePage1 />
 <CaseStudyPage1 />
 <CaseStudyPage2 />
 <CaseStudyPage3 />
 <BackCoverPage />
 </div>
 </div>
 );
}
