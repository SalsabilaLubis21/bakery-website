
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cakes' | 'Pastries' | 'Drinks' | 'Artisan';
  image: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
}
