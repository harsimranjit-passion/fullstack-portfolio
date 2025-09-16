
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "luxe-realty",
    title: "Luxe Realty Marketplace",
    description: "A high-end platform for exclusive real estate listings, connecting discerning buyers with luxury properties.",
    longDescription: "Luxe Realty Marketplace was conceived to fill a gap in the luxury real estate market for a visually stunning and highly functional digital experience. The platform features immersive property galleries, virtual tours, and a secure messaging system for agents and buyers. The core challenge was to present high-resolution media beautifully without compromising performance. This was solved through advanced image optimization techniques and lazy loading.",
    year: 2024,
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
    thumbnail: "https://picsum.photos/seed/luxe-realty-thumb/800/600",
    gallery: [
      "https://picsum.photos/seed/luxe-realty-1/1200/800",
      "https://picsum.photos/seed/luxe-realty-2/1200/800",
      "https://picsum.photos/seed/luxe-realty-3/1200/800"
    ],
    github: "https://github.com/example/luxe-realty",
    live: "https://example.com/luxe-realty"
  },
  {
    id: "vela-yacht-charters",
    title: "Vela Yacht Charters",
    description: "An elite booking system for chartering private yachts, featuring real-time availability and bespoke itineraries.",
    longDescription: "Vela Yacht Charters required a sophisticated booking engine that could handle complex pricing, seasonal availability, and custom package add-ons. The interface was designed to evoke the freedom of the open sea, with a clean, nautical-inspired aesthetic. A major feature is the interactive map for planning routes and an integrated payment system for seamless transactions. The backend architecture is robust, ensuring data consistency and security.",
    year: 2023,
    stack: ["Vue.js", "Nuxt.js", "Stripe", "Mapbox", "PostgreSQL"],
    thumbnail: "https://picsum.photos/seed/vela-yacht-thumb/800/600",
    gallery: [
      "https://picsum.photos/seed/vela-yacht-1/1200/800",
      "https://picsum.photos/seed/vela-yacht-2/1200/800",
    ],
    github: "https://github.com/example/vela-yacht",
    live: "https://example.com/vela-yacht"
  },
  {
    id: "aether-ai",
    title: "Aether AI Analytics",
    description: "A data visualization dashboard for an AI firm, transforming complex datasets into elegant, actionable insights.",
    longDescription: "Aether AI Analytics provides a suite of tools for data scientists to monitor machine learning model performance. The challenge was to render large, real-time datasets in interactive charts and graphs without UI lag. Leveraging D3.js and optimizing React's rendering lifecycle, the dashboard achieves fluid performance. The design is minimalist and data-forward, using color theory to highlight key metrics and anomalies.",
    year: 2024,
    stack: ["React", "D3.js", "TypeScript", "Python", "Flask"],
    thumbnail: "https://picsum.photos/seed/aether-ai-thumb/800/600",
    gallery: [
      "https://picsum.photos/seed/aether-ai-1/1200/800",
      "https://picsum.photos/seed/aether-ai-2/1200/800",
      "https://picsum.photos/seed/aether-ai-3/1200/800"
    ],
    github: "https://github.com/example/aether-ai",
    live: "https://example.com/aether-ai"
  },
   {
    id: "chronos-watch-configurator",
    title: "Chronos Watch Configurator",
    description: "An interactive 3D configurator for a luxury watch brand, allowing customers to design their own timepieces.",
    longDescription: "The Chronos Watch Configurator is a cutting-edge web experience that uses WebGL and Three.js to render a photorealistic, customizable watch in real-time. Users can change materials, dials, straps, and engravings. The project demanded a tight integration between the 3D artists and developers to ensure model accuracy and performance. The state management is complex, handling dozens of customization options while providing a smooth user experience.",
    year: 2022,
    stack: ["Three.js", "React", "TypeScript", "WebGL", "Framer Motion"],
    thumbnail: "https://picsum.photos/seed/chronos-watch-thumb/800/600",
    gallery: [
      "https://picsum.photos/seed/chronos-watch-1/1200/800",
      "https://picsum.photos/seed/chronos-watch-2/1200/800",
    ],
    github: "https://github.com/example/chronos-watch",
    live: "https://example.com/chronos-watch"
  }
];
