/**
 * Canonical Category Configuration
 * 
 * This file defines the authoritative category and subcategory structure
 * for the TopTank Kenya e-commerce application.
 * 
 * All filtering, routing, and product display must use these canonical identifiers.
 */

export type CategoryId =
  | "TANKS"
  | "bins"
  | "Road Safety & Industrial"
  | "Sanitation"
  | "Lifestyle";

export type TankSubcategory =
  | "Vertical Cylindrical"
  | "Horizontal Septic Tank"
  | "Rectangular Loft Tank"
  | "Underground Spherical Tank"
  | "Nestable tank"
  | "Conical Hopper Tank"
  | "Barrel"
  | "Roller Drum";

export type BinSubcategory =
  | "Garbage Bins"
  | "Dustbins"
  | "Cylindrical Tanks";

export type RoadSafetySubcategory =
  | "Pallets"
  | "Road Barriers"
  | "Traffic Control";

export type SanitationSubcategory =
  | "Handwash Basins"
  | "Manholes"
  | "Pit Latrine Slabs";

export type LifestyleSubcategory =
  | "Cooler Boxes"
  | "Planters";

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  description: string;
  imageDirectory: string;
  subcategories: string[];
  icon?: string;
}

export interface SubcategoryConfig {
  id: string;
  label: string;
  parent: CategoryId;
  imageDirectory: string;
}

/**
 * Canonical Category Configuration
 */
export const CATEGORY_CONFIG: Record<CategoryId, CategoryConfig> = {
  TANKS: {
    id: "TANKS",
    label: "Water Tanks",
    description: "Premium triple-layer water storage tanks for homes, farms, and businesses",
    imageDirectory: "/TANKS/",
    subcategories: [
      "Vertical Cylindrical",
      "Horizontal Septic Tank",
      "Rectangular Loft Tank",
      "Underground Spherical Tank",
      "Nestable tank",
      "Conical Hopper Tank",
      "Barrel",
      "Roller Drum"
    ],
    icon: "droplets"
  },
  bins: {
    id: "bins",
    label: "Bins",
    description: "Durable waste management solutions for residential and commercial use",
    imageDirectory: "/bins/",
    subcategories: ["Garbage Bins", "Dustbins", "Cylindrical Tanks"],
    icon: "trash"
  },
  "Road Safety & Industrial": {
    id: "Road Safety & Industrial",
    label: "Road Safety & Industrial",
    description: "Industrial safety equipment and road traffic control solutions",
    imageDirectory: "/Road Safety & Industrial/",
    subcategories: ["Pallets", "Road Barriers", "Traffic Control"],
    icon: "shield"
  },
  Sanitation: {
    id: "Sanitation",
    label: "Sanitation",
    description: "Sanitation solutions for hygiene and waste management",
    imageDirectory: "/Sanitation/",
    subcategories: ["Handwash Basins", "Manholes", "Pit Latrine Slabs"],
    icon: "heart"
  },
  Lifestyle: {
    id: "Lifestyle",
    label: "Lifestyle",
    description: "Lifestyle products for modern living",
    imageDirectory: "/Lifestyle/",
    subcategories: ["Cooler Boxes", "Planters"],
    icon: "leaf"
  }
};

/**
 * Canonical Subcategory Configuration
 */
export const SUBCATEGORY_CONFIG: Record<string, SubcategoryConfig> = {
  // Tank Subcategories
  "vertical-cylindrical": {
    id: "vertical-cylindrical",
    label: "Vertical Cylindrical Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/verticalcylindrical tank/"
  },
  "horizontal-septic": {
    id: "horizontal-septic",
    label: "Horizontal Septic Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/Horizontal Septic Tank/"
  },
  "rectangular-loft": {
    id: "rectangular-loft",
    label: "Rectangular Loft Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/Rectangular Loft Tank/"
  },
  "underground-spherical": {
    id: "underground-spherical",
    label: "Underground Spherical Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/Underground Spherical Tank/"
  },
  "nestable": {
    id: "nestable",
    label: "Nestable Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/Nestable tank/"
  },
  "conical-hopper": {
    id: "conical-hopper",
    label: "Conical Hopper Tanks",
    parent: "TANKS",
    imageDirectory: "/TANKS/Conical Hopper Tank/"
  },
  "barrel": {
    id: "barrel",
    label: "Barrels",
    parent: "TANKS",
    imageDirectory: "/TANKS/Barrel/"
  },
  "roller-drum": {
    id: "roller-drum",
    label: "Roller Drums",
    parent: "TANKS",
    imageDirectory: "/TANKS/Roller Drum/"
  },
  // Bin Subcategories
  "garbage-bins": {
    id: "garbage-bins",
    label: "Garbage Bins",
    parent: "bins",
    imageDirectory: "/bins/"
  },
  "dustbins": {
    id: "dustbins",
    label: "Dustbins",
    parent: "bins",
    imageDirectory: "/bins/"
  },
  "cylindrical-tanks": {
    id: "cylindrical-tanks",
    label: "Cylindrical Tanks",
    parent: "bins",
    imageDirectory: "/bins/"
  },
  // Road Safety Subcategories
  "pallets": {
    id: "pallets",
    label: "Pallets",
    parent: "Road Safety & Industrial",
    imageDirectory: "/Road Safety & Industrial/"
  },
  "road-barriers": {
    id: "road-barriers",
    label: "Road Barriers",
    parent: "Road Safety & Industrial",
    imageDirectory: "/Road Safety & Industrial/"
  },
  "traffic-control": {
    id: "traffic-control",
    label: "Traffic Control",
    parent: "Road Safety & Industrial",
    imageDirectory: "/Road Safety & Industrial/"
  },
  // Sanitation Subcategories
  "handwash-basins": {
    id: "handwash-basins",
    label: "Handwash Basins",
    parent: "Sanitation",
    imageDirectory: "/Sanitation/"
  },
  "manholes": {
    id: "manholes",
    label: "Manholes",
    parent: "Sanitation",
    imageDirectory: "/Sanitation/"
  },
  "latrine-slabs": {
    id: "latrine-slabs",
    label: "Latrine Slabs",
    parent: "Sanitation",
    imageDirectory: "/Sanitation/"
  },
  // Lifestyle Subcategories
  "cooler-boxes": {
    id: "cooler-boxes",
    label: "Cooler Boxes",
    parent: "Lifestyle",
    imageDirectory: "/Lifestyle/"
  },
  "planters": {
    id: "planters",
    label: "Planters",
    parent: "Lifestyle",
    imageDirectory: "/Lifestyle/"
  }
};

/**
 * Utility function to get category config by ID
 */
export function getCategoryConfig(id: string): CategoryConfig | undefined {
  return CATEGORY_CONFIG[id as CategoryId];
}

/**
 * Utility function to get subcategory config by ID
 */
export function getSubcategoryConfig(id: string): SubcategoryConfig | undefined {
  return SUBCATEGORY_CONFIG[id];
}

/**
 * Utility function to get all subcategories for a category
 */
export function getSubcategoriesByCategory(categoryId: CategoryId): SubcategoryConfig[] {
  const category = CATEGORY_CONFIG[categoryId];
  if (!category) return [];
  
  return category.subcategories
    .map(subId => SUBCATEGORY_CONFIG[subId])
    .filter(Boolean) as SubcategoryConfig[];
}

/**
 * Mapping function to convert legacy category names to canonical IDs
 * This provides backward compatibility with existing product data
 */
export function normalizeCategoryId(category: string): CategoryId {
  const normalized = category.toLowerCase().trim();
  
  const mapping: Record<string, CategoryId> = {
    "tanks": "TANKS",
    "bins": "bins",
    "road safety & industrial": "Road Safety & Industrial",
    "sanitation": "Sanitation",
    "lifestyle": "Lifestyle"
  };
  
  return mapping[normalized] || "TANKS";
}

/**
 * Mapping function to convert legacy subcategory names to canonical IDs
 */
export function normalizeSubcategoryId(subcategory: string, category: string): string {
  const normalized = subcategory.toLowerCase().trim();
  const categoryId = normalizeCategoryId(category);
  
  // Tank subcategory mappings
  if (categoryId === "TANKS") {
    const tankMapping: Record<string, string> = {
      "vertical cylindrical": "vertical-cylindrical",
      "horizontal septic tank": "horizontal-septic",
      "rectangular loft tank": "rectangular-loft",
      "underground spherical tank": "underground-spherical",
      "nestable tank": "nestable",
      "conical hopper tank": "conical-hopper",
      "barrel": "barrel",
      "roller drum": "roller-drum"
    };
    return tankMapping[normalized] || normalized;
  }
  
  // Bin subcategory mappings
  if (categoryId === "bins") {
    const binMapping: Record<string, string> = {
      "garbage bins": "garbage-bins",
      "dustbins": "dustbins",
      "cylindrical tanks": "cylindrical-tanks"
    };
    return binMapping[normalized] || normalized;
  }
  
  // Road Safety subcategory mappings
  if (categoryId === "Road Safety & Industrial") {
    const safetyMapping: Record<string, string> = {
      "pallets": "pallets",
      "road barriers": "road-barriers",
      "traffic control": "traffic-control"
    };
    return safetyMapping[normalized] || normalized;
  }
  
  // Sanitation subcategory mappings
  if (categoryId === "Sanitation") {
    const sanitationMapping: Record<string, string> = {
      "handwash basins": "handwash-basins",
      "manholes": "manholes",
      "latrine slabs": "latrine-slabs"
    };
    return sanitationMapping[normalized] || normalized;
  }
  
  // Lifestyle subcategory mappings
  if (categoryId === "Lifestyle") {
    const lifestyleMapping: Record<string, string> = {
      "cooler boxes": "cooler-boxes",
      "planters": "planters"
    };
    return lifestyleMapping[normalized] || normalized;
  }
  
  return normalized;
}
