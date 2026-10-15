import type { Game } from "@/content/types";
import type { L10n } from "@/lib/utils";

const lobbyNote = {
  en: "Stake limits, paytables and any return-to-player figure are shown inside the game. They are not copied here.",
  ms: "Had taruhan, jadual bayaran dan sebarang angka pulangan pemain dipaparkan dalam permainan. Angka itu tidak disalin di sini.",
  zh: "投注限额、赔付表和玩家回报率都在游戏内显示，这里不转载。",
};

function coverGame(input: {
  id: string;
  name: string;
  providerId: string;
  categoryId: Game["categoryId"];
  image: string;
  alt: L10n;
  description: L10n;
  featured?: boolean;
  addedAt: string;
}): Game {
  return {
    id: input.id,
    slug: input.id,
    name: input.name,
    providerId: input.providerId,
    categoryId: input.categoryId,
    image: input.image,
    imageAlt: input.alt,
    description: input.description,
    gameplay: lobbyNote,
    featured: input.featured ?? true,
    popular: true,
    addedAt: input.addedAt,
    status: "listed",
  };
}

const slot = (en: string, ms: string, zh: string): L10n => ({ en, ms, zh });

export const games: Game[] = [
  coverGame({
    id: "football-world-cup-extra",
    name: "Football World Cup Extra",
    providerId: "lucky365",
    categoryId: "slots",
    image: "/assets/games/football-world-cup.webp",
    addedAt: "2026-10-01",
    alt: slot(
      "Football World Cup Extra cover, a Lucky365 slot",
      "Kulit Football World Cup Extra, slot Lucky365",
      "Football World Cup Extra 封面，Lucky365 老虎机",
    ),
    description: slot(
      "Football World Cup Extra is a Lucky365 video slot. The cover shows two footballers and a match ball.",
      "Football World Cup Extra ialah slot video Lucky365. Kulitnya menunjukkan dua pemain bola dan bola perlawanan.",
      "Football World Cup Extra 是 Lucky365 的电子游戏，封面是两名足球运动员和比赛用球。",
    ),
  }),
  coverGame({
    id: "pinata-wins",
    name: "Pinata Wins",
    providerId: "lucky365",
    categoryId: "slots",
    image: "/assets/games/pinata-wins.webp",
    addedAt: "2026-10-01",
    alt: slot("Pinata Wins cover by Lucky365", "Kulit Pinata Wins oleh Lucky365", "Lucky365 的 Pinata Wins 封面"),
    description: slot(
      "Pinata Wins is a Lucky365 video slot. Rules and features are explained in the game.",
      "Pinata Wins ialah slot video Lucky365. Peraturan dan ciri diterangkan dalam permainan.",
      "Pinata Wins 是 Lucky365 的电子游戏。规则和功能在游戏内说明。",
    ),
  }),
  coverGame({
    id: "lucky-seth-500",
    name: "Lucky Seth 500",
    providerId: "lucky365",
    categoryId: "slots",
    image: "/assets/games/lucky-seth-500.webp",
    addedAt: "2026-10-01",
    alt: slot("Lucky Seth 500 cover by Lucky365", "Kulit Lucky Seth 500 oleh Lucky365", "Lucky365 的 Lucky Seth 500 封面"),
    description: slot(
      "Lucky Seth 500 is a Lucky365 video slot listed in the xe8 hot-game row.",
      "Lucky Seth 500 ialah slot video Lucky365 dalam barisan permainan panas xe8.",
      "Lucky Seth 500 是 xe8 热门游戏中的 Lucky365 电子游戏。",
    ),
  }),
  coverGame({
    id: "mahjong-ways-2",
    name: "Mahjong Ways 2",
    providerId: "lucky365",
    categoryId: "slots",
    image: "/assets/games/mahjong-ways-2.webp",
    addedAt: "2026-10-01",
    alt: slot("Mahjong Ways 2 cover by Lucky365", "Kulit Mahjong Ways 2 oleh Lucky365", "Lucky365 的 Mahjong Ways 2 封面"),
    description: slot(
      "Mahjong Ways 2 is a Lucky365 mahjong-themed video slot. Tile values stay inside the game.",
      "Mahjong Ways 2 ialah slot video bertema mahjong dari Lucky365. Nilai jubin kekal dalam permainan.",
      "Mahjong Ways 2 是 Lucky365 的麻将主题电子游戏。牌值以游戏内显示为准。",
    ),
  }),
  coverGame({
    id: "ayam-road-king",
    name: "Ayam Road King",
    providerId: "microslot",
    categoryId: "slots",
    image: "/assets/games/ayam-road-king.webp",
    addedAt: "2026-10-02",
    alt: slot("Ayam Road King cover by MicroSlot", "Kulit Ayam Road King oleh MicroSlot", "MicroSlot 的 Ayam Road King 封面"),
    description: slot(
      "Ayam Road King is a MicroSlot video slot. The paytable is shown when the game opens.",
      "Ayam Road King ialah slot video MicroSlot. Jadual bayaran dipaparkan apabila permainan dibuka.",
      "Ayam Road King 是 MicroSlot 的电子游戏。打开游戏后可以看到赔付表。",
    ),
  }),
  coverGame({
    id: "gates-of-olympus-1000",
    name: "Gates of Olympus 1000",
    providerId: "pragmatic-play",
    categoryId: "slots",
    image: "/assets/games/gates-of-olympus-1000.webp",
    addedAt: "2026-10-02",
    alt: slot(
      "Gates of Olympus 1000 cover by Pragmatic Play",
      "Kulit Gates of Olympus 1000 oleh Pragmatic Play",
      "Pragmatic Play 的 Gates of Olympus 1000 封面",
    ),
    description: slot(
      "Gates of Olympus 1000 is a Pragmatic Play video slot. Multiplier details are part of the in-game help.",
      "Gates of Olympus 1000 ialah slot video Pragmatic Play. Butiran pengganda ada dalam bantuan permainan.",
      "Gates of Olympus 1000 是 Pragmatic Play 的电子游戏。倍数说明在游戏帮助里。",
    ),
  }),
  coverGame({
    id: "sugar-rush-1000",
    name: "Sugar Rush 1000",
    providerId: "pragmatic-play",
    categoryId: "slots",
    image: "/assets/games/sugar-rush-1000.webp",
    addedAt: "2026-10-02",
    alt: slot("Sugar Rush 1000 cover by Pragmatic Play", "Kulit Sugar Rush 1000 oleh Pragmatic Play", "Pragmatic Play 的 Sugar Rush 1000 封面"),
    description: slot(
      "Sugar Rush 1000 is a Pragmatic Play video slot with a candy theme. Cluster rules are shown in the game.",
      "Sugar Rush 1000 ialah slot video Pragmatic Play bertema gula-gula. Peraturan kelompok dipaparkan dalam permainan.",
      "Sugar Rush 1000 是 Pragmatic Play 的糖果主题电子游戏。群集规则在游戏内显示。",
    ),
  }),
  coverGame({
    id: "dragon-mahjong",
    name: "Dragon Mahjong",
    providerId: "microslot",
    categoryId: "slots",
    image: "/assets/games/dragon-mahjong.webp",
    addedAt: "2026-10-03",
    alt: slot("Dragon Mahjong cover by MicroSlot", "Kulit Dragon Mahjong oleh MicroSlot", "MicroSlot 的 Dragon Mahjong 封面"),
    description: slot(
      "Dragon Mahjong is a MicroSlot video slot. Feature rules stay on the game screen.",
      "Dragon Mahjong ialah slot video MicroSlot. Peraturan ciri kekal pada skrin permainan.",
      "Dragon Mahjong 是 MicroSlot 的电子游戏。功能规则在游戏画面上。",
    ),
  }),
  coverGame({
    id: "iceland",
    name: "Iceland",
    providerId: "monkey-king",
    categoryId: "slots",
    image: "/assets/games/iceland.webp",
    addedAt: "2026-10-03",
    alt: slot("Iceland cover by Monkey King", "Kulit Iceland oleh Monkey King", "Monkey King 的 Iceland 封面"),
    description: slot(
      "Iceland is a Monkey King video slot. The lobby lists it under that studio.",
      "Iceland ialah slot video Monkey King. Lobi menyenaraikannya di bawah studio itu.",
      "Iceland 是 Monkey King 的电子游戏，大厅把它列在该工作室下。",
    ),
  }),
  coverGame({
    id: "super-ace",
    name: "Super Ace",
    providerId: "jili",
    categoryId: "slots",
    image: "/assets/games/super-ace.webp",
    addedAt: "2026-10-04",
    alt: slot("Super Ace cover by Jili", "Kulit Super Ace oleh Jili", "Jili 的 Super Ace 封面"),
    description: slot(
      "Super Ace is a Jili card-themed video slot. Stakes and features are set inside the game.",
      "Super Ace ialah slot video Jili bertema kad. Taruhan dan ciri ditetapkan dalam permainan.",
      "Super Ace 是 Jili 的纸牌主题电子游戏。投注和功能在游戏内设定。",
    ),
  }),
  coverGame({
    id: "fortune-garuda-500",
    name: "Fortune Garuda 500",
    providerId: "jili",
    categoryId: "slots",
    image: "/assets/games/fortune-garuda-500.webp",
    addedAt: "2026-10-04",
    alt: slot("Fortune Garuda 500 cover by Jili", "Kulit Fortune Garuda 500 oleh Jili", "Jili 的 Fortune Garuda 500 封面"),
    description: slot(
      "Fortune Garuda 500 is a Jili video slot. The garuda artwork on the cover matches this title.",
      "Fortune Garuda 500 ialah slot video Jili. Karya garuda pada kulit sepadan dengan tajuk ini.",
      "Fortune Garuda 500 是 Jili 的电子游戏，封面的金翅鸟对应这个名称。",
    ),
  }),
  coverGame({
    id: "jackpot-fishing-2",
    name: "Jackpot Fishing 2",
    providerId: "jili",
    categoryId: "fishing",
    image: "/assets/games/jackpot-fishing-2.webp",
    featured: false,
    addedAt: "2026-10-04",
    alt: slot("Jackpot Fishing 2 cover by Jili", "Kulit Jackpot Fishing 2 oleh Jili", "Jili 的 Jackpot Fishing 2 封面"),
    description: slot(
      "Jackpot Fishing 2 is a Jili fishing game. Weapon stakes and fish values are shown in the game, not on this page.",
      "Jackpot Fishing 2 ialah permainan memancing Jili. Nilai senjata dan ikan dipaparkan dalam permainan, bukan di halaman ini.",
      "Jackpot Fishing 2 是 Jili 的捕鱼游戏。炮值和鱼的分值在游戏内显示，不在本页列出。",
    ),
  }),
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function gamesByProvider(providerId: string) {
  return games.filter((game) => game.providerId === providerId);
}

export function gamesByCategory(categoryId: string) {
  return games.filter((game) => game.categoryId === categoryId);
}
