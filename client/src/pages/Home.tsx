import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronRight, Phone, Mail, Globe, MapPin, MessageCircle, X, Send, Loader2 } from 'lucide-react';

const A4_ASPECT_RATIO = 297 / 210; // Height / Width for A4 landscape

const BrochurePage = ({ children, className = '' }) => (
    <div
        className={`bg-white w-full max-w-[1200px] shadow-2xl relative overflow-hidden mx-auto ${className}`}
        style={{ aspectRatio: `1 / ${A4_ASPECT_RATIO}` }} // Force A4 landscape aspect ratio
    >
        {children}
    </div>
);

const CoverPage = () => (
    <BrochurePage className="relative overflow-hidden flex flex-col justify-between">

        {/* Layer 1: True Background */}
        <div className="absolute inset-0 bg-[#0F172A] z-[-1]"></div>

        {/* Layer 2: Top-right Grayscale Image */}
        <div
            className="absolute inset-0 z-0 bg-gray-200"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 85%)' }}
        >
            <img src="/images/hero-background.jpg" alt="Industrial Plant" className="w-full h-full object-cover grayscale opacity-90" />
            <div className="absolute inset-0 bg-[#0F172A]/20 mix-blend-multiply"></div>
        </div>

        {/* Layer 3: Top-Left Dark Blue Triangle (Spine continuation) */}
        <div
            className="absolute top-0 left-0 w-[45%] h-[25%] bg-[#0F172A] z-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>

        {/* Layer 4: Diagonal Yellow Band */}
        <div
            className="absolute inset-0 z-20 bg-[#F2B233]"
            style={{ clipPath: 'polygon(0 25%, 85% 100%, 35% 100%, 0 70%)' }}
        ></div>

        {/* Layer 5: Bottom-Right White Triangle */}
        <div
            className="absolute bottom-0 right-0 w-[30%] h-[15%] bg-white z-30"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-40 w-full h-full p-16 flex flex-col justify-between">
            <div></div>

            <div className="flex justify-between items-end mb-8 relative">
                {/* Left Text centered inside Yellow Band */}
                <div className="text-[#0F172A] flex flex-col justify-end absolute bottom-0 left-[38%] w-[40%] z-50">
                    <h1 className="text-[28px] md:text-[34px] leading-[1.15] tracking-tight mb-2 font-medium">
                        TOGETHER,<br />
                        WE BUILD<br />
                        <span className="font-black">STRONGER</span><br />
                        <span className="font-black">FOUNDATIONS.</span>
                    </h1>
                    <div className="w-10 h-[3px] bg-[#0F172A] mt-6"></div>
                </div>

                {/* Right Logo inside Dark Blue Area */}
                <div className="w-[100%] flex justify-end pb-8">
                    <img
                        src="/images/srew%20projects-logo.png"
                        alt="SREW PROJECTS"
                        className="w-64 object-contain relative z-50"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                </div>
            </div>

            <div className="absolute bottom-8 right-8 text-[9px] text-[#0F172A] font-bold tracking-[0.2em] uppercase z-50 mix-blend-difference">
                <span>PAGE 01</span>
            </div>
        </div>
    </BrochurePage>
);

const AboutPage = () => (
    <BrochurePage className="p-16 flex flex-col bg-white justify-between">
        <div className="flex-grow flex flex-col">
            {/* Page Header */}
            <div className="flex items-center mb-4 mt-4">
                <span className="section-accent"></span>
                <span className="section-label">01 / ABOUT SREW</span>
            </div>

            <h2 className="text-[36px] font-black text-[#0A2342] leading-[1] mb-6 tracking-tight uppercase">
                Engineering Heavy-Duty Crushing & Screening Solutions<br />
                <span className="text-[20px] text-gray-500 font-medium block mt-3 normal-case tracking-normal">For the Mining, Quarrying & Infrastructure Industries</span>
            </h2>
            <div className="editorial-divider"></div>

            {/* Main Content Area - Flexes to fill space */}
            <div className="flex-grow flex flex-col justify-between mt-2">

                {/* Company Profile Text */}
                <div className="grid grid-cols-2 gap-12 text-[#1A1A1A] leading-relaxed text-[17px] font-light">
                    <p>
                        <strong className="text-[#0A2342] font-semibold">SREW Projects (SREW)</strong> is an ISO 9001:2015 certified manufacturer dedicated to heavy-duty industrial fabrication and precision engineering operating from Hyderabad, India.
                    </p>
                    <p>
                        We specialize in end-to-end design, proprietary manufacturing, and turnkey installation of high-capacity crushing, screening, sand processing, and material handling plants ranging from 30 to 800 TPH.
                    </p>
                </div>

                {/* Full-Width Facility Banner (Expands vertically) */}
                <div className="w-full flex-grow min-h-[250px] flex items-center justify-center relative overflow-hidden my-10 group bg-gray-50">
                    <img
                        src="/images/Products/image.png"
                        alt="SREW Manufacturing Facility"
                        className="w-[105%] h-[105%] object-cover grayscale opacity-90 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                </div>

                {/* 4 Stat Metrics Bar */}
                <div className="grid grid-cols-4 gap-6 mb-12">
                    <div className="premium-card flex flex-col items-center justify-center text-center py-8">
                        <div className="text-[44px] stat-number leading-none mb-3">800</div>
                        <div className="data-label">MAX TPH CAPACITY</div>
                    </div>
                    <div className="premium-card flex flex-col items-center justify-center text-center py-8">
                        <div className="text-[44px] stat-number leading-none mb-3">120<span className="text-[24px] text-gray-400 align-top">+</span></div>
                        <div className="data-label">GLOBAL PROJECTS</div>
                    </div>
                    <div className="premium-card flex flex-col items-center justify-center text-center py-8">
                        <div className="text-[44px] stat-number leading-none mb-3">45<span className="text-[24px] text-gray-400 align-top">+</span></div>
                        <div className="data-label">ENTERPRISE CLIENTS</div>
                    </div>
                    <div className="premium-card flex flex-col items-center justify-center text-center py-8">
                        <div className="text-[44px] stat-number leading-none mb-3">10<span className="text-[24px] text-gray-400 align-top">+</span></div>
                        <div className="data-label">YEARS EXPERTISE</div>
                    </div>
                </div>

                {/* TRUSTED BY INDUSTRY LEADERS */}
                <div className="premium-card bg-[#F8F9FB] border-0">
                    <h3 className="section-label mb-6 text-center border-b border-gray-200 pb-4">
                        ENTERPRISE CLIENTELE
                    </h3>
                    <div className="grid grid-cols-5 gap-6">
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
                            <div key={i} className="bg-white border border-[#E6E8EC] flex flex-col items-center justify-center h-20 group hover:border-[#F4B400] transition-colors rounded-sm">
                                <img
                                    src={c.logo}
                                    alt={c.name}
                                    className="max-h-10 max-w-[90%] object-contain transition-all duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Page Footer */}
        <div className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase flex justify-between border-t border-gray-100 pt-4 mt-6">
            <span>SREW Projects — ABOUT US</span>
            <span>PAGE 02</span>
        </div>
    </BrochurePage>
);

const catalogProducts = [
    { name: "Jaw Crusher", desc: "Primary, 30-400 TPH", image: "/images/Products/srew-jaw-crusher.png" },
    { name: "European Type Jaw Crusher", desc: "Advanced, Hydraulic Wedge", image: "/images/Products/srew-european-type-jaw-crusher.png" },
    { name: "Grease Jaw Crusher", desc: "Primary, Grease Lubricated", image: "/images/Products/srew-grease-jaw-crusher.png" },
    { name: "Cone Crusher Plant", desc: "Secondary, Tertiary", image: "/images/Products/srew-cone-crusher-plant.png" },
    { name: "Single-Cylinder Cone Crusher", desc: "Secondary, Tertiary", image: "/images/Products/srew-single-cylinder-cone-crusher.png" },
    { name: "Multi-Cylinder Hydraulic Cone Crusher", desc: "Advanced, PLC Control", image: "/images/Products/srew-multi-cylinder-hydraulic-cone-crusher.png" },
    { name: "Hydraulic Impact Crusher", desc: "Secondary, Cubical", image: "/images/Products/srew-hydraulic-impact-crusher.png" },
    { name: "Hammer Crusher", desc: "Primary/Secondary", image: "/images/Products/srew-hammer-crusher.png" },
    { name: "Roller Crusher", desc: "Tertiary, Fine Crushing", image: "/images/Products/srew-roller-crusher.jpg" },
    { name: "Vertical Shaft Impactor (VSI)", desc: "Tertiary, 30-400 TPH", image: "/images/Products/srew-vertical-shaft-crusher.png" },
    { name: "Vibrating Screen", desc: "2-Deck, Circular", image: "/images/Products/srew-triple-shaft-vibrating-screen.png" },
    { name: "3 Deck Vibrating Screen", desc: "Triple Classification", image: "/images/Products/Vibrating-Screen-3-deck.png" },
    { name: "Damping Vibrating Screen", desc: "Reduced Vibration", image: "/images/Products/srew-Damping-vibrating-screen.png" },
    { name: "Triple Shaft Vibrating Screen", desc: "Heavy-Duty, 3 Shaft", image: "/images/Products/srew-triple-shaft-vibrating-screen.png" },
    { name: "Sand Washer", desc: "Screw Type", image: "/images/Products/srew-sand-washer.png" },
    { name: "Series Sand Washer", desc: "Multi-Stage Washing", image: "/images/Products/srew-series-sand-washer.png" },
    { name: "Fine Sand Recycling Machine", desc: "Recovery System", image: "/images/Products/srew-fine-sand-recycling-machine.png" },
    { name: "Sand Dryer", desc: "Rotary Drying", image: "/images/Products/srew-sand-dryer.jpg" },
    { name: "Mobile Crushing Plant", desc: "Crawler Tracked", image: "/images/Products/srew-mobile-crushing-plant.png" },
    { name: "Modular Mobile Crusher", desc: "Semi-Mobile", image: "/images/Products/srew-modular-mobile-crusher.png" },
    { name: "Tire Mobile Crusher", desc: "Wheel Mounted", image: "/images/Products/srew-tire-mobile-crusher.png" },
    { name: "Tracked Screens", desc: "Mobile Screening", image: "/images/Products/srew-mobile-crushing-plant.png" },
    { name: "Belt Conveyor", desc: "Material Transport", image: "/images/Products/srew-belt-conveyor.png" },
    { name: "Loading Hopper", desc: "Feed System", image: "/images/Products/srew-hopper.jpg" },
    { name: "Silo Storage System", desc: "Bulk Storage", image: "/images/Products/srew-silo.jpg" },
    { name: "Control Panel Board", desc: "PLC Automation", image: "/images/Products/srew-panel-board.jpg" },
    { name: "C&D Recycling Plant", desc: "Construction Waste", image: "/images/Products/srew-cd-recycling.jpg" }
];

const ProductCatalogPage1 = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="flex items-center mb-4">
                <span className="section-accent"></span>
                <span className="section-label">02 / COMPLETE PRODUCT RANGE</span>
            </div>

            <h2 className="text-[36px] font-black text-[#0A2342] mb-6 uppercase tracking-tight leading-none">
                SREW EQUIPMENT CATALOG
            </h2>
            <div className="editorial-divider"></div>

            <div className="flex-grow flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-start">
                    {catalogProducts.slice(0, 9).map((p, i) => (
                        <div key={i} className="premium-card flex flex-col group relative">
                            <div className="aspect-[4/3] w-full mb-5 flex items-center justify-center p-2 relative">
                                {/* Floor Shadow */}
                                <div className="absolute bottom-2 w-3/4 h-3 bg-black/10 blur-[6px] rounded-[100%]"></div>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-[110%] h-[110%] object-contain mix-blend-multiply relative z-10"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h4 className="font-bold text-[#0A2342] text-[14px] mb-2 leading-snug">{p.name}</h4>
                            <p className="text-[14px] text-[#1A1A1A] opacity-75 tracking-wide line-clamp-2">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-8">
                <span>SREW Projects — PRODUCT CATALOG</span>
                <span>PAGE 03</span>
            </div>
        </BrochurePage>
    );
};

const ProductCatalogPage2 = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="flex items-center mb-4">
                <span className="section-accent"></span>
                <span className="section-label">02 / CONTINUED</span>
            </div>
            <div className="editorial-divider"></div>

            <div className="flex-grow flex flex-col justify-start mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-start">
                    {catalogProducts.slice(9, 18).map((p, i) => (
                        <div key={i} className="premium-card flex flex-col group relative">
                            <div className="aspect-[4/3] w-full mb-5 flex items-center justify-center p-2 relative">
                                <div className="absolute bottom-2 w-3/4 h-3 bg-black/10 blur-[6px] rounded-[100%]"></div>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-[110%] h-[110%] object-contain mix-blend-multiply relative z-10"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h4 className="font-bold text-[#0A2342] text-[14px] mb-2 leading-snug">{p.name}</h4>
                            <p className="text-[14px] text-[#1A1A1A] opacity-75 tracking-wide line-clamp-2">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-8">
                <span>SREW Projects — PRODUCT CATALOG</span>
                <span>PAGE 04</span>
            </div>
        </BrochurePage>
    );
}

const ProductCatalogPage3 = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="flex items-center mb-4">
                <span className="section-accent"></span>
                <span className="section-label">02 / CONTINUED</span>
            </div>
            <div className="editorial-divider"></div>

            <div className="flex-grow flex flex-col justify-start mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-start">
                    {catalogProducts.slice(18, 27).map((p, i) => (
                        <div key={i} className="premium-card flex flex-col group relative">
                            <div className="aspect-[4/3] w-full mb-5 flex items-center justify-center p-2 relative">
                                <div className="absolute bottom-2 w-3/4 h-3 bg-black/10 blur-[6px] rounded-[100%]"></div>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-[110%] h-[110%] object-contain mix-blend-multiply relative z-10"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h4 className="font-bold text-[#0A2342] text-[14px] mb-2 leading-snug">{p.name}</h4>
                            <p className="text-[14px] text-[#1A1A1A] opacity-75 tracking-wide line-clamp-2">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-8">
                <span>SREW Projects — PRODUCT CATALOG</span>
                <span>PAGE 05</span>
            </div>
        </BrochurePage>
    );
}

const ProjectProfilePage1 = () => {
    return (
        <BrochurePage className="p-12 flex flex-col bg-white relative">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Page Header */}
                    <div className="flex justify-between items-end border-b-[3px] border-[#0F172A] pb-4 mb-6">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-[#F2B233] uppercase mb-1.5 flex items-center">
                                <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
                                FEATURED PROJECT SPREAD
                            </div>
                            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                                CRUSHING & DEMOLITION RECYCLING PLANT
                            </h2>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-0.5">LOCATION</div>
                            <div className="text-lg font-black text-[#0F172A] tracking-tight">HYDERABAD, INDIA</div>
                        </div>
                    </div>

                    {/* Full-Height A4 Layout with Stacked Large Equipment Banners */}
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                        {/* LEFT COLUMN - Stacked Large Equipment Banners */}
                        <div className="flex flex-col gap-3 justify-between">
                            {/* 01 / HERO IMAGE */}
                            <div className="relative aspect-[16/9] w-full bg-[#0F172A] overflow-hidden border border-gray-200 shadow-sm group">
                                <img
                                    src="/images/Projects/image.png"
                                    alt="Main Project View"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-3">
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono">
                                            01 / MAIN C&D PLANT VIEW
                                        </span>
                                        <span className="text-[9px] tracking-widest text-white/70 font-mono">FACILITY SPREAD</span>
                                    </div>
                                </div>
                            </div>

                            {/* 02 / JAW CRUSHER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-jaw-crusher.png"
                                        alt="Jaw Crusher"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">02 / PRIMARY JAW CRUSHER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy-Duty Primary Crushing</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">30-400 TPH capacity, hydraulic wedge adjustment</p>
                                </div>
                            </div>

                            {/* 03 / VIBRATING SCREEN */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-triple-shaft-vibrating-screen.png"
                                        alt="Vibrating Screen"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">03 / 3-DECK VIBRATING SCREEN</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Multi-Stage Classification</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">Triple shaft heavy duty screening mechanism</p>
                                </div>
                            </div>

                            {/* 04 / SAND DRYER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-sand-dryer.jpg"
                                        alt="Sand Dryer"
                                        className="max-h-full object-cover mix-blend-multiply rounded-sm transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">04 / ROTARY SAND DRYER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Thermal Sand Processing Unit</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High efficiency moisture reduction rotary system</p>
                                </div>
                            </div>

                            {/* 05 / BELT CONVEYOR */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-belt-conveyor.png"
                                        alt="Belt Conveyor"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">05 / BELT CONVEYOR SYSTEM</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy Material Transport</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High capacity continuous material handling</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
                        <div className="flex flex-col gap-3 justify-between h-full">
                            {/* OVERVIEW & PROCESS CARD */}
                            <div className="bg-white border-t-4 border-[#F2B233] border-x border-b border-gray-200 p-4 flex flex-col justify-between space-y-3 shadow-sm flex-grow">
                                <div>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <h3 className="text-xs font-bold text-[#0F172A] flex items-center uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                            ENGINEERING APPROACH & BUILD
                                        </h3>
                                        <span className="text-[8px] bg-yellow-100 text-[#0F172A] font-bold px-2 py-0.5 uppercase tracking-wider">SMART CITY DEV</span>
                                    </div>
                                    <p className="text-[16px] text-gray-600 leading-relaxed font-light text-justify">
                                        Designed for Hyderabad's green smart city initiatives, this integrated C&D waste recycling plant features inline magnetic separators, a heavy-duty trommel classifier, a robust jaw crusher, and a custom LPG-fired Sand Dryer to produce dry manufactured sand.
                                        <br /><br />
                                        <strong>Technical Achievement:</strong> We engineered a multi-stage classification matrix with high-torque feeders to handle heterogeneous urban debris. Our proprietary thermal drying technology rapidly reduces moisture below 1%, meeting strict IS standards.
                                    </p>
                                </div>

                                {/* Roadmap Timeline Process Flow */}
                                <div className="mt-4 bg-gray-50/80 p-5 border border-gray-200">
                                    <div className="flex items-center mb-6">
                                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h4 className="text-[13px] font-black text-[#0F172A] uppercase tracking-wider border-l-4 border-[#F2B233] pl-3 ml-2">
                                            PLANT ENGINEERING MATERIAL FLOW PROCESS
                                        </h4>
                                    </div>
                                    <div className="relative border-l-2 border-[#F2B233] ml-3 space-y-6 pb-2">
                                        {/* Step 1 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">1</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Urban C&D Debris</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Building rubble & concrete loaded to feeder.</p>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">2</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Trommel Classifier</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Clears mud, wood bits, and light wastes dynamically.</p>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">3</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Magnetic Separator</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Retrieves reinforcement scrap steel for recycling.</p>
                                        </div>
                                        {/* Step 4 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-[#0F172A] group-hover:scale-110 transition-transform">4</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">SREW Sand Dryer</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Dries processed sand to below 1% moisture.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Outcome & Circular Economy */}
                                <div>
                                    <h3 className="text-xs font-bold text-[#0F172A] flex items-center mb-1 uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                        PROJECT PERFORMANCE & OUTCOME
                                    </h3>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light">
                                        Successfully converted municipal debris into usable construction aggregates and sand. The addition of the LPG sand dryer allowed the client to supply premium dry-mix packaging firms in Hyderabad, achieving circular economy sustainability.
                                    </p>
                                </div>
                            </div>

                            {/* TECHNICAL SPECIFICATIONS TABLE */}
                            <div className="mt-6 w-full">
                                <h3 className="section-label mb-3">TECHNICAL SPECIFICATIONS — SREW BLUEPRINT</h3>
                                <table className="editorial-table">
                                    <tbody>
                                        <tr>
                                            <th style={{ width: '35%' }}>Plant Capacity</th>
                                            <td>40 to 50 TPH</td>
                                        </tr>
                                        <tr>
                                            <th>Core Crusher</th>
                                            <td>SREW Heavy C&D Modified Jaw Crusher</td>
                                        </tr>
                                        <tr>
                                            <th>Thermal Dryer</th>
                                            <td>SREW Thermal Sand Dryer (LPG-fired with burner)</td>
                                        </tr>
                                        <tr>
                                            <th>Metal Recovery</th>
                                            <td>High-intensity inline cross-belt magnetic separator</td>
                                        </tr>
                                        <tr>
                                            <th>Green Compliance</th>
                                            <td>Fully compliant with Swachh Bharat & NMCG norms</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-4 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-4">
                    <span>PROJECT PROFILE — SREW Projects</span>
                    <span>PAGE 06</span>
                </div>
            </div>
        </BrochurePage>
    );
};

const ProjectProfilePage2 = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 flex items-center justify-between">
                <span className="w-16 h-[2px] bg-yellow-500"></span>
                <span className="text-yellow-500 text-3xl font-serif font-black">&</span>
                <span className="w-16 h-[2px] bg-yellow-500 opacity-0"></span>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="w-full max-w-4xl">
                    <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-[0.2em] mb-12 border-b border-gray-100 pb-4 border-l-4 border-[#F2B233] pl-3">
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
                            <div key={i} className="bg-[#0F172A] text-white p-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] flex items-center justify-center min-h-[100px] shadow-lg border-b-4 border-yellow-500 hover:-translate-y-1 transition-transform">
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="bg-yellow-500 p-10 text-[#0F172A] shadow-xl relative ml-auto w-[80%]">
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

            <div className="flex justify-end mt-12 pt-8 border-t border-gray-100">
                <div className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                    PAGE 06
                </div>
            </div>
        </BrochurePage>
    )
}



const SparePartsPage = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                <span className="w-4 h-[2px] bg-yellow-500 mr-4"></span> 06 / SPARE PARTS & SERVICES
            </div>

            <h2 className="text-[44px] font-black text-[#0F172A] mb-12 uppercase tracking-tight w-3/4 leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                GENUINE OEM SPARE PARTS
            </h2>

            <div className="flex-grow grid grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-l-4 border-[#F2B233] pl-3">MAINTENANCE EXCELLENCE</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">SREW Projects provides a comprehensive range of genuine OEM spare parts specifically engineered to maintain the performance and longevity of our crushing and screening plants. Our high-grade manganese wear parts ensure maximum uptime and operational efficiency.</p>

                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-500 mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
                            <div>
                                <h4 className="font-bold text-[#0F172A] text-sm">Jaw Crusher Wear Parts</h4>
                                <p className="text-xs text-gray-500">Manganese jaw plates, cheek plates, toggle plates</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-500 mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
                            <div>
                                <h4 className="font-bold text-[#0F172A] text-sm">Cone & Impact Crusher Spares</h4>
                                <p className="text-xs text-gray-500">Mantles, bowl liners, blow bars, impact plates</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-500 mt-1.5 mr-3 rounded-full flex-shrink-0"></span>
                            <div>
                                <h4 className="font-bold text-[#0F172A] text-sm">Screening Media</h4>
                                <p className="text-xs text-gray-500">High-tensile wire mesh, polyurethane screen panels</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-8 flex flex-col justify-center border-t-4 border-[#0F172A]">
                    <h3 className="font-bold text-[#0F172A] mb-4 uppercase tracking-widest text-sm border-l-4 border-[#F2B233] pl-3">24/7 SUPPORT SERVICES</h3>
                    <p className="text-gray-600 text-sm mb-6">Our dedicated service network spans across India, ensuring rapid deployment of maintenance crews and parts delivery to minimize your plant downtime.</p>
                    <div className="bg-white p-6 shadow-sm border border-gray-200">
                        <div className="text-xs text-gray-400 font-bold tracking-widest mb-1">SERVICE HELPLINE</div>
                        <div className="text-lg font-black text-yellow-600">+91 8790759460</div>
                        <div className="text-lg font-black text-yellow-600">+91 7075061622</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                <span>Spare Parts Division</span>
                <span>PAGE 10</span>
            </div>
        </BrochurePage>
    );
};

const FeaturedProjectsPage = () => {
    return (
        <BrochurePage className="p-16 flex flex-col bg-white">
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                <span className="w-4 h-[2px] bg-yellow-500 mr-4"></span> 07 / FEATURED PROJECTS
            </div>

            <h2 className="text-[44px] font-black text-[#0F172A] mb-16 uppercase tracking-tight w-3/4 leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                FEATURED PROJECTS & CLIENT NETWORK
            </h2>

            <div className="flex flex-col gap-10 flex-grow pb-8">
                {[
                    { title: "200 TPH C&D Plant, Hyderabad", desc: "Turnkey installation processing mixed demolition waste into usable aggregates. This smart city initiative incorporates advanced inline magnetic separation and a high-capacity thermal sand dryer for circular economy compliance.", tags: ["C&D WASTE", "TURNKEY", "200 TPH"], image: "/images/Projects/about-company-CXrgqQ2f.jpg" },
                    { title: "500 TPH Aggregates Line, Odisha", desc: "Heavy-duty primary jaw and secondary cone setup engineered for hard granite crushing. Built with extreme durability to withstand continuous impact in severe mining environments while delivering maximum yield.", tags: ["GRANITE", "MINING", "500 TPH"], image: "/images/Projects/image.png" }
                ].map((p, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 flex flex-row flex-grow group shadow-sm hover:shadow-md transition-all">
                        <div className="w-[45%] bg-[#0F172A] relative overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                        </div>
                        <div className="p-12 flex flex-col flex-grow w-[55%] justify-center border-l-4 border-[#F2B233]">
                            <h3 className="font-bold text-[#0F172A] text-[28px] mb-6 leading-snug">{p.title}</h3>
                            <p className="text-[17px] text-gray-600 mb-10 leading-relaxed font-light">{p.desc}</p>
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0F172A] bg-yellow-100 px-4 py-2 border border-yellow-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">
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
                <div className="absolute inset-0 bg-gray-50 border border-gray-200 flex items-center justify-center shadow-inner">
                    <span className="text-gray-400 font-medium text-sm tracking-wider uppercase">Large Technical Schematic / Blueprint Visual Here</span>
                </div>

                <div className="absolute top-8 left-8 bg-[#0A2342] text-white text-[10px] px-6 py-3 font-bold tracking-[0.2em] uppercase z-10 shadow-xl border-l-4 border-[#F4B400]">
                    PRECISION MANUFACTURING
                </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase pt-4 border-t border-gray-100">
                <span>Engineering Excellence</span>
                <span>PAGE 12</span>
            </div>
        </BrochurePage>
    );
}

const BackCoverPage = () => {
    return (
        <BrochurePage className="relative overflow-hidden flex flex-col justify-between">
            {/* Layer 1: True Background for the page */}
            <div className="absolute inset-0 bg-white z-[-1]"></div>

            {/* Layer 2: Top-Left Dark Blue Triangle */}
            <div
                className="absolute top-0 left-0 w-[30%] h-[30%] bg-[#0F172A] z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            ></div>

            {/* Layer 3: Bottom-Left Dark Blue Triangle */}
            <div
                className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#0F172A] z-10"
                style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Layer 4: Top-Right Dark Blue Triangle */}
            <div
                className="absolute top-0 right-0 w-[25%] h-[25%] bg-[#0F172A] z-10"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
            ></div>

            {/* Layer 5: Bottom-Right Dark Blue Triangle */}
            <div
                className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[#0F172A] z-10"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Layer 6: Diagonal Yellow Band */}
            <div
                className="absolute inset-0 z-20 bg-[#F2B233]"
                style={{ clipPath: 'polygon(30% 0, 75% 0, 100% 25%, 100% 70%)' }}
            ></div>

            {/* Content Layer */}
            <div className="relative z-40 w-full h-full p-16 flex flex-col justify-center">

                <div className="w-[45%] flex flex-col items-start pl-8 mt-12">
                    <h1 className="text-[45px] font-black text-[#0F172A] leading-none mb-6 tracking-tight">
                        THANK<br />YOU!
                    </h1>
                    <p className="text-[#0F172A] text-[13px] leading-relaxed mb-8 font-medium">
                        We appreciate your time and<br />
                        consideration. We look forward<br />
                        to the opportunity to <span className="font-bold">work<br />together.</span>
                    </p>
                    <div className="w-10 h-[3px] bg-[#F2B233] mb-12"></div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-5 text-[10px] font-bold text-[#0F172A]">
                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                                <Phone size={12} className="text-white" />
                            </div>
                            <div className="leading-tight">
                                +91 87907 59460<br />
                                +91 79970 76361
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                                <Mail size={12} className="text-white" />
                            </div>
                            <div className="leading-tight">
                                contact@srewprojects.com
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                                <Globe size={12} className="text-white" />
                            </div>
                            <div className="leading-tight mt-0.5">
                                www.srewprojects.com
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <MapPin size={12} className="text-white" />
                            </div>
                            <div className="leading-tight">
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
    const messagesEndRef = useRef(null);

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
                className={`fixed bottom-6 right-6 bg-[#0F172A] hover:bg-[#1E293B] text-yellow-500 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                aria-label="Open AI Assistant"
            >
                <MessageCircle size={28} />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-[#0F172A] text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                    AI
                </span>
            </button>

            {/* Chatbot Window */}
            <div className={`fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>

                {/* Header */}
                <div className="bg-[#0F172A] text-white p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-yellow-500 text-[#0F172A] p-1.5 rounded-full">
                            <MessageCircle size={18} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm tracking-wider uppercase">SREW AI Assistant</h3>
                            <p className="text-[10px] text-gray-400">Powered by Gemini</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user'
                                ? 'bg-[#0F172A] text-white rounded-br-sm'
                                : 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm shadow-sm'
                                }`}>
                                {msg.role === 'model' && (
                                    <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-bold text-yellow-600 uppercase tracking-widest">
                                        <MessageCircle size={10} /> AI
                                    </div>
                                )}
                                <div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-200 text-gray-500 rounded-2xl rounded-bl-sm p-4 shadow-sm flex items-center gap-2">
                                <Loader2 size={16} className="animate-spin" />
                                <span className="text-xs">Thinking...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-gray-200 bg-white">
                    <div className="flex items-center bg-gray-100 rounded-full overflow-hidden border border-gray-200 focus-within:border-yellow-500 transition-colors">
                        <input
                            type="text"
                            className="flex-grow bg-transparent px-4 py-2 text-sm focus:outline-none text-gray-700 placeholder-gray-400"
                            placeholder="Ask about our products..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !input.trim()}
                            className="bg-yellow-500 text-[#0F172A] p-2 m-1 rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
        <BrochurePage className="p-12 flex flex-col bg-white relative">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Page Header */}
                    <div className="flex justify-between items-end border-b-[3px] border-[#0F172A] pb-4 mb-6">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-[#F2B233] uppercase mb-1.5 flex items-center">
                                <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
                                FEATURED PROJECT SPREAD
                            </div>
                            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                                200 TPH CRUSHING & SCREENING PLANT
                            </h2>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-0.5">LOCATION</div>
                            <div className="text-lg font-black text-[#0F172A] tracking-tight">WEST BENGAL, INDIA</div>
                        </div>
                    </div>

                    {/* Full-Height A4 Layout with Stacked Large Equipment Banners */}
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                        {/* LEFT COLUMN - Stacked Large Equipment Banners */}
                        <div className="flex flex-col gap-3 justify-between">
                            {/* 01 / HERO IMAGE */}
                            <div className="relative aspect-[16/9] w-full bg-[#0F172A] overflow-hidden border border-gray-200 shadow-sm group">
                                <img
                                    src="/images/Projects/project2.jpg"
                                    alt="Main Project View"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-3">
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono">
                                            01 / 200 TPH PLANT VIEW
                                        </span>
                                        <span className="text-[9px] tracking-widest text-white/70 font-mono">WEST BENGAL PROJECT</span>
                                    </div>
                                </div>
                            </div>

                            {/* 02 / JAW CRUSHER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-jaw-crusher.png"
                                        alt="Jaw Crusher"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">02 / PRIMARY JAW CRUSHER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy-Duty Primary Crushing</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">30-400 TPH capacity, hydraulic wedge adjustment</p>
                                </div>
                            </div>

                            {/* 03 / VIBRATING SCREEN */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-triple-shaft-vibrating-screen.png"
                                        alt="Vibrating Screen"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">03 / 3-DECK VIBRATING SCREEN</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Multi-Stage Classification</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">Triple shaft heavy duty screening mechanism</p>
                                </div>
                            </div>

                            {/* 04 / SAND DRYER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-sand-dryer.jpg"
                                        alt="Sand Dryer"
                                        className="max-h-full object-cover mix-blend-multiply rounded-sm transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">04 / ROTARY SAND DRYER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Thermal Sand Processing Unit</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High efficiency moisture reduction rotary system</p>
                                </div>
                            </div>

                            {/* 05 / BELT CONVEYOR */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-belt-conveyor.png"
                                        alt="Belt Conveyor"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">05 / BELT CONVEYOR SYSTEM</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy Material Transport</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High capacity continuous material handling</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
                        <div className="flex flex-col gap-3 justify-between h-full">
                            {/* OVERVIEW & PROCESS CARD */}
                            <div className="bg-white border-t-4 border-[#F2B233] border-x border-b border-gray-200 p-4 flex flex-col justify-between space-y-3 shadow-sm flex-grow">
                                <div>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <h3 className="text-xs font-bold text-[#0F172A] flex items-center uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                            ENGINEERING APPROACH & BUILD
                                        </h3>
                                        <span className="text-[8px] bg-yellow-100 text-[#0F172A] font-bold px-2 py-0.5 uppercase tracking-wider">AGGREGATE PLANT</span>
                                    </div>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light text-justify">SREW Projects designed and commissioned a robust 200 TPH two-stage plant layout engineered specifically for space constraints. Deployed in a compact 3-acre layout, SREW configured a high-capacity grease-lubricated Jaw Crusher for heavy primary breaking, followed by a high-efficiency secondary Cone Crusher to shape aggregate materials to high density. Maintenance operations are streamlined using SREW integrated high-clearance steel walkways and modular vibration screen decks.</p>
                                </div>

                                {/* Roadmap Timeline Process Flow */}
                                <div className="mt-4 bg-gray-50/80 p-5 border border-gray-200">
                                    <div className="flex items-center mb-6">
                                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h4 className="text-[13px] font-black text-[#0F172A] uppercase tracking-wider border-l-4 border-[#F2B233] pl-3 ml-2">
                                            PLANT ENGINEERING MATERIAL FLOW PROCESS
                                        </h4>
                                    </div>
                                    <div className="relative border-l-2 border-[#F2B233] ml-3 space-y-6 pb-2">
                                        {/* Step 1 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">1</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Feed Hopper</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Receives raw mountain basalt feed up to 500mm size.</p>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">2</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Jaw Crusher</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">SREW 900x600 primary reduction of basalt down to 120mm.</p>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">3</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Cone Crusher</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">SREW secondary Cone Crusher resizing feed down to 40mm.</p>
                                        </div>
                                        {/* Step 4 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-[#0F172A] group-hover:scale-110 transition-transform">4</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Vibrating Screen</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Precision classification into 10mm, 20mm, and 40mm outputs.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Outcome & Circular Economy */}
                                <div>
                                    <h3 className="text-xs font-bold text-[#0F172A] flex items-center mb-1 uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                        PROJECT PERFORMANCE & OUTCOME
                                    </h3>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light">The West Bengal crushing plant successfully delivered over 200 TPH of precision aggregates with high shape-cubicity. In addition, the integration of a sand washing plant allowed the client to capture washed plaster sand on-site, delivering an excellent return on investment within 9 months.</p>
                                </div>

                                {/* TECHNICAL SPECIFICATIONS TABLE */}
                                <div className="mt-6 w-full">
                                    <h3 className="section-label mb-3">TECHNICAL SPECIFICATIONS — SREW BLUEPRINT</h3>
                                    <table className="editorial-table">
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '35%' }}>Plant Capacity</th>
                                                <td>200 TPH (Tonnes Per Hour)</td>
                                            </tr>
                                            <tr>
                                                <th>Primary Crusher</th>
                                                <td>SREW Heavy-Duty Grease Jaw Crusher</td>
                                            </tr>
                                            <tr>
                                                <th>Secondary Crusher</th>
                                                <td>SREW High-Efficiency Cone Crusher</td>
                                            </tr>
                                            <tr>
                                                <th>Sizing Screen</th>
                                                <td>SREW Multi-Deck Vibrating Screen</td>
                                            </tr>
                                            <tr>
                                                <th>Materials Produced</th>
                                                <td>10mm, 20mm, 40mm aggregates & washed M-Sand</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-4 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-4">
                    <span>PROJECT PROFILE — SREW Projects</span>
                    <span>PAGE 07</span>
                </div>
            </div>
        </BrochurePage>
    );
};


const CaseStudyPage2 = () => {
    return (
        <BrochurePage className="p-12 flex flex-col bg-white relative">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Page Header */}
                    <div className="flex justify-between items-end border-b-[3px] border-[#0F172A] pb-4 mb-6">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-[#F2B233] uppercase mb-1.5 flex items-center">
                                <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
                                FEATURED PROJECT SPREAD
                            </div>
                            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                                400 TPH AGGREGATE PLANT
                            </h2>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-0.5">LOCATION</div>
                            <div className="text-lg font-black text-[#0F172A] tracking-tight">SINGARENI COLLIERIES, TELANGANA</div>
                        </div>
                    </div>

                    {/* Full-Height A4 Layout with Stacked Large Equipment Banners */}
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                        {/* LEFT COLUMN - Stacked Large Equipment Banners */}
                        <div className="flex flex-col gap-3 justify-between">
                            {/* 01 / HERO IMAGE */}
                            <div className="relative aspect-[16/9] w-full bg-[#0F172A] overflow-hidden border border-gray-200 shadow-sm group">
                                <img
                                    src="/images/Projects/project3.jpg"
                                    alt="Main Project View"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-3">
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono">
                                            01 / 400 TPH MINING SETUP
                                        </span>
                                        <span className="text-[9px] tracking-widest text-white/70 font-mono">TELANGANA PROJECT</span>
                                    </div>
                                </div>
                            </div>

                            {/* 02 / JAW CRUSHER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-jaw-crusher.png"
                                        alt="Jaw Crusher"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">02 / PRIMARY JAW CRUSHER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy-Duty Primary Crushing</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">30-400 TPH capacity, hydraulic wedge adjustment</p>
                                </div>
                            </div>

                            {/* 03 / VIBRATING SCREEN */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-triple-shaft-vibrating-screen.png"
                                        alt="Vibrating Screen"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">03 / 3-DECK VIBRATING SCREEN</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Multi-Stage Classification</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">Triple shaft heavy duty screening mechanism</p>
                                </div>
                            </div>

                            {/* 04 / SAND DRYER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-sand-dryer.jpg"
                                        alt="Sand Dryer"
                                        className="max-h-full object-cover mix-blend-multiply rounded-sm transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">04 / ROTARY SAND DRYER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Thermal Sand Processing Unit</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High efficiency moisture reduction rotary system</p>
                                </div>
                            </div>

                            {/* 05 / BELT CONVEYOR */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-belt-conveyor.png"
                                        alt="Belt Conveyor"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">05 / BELT CONVEYOR SYSTEM</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy Material Transport</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High capacity continuous material handling</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
                        <div className="flex flex-col gap-3 justify-between h-full">
                            {/* OVERVIEW & PROCESS CARD */}
                            <div className="bg-white border-t-4 border-[#F2B233] border-x border-b border-gray-200 p-4 flex flex-col justify-between space-y-3 shadow-sm flex-grow">
                                <div>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <h3 className="text-xs font-bold text-[#0F172A] flex items-center uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                            ENGINEERING APPROACH & BUILD
                                        </h3>
                                        <span className="text-[8px] bg-yellow-100 text-[#0F172A] font-bold px-2 py-0.5 uppercase tracking-wider">MINING PLANT</span>
                                    </div>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light text-justify">Built to tackle extreme mining environments, SREW delivered a high-throughput 400 TPH plant for continuous 24/7 quarrying. Deployed in a massive site, SREW integrated dual-toggle heavy-duty primary Jaw Crushers with secondary Horizontal Impact Crushers (HSI) to process high-abrasion coal and stone burden. Employs SREW proprietary high-strength manganese liners to minimize maintenance down-time under harsh workloads.</p>
                                </div>

                                {/* Roadmap Timeline Process Flow */}
                                <div className="mt-4 bg-gray-50/80 p-5 border border-gray-200">
                                    <div className="flex items-center mb-6">
                                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h4 className="text-[13px] font-black text-[#0F172A] uppercase tracking-wider border-l-4 border-[#F2B233] pl-3 ml-2">
                                            PLANT ENGINEERING MATERIAL FLOW PROCESS
                                        </h4>
                                    </div>
                                    <div className="relative border-l-2 border-[#F2B233] ml-3 space-y-6 pb-2">
                                        {/* Step 1 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">1</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Raw Mining Feed</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Heavy quarry stone fed via automatic apron feeder.</p>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">2</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Dual Jaw Crusher</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">SREW dual-toggle Jaw crushers tackle heavy primary crushing.</p>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">3</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Grizzly Feeder</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Bypasses pre-crushed materials to secondary circuit.</p>
                                        </div>
                                        {/* Step 4 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-[#0F172A] group-hover:scale-110 transition-transform">4</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">HSI Crusher</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Secondary high-reduction impact crushing for exact sizing.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Outcome & Circular Economy */}
                                <div>
                                    <h3 className="text-xs font-bold text-[#0F172A] flex items-center mb-1 uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                        PROJECT PERFORMANCE & OUTCOME
                                    </h3>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light">Achieved consistent and reliable daily yields averaging over 385+ TPH even under harsh monsoon operations. The integration of dual screens and an independent bypass channel avoided mud choking, establishing SREW as an elite heavy-engineering provider.</p>
                                </div>

                                {/* TECHNICAL SPECIFICATIONS TABLE */}
                                <div className="mt-6 w-full">
                                    <h3 className="section-label mb-3">TECHNICAL SPECIFICATIONS — SREW BLUEPRINT</h3>
                                    <table className="editorial-table">
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '35%' }}>Plant Capacity</th>
                                                <td>400 TPH (Tonnes Per Hour)</td>
                                            </tr>
                                            <tr>
                                                <th>Primary Crusher</th>
                                                <td>Dual SREW Heavy-Duty Toggle Jaw Crushers</td>
                                            </tr>
                                            <tr>
                                                <th>Secondary Crusher</th>
                                                <td>SREW High-Performance HSI Impact Crusher</td>
                                            </tr>
                                            <tr>
                                                <th>Sizing Screen</th>
                                                <td>Dual SREW 4-Deck Heavy Vibrating Screens</td>
                                            </tr>
                                            <tr>
                                                <th>Automation Controls</th>
                                                <td>Central PLC-based automated controller panel</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-4 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-4">
                    <span>PROJECT PROFILE — SREW Projects</span>
                    <span>PAGE 08</span>
                </div>
            </div>
        </BrochurePage>
    );
};


const CaseStudyPage3 = () => {
    return (
        <BrochurePage className="p-12 flex flex-col bg-white relative">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Page Header */}
                    <div className="flex justify-between items-end border-b-[3px] border-[#0F172A] pb-4 mb-6">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-[#F2B233] uppercase mb-1.5 flex items-center">
                                <span className="w-2 h-2 bg-[#F2B233] rounded-full mr-2"></span>
                                FEATURED PROJECT SPREAD
                            </div>
                            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.95] border-l-8 border-[#F2B233] pl-6">
                                40 TPH MOBILE CRUSHING UNIT
                            </h2>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-0.5">LOCATION</div>
                            <div className="text-lg font-black text-[#0F172A] tracking-tight">ODISHA, INDIA</div>
                        </div>
                    </div>

                    {/* Full-Height A4 Layout with Stacked Large Equipment Banners */}
                    <div className="grid grid-cols-2 gap-6 items-stretch">
                        {/* LEFT COLUMN - Stacked Large Equipment Banners */}
                        <div className="flex flex-col gap-3 justify-between">
                            {/* 01 / HERO IMAGE */}
                            <div className="relative aspect-[16/9] w-full bg-[#0F172A] overflow-hidden border border-gray-200 shadow-sm group">
                                <img
                                    src="/images/Products/image.png"
                                    alt="Main Project View"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-3">
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[8.5px] font-bold uppercase tracking-wider bg-[#F2B233] text-[#0F172A] px-2 py-0.5 font-mono">
                                            01 / MOBILE UNIT VIEW
                                        </span>
                                        <span className="text-[9px] tracking-widest text-white/70 font-mono">ODISHA PROJECT</span>
                                    </div>
                                </div>
                            </div>

                            {/* 02 / JAW CRUSHER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-jaw-crusher.png"
                                        alt="Jaw Crusher"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">02 / PRIMARY JAW CRUSHER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy-Duty Primary Crushing</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">30-400 TPH capacity, hydraulic wedge adjustment</p>
                                </div>
                            </div>

                            {/* 03 / VIBRATING SCREEN */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-triple-shaft-vibrating-screen.png"
                                        alt="Vibrating Screen"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">03 / 3-DECK VIBRATING SCREEN</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Multi-Stage Classification</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">Triple shaft heavy duty screening mechanism</p>
                                </div>
                            </div>

                            {/* 04 / SAND DRYER */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-sand-dryer.jpg"
                                        alt="Sand Dryer"
                                        className="max-h-full object-cover mix-blend-multiply rounded-sm transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">04 / ROTARY SAND DRYER</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Thermal Sand Processing Unit</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High efficiency moisture reduction rotary system</p>
                                </div>
                            </div>

                            {/* 05 / BELT CONVEYOR */}
                            <div className="relative aspect-[16/7.5] w-full bg-gray-50 border border-gray-200 overflow-hidden p-2 shadow-sm flex items-center justify-between group">
                                <div className="w-[35%] h-full flex items-center justify-center p-1">
                                    <img
                                        src="/images/Products/srew-belt-conveyor.png"
                                        alt="Belt Conveyor"
                                        className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="w-[62%] flex flex-col justify-center pl-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[11.5px] font-black uppercase tracking-wider text-[#0A2342] px-1.5 py-0.5">05 / BELT CONVEYOR SYSTEM</span>
                                    </div>
                                    <p className="text-[13.5px] font-bold text-[#0A2342]">Heavy Material Transport</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">High capacity continuous material handling</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Detailed Technical Project Showcase */}
                        <div className="flex flex-col gap-3 justify-between h-full">
                            {/* OVERVIEW & PROCESS CARD */}
                            <div className="bg-white border-t-4 border-[#F2B233] border-x border-b border-gray-200 p-4 flex flex-col justify-between space-y-3 shadow-sm flex-grow">
                                <div>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <h3 className="text-xs font-bold text-[#0F172A] flex items-center uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                            ENGINEERING APPROACH & BUILD
                                        </h3>
                                        <span className="text-[8px] bg-yellow-100 text-[#0F172A] font-bold px-2 py-0.5 uppercase tracking-wider">MOBILE INFRA</span>
                                    </div>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light text-justify">For linear road infrastructure projects requiring rapid site relocations, SREW engineered a robust, completely skid-mounted mobile crushing and screening unit. Dismountable in just days, this system contains a heavy-duty SREW primary jaw crusher, an integrated classification screen, and self-contained material transfer conveyors powered by a centralized on-chassis diesel generator.</p>
                                </div>

                                {/* Roadmap Timeline Process Flow */}
                                <div className="mt-4 bg-gray-50/80 p-5 border border-gray-200">
                                    <div className="flex items-center mb-6">
                                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h4 className="text-[13px] font-black text-[#0F172A] uppercase tracking-wider border-l-4 border-[#F2B233] pl-3 ml-2">
                                            PLANT ENGINEERING MATERIAL FLOW PROCESS
                                        </h4>
                                    </div>
                                    <div className="relative border-l-2 border-[#F2B233] ml-3 space-y-6 pb-2">
                                        {/* Step 1 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">1</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Granite Excavation</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Local granite loaded directly on road-site hopper.</p>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">2</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Skid Jaw Crusher</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">SREW mobile skid jaw performs primary reduction.</p>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#0F172A] text-[#F2B233] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-white group-hover:scale-110 transition-transform">3</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Dismountable Screen</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Vibrating classification screen segregates aggregate sizes.</p>
                                        </div>
                                        {/* Step 4 */}
                                        <div className="relative pl-6 group">
                                            <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#F2B233] text-[#0F172A] flex items-center justify-center text-[12px] font-black shadow-md border-2 border-[#0F172A] group-hover:scale-110 transition-transform">4</div>
                                            <h5 className="font-bold text-[#0F172A] text-[14px] leading-none mb-1.5 uppercase tracking-wide">Radial Conveyors</h5>
                                            <p className="text-[13px] text-gray-600 leading-snug">Self-driven conveyors stockpile materials directly to site.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Outcome & Circular Economy */}
                                <div>
                                    <h3 className="text-xs font-bold text-[#0F172A] flex items-center mb-1 uppercase tracking-[0.15em] border-l-4 border-[#F2B233] pl-3">
                                        PROJECT PERFORMANCE & OUTCOME
                                    </h3>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-light">Rapidly deployed at multiple road construction layouts across Odisha within 20 days of order confirmation. The client relocated this unit 6 times over the last 18 months, dramatically cutting down truck aggregate transportation costs by processing materials right on-site.</p>
                                </div>

                                {/* TECHNICAL SPECIFICATIONS TABLE */}
                                <div className="mt-6 w-full">
                                    <h3 className="section-label mb-3">TECHNICAL SPECIFICATIONS — SREW BLUEPRINT</h3>
                                    <table className="editorial-table">
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '35%' }}>Unit Capacity</th>
                                                <td>40 TPH (Tonnes Per Hour)</td>
                                            </tr>
                                            <tr>
                                                <th>Crushing Machine</th>
                                                <td>SREW Skid-Mounted Grease Jaw Crusher (600x400)</td>
                                            </tr>
                                            <tr>
                                                <th>Classification</th>
                                                <td>Integrated SREW 2-Deck Vibrating Screen</td>
                                            </tr>
                                            <tr>
                                                <th>Power System</th>
                                                <td>On-chassis self-contained DG diesel power unit</td>
                                            </tr>
                                            <tr>
                                                <th>Deployment Time</th>
                                                <td>Fully operational in under 20 days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-4 text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-4">
                    <span>PROJECT PROFILE — SREW Projects</span>
                    <span>PAGE 09</span>
                </div>
            </div>
        </BrochurePage>
    );
};




export default function Brochure() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadPDF = async () => {
        setIsDownloading(true);

        try {
            // Dynamically load html2pdf.js
            if (!(window as any).html2pdf) {
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js';
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            }

            const element = document.getElementById('brochure-container');
            if (!element) return;
            
            const originalGap = element.style.gap;
            element.style.gap = '0px';

            const opt = {
                margin:       0,
                filename:     'SREW_Projects_Brochure.pdf',
                image:        { type: 'jpeg', quality: 0.95 },
                html2canvas:  { scale: 1.5, useCORS: true, logging: false },
                jsPDF:        { unit: 'px', format: [element.scrollWidth, element.scrollHeight], orientation: 'portrait' }
            };

            await (window as any).html2pdf().set(opt).from(element).save();
            
            element.style.gap = originalGap;
        } catch (error) {
            console.error('Failed to generate PDF:', error);
            alert('PDF generation failed. Please use the browser Print function (Ctrl+P / Cmd+P) and select "Save as PDF".');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 py-12 px-4 font-sans flex flex-col items-center">

            {/* Header Info */}
            <div className="max-w-[1200px] w-full mb-8 flex justify-between items-center text-gray-500">
                <h1 className="text-xl font-bold text-[#0F172A] tracking-wider uppercase">SREW Projects <span className="text-yellow-500">|</span> Premium Brochure</h1>
                <div className="flex items-center gap-4 text-sm font-medium">
                    <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex items-center gap-2 hover:text-yellow-600 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                        <Download size={16} /> {isDownloading ? 'Generating PDF...' : 'PDF Version'}
                    </button>
                    <span className="text-gray-400">|</span>
                    <span>Optimized for A4 Landscape Printing</span>
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

            {/* AI Chatbot Overlay */}
            <AIChatbot />
        </div>
    );
}