export interface Product {
  id: string;
  name: string;
  capacity?: number;
  price: number;
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
}

export const products: Product[] = [
  {
    id: "100L",
    name: "TopTank Standard Cylindrical Tank — 100 Litres",
    capacity: 100,
    price: 2900,
    slug: "toptank-standard-cylindrical-tank-100-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
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
    image: "/toptank_scrape/images/100l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/100l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/100l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/100l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/100l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "200L",
    name: "TopTank Standard Cylindrical Tank — 200 Litres",
    capacity: 200,
    price: 4500,
    slug: "toptank-standard-cylindrical-tank-200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/200l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/200l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/200l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/200l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/200l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "230L",
    name: "TopTank Standard Cylindrical Tank — 230 Litres",
    capacity: 230,
    price: 4250,
    slug: "toptank-standard-cylindrical-tank-230-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/230l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/230l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/230l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/230l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/230l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "230L_LOFT",
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
    image: "/toptank_scrape/images/230litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/230litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/230litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/230litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "300L",
    name: "TopTank Standard Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 5200,
    slug: "toptank-standard-cylindrical-tank-300-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/300l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/300l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/300l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/300l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/300l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "300L_LOFT",
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
    image: "/toptank_scrape/images/300litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/300litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/300litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/300litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "300L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 300 Litres",
    capacity: 300,
    price: 5400,
    slug: "toptank-deluxe-cylindrical-tank-300-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/300l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/300l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/300l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/300l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/300l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "300L_NESTABLE",
    name: "TopTank Nestable Tank — 300 Litres",
    capacity: 300,
    price: 6500,
    slug: "toptank-nestable-tank-300-litres",
    description: "Nestable tanks are designed for efficient storage and transportation. They can be nested together when empty, saving space during shipping and storage.",
    features: [
      "Nestable design for space efficiency",
      "FDA-approved food-grade material",
      "Easy to transport and store",
      "Corrugated body for durability",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/300litre_Nestable_Tank_0.jpg",
    images: ["/toptank_scrape/images/300litre_Nestable_Tank_0.jpg", "/toptank_scrape/images/300litre_Nestable_Tank_1.jpeg", "/toptank_scrape/images/300litre_Nestable_Tank_2.png"]
  },
  {
    id: "400L_LOFT",
    name: "TopTank Rectangular Loft Tank — 400 Litres",
    capacity: 400,
    price: 9500,
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
    image: "/toptank_scrape/images/400litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/400litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/400litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/400litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "460L_LOFT",
    name: "TopTank Rectangular Loft Tank — 460 Litres",
    capacity: 460,
    price: 10500,
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
    image: "/toptank_scrape/images/460litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/460litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/460litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/460litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "500L",
    name: "TopTank Standard Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 7500,
    slug: "toptank-standard-cylindrical-tank-500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/500l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/500l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/500l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/500l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/500l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "500L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 500 Litres",
    capacity: 500,
    price: 9750,
    slug: "toptank-deluxe-cylindrical-tank-500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/500l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/500l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/500l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/500l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/500l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "500L_LOFT",
    name: "TopTank Rectangular Loft Tank — 500 Litres",
    capacity: 500,
    price: 11000,
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
    image: "/toptank_scrape/images/500litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/500litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/500litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/500litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "500L_NESTABLE",
    name: "TopTank Nestable Tank — 500 Litres",
    capacity: 500,
    price: 9500,
    slug: "toptank-nestable-tank-500-litres",
    description: "Nestable tanks are designed for efficient storage and transportation. They can be nested together when empty, saving space during shipping and storage.",
    features: [
      "Nestable design for space efficiency",
      "FDA-approved food-grade material",
      "Easy to transport and store",
      "Corrugated body for durability",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/500litre_Nestable_Tank_0.jpg",
    images: ["/toptank_scrape/images/500litre_Nestable_Tank_0.jpg", "/toptank_scrape/images/500litre_Nestable_Tank_1.jpeg", "/toptank_scrape/images/500litre_Nestable_Tank_2.png"]
  },
  {
    id: "500L_BARREL",
    name: "TopTank Roller Drum — 500 Litres",
    capacity: 500,
    price: 8500,
    slug: "toptank-roller-drum-500-litres",
    description: "Roller drums are designed for easy transportation and storage of water and other liquids. Perfect for construction sites, farms, and industrial applications.",
    features: [
      "Roller design for easy movement",
      "FDA-approved food-grade material",
      "Durable construction",
      "Easy to transport",
      "Multi-purpose use"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/200litre_Barrel_0.jpg",
    images: ["/toptank_scrape/images/50litre_Roller_Drum_0.jpg", "/toptank_scrape/images/50litre_Roller_Drum_1.jpeg", "/toptank_scrape/images/50litre_Roller_Drum_2.png"]
  },
  {
    id: "690L_LOFT",
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
    image: "/toptank_scrape/images/690litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/690litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/690litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/690litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "700L_LOFT",
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
    image: "/toptank_scrape/images/700litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/700litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/700litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/700litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "750L",
    name: "TopTank Standard Cylindrical Tank — 750 Litres",
    capacity: 750,
    price: 10800,
    slug: "toptank-standard-cylindrical-tank-750-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/750l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/750l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/750l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/750l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/750l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "850L_LOFT",
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
    image: "/toptank_scrape/images/850litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/850litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/850litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/850litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "920L",
    name: "TopTank Standard Cylindrical Tank — 920 Litres",
    capacity: 920,
    price: 13500,
    slug: "toptank-standard-cylindrical-tank-920-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/920l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/920l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/920l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/920l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/920l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "920L_LOFT",
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
    image: "/toptank_scrape/images/920litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/920litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/920litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/920litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "1000L",
    name: "TopTank Standard Cylindrical Tank — 1,000 Litres",
    capacity: 1000,
    price: 12700,
    slug: "toptank-standard-cylindrical-tank-1000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
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
    image: "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "1000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 1,000 Litres",
    capacity: 1000,
    price: 15500,
    slug: "toptank-deluxe-cylindrical-tank-1000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/1000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "1000L_NESTABLE",
    name: "TopTank Nestable Tank — 1,000 Litres",
    capacity: 1000,
    price: 14500,
    slug: "toptank-nestable-tank-1000-litres",
    description: "Nestable tanks are designed for efficient storage and transportation. They can be nested together when empty, saving space during shipping and storage.",
    features: [
      "Nestable design for space efficiency",
      "FDA-approved food-grade material",
      "Easy to transport and store",
      "Corrugated body for durability",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/1000litre_Nestable_Tank_0.jpg",
    images: ["/toptank_scrape/images/1000litre_Nestable_Tank_0.jpg", "/toptank_scrape/images/1000litre_Nestable_Tank_1.jpeg", "/toptank_scrape/images/1000litre_Nestable_Tank_2.png"]
  },
  {
    id: "1000L_LOFT",
    name: "TopTank Rectangular Loft Tank — 1,000 Litres",
    capacity: 1000,
    price: 22000,
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
    image: "/toptank_scrape/images/1000litre_Rectangular_Loft_Tank_0.jpg",
    images: ["/toptank_scrape/images/1000litre_Rectangular_Loft_Tank_0.jpg", "/toptank_scrape/images/1000litre_Rectangular_Loft_Tank_1.jpeg", "/toptank_scrape/images/1000litre_Rectangular_Loft_Tank_2.png"]
  },
  {
    id: "1000L_UNDERGROUND",
    name: "TopTank Underground Spherical Tank — 1,000 Litres",
    capacity: 1000,
    price: 28500,
    slug: "toptank-underground-spherical-tank-1000-litres",
    description: "The spherical ball shaped water tank comes with strong, thick ribs on four sides of the tanks, which gives mechanical strength to install it underground. This is a quick and economical water storage solution for the places where the water pressure is very low due to its lower gradient.",
    features: [
      "Spherical design for underground installation",
      "Strong thick ribs for mechanical strength",
      "Quick and economical solution",
      "Ideal for low water pressure areas",
      "Space-saving underground installation"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: false
    },
    inStock: true,
    image: "/toptank_scrape/images/1000litre_Underground_Spherical_Tank_0.jpg",
    images: ["/toptank_scrape/images/1000litre_Underground_Spherical_Tank_0.jpg", "/toptank_scrape/images/1000litre_Underground_Spherical_Tank_1.jpeg", "/toptank_scrape/images/1000litre_Underground_Spherical_Tank_2.png"]
  },
  {
    id: "1000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 1,000 Litres",
    capacity: 1000,
    price: 8500,
    slug: "toptank-triple-layer-water-tank-1000-litres",
    description: "Compact and efficient water storage solution ideal for residential use. Perfect for small households and limited spaces.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Lightweight and easy to install",
      "Suitable for outdoor and indoor installation"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "1350L",
    name: "TopTank Standard Cylindrical Tank — 1,350 Litres",
    capacity: 1350,
    price: 16500,
    slug: "toptank-standard-cylindrical-tank-1350-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/1350l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1350l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1350l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1350l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1350l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "1500L",
    name: "TopTank Standard Cylindrical Tank — 1,500 Litres",
    capacity: 1500,
    price: 18500,
    slug: "toptank-standard-cylindrical-tank-1500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/1500l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1500l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1500l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1500l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1500l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "1500L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 1,500 Litres",
    capacity: 1500,
    price: 22500,
    slug: "toptank-deluxe-cylindrical-tank-1500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/1500l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1500l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1500l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1500l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1500l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "1900L",
    name: "TopTank Standard Cylindrical Tank — 1,900 Litres",
    capacity: 1900,
    price: 21500,
    slug: "toptank-standard-cylindrical-tank-1900-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/1900l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1900l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1900l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1900l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1900l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "1900L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 1,900 Litres",
    capacity: 1900,
    price: 27000,
    slug: "toptank-deluxe-cylindrical-tank-1900-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/1900l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/1900l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/1900l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/1900l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/1900l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "2000L",
    name: "TopTank Standard Cylindrical Tank — 2,000 Litres",
    capacity: 2000,
    price: 23000,
    slug: "toptank-standard-cylindrical-tank-2000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "2000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 2,000 Litres",
    capacity: 2000,
    price: 28500,
    slug: "toptank-deluxe-cylindrical-tank-2000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "2000L_NESTABLE",
    name: "TopTank Nestable Tank — 2,000 Litres",
    capacity: 2000,
    price: 26500,
    slug: "toptank-nestable-tank-2000-litres",
    description: "Nestable tanks are designed for efficient storage and transportation. They can be nested together when empty, saving space during shipping and storage.",
    features: [
      "Nestable design for space efficiency",
      "FDA-approved food-grade material",
      "Easy to transport and store",
      "Corrugated body for durability",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2000litre_Nestable_Tank_0.jpg",
    images: ["/toptank_scrape/images/2000litre_Nestable_Tank_0.jpg", "/toptank_scrape/images/2000litre_Nestable_Tank_1.jpeg", "/toptank_scrape/images/2000litre_Nestable_Tank_2.png"]
  },
  {
    id: "2000L_UNDERGROUND",
    name: "TopTank Underground Spherical Tank — 2,000 Litres",
    capacity: 2000,
    price: 45000,
    slug: "toptank-underground-spherical-tank-2000-litres",
    description: "The spherical ball shaped water tank comes with strong, thick ribs on four sides of the tanks, which gives mechanical strength to install it underground. This is a quick and economical water storage solution for the places where the water pressure is very low due to its lower gradient.",
    features: [
      "Spherical design for underground installation",
      "Strong thick ribs for mechanical strength",
      "Quick and economical solution",
      "Ideal for low water pressure areas",
      "Space-saving underground installation"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: false
    },
    inStock: true,
    image: "/toptank_scrape/images/2000litre_Underground_Spherical_Tank_0.jpg",
    images: ["/toptank_scrape/images/2000litre_Underground_Spherical_Tank_0.jpg", "/toptank_scrape/images/2000litre_Underground_Spherical_Tank_1.jpeg", "/toptank_scrape/images/2000litre_Underground_Spherical_Tank_2.png"]
  },
  {
    id: "2000L_SEPTIC",
    name: "TopTank Horizontal Septic Tank — 2,000 Litres",
    capacity: 2000,
    price: 55200,
    slug: "toptank-horizontal-septic-tank-2000-litres",
    description: "Plastic Septic tanks are the most cost effective way of sanitation disposal. Unlike concrete septic tanks, horizontal septic tanks are made of polyethylene plastic which does not allow plant roots to penetrate through the tank wall. Top quality septic tanks neither crack nor let seepage out.",
    features: [
      "Cost-effective sanitation disposal",
      "Polyethylene plastic construction",
      "Root penetration resistant",
      "No cracking or seepage",
      "Durable and long-lasting"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2000litre_Horizontal_Septic_Tank_0.jpg",
    images: ["/toptank_scrape/images/2000litre_Horizontal_Septic_Tank_0.jpg", "/toptank_scrape/images/2000litre_Horizontal_Septic_Tank_1.jpeg", "/toptank_scrape/images/2000litre_Horizontal_Septic_Tank_2.png"]
  },
  {
    id: "2300L",
    name: "TopTank Standard Cylindrical Tank — 2,300 Litres",
    capacity: 2300,
    price: 25300,
    slug: "toptank-standard-cylindrical-tank-2300-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/2300l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2300l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2300l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2300l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2300l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "2300L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 2,300 Litres",
    capacity: 2300,
    price: 31600,
    slug: "toptank-deluxe-cylindrical-tank-2300-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2300l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2300l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2300l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2300l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2300l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "2500L",
    name: "TopTank Standard Cylindrical Tank — 2,500 Litres",
    capacity: 2500,
    price: 26400,
    slug: "toptank-standard-cylindrical-tank-2500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/2500l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2500l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2500l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2500l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2500l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "2500L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 2,500 Litres",
    capacity: 2500,
    price: 33000,
    slug: "toptank-deluxe-cylindrical-tank-2500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2500l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2500l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2500l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2500l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2500l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "3000L",
    name: "TopTank Standard Cylindrical Tank — 3,000 Litres",
    capacity: 3000,
    price: 31000,
    slug: "toptank-standard-cylindrical-tank-3000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/3000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "3000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 3,000 Litres",
    capacity: 3000,
    price: 41900,
    slug: "toptank-deluxe-cylindrical-tank-3000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/3000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "3000L_CONICAL",
    name: "TopTank Conical Hopper Tank — 3,000 Litres",
    capacity: 3000,
    price: 65000,
    slug: "toptank-conical-hopper-tank-3000-litres",
    description: "Conical hopper tanks are designed for easy discharge of stored materials. Perfect for industrial applications where complete drainage is required.",
    features: [
      "Conical bottom for complete drainage",
      "FDA-approved food-grade material",
      "Easy discharge system",
      "Industrial-grade construction",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/3000litre_Conical_Hopper_Tank_1.jpeg",
    images: ["/toptank_scrape/images/3000litre_Conical_Hopper_Tank_1.jpeg", "/toptank_scrape/images/3000litre_Conical_Hopper_Tank_2.png"]
  },
  {
    id: "3000L_UNDERGROUND",
    name: "TopTank Underground Spherical Tank — 3,000 Litres",
    capacity: 3000,
    price: 65000,
    slug: "toptank-underground-spherical-tank-3000-litres",
    description: "The spherical ball shaped water tank comes with strong, thick ribs on four sides of the tanks, which gives mechanical strength to install it underground. This is a quick and economical water storage solution for the places where the water pressure is very low due to its lower gradient.",
    features: [
      "Spherical design for underground installation",
      "Strong thick ribs for mechanical strength",
      "Quick and economical solution",
      "Ideal for low water pressure areas",
      "Space-saving underground installation"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: false
    },
    inStock: true,
    image: "/toptank_scrape/images/3000litre_Underground_Spherical_Tank_0.jpg",
    images: ["/toptank_scrape/images/3000litre_Underground_Spherical_Tank_0.jpg", "/toptank_scrape/images/3000litre_Underground_Spherical_Tank_1.jpeg", "/toptank_scrape/images/3000litre_Underground_Spherical_Tank_2.png"]
  },
  {
    id: "3200L",
    name: "TopTank Standard Cylindrical Tank — 3,200 Litres",
    capacity: 3200,
    price: 33500,
    slug: "toptank-standard-cylindrical-tank-3200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "3200L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 3,200 Litres",
    capacity: 3200,
    price: 42000,
    slug: "toptank-deluxe-cylindrical-tank-3200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/3200l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3200l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3200l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3200l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3200l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "3500L",
    name: "TopTank Standard Cylindrical Tank — 3,500 Litres",
    capacity: 3500,
    price: 36200,
    slug: "toptank-standard-cylindrical-tank-3500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/3500l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3500l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3500l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3500l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3500l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "3500L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 3,500 Litres",
    capacity: 3500,
    price: 45000,
    slug: "toptank-deluxe-cylindrical-tank-3500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/3500l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3500l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3500l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3500l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3500l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "4000L",
    name: "TopTank Standard Cylindrical Tank — 4,000 Litres",
    capacity: 4000,
    price: 41000,
    slug: "toptank-standard-cylindrical-tank-4000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/3200l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "4200L",
    name: "TopTank Standard Cylindrical Tank — 4,200 Litres",
    capacity: 4200,
    price: 44000,
    slug: "toptank-standard-cylindrical-tank-4200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/4200l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/4200l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/4200l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/4200l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/4200l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "4200L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 4,200 Litres",
    capacity: 4200,
    price: 59200,
    slug: "toptank-deluxe-cylindrical-tank-4200-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/4200l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/4200l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/4200l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/4200l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/4200l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "4600L",
    name: "TopTank Standard Cylindrical Tank — 4,600 Litres",
    capacity: 4600,
    price: 48000,
    slug: "toptank-standard-cylindrical-tank-4600-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/4600l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/4600l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/4600l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/4600l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/4600l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "4600L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 4,600 Litres",
    capacity: 4600,
    price: 62000,
    slug: "toptank-deluxe-cylindrical-tank-4600-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/4600l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/4600l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/4600l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/4600l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/4600l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "5000L",
    name: "TopTank Standard Cylindrical Tank — 5,000 Litres",
    capacity: 5000,
    price: 46500,
    slug: "toptank-standard-cylindrical-tank-5000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "5000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 5,000 Litres",
    capacity: 5000,
    price: 60000,
    slug: "toptank-deluxe-cylindrical-tank-5000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/5000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/5000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/5000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/5000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/5000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "5000L_CONICAL",
    name: "TopTank Conical Hopper Tank — 5,000 Litres",
    capacity: 5000,
    price: 92000,
    slug: "toptank-conical-hopper-tank-5000-litres",
    description: "Conical hopper tanks are designed for easy discharge of stored materials. Perfect for industrial applications where complete drainage is required.",
    features: [
      "Conical bottom for complete drainage",
      "FDA-approved food-grade material",
      "Easy discharge system",
      "Industrial-grade construction",
      "UV-resistant"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/5000litre_Conical_Hopper_Tank_1.jpeg",
    images: ["/toptank_scrape/images/5000litre_Conical_Hopper_Tank_1.jpeg", "/toptank_scrape/images/5000litre_Conical_Hopper_Tank_2.png"]
  },
  {
    id: "5000L_SEPTIC",
    name: "TopTank Horizontal Septic Tank — 5,000 Litres",
    capacity: 5000,
    price: 138000,
    slug: "toptank-horizontal-septic-tank-5000-litres",
    description: "Plastic Septic tanks are the most cost effective way of sanitation disposal. Unlike concrete septic tanks, horizontal septic tanks are made of polyethylene plastic which does not allow plant roots to penetrate through the tank wall. Top quality septic tanks neither crack nor let seepage out.",
    features: [
      "Cost-effective sanitation disposal",
      "Polyethylene plastic construction",
      "Root penetration resistant",
      "No cracking or seepage",
      "Durable and long-lasting"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/5000litre_Horizontal_Septic_Tank_0.jpg",
    images: ["/toptank_scrape/images/5000litre_Horizontal_Septic_Tank_0.jpg", "/toptank_scrape/images/5000litre_Horizontal_Septic_Tank_1.jpeg", "/toptank_scrape/images/5000litre_Horizontal_Septic_Tank_2.png"]
  },
  {
    id: "5000L_UNDERGROUND",
    name: "TopTank Underground Spherical Tank — 5,000 Litres",
    capacity: 5000,
    price: 95000,
    slug: "toptank-underground-spherical-tank-5000-litres",
    description: "The spherical ball shaped water tank comes with strong, thick ribs on four sides of the tanks, which gives mechanical strength to install it underground. This is a quick and economical water storage solution for the places where the water pressure is very low due to its lower gradient.",
    features: [
      "Spherical design for underground installation",
      "Strong thick ribs for mechanical strength",
      "Quick and economical solution",
      "Ideal for low water pressure areas",
      "Space-saving underground installation"
    ],
    specifications: {
      layers: "Standard",
      material: "High-density polyethylene",
      color: "Black",
      uvProtection: false
    },
    inStock: true,
    image: "/toptank_scrape/images/5000litre_Underground_Spherical_Tank_0.jpg",
    images: ["/toptank_scrape/images/5000litre_Underground_Spherical_Tank_0.jpg", "/toptank_scrape/images/5000litre_Underground_Spherical_Tank_1.jpeg", "/toptank_scrape/images/5000litre_Underground_Spherical_Tank_2.png"]
  },
  {
    id: "5000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 5,000 Litres",
    capacity: 5000,
    price: 29500,
    slug: "toptank-triple-layer-water-tank-5000-litres",
    description: "High-capacity water tank ideal for large households, farms, and small businesses. Excellent value for reliable water storage.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Superior structural integrity",
      "Low maintenance requirements"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/5000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "6000L",
    name: "TopTank Standard Cylindrical Tank — 6,000 Litres",
    capacity: 6000,
    price: 54000,
    slug: "toptank-standard-cylindrical-tank-6000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "6000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 6,000 Litres",
    capacity: 6000,
    price: 90200,
    slug: "toptank-deluxe-cylindrical-tank-6000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/6000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/6000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/6000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/6000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/6000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "6000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 6,000 Litres",
    capacity: 6000,
    price: 33500,
    slug: "toptank-triple-layer-water-tank-6000-litres",
    description: "Large-capacity tank designed for commercial and agricultural use. Provides dependable water storage for demanding applications.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Industrial-grade construction",
      "Excellent thermal insulation"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/6000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "7500L",
    name: "TopTank Standard Cylindrical Tank — 7,500 Litres",
    capacity: 7500,
    price: 68000,
    slug: "toptank-standard-cylindrical-tank-7500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/7500l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/7500l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/7500l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/7500l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/7500l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "7500L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 7,500 Litres",
    capacity: 7500,
    price: 110500,
    slug: "toptank-deluxe-cylindrical-tank-7500-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/7500l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/7500l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/7500l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/7500l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/7500l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "8000L",
    name: "TopTank Standard Cylindrical Tank — 8,000 Litres",
    capacity: 8000,
    price: 72000,
    slug: "toptank-standard-cylindrical-tank-8000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "8000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 8,000 Litres",
    capacity: 8000,
    price: 42500,
    slug: "toptank-triple-layer-water-tank-8000-litres",
    description: "Premium large-capacity water storage solution for farms, institutions, and commercial operations. Built for maximum durability.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Reinforced wall thickness",
      "Superior impact resistance"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/8000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "10000L",
    name: "TopTank Standard Cylindrical Tank — 10,000 Litres",
    capacity: 10000,
    price: 107500,
    slug: "toptank-standard-cylindrical-tank-10000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "10000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 10,000 Litres",
    capacity: 10000,
    price: 155250,
    slug: "toptank-deluxe-cylindrical-tank-10000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/10000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/10000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/10000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/10000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/10000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "10000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 10,000 Litres",
    capacity: 10000,
    price: 59500,
    slug: "toptank-triple-layer-water-tank-10000-litres",
    description: "Extra-large capacity tank for major water storage needs. Perfect for schools, hospitals, farms, and large commercial facilities.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Maximum storage capacity",
      "Engineered for longevity"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/10000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "12000L",
    name: "TopTank Standard Cylindrical Tank — 12,000 Litres",
    capacity: 12000,
    price: 130000,
    slug: "toptank-standard-cylindrical-tank-12000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/12000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/12000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/12000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/12000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/12000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "12000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 12,000 Litres",
    capacity: 12000,
    price: 185000,
    slug: "toptank-deluxe-cylindrical-tank-12000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/12000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/12000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/12000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/12000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/12000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "15000L",
    name: "TopTank Standard Cylindrical Tank — 15,000 Litres",
    capacity: 15000,
    price: 230000,
    slug: "toptank-standard-cylindrical-tank-15000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "15000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 15,000 Litres",
    capacity: 15000,
    price: 274500,
    slug: "toptank-deluxe-cylindrical-tank-15000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/15000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/15000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/15000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/15000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/15000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "16000L",
    name: "TopTank Triple Layer Water Tank — 16,000 Litres",
    capacity: 16000,
    price: 96500,
    slug: "toptank-triple-layer-water-tank-16000-litres",
    description: "Industrial-scale water storage for large farms, institutions, and municipal applications. Designed for heavy-duty use.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Heavy-duty industrial design",
      "Exceptional weather resistance"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/15000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "20000L",
    name: "TopTank Triple Layer Water Tank — 20,000 Litres",
    capacity: 20000,
    price: 126500,
    slug: "toptank-triple-layer-water-tank-20000-litres",
    description: "Massive capacity water storage solution for large-scale operations. Ideal for agricultural irrigation, industrial use, and community water supply.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Commercial-grade construction",
      "Optimal for bulk water storage"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "24000L",
    name: "TopTank Standard Cylindrical Tank — 24,000 Litres",
    capacity: 24000,
    price: 280000,
    slug: "toptank-standard-cylindrical-tank-24000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change.",
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
    image: "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "24000L_DELUXE",
    name: "TopTank Deluxe Cylindrical Tank — 24,000 Litres",
    capacity: 24000,
    price: 350000,
    slug: "toptank-deluxe-cylindrical-tank-24000-litres",
    description: "The one-piece, seamless tanks are molded from 100 % Food and Drug Administration (FDA) approved material and will not rust or impart any taste. The corrugated body allows it to stand upright making it more durable and easy to use. The tanks are elastic to provide better impact strength. Elasticity also assists in easy expansion and contraction during temperature change. The difference between the two is that the Heavy Duty tank is designed for Industrial use while the Standard tank is preferred for Domestic use.",
    features: [
      "FDA-approved food-grade material",
      "One-piece seamless construction",
      "Corrugated body for durability",
      "Elastic for impact strength",
      "Temperature expansion resistant"
    ],
    specifications: {
      layers: "Deluxe",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/24000l_Deluxe_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/24000l_Deluxe_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/24000l_Deluxe_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/24000l_Deluxe_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/24000l_Deluxe_Cylindrical_Tank_3.png"]
  },
  {
    id: "24000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 24,000 Litres",
    capacity: 24000,
    price: 148500,
    slug: "toptank-triple-layer-water-tank-24000-litres",
    description: "Our largest capacity tank for maximum water storage requirements. Designed for major agricultural, industrial, and municipal applications.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Premium industrial construction",
      "Unmatched storage capacity"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/24000l_Standard_Cylindrical_Tank_3.png"]
  },
  {
    id: "2000L_TRIPLE",
    name: "TopTank Triple Layer Water Tank — 2,000 Litres",
    capacity: 2000,
    price: 13500,
    slug: "toptank-triple-layer-water-tank-2000-litres",
    description: "Medium-capacity water tank suitable for growing families and small businesses. Offers reliable water storage with minimal maintenance.",
    features: [
      "Triple-layer construction for enhanced durability",
      "UV-resistant outer layer",
      "Food-grade inner layer for safe water storage",
      "Reinforced structural design",
      "Easy to clean and maintain"
    ],
    specifications: {
      layers: "Triple Layer",
      material: "High-density polyethylene",
      color: "Black/Blue/White",
      uvProtection: true
    },
    inStock: true,
    image: "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_1.jpg",
    images: ["/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_0.jpeg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_1.jpg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_2.jpeg", "/toptank_scrape/images/2000l_Standard_Cylindrical_Tank_3.png"]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function formatPrice(price: number): string {
  return `Ksh. ${price.toLocaleString()}`;
}

export function formatCapacity(capacity: number): string {
  return `${capacity.toLocaleString()} Litres`;
}
