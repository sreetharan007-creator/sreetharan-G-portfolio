// ---------------------------------------------------------------
// Everything you will want to edit lives in this file.
// Add a project: copy one object in `projects`, change the fields.
// Use your own screenshot: set `image` to a path in /public/images
// (for example './images/filter.jpg'). Without an image the card
// shows a drawn mock-up in the project's `tone` colours.
// ---------------------------------------------------------------

export const profile = {
  name: 'Sreetharan G',
  role: 'Front-end developer',
  email: 'sreetharan.coc@gmail.com',
};

export const OLD_SITE = 'https://sreetharan007-creator.github.io/sreetharan-G-portfolio/images/';
// export const OLD_SITE = './images/';

export const categories = ['All', 'Shopify', 'JavaScript', 'UI / UX', 'Mobile'];

// kind: filter | cart | mobile | quick | menu | quiz | product | checkout | banner
//       or a phone screen: phone:filters | phone:cart | phone:menu | phone:quiz | phone:product | phone:checkout
// tone: cobalt | marigold | ink | sky
//
// `shots` are the extra images on the project's own page (the first image
// is the project's main picture). Each shot can also have `image: './images/x.jpg'`.
export const projects = [
  {
    id: 'filter-sort',
    title: 'Product filter and sort',
    tags: ['Shopify', 'JavaScript'],
    year: 2025,
    featured: true,
    kind: 'filter',
    tone: 'cobalt',
    ratio: '4 / 3',
    image: OLD_SITE + '453.jpg',
    // image: './images/product-filter.jpg',
    blurb:
      'A responsive product discovery experience with filtering, sorting, applied filters and mobile-friendly controls.',
    details: [
      'Filters and sorting update the product grid without a page reload',
      'Applied filters show as chips that can be removed one by one',
      'Controls move into a drawer on small screens',
    ],
    tech: ['JavaScript', 'Shopify', 'CSS'],
    shots: [
      { kind: 'filter', tone: 'sky', caption: 'Applied filters shown as chips' },
      { kind: 'phone:filters', tone: 'cobalt', caption: 'Filters in a drawer on phones' },
    ],
  },
  {
    id: 'cart-drawer',
    title: 'Smart cart drawer',
    tags: ['Shopify', 'JavaScript'],
    year: 2025,
    featured: true,
    kind: 'cart',
    tone: 'marigold',
    ratio: '1 / 1',
    image: OLD_SITE + '429.jpg',
    blurb:
      'A clean cart experience with quantity controls, remove functionality and dynamic totals.',
    details: [
      'Quantity changes and removals update the totals instantly',
      'Opens over the page so shoppers keep their place',
      'Works with the Shopify cart API',
    ],
    tech: ['JavaScript', 'Shopify'],
    shots: [
      { kind: 'phone:cart', tone: 'marigold', caption: 'The drawer on a phone' },
      { kind: 'checkout', tone: 'cobalt', caption: 'Handing off to checkout' },
    ],
  },
  {
    id: 'mobile-store',
    title: 'Mobile e-commerce UI',
    tags: ['UI / UX', 'Mobile'],
    year: 2024,
    featured: true,
    kind: 'mobile',
    tone: 'ink',
    ratio: '4 / 5',
    image: OLD_SITE + '255.jpg',
    blurb:
      'A mobile-first shopping experience focused on clean navigation and intuitive interactions.',
    details: [
      'Large tap targets and a layout designed for one hand',
      'Navigation that stays out of the way until it is needed',
      'Tested across common phone and tablet widths',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    shots: [
      { kind: 'phone:menu', tone: 'ink', caption: 'Slide-in menu' },
      { kind: 'phone:product', tone: 'cobalt', caption: 'Product page' },
      { kind: 'phone:checkout', tone: 'marigold', caption: 'Checkout bar' },
    ],
  },
  // The projects below are sample entries. Replace the text and
  // screenshots with your real work.
  {
    id: 'product-finder',
    title: 'Product finder quiz',
    tags: ['JavaScript', 'UI / UX'],
    year: 2024,
    featured: true,
    kind: 'quiz',
    tone: 'sky',
    ratio: '4 / 3',
    image: '',
    blurb:
      'A short step-by-step quiz that narrows a collection down to the products that fit the shopper.',
    details: [
      'One question per step with a visible progress bar',
      'Answers filter the collection and show matching products',
      'Built with JavaScript and a small slider for the steps',
    ],
    tech: ['JavaScript', 'jQuery', 'CSS'],
    shots: [
      { kind: 'phone:quiz', tone: 'sky', caption: 'A quiz step on a phone' },
      { kind: 'filter', tone: 'cobalt', caption: 'Matching products after the last step' },
    ],
  },
  {
    id: 'quick-view',
    title: 'Quick view modal',
    tags: ['Shopify', 'JavaScript'],
    year: 2023,
    featured: false,
    kind: 'quick',
    tone: 'marigold',
    ratio: '1 / 1',
    image: '',
    blurb:
      'Lets shoppers pick a size, check details and add to bag from the collection page.',
    details: [
      'Opens from the product card without leaving the collection',
      'Variant selection keeps price and availability in sync',
      'Closes with the Escape key and returns focus to the card',
    ],
    tech: ['JavaScript', 'Liquid'],
    shots: [
      { kind: 'product', tone: 'marigold', caption: 'The full product page it links to' },
      { kind: 'phone:product', tone: 'marigold', caption: 'Quick view on a phone' },
    ],
  },
  {
    id: 'mega-menu',
    title: 'Mega menu and mobile navigation',
    tags: ['UI / UX', 'Mobile'],
    year: 2023,
    featured: false,
    kind: 'menu',
    tone: 'cobalt',
    ratio: '4 / 3',
    image: '',
    blurb:
      'A desktop mega menu and a slide-in mobile menu that share the same content.',
    details: [
      'One menu structure, two layouts',
      'Full keyboard support on desktop',
      'One level at a time on phones',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    shots: [{ kind: 'phone:menu', tone: 'cobalt', caption: 'The mobile version of the same menu' }],
  },
  {
    id: 'sale-landing',
    title: 'Sale landing page',
    tags: ['Shopify', 'UI / UX'],
    year: 2022,
    featured: false,
    kind: 'banner',
    tone: 'marigold',
    ratio: '4 / 3',
    image: '',
    blurb:
      'A campaign page with a clear offer, product highlights and a layout that holds up on phones.',
    details: [
      'Hero banner with one clear call to action',
      'Product highlights pulled from a Shopify collection',
      'Built to load fast on mobile connections',
    ],
    tech: ['Liquid', 'CSS', 'JavaScript'],
    shots: [
      { kind: 'product', tone: 'sky', caption: 'Product highlights below the banner' },
      { kind: 'phone:product', tone: 'marigold', caption: 'The page on a phone' },
    ],
  },
  {
    id: 'checkout-progress',
    title: 'Checkout progress bar',
    tags: ['JavaScript', 'Mobile'],
    year: 2022,
    featured: false,
    kind: 'checkout',
    tone: 'sky',
    ratio: '4 / 5',
    image: '',
    blurb:
      'A fixed progress bar that shows shoppers how close they are to free shipping and checkout.',
    details: [
      'Updates live as items are added or removed',
      'Stays in view on phones without covering the pay button',
      'Messages change once the free-shipping goal is reached',
    ],
    tech: ['JavaScript', 'Shopify'],
    shots: [{ kind: 'phone:checkout', tone: 'sky', caption: 'The bar on a phone' }],
  },
];

// Images for one project's page: its main picture, then its extra shots.
export const shotsOf = (p) => [
  { kind: p.kind, tone: p.tone, image: p.image, caption: 'Overview' },
  ...(p.shots || []),
];

// The Gallery page. category must be one of galleryCategories.
// projectId (optional) adds a link to that project's page in the viewer.
export const galleryCategories = ['Storefront', 'Cart and checkout', 'Mobile', 'Campaigns'];

export const gallery = [
  { id: 'g1', title: 'Collection filters', category: 'Storefront', kind: 'filter', tone: 'cobalt', ratio: '4 / 3', image: OLD_SITE + '453.jpg', caption: 'Filter sidebar with applied chips.', projectId: 'filter-sort' },
  { id: 'g2', title: 'Cart drawer', category: 'Cart and checkout', kind: 'cart', tone: 'marigold', ratio: '1 / 1', image: OLD_SITE + '429.jpg', caption: 'Quantity controls and live totals.', projectId: 'cart-drawer' },
  { id: 'g3', title: 'Mobile storefront', category: 'Mobile', kind: 'mobile', tone: 'ink', ratio: '4 / 5', image: OLD_SITE + '255.jpg', caption: 'A mobile-first shopping layout.', projectId: 'mobile-store' },
  { id: 'g4', title: 'Product page', category: 'Storefront', kind: 'product', tone: 'sky', ratio: '4 / 3', image: '', caption: 'Gallery, size picker and add to bag.' },
  { id: 'g5', title: 'Phone filters', category: 'Mobile', kind: 'phone:filters', tone: 'cobalt', ratio: '4 / 5', image: '', caption: 'Filter chips above the product list.', projectId: 'filter-sort' },
  { id: 'g6', title: 'Checkout steps', category: 'Cart and checkout', kind: 'checkout', tone: 'cobalt', ratio: '4 / 3', image: '', caption: 'Form on the left, order summary on the right.' },
  { id: 'g7', title: 'Sale banner', category: 'Campaigns', kind: 'banner', tone: 'marigold', ratio: '4 / 3', image: '', caption: 'One offer, one button.', projectId: 'sale-landing' },
  { id: 'g8', title: 'Quick view', category: 'Storefront', kind: 'quick', tone: 'marigold', ratio: '1 / 1', image: '', caption: 'Pick a size without leaving the collection.', projectId: 'quick-view' },
  { id: 'g9', title: 'Phone cart', category: 'Cart and checkout', kind: 'phone:cart', tone: 'marigold', ratio: '4 / 5', image: '', caption: 'The cart drawer at phone width.', projectId: 'cart-drawer' },
  { id: 'g10', title: 'Mega menu', category: 'Storefront', kind: 'menu', tone: 'cobalt', ratio: '4 / 3', image: '', caption: 'Wide menu with a featured panel.', projectId: 'mega-menu' },
  { id: 'g11', title: 'Quiz step', category: 'Campaigns', kind: 'quiz', tone: 'sky', ratio: '4 / 3', image: '', caption: 'One question per step.', projectId: 'product-finder' },
  { id: 'g12', title: 'Slide-in menu', category: 'Mobile', kind: 'phone:menu', tone: 'ink', ratio: '1 / 1', image: '', caption: 'One level at a time.', projectId: 'mobile-store' },
  { id: 'g13', title: 'Phone product page', category: 'Mobile', kind: 'phone:product', tone: 'cobalt', ratio: '4 / 5', image: '', caption: 'Gallery first, then size and add to bag.' },
  { id: 'g14', title: 'Progress bar', category: 'Cart and checkout', kind: 'phone:checkout', tone: 'sky', ratio: '1 / 1', image: '', caption: 'Free-shipping progress at the bottom of the cart.', projectId: 'checkout-progress' },
  { id: 'g15', title: 'Quiz on a phone', category: 'Campaigns', kind: 'phone:quiz', tone: 'sky', ratio: '4 / 5', image: '', caption: 'The product finder at phone width.', projectId: 'product-finder' },
  { id: 'g16', title: 'Campaign products', category: 'Campaigns', kind: 'product', tone: 'marigold', ratio: '4 / 3', image: '', caption: 'Highlights under the hero banner.', projectId: 'sale-landing' },
];

// Phone screens for the "On a phone" slider.
// kind: filters | cart | menu | quiz | product | checkout
export const screens = [
  { id: 's1', kind: 'filters', tone: 'cobalt', title: 'Filter chips', text: 'Applied filters stay visible and are easy to remove.' },
  { id: 's2', kind: 'cart', tone: 'marigold', title: 'Cart drawer', text: 'Quantity and totals update without leaving the page.' },
  { id: 's3', kind: 'menu', tone: 'ink', title: 'Slide-in menu', text: 'Large tap targets, one level at a time.' },
  { id: 's4', kind: 'quiz', tone: 'sky', title: 'Product finder', text: 'One question per step with clear progress.' },
  { id: 's5', kind: 'product', tone: 'cobalt', title: 'Product page', text: 'Gallery first, then size and add to bag.' },
  { id: 's6', kind: 'checkout', tone: 'marigold', title: 'Checkout bar', text: 'A pay button that stays within thumb reach.' },
];

export const skills = [
  { name: 'JavaScript', text: 'Interactive interfaces, DOM work, API integration, event handling and dynamic experiences.' },
  { name: 'Shopify and Liquid', text: 'Theme customization, product pages, cart experiences and storefront UI.' },
  { name: 'HTML and CSS', text: 'Semantic markup, responsive layouts, animation and modern CSS.' },
  { name: 'jQuery', text: 'DOM manipulation and events, and keeping existing websites running well.' },
  { name: 'Responsive UI', text: 'Mobile-first layouts that hold up from small phones to wide desktops.' },
];

export const learning = [
  { name: 'React', text: 'Component-based interfaces. This site is built with it.' },
  { name: 'Node.js', text: 'Building the back-end side of modern, scalable web apps.' },
];

export const principles = [
  { title: 'Clean UI', text: 'Interfaces with clarity, consistency and usability.' },
  { title: 'Responsive', text: 'Smooth on desktop, tablet and mobile.' },
  { title: 'E-commerce', text: 'Storefront experiences focused on usability and conversion.' },
  { title: 'Problem solving', text: 'Debugging and improving existing interfaces without unnecessary changes.' },
];

export const services = [
  { title: 'Shopify development', text: 'Theme customization and storefront improvements.' },
  { title: 'JavaScript development', text: 'Interactive functionality and bug fixing.' },
  { title: 'Responsive UI', text: 'Desktop, tablet and mobile optimization.' },
  { title: 'E-commerce optimization', text: 'Product, cart and filter improvements aimed at conversion.' },
];

export const experience = [
  { when: 'Oct 2020 to now', title: 'Principal Software Engineer', where: 'ConvertCart AI System Pvt Ltd', text: 'Front-end and e-commerce work with JavaScript, Shopify, Liquid and jQuery.' },
  { when: 'Earlier', title: 'Senior Web Designer', where: 'Subash Technosis Pvt. Ltd.', text: 'Web design and front-end builds.' },
  { when: '2012', title: 'B.E. Computer Science and Engineering', where: 'Maria College of Engineering and Technology, Anna University', text: '' },
];
