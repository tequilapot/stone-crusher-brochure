const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'client', 'src', 'components');

const replacements = {
    '/manus-storage/srew-logo_6e181848.png': '/images/logo.png',
    '/manus-storage/srew-original-about_e695f5aa.jpg': '/images/hero-background.jpg',
    '/manus-storage/srew-original-project1_f19598be.jpg': '/images/Projects/project1.jpg',
    '/manus-storage/srew-original-project2_871e02cb.jpg': '/images/Projects/project2.jpg',
    '/manus-storage/srew-original-project3_f82c220f.jpg': '/images/Projects/project3.jpg',
    '/manus-storage/srew-project-cd-recycling-C2I7Oq4i_ca43fc70.jpg': '/images/recycling.jpg',
    '/manus-storage/srew-project-cd-recycling-detail-2.jpg': '/images/Projects/project4.jpg',
    '/manus-storage/srew-project-cd-recycling-detail-3.jpg': '/images/Projects/project5.jpg',
    '/manus-storage/srew-facility_1e39c24d.jpg': '/images/about-company.jpg',
    '/manus-storage/srew-vibrating-screen_b6ccff1e.jpg': '/images/Products/srew-triple-shaft-vibrating-screen.png'
};

const fileList = fs.readdirSync(componentsDir);

for (const file of fileList) {
    if (!file.endsWith('.tsx')) continue;
    
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First apply exact replacements
    for (const [search, replace] of Object.entries(replacements)) {
        content = content.replaceAll(search, replace);
    }

    // Now handle the ProductsSection regex:
    // It looks like: /manus-storage/srew-product-srew-jaw-crusher-Bard-gRJ_cc45f847.png
    // We want to extract 'srew-jaw-crusher' and point it to /images/Products/srew-jaw-crusher.png
    // But since the names in Products/ are exact, let's just strip the hash parts if we can, 
    // or manually map them using a regex that replaces anything starting with /manus-storage/srew-product-
    
    // Let's use a simpler regex for products:
    content = content.replace(/\/manus-storage\/srew-product-srew-jaw-crusher-[^"]+/g, '/images/Products/srew-jaw-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-european-type-jaw-crusher-[^"]+/g, '/images/Products/srew-european-type-jaw-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-grease-jaw-crusher-[^"]+/g, '/images/Products/srew-grease-jaw-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-cone-crusher-plant-[^"]+/g, '/images/Products/srew-cone-crusher-plant.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-single-cylinder-cone-crusher-[^"]+/g, '/images/Products/srew-single-cylinder-cone-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-multi-cylinder-hydraulic-cone-crusher-[^"]+/g, '/images/Products/srew-multi-cylinder-hydraulic-cone-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-hydraulic-impact-crusher-[^"]+/g, '/images/Products/srew-hydraulic-impact-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-hammer-crusher-[^"]+/g, '/images/Products/srew-hammer-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-roller-crusher-[^"]+/g, '/images/Products/srew-roller-crusher.jpg');
    content = content.replace(/\/manus-storage\/srew-product-srew-vertical-shaft-crusher-[^"]+/g, '/images/Products/srew-vertical-shaft-crusher.png');
    
    content = content.replace(/\/manus-storage\/srew-product-vibrating-screen-[^"]+/g, '/images/Products/srew-triple-shaft-vibrating-screen.png'); // fallback
    content = content.replace(/\/manus-storage\/srew-product-Vibrating-Screen-3-deck-[^"]+/g, '/images/Products/Vibrating-Screen-3-deck.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-Damping-vibrating-screen-[^"]+/g, '/images/Products/srew-Damping-vibrating-screen.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-triple-shaft-vibrating-screen-[^"]+/g, '/images/Products/srew-triple-shaft-vibrating-screen.png');
    
    content = content.replace(/\/manus-storage\/srew-product-srew-sand-washer-[^"]+/g, '/images/Products/srew-sand-washer.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-series-sand-washer-[^"]+/g, '/images/Products/srew-series-sand-washer.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-fine-sand-recycling-machine-[^"]+/g, '/images/Products/srew-fine-sand-recycling-machine.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-sand-dryer-[^"]+/g, '/images/Products/srew-sand-dryer.jpg');
    
    content = content.replace(/\/manus-storage\/srew-product-srew-mobile-crushing-plant-[^"]+/g, '/images/Products/srew-mobile-crushing-plant.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-modular-mobile-crusher-[^"]+/g, '/images/Products/srew-modular-mobile-crusher.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-tire-mobile-crusher-[^"]+/g, '/images/Products/srew-tire-mobile-crusher.png');
    
    content = content.replace(/\/manus-storage\/srew-product-srew-belt-conveyor-[^"]+/g, '/images/Products/srew-belt-conveyor.png');
    content = content.replace(/\/manus-storage\/srew-product-srew-hopper-[^"]+/g, '/images/Products/srew-hopper.jpg');
    content = content.replace(/\/manus-storage\/srew-product-srew-silo-[^"]+/g, '/images/Products/srew-silo.jpg');
    content = content.replace(/\/manus-storage\/srew-product-srew-panel-board-[^"]+/g, '/images/Products/srew-panel-board.jpg');
    content = content.replace(/\/manus-storage\/srew-product-srew-cd-recycling-[^"]+/g, '/images/Products/srew-cd-recycling.jpg');
    
    // Any remaining /manus-storage/ that wasn't caught
    content = content.replace(/\/manus-storage\/[^"]+/g, '/images/logo.png');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Images fixed!");
