// Mock product data
export const products = [
  // ── Product JM ──
  {
    id: 'p1',
    name: 'JM Magnetic Board - Classic White',
    category: 'Product JM',
    subcategory: 'JM Board A',
    price: 45.99,
    image: 'https://kalamitica.com/img/cms/Blog/img_copertina_parete-verde.jpg',
    description: 'Premium magnetic wall board with smooth white surface. Perfect for modern kitchens and offices.',
    features: ['Easy installation', 'Strong magnetic hold', 'Scratch-resistant', 'Easy to clean'],
    dimensions: '60cm x 90cm',
    material: 'High-grade steel with powder coating'
  },
  {
    id: 'p2',
    name: 'JM Magnetic Board - Sleek Black',
    category: 'Product JM',
    subcategory: 'JM Board A',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    description: 'Elegant black magnetic board that adds sophistication to any space.',
    features: ['Fingerprint resistant', 'Ultra-strong magnets', 'Modern design', 'Long-lasting'],
    dimensions: '60cm x 90cm',
    material: 'High-grade steel with matte black finish'
  },
  {
    id: 'p3',
    name: 'JM Magnetic Board - Natural Wood Frame',
    category: 'Product JM',
    subcategory: 'JM Board A',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    description: 'Combines functionality with natural aesthetics. Wood frame adds warmth to your space.',
    features: ['Real wood frame', 'Eco-friendly', 'Handcrafted quality', 'Versatile design'],
    dimensions: '50cm x 70cm',
    material: 'Steel core with oak wood frame'
  },
  {
    id: 'p4',
    name: 'JM Magnetic Board - Large Premium',
    category: 'Product JM',
    subcategory: 'JM Board A',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop',
    description: 'Extra-large magnetic surface for maximum organization and creativity.',
    features: ['XXL size', 'Commercial grade', 'Heavy-duty mounting', 'Professional quality'],
    dimensions: '120cm x 90cm',
    material: 'Industrial-grade steel'
  },
  {
    id: 'p5',
    name: 'JM Board Slim - Rose Gold',
    category: 'Product JM',
    subcategory: 'JM Board B',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    description: 'Slim-profile magnetic board with a luxurious rose gold finish.',
    features: ['Ultra-slim 2mm profile', 'Premium finish', 'Strong magnets', 'Wall-mounted'],
    dimensions: '60cm x 40cm',
    material: 'Steel with rose gold powder coating'
  },
  {
    id: 'p6',
    name: 'JM Board Slim - Sage Green',
    category: 'Product JM',
    subcategory: 'JM Board B',
    price: 64.99,
    image: 'https://kalamitica.com/img/cms/Blog/img_copertina_parete-verde.jpg',
    description: 'Trendy sage green finish that blends beautifully with natural home decor.',
    features: ['Trending color', 'Matte finish', 'Easy mounting', 'Modern design'],
    dimensions: '60cm x 40cm',
    material: 'Steel with sage green powder coating'
  },

  // ── Magnetic Tools ──
  {
    id: 't1',
    name: 'Magnetic Knife Holder',
    category: 'Magnetic Tools',
    subcategory: 'Kitchen',
    price: 24.99,
    image: 'https://i.etsystatic.com/12328946/r/il/365631/3942801370/il_570xN.3942801370_713h.jpg',
    description: 'Strong magnetic strip for safely storing kitchen knives and metal tools.',
    features: ['Space-saving', 'Safe storage', 'Easy access', 'Sleek design'],
    dimensions: '40cm length',
    material: 'Bamboo with embedded magnets'
  },
  {
    id: 't2',
    name: 'Magnetic Spice Rack Set',
    category: 'Magnetic Tools',
    subcategory: 'Kitchen',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop',
    description: 'Set of 12 magnetic containers for organizing spices on your magnetic wall.',
    features: ['12 containers included', 'See-through lids', 'Labels included', 'Stackable'],
    dimensions: 'Each: 6cm diameter',
    material: 'Stainless steel with magnetic base'
  },
  {
    id: 't3',
    name: 'Magnetic Hooks - Set of 6',
    category: 'Magnetic Tools',
    subcategory: 'Accessories',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    description: 'Versatile magnetic hooks for hanging utensils, towels, and more.',
    features: ['Strong hold - 2kg each', 'Rust-proof', 'Multiple colors', 'No installation'],
    dimensions: '5cm x 3cm',
    material: 'Stainless steel'
  },
  {
    id: 't4',
    name: 'Magnetic Whiteboard Markers',
    category: 'Magnetic Tools',
    subcategory: 'Accessories',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=400&fit=crop',
    description: 'Set of 4 dry-erase markers with magnetic caps.',
    features: ['4 colors', 'Magnetic attachment', 'Easy erase', 'Non-toxic ink'],
    dimensions: 'Standard marker size',
    material: 'Plastic with neodymium magnet'
  },
  {
    id: 't5',
    name: 'Magnetic Paper Towel Holder',
    category: 'Magnetic Tools',
    subcategory: 'Kitchen',
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JNODjTZ4qgt0P-eVpj8EnxeFj79qWu1ssw&s',
    description: 'Convenient magnetic paper towel dispenser for your kitchen wall.',
    features: ['One-hand operation', 'Fits standard rolls', 'Rust-resistant', 'Modern look'],
    dimensions: '30cm height',
    material: 'Brushed stainless steel'
  },

  // ── Project ──
  {
    id: 'pr1',
    name: 'Cafe Minimalist - HCMC',
    category: 'Project',
    subcategory: 'Commercial',
    price: 0,
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    description: 'Full magnetic wall installation for a minimalist café in Ho Chi Minh City. Custom-sized panels with embedded menu displays.',
    features: ['Custom sizing', 'Full wall coverage', 'Menu display integration', 'Professional install'],
    dimensions: 'Custom',
    material: 'Industrial-grade steel panels'
  },
  {
    id: 'pr2',
    name: 'Modern Home Kitchen - Hanoi',
    category: 'Project',
    subcategory: 'Residential',
    price: 0,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    description: 'Complete kitchen magnetic wall system for a modern home in Hanoi, featuring spice racks, knife holders, and whiteboard panels.',
    features: ['Full kitchen system', 'Custom layout', 'Matching accessories', 'Clean installation'],
    dimensions: 'Custom',
    material: 'High-grade steel with white finish'
  },
  {
    id: 'pr3',
    name: 'Office Collaboration Space - Da Nang',
    category: 'Project',
    subcategory: 'Commercial',
    price: 0,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    description: 'Large-format magnetic whiteboard installation for a tech company\'s collaboration area in Da Nang.',
    features: ['Floor-to-ceiling panels', 'Whiteboard surface', 'Modular design', 'Branded finish'],
    dimensions: 'Custom',
    material: 'Commercial-grade steel'
  }
];

// ── Category tree used by the sidebar ──
export const categoryTree = [
  {
    label: 'Product JM',
    key: 'Product JM',
    children: [
      { label: 'JM Board A', key: 'JM Board A' },
      { label: 'JM Board B', key: 'JM Board B' },
    ],
  },
  {
    label: 'Magnetic Tools',
    key: 'Magnetic Tools',
    children: [
      { label: 'Kitchen', key: 'Kitchen' },
      { label: 'Accessories', key: 'Accessories' },
    ],
  },
  {
    label: 'Project',
    key: 'Project',
    children: [
      { label: 'Commercial', key: 'Commercial' },
      { label: 'Residential', key: 'Residential' },
    ],
  },
];

// ── Keep existing news export ──
export const news = [
  {
    id: 'n1',
    title: 'New JM Board Collection Launches',
    category: 'Product',
    date: '2024-01-15',
    excerpt: 'Introducing our latest range of magnetic boards with enhanced features and modern designs.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
  },
  {
    id: 'n2',
    title: 'Top 10 Kitchen Organization Tips',
    category: 'Home',
    date: '2024-01-10',
    excerpt: 'Transform your kitchen space with these expert organization tips using magnetic solutions.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop'
  },
  {
    id: 'n3',
    title: 'Sustainable Materials in Our Products',
    category: 'Others',
    date: '2024-01-05',
    excerpt: 'Learn about our commitment to using eco-friendly and sustainable materials.',
    image: 'https://shopcherrypick.com/cdn/shop/files/IMG_3453_cba90b8a-f47e-4bbb-a949-75029cbe179b.jpg?v=1756237381&width=1946'
  },
  {
    id: 'n4',
    title: 'Maximize Your Wall Space Efficiently',
    category: 'Home',
    date: '2023-12-28',
    excerpt: 'Discover creative ways to utilize vertical space in small apartments.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop'
  },
  {
    id: 'n5',
    title: 'JM Board Featured in Design Magazine',
    category: 'Others',
    date: '2023-12-20',
    excerpt: 'Our innovative magnetic boards were featured in the latest issue of Modern Home Design.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
  },
  {
    id: 'n6',
    title: 'Magnetic Tools for Professional Kitchens',
    category: 'Product',
    date: '2023-12-15',
    excerpt: 'Why professional chefs are choosing our magnetic organization systems.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop'
  }
];


// Mock banner data
export const banners = [
  {
    id: 'b1',
    title: 'Modern Kitchen Solutions',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=800&fit=crop',
    products: ['p1', 'p2', 't1']
  },
  {
    id: 'b2',
    title: 'Organize Your Space',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=800&fit=crop',
    products: ['p3', 't2', 't3']
  },
  {
    id: 'b3',
    title: 'Professional Grade Quality',
    image: 'https://theyamazakihome.com/cdn/shop/files/phv6af4yx3s5nf5p2arw_1000x.jpg?v=1769656199',
    products: ['p4', 't4', 't5']
  }
];

// Mock partners
export const partners = [
  { id: 1, name: 'Partner 1', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/960px-ChatGPT_logo.svg.png' },
  { id: 2, name: 'Partner 2', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png' },
  { id: 3, name: 'Partner 3', logo: 'https://suno.vn/blog/wp-content/uploads/2014/12/nike-lich-su-thiet-ke-logo.jpg' },
  { id: 4, name: 'Partner 4', logo: 'https://pano.vn/wp-content/uploads/2015/09/mixed-logo.jpg' },
  { id: 5, name: 'Partner 5', logo: 'https://vn4u.vn/wp-content/uploads/2023/09/logo-co-tinh-nhat-quan-2.png' },
  { id: 6, name: 'Partner 6', logo: 'https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA' }
];