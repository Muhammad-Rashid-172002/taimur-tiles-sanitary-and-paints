import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'tiles',
    name: 'Tiles',
    description: 'Premium Ceramic, Wall, and Floor Tiles',
    image: '/images/tile1.jpg',
    icon: 'Grid'
  },
  {
    id: 'pipes-fittings',
    name: 'Pipes & Fittings',
    description: 'Durable PPRC and PVC Solutions',
    image: '/images/pipes-fittings.jpeg',
    icon: 'Pipette'
  },
  {
    id: 'sanitary-ware',
    name: 'Sanitary Ware',
    description: 'Elegant Wash Basins, Commodes, and Showers',
    image: '/images/sanitary-ware.jpg',
    icon: 'ShowerHead'
  },
  {
    id: 'cp-fittings',
    name: 'CP Fittings',
    description: 'High-Quality Taps and Bathroom Accessories',
    image: '/images/cp-fittings.jpeg',
    icon: 'Droplets'
  },
  {
    id: 'bonds-grouts',
    name: 'Tile Bonds & Grouts',
    description: 'Strong Adhesive and Finishing Solutions',
    image: '/images/bonds-grouts.jpeg',
    icon: 'FlaskConical'
  },
  {
    id: 'paint',
    name: 'Paint',
    description: 'Vibrant Interior and Exterior Paint Solutions',
    image: '/images/paint.jpeg',
    icon: 'Palette'
  }
];

export const PRODUCTS: Record<string, Product[]> = {
  'tiles': [
    { id: 't1', name: 'Ceramic Wall Tiles', brand: 'Time Ceramics', description: 'Premium wall tiles with exquisite designs for kitchens and bathrooms.', image: '/images/tiles.jpeg' },
    { id: 't2', name: 'Ceramic Floor Tiles', brand: 'Qiang Sheng', description: 'High-durability floor tiles suitable for both residential and commercial use.', image: '/images/tiles2.jpeg' },
    { id: 't3', name: 'Matt Finish Tiles', brand: 'Time Ceramics', description: 'Non-slip matt tiles perfect for modern flooring solutions.', image: '/images/tiles3.jpeg' },
    { id: 't4', name: 'Decorative Wall Tiles', brand: 'Qiang Sheng', description: 'Artistic wall tiles to add a touch of luxury to your living spaces.', image: '/images/tiles4.jpg' }
  ],
  'pipes-fittings': [
    { id: 'p1', name: 'PPRC Pipe System', brand: 'Minhas', description: 'Reliable PPRC piping for hot and cold water distribution.', image: '/images/pipes-fittings1.jpeg' },
    { id: 'p2', name: 'PVC Drainage Fittings', brand: 'Poly Fit', description: 'High-quality PVC fittings for efficient waste management.', image: '/images/pipes-fittings2.jpeg' },
    { id: 'p3', name: 'PPRC Elbows & Tees', brand: 'Minhas', description: 'Precision-molded fittings for secure pipe connections.', image: '/images/pipes-fittings3.jpeg' },
    { id: 'p4', name: 'PPRC Ball Valve', brand: 'Minhas', description: 'Durable ball valves for reliable flow control.', image: '/images/PPRC Ball Valve.jpeg' }
  ],
  'sanitary-ware': [
    { id: 's1', name: 'Luxury Wash Basin', brand: 'Master', description: 'Elegant ceramic wash basins with modern aesthetics.', image: '/images/sanitary-ware1.jpg' },
    { id: 's2', name: 'English Style Commode', brand: 'IFO', description: 'Premium English commodes with efficient flushing systems.', image: '/images/english style commode.jpeg' },
    { id: 's3', name: 'Indian Style Commode', brand: 'Standard', description: 'Durable and easy-to-clean Indian style commodes.', image: '/images/indian-commond.jpg' },
    { id: 's4', name: 'Wall Shower Set', brand: 'Faisal', description: 'High-pressure wall showers for a refreshing experience.', image: '/images/wall shower set.jpeg' },
    { id: 's5', name: 'Floor Waste Drain', brand: 'Sunlight', description: 'Stainless steel floor wastes for superior drainage.', image: '/images/sanitary-ware5.jpeg' }
  ],
  'cp-fittings': [
    { id: 'c1', name: 'Premium Basin Mixer', brand: 'Faisal', description: 'Stylish mixers with smooth operation and long life.', image: '/images/cp-fittings1.jpeg' },
    { id: 'c2', name: 'Kitchen Sink Tap', brand: 'Millat', description: 'Flexible and durable taps for modern kitchens.', image: '/images/cp-fittings2.jpeg' },
    { id: 'c3', name: 'Wall Mounted Tap', brand: 'Faizal', description: 'Space-saving wall taps with elegant chrome finish.', image: '/images/cp-fittings3.jpeg' },
    { id: 'c4', name: 'Shower Mixer', brand: 'Polo', description: 'High-quality mixers for controlled water temperature.', image: '/images/cp-fittings4.jpeg' }
  ],
  'bonds-grouts': [
    { id: 'b1', name: 'Strong Tile Bond', brand: 'Shabbir', description: 'Industrial strength adhesive for large format tiles.', image: '/images/bonds-grouts1.jpeg' },
    { id: 'b2', name: 'Waterproof Tile Grout', brand: 'Aqua', description: 'Stain-resistant grout for a clean and lasting finish.', image: '/images/bonds-grouts2.jpeg' },
    { id: 'b3', name: 'Sika Adhesive', brand: 'Sika', description: 'World-renowned adhesive for specialized construction.', image: '/images/bonds-grouts3.jpeg' },
    { id: 'b4', name: 'Sea Star Bond', brand: 'Sea Star', description: 'Reliable and affordable bonding solutions.', image: '/images/bonds-grouts4.jpeg' }
  ],
  'paint': [
    { id: 'pa1', name: 'Interior Plastic Emulsion', brand: 'Master', description: 'Washable and smooth finish for interior walls.', image: '/images/paint1.jpeg' },
    { id: 'pa2', name: 'Exterior Weather Shield', brand: 'Brighto', description: 'Maximum protection against harsh weather conditions.', image: '/images/paint2.jpeg' },
    { id: 'pa3', name: 'Glossy Enamel Paint', brand: 'Berger', description: 'High-gloss finish for wood and metal surfaces.', image: '/images/paint3.jpeg' }
  ]
};

export const REVIEWS = [
  { id: 1, name: 'Ahmad Khan', rating: 5, text: 'Best tiles shop in Pabbi. High quality products and reasonable prices.', date: '2 days ago' },
  { id: 2, name: 'Usman Ali', rating: 5, text: 'Very cooperative owner and excellent variety. Highly recommended!', date: '1 week ago' },
  { id: 3, name: 'Bilal Ahmed', rating: 5, text: 'The sanitary ware collection is amazing. Found exactly what I needed.', date: '2 weeks ago' },
  { id: 4, name: 'Zubair Shah', rating: 4, text: 'Great experience. The staff is very helpful and the prices are competitive.', date: '1 month ago' },
  { id: 5, name: 'Hamza Malik', rating: 5, text: 'Quality products and timely delivery. Best in the Zyarat Stop area.', date: '1 month ago' }
];
