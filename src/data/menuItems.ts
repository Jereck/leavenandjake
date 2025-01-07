export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "plain-sourdough",
    name: "Classic Sourdough",
    description: "Our signature sourdough with a perfect crust and tender crumb.",
    price: 6.99,
    image: '/sourdough-1'
  },
  {
    id: "coffee-sourdough",
    name: "Coffee Sourdough",
    description: "A unique blend of our classic sourdough infused with rich coffee flavors.",
    price: 7.99,
    image: '/sourdough-1'
  },
  {
    id: "cinnamon-sugar-sourdough",
    name: "Cinnamon Sugar Sourdough",
    description: "Sweet and aromatic, perfect for breakfast or as a treat.",
    price: 7.99,
    image: '/sourdough-1'
  },
  {
    id: "rosemary-garlic-sourdough",
    name: "Rosemary Garlic Sourdough",
    description: "Savory herbs and garlic complement our tangy sourdough.",
    price: 8.49,
    image: '/sourdough-1'
  },
  {
    id: "jalapeno-cheddar-sourdough",
    name: "Jalapeño Cheddar Sourdough",
    description: "Spicy jalapeños and sharp cheddar cheese create a bold flavor profile.",
    price: 8.99,
    image: '/sourdough-1'
  },
  {
    id: "whole-wheat-sourdough",
    name: "Whole Wheat Sourdough",
    description: "A hearty and nutritious whole wheat version of our classic sourdough.",
    price: 7.49,
    image: '/sourdough-1'
  }
];

