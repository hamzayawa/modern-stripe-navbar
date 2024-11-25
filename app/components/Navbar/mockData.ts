import { 
  CreditCard, 
  Building2, 
  ShoppingCart, 
  Code2, 
  BookOpen,
  Link,
  ShoppingBag,
  CircleDollarSign,
  Coins,
  CreditCardIcon,
  Network,
  Store,
  Building,
  Factory,
  ShieldCheck,
  Receipt,
  Fingerprint,
  FileCode,
  Boxes,
  FileText,
  BookOpenCheck,
  SendToBack,
  MessagesSquare,
  Newspaper,
  BookText,
  Users,
  LifeBuoy,
  HelpCircle,
  Activity
} from 'lucide-react';

export const productItems = [
  {
    title: "Global Payments",
    links: [
      { name: "Payments", icon: CreditCard },
      { name: "Payment Links", icon: Link },
      { name: "Checkout", icon: ShoppingBag },
      { name: "Elements", icon: CircleDollarSign }
    ]
  },
  {
    title: "Embedded Finance",
    links: [
      { name: "Connect", icon: Network },
      { name: "Capital", icon: Coins },
      { name: "Issuing", icon: CreditCardIcon }
    ]
  },
  {
    title: "More",
    links: [
      { name: "Payment Methods", icon: CreditCard },
      { name: "Link", icon: Link },
      { name: "Financial Connections", icon: Network },
      { name: "Identity", icon: Fingerprint },
      { name: "Atlas", icon: Building2 }
    ]
  }
];

export const solutionItems = [
  {
    title: "Solutions for Businesses",
    links: [
      { name: "E-commerce", icon: Store },
      { name: "SaaS", icon: Building },
      { name: "Marketplaces", icon: ShoppingCart },
      { name: "Platforms", icon: Factory }
    ]
  },
  {
    title: "Additional Solutions",
    links: [
      { name: "Fraud Prevention", icon: ShieldCheck },
      { name: "Tax Automation", icon: Receipt },
      { name: "Identity", icon: Fingerprint }
    ]
  }
];

export const developerItems = [
  {
    title: "Developer Tools",
    links: [
      { name: "API Reference", icon: FileCode },
      { name: "SDKs", icon: Boxes },
      { name: "Code Samples", icon: Code2 },
      { name: "Documentation", icon: FileText }
    ]
  },
  {
    title: "Guides",
    links: [
      { name: "Accept Payments", icon: BookOpenCheck },
      { name: "Manage Subscriptions", icon: SendToBack },
      { name: "Send Payments", icon: MessagesSquare }
    ]
  }
];

export const resourceItems = [
  {
    title: "Resources",
    links: [
      { name: "Blog", icon: Newspaper },
      { name: "Case Studies", icon: BookText },
      { name: "Guides", icon: BookOpen },
      { name: "Community", icon: Users }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Contact Support", icon: LifeBuoy },
      { name: "Help Center", icon: HelpCircle },
      { name: "API Status", icon: Activity }
    ]
  }
];
