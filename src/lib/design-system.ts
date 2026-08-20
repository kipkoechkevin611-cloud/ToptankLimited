/**
 * TopTank Kenya Design System
 * 
 * This file defines the visual design tokens for the TopTank Kenya e-commerce application.
 * All colors, typography, and spacing should reference these tokens for consistency.
 */

/**
 * Color Palette
 */
export const colors = {
  // Primary Colors
  primary: {
    blue: "#063B78", // Deep TopTank Blue
    blueHover: "#052A5C",
    blueLight: "#0A4A96",
  },
  
  // Accent Colors
  accent: {
    yellow: "#FFD21F", // TopTank Yellow
    yellowHover: "#E6BD1B",
    yellowLight: "#FFE066",
  },
  
  // Supporting Colors
  white: "#FFFFFF",
  background: "#F7F8FA",
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  
  // Text Colors
  text: {
    primary: "#111827", // Primary Text
    secondary: "#667085", // Secondary Text
    tertiary: "#9CA3AF", // Tertiary Text
    inverse: "#FFFFFF",
  },
  
  // Status Colors
  success: {
    main: "#15803D",
    light: "#DCFCE7",
    dark: "#166534",
  },
  warning: {
    main: "#F59E0B",
    light: "#FEF3C7",
    dark: "#D97706",
  },
  error: {
    main: "#D92D20", // Sale Red
    light: "#FEE2E2",
    dark: "#B91C1C",
  },
  info: {
    main: "#0284C7",
    light: "#E0F2FE",
    dark: "#0369A1",
  },
} as const;

/**
 * Typography Scale
 */
export const typography = {
  // Font Family
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'].join(', '),
  },
  
  // Font Sizes
  fontSize: {
    // Headings
    h1: {
      desktop: "48px 60px",
      mobile: "32px 38px",
      weight: "700 800",
    },
    h2: {
      desktop: "32px 40px",
      mobile: "25px 30px",
      weight: "700",
    },
    h3: {
      desktop: "24px 28px",
      mobile: "20px 24px",
      weight: "600",
    },
    
    // Product Titles
    productTitle: {
      desktop: "16px 20px",
      mobile: "13px 15px",
      weight: "600",
    },
    
    // Body
    body: {
      desktop: "16px 17px",
      mobile: "14px 16px",
      weight: "400",
    },
    
    // Prices
    price: {
      desktop: "18px 24px",
      mobile: "15px 18px",
      weight: "700",
    },
    priceOriginal: {
      desktop: "14px 16px",
      mobile: "11px 13px",
      weight: "400",
    },
    
    // Small Text
    small: {
      desktop: "12px 14px",
      mobile: "11px 12px",
      weight: "400",
    },
  },
  
  // Line Heights
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

/**
 * Spacing Scale
 */
export const spacing = {
  // Container
  container: {
    maxWidth: "1280px 1440px",
    padding: "px-4 sm:px-6 lg:px-8",
  },
  
  // Section Spacing
  section: {
    small: "py-8",
    medium: "py-12",
    large: "py-16",
    xlarge: "py-24",
  },
  
  // Component Spacing
  gap: {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-6",
    "2xl": "gap-8",
  },
  
  // Padding
  padding: {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  },
} as const;

/**
 * Border Radius
 */
export const borderRadius = {
  none: "0",
  sm: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
} as const;

/**
 * Shadows
 */
export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
} as const;

/**
 * Transitions
 */
export const transitions = {
  fast: "150ms ease-in-out",
  normal: "200ms ease-in-out",
  slow: "300ms ease-in-out",
} as const;

/**
 * Z-Index Scale
 */
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

/**
 * Breakpoints (for reference - Tailwind handles these)
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/**
 * Grid Configurations
 */
export const grid = {
  // Product Grid
  products: {
    mobile: "grid-cols-2",
    tablet: "md:grid-cols-3",
    desktop: "lg:grid-cols-4",
    gap: "gap-3 md:gap-5 lg:gap-6",
  },
  
  // Category Grid
  categories: {
    mobile: "grid-cols-2",
    tablet: "md:grid-cols-3",
    desktop: "lg:grid-cols-5",
    gap: "gap-4 md:gap-6",
  },
} as const;

/**
 * Utility function for formatting prices in KES
 */
export const formatKES = (amount: number): string => {
  return `KSh ${new Intl.NumberFormat("en-KE").format(amount)}`;
};

/**
 * Utility function for calculating sale price
 */
export const calculateSalePrice = (originalPrice: number, discountPercent: number = 20): number => {
  return Math.round(originalPrice * (1 - discountPercent / 100));
};

/**
 * Utility function for getting discount percentage
 */
export const getDiscountPercent = (originalPrice: number, salePrice: number): number => {
  if (!originalPrice || !salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};
