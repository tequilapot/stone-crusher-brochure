import {
 Cog, Grid3X3, Droplets, Truck, Flame, Wrench,
 Layers, ArrowDown
} from "lucide-react";

/* ─── ALL PRODUCTS WITH REAL IMAGES FROM SREW WEBSITE ─── */
const allProducts = [
 // ── Crushing Equipment ──
 {
 name: "Jaw Crusher",
 spec: "Primary, 50–400 TPH",
 category: "Crushing Equipment",
 icon: Cog,
 color: "#F5C518",
 image: "/images/Products/srew-jaw-crusher.png",
 },
 {
 name: "European Type Jaw Crusher",
 spec: "Advanced, Hydraulic Wedge",
 category: "Crushing Equipment",
 icon: Cog,
 color: "#F5C518",
 image: "/images/Products/srew-european-type-jaw-crusher.png",
 },
 {
 name: "Grease Jaw Crusher",
 spec: "Primary, Grease Lubricated",
 category: "Crushing Equipment",
 icon: Cog,
 color: "#F5C518",
 image: "/images/Products/srew-grease-jaw-crusher.png",
 },
 {
 name: "Cone Crusher Plant",
 spec: "Secondary, 80–400 TPH",
 category: "Crushing Equipment",
 icon: Layers,
 color: "#F5C518",
 image: "/images/Products/srew-cone-crusher-plant.png",
 },
 {
 name: "Single-Cylinder Cone Crusher",
 spec: "Secondary/Tertiary",
 category: "Crushing Equipment",
 icon: Layers,
 color: "#F5C518",
 image: "/images/Products/srew-single-cylinder-cone-crusher.png",
 },
 {
 name: "Multi-Cylinder Hydraulic Cone Crusher",
 spec: "Advanced, PLC Control",
 category: "Crushing Equipment",
 icon: Layers,
 color: "#F5C518",
 image: "/images/Products/srew-multi-cylinder-hydraulic-cone-crusher.png",
 },
 {
 name: "Hydraulic Impact Crusher",
 spec: "Secondary, Cubical",
 category: "Crushing Equipment",
 icon: Flame,
 color: "#F5C518",
 image: "/images/Products/srew-hydraulic-impact-crusher.png",
 },
 {
 name: "Hammer Crusher",
 spec: "Primary/Secondary",
 category: "Crushing Equipment",
 icon: Flame,
 color: "#F5C518",
 image: "/images/Products/srew-hammer-crusher.png",
 },
 {
 name: "Roller Crusher",
 spec: "Tertiary, Fine Crushing",
 category: "Crushing Equipment",
 icon: Flame,
 color: "#F5C518",
 image: "/images/Products/srew-roller-crusher.jpg",
 },
 {
 name: "Vertical Shaft Impactor (VSI)",
 spec: "M-Sand, 30–400 TPH",
 category: "Crushing Equipment",
 icon: Flame,
 color: "#F5C518",
 image: "/images/Products/srew-vertical-shaft-crusher.png",
 },
 // ── Screening Equipment ──
 {
 name: "Vibrating Screen",
 spec: "2-Deck, Circular",
 category: "Screening Equipment",
 icon: Grid3X3,
 color: "#1B3A6B",
 image: "/images/Products/srew-triple-shaft-vibrating-screen.png",
 },
 {
 name: "3 Deck Vibrating Screen",
 spec: "Triple Classification",
 category: "Screening Equipment",
 icon: Grid3X3,
 color: "#1B3A6B",
 image: "/images/Products/Vibrating-Screen-3-deck.png",
 },
 {
 name: "Damping Vibrating Screen",
 spec: "Reduced Vibration",
 category: "Screening Equipment",
 icon: Grid3X3,
 color: "#1B3A6B",
 image: "/images/Products/srew-Damping-vibrating-screen.png",
 },
 {
 name: "Triple Shaft Vibrating Screen",
 spec: "Heavy-Duty, 3 Shaft",
 category: "Screening Equipment",
 icon: Grid3X3,
 color: "#1B3A6B",
 image: "/images/Products/srew-triple-shaft-vibrating-screen.png",
 },
 // ── Sand Processing ──
 {
 name: "Sand Washer",
 spec: "Screw Type",
 category: "Sand Processing",
 icon: Droplets,
 color: "#F5C518",
 image: "/images/Products/srew-sand-washer.png",
 },
 {
 name: "Series Sand Washer",
 spec: "Multi-Stage Washing",
 category: "Sand Processing",
 icon: Droplets,
 color: "#F5C518",
 image: "/images/Products/srew-series-sand-washer.png",
 },
 {
 name: "Fine Sand Recycling Machine",
 spec: "Recovery System",
 category: "Sand Processing",
 icon: Droplets,
 color: "#F5C518",
 image: "/images/Products/srew-fine-sand-recycling-machine.png",
 },
 {
 name: "Sand Dryer",
 spec: "Rotary Drying",
 category: "Sand Processing",
 icon: Droplets,
 color: "#F5C518",
 image: "/images/Products/srew-sand-dryer.jpg",
 },
 // ── Mobile Plants ──
 {
 name: "Mobile Crushing Plant",
 spec: "Crawler Tracked",
 category: "Mobile Plants",
 icon: Truck,
 color: "#1B3A6B",
 image: "/images/Products/srew-mobile-crushing-plant.png",
 },
 {
 name: "Modular Mobile Crusher",
 spec: "Semi-Mobile",
 category: "Mobile Plants",
 icon: Truck,
 color: "#1B3A6B",
 image: "/images/Products/srew-modular-mobile-crusher.png",
 },
 {
 name: "Tire Mobile Crusher",
 spec: "Wheel Mounted",
 category: "Mobile Plants",
 icon: Truck,
 color: "#1B3A6B",
 image: "/images/Products/srew-tire-mobile-crusher.png",
 },
 // ── Conveyors & Handling ──
 {
 name: "Belt Conveyor",
 spec: "Material Transport",
 category: "Conveyors & Handling",
 icon: ArrowDown,
 color: "#F5C518",
 image: "/images/Products/srew-belt-conveyor.png",
 },
 {
 name: "Loading Hopper",
 spec: "Feed System",
 category: "Conveyors & Handling",
 icon: ArrowDown,
 color: "#F5C518",
 image: "/images/Products/srew-hopper.jpg",
 },
 {
 name: "Silo Storage System",
 spec: "Bulk Storage",
 category: "Conveyors & Handling",
 icon: ArrowDown,
 color: "#F5C518",
 image: "/images/Products/srew-silo.jpg",
 },
 // ── Other Equipment ──
 {
 name: "Control Panel Board",
 spec: "PLC Automation",
 category: "Other Equipment",
 icon: Wrench,
 color: "#1B3A6B",
 image: "/images/Products/srew-panel-board.jpg",
 },
 {
 name: "C&D Recycling Plant",
 spec: "Construction Waste",
 category: "Other Equipment",
 icon: Wrench,
 color: "#1B3A6B",
 image: "/images/Products/srew-cd-recycling.jpg",
 },
];

/* ─── CATEGORY GROUPING ─── */
const categories = [
 {
 name: "Crushing Equipment",
 icon: Cog,
 color: "#F5C518",
 products: allProducts.filter(p => p.category === "Crushing Equipment"),
 },
 {
 name: "Screening Equipment",
 icon: Grid3X3,
 color: "#1B3A6B",
 products: allProducts.filter(p => p.category === "Screening Equipment"),
 },
 {
 name: "Sand Processing",
 icon: Droplets,
 color: "#F5C518",
 products: allProducts.filter(p => p.category === "Sand Processing"),
 },
 {
 name: "Mobile Plants",
 icon: Truck,
 color: "#1B3A6B",
 products: allProducts.filter(p => p.category === "Mobile Plants"),
 },
 {
 name: "Conveyors & Handling",
 icon: ArrowDown,
 color: "#F5C518",
 products: allProducts.filter(p => p.category === "Conveyors & Handling"),
 },
 {
 name: "Other Equipment",
 icon: Wrench,
 color: "#1B3A6B",
 products: allProducts.filter(p => p.category === "Other Equipment"),
 },
];

export default function ProductsSection() {
 // Split categories into chunks of 2 for A4 pages
 const categoryChunks = [];
 for (let i = 0; i < categories.length; i += 2) {
 categoryChunks.push(categories.slice(i, i + 2));
 }

 return (
 <>
 {categoryChunks.map((chunk, pageIndex) => (
 <section key={pageIndex} className="page-a4 grey-section p-16 flex flex-col">
 {pageIndex === 0 && (
 <div className="mb-8 flex-shrink-0">
 <p className="data-label data-label-dark mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>02 / Complete Product Range</p>
 <div className="section-rule mb-4" />
 <h2 className="font-display font-bold text-3xl text-[#0A1628] tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 SREW EQUIPMENT CATALOG
 </h2>
 </div>
 )}
 {pageIndex > 0 && (
 <div className="mb-8 flex-shrink-0">
 <p className="data-label data-label-dark mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>02 / Continued</p>
 <div className="section-rule mb-4" />
 </div>
 )}

 <div className="flex-1 flex flex-col gap-8">
 {chunk.map((cat, ci) => (
 <div key={ci} className="mb-4">
 <div className="flex items-center gap-4 mb-4">
 <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: `${cat.color}40`, backgroundColor: `${cat.color}08` }}>
 <cat.icon size={16} style={{ color: cat.color }} />
 </div>
 <h3 className="font-display font-bold text-lg text-[#0A1628] tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 {cat.name}
 </h3>
 <div className="flex-1 h-[1px] bg-[#D9D9D9]" />
 </div>

 <div className="grid grid-cols-5 gap-3">
 {cat.products.map((product, i) => (
 <div key={i} className="premium-card overflow-hidden">
 <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
 <img
 src={product.image}
 alt={product.name}
 className="w-full h-full object-contain "
 />
 </div>
 <div className="p-2 border-t border-[#D9D9D9]">
 <h4 className="font-display font-bold text-[9px] text-[#0A1628] leading-tight mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
 {product.name}
 </h4>
 <p className="text-[8px] text-[#1B3A6B] tracking-wider font-semibold" style={{ fontFamily: "'Calibri', sans-serif" }}>
 {product.spec}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 
 <div className="mt-auto border-t border-[#D9D9D9] pt-4 flex justify-between items-center text-[8px] text-[#6B6B6B] uppercase tracking-widest font-semibold">
 <span>SREW Projects • Product Catalog</span>
 <span>Page 0{3 + pageIndex}</span>
 </div>
 </section>
 ))}
 </>
 );
}
