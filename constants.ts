
import { Solution, Industry, Recognition, TeamMember, BlogPost } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'waas',
    title: 'Trilema WaaS',
    description: 'Next-generation Wallet-as-a-Service infrastructure providing institutional-grade security, MPC technology, and seamless dApp integration.',
    icon: 'account_balance_wallet'
  },
  {
    id: 'iq',
    title: 'Whitepaper IQ',
    description: 'AI-driven due diligence platform tailored for analyzing technical documentation, verifying tokenomics, and assessing protocol viability.',
    icon: 'analytics'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: 'Web3',
    icon: 'hub',
    points: ['Protocol Development', 'DAO Governance', 'Cross-chain Bridges']
  },
  {
    name: 'Fintech',
    icon: 'payments',
    points: ['DeFi Integration', 'Payment Gateways', 'Asset Tokenization']
  },
  {
    name: 'Insurance',
    icon: 'health_and_safety',
    points: ['Automated Claims', 'Fraud Prevention', 'Parametric Policies']
  },
  {
    name: 'Consulting',
    icon: 'support_agent',
    points: ['Strategic Advisory', 'Domain Expertise', 'End-to-end Solutions']
  },
  {
    name: 'Legal',
    icon: 'gavel',
    points: ['Smart Contracts', 'IP Management', 'Notary Services']
  },
  {
    name: 'Logistics',
    icon: 'local_shipping',
    points: ['Real-time Tracking', 'Provenance', 'Inventory Mgmt']
  },
  {
    name: 'Real Estate',
    icon: 'apartment',
    points: ['Property Tokenization', 'Ownership Transfer', 'Rental Agreements']
  },
  {
    name: 'Startups',
    icon: 'rocket_launch',
    points: ['ICO/IDO Strategy', 'MVP Development', 'Vesting Contracts']
  },
  {
    name: 'Cybersecurity',
    icon: 'shield_lock',
    points: ['Penetration Testing', 'Code Audits', 'Monitoring 24/7']
  }
];

export const RECOGNITIONS: Recognition[] = [
  {
    id: '1',
    type: 'Keynote',
    title: 'Consensus 2024',
    subtitle: 'Austin, Texas',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    type: 'Award',
    title: 'Best Infrastructure',
    subtitle: 'Blockchain Summit Europe'
  },
  {
    id: '3',
    type: 'Panel',
    title: 'Token 2049',
    subtitle: 'Singapore',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'alex',
    name: 'Alex Sterling',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'Head of Product'
  },
  {
    id: 'elena',
    name: 'Elena Ross',
    role: 'Lead Security Auditor'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    category: 'Regulation',
    title: 'The Future of MiCA and Enterprise DeFi',
    excerpt: 'How new European regulations are shaping the landscape for institutional decentralized finance and what your business needs to know to stay compliant.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    category: 'Technology',
    title: 'Zero-Knowledge Proofs in Supply Chain',
    excerpt: 'Exploring the application of ZK-Rollups for privacy-preserving transparency in global logistics networks.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    category: 'Security',
    title: 'Common Vulnerabilities in Smart Contracts',
    excerpt: 'A technical deep dive into reentrancy attacks and how formal verification can prevent catastrophic loss of funds.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  }
];
