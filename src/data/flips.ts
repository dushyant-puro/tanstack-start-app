import type { Flip } from "@/types/flip";
import p1 from "@/assets/politician-1.jpg";
import p2 from "@/assets/politician-2.jpg";
import p3 from "@/assets/politician-3.jpg";
import p4 from "@/assets/politician-4.jpg";

export const FLIPS: Flip[] = [
  {
    id: "1",
    politicianName: "Raghav Mishra",
    politicianImage: p1,
    party: "Janta Morcha",
    category: "Economy",
    oldStatement: "GST is a draconian tax that will destroy the small trader. We will never support it.",
    oldDate: "2016-08-12",
    newStatement: "GST is the greatest economic reform of independent India. Bharat ka gaurav.",
    newDate: "2023-07-01",
    flipScore: 94,
    sources: [
      { label: "Hindustan Times", url: "#" },
      { label: "PTI Archive", url: "#" },
    ],
  },
  {
    id: "2",
    politicianName: "Meera Vasudevan",
    politicianImage: p2,
    party: "Lok Shakti Party",
    category: "Foreign Policy",
    oldStatement: "Visiting that country is a betrayal of our soldiers. Sharm karo.",
    oldDate: "2018-03-22",
    newStatement: "Strategic dialogue is the cornerstone of a mature foreign policy. Proud moment.",
    newDate: "2024-11-09",
    flipScore: 88,
    sources: [
      { label: "The Wire", url: "#" },
      { label: "ANI Tape", url: "#" },
    ],
  },
  {
    id: "3",
    politicianName: "Devraj Patil",
    politicianImage: p3,
    party: "Bharat Vikas Dal",
    category: "Farmers",
    oldStatement: "MSP guarantee in law is impossible — economists worldwide will laugh at us.",
    oldDate: "2020-12-04",
    newStatement: "Legal MSP is our farmer-first promise. Annadata ki jeet hogi.",
    newDate: "2024-02-18",
    flipScore: 91,
    sources: [
      { label: "Indian Express", url: "#" },
      { label: "Lok Sabha TV", url: "#" },
    ],
  },
  {
    id: "4",
    politicianName: "Aarav Kapoor",
    politicianImage: p4,
    party: "Yuva Manch",
    category: "Tech & AI",
    oldStatement: "Crypto is gambling. We will ban it within 100 days of forming government.",
    oldDate: "2021-05-30",
    newStatement: "India will be the global Web3 capital. Innovation cannot be banned.",
    newDate: "2024-09-14",
    flipScore: 82,
    sources: [
      { label: "Moneycontrol", url: "#" },
      { label: "Tweet (deleted)", url: "#" },
    ],
  },
  {
    id: "5",
    politicianName: "Raghav Mishra",
    politicianImage: p1,
    party: "Janta Morcha",
    category: "Environment",
    oldStatement: "Climate change is a Western conspiracy to hold back developing nations.",
    oldDate: "2015-11-08",
    newStatement: "India will lead the world to Net Zero by 2070. Mission LiFE for the planet.",
    newDate: "2022-11-15",
    flipScore: 76,
    sources: [{ label: "COP21 Speech", url: "#" }, { label: "COP27 Speech", url: "#" }],
  },
  {
    id: "6",
    politicianName: "Meera Vasudevan",
    politicianImage: p2,
    party: "Lok Shakti Party",
    category: "Education",
    oldStatement: "English-medium imposition is cultural colonization. Mother tongue first, always.",
    oldDate: "2019-06-21",
    newStatement: "Global competitiveness demands English fluency from class 1. Future-ready Bharat.",
    newDate: "2024-08-05",
    flipScore: 79,
    sources: [{ label: "Rajya Sabha Debate", url: "#" }, { label: "NEP Launch", url: "#" }],
  },
  {
    id: "7",
    politicianName: "Devraj Patil",
    politicianImage: p3,
    party: "Bharat Vikas Dal",
    category: "Defence",
    oldStatement: "Buying foreign jets is a scam. Atma-nirbhar Bharat means HAL only.",
    oldDate: "2017-09-10",
    newStatement: "Rafale procurement is a strategic masterstroke. Critics know nothing of warfare.",
    newDate: "2023-04-22",
    flipScore: 87,
    sources: [{ label: "PIB Release", url: "#" }, { label: "India Today", url: "#" }],
  },
  {
    id: "8",
    politicianName: "Aarav Kapoor",
    politicianImage: p4,
    party: "Yuva Manch",
    category: "Reservation",
    oldStatement: "Reservations have served their purpose. It's time for merit-only India.",
    oldDate: "2019-02-11",
    newStatement: "We will fight for sub-quotas and EWS expansion. Samajik nyaya is non-negotiable.",
    newDate: "2024-04-30",
    flipScore: 85,
    sources: [{ label: "Podcast Clip", url: "#" }, { label: "Rally Speech", url: "#" }],
  },
  {
    id: "9",
    politicianName: "Raghav Mishra",
    politicianImage: p1,
    party: "Janta Morcha",
    category: "Free Speech",
    oldStatement: "Sedition law is a colonial-era weapon. We will repeal it immediately.",
    oldDate: "2014-04-07",
    newStatement: "Anti-national speech cannot hide behind freedom. Sedition stays.",
    newDate: "2023-08-11",
    flipScore: 92,
    sources: [{ label: "Manifesto 2014", url: "#" }, { label: "Home Min Brief", url: "#" }],
  },
  {
    id: "10",
    politicianName: "Meera Vasudevan",
    politicianImage: p2,
    party: "Lok Shakti Party",
    category: "Privatization",
    oldStatement: "Selling Air India is selling our heritage. Maharaja belongs to the people.",
    oldDate: "2018-10-02",
    newStatement: "Disinvestment unlocked value for taxpayers. A textbook reform.",
    newDate: "2024-01-19",
    flipScore: 81,
    sources: [{ label: "Mint", url: "#" }, { label: "ET Now", url: "#" }],
  },
  {
    id: "11",
    politicianName: "Devraj Patil",
    politicianImage: p3,
    party: "Bharat Vikas Dal",
    category: "Electoral Bonds",
    oldStatement: "Electoral bonds bring transparency to political funding. Game-changer.",
    oldDate: "2018-01-29",
    newStatement: "Anonymous corporate donations corrupt democracy. Bonds must end.",
    newDate: "2024-03-15",
    flipScore: 90,
    sources: [{ label: "FM Speech", url: "#" }, { label: "Op-Ed", url: "#" }],
  },
  {
    id: "12",
    politicianName: "Aarav Kapoor",
    politicianImage: p4,
    party: "Yuva Manch",
    category: "Social Media",
    oldStatement: "Banning TikTok is anti-creator and anti-youth. Government overreach.",
    oldDate: "2020-06-29",
    newStatement: "National security supersedes entertainment. The ban was overdue.",
    newDate: "2024-07-12",
    flipScore: 73,
    sources: [{ label: "Insta Story", url: "#" }, { label: "Press Conf", url: "#" }],
  },
];

export function searchFlips(query: string): Flip[] {
  const q = query.trim().toLowerCase();
  if (!q) return FLIPS;
  return FLIPS.filter(
    (f) =>
      f.politicianName.toLowerCase().includes(q) ||
      f.party.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.oldStatement.toLowerCase().includes(q) ||
      f.newStatement.toLowerCase().includes(q),
  );
}

export function getFlipById(id: string): Flip | undefined {
  return FLIPS.find((f) => f.id === id);
}

export function getRandomFlip(excludeId?: string): Flip {
  const pool = excludeId ? FLIPS.filter((f) => f.id !== excludeId) : FLIPS;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getTrendingFlips(n = 6): Flip[] {
  return [...FLIPS].sort((a, b) => b.flipScore - a.flipScore).slice(0, n);
}
