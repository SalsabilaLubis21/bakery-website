
import { MenuItem, Location } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers and creamy mascarpone.',
    price: '$12.00',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800'
  },
  {
    id: '2',
    name: 'Gold Leaf Croissant',
    description: '24-hour fermented dough with AOP butter and a hint of honey.',
    price: '$8.50',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800'
  },
  {
    id: '3',
    name: 'Velvet Raspberry Tart',
    description: 'Fresh organic raspberries with white chocolate ganache.',
    price: '$10.00',
    category: 'Artisan',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800'
  },
  {
    id: '4',
    name: 'Espresso Macchiato',
    description: 'Rich dark roast with a dollop of velvety milk foam.',
    price: '$4.50',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    name: 'Downtown Flagship',
    address: '123 Luxury Ave, Manhattan, NY',
    hours: '08:00 AM - 09:00 PM',
    phone: '+1 (212) 555-0198'
  }
];
