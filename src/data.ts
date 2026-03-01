import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'tiles',
    name: 'Tiles',
    description: 'Premium Ceramic, Wall, and Floor Tiles',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    icon: 'Grid'
  },
  {
    id: 'pipes-fittings',
    name: 'Pipes & Fittings',
    description: 'Durable PPRC and PVC Solutions',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=800',
    icon: 'Pipette'
  },
  {
    id: 'sanitary-ware',
    name: 'Sanitary Ware',
    description: 'Elegant Wash Basins, Commodes, and Showers',
    image: 'https://images.unsplash.com/photo-1620627812632-e3f172731230?auto=format&fit=crop&q=80&w=800',
    icon: 'ShowerHead'
  },
  {
    id: 'cp-fittings',
    name: 'CP Fittings',
    description: 'High-Quality Taps and Bathroom Accessories',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800',
    icon: 'Droplets'
  },
  {
    id: 'bonds-grouts',
    name: 'Tile Bonds & Grouts',
    description: 'Strong Adhesive and Finishing Solutions',
    image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=800',
    icon: 'FlaskConical'
  },
  {
    id: 'paint',
    name: 'Paint',
    description: 'Vibrant Interior and Exterior Paint Solutions',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    icon: 'Palette'
  }
];

export const PRODUCTS: Record<string, Product[]> = {
  'tiles': [
    { id: 't1', name: 'Ceramic Wall Tiles', brand: 'Time Ceramics', description: 'Premium wall tiles with exquisite designs for kitchens and bathrooms.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600' },
    { id: 't2', name: 'Ceramic Floor Tiles', brand: 'Qiang Sheng', description: 'High-durability floor tiles suitable for both residential and commercial use.', image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=600' },
    { id: 't3', name: 'Matt Finish Tiles', brand: 'Time Ceramics', description: 'Non-slip matt tiles perfect for modern flooring solutions.', image: 'https://images.unsplash.com/photo-1523413184749-734898730999?auto=format&fit=crop&q=80&w=600' },
    { id: 't4', name: 'Decorative Wall Tiles', brand: 'Qiang Sheng', description: 'Artistic wall tiles to add a touch of luxury to your living spaces.', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=600' }
  ],
  'pipes-fittings': [
    { id: 'p1', name: 'PPRC Pipe System', brand: 'Minhas', description: 'Reliable PPRC piping for hot and cold water distribution.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=600' },
    { id: 'p2', name: 'PVC Drainage Fittings', brand: 'Poly Fit', description: 'High-quality PVC fittings for efficient waste management.', image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600' },
    { id: 'p3', name: 'PPRC Elbows & Tees', brand: 'Minhas', description: 'Precision-molded fittings for secure pipe connections.', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600' }
  ],
  'sanitary-ware': [
    { id: 's1', name: 'Luxury Wash Basin', brand: 'Master', description: 'Elegant ceramic wash basins with modern aesthetics.', image: 'https://images.unsplash.com/photo-1620627812632-e3f172731230?auto=format&fit=crop&q=80&w=600' },
    { id: 's2', name: 'English Style Commode', brand: 'IFO', description: 'Premium English commodes with efficient flushing systems.', image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600' },
    { id: 's3', name: 'Indian Style Commode', brand: 'Standard', description: 'Durable and easy-to-clean Indian style commodes.', image: 'https://images.unsplash.com/photo-1564540583246-933e45050493?auto=format&fit=crop&q=80&w=600' },
    { id: 's4', name: 'Wall Shower Set', brand: 'Faisal', description: 'High-pressure wall showers for a refreshing experience.', image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=600' },
    { id: 's5', name: 'Floor Waste Drain', brand: 'Sunlight', description: 'Stainless steel floor wastes for superior drainage.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=600' }
  ],
  'cp-fittings': [
    { id: 'c1', name: 'Premium Basin Mixer', brand: 'Faisal', description: 'Stylish mixers with smooth operation and long life.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=600' },
    { id: 'c2', name: 'Kitchen Sink Tap', brand: 'Millat', description: 'Flexible and durable taps for modern kitchens.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=600' },
    { id: 'c3', name: 'Wall Mounted Tap', brand: 'Faizal', description: 'Space-saving wall taps with elegant chrome finish.', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600' },
    { id: 'c4', name: 'Shower Mixer', brand: 'Polo', description: 'High-quality mixers for controlled water temperature.', image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=600' }
  ],
  'bonds-grouts': [
    { id: 'b1', name: 'Strong Tile Bond', brand: 'Shabbir', description: 'Industrial strength adhesive for large format tiles.', image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=600' },
    { id: 'b2', name: 'Waterproof Tile Grout', brand: 'Aqua', description: 'Stain-resistant grout for a clean and lasting finish.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600' },
    { id: 'b3', name: 'Sika Adhesive', brand: 'Sika', description: 'World-renowned adhesive for specialized construction.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' },
    { id: 'b4', name: 'Sea Star Bond', brand: 'Sea Star', description: 'Reliable and affordable bonding solutions.', image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=600' }
  ],
  'paint': [
    { id: 'pa1', name: 'Interior Plastic Emulsion', brand: 'Master', description: 'Washable and smooth finish for interior walls.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' },
    { id: 'pa2', name: 'Exterior Weather Shield', brand: 'Brighto', description: 'Maximum protection against harsh weather conditions.', image: 'https://images.unsplash.com/photo-1562591176-3293099a3bb3?auto=format&fit=crop&q=80&w=600' },
    { id: 'pa3', name: 'Glossy Enamel Paint', brand: 'Berger', description: 'High-gloss finish for wood and metal surfaces.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' }
  ]
};

export const REVIEWS = [
  { id: 1, name: 'Ahmad Khan', rating: 5, text: 'Best tiles shop in Pabbi. High quality products and reasonable prices.', date: '2 days ago' },
  { id: 2, name: 'Usman Ali', rating: 5, text: 'Very cooperative owner and excellent variety. Highly recommended!', date: '1 week ago' },
  { id: 3, name: 'Bilal Ahmed', rating: 5, text: 'The sanitary ware collection is amazing. Found exactly what I needed.', date: '2 weeks ago' },
  { id: 4, name: 'Zubair Shah', rating: 4, text: 'Great experience. The staff is very helpful and the prices are competitive.', date: '1 month ago' },
  { id: 5, name: 'Hamza Malik', rating: 5, text: 'Quality products and timely delivery. Best in the Zyarat Stop area.', date: '1 month ago' }
];
