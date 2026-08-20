export interface Product {
  id: string;
  name: string;
  capacity?: number;
  price: number;
  originalPrice?: number;
  salePrice?: number;
  slug: string;
  description: string;
  features: string[];
  specifications?: {
    layers?: string;
    material?: string;
    color?: string;
    uvProtection?: boolean;
  };
  inStock: boolean;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  priority?: number;
  onSale?: boolean;
}

export const products: Product[] = [
  // TANKS - Barrel
  {
    id: "barrel-100l",
    name: "Barrel — 100 Litres",
    capacity: 100,
    price: 2560,
    originalPrice: 3200,
    salePrice: 2560,
    onSale: true,
    slug: "barrel-100-litres",
    description: "Durable 100-litre barrel for storage and transport. Heavy-duty construction for industrial use.",
    features: [
      "100-litre capacity",
      "Heavy-duty construction",
      "Durable material",
      "Easy to transport",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
    images: [
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-120l",
    name: "Barrel — 120 Litres",
    capacity: 120,
    price: 3040,
    originalPrice: 3800,
    salePrice: 3040,
    onSale: true,
    slug: "barrel-120-litres",
    description: "Durable 120-litre barrel for storage and transport. Heavy-duty construction for industrial use.",
    features: [
      "120-litre capacity",
      "Heavy-duty construction",
      "Durable material",
      "Easy to transport",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
    images: [
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-200l",
    name: "Barrel — 200 Litres",
    capacity: 200,
    price: 4560,
    originalPrice: 5700,
    salePrice: 4560,
    onSale: true,
    slug: "barrel-200-litres",
    description: "Durable 200-litre barrel for storage and transport. Heavy-duty construction for industrial use.",
    features: [
      "200-litre capacity",
      "Heavy-duty construction",
      "Durable material",
      "Easy to transport",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
    images: [
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-230l",
    name: "Barrel — 230 Litres",
    capacity: 230,
    price: 4960,
    originalPrice: 6200,
    salePrice: 4960,
    onSale: true,
    slug: "barrel-230-litres",
    description: "Durable 230-litre barrel for storage and transport. Heavy-duty construction for industrial use.",
    features: [
      "230-litre capacity",
      "Heavy-duty construction",
      "Durable material",
      "Easy to transport",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
    images: [
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-240l",
    name: "Barrel — 240 Litres",
    capacity: 240,
    price: 5200,
    originalPrice: 6500,
    salePrice: 5200,
    onSale: true,
    slug: "barrel-240-litres",
    description: "Durable 240-litre barrel for storage and transport. Heavy-duty construction for industrial use.",
    features: [
      "240-litre capacity",
      "Heavy-duty construction",
      "Durable material",
      "Easy to transport",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
    images: [
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg",
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },

  // TANKS - Conical Hopper Tank
  {
    id: "conical-1000l",
    name: "Conical Hopper Tank — 1,000 Litres",
    capacity: 1000,
    price: 19600,
    originalPrice: 24500,
    salePrice: 19600,
    onSale: true,
    slug: "conical-hopper-tank-1000-litres",
    description: "1,000-litre conical hopper tank for efficient drainage and storage. Perfect for industrial applications.",
    features: [
      "1,000-litre capacity",
      "Conical hopper design",
      "Efficient drainage",
      "Industrial grade",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: [
      "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-1500l",
    name: "Conical Hopper Tank — 1,500 Litres",
    capacity: 1500,
    price: 25600,
    originalPrice: 32000,
    salePrice: 25600,
    onSale: true,
    slug: "conical-hopper-tank-1500-litres",
    description: "1,500-litre conical hopper tank for efficient drainage and storage. Perfect for industrial applications.",
    features: [
      "1,500-litre capacity",
      "Conical hopper design",
      "Efficient drainage",
      "Industrial grade",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: [
      "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-3000l",
    name: "Conical Hopper Tank — 3,000 Litres",
    capacity: 3000,
    price: 46000,
    originalPrice: 57500,
    salePrice: 46000,
    onSale: true,
    slug: "conical-hopper-tank-3000-litres",
    description: "3,000-litre conical hopper tank for efficient drainage and storage. Perfect for industrial applications.",
    features: [
      "3,000-litre capacity",
      "Conical hopper design",
      "Efficient drainage",
      "Industrial grade",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: [
      "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-5000l",
    name: "Conical Hopper Tank — 5,000 Litres",
    capacity: 5000,
    price: 73600,
    originalPrice: 92000,
    salePrice: 73600,
    onSale: true,
    slug: "conical-hopper-tank-5000-litres",
    description: "5,000-litre conical hopper tank for efficient drainage and storage. Perfect for industrial applications.",
    features: [
      "5,000-litre capacity",
      "Conical hopper design",
      "Efficient drainage",
      "Industrial grade",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: [
      "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },

  // TANKS - Horizontal Septic Tank
  {
    id: "septic-2000l",
    name: "Horizontal Septic Tank — 2,000 Litres",
    capacity: 2000,
    price: 44160,
    originalPrice: 55200,
    salePrice: 44160,
    onSale: true,
    slug: "horizontal-septic-tank-2000-litres",
    description: "2,000-litre horizontal septic tank for wastewater management. Durable and corrosion-resistant.",
    features: [
      "2,000-litre capacity",
      "Horizontal design",
      "Wastewater management",
      "Corrosion resistant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-3000l",
    name: "Horizontal Septic Tank — 3,000 Litres",
    capacity: 3000,
    price: 66000,
    originalPrice: 82500,
    salePrice: 66000,
    onSale: true,
    slug: "horizontal-septic-tank-3000-litres",
    description: "3,000-litre horizontal septic tank for wastewater management. Durable and corrosion-resistant.",
    features: [
      "3,000-litre capacity",
      "Horizontal design",
      "Wastewater management",
      "Corrosion resistant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-5000l",
    name: "Horizontal Septic Tank — 5,000 Litres",
    capacity: 5000,
    price: 110400,
    originalPrice: 138000,
    salePrice: 110400,
    onSale: true,
    slug: "horizontal-septic-tank-5000-litres",
    description: "5,000-litre horizontal septic tank for wastewater management. Durable and corrosion-resistant.",
    features: [
      "5,000-litre capacity",
      "Horizontal design",
      "Wastewater management",
      "Corrosion resistant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-6000l",
    name: "Horizontal Septic Tank — 6,000 Litres",
    capacity: 6000,
    price: 132000,
    originalPrice: 165000,
    salePrice: 132000,
    onSale: true,
    slug: "horizontal-septic-tank-6000-litres",
    description: "6,000-litre horizontal septic tank for wastewater management. Durable and corrosion-resistant.",
    features: [
      "6,000-litre capacity",
      "Horizontal design",
      "Wastewater management",
      "Corrosion resistant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },

  // TANKS - Nestable Tank
  {
    id: "nestable-100l",
    name: "Nestable Tank — 100 Litres",
    capacity: 100,
    price: 2320,
    originalPrice: 2900,
    salePrice: 2320,
    onSale: true,
    slug: "nestable-tank-100-litres",
    description: "100-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "100-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-200l",
    name: "Nestable Tank — 200 Litres",
    capacity: 200,
    price: 3840,
    originalPrice: 4800,
    salePrice: 3840,
    onSale: true,
    slug: "nestable-tank-200-litres",
    description: "200-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "200-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-300l",
    name: "Nestable Tank — 300 Litres",
    capacity: 300,
    price: 5960,
    originalPrice: 7450,
    salePrice: 5960,
    onSale: true,
    slug: "nestable-tank-300-litres",
    description: "300-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "300-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-500l",
    name: "Nestable Tank — 500 Litres",
    capacity: 500,
    price: 8240,
    originalPrice: 10300,
    salePrice: 8240,
    onSale: true,
    slug: "nestable-tank-500-litres",
    description: "500-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "500-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-1000l",
    name: "Nestable Tank — 1,000 Litres",
    capacity: 1000,
    price: 13200,
    originalPrice: 16500,
    salePrice: 13200,
    onSale: true,
    slug: "nestable-tank-1000-litres",
    description: "1,000-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "1,000-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-2000l",
    name: "Nestable Tank — 2,000 Litres",
    capacity: 2000,
    price: 26000,
    originalPrice: 32500,
    salePrice: 26000,
    onSale: true,
    slug: "nestable-tank-2000-litres",
    description: "2,000-litre nestable tank for space-efficient storage. Stackable design for easy transport.",
    features: [
      "2,000-litre capacity",
      "Nestable design",
      "Space-efficient",
      "Stackable",
      "Easy to transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: [
      "/TANKS/Nestable tank/Nestable Tank.jpg"
    ],
    category: "TANKS",
    subcategory: "Nestable"
  },

  // TANKS - Rectangular Loft Tank
  {
    id: "loft-230l",
    name: "Rectangular Loft Tank — 230 Litres",
    capacity: 230,
    price: 5760,
    originalPrice: 7200,
    salePrice: 5760,
    onSale: true,
    slug: "rectangular-loft-tank-230-litres",
    description: "230-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "230-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-300l",
    name: "Rectangular Loft Tank — 300 Litres",
    capacity: 300,
    price: 6400,
    originalPrice: 8000,
    salePrice: 6400,
    onSale: true,
    slug: "rectangular-loft-tank-300-litres",
    description: "300-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "300-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-400l",
    name: "Rectangular Loft Tank — 400 Litres",
    capacity: 400,
    price: 7720,
    originalPrice: 9650,
    salePrice: 7720,
    onSale: true,
    slug: "rectangular-loft-tank-400-litres",
    description: "400-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "400-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-460l",
    name: "Rectangular Loft Tank — 460 Litres",
    capacity: 460,
    price: 9200,
    originalPrice: 11500,
    salePrice: 9200,
    onSale: true,
    slug: "rectangular-loft-tank-460-litres",
    description: "460-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "460-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-500l",
    name: "Rectangular Loft Tank — 500 Litres",
    capacity: 500,
    price: 9600,
    originalPrice: 12000,
    salePrice: 9600,
    onSale: true,
    slug: "rectangular-loft-tank-500-litres",
    description: "500-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "500-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-690l",
    name: "Rectangular Loft Tank — 690 Litres",
    capacity: 690,
    price: 11200,
    originalPrice: 14000,
    salePrice: 11200,
    onSale: true,
    slug: "rectangular-loft-tank-690-litres",
    description: "690-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "690-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-700l",
    name: "Rectangular Loft Tank — 700 Litres",
    capacity: 700,
    price: 11600,
    originalPrice: 14500,
    salePrice: 11600,
    onSale: true,
    slug: "rectangular-loft-tank-700-litres",
    description: "700-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "700-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-850l",
    name: "Rectangular Loft Tank — 850 Litres",
    capacity: 850,
    price: 12800,
    originalPrice: 16000,
    salePrice: 12800,
    onSale: true,
    slug: "rectangular-loft-tank-850-litres",
    description: "850-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "850-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-920l",
    name: "Rectangular Loft Tank — 920 Litres",
    capacity: 920,
    price: 13200,
    originalPrice: 16500,
    salePrice: 13200,
    onSale: true,
    slug: "rectangular-loft-tank-920-litres",
    description: "920-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "920-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-1000l",
    name: "Rectangular Loft Tank — 1,000 Litres",
    capacity: 1000,
    price: 13600,
    originalPrice: 17000,
    salePrice: 13600,
    onSale: true,
    slug: "rectangular-loft-tank-1000-litres",
    description: "1,000-litre rectangular loft tank for space-saving water storage. Perfect for overhead installation.",
    features: [
      "1,000-litre capacity",
      "Rectangular design",
      "Space-saving",
      "Loft installation",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },

  // TANKS - Roller Drum
  {
    id: "roller-50l",
    name: "Roller Drum — 50 Litres",
    capacity: 50,
    price: 3440,
    originalPrice: 4300,
    salePrice: 3440,
    onSale: true,
    slug: "roller-drum-50-litres",
    description: "50-litre roller drum for easy transport and storage. Durable construction with rolling capability.",
    features: [
      "50-litre capacity",
      "Roller design",
      "Easy to transport",
      "Durable construction",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },
  {
    id: "roller-75l",
    name: "Roller Drum — 75 Litres",
    capacity: 75,
    price: 4400,
    originalPrice: 5500,
    salePrice: 4400,
    onSale: true,
    slug: "roller-drum-75-litres",
    description: "75-litre roller drum for easy transport and storage. Durable construction with rolling capability.",
    features: [
      "75-litre capacity",
      "Roller design",
      "Easy to transport",
      "Durable construction",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },
  {
    id: "roller-100l",
    name: "Roller Drum — 100 Litres",
    capacity: 100,
    price: 5440,
    originalPrice: 6800,
    salePrice: 5440,
    onSale: true,
    slug: "roller-drum-100-litres",
    description: "100-litre roller drum for easy transport and storage. Durable construction with rolling capability.",
    features: [
      "100-litre capacity",
      "Roller design",
      "Easy to transport",
      "Durable construction",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },

  // TANKS - Underground Spherical Tank
  {
    id: "spherical-1000l",
    name: "Underground Spherical Tank — 1,000 Litres",
    capacity: 1000,
    price: 22800,
    originalPrice: 28500,
    salePrice: 22800,
    onSale: true,
    slug: "underground-spherical-tank-1000-litres",
    description: "1,000-litre underground spherical tank for water storage. Durable and space-efficient.",
    features: [
      "1,000-litre capacity",
      "Spherical design",
      "Underground installation",
      "Space-efficient",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-2000l",
    name: "Underground Spherical Tank — 2,000 Litres",
    capacity: 2000,
    price: 44160,
    originalPrice: 55200,
    salePrice: 44160,
    onSale: true,
    slug: "underground-spherical-tank-2000-litres",
    description: "2,000-litre underground spherical tank for water storage. Durable and space-efficient.",
    features: [
      "2,000-litre capacity",
      "Spherical design",
      "Underground installation",
      "Space-efficient",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-3000l",
    name: "Underground Spherical Tank — 3,000 Litres",
    capacity: 3000,
    price: 66000,
    originalPrice: 82500,
    salePrice: 66000,
    onSale: true,
    slug: "underground-spherical-tank-3000-litres",
    description: "3,000-litre underground spherical tank for water storage. Durable and space-efficient.",
    features: [
      "3,000-litre capacity",
      "Spherical design",
      "Underground installation",
      "Space-efficient",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-5000l",
    name: "Underground Spherical Tank — 5,000 Litres",
    capacity: 5000,
    price: 110400,
    originalPrice: 138000,
    salePrice: 110400,
    onSale: true,
    slug: "underground-spherical-tank-5000-litres",
    description: "5,000-litre underground spherical tank for water storage. Durable and space-efficient.",
    features: [
      "5,000-litre capacity",
      "Spherical design",
      "Underground installation",
      "Space-efficient",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-6000l",
    name: "Underground Spherical Tank — 6,000 Litres",
    capacity: 6000,
    price: 132000,
    originalPrice: 165000,
    salePrice: 132000,
    onSale: true,
    slug: "underground-spherical-tank-6000-litres",
    description: "6,000-litre underground spherical tank for water storage. Durable and space-efficient.",
    features: [
      "6,000-litre capacity",
      "Spherical design",
      "Underground installation",
      "Space-efficient",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },

  // TANKS - Vertical Cylindrical Tank
  {
    id: "vertical-100l",
    name: "Vertical Cylindrical Tank — 100 Litres",
    capacity: 100,
    price: 2320,
    originalPrice: 2900,
    salePrice: 2320,
    onSale: true,
    slug: "vertical-cylindrical-tank-100-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "100-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-200l",
    name: "Vertical Cylindrical Tank — 200 Litres",
    capacity: 200,
    price: 3120,
    originalPrice: 3900,
    salePrice: 3120,
    onSale: true,
    slug: "vertical-cylindrical-tank-200-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "200-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-300l",
    name: "Vertical Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 4600,
    originalPrice: 5750,
    salePrice: 4600,
    onSale: true,
    slug: "vertical-cylindrical-tank-300-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "300-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-500l",
    name: "Vertical Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 5520,
    originalPrice: 6900,
    salePrice: 5520,
    onSale: true,
    slug: "vertical-cylindrical-tank-500-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "500-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-1000l",
    name: "Vertical Cylindrical Tank — 1,000 Litres",
    capacity: 1000,
    price: 10160,
    originalPrice: 12700,
    salePrice: 10160,
    onSale: true,
    slug: "vertical-cylindrical-tank-1000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "1,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-1500l",
    name: "Vertical Cylindrical Tank — 1,500 Litres",
    capacity: 1500,
    price: 11920,
    originalPrice: 14900,
    salePrice: 11920,
    onSale: true,
    slug: "vertical-cylindrical-tank-1500-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "1,500-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-2000l",
    name: "Vertical Cylindrical Tank — 2,000 Litres",
    capacity: 2000,
    price: 15600,
    originalPrice: 19500,
    salePrice: 15600,
    onSale: true,
    slug: "vertical-cylindrical-tank-2000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "2,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-3000l",
    name: "Vertical Cylindrical Tank — 3,000 Litres",
    capacity: 3000,
    price: 21600,
    originalPrice: 27000,
    salePrice: 21600,
    onSale: true,
    slug: "vertical-cylindrical-tank-3000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "3,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-5000l",
    name: "Vertical Cylindrical Tank — 5,000 Litres",
    capacity: 5000,
    price: 37200,
    originalPrice: 46500,
    salePrice: 37200,
    onSale: true,
    slug: "vertical-cylindrical-tank-5000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "5,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-6000l",
    name: "Vertical Cylindrical Tank — 6,000 Litres",
    capacity: 6000,
    price: 49200,
    originalPrice: 61500,
    salePrice: 49200,
    onSale: true,
    slug: "vertical-cylindrical-tank-6000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "6,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-8000l",
    name: "Vertical Cylindrical Tank — 8,000 Litres",
    capacity: 8000,
    price: 68000,
    originalPrice: 85000,
    salePrice: 68000,
    onSale: true,
    slug: "vertical-cylindrical-tank-8000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "8,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-10000l",
    name: "Vertical Cylindrical Tank — 10,000 Litres",
    capacity: 10000,
    price: 86000,
    originalPrice: 107500,
    salePrice: 86000,
    onSale: true,
    slug: "vertical-cylindrical-tank-10000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "10,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-12000l",
    name: "Vertical Cylindrical Tank — 12,000 Litres",
    capacity: 12000,
    price: 135600,
    originalPrice: 169500,
    salePrice: 135600,
    onSale: true,
    slug: "vertical-cylindrical-tank-12000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "12,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-15000l",
    name: "Vertical Cylindrical Tank — 15,000 Litres",
    capacity: 15000,
    price: 184000,
    originalPrice: 230000,
    salePrice: 184000,
    onSale: true,
    slug: "vertical-cylindrical-tank-15000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "15,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-24000l",
    name: "Vertical Cylindrical Tank — 24,000 Litres",
    capacity: 24000,
    price: 306000,
    originalPrice: 382500,
    salePrice: 306000,
    onSale: true,
    slug: "vertical-cylindrical-tank-24000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "24,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },

  // BINS - 60L Garbage Bin With Foot Pedal
  {
    id: "bin-60l-foot-pedal",
    name: "60 Litre Garbage Bin With Foot Pedal",
    capacity: 60,
    price: 6880,
    originalPrice: 8600,
    salePrice: 6880,
    onSale: true,
    slug: "60-litre-garbage-bin-foot-pedal",
    description: "60-litre garbage bin with convenient foot pedal operation. Hygienic and easy to use.",
    features: [
      "60-litre capacity",
      "Foot pedal operation",
      "Hygienic hands-free use",
      "Durable construction",
      "Easy to clean"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/60litre Garbage Bin With Foot Pedal.jpg",
    images: [
      "/bins/60litre Garbage Bin With Foot Pedal.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal1.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal2.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal3.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal4.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal5.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal6.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal7.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },

  // BINS - 90L Garbage Bin With Wheels & Handle
  {
    id: "bin-90l-wheels-handle",
    name: "90 Litre Garbage Bin With Wheels & Handle",
    capacity: 90,
    price: 9600,
    originalPrice: 12000,
    salePrice: 9600,
    onSale: true,
    slug: "90-litre-garbage-bin-wheels-handle",
    description: "90-litre garbage bin with wheels and handle for easy transport. Convenient for residential use.",
    features: [
      "90-litre capacity",
      "Wheels and handle",
      "Easy to transport",
      "Durable construction",
      "Residential grade"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Garbage Bin With Wheels & Handle.jpg",
    images: [
      "/bins/90litre Garbage Bin With Wheels & Handle.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle1.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle2.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle3.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle4.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle5.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },

  // BINS - 90L Garbage Bin With Wheels, Handle & Foot Pedal
  {
    id: "bin-90l-wheels-handle-pedal",
    name: "90 Litre Garbage Bin With Wheels, Handle & Foot Pedal",
    capacity: 90,
    price: 11400,
    originalPrice: 14250,
    salePrice: 11400,
    onSale: true,
    slug: "90-litre-garbage-bin-wheels-handle-pedal",
    description: "Premium 90-litre garbage bin with wheels, handle, and foot pedal. Maximum convenience and hygiene.",
    features: [
      "90-litre capacity",
      "Wheels, handle & foot pedal",
      "Premium convenience",
      "Hands-free operation",
      "Easy mobility"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal.jpg",
    images: [
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal1.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal2.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal3.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal4.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal5.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal6.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal7.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal8.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal9.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal10.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal11.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },

  // BINS - 90L Hexagonal Dustbin
  {
    id: "bin-90l-hexagonal",
    name: "90 Litre Hexagonal Dustbin",
    capacity: 90,
    price: 6240,
    originalPrice: 7800,
    salePrice: 6240,
    onSale: true,
    slug: "90-litre-hexagonal-dustbin",
    description: "Stylish 90-litre hexagonal dustbin with unique design. Perfect for modern spaces.",
    features: [
      "90-litre capacity",
      "Unique hexagonal design",
      "Stylish appearance",
      "Durable construction",
      "Space-efficient"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Hexagonal Dustbin.jpg",
    images: [
      "/bins/90litre Hexagonal Dustbin.jpg",
      "/bins/90litre Hexagonal Dustbin1.jpg",
      "/bins/90litre Hexagonal Dustbin2.jpg",
      "/bins/90litre Hexagonal Dustbin3.jpg",
      "/bins/90litre Hexagonal Dustbin4.jpg"
    ],
    category: "bins",
    subcategory: "Dustbins"
  },

  // BINS - 90L Round Dustbin
  {
    id: "bin-90l-round",
    name: "90 Litre Round Dustbin",
    capacity: 90,
    price: 5960,
    originalPrice: 7450,
    salePrice: 5960,
    onSale: true,
    slug: "90-litre-round-dustbin",
    description: "Classic 90-litre round dustbin. Simple, effective, and durable waste management solution.",
    features: [
      "90-litre capacity",
      "Classic round design",
      "Simple and effective",
      "Durable construction",
      "Easy to clean"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Round Dustbin.jpg",
    images: [
      "/bins/90litre Round Dustbin.jpg",
      "/bins/90litre Round Dustbin1.jpg",
      "/bins/90litre Round Dustbin2.jpg",
      "/bins/90litre Round Dustbin3.jpg"
    ],
    category: "bins",
    subcategory: "Dustbins"
  },

  // BINS - 100L Standard Cylindrical Bin
  {
    id: "bin-100l-cylindrical",
    name: "100 Litre Standard Cylindrical Bin",
    capacity: 100,
    price: 6560,
    originalPrice: 8200,
    salePrice: 6560,
    onSale: true,
    slug: "100-litre-standard-cylindrical-bin",
    description: "100-litre standard cylindrical bin for waste management. Durable and efficient.",
    features: [
      "100-litre capacity",
      "Standard cylindrical design",
      "Durable construction",
      "Easy to clean",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/100l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/100l Standard Cylindrical Tank.jpg",
      "/bins/100l Standard Cylindrical Tank5.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // BINS - 120L Standard Cylindrical Bin
  {
    id: "bin-120l-cylindrical",
    name: "120 Litre Standard Cylindrical Bin",
    capacity: 120,
    price: 10000,
    originalPrice: 12500,
    salePrice: 10000,
    onSale: true,
    slug: "120-litre-standard-cylindrical-bin",
    description: "120-litre standard cylindrical bin for waste management. Durable and efficient.",
    features: [
      "120-litre capacity",
      "Standard cylindrical design",
      "Durable construction",
      "Easy to clean",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/120l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/120l Standard Cylindrical Tank.jpg",
      "/bins/120l Standard Cylindrical Tank1.jpg",
      "/bins/120l Standard Cylindrical Tank2.jpg",
      "/bins/120l Standard Cylindrical Tank3.jpg",
      "/bins/120l Standard Cylindrical Tank4.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // BINS - 180L Standard Cylindrical Bin
  {
    id: "bin-180l-cylindrical",
    name: "180 Litre Standard Cylindrical Bin",
    capacity: 180,
    price: 13200,
    originalPrice: 16500,
    salePrice: 13200,
    onSale: true,
    slug: "180-litre-standard-cylindrical-bin",
    description: "180-litre standard cylindrical bin for waste management. Durable and efficient.",
    features: [
      "180-litre capacity",
      "Standard cylindrical design",
      "Durable construction",
      "Easy to clean",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/180l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/180l Standard Cylindrical Tank.jpg",
      "/bins/180l Standard Cylindrical Tank1.jpg",
      "/bins/180l Standard Cylindrical Tank3.jpg",
      "/bins/180l Standard Cylindrical Tank4.jpg",
      "/bins/180l Standard Cylindrical Tank5.jpg",
      "/bins/180l Standard Cylindrical Tank6.jpg",
      "/bins/180l Standard Cylindrical Tank7.jpg",
      "/bins/180l Standard Cylindrical Tank8.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // BINS - 240L Standard Cylindrical Bin
  {
    id: "bin-240l-cylindrical",
    name: "240 Litre Standard Cylindrical Bin",
    capacity: 240,
    price: 17200,
    originalPrice: 21500,
    salePrice: 17200,
    onSale: true,
    slug: "240-litre-standard-cylindrical-bin",
    description: "240-litre standard cylindrical bin for waste management. Durable and efficient.",
    features: [
      "240-litre capacity",
      "Standard cylindrical design",
      "Durable construction",
      "Easy to clean",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/240l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/240l Standard Cylindrical Tank.jpg",
      "/bins/240l Standard Cylindrical Tank1.jpg",
      "/bins/240l Standard Cylindrical Tank2.jpg",
      "/bins/240l Standard Cylindrical Tank3.jpg",
      "/bins/240l Standard Cylindrical Tank4.jpg",
      "/bins/240l Standard Cylindrical Tank5.jpg",
      "/bins/240l Standard Cylindrical Tank6.jpg",
      "/bins/240l Standard Cylindrical Tank7.jpg",
      "/bins/240l Standard Cylindrical Tank8.jpg",
      "/bins/240l Standard Cylindrical Tank9.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // BINS - 360L Standard Cylindrical Bin
  {
    id: "bin-360l-cylindrical",
    name: "360 Litre Standard Cylindrical Bin",
    capacity: 360,
    price: 20240,
    originalPrice: 25300,
    salePrice: 20240,
    onSale: true,
    slug: "360-litre-standard-cylindrical-bin",
    description: "360-litre standard cylindrical bin for waste management. Durable and efficient.",
    features: [
      "360-litre capacity",
      "Standard cylindrical design",
      "Durable construction",
      "Easy to clean",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/360l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/360l Standard Cylindrical Tank.jpg",
      "/bins/360l Standard Cylindrical Tank1.jpg",
      "/bins/360l Standard Cylindrical Tank2.jpg",
      "/bins/360l Standard Cylindrical Tank3.jpg",
      "/bins/360l Standard Cylindrical Tank4.jpg",
      "/bins/360l Standard Cylindrical Tank5.jpg",
      "/bins/360l Standard Cylindrical Tank6.jpg",
      "/bins/360l Standard Cylindrical Tank7.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // BINS - 750L Garbage Bin
  {
    id: "bin-750l-wheels",
    name: "750 Litre Garbage Bin with Wheels",
    capacity: 750,
    price: 40400,
    originalPrice: 50500,
    salePrice: 40400,
    onSale: true,
    slug: "750-litre-garbage-bin-wheels",
    description: "Large 750-litre garbage bin with wheels for easy mobility. Ideal for commercial and institutional use.",
    features: [
      "750-litre capacity",
      "Wheels for easy mobility",
      "Commercial grade",
      "Durable construction",
      "Easy to empty"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/750litre Garbage Bin with Wheels.jpg",
    images: [
      "/bins/750litre Garbage Bin with Wheels.jpg",
      "/bins/750litre Garbage Bin with Wheels1.jpg",
      "/bins/750litre Garbage Bin with Wheels2.jpg",
      "/bins/750litre Garbage Bin with Wheels3.jpg",
      "/bins/750litre Garbage Bin with Wheels4.jpg",
      "/bins/750litre Garbage Bin with Wheels5.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },

  // LIFESTYLE - 60L TopKool Cooler Box
  {
    id: "cooler-60l",
    name: "TopKool Cooler Box — 60 Litres",
    capacity: 60,
    price: 8720,
    originalPrice: 10900,
    salePrice: 8720,
    onSale: true,
    slug: "topkool-cooler-box-60-litres",
    description: "60-litre cooler box for keeping beverages and food cold. Perfect for outdoor events and picnics.",
    features: [
      "60-litre capacity",
      "Excellent insulation",
      "Durable construction",
      "Easy to carry",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
    images: [
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_3-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_4-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_5-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_4-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_5-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_1-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_3-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_5-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Cooler Boxes"
  },

  // LIFESTYLE - 80L TopKool Cooler Box
  {
    id: "cooler-80l",
    name: "TopKool Cooler Box — 80 Litres",
    capacity: 80,
    price: 13280,
    originalPrice: 16600,
    salePrice: 13280,
    onSale: true,
    slug: "topkool-cooler-box-80-litres",
    description: "80-litre cooler box for keeping beverages and food cold. Perfect for outdoor events and picnics.",
    features: [
      "80-litre capacity",
      "Excellent insulation",
      "Durable construction",
      "Easy to carry",
      "UV resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_1-100x100.jpg",
    images: [
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_5-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Cooler Boxes"
  },

  // LIFESTYLE - Large Round Beige Planter Pot
  {
    id: "planter-large-round-beige",
    name: "Large Round Beige Planter Pot",
    price: 3600,
    originalPrice: 4500,
    salePrice: 3600,
    onSale: true,
    slug: "large-round-beige-planter-pot",
    description: "Elegant large round planter pot in beige finish. Perfect for gardens, patios, and indoor spaces.",
    features: [
      "Large capacity for plants",
      "Elegant beige finish",
      "Durable construction",
      "UV resistant",
      "Drainage holes"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-500x500.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // LIFESTYLE - Large Square V Planter
  {
    id: "planter-large-square-v",
    name: "Large Square V Planter",
    price: 3600,
    originalPrice: 4500,
    salePrice: 3600,
    onSale: true,
    slug: "large-square-v-planter",
    description: "Modern large square V planter with sleek design. Perfect for contemporary spaces.",
    features: [
      "Large capacity for plants",
      "Modern square design",
      "Durable construction",
      "UV resistant",
      "Drainage holes"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Square V/LACPLNTS28_Charcoal-Grey_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Square V/LACPLNTS28_Charcoal-Grey_1-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_Grey_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // LIFESTYLE - Rectangular Trough Planter
  {
    id: "planter-rectangular-trough",
    name: "Rectangular Trough Planter",
    price: 3600,
    originalPrice: 4500,
    salePrice: 3600,
    onSale: true,
    slug: "rectangular-trough-planter",
    description: "Elegant rectangular trough planter for gardens and outdoor spaces. Perfect for linear planting.",
    features: [
      "Rectangular trough design",
      "Large capacity for plants",
      "Durable construction",
      "UV resistant",
      "Drainage holes"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
    images: [
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_2.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // LIFESTYLE - Round Beige Planter Pot
  {
    id: "planter-round-beige",
    name: "Round Beige Planter Pot",
    price: 3600,
    originalPrice: 4500,
    salePrice: 3600,
    onSale: true,
    slug: "round-beige-planter-pot",
    description: "Elegant round planter pot in beige finish. Perfect for gardens, patios, and indoor spaces.",
    features: [
      "Round design",
      "Elegant beige finish",
      "Durable construction",
      "UV resistant",
      "Drainage holes"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_2--100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // LIFESTYLE - Round Bowl Planter Matt Finish
  {
    id: "planter-round-bowl",
    name: "Round Bowl Planter Matt Finish",
    price: 3600,
    originalPrice: 4500,
    salePrice: 3600,
    onSale: true,
    slug: "round-bowl-planter-matt-finish",
    description: "Elegant round bowl planter with matte finish. Perfect for modern indoor and outdoor spaces.",
    features: [
      "Round bowl design",
      "Matte finish",
      "Durable construction",
      "UV resistant",
      "Drainage holes"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Black_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // ROAD SAFETY & INDUSTRIAL - 1 Tonne Pallet
  {
    id: "pallet-1tonne",
    name: "1 Tonne Pallet",
    price: 8720,
    originalPrice: 10900,
    salePrice: 8720,
    onSale: true,
    slug: "1-tonne-pallet",
    description: "Heavy-duty 1-tonne pallet for industrial storage and transport. Durable and reliable.",
    features: [
      "1-tonne capacity",
      "Heavy-duty construction",
      "Industrial grade",
      "Easy to transport",
      "Durable material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/1tonne Pallet.jpg",
    images: [
      "/Road Safety & Industrial/1tonne Pallet.jpg",
      "/Road Safety & Industrial/1tonne Pallet1.jpg",
      "/Road Safety & Industrial/1tonne Pallet2.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Pallets"
  },

  // ROAD SAFETY & INDUSTRIAL - Half Tonne Pallet
  {
    id: "pallet-half-tonne",
    name: "Half Tonne Pallet",
    price: 6000,
    originalPrice: 7500,
    salePrice: 6000,
    onSale: true,
    slug: "half-tonne-pallet",
    description: "Durable half-tonne pallet for industrial storage and transport. Reliable and efficient.",
    features: [
      "Half-tonne capacity",
      "Durable construction",
      "Industrial grade",
      "Easy to transport",
      "Reliable design"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Half Tonne Pallet.jpg",
    images: [
      "/Road Safety & Industrial/Half Tonne Pallet.jpg",
      "/Road Safety & Industrial/Half Tonne Pallet1.jpg",
      "/Road Safety & Industrial/Half Tonne Pallet2.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Pallets"
  },

  // ROAD SAFETY & INDUSTRIAL - Angular Road Barrier
  {
    id: "road-barrier-angular",
    name: "Angular Road Barrier",
    price: 9600,
    originalPrice: 12000,
    salePrice: 9600,
    onSale: true,
    slug: "angular-road-barrier",
    description: "Angular road barrier for traffic control and safety. Durable and highly visible.",
    features: [
      "Angular design",
      "High visibility",
      "Traffic control",
      "Durable construction",
      "Easy to install"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Angular Road Barrier.png",
    images: [
      "/Road Safety & Industrial/Angular Road Barrier.png",
      "/Road Safety & Industrial/Angular Road Barrier1.png"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Road Barriers"
  },

  // ROAD SAFETY & INDUSTRIAL - Slimline Interlockable Road Barrier
  {
    id: "road-barrier-slimline",
    name: "Slimline Interlockable Road Barrier",
    price: 9200,
    originalPrice: 11500,
    salePrice: 9200,
    onSale: true,
    slug: "slimline-interlockable-road-barrier",
    description: "Slimline interlockable road barrier for flexible traffic control. Easy to connect and deploy.",
    features: [
      "Slimline design",
      "Interlockable system",
      "Flexible configuration",
      "High visibility",
      "Easy to deploy"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Slimline Interlockable Road Barrier.jpg",
    images: [
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier1.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier2.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier3.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Road Barriers"
  },

  // ROAD SAFETY & INDUSTRIAL - Road Traffic Triangle
  {
    id: "traffic-triangle",
    name: "Road Traffic Triangle",
    price: 2800,
    originalPrice: 3500,
    salePrice: 2800,
    onSale: true,
    slug: "road-traffic-triangle",
    description: "Road traffic triangle for temporary traffic control. Essential for road safety.",
    features: [
      "High visibility",
      "Foldable design",
      "Easy to deploy",
      "Road safety compliant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Road Traffic Triangle.png",
    images: [
      "/Road Safety & Industrial/Road Traffic Triangle.png"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Traffic Control"
  },

  // SANITATION - 100L Handwash Basin
  {
    id: "handwash-100l",
    name: "100 Litre Handwash Basin",
    capacity: 100,
    price: 7760,
    originalPrice: 9700,
    salePrice: 7760,
    onSale: true,
    slug: "100-litre-handwash-basin",
    description: "100-litre handwash basin for public events and sanitation needs. Durable and easy to clean.",
    features: [
      "100-litre capacity",
      "Easy to clean",
      "Durable construction",
      "Portable design",
      "Hygienic"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/100litre Handwash Basin.jpg",
    images: [
      "/Sanitation/100litre Handwash Basin.jpg",
      "/Sanitation/100litre Handwash Basin - Copy.jpg",
      "/Sanitation/100litre Handwash Basin1.jpg",
      "/Sanitation/100litre Handwash Basin1 - Copy.jpg",
      "/Sanitation/100litre Handwash Basin2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Handwash Basins"
  },

  // SANITATION - 115cm PE Manhole
  {
    id: "manhole-115cm",
    name: "115cm PE Manhole",
    price: 18400,
    originalPrice: 23000,
    salePrice: 18400,
    onSale: true,
    slug: "115cm-pe-manhole",
    description: "115cm PE manhole for underground access. Durable and corrosion-resistant.",
    features: [
      "115cm diameter",
      "Corrosion resistant",
      "Durable construction",
      "Easy to install",
      "Long-lasting"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/115cm PE Manhole.jpg",
    images: [
      "/Sanitation/115cm PE Manhole.jpg",
      "/Sanitation/115cm PE Manhole1.jpg",
      "/Sanitation/115cm PE Manhole3.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },

  // SANITATION - 140cm PE Manhole
  {
    id: "manhole-140cm",
    name: "140cm PE Manhole",
    price: 24800,
    originalPrice: 31000,
    salePrice: 24800,
    onSale: true,
    slug: "140cm-pe-manhole",
    description: "140cm PE manhole for larger underground access. Enhanced durability for heavy traffic areas.",
    features: [
      "140cm diameter",
      "Heavy-duty construction",
      "Corrosion resistant",
      "Traffic rated",
      "Easy access"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/140cm PE Manhole.jpg",
    images: [
      "/Sanitation/140cm PE Manhole.jpg",
      "/Sanitation/140cm PE Manhole1.jpg",
      "/Sanitation/140cm PE Manhole2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },

  // SANITATION - 170cm PE Manhole
  {
    id: "manhole-170cm",
    name: "170cm PE Manhole",
    price: 27600,
    originalPrice: 34500,
    salePrice: 27600,
    onSale: true,
    slug: "170cm-pe-manhole",
    description: "170cm PE manhole for major infrastructure projects. Maximum durability and access space.",
    features: [
      "170cm diameter",
      "Maximum access space",
      "Heavy traffic rated",
      "Corrosion resistant",
      "Industrial applications"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/170cm PE Manhole.jpg",
    images: [
      "/Sanitation/170cm PE Manhole.jpg",
      "/Sanitation/170cm PE Manhole1.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },

  // SANITATION - 190cm PE Manhole
  {
    id: "manhole-190cm",
    name: "190cm PE Manhole",
    price: 33120,
    originalPrice: 41400,
    salePrice: 33120,
    onSale: true,
    slug: "190cm-pe-manhole",
    description: "190cm PE manhole for the largest infrastructure requirements. Premium heavy-duty construction.",
    features: [
      "190cm diameter",
      "Premium heavy-duty",
      "Maximum durability",
      "Corrosion resistant",
      "Industrial applications"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/190cm PE Manhole1.jpg",
    images: [
      "/Sanitation/190cm PE Manhole1.jpg",
      "/Sanitation/190cm PE Manhole2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },

  // SANITATION - Pit Latrine Slab
  {
    id: "pit-latrine-slab",
    name: "Pit Latrine Slab",
    price: 6800,
    originalPrice: 8500,
    salePrice: 6800,
    onSale: true,
    slug: "pit-latrine-slab",
    description: "Durable pit latrine slab for sanitation infrastructure. Strong and hygienic solution.",
    features: [
      "Strong construction",
      "Hygienic design",
      "Durable material",
      "Easy to install",
      "Long-lasting"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/Pit Latrine Slab.jpg",
    images: [
      "/Sanitation/Pit Latrine Slab.jpg"
    ],
    category: "Sanitation",
    subcategory: "Latrine Slabs"
  },
  {
    id: "standard-200l",
    name: "TopTank Standard Cylindrical Tank — 200 Litres",
    capacity: 200,
    price: 3900,
    originalPrice: 3900,
    salePrice: 3500,
    onSale: true,
    slug: "toptank-standard-cylindrical-tank-200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/120l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/120l Standard Cylindrical Tank.jpg",
      "/bins/120l Standard Cylindrical Tank1.jpg",
      "/bins/120l Standard Cylindrical Tank2.jpg",
      "/bins/120l Standard Cylindrical Tank3.jpg",
      "/bins/120l Standard Cylindrical Tank4.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "standard-230l",
    name: "TopTank Standard Cylindrical Tank — 230 Litres",
    capacity: 230,
    price: 4250,
    slug: "toptank-standard-cylindrical-tank-230-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/180l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/180l Standard Cylindrical Tank.jpg",
      "/bins/180l Standard Cylindrical Tank1.jpg",
      "/bins/180l Standard Cylindrical Tank3.jpg",
      "/bins/180l Standard Cylindrical Tank4.jpg",
      "/bins/180l Standard Cylindrical Tank5.jpg",
      "/bins/180l Standard Cylindrical Tank6.jpg",
      "/bins/180l Standard Cylindrical Tank7.jpg",
      "/bins/180l Standard Cylindrical Tank8.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "standard-300l",
    name: "TopTank Standard Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 5750,
    slug: "toptank-standard-cylindrical-tank-300-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/240l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/240l Standard Cylindrical Tank.jpg",
      "/bins/240l Standard Cylindrical Tank1.jpg",
      "/bins/240l Standard Cylindrical Tank2.jpg",
      "/bins/240l Standard Cylindrical Tank3.jpg",
      "/bins/240l Standard Cylindrical Tank4.jpg",
      "/bins/240l Standard Cylindrical Tank5.jpg",
      "/bins/240l Standard Cylindrical Tank6.jpg",
      "/bins/240l Standard Cylindrical Tank7.jpg",
      "/bins/240l Standard Cylindrical Tank8.jpg",
      "/bins/240l Standard Cylindrical Tank9.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "standard-500l",
    name: "TopTank Standard Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 6900,
    slug: "toptank-standard-cylindrical-tank-500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/360l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/360l Standard Cylindrical Tank.jpg",
      "/bins/360l Standard Cylindrical Tank1.jpg",
      "/bins/360l Standard Cylindrical Tank2.jpg",
      "/bins/360l Standard Cylindrical Tank3.jpg",
      "/bins/360l Standard Cylindrical Tank4.jpg",
      "/bins/360l Standard Cylindrical Tank5.jpg",
      "/bins/360l Standard Cylindrical Tank6.jpg",
      "/bins/360l Standard Cylindrical Tank7.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },

  // TANKS - Deluxe Cylindrical Tanks
  {
    id: "deluxe-200l",
    name: "TopTank Vertical Cylindrical Tank — 200 Litres",
    capacity: 200,
    price: 4800,
    slug: "toptank-deluxe-cylindrical-tank-200-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-300l",
    name: "TopTank Vertical Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 5400,
    slug: "toptank-deluxe-cylindrical-tank-300-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-500l",
    name: "TopTank Vertical Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 9750,
    slug: "toptank-deluxe-cylindrical-tank-500-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-1000l",
    name: "TopTank Vertical Cylindrical Tank — 1,000 Litres",
    capacity: 1000,
    price: 15500,
    originalPrice: 15500,
    salePrice: 8500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-1000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-1500l",
    name: "TopTank Vertical Cylindrical Tank — 1,500 Litres",
    capacity: 1500,
    price: 23000,
    slug: "toptank-deluxe-cylindrical-tank-1500-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-1900l",
    name: "TopTank Vertical Cylindrical Tank — 1,900 Litres",
    capacity: 1900,
    price: 27000,
    slug: "toptank-deluxe-cylindrical-tank-1900-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-2000l",
    name: "TopTank Vertical Cylindrical Tank — 2,000 Litres",
    capacity: 2000,
    price: 28700,
    originalPrice: 28700,
    salePrice: 13500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-2000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-2300l",
    name: "TopTank Vertical Cylindrical Tank — 2,300 Litres",
    capacity: 2300,
    price: 31600,
    slug: "toptank-deluxe-cylindrical-tank-2300-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-2500l",
    name: "TopTank Vertical Cylindrical Tank — 2,500 Litres",
    capacity: 2500,
    price: 21120,
    originalPrice: 26400,
    salePrice: 21120,
    onSale: true,
    slug: "toptank-vertical-cylindrical-tank-2500-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical",
    priority: 1
  },
  {
    id: "deluxe-3000l",
    name: "TopTank Vertical Cylindrical Tank — 3,000 Litres",
    capacity: 3000,
    price: 41900,
    originalPrice: 41900,
    salePrice: 17500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-3000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-3200l",
    name: "TopTank Vertical Cylindrical Tank — 3,200 Litres",
    capacity: 3200,
    price: 46000,
    slug: "toptank-deluxe-cylindrical-tank-3200-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-3500l",
    name: "TopTank Vertical Cylindrical Tank — 3,500 Litres",
    capacity: 3500,
    price: 48800,
    slug: "toptank-deluxe-cylindrical-tank-3500-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-4200l",
    name: "TopTank Vertical Cylindrical Tank — 4,200 Litres",
    capacity: 4200,
    price: 59200,
    slug: "toptank-deluxe-cylindrical-tank-4200-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-4600l",
    name: "TopTank Vertical Cylindrical Tank — 4,600 Litres",
    capacity: 4600,
    price: 67200,
    slug: "toptank-deluxe-cylindrical-tank-4600-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-5000l",
    name: "TopTank Vertical Cylindrical Tank — 5,000 Litres",
    capacity: 5000,
    price: 74500,
    originalPrice: 74500,
    salePrice: 29500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-5000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-6000l",
    name: "TopTank Vertical Cylindrical Tank — 6,000 Litres",
    capacity: 6000,
    price: 90200,
    originalPrice: 90200,
    salePrice: 33500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-6000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-7500l",
    name: "TopTank Vertical Cylindrical Tank — 7,500 Litres",
    capacity: 7500,
    price: 110500,
    slug: "toptank-deluxe-cylindrical-tank-7500-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-8000l",
    name: "TopTank Vertical Cylindrical Tank — 8,000 Litres",
    capacity: 8000,
    price: 121500,
    originalPrice: 121500,
    salePrice: 42500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-8000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-10000l",
    name: "TopTank Vertical Cylindrical Tank — 10,000 Litres",
    capacity: 10000,
    price: 155250,
    originalPrice: 155250,
    salePrice: 59500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-10000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-12000l",
    name: "TopTank Vertical Cylindrical Tank — 12,000 Litres",
    capacity: 12000,
    price: 211000,
    slug: "toptank-deluxe-cylindrical-tank-12000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-15000l",
    name: "TopTank Vertical Cylindrical Tank — 15,000 Litres",
    capacity: 15000,
    price: 274500,
    slug: "toptank-deluxe-cylindrical-tank-15000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },
  {
    id: "deluxe-24000l",
    name: "TopTank Vertical Cylindrical Tank — 24,000 Litres",
    capacity: 24000,
    price: 471500,
    originalPrice: 471500,
    salePrice: 148500,
    onSale: true,
    slug: "toptank-deluxe-cylindrical-tank-24000-litres",
    description: "Premium deluxe cylindrical tank with enhanced durability and modern design. Perfect for residential and commercial water storage needs.",
    features: [
      "Premium deluxe construction",
      "Enhanced durability",
      "Modern sleek design",
      "Triple-layer technology",
      "UV protected",
      "Food-grade material"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/deluxe cylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Deluxe Cylindrical"
  },

  // TANKS - Vertical Cylindrical Tanks
  {
    id: "vertical-100l",
    name: "TopTank Vertical Cylindrical Tank — 100 Litres",
    capacity: 100,
    price: 3500,
    slug: "toptank-vertical-cylindrical-tank-100-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "100-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-200l",
    name: "TopTank Vertical Cylindrical Tank — 200 Litres",
    capacity: 200,
    price: 5200,
    slug: "toptank-vertical-cylindrical-tank-200-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "200-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-300l",
    name: "TopTank Vertical Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 7450,
    slug: "toptank-vertical-cylindrical-tank-300-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "300-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-500l",
    name: "TopTank Vertical Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 10300,
    slug: "toptank-vertical-cylindrical-tank-500-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "500-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-1000l",
    name: "TopTank Vertical Cylindrical Tank — 1,000 Litres",
    capacity: 1000,
    price: 16500,
    slug: "toptank-vertical-cylindrical-tank-1000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "1,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-2000l",
    name: "TopTank Vertical Cylindrical Tank — 2,000 Litres",
    capacity: 2000,
    price: 32500,
    slug: "toptank-vertical-cylindrical-tank-2000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "2,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-3000l",
    name: "TopTank Vertical Cylindrical Tank — 3,000 Litres",
    capacity: 3000,
    price: 57500,
    slug: "toptank-vertical-cylindrical-tank-3000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "3,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-5000l",
    name: "TopTank Vertical Cylindrical Tank — 5,000 Litres",
    capacity: 5000,
    price: 92000,
    slug: "toptank-vertical-cylindrical-tank-5000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "5,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-8000l",
    name: "TopTank Vertical Cylindrical Tank — 8,000 Litres",
    capacity: 8000,
    price: 138000,
    slug: "toptank-vertical-cylindrical-tank-8000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "8,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-10000l",
    name: "TopTank Vertical Cylindrical Tank — 10,000 Litres",
    capacity: 10000,
    price: 165000,
    slug: "toptank-vertical-cylindrical-tank-10000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "10,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-15000l",
    name: "TopTank Vertical Cylindrical Tank — 15,000 Litres",
    capacity: 15000,
    price: 247500,
    slug: "toptank-vertical-cylindrical-tank-15000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "15,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },
  {
    id: "vertical-24000l",
    name: "TopTank Vertical Cylindrical Tank — 24,000 Litres",
    capacity: 24000,
    price: 471500,
    slug: "toptank-vertical-cylindrical-tank-24000-litres",
    description: "Vertical cylindrical tank designed for efficient water storage. Durable and space-saving design for residential and commercial use.",
    features: [
      "24,000-litre capacity",
      "Vertical cylindrical design",
      "Space-efficient",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Orange",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
    images: [
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank same.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1.jpeg",
      "/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank1 - Copy.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Orange_2-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_1-99.jpeg",
      "/TANKS/verticalcylindrical tank/TopTank_Tanks-Blue_2-99-100x100.jpeg"
    ],
    category: "TANKS",
    subcategory: "Vertical Cylindrical"
  },

  // TANKS - Nestable Tanks
  {
    id: "nestable-100l",
    name: "TopTank Nestable Tank — 100 Litres",
    capacity: 100,
    price: 3500,
    slug: "toptank-nestable-tank-100-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-200l",
    name: "TopTank Nestable Tank — 200 Litres",
    capacity: 200,
    price: 5200,
    slug: "toptank-nestable-tank-200-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-300l",
    name: "TopTank Nestable Tank — 300 Litres",
    capacity: 300,
    price: 7450,
    slug: "toptank-nestable-tank-300-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-500l",
    name: "TopTank Nestable Tank — 500 Litres",
    capacity: 500,
    price: 10300,
    slug: "toptank-nestable-tank-500-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-1000l",
    name: "TopTank Nestable Tank — 1,000 Litres",
    capacity: 1000,
    price: 16500,
    slug: "toptank-nestable-tank-1000-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },
  {
    id: "nestable-2000l",
    name: "TopTank Nestable Tank — 2,000 Litres",
    capacity: 2000,
    price: 32500,
    slug: "toptank-nestable-tank-2000-litres",
    description: "Nestable tank design for efficient storage and transportation. Stackable when empty for space savings.",
    features: [
      "Nestable design for space efficiency",
      "Stackable when empty",
      "Easy transportation",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Nestable tank/Nestable Tank.jpg",
    images: ["/TANKS/Nestable tank/Nestable Tank.jpg"],
    category: "TANKS",
    subcategory: "Nestable"
  },

  // TANKS - Roller Drum
  {
    id: "roller-50l",
    name: "TopTank Roller Drum — 50 Litres",
    capacity: 50,
    price: 4500,
    slug: "toptank-roller-drum-50-litres",
    description: "Roller drum designed for easy mobility and storage. Perfect for water transport and temporary storage.",
    features: [
      "50-litre capacity",
      "Roller design for mobility",
      "Easy to transport",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },
  {
    id: "roller-75l",
    name: "TopTank Roller Drum — 75 Litres",
    capacity: 75,
    price: 5500,
    slug: "toptank-roller-drum-75-litres",
    description: "Roller drum designed for easy mobility and storage. Perfect for water transport and temporary storage.",
    features: [
      "75-litre capacity",
      "Roller design for mobility",
      "Easy to transport",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },
  {
    id: "roller-100l",
    name: "TopTank Roller Drum — 100 Litres",
    capacity: 100,
    price: 6500,
    slug: "toptank-roller-drum-100-litres",
    description: "Roller drum designed for easy mobility and storage. Perfect for water transport and temporary storage.",
    features: [
      "100-litre capacity",
      "Roller design for mobility",
      "Easy to transport",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
    images: [
      "/TANKS/Roller Drum/LACDRUM02_Black_1-100x100.jpg",
      "/TANKS/Roller Drum/LACDRUM02_Black_2-100x100.jpg",
      "/TANKS/Roller Drum/rollerdrum.jpg"
    ],
    category: "TANKS",
    subcategory: "Roller Drum"
  },

  // TANKS - Rectangular Loft Tanks
  {
    id: "loft-230l",
    name: "TopTank Rectangular Loft Tank — 230 Litres",
    capacity: 230,
    price: 7200,
    slug: "toptank-rectangular-loft-tank-230-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-300l",
    name: "TopTank Rectangular Loft Tank — 300 Litres",
    capacity: 300,
    price: 8000,
    slug: "toptank-rectangular-loft-tank-300-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-400l",
    name: "TopTank Rectangular Loft Tank — 400 Litres",
    capacity: 400,
    price: 9650,
    slug: "toptank-rectangular-loft-tank-400-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-460l",
    name: "TopTank Rectangular Loft Tank — 460 Litres",
    capacity: 460,
    price: 11500,
    slug: "toptank-rectangular-loft-tank-460-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-500l",
    name: "TopTank Rectangular Loft Tank — 500 Litres",
    capacity: 500,
    price: 12000,
    slug: "toptank-rectangular-loft-tank-500-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-690l",
    name: "TopTank Rectangular Loft Tank — 690 Litres",
    capacity: 690,
    price: 14000,
    slug: "toptank-rectangular-loft-tank-690-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-700l",
    name: "TopTank Rectangular Loft Tank — 700 Litres",
    capacity: 700,
    price: 14500,
    slug: "toptank-rectangular-loft-tank-700-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-850l",
    name: "TopTank Rectangular Loft Tank — 850 Litres",
    capacity: 850,
    price: 16000,
    slug: "toptank-rectangular-loft-tank-850-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-920l",
    name: "TopTank Rectangular Loft Tank — 920 Litres",
    capacity: 920,
    price: 16500,
    slug: "toptank-rectangular-loft-tank-920-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },
  {
    id: "loft-1000l",
    name: "TopTank Rectangular Loft Tank — 1,000 Litres",
    capacity: 1000,
    price: 17000,
    slug: "toptank-rectangular-loft-tank-1000-litres",
    description: "Loft tanks are designed for storing water or any food-grade chemicals within narrow roof areas or attics.",
    features: [
      "Perfect for narrow roof spaces",
      "Rectangular design for space efficiency",
      "Food-grade material",
      "Easy installation in attics",
      "Compact footprint"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
    images: [
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank 1.jpg",
      "/TANKS/Rectangular Loft Tank/Rectangular Loft Tank2.jpg"
    ],
    category: "TANKS",
    subcategory: "Rectangular Loft"
  },

  // TANKS - Underground Spherical Tanks
  {
    id: "spherical-1000l",
    name: "TopTank Underground Spherical Tank — 1,000 Litres",
    capacity: 1000,
    price: 28500,
    slug: "toptank-underground-spherical-tank-1000-litres",
    description: "Underground spherical tank designed for efficient underground water storage. Durable and space-saving.",
    features: [
      "Underground installation",
      "Spherical design for strength",
      "Space-efficient",
      "Durable construction",
      "UV protected"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-2000l",
    name: "TopTank Underground Spherical Tank — 2,000 Litres",
    capacity: 2000,
    price: 55200,
    slug: "toptank-underground-spherical-tank-2000-litres",
    description: "Underground spherical tank designed for efficient underground water storage. Durable and space-saving.",
    features: [
      "Underground installation",
      "Spherical design for strength",
      "Space-efficient",
      "Durable construction",
      "UV protected"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-3000l",
    name: "TopTank Underground Spherical Tank — 3,000 Litres",
    capacity: 3000,
    price: 82500,
    slug: "toptank-underground-spherical-tank-3000-litres",
    description: "Underground spherical tank designed for efficient underground water storage. Durable and space-saving.",
    features: [
      "Underground installation",
      "Spherical design for strength",
      "Space-efficient",
      "Durable construction",
      "UV protected"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-5000l",
    name: "TopTank Underground Spherical Tank — 5,000 Litres",
    capacity: 5000,
    price: 138000,
    slug: "toptank-underground-spherical-tank-5000-litres",
    description: "Underground spherical tank designed for efficient underground water storage. Durable and space-saving.",
    features: [
      "Underground installation",
      "Spherical design for strength",
      "Space-saving underground storage",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },
  {
    id: "spherical-6000l",
    name: "TopTank Underground Spherical Tank — 6,000 Litres",
    capacity: 6000,
    price: 165000,
    slug: "toptank-underground-spherical-tank-6000-litres",
    description: "Underground spherical tank designed for efficient underground water storage. Durable and space-saving.",
    features: [
      "Underground installation",
      "Spherical design for strength",
      "Space-saving underground storage",
      "Durable construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
    images: [
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK3-scaled-1.jpg",
      "/TANKS/Underground Spherical Tank/SPHERICAL-UNDERGROUND-TANK_2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Underground Spherical"
  },

  // TANKS - Horizontal Septic Tanks
  {
    id: "septic-2000l",
    name: "TopTank Horizontal Septic Tank — 2,000 Litres",
    capacity: 2000,
    price: 55200,
    slug: "toptank-horizontal-septic-tank-2000-litres",
    description: "Horizontal septic tank designed for efficient waste management. Durable and long-lasting solution for sanitation needs.",
    features: [
      "Horizontal design for space efficiency",
      "Efficient waste treatment",
      "Durable construction",
      "UV resistant",
      "Easy installation"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-3000l",
    name: "TopTank Horizontal Septic Tank — 3,000 Litres",
    capacity: 3000,
    price: 75000,
    slug: "toptank-horizontal-septic-tank-3000-litres",
    description: "Horizontal septic tank designed for efficient waste management. Durable and long-lasting solution for sanitation needs.",
    features: [
      "Horizontal design for space efficiency",
      "Efficient waste treatment",
      "Durable construction",
      "UV resistant",
      "Easy installation"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-5000l",
    name: "TopTank Horizontal Septic Tank — 5,000 Litres",
    capacity: 5000,
    price: 138000,
    slug: "toptank-horizontal-septic-tank-5000-litres",
    description: "Horizontal septic tank designed for efficient waste management. Durable and long-lasting solution for sanitation needs.",
    features: [
      "Horizontal design for space efficiency",
      "Efficient waste treatment",
      "Durable construction",
      "UV resistant",
      "Easy installation"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },
  {
    id: "septic-6000l",
    name: "TopTank Horizontal Septic Tank — 6,000 Litres",
    capacity: 6000,
    price: 165000,
    slug: "toptank-horizontal-septic-tank-6000-litres",
    description: "Horizontal septic tank designed for efficient waste management. Durable and long-lasting solution for sanitation needs.",
    features: [
      "Horizontal design for space efficiency",
      "Efficient waste treatment",
      "Durable construction",
      "UV resistant",
      "Easy installation"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
    images: [
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_1-scaled-1.jpg",
      "/TANKS/Horizontal Septic Tank/SEPTIC-TANK_3-scaled-1-1000x1000.jpg"
    ],
    category: "TANKS",
    subcategory: "Horizontal Septic"
  },

  // TANKS - Conical Hopper Tanks
  {
    id: "conical-1000l",
    name: "TopTank Conical Hopper Tank — 1,000 Litres",
    capacity: 1000,
    price: 25000,
    slug: "toptank-conical-hopper-tank-1000-litres",
    description: "Conical hopper tank designed for easy drainage and material handling. Perfect for industrial and agricultural applications.",
    features: [
      "Conical bottom for complete drainage",
      "Easy material handling",
      "Industrial-grade construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: ["/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-1500l",
    name: "TopTank Conical Hopper Tank — 1,500 Litres",
    capacity: 1500,
    price: 35000,
    slug: "toptank-conical-hopper-tank-1500-litres",
    description: "Conical hopper tank designed for easy drainage and material handling. Perfect for industrial and agricultural applications.",
    features: [
      "Conical bottom for complete drainage",
      "Easy material handling",
      "Industrial-grade construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: ["/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-3000l",
    name: "TopTank Conical Hopper Tank — 3,000 Litres",
    capacity: 3000,
    price: 57500,
    slug: "toptank-conical-hopper-tank-3000-litres",
    description: "Conical hopper tank designed for easy drainage and material handling. Perfect for industrial and agricultural applications.",
    features: [
      "Conical bottom for complete drainage",
      "Easy material handling",
      "Industrial-grade construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: ["/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },
  {
    id: "conical-5000l",
    name: "TopTank Conical Hopper Tank — 5,000 Litres",
    capacity: 5000,
    price: 92000,
    slug: "toptank-conical-hopper-tank-5000-litres",
    description: "Conical hopper tank designed for easy drainage and material handling. Perfect for industrial and agricultural applications.",
    features: [
      "Conical bottom for complete drainage",
      "Easy material handling",
      "Industrial-grade construction",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg",
    images: ["/TANKS/Conical Hopper Tank/canonical-500x500-1.jpg"],
    category: "TANKS",
    subcategory: "Conical Hopper"
  },

  // LIFESTYLE - 30L TopKool Cooler Box
  {
    id: "cooler-30l",
    name: "TopKool Cooler Box — 30 Litres",
    capacity: 30,
    price: 8000,
    slug: "topkool-cooler-box-30-litres",
    description: "Compact 30-litre cooler box perfect for personal use and small gatherings. Keeps drinks cold for hours.",
    features: [
      "30-litre capacity",
      "Compact design",
      "Excellent insulation",
      "Durable construction",
      "Easy to carry"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Various colors available",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
    images: ["/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg"],
    category: "Lifestyle",
    subcategory: "Cooler Boxes"
  },
  // LIFESTYLE - 60L TopKool Cooler Box
  {
    id: "cooler-60l",
    name: "TopKool Cooler Box — 60 Litres",
    capacity: 60,
    price: 4500,
    slug: "topkool-cooler-box-60-litres",
    description: "Premium 60-litre cooler box perfect for outdoor activities, picnics, and events. Keeps drinks cold for extended periods.",
    features: [
      "60-litre capacity",
      "Excellent insulation",
      "Available in multiple colors (Red, Green, Yellow)",
      "Durable construction",
      "Easy to carry"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Red/Green/Yellow",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
    images: [
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_3-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_4-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_5-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_4-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Green_5-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_1-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_2-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_3-100x100.jpg",
      "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Yellow_60L_5-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Cooler Boxes"
  },
  // LIFESTYLE - 80L TopKool Cooler Box
  {
    id: "cooler-80l",
    name: "TopKool Cooler Box — 80 Litres",
    capacity: 80,
    price: 5500,
    slug: "topkool-cooler-box-80-litres",
    description: "Large 80-litre cooler box for extended outdoor activities. Superior cooling performance for large groups.",
    features: [
      "80-litre capacity",
      "Superior insulation",
      "Available in multiple colors (Blue, Green, Orange, Red, Yellow)",
      "Heavy-duty construction",
      "Easy transport"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue/Green/Orange/Red/Yellow",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_1-100x100.jpg",
    images: [
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Blue_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Green_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Orange_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Red_80L_5-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_1-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_2-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_3-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_4-100x100.jpg",
      "/Lifestyle/80litre TopKool Cooler box/LACCLBOX02_Yellow_80L_5-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Cooler Boxes"
  },
  // LIFESTYLE - Large Round Beige Planter Pot
  {
    id: "planter-large-round-beige",
    name: "Large Round Beige Planter Pot",
    price: 2500,
    slug: "large-round-beige-planter-pot",
    description: "Elegant large round planter pot in beige finish. Perfect for gardens, patios, and indoor spaces.",
    features: [
      "Large capacity for plants",
      "Elegant beige finish",
      "Durable construction",
      "Weather resistant",
      "Available in Earth Brown"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Earth Brown",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-500x500.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopDesk School Chair
  {
    id: "school-chair",
    name: "TopDesk School Chair With Integrated Desk & Storage (Medium)",
    price: 7500,
    slug: "topdesk-school-chair-medium",
    description: "School chair with integrated desk and storage. Perfect for educational institutions and study spaces.",
    features: [
      "Integrated desk surface",
      "Built-in storage",
      "Ergonomic design",
      "Durable construction",
      "Easy to clean"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg",
    images: ["/Lifestyle/60litre TopKool Cooler box/LACCLBOX01_Red_60L_1-100x100.jpg"],
    category: "Lifestyle",
    subcategory: "Furniture"
  },
  // LIFESTYLE - TopPlanter Large Round
  {
    id: "planter-large-round",
    name: "TopPlanter Large Round – 76×76cm",
    price: 11500,
    slug: "topplanter-large-round-76x76cm",
    description: "Large round planter with 76×76cm dimensions. Perfect for gardens and outdoor spaces.",
    features: [
      "76×76cm dimensions",
      "Large capacity",
      "Durable construction",
      "Weather resistant",
      "Modern design"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_1-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_Beige_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-100x100.jpg",
      "/Lifestyle/Large Round Beige Planter Pot/LACPLNTS09_EarthBrown_2-500x500.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Large Square
  {
    id: "planter-large-square",
    name: "TopPlanter Large Square – 76×69cm",
    price: 12000,
    slug: "topplanter-large-square-76x69cm",
    description: "Large square planter with 76×69cm dimensions. Ideal for patios and outdoor areas.",
    features: [
      "76×69cm dimensions",
      "Square design",
      "Large capacity",
      "Weather resistant",
      "Modern aesthetic"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_1-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_2-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_Grey_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Large Tall Angular
  {
    id: "planter-large-tall-angular",
    name: "TopPlanter Large Tall Angular – 76×39cm",
    price: 6150,
    slug: "topplanter-large-tall-angular-76x39cm",
    description: "Large tall angular planter with 76×39cm dimensions. Perfect for corners and modern spaces.",
    features: [
      "76×39cm dimensions",
      "Tall angular design",
      "Space-efficient",
      "Weather resistant",
      "Contemporary look"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Black_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Medium Round
  {
    id: "planter-medium-round",
    name: "TopPlanter Medium Round – 61×61cm",
    price: 8950,
    slug: "topplanter-medium-round-61x61cm",
    description: "Medium round planter with 61×61cm dimensions. Perfect for gardens and balconies.",
    features: [
      "61×61cm dimensions",
      "Medium capacity",
      "Durable construction",
      "Weather resistant",
      "Classic design"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_2--100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Medium Square
  {
    id: "planter-medium-square",
    name: "TopPlanter Medium Square – 61×56cm",
    price: 8200,
    slug: "topplanter-medium-square-61x56cm",
    description: "Medium square planter with 61×56cm dimensions. Ideal for patios and decks.",
    features: [
      "61×56cm dimensions",
      "Square design",
      "Medium capacity",
      "Weather resistant",
      "Versatile placement"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_1-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_2-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Medium Tall Angular
  {
    id: "planter-medium-tall-angular",
    name: "TopPlanter Medium Tall Angular – 61×33cm",
    price: 5450,
    slug: "topplanter-medium-tall-angular-61x33cm",
    description: "Medium tall angular planter with 61×33cm dimensions. Perfect for corners and accent spaces.",
    features: [
      "61×33cm dimensions",
      "Tall angular design",
      "Compact footprint",
      "Weather resistant",
      "Modern aesthetic"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_1-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_2-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - TopPlanter Rectangular Step
  {
    id: "planter-rectangular-step",
    name: "TopPlanter Rectangular Step – 106×36×31cm",
    price: 5100,
    slug: "topplanter-rectangular-step-106x36x31cm",
    description: "Rectangular step planter with 106×36×31cm dimensions. Unique tiered design for cascading plants.",
    features: [
      "106×36×31cm dimensions",
      "Rectangular step design",
      "Tiered planting",
      "Weather resistant",
      "Space-saving"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
    images: [
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_2.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Wide Rectangular Beige Planter Box
  {
    id: "planter-wide-rectangular-beige",
    name: "Wide Rectangular Beige Planter Box – 77×89cm",
    price: 19600,
    slug: "wide-rectangular-beige-planter-box-77x89cm",
    description: "Wide rectangular beige planter box with 77×89cm dimensions. Perfect for large spaces and gardens.",
    features: [
      "77×89cm dimensions",
      "Wide rectangular design",
      "Large capacity",
      "Beige finish",
      "Weather resistant"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
    images: [
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_2.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // LIFESTYLE - Large Square V Planter
  {
    id: "planter-large-square-v",
    name: "Large Square V Planter",
    price: 3500,
    slug: "large-square-v-planter",
    description: "Elegant large square V planter with modern design. Perfect for gardens and outdoor spaces.",
    features: [
      "Large square V design",
      "Modern aesthetic",
      "Durable construction",
      "Weather resistant",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Charcoal Grey/Grey/White",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_1-100x100.jpg",
    images: [
      "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_1-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_2-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_CharcoalGrey_3-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_Grey_1-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_Grey_2-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_Grey_3-100x100.jpg",
      "/Lifestyle/Large Square V/LACPLNTS28_White_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Rectangular Trough Planter
  {
    id: "planter-rectangular-trough",
    name: "Rectangular Trough Planter",
    price: 4500,
    slug: "rectangular-trough-planter",
    description: "Rectangular trough planter perfect for linear planting arrangements. Ideal for borders and pathways.",
    features: [
      "Rectangular trough design",
      "Linear planting space",
      "Durable construction",
      "Weather resistant",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Charcoal Grey/Earth Brown/White",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
    images: [
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_1.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_2.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_3-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_Charcoal-Grey_4-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_1-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_2-100x100 (1).jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_2-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNT21_EarthBrown_4-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNTS21_White_4-100x100.jpg",
      "/Lifestyle/Rectangular Trough Planter/LACPLNTS21_White_5-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Round Beige Planter Pot
  {
    id: "planter-round-beige",
    name: "Round Beige Planter Pot",
    price: 2800,
    slug: "round-beige-planter-pot",
    description: "Elegant round planter pot in beige finish. Perfect for indoor and outdoor use.",
    features: [
      "Round design",
      "Elegant beige finish",
      "Durable construction",
      "Weather resistant",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Charcoal Grey",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_1-100x100.jpg",
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_Beige_2--100x100.jpg",
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_CharcoalGrey_1-100x100 (1).jpg",
      "/Lifestyle/Round Beige Planter Pot/LACPLNTS08_CharcoalGrey_1-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Round Bowl Planter Matt Finish
  {
    id: "planter-round-bowl-matt",
    name: "Round Bowl Planter Matt Finish",
    price: 3200,
    slug: "round-bowl-planter-matt-finish",
    description: "Round bowl planter with matt finish. Modern and elegant design for any space.",
    features: [
      "Round bowl design",
      "Matt finish",
      "Modern aesthetic",
      "Durable construction",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Black/Grey",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_1-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Beige_2-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Black_1-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Black_2-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Black_3-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Grey_1-100x100.jpg",
      "/Lifestyle/Round Bowl Planter  Matt Finish/LACPLNTS22_Grey_4-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Round Planter Pot
  {
    id: "planter-round-pot",
    name: "Round Planter Pot",
    price: 2600,
    slug: "round-planter-pot",
    description: "Classic round planter pot. Versatile and timeless design for any setting.",
    features: [
      "Classic round design",
      "Versatile styling",
      "Durable construction",
      "Weather resistant",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Black/Earth Brown/White",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_1-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Beige_2-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Black_1-100x100 (1).jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Black_1-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Black_2-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_Black_3-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_EarthBrown_1-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_EarthBrown_2-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_EarthBrown_3-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_White_1-100x100.jpg",
      "/Lifestyle/Round Planter Pot/LACPLNTS19_White_2-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Round Ribbed Planter
  {
    id: "planter-round-ribbed",
    name: "Round Ribbed Planter",
    price: 3000,
    slug: "round-ribbed-planter",
    description: "Round planter with ribbed texture. Adds visual interest to any space.",
    features: [
      "Round ribbed design",
      "Textured surface",
      "Modern aesthetic",
      "Durable construction",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Black/White",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_1-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Beige_2-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Black_1-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Black_2-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_Black_3-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_White_1-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_White_2-100x100.jpg",
      "/Lifestyle/Round Ribbed Planter/LACPLNTS23_White_3-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },
  // LIFESTYLE - Small Round Textured Cylinder Planter
  {
    id: "planter-small-textured-cylinder",
    name: "Small Round Textured Cylinder Planter",
    price: 2200,
    slug: "small-round-textured-cylinder-planter",
    description: "Small round textured cylinder planter. Compact design with textured finish.",
    features: [
      "Small cylinder design",
      "Textured surface",
      "Compact footprint",
      "Durable construction",
      "Available in multiple colors"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Beige/Black/Earth Brown",
      uvProtection: true
    },
    inStock: true,
    image: "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Beige_1-100x100.jpg",
    images: [
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Beige_1-100x100.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Beige_1.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Beige_3-100x100.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Black_2-100x100.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_Black_3-100x100.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_EarthBrown_1-100x100.jpg",
      "/Lifestyle/Small Round Textured Cylinder Planter/LACPLNTS25_EarthBrown_3-100x100.jpg"
    ],
    category: "Lifestyle",
    subcategory: "Planters"
  },

  // ROAD SAFETY & INDUSTRIAL - 1 Tonne Pallet
  {
    id: "pallet-1tonne",
    name: "1 Tonne Pallet",
    price: 10900,
    slug: "1-tonne-pallet",
    description: "Heavy-duty 1-tonne pallet for industrial and warehouse use. Designed for maximum load capacity.",
    features: [
      "1-tonne load capacity",
      "Heavy-duty construction",
      "Industrial grade",
      "Durable and long-lasting",
      "Easy to handle"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/1tonne Pallet.jpg",
    images: [
      "/Road Safety & Industrial/1tonne Pallet.jpg",
      "/Road Safety & Industrial/1tonne Pallet1.jpg",
      "/Road Safety & Industrial/1tonne Pallet2.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Pallets"
  },
  // ROAD SAFETY & INDUSTRIAL - Half Tonne Pallet
  {
    id: "pallet-half-tonne",
    name: "Half Tonne Pallet",
    price: 2200,
    slug: "half-tonne-pallet",
    description: "Versatile half-tonne pallet for various industrial applications. Lightweight yet strong.",
    features: [
      "Half-tonne load capacity",
      "Lightweight design",
      "Easy to maneuver",
      "Industrial grade",
      "Cost-effective"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Half Tonne Pallet.jpg",
    images: [
      "/Road Safety & Industrial/Half Tonne Pallet.jpg",
      "/Road Safety & Industrial/Half Tonne Pallet1.jpg",
      "/Road Safety & Industrial/Half Tonne Pallet2.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Pallets"
  },
  // ROAD SAFETY & INDUSTRIAL - Angular Road Barrier
  {
    id: "road-barrier-angular",
    name: "Angular Road Barrier",
    price: 4500,
    slug: "angular-road-barrier",
    description: "Angular road barrier for traffic management and safety. Highly visible and durable.",
    features: [
      "High visibility",
      "Angular design for stability",
      "Traffic safety",
      "Durable construction",
      "Easy to install"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Angular Road Barrier.png",
    images: [
      "/Road Safety & Industrial/Angular Road Barrier.png",
      "/Road Safety & Industrial/Angular Road Barrier1.png"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Road Barriers"
  },
  // ROAD SAFETY & INDUSTRIAL - Road Traffic Triangle
  {
    id: "traffic-triangle",
    name: "Road Traffic Triangle",
    price: 800,
    slug: "road-traffic-triangle",
    description: "Road traffic triangle for temporary traffic control. Essential for road safety.",
    features: [
      "High visibility",
      "Foldable design",
      "Easy to deploy",
      "Road safety compliant",
      "Durable construction"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Road Traffic Triangle.png",
    images: [
      "/Road Safety & Industrial/Road Traffic Triangle.png"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Traffic Control"
  },
  // ROAD SAFETY & INDUSTRIAL - Slimline Interlockable Road Barrier
  {
    id: "road-barrier-slimline",
    name: "Slimline Interlockable Road Barrier",
    price: 5000,
    slug: "slimline-interlockable-road-barrier",
    description: "Slimline interlockable road barrier for versatile traffic management. Connect multiple barriers for extended coverage.",
    features: [
      "Interlockable design",
      "Slimline profile",
      "Versatile applications",
      "High visibility",
      "Easy to connect"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Road Safety & Industrial/Slimline Interlockable Road Barrier.jpg",
    images: [
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier1.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier2.jpg",
      "/Road Safety & Industrial/Slimline Interlockable Road Barrier3.jpg"
    ],
    category: "Road Safety & Industrial",
    subcategory: "Road Barriers"
  },

  // SANITATION - 100litre Handwash Basin
  {
    id: "handwash-100l",
    name: "100 Litre Handwash Basin",
    capacity: 100,
    price: 9700,
    slug: "100-litre-handwash-basin",
    description: "100-litre handwash basin for public events and sanitation needs. Durable and easy to clean.",
    features: [
      "100-litre capacity",
      "Easy to clean",
      "Durable construction",
      "Portable design",
      "Hygienic"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/100litre Handwash Basin.jpg",
    images: [
      "/Sanitation/100litre Handwash Basin.jpg",
      "/Sanitation/100litre Handwash Basin - Copy.jpg",
      "/Sanitation/100litre Handwash Basin1.jpg",
      "/Sanitation/100litre Handwash Basin1 - Copy.jpg",
      "/Sanitation/100litre Handwash Basin2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Handwash Basins"
  },
  // SANITATION - PE Manholes (various sizes)
  {
    id: "manhole-115cm",
    name: "115cm PE Manhole",
    price: 23000,
    slug: "115cm-pe-manhole",
    description: "115cm PE manhole for underground access. Durable and corrosion-resistant.",
    features: [
      "115cm diameter",
      "Corrosion resistant",
      "Heavy-duty construction",
      "Easy installation",
      "Long-lasting"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/115cm PE Manhole.jpg",
    images: [
      "/Sanitation/115cm PE Manhole.jpg",
      "/Sanitation/115cm PE Manhole1.jpg",
      "/Sanitation/115cm PE Manhole3.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },
  {
    id: "manhole-140cm",
    name: "140cm PE Manhole",
    price: 31000,
    slug: "140cm-pe-manhole",
    description: "140cm PE manhole for larger underground access. Enhanced durability for heavy traffic areas.",
    features: [
      "140cm diameter",
      "Heavy-duty construction",
      "Corrosion resistant",
      "Traffic load rated",
      "Easy maintenance access"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/140cm PE Manhole.jpg",
    images: [
      "/Sanitation/140cm PE Manhole.jpg",
      "/Sanitation/140cm PE Manhole1.jpg",
      "/Sanitation/140cm PE Manhole2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },
  {
    id: "manhole-170cm",
    name: "170cm PE Manhole",
    price: 34500,
    slug: "170cm-pe-manhole",
    description: "170cm PE manhole for major infrastructure projects. Maximum durability and access space.",
    features: [
      "170cm diameter",
      "Maximum access space",
      "Industrial grade",
      "Corrosion resistant",
      "Heavy traffic rated"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/170cm PE Manhole.jpg",
    images: [
      "/Sanitation/170cm PE Manhole.jpg",
      "/Sanitation/170cm PE Manhole1.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },
  {
    id: "manhole-190cm",
    name: "190cm PE Manhole",
    price: 41400,
    slug: "190cm-pe-manhole",
    description: "190cm PE manhole for the largest infrastructure requirements. Premium heavy-duty construction.",
    features: [
      "190cm diameter",
      "Premium heavy-duty",
      "Maximum durability",
      "Corrosion resistant",
      "Industrial applications"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/190cm PE Manhole1.jpg",
    images: [
      "/Sanitation/190cm PE Manhole1.jpg",
      "/Sanitation/190cm PE Manhole2.jpg"
    ],
    category: "Sanitation",
    subcategory: "Manholes"
  },
  // SANITATION - Pit Latrine Slab
  {
    id: "pit-latrine-slab",
    name: "Pit Latrine Slab",
    price: 10300,
    slug: "pit-latrine-slab",
    description: "Durable pit latrine slab for sanitation infrastructure. Strong and hygienic solution.",
    features: [
      "Strong construction",
      "Hygienic design",
      "Easy to install",
      "Durable material",
      "Cost-effective"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/Sanitation/Pit Latrine Slab.jpg",
    images: [
      "/Sanitation/Pit Latrine Slab.jpg"
    ],
    category: "Sanitation",
    subcategory: "Latrine Slabs"
  },

  // TANKS - Barrel
  {
    id: "barrel-100l",
    name: "TopTank Barrel Drum — 100 Litres",
    capacity: 100,
    price: 3500,
    slug: "toptank-barrel-drum-100-litres",
    description: "Durable 100-litre barrel drum for versatile storage applications. Ideal for agricultural and industrial use.",
    features: [
      "100-litre capacity",
      "Heavy-duty construction",
      "Versatile storage solution",
      "Easy to transport",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
    images: [
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-120l",
    name: "TopTank Barrel Drum — 120 Litres",
    capacity: 120,
    price: 4000,
    slug: "toptank-barrel-drum-120-litres",
    description: "Durable 120-litre barrel drum for versatile storage applications. Ideal for agricultural and industrial use.",
    features: [
      "120-litre capacity",
      "Heavy-duty construction",
      "Versatile storage solution",
      "Easy to transport",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
    images: [
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-200l",
    name: "TopTank Barrel Drum — 200 Litres",
    capacity: 200,
    price: 5700,
    slug: "toptank-barrel-drum-200-litres",
    description: "Durable 200-litre barrel drum for versatile storage applications. Ideal for agricultural and industrial use.",
    features: [
      "200-litre capacity",
      "Heavy-duty construction",
      "Versatile storage solution",
      "Easy to transport",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
    images: [
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-230l",
    name: "TopTank Barrel Drum — 230 Litres",
    capacity: 230,
    price: 6200,
    slug: "toptank-barrel-drum-230-litres",
    description: "Durable 230-litre barrel drum for versatile storage applications. Ideal for agricultural and industrial use.",
    features: [
      "230-litre capacity",
      "Heavy-duty construction",
      "Versatile storage solution",
      "Easy to transport",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
    images: [
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },
  {
    id: "barrel-240l",
    name: "TopTank Barrel Drum — 240 Litres",
    capacity: 240,
    price: 6500,
    slug: "toptank-barrel-drum-240-litres",
    description: "Durable 240-litre barrel drum for versatile storage applications. Ideal for agricultural and industrial use.",
    features: [
      "240-litre capacity",
      "Heavy-duty construction",
      "Versatile storage solution",
      "Easy to transport",
      "UV resistant",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      color: "Blue",
      uvProtection: true
    },
    inStock: true,
    image: "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
    images: [
      "/TANKS/Barrel/LACDRUM01_Blue_2.jpg",
      "/TANKS/Barrel/Barrels-2-scaled-1.jpg"
    ],
    category: "TANKS",
    subcategory: "Barrel"
  },

  // BINS - 60litre Garbage Bin With Foot Pedal
  {
    id: "bin-60l-foot-pedal",
    name: "60 Litre Garbage Bin With Foot Pedal",
    capacity: 60,
    price: 3200,
    slug: "60-litre-garbage-bin-foot-pedal",
    description: "60-litre garbage bin with convenient foot pedal operation. Hygienic and easy to use.",
    features: [
      "60-litre capacity",
      "Foot pedal operation",
      "Hygienic hands-free use",
      "Durable construction",
      "Easy to clean"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/60litre Garbage Bin With Foot Pedal.jpg",
    images: [
      "/bins/60litre Garbage Bin With Foot Pedal.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal1.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal2.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal3.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal4.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal5.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal6.jpg",
      "/bins/60litre Garbage Bin With Foot Pedal7.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - 750litre Garbage Bin with Wheels
  {
    id: "bin-750l-wheels",
    name: "750 Litre Garbage Bin with Wheels",
    capacity: 750,
    price: 8500,
    slug: "750-litre-garbage-bin-wheels",
    description: "Large 750-litre garbage bin with wheels for easy mobility. Ideal for commercial and institutional use.",
    features: [
      "750-litre capacity",
      "Wheels for easy mobility",
      "Commercial grade",
      "Durable construction",
      "Easy to empty"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/750litre Garbage Bin with Wheels.jpg",
    images: [
      "/bins/750litre Garbage Bin with Wheels.jpg",
      "/bins/750litre Garbage Bin with Wheels1.jpg",
      "/bins/750litre Garbage Bin with Wheels2.jpg",
      "/bins/750litre Garbage Bin with Wheels3.jpg",
      "/bins/750litre Garbage Bin with Wheels4.jpg",
      "/bins/750litre Garbage Bin with Wheels5.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - 90litre Garbage Bin With Wheels & Handle
  {
    id: "bin-90l-wheels-handle",
    name: "90 Litre Garbage Bin With Wheels & Handle",
    capacity: 90,
    price: 2800,
    slug: "90-litre-garbage-bin-wheels-handle",
    description: "90-litre garbage bin with wheels and handle for easy transport. Convenient for residential use.",
    features: [
      "90-litre capacity",
      "Wheels and handle",
      "Easy to transport",
      "Durable construction",
      "Residential grade"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Garbage Bin With Wheels & Handle.jpg",
    images: [
      "/bins/90litre Garbage Bin With Wheels & Handle.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle1.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle2.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle3.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle4.jpg",
      "/bins/90litre Garbage Bin With Wheels & Handle5.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - 90litre Garbage Bin With Wheels, Handle & Foot Pedal
  {
    id: "bin-90l-wheels-handle-pedal",
    name: "90 Litre Garbage Bin With Wheels, Handle & Foot Pedal",
    capacity: 90,
    price: 3500,
    slug: "90-litre-garbage-bin-wheels-handle-pedal",
    description: "Premium 90-litre garbage bin with wheels, handle, and foot pedal. Maximum convenience and hygiene.",
    features: [
      "90-litre capacity",
      "Wheels, handle & foot pedal",
      "Premium convenience",
      "Hands-free operation",
      "Easy mobility"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal.jpg",
    images: [
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal1.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal2.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal3.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal4.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal5.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal6.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal7.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal8.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal9.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal10.jpg",
      "/bins/90litre Garbage Bin With Wheels, Handle & Foot Pedal11.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - 90litre Hexagonal Dustbin
  {
    id: "bin-90l-hexagonal",
    name: "90 Litre Hexagonal Dustbin",
    capacity: 90,
    price: 2500,
    slug: "90-litre-hexagonal-dustbin",
    description: "Stylish 90-litre hexagonal dustbin with unique design. Perfect for modern spaces.",
    features: [
      "90-litre capacity",
      "Unique hexagonal design",
      "Stylish appearance",
      "Durable construction",
      "Space-efficient"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Hexagonal Dustbin.jpg",
    images: [
      "/bins/90litre Hexagonal Dustbin.jpg",
      "/bins/90litre Hexagonal Dustbin1.jpg",
      "/bins/90litre Hexagonal Dustbin2.jpg",
      "/bins/90litre Hexagonal Dustbin3.jpg",
      "/bins/90litre Hexagonal Dustbin4.jpg"
    ],
    category: "bins",
    subcategory: "Dustbins"
  },
  // BINS - 90litre Round Dustbin
  {
    id: "bin-90l-round",
    name: "90 Litre Round Dustbin",
    capacity: 90,
    price: 2200,
    slug: "90-litre-round-dustbin",
    description: "Classic 90-litre round dustbin. Simple, effective, and durable waste management solution.",
    features: [
      "90-litre capacity",
      "Classic round design",
      "Simple and effective",
      "Durable construction",
      "Easy to clean"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/90litre Round Dustbin.jpg",
    images: [
      "/bins/90litre Round Dustbin.jpg",
      "/bins/90litre Round Dustbin1.jpg",
      "/bins/90litre Round Dustbin2.jpg",
      "/bins/90litre Round Dustbin3.jpg"
    ],
    category: "bins",
    subcategory: "Dustbins"
  },
  // BINS - Garbage Bin with Wheels (120L)
  {
    id: "bin-120l-wheels",
    name: "120 Litre Garbage Bin with Wheels",
    capacity: 120,
    price: 12500,
    slug: "120-litre-garbage-bin-wheels",
    description: "120-litre garbage bin with wheels for easy mobility. Suitable for residential and small commercial use.",
    features: [
      "120-litre capacity",
      "Wheels for mobility",
      "Durable construction",
      "Easy to handle",
      "Residential grade"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/Garbage Bin with Wheels.jpg",
    images: [
      "/bins/Garbage Bin with Wheels.jpg",
      "/bins/Garbage Bin with Wheels1.jpg",
      "/bins/Garbage Bin with Wheels3.jpg",
      "/bins/Garbage Bin with Wheels4.jpg",
      "/bins/Garbage Bin with Wheels5.jpg",
      "/bins/Garbage Bin with Wheels6.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - Garbage Bin with Wheels (180L)
  {
    id: "bin-180l-wheels",
    name: "180 Litre Garbage Bin with Wheels",
    capacity: 180,
    price: 16500,
    slug: "180-litre-garbage-bin-wheels",
    description: "180-litre garbage bin with wheels for easy mobility. Suitable for residential and commercial use.",
    features: [
      "180-litre capacity",
      "Wheels for mobility",
      "Durable construction",
      "Easy to handle",
      "Commercial grade"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/Garbage Bin with Wheels.jpg",
    images: [
      "/bins/Garbage Bin with Wheels.jpg",
      "/bins/Garbage Bin with Wheels1.jpg",
      "/bins/Garbage Bin with Wheels3.jpg",
      "/bins/Garbage Bin with Wheels4.jpg",
      "/bins/Garbage Bin with Wheels5.jpg",
      "/bins/Garbage Bin with Wheels6.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - Garbage Bin with Wheels (240L)
  {
    id: "bin-240l-wheels",
    name: "240 Litre Garbage Bin with Wheels",
    capacity: 240,
    price: 21500,
    slug: "240-litre-garbage-bin-wheels",
    description: "240-litre garbage bin with wheels for easy mobility. Suitable for commercial and institutional use.",
    features: [
      "240-litre capacity",
      "Wheels for mobility",
      "Durable construction",
      "Easy to handle",
      "Commercial grade"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/Garbage Bin with Wheels.jpg",
    images: [
      "/bins/Garbage Bin with Wheels.jpg",
      "/bins/Garbage Bin with Wheels1.jpg",
      "/bins/Garbage Bin with Wheels3.jpg",
      "/bins/Garbage Bin with Wheels4.jpg",
      "/bins/Garbage Bin with Wheels5.jpg",
      "/bins/Garbage Bin with Wheels6.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - Garbage Bin with Wheels (360L)
  {
    id: "bin-360l-wheels",
    name: "360 Litre Garbage Bin with Wheels",
    capacity: 360,
    price: 25300,
    slug: "360-litre-garbage-bin-wheels",
    description: "360-litre garbage bin with wheels for easy mobility. Ideal for commercial and institutional use.",
    features: [
      "360-litre capacity",
      "Wheels for mobility",
      "Commercial grade",
      "Durable construction",
      "Easy to empty"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/Garbage Bin with Wheels.jpg",
    images: [
      "/bins/Garbage Bin with Wheels.jpg",
      "/bins/Garbage Bin with Wheels1.jpg",
      "/bins/Garbage Bin with Wheels3.jpg",
      "/bins/Garbage Bin with Wheels4.jpg",
      "/bins/Garbage Bin with Wheels5.jpg",
      "/bins/Garbage Bin with Wheels6.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - Garbage Bin with Wheels (1,100L)
  {
    id: "bin-1100l-wheels",
    name: "1,100 Litre Garbage Bin with Wheels",
    capacity: 1100,
    price: 56300,
    slug: "1100-litre-garbage-bin-wheels",
    description: "Large 1,100-litre garbage bin with wheels for easy mobility. Ideal for industrial and large commercial use.",
    features: [
      "1,100-litre capacity",
      "Wheels for mobility",
      "Industrial grade",
      "Durable construction",
      "Easy to empty"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/Garbage Bin with Wheels.jpg",
    images: [
      "/bins/Garbage Bin with Wheels.jpg",
      "/bins/Garbage Bin with Wheels1.jpg",
      "/bins/Garbage Bin with Wheels3.jpg",
      "/bins/Garbage Bin with Wheels4.jpg",
      "/bins/Garbage Bin with Wheels5.jpg",
      "/bins/Garbage Bin with Wheels6.jpg"
    ],
    category: "bins",
    subcategory: "Garbage Bins"
  },
  // BINS - Standard Cylindrical Tanks (various sizes)
  {
    id: "bin-100l-cylindrical",
    name: "100 Litre Standard Cylindrical Tank",
    capacity: 100,
    price: 2900,
    slug: "100-litre-standard-cylindrical-tank",
    description: "100-litre standard cylindrical tank for versatile storage applications.",
    features: [
      "100-litre capacity",
      "Standard cylindrical design",
      "Versatile storage",
      "Durable construction",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/100l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/100l Standard Cylindrical Tank.jpg",
      "/bins/100l Standard Cylindrical Tank5.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "bin-120l-cylindrical",
    name: "120 Litre Standard Cylindrical Tank",
    capacity: 120,
    price: 3200,
    slug: "120-litre-standard-cylindrical-tank",
    description: "120-litre standard cylindrical tank for storage needs.",
    features: [
      "120-litre capacity",
      "Standard cylindrical design",
      "Versatile storage",
      "Durable construction",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/120l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/120l Standard Cylindrical Tank.jpg",
      "/bins/120l Standard Cylindrical Tank1.jpg",
      "/bins/120l Standard Cylindrical Tank2.jpg",
      "/bins/120l Standard Cylindrical Tank3.jpg",
      "/bins/120l Standard Cylindrical Tank4.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "bin-180l-cylindrical",
    name: "180 Litre Standard Cylindrical Tank",
    capacity: 180,
    price: 3800,
    slug: "180-litre-standard-cylindrical-tank",
    description: "180-litre standard cylindrical tank for medium storage requirements.",
    features: [
      "180-litre capacity",
      "Standard cylindrical design",
      "Medium storage capacity",
      "Durable construction",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/180l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/180l Standard Cylindrical Tank.jpg",
      "/bins/180l Standard Cylindrical Tank1.jpg",
      "/bins/180l Standard Cylindrical Tank3.jpg",
      "/bins/180l Standard Cylindrical Tank4.jpg",
      "/bins/180l Standard Cylindrical Tank5.jpg",
      "/bins/180l Standard Cylindrical Tank6.jpg",
      "/bins/180l Standard Cylindrical Tank7.jpg",
      "/bins/180l Standard Cylindrical Tank8.jpg",
      "/bins/180l Standard Cylindrical Tank9.jpg",
      "/bins/180l Standard Cylindrical Tank10.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "bin-240l-cylindrical",
    name: "240 Litre Standard Cylindrical Tank",
    capacity: 240,
    price: 4500,
    slug: "240-litre-standard-cylindrical-tank",
    description: "240-litre standard cylindrical tank for larger storage needs.",
    features: [
      "240-litre capacity",
      "Standard cylindrical design",
      "Large storage capacity",
      "Durable construction",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/240l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/240l Standard Cylindrical Tank.jpg",
      "/bins/240l Standard Cylindrical Tank1.jpg",
      "/bins/240l Standard Cylindrical Tank2.jpg",
      "/bins/240l Standard Cylindrical Tank3.jpg",
      "/bins/240l Standard Cylindrical Tank4.jpg",
      "/bins/240l Standard Cylindrical Tank5.jpg",
      "/bins/240l Standard Cylindrical Tank6.jpg",
      "/bins/240l Standard Cylindrical Tank7.jpg",
      "/bins/240l Standard Cylindrical Tank8.jpg",
      "/bins/240l Standard Cylindrical Tank9.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  },
  {
    id: "bin-360l-cylindrical",
    name: "360 Litre Standard Cylindrical Tank",
    capacity: 360,
    price: 5500,
    slug: "360-litre-standard-cylindrical-tank",
    description: "360-litre standard cylindrical tank for substantial storage requirements.",
    features: [
      "360-litre capacity",
      "Standard cylindrical design",
      "Substantial storage",
      "Durable construction",
      "Food-grade material"
    ],
    specifications: {
      material: "High-density polyethylene",
      uvProtection: true
    },
    inStock: true,
    image: "/bins/360l Standard Cylindrical Tank.jpg",
    images: [
      "/bins/360l Standard Cylindrical Tank.jpg",
      "/bins/360l Standard Cylindrical Tank1.jpg",
      "/bins/360l Standard Cylindrical Tank2.jpg",
      "/bins/360l Standard Cylindrical Tank3.jpg",
      "/bins/360l Standard Cylindrical Tank4.jpg",
      "/bins/360l Standard Cylindrical Tank5.jpg",
      "/bins/360l Standard Cylindrical Tank6.jpg",
      "/bins/360l Standard Cylindrical Tank7.jpg",
      "/bins/360l Standard Cylindrical Tank8.jpg",
      "/bins/360l Standard Cylindrical Tank9.jpg"
    ],
    category: "bins",
    subcategory: "Cylindrical Tanks"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
  return products.filter(product => product.category === category && product.subcategory === subcategory);
}

export function getCategories(): string[] {
  const categories = Array.from(new Set(products.map(product => product.category)));
  // Move TANKS to first position
  const tanksIndex = categories.indexOf('TANKS');
  if (tanksIndex > -1) {
    categories.splice(tanksIndex, 1);
    categories.unshift('TANKS');
  }
  return categories;
}

export function getSubcategories(category: string): string[] {
  const subcategories = Array.from(new Set(
    products
      .filter(product => product.category === category)
      .map(product => product.subcategory)
      .filter(Boolean) as string[]
  ));
  
  // For TANKS category, move Vertical Cylindrical to first position
  if (category === 'TANKS') {
    const verticalIndex = subcategories.indexOf('Vertical Cylindrical');
    if (verticalIndex > -1) {
      subcategories.splice(verticalIndex, 1);
      subcategories.unshift('Vertical Cylindrical');
    }
  }
  
  return subcategories;
}

export function formatPrice(price: number): string {
  return `Ksh. ${price.toLocaleString()}`;
}

export function formatCapacity(capacity?: number): string {
  if (!capacity) return '';
  return `${capacity.toLocaleString()} Litres`;
}
