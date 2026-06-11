// API Constants
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  ORDERS: '/orders',
  AUTH: '/auth',
  USERS: '/users',
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  'All',
  'Accessories',
  'Fashion',
  'Jewelry',
  'Fragrance',
  'Watches',
  'Bags',
];

// Sort Options
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' },
];

// Price Range
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 10000,
};

// Pagination
export const ITEMS_PER_PAGE = 12;
