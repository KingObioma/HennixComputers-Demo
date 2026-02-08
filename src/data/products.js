export const products = [
  {
    id: "dell-precision-5770",
    name: "Dell Precision 5770",
    shortName: "Precision 5770",
    brand: "Dell",
    category: "Workstation",
    image: "/images/products/product1.jpg",
    price: 1720000,
    oldPrice: 2120000,
    specs: {
      processor: "Intel Core i9-12900H",
      ram: "24GB DDR5",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA RTX A3000 12GB",
      display: '17" 4K+ UHD+',
      battery: "Up to 8 hours",
    },
    shortDescription:
      "Dominate every workload with raw i9 power and 12GB professional-grade graphics. The ultimate machine for creators, engineers, and power users who refuse to compromise.",
    longDescription:
      "The Dell Precision 5770 is built for professionals who demand the absolute best. Powered by the Intel Core i9-12900H and paired with the NVIDIA RTX A3000 with 12GB VRAM, this workstation handles 3D rendering, video editing, CAD, and data analysis without breaking a sweat. The stunning 17-inch 4K+ display brings your work to life with pinpoint color accuracy. With 24GB of DDR5 RAM and a lightning-fast 1TB NVMe SSD, multitasking is effortless. This is the laptop that pays for itself.",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "dell-latitude-7210",
    name: "Dell Latitude 7210 2-in-1",
    shortName: "Latitude 7210",
    brand: "Dell",
    category: "Business",
    image: "/images/products/product2.jpg",
    price: 500000,
    oldPrice: 620000,
    specs: {
      processor: "Intel Core i5-10310U",
      ram: "16GB DDR4",
      storage: "256GB SSD",
      graphics: "Intel UHD Graphics",
      display: '12.3" FHD+ Touchscreen',
      battery: "Up to 12 hours",
    },
    shortDescription:
      "A versatile 2-in-1 that transforms from laptop to tablet in seconds. Perfect for mobile professionals who need flexibility without sacrificing performance.",
    longDescription:
      "The Dell Latitude 7210 2-in-1 gives you the freedom to work however you want. Snap the detachable keyboard on for a full laptop experience, or pull it off for a sleek tablet that's perfect for presentations, note-taking, and on-the-go productivity. The 12.3-inch FHD+ touchscreen is bright and responsive, and with up to 12 hours of battery life, it lasts longer than your workday. Compact, powerful, and built to keep up with the modern professional.",
    badge: "Portable Pick",
    featured: true,
  },
  {
    id: "hp-elitebook-x360-830-g8",
    name: "HP EliteBook x360 830 G8",
    shortName: "EliteBook x360",
    brand: "HP",
    category: "Business",
    image: "/images/products/product3.jpg",
    price: 550000,
    oldPrice: 680000,
    specs: {
      processor: "Intel Core i5-1145G7",
      ram: "16GB DDR4",
      storage: "256GB SSD",
      graphics: "Intel Iris Xe Graphics",
      display: '13.3" FHD IPS Touchscreen',
      battery: "Up to 14 hours",
    },
    shortDescription:
      "Flip, fold, and conquer your day with HP's premium 360-degree convertible. Enterprise-grade security meets stunning flexibility in a laptop that adapts to you.",
    longDescription:
      "The HP EliteBook x360 830 G8 is the gold standard for business convertibles. Its 360-degree hinge lets you use it as a laptop, tent, stand, or tablet — whatever the moment demands. Under the hood, the 11th Gen Intel Core i5-1145G7 with Iris Xe graphics delivers smooth performance for every business task. Bang & Olufsen audio, an ultra-bright 13.3-inch FHD touchscreen, and enterprise-grade security features including a fingerprint reader make this the smartest investment for professionals who value versatility.",
    badge: "Most Versatile",
    featured: true,
  },
  {
    id: "alienware-m15-r6",
    name: "Alienware M15 R6",
    shortName: "Alienware M15",
    brand: "Alienware",
    category: "Gaming",
    image: "/images/products/product4.jpg",
    price: 1850000,
    oldPrice: 2270000,
    specs: {
      processor: "Intel Core i7-11800H",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA RTX 3070 8GB",
      display: '15.6" FHD 165Hz',
      battery: "Up to 6 hours",
    },
    shortDescription:
      "Unleash gaming dominance with RTX 3070 power and a blazing 165Hz display. Every frame is smoother, every detail sharper, every victory more satisfying.",
    longDescription:
      "The Alienware M15 R6 is engineered for gamers who refuse to lose. The NVIDIA GeForce RTX 3070 with 8GB GDDR6 powers through AAA titles at max settings, while the 165Hz FHD display ensures buttery-smooth visuals with zero tearing. The Intel Core i7-11800H provides desktop-class performance in a portable package, and 1TB of NVMe storage means your entire game library is always ready. Alienware's legendary thermal engineering keeps everything cool under pressure. This isn't just a gaming laptop — it's an unfair advantage.",
    badge: "Gamer's Choice",
    featured: true,
  },
  {
    id: "hp-envy-17",
    name: "HP Envy 17",
    shortName: "HP Envy 17",
    brand: "HP",
    category: "Creator",
    image: "/images/products/product5.jpg",
    price: 1500000,
    oldPrice: 1830000,
    specs: {
      processor: "Intel Core Ultra 7",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA RTX 3050 6GB",
      display: '17.3" FHD IPS',
      battery: "Up to 9 hours",
    },
    shortDescription:
      "The ultimate creator's companion with a massive 17-inch canvas, 32GB of memory, and dedicated RTX graphics. Create without limits, render without waiting.",
    longDescription:
      "The HP Envy 17 is purpose-built for creators who need screen real estate and raw power. The 17.3-inch FHD IPS display gives you a massive workspace for video editing, design, and content creation. Powered by the latest Intel Core Ultra 7 processor with 32GB of DDR5 RAM, this machine handles heavy multitasking and creative workloads with ease. The NVIDIA RTX 3050 accelerates rendering and enables GPU-powered creative tools. Whether you're editing 4K video, designing in Photoshop, or running multiple creative apps simultaneously, the Envy 17 never slows down.",
    badge: "Creator's Pick",
    featured: true,
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
