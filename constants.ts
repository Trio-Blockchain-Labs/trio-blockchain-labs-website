
import { Solution, Industry, Recognition, TeamMember, BlogPost, Event } from './types';

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

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Big Bang Startup Challenge',
    tag: 'Award',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
    detail: "En Değerli 50 Girişim. Türkiye'nin en büyük girişimcilik sahnesinde Trilema Wallet ile \"En Değerli 50 Girişim\" arasına girerek toplamda 2.350.000 TL değerinde ödül ve hibe desteği kazandık.",
    images: [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '2',
    title: 'Webrazzi Summit',
    tag: 'Summit',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Türkiye'nin lider teknoloji zirvesinde, finans kurumları ve Web2 şirketleri için geliştirdiğimiz yeni nesil self-custodial ve EIP-7702 uyumlu cüzdan altyapı vizyonumuzu paylaştık.",
    images: []
  },
  {
    id: '3',
    title: 'Future Of Wallet Hackathon',
    tag: 'Hackathon',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Teknik Liderlik & Partnerlik. Tether'in Türkiye'deki ilk resmi hackathon'unda, Bybit TR ve BTM İstanbul paydaşlığında teknik liderlik ve organizasyon partnerliğini üstlenerek 36 saatlik kesintisiz bir maratonu başarıyla tamamladık.",
    images: []
  },
  {
    id: '4',
    title: 'Tokenized Assets Report',
    tag: 'Launch',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "RWA Lansmanı. \"Tokenleştirilmiş Varlıkların Sınır Ötesi Hukuki Uyumu: Gayrimenkul Tokenizasyonu Vaka Analizi\" raporumuzu yayınlayarak, RWA ekosisteminin hukuki ve teknik altyapısını sektör profesyonelleriyle paylaştık.",
    images: []
  },
  {
    id: '5',
    title: 'Konya Blockchain Hackathon',
    tag: 'Hackathon',
    location: 'Konya, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Kapsül Teknoloji ve Dalos Network iş birliğiyle düzenlenen bu dev organizasyonda, Anadolu'daki geliştirici ekosistemini Web3 dünyasına taşıyan projelere mentorluk ve jürilik desteği sağladık.",
    images: []
  },
  {
    id: '6',
    title: 'Take Off Istanbul',
    tag: 'Summit',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "BTM İstanbul çatısı altında yer aldığımız bu global zirvede, Trilema Wallet'ın kurumsal dijital varlık yönetimi çözümlerini uluslararası teknoloji ve inovasyon paydaşlarına sunduk.",
    images: []
  },
  {
    id: '7',
    title: 'BTM Sahne XL',
    tag: 'Event',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Supernova & Odyssey. BTM bünyesinde düzenlenen iki ayrı Sahne XL etkinliğinde, bankalar, ödeme kuruluşları ve yatırımcı ağlarıyla bir araya gelerek Trilema WaaS (Wallet as a Service) çözümümüzün kurumsal adaptasyon potansiyelini aktardık.",
    images: []
  },
  {
    id: '8',
    title: 'Base Türkiye Workshops',
    tag: 'Workshop',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Base Türkiye ortaklığıyla Gebze Teknik Üniversitesi ve Işık Üniversitesi Blockchain topluluklarında Mini App geliştirme süreçleri ve onchain kullanıcı deneyimi üzerine workshoplar gerçekleştirdik.",
    images: []
  },
  {
    id: '9',
    title: 'Finext 2025',
    tag: 'Award',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Top 11 Finalisti. Finans teknolojilerinin geleceğinin şekillendiği Finext 2025 hızlandırma programında, yapay zeka destekli analiz platformumuz WhitepaperIQ ile en iyi girişimler arasına girerek finalist olma başarısı gösterdik.",
    images: []
  },
  {
    id: '10',
    title: 'ODTÜ Blockchain Days',
    tag: 'Summit',
    location: 'Ankara, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Stratejik partneri olduğumuz etkinlikte, \"Building a Career in Web3\" panelinde yer alarak genç yeteneklere kariyer yolları ve küresel ekosisteme katılım stratejileri üzerine rehberlik ettik.",
    images: []
  },
  {
    id: '11',
    title: 'Stellar Hackathon',
    tag: 'Hackathon',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Pera Palas. Stellar Development Foundation ve Rise In tarafından düzenlenen hackathonda, 2025 Yaz Staj Programı ekibimizle birlikte inovatif fikirler geliştirerek Web3 dünyasına profesyonel bir giriş yaptık.",
    images: []
  },
  {
    id: '12',
    title: 'Bioexpo & DeSci',
    tag: 'Summit',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Sunumu. BIOEXPO 2025 kapsamında, sağlık verilerinde blokzincir teknolojisinin mülkiyet ve güven üzerindeki dönüştürücü etkilerini ele alan stratejik bir sunum gerçekleştirdik.",
    images: []
  },
  {
    id: '13',
    title: 'University Code Prix',
    tag: 'Hackathon',
    location: 'Konya & Izmir, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Paribu Hub, Kapsül Teknoloji ve Base Türkiye paydaşlığında Konya ve İzmir etaplarında algoritma kodlama maratonunun bir parçası olduk.",
    images: []
  },
  {
    id: '14',
    title: 'Units Network Hackathon',
    tag: 'Hackathon',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Global blockchain inovasyonunun desteklendiği Units Network TR Hackathonu'nda jüri ve mentorluk rolleriyle yer alarak ekosistemin büyümesine katkı sağladık.",
    images: []
  },
  {
    id: '15',
    title: 'Web3x3 Streetball',
    tag: 'Event',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    detail: "Rixos Tersane İstanbul'da düzenlenen bu özel etkinlikte, TriO Blockchain Labs ve Trilema formalarımızla Web3 topluluğunun enerjisini sahaya taşıdık.",
    images: []
  }
];
