export const projects = [
  {
    id: 1,
    index: "01",
    emoji: "🕸️",
    title: "CrimeGraph AI",
    subtitle: "AI-Powered Criminal Network Analysis System",
    category: "AI/ML & Data Analytics",
    filterCategory: "AI/ML",
    status: "Prototype / SIH Concept",
    statusType: "prototype",
    description:
      "An AI-assisted investigation-support system concept developed around the Smart India Hackathon problem statement (SIH26189). Transforms fragmented case records—FIRs, call detail records (CDRs), financial logs, and surveillance reports—into an explainable knowledge graph, enabling investigators to identify hidden relationship paths and pivotal central nodes across criminal networks.",
    features: [
      "Knowledge Graph Modeling: Maps suspects, phone numbers, vehicles, bank accounts, and locations as graph nodes and multi-directional edges in Neo4j.",
      "Network Analytics & Centrality: Leverages NetworkX to calculate Degree, Betweenness Centrality, and PageRank to spot hidden intermediaries without presumptive guilt labeling.",
      "Entity Extraction & Resolution: Unifies unstructured case documents using OCR text extraction and NLP to reconcile ambiguous aliases and multi-record references.",
      "Investigator Dashboard: Interactive graph exploration workspace built with React and Cytoscape.js for timeline drill-down and multi-hop link discovery."
    ],
    tech: ["Python", "Neo4j", "NetworkX", "React", "Cytoscape.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/thedeepakpv",
    live: null,
    note: "SIH26189 Hackathon Architecture"
  },
  {
    id: 2,
    index: "02",
    emoji: "🍱",
    title: "Canteen Management System",
    subtitle: "Digital Ordering & QR Verification Platform",
    category: "Full-Stack Development",
    filterCategory: "Full-Stack",
    status: "Academic Project",
    statusType: "academic",
    description:
      "A full-stack college cafeteria ordering platform built to eliminate counter congestion during peak campus intervals. Provides a synchronized digital workflow for students and administrators—from real-time menu browsing and digital payments to one-time QR-code order pickup verification.",
    features: [
      "Dynamic Digital Menu: Live catalog displaying available food items, customized pricing, and instant out-of-stock toggling.",
      "Digital Payment Flow: Secure checkout workflow integrating payment gateway processing (Razorpay / Stripe) with automated confirmation receipts.",
      "QR-Code Order Collection: Generates a single-use verification QR code upon payment to prevent duplicate meal claims at the counter.",
      "Administrative Portal & RLS: Real-time kitchen dashboard for order preparation tracking, stock maintenance, and Row-Level Security (RLS) data governance."
    ],
    tech: ["React.js", "Supabase", "PostgreSQL", "Material UI", "React Router", "QR Engine"],
    github: "https://github.com/thedeepakpv",
    live: null,
    note: "Full-Stack Architecture"
  },
  {
    id: 3,
    index: "03",
    emoji: "📸",
    title: "Vintage Photo Booth",
    subtitle: "Client-Side Retro Image Processing Engine",
    category: "Frontend Development",
    filterCategory: "Frontend",
    status: "Personal Project",
    statusType: "completed",
    description:
      "A lightweight, 100% private browser-based retro photo editing application that transforms digital images with nostalgic analog aesthetics. Operates completely client-side without servers, databases, or accounts, delivering instantaneous filter rendering and high-resolution downloadable exports.",
    features: [
      "100% Client-Side Processing: Zero backend dependency; utilizes browser Canvas API and CSS image filters for instantaneous local execution.",
      "4 Retro Filter Presets: Bespoke visual treatments including Vintage Warmth, Nostalgic Sepia, Monochrome Noir, and High-Contrast Grit.",
      "Real-Time Image Manipulation: Instantaneous live preview upon image upload without upload latency or data privacy risks.",
      "High-Fidelity PNG Export: One-click client-side export generating downloadable high-resolution photographs with classic analog framing."
    ],
    tech: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3", "Web APIs"],
    github: "https://github.com/thedeepakpv",
    live: null,
    note: "100% Browser-Native"
  },
  {
    id: 4,
    index: "04",
    emoji: "♻️",
    title: "zeroW",
    subtitle: "Food Wastage Mitigation Network",
    category: "Mobile & Systems",
    filterCategory: "Mobile",
    status: "Lead Project",
    statusType: "completed",
    description:
      "Led the Catalyst Crew in architecting zeroW — a mobile application combating food wastage by connecting households, restaurants, and local NGOs. Spearheaded end-to-end development spanning Figma UI/UX, real-time Firebase syncing, and algorithmic surplus redistribution logic.",
    features: [
      "Surplus Redistribution Network: Connects surplus food donors with verified non-profit partners in real-time.",
      "Cross-Platform Mobile App: Clean Flutter client with responsive UI, real-time donation tracking, and intuitive claim flows.",
      "Real-Time Cloud Backend: Firestore synchronization, authentication, and Python backend microservices.",
      "Team Leadership: Coordinated development cycles, UI prototyping, and sprint deliverables as Catalyst Crew lead."
    ],
    tech: ["Flutter", "Firebase", "Python", "Figma", "Git"],
    github: "https://github.com/thedeepakpv",
    live: null,
    note: "Catalyst Crew Lead"
  },
  {
    id: 5,
    index: "05",
    emoji: "☕",
    title: "Chai Roaster",
    subtitle: "Humorous Automation Web App",
    category: "Frontend & Creative",
    filterCategory: "Frontend",
    status: "Hackathon Project",
    statusType: "hackathon",
    description:
      "A playful React-based web app built during an intense hackathon sprint, blending rapid automation scripts with intentionally witty and pointless features. Showcases fast-paced prototyping, creative interface design, and the joyful side of exploratory coding.",
    features: [
      "Dynamic Roast Engine: Generates humorous interactive commentary based on user inputs and quirky interactive triggers.",
      "Sub-Second Response: Lightweight React + Vite architecture optimized for instantaneous state updates and animations.",
      "Custom Micro-Interactions: Polished responsive styling with playful interactive Easter eggs and responsive layout."
    ],
    tech: ["React", "JavaScript", "CSS3", "Vite", "Framer Motion"],
    github: "https://github.com/thedeepakpv",
    live: null,
    note: "Hackathon Prototype"
  },
];

export const skills = [
  {
    id: 1,
    category: "Technical Strength",
    icon: "💻",
    items: [
      "Python",
      "React.js",
      "JavaScript (ES6+)",
      "Flutter",
      "Neo4j / Graphs",
      "PostgreSQL / MySQL",
      "C & Java",
      "HTML5 Canvas",
      "Bash / Linux"
    ],
  },
  {
    id: 2,
    category: "Structural Thinking",
    icon: "🧱",
    items: [
      "System Design",
      "Knowledge Graphs",
      "Database Architecture",
      "Prompt Engineering",
      "Data Structures & Algorithms",
      "Security & RLS Policies"
    ],
  },
  {
    id: 3,
    category: "Discipline & Growth",
    icon: "🏋️",
    items: [
      "Engineering Leadership",
      "Technical Communication",
      "Relentless Consistency",
      "Physical Rigor & Fitness",
      "First-Principles Problem Solving"
    ],
  },
];
