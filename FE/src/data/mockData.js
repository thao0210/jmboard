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

  // ── Project (hiển thị trong Products grid) ──
  {
    id: 'pr1',
    name: 'Cafe Minimalist - HCMC',
    category: 'Project',
    subcategory: 'Commercial',
    price: 0,
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    description: 'Full magnetic wall installation for a minimalist café in Ho Chi Minh City.',
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
    description: 'Complete kitchen magnetic wall system for a modern home in Hanoi.',
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
    description: "Large-format magnetic whiteboard installation for a tech company's collaboration area in Da Nang.",
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

// ── Projects — dùng cho /projects/:id ──
export const projects = [
  {
    id: 'pr1',
    slug: 'cafe-minimalist-hcmc',
    title: 'Cafe Minimalist — Ho Chi Minh City',
    type: 'Commercial',
    location: 'Ho Chi Minh City, Vietnam',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&h=700&fit=crop',
    content: `
      <p>A full magnetic wall installation for a minimalist café in District 1, HCMC. Custom-sized steel panels double as both décor and a flexible menu display system.</p>
      <h2>About the Project</h2>
      <p>The client needed a wall solution that could handle daily menu updates without printing costs, while keeping the space warm and minimal. Standard whiteboards felt too office-like for the brand aesthetic.</p>
      <p>We installed floor-to-ceiling JM steel panels in a warm off-white finish, paired with our magnetic menu card system. The panels blend seamlessly into the plaster wall and allow staff to swap menu cards in seconds using strong neodymium magnets.</p>
      <p>The café reduced printed menu costs by over 80% in the first quarter. The installation was featured in a local design blog within weeks of opening.</p>
    `,
  },
  {
    id: 'pr2',
    slug: 'modern-home-kitchen-hanoi',
    title: 'Modern Home Kitchen — Hanoi',
    type: 'Residential',
    location: 'Hanoi, Vietnam',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=700&fit=crop',
    content: `
      <p>A complete magnetic kitchen wall system for a newly renovated townhouse in Tay Ho, Hanoi — integrating spice racks, knife holders, and a magnetic whiteboard panel into one cohesive wall.</p>
      <h2>About the Project</h2>
      <p>A compact kitchen with limited counter space required a vertical organization system that matched the home's Japandi interior style — functional yet visually quiet.</p>
      <p>We designed a 3-zone magnetic wall: a knife-and-tool strip in natural bamboo, a modular spice container grid, and a frosted-finish whiteboard panel for grocery lists and meal planning. All mounted flush on a single JM backing board.</p>
      <p>The homeowner reclaimed over 60% of counter space. The unified wall system became the kitchen's visual centerpiece and generated significant referral inquiries for JMBOARD.</p>
    `,
  },
  {
    id: 'pr3',
    slug: 'office-collaboration-da-nang',
    title: 'Office Collaboration Space — Da Nang',
    type: 'Commercial',
    location: 'Da Nang, Vietnam',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=700&fit=crop',
    content: `
      <p>A large-format magnetic whiteboard installation for a fast-growing tech company's new collaboration hub in Da Nang, supporting agile workflows and remote-team presentations.</p>
      <h2>About the Project</h2>
      <p>The company needed a large writable surface that could also hold printed sprint cards and device cables with magnets, without the institutional look of standard whiteboards.</p>
      <p>We installed 4m × 2.4m modular JM panels in the company's brand color with a dual-surface finish: one half dry-erase whiteboard, one half matte magnetic board. Custom-branded magnetic holders were included for markers, erasers, and sprint card sets.</p>
      <p>Team velocity scores improved as sprint planning became more visual and tactile. NovaTech subsequently commissioned a second installation in their Hanoi office.</p>
    `,
  },
];

// ── Value Pages — dùng cho /about/values/:id ──
export const valuePages = [
  {
    id: 'quality',
    title: 'Uncompromising Quality',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=600&fit=crop',
    content: `
      <p>At JMBOARD, quality is not a checkbox — it is the starting point for every decision we make. From raw material sourcing to final surface treatment, each step is governed by strict tolerances and tested under real-world conditions.</p>
      <h2>Materials That Meet the Moment</h2>
      <p>We use high-grade cold-rolled steel for all our board cores, treated with an electrostatic powder coat that resists chipping, humidity, and daily contact. Our finishes are scratch-tested to 10,000 wipes — because a beautiful wall should stay beautiful.</p>
      <h2>Japanese Engineering Standards</h2>
      <p>Our manufacturing partners follow JIS (Japanese Industrial Standards) for dimensional accuracy and surface uniformity. This means every panel you receive fits exactly as designed, with no warping, no gaps, and no guesswork during installation.</p>
      <p>We believe that quality is the most honest form of customer care. When you invest in JMBOARD, you are investing in a surface that will serve your space for years — not months.</p>
    `,
  },
  {
    id: 'innovation',
    title: 'Purposeful Innovation',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    content: `
      <p>Innovation at JMBOARD means listening first. We observe how people actually live and work — the friction in their kitchens, the clutter on their desks, the missed notes on the fridge — and we design products that remove that friction quietly and elegantly.</p>
      <h2>From Insight to Product</h2>
      <p>Each new product begins with a documented pain point from a real user. Our JM Board Slim line was born from feedback from apartment dwellers who wanted magnetic functionality without the visual weight of a traditional board. The result was a 2mm-profile panel that disappears into the wall.</p>
      <h2>Modular by Design</h2>
      <p>We design every component to work together. Boards, hooks, containers, and frames are all built on a shared dimension grid so you can mix, match, and reconfigure your setup as your needs evolve — without buying a new system from scratch.</p>
    `,
  },
  {
    id: 'trust',
    title: 'Trust Through Transparency',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=600&fit=crop',
    content: `
      <p>Trust is earned slowly and lost quickly. We build it by being straightforward about what our products can and cannot do, by communicating honestly when things go wrong, and by making it simple to get help when you need it.</p>
      <h2>No Hidden Surprises</h2>
      <p>Every product page lists real dimensions, real materials, and real installation requirements. We do not use marketing angles that oversell capabilities. If a board works best with our recommended anchors, we say so — and include them in the package.</p>
      <h2>Our Warranty Promise</h2>
      <p>All JMBOARD products carry a 3-year structural warranty and a 1-year surface finish warranty. If a panel warps, a finish chips under normal use, or a magnet loses holding strength, we replace it — no complicated claims process, just contact us.</p>
    `,
  },
  {
    id: 'community',
    title: 'Community First',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&h=600&fit=crop',
    content: `
      <p>JMBOARD exists because of the people who use it — home cooks who finally organized their kitchens, teachers who transformed their classrooms, café owners who brought their brand to life on a wall. We take that responsibility seriously.</p>
      <h2>Supporting Local Makers</h2>
      <p>We partner with local installers and interior designers across Vietnam, offering training, co-marketing support, and priority access to new products. When they grow, we grow. We are committed to building an ecosystem, not just a customer base.</p>
      <h2>Sharing Knowledge Freely</h2>
      <p>Our blog, installation guides, and video tutorials are free and always will be. We believe that an informed customer makes better decisions — and a better space — regardless of whether they bought from us or a competitor.</p>
    `,
  },
];

// ── News ──
export const news = [
  {
    id: 'n1',
    title: 'New JM Board Collection Launches',
    category: 'Product',
    date: '2024-01-15',
    excerpt: 'Introducing our latest range of magnetic boards with enhanced features and modern designs.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    content: `
      <p>We are excited to introduce the newest additions to the JM Board family — a collection designed around one simple idea: your wall should work as hard as you do.</p>
      <h2>What's New</h2>
      <p>The new collection includes three updated finishes — Chalk White, Slate Grey, and Warm Ivory — all featuring our improved powder coat formula that resists fingerprints and smudges better than ever before.</p>
      <p>We have also updated the mounting system. The new hidden-bracket design installs in under 15 minutes and leaves no visible hardware on the wall, giving your space a cleaner, more intentional look.</p>
      <h2>Available Now</h2>
      <p>All new models are available in our standard sizes (60×90cm and 120×90cm) as well as the popular slim format (60×40cm). Visit our product page to explore the full range and request a sample swatch before committing to a finish.</p>
    `,
  },
  {
    id: 'n2',
    title: 'Top 10 Kitchen Organization Tips',
    category: 'Home',
    date: '2024-01-10',
    excerpt: 'Transform your kitchen space with these expert organization tips using magnetic solutions.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop',
    content: `
      <p>A well-organized kitchen is not just about aesthetics — it directly affects how efficiently and enjoyably you cook. Here are ten practical tips to transform your kitchen using magnetic wall solutions.</p>
      <h2>1. Move Your Knives Off the Counter</h2>
      <p>A magnetic knife strip mounted at eye level frees up counter space and keeps your blades accessible. Bamboo strips work especially well in warm-toned kitchens, while stainless steel suits a more industrial look.</p>
      <h2>2. Use Vertical Space for Spices</h2>
      <p>Most kitchens waste the entire wall between the counter and the cabinets. A magnetic spice rack system — with labelled tins mounted directly on your JM Board — puts everything in view and within reach while cooking.</p>
      <h2>3. Dedicate a Zone for Notes</h2>
      <p>A small whiteboard panel or magnetic notepad holder in the kitchen means grocery lists, recipes, and reminders stay visible and off your phone screen. One glance and you know what you need.</p>
      <h2>4. Corral Your Utensils</h2>
      <p>Magnetic hooks can hold ladles, tongs, and measuring spoons in a neat row. Group them by frequency of use so the tools you reach for daily are always at the front.</p>
      <h2>5. Label Everything</h2>
      <p>Magnetic label holders make it easy to rearrange and relabel your storage as your kitchen habits change. No stickers, no permanent writing — just slide and update.</p>
    `,
  },
  {
    id: 'n3',
    title: 'Sustainable Materials in Our Products',
    category: 'Others',
    date: '2024-01-05',
    excerpt: 'Learn about our commitment to using eco-friendly and sustainable materials.',
    image: 'https://shopcherrypick.com/cdn/shop/files/IMG_3453_cba90b8a-f47e-4bbb-a949-75029cbe179b.jpg?v=1756237381&width=1946',
    content: `
      <p>Sustainability is not a trend for us — it is a design constraint we apply from the very beginning of every product development cycle. Here is a transparent look at where we stand today and where we are heading.</p>
      <h2>Our Steel is Recycled</h2>
      <p>Over 70% of the steel used in our board cores comes from recycled sources. Steel is one of the most recyclable materials on the planet, and we work with suppliers who can verify the recycled content in every batch we receive.</p>
      <h2>Low-VOC Coatings</h2>
      <p>Our powder coat finishes are applied electrostatically, which means near-zero overspray waste and no liquid solvents. The coatings we use are certified low-VOC and free from heavy metals including lead and chromium.</p>
      <h2>Packaging</h2>
      <p>We switched to 100% recycled cardboard packaging in 2023 and eliminated single-use plastic from all retail shipments. Foam inserts have been replaced with molded pulp that is both protective and fully compostable.</p>
      <h2>What We Are Still Working On</h2>
      <p>We are honest about the areas where we have not yet met our own standards — including end-of-life take-back programs and the carbon footprint of international shipping. These are active projects for 2024 and we will report progress publicly.</p>
    `,
  },
  {
    id: 'n4',
    title: 'Maximize Your Wall Space Efficiently',
    category: 'Home',
    date: '2023-12-28',
    excerpt: 'Discover creative ways to utilize vertical space in small apartments.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop',
    content: `
      <p>In a small apartment, the floor plan is fixed — but the walls are yours to claim. Going vertical is one of the most effective ways to add functional space without adding square footage.</p>
      <h2>Think in Zones</h2>
      <p>Rather than placing storage randomly, divide your wall into functional zones. An entryway wall might hold keys, bags, and a small calendar. A home office wall might hold cables, notebooks, and a to-do board. Defining zones reduces visual clutter even when the wall is full.</p>
      <h2>Use the Full Height</h2>
      <p>Most people stop at eye level. But the space above cabinets and below the ceiling is genuinely useful for items accessed less frequently — seasonal items, backup supplies, display objects. Magnetic rails can extend all the way up if your panel goes floor to ceiling.</p>
      <h2>Keep It Reconfigurable</h2>
      <p>The best small-space storage systems are ones that change with you. Magnetic systems have a clear advantage here — you can move a hook, add a container, or completely reorganize a zone in minutes without putting new holes in the wall.</p>
      <p>A wall that adapts to your life is worth far more than one that looks perfect on move-in day but fights you ever after.</p>
    `,
  },
  {
    id: 'n5',
    title: 'JM Board Featured in Design Magazine',
    category: 'Others',
    date: '2023-12-20',
    excerpt: 'Our innovative magnetic boards were featured in the latest issue of Modern Home Design.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    content: `
      <p>We are proud to share that JMBOARD was recently featured in Modern Home Design magazine's annual roundup of products redefining how people interact with their living spaces.</p>
      <h2>What the Feature Covered</h2>
      <p>The editorial team spent two weeks testing our JM Board Classic and JM Board Slim in a real apartment setting, documenting the installation process and daily use over the trial period. The resulting piece focused on how magnetic walls shift the relationship between a room and its inhabitants — from static to dynamic.</p>
      <h2>Key Takeaways from the Review</h2>
      <p>The reviewer highlighted three things that stood out: the quality of the surface finish, the simplicity of the mounting hardware, and the way the board seemed to disappear visually when not in active use. The slim-profile model was described as feeling "more like architecture than furniture."</p>
      <p>We are grateful for the recognition and for the thoughtful way the magazine approached the review. A link to the full article is available on our press page.</p>
    `,
  },
  {
    id: 'n6',
    title: 'Magnetic Tools for Professional Kitchens',
    category: 'Product',
    date: '2023-12-15',
    excerpt: 'Why professional chefs are choosing our magnetic organization systems.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop',
    content: `
      <p>Professional kitchens run on efficiency. Every second spent searching for a tool is a second taken away from the food — and the customer waiting for it. That is why more professional chefs and kitchen managers are turning to magnetic wall systems as a core part of their kitchen setup.</p>
      <h2>Speed and Access</h2>
      <p>In a commercial kitchen, tools need to be exactly where they are expected to be, every single time. Magnetic strips and hooks make this possible — there is only one place for each item, it is always visible, and it is always within reach. No drawers to open, no blocks to dig through.</p>
      <h2>Hygiene Advantages</h2>
      <p>Wall-mounted magnetic storage keeps tools off surfaces and out of drawers where bacteria can accumulate. Our stainless steel products are fully washable and rated for commercial cleaning products, making end-of-day sanitation straightforward.</p>
      <h2>Custom Configurations</h2>
      <p>We work directly with restaurant owners and kitchen designers to create custom magnetic wall layouts for professional spaces. If you are planning a new kitchen build-out or renovation, contact our commercial team to discuss what a tailored system might look like for your workflow.</p>
    `,
  },
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

// ── Policy Pages — dùng cho /policies/:id ──
export const policies = [
  {
    id: 'warranty',
    title: 'Warranty Policy',
    image: null,
    content: `
      <p>All JMBOARD products are covered by a 3-year structural warranty and a 1-year surface finish warranty from the date of purchase.</p>
      <h2>What Is Covered</h2>
      <p>Our warranty covers manufacturing defects, panel warping under normal indoor conditions, magnet strength loss, and surface finish chipping that occurs under regular use. If any of these occur, we will replace the affected component at no cost to you.</p>
      <h2>What Is Not Covered</h2>
      <p>The warranty does not cover damage caused by improper installation, exposure to outdoor conditions, chemical cleaners not recommended by JMBOARD, or physical impact damage.</p>
      <h2>How to Claim</h2>
      <p>Contact us at support@jmboard.com with your order number and a photo of the issue. Our team will respond within 2 business days with next steps. No complicated forms — just a straightforward process.</p>
    `,
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    image: null,
    content: `
      <p>JMBOARD is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights regarding that data.</p>
      <h2>What We Collect</h2>
      <p>We collect information you provide directly — such as your name, email address, shipping address, and payment details when placing an order. We also collect basic usage data through cookies to improve site performance.</p>
      <h2>How We Use Your Data</h2>
      <p>Your data is used solely to process orders, communicate about your purchase, and improve our products and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      <h2>Data Retention</h2>
      <p>We retain your order information for 5 years as required by Vietnamese commercial law. You may request deletion of your account and associated data at any time by contacting us at privacy@jmboard.com.</p>
      <h2>Your Rights</h2>
      <p>You have the right to access, correct, or delete the personal data we hold about you. You may also opt out of any marketing communications at any time using the unsubscribe link in any email we send.</p>
    `,
  },
  {
    id: 'shipping',
    title: 'Shipping & Delivery Policy',
    image: null,
    content: `
      <p>We ship all JMBOARD products from our warehouse in Ho Chi Minh City. Orders are processed within 1–2 business days of payment confirmation.</p>
      <h2>Domestic Shipping (Vietnam)</h2>
      <p>Standard delivery within Vietnam takes 3–5 business days for major cities and 5–7 business days for provincial areas. Express shipping (1–2 business days) is available at checkout for an additional fee.</p>
      <h2>International Shipping</h2>
      <p>We currently ship to Japan, Singapore, Thailand, and Australia. International orders typically arrive within 7–14 business days depending on customs processing. Import duties and taxes are the responsibility of the recipient.</p>
      <h2>Large Format Orders</h2>
      <p>Custom-sized panels and commercial installations require a separate delivery arrangement. Our team will contact you directly after order confirmation to schedule a delivery window and discuss installation logistics.</p>
      <h2>Tracking Your Order</h2>
      <p>A tracking number will be sent to your email once your order has been dispatched. You can use this number on the carrier's website to monitor your shipment in real time.</p>
    `,
  },
  {
    id: 'returns',
    title: 'Return & Refund Policy',
    image: null,
    content: `
      <p>We want you to be completely satisfied with your JMBOARD purchase. If you are not, we make the return process as simple as possible.</p>
      <h2>Return Window</h2>
      <p>Standard products may be returned within 30 days of delivery, provided they are unused and in their original packaging. Custom-sized panels and commercial installations are non-returnable once production has begun.</p>
      <h2>How to Return</h2>
      <p>Email support@jmboard.com with your order number and reason for return. We will provide a prepaid return label for orders within Vietnam. For international returns, the cost of return shipping is the responsibility of the customer.</p>
      <h2>Refunds</h2>
      <p>Once we receive and inspect the returned item, refunds are processed within 5–7 business days to your original payment method. You will receive an email confirmation when the refund has been issued.</p>
      <h2>Damaged on Arrival</h2>
      <p>If your order arrives damaged, please photograph the packaging and product immediately and contact us within 48 hours. We will arrange a replacement shipment at no additional cost.</p>
    `,
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    image: null,
    content: `
      <p>By using the JMBOARD website and purchasing our products, you agree to the following terms. Please read them carefully before placing an order.</p>
      <h2>Use of This Website</h2>
      <p>This website is intended for personal and commercial purchasing purposes only. You may not use it to scrape data, impersonate other users, or engage in any activity that disrupts normal site operation.</p>
      <h2>Product Information</h2>
      <p>We make every effort to display product dimensions, colors, and materials accurately. However, slight variations may occur due to screen calibration differences. If color accuracy is critical for your project, we recommend requesting a physical sample before ordering.</p>
      <h2>Pricing</h2>
      <p>All prices are listed in Vietnamese Dong (VND) unless otherwise stated. JMBOARD reserves the right to update pricing at any time. The price displayed at the time of your order confirmation is the price you will be charged.</p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the Socialist Republic of Vietnam. Any disputes arising from purchases made on this site will be subject to the jurisdiction of Vietnamese courts.</p>
    `,
  },
];