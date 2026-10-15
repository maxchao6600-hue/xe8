import type { L10n } from "@/lib/utils";

export const categoryIds = [
  "slots",
  "live-casino",
  "sports",
  "fishing",
  "4d",
  "lottery",
  "arcade",
] as const;

export type CategoryId = (typeof categoryIds)[number];

export type Category = {
  id: CategoryId;
  slug: CategoryId;
  image: string;
  imageAlt: L10n;
  name: L10n;
  description: L10n;
};

export type Provider = {
  id: string;
  slug: string;
  name: string;
  mark: string;
  logo?: string;
  description: L10n;
  overview: L10n;
};

export type Game = {
  id: string;
  slug: string;
  name: string;
  providerId: string;
  categoryId: CategoryId;
  image: string;
  imageAlt: L10n;
  description: L10n;
  gameplay: L10n;
  featured: boolean;
  popular: boolean;
  addedAt: string;
  status: "listed";
};

export type Promotion = {
  id: string;
  slug: string;
  image: string;
  imageAlt: L10n;
  title: L10n;
  summary: L10n;
  paragraphs: L10n[];
  eligibility: L10n;
  terms: L10n[];
  validity: L10n;
  status: "active" | "seasonal";
};

export const guideCategories = [
  "getting-started",
  "games",
  "slots",
  "live-casino",
  "sports",
  "payments",
  "mobile",
  "account-security",
  "responsible-gaming",
] as const;

export type GuideCategory = (typeof guideCategories)[number];

export type GuideBlock = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
};

export type Guide = {
  id: string;
  slug: string;
  category: GuideCategory;
  cover: string;
  coverAlt: L10n;
  publishedAt: string;
  updatedAt: string;
  author: L10n;
  title: L10n;
  excerpt: L10n;
  sections: Record<"en" | "ms" | "zh", GuideBlock[]>;
  faq: { question: L10n; answer: L10n }[];
};

export type FaqItem = {
  id: string;
  question: L10n;
  answer: L10n;
};

export type PaymentMethod = {
  id: string;
  name: string;
  logo: string;
  deposit: boolean;
  withdrawal: boolean;
  summary: L10n;
};

export type PageCopy = {
  title: string;
  description: string;
  lede: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
};
