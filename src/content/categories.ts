import type { Category } from "@/content/types";

export const categories: Category[] = [
  {
    id: "slots",
    slug: "slots",
    image: "/assets/categories/slots.webp",
    imageAlt: {
      en: "AskmeSlot mahjong tiles and a gold pot",
      ms: "Jubin mahjong AskmeSlot dan periuk emas",
      zh: "AskmeSlot 的麻将牌与金盆",
    },
    name: { en: "Slots", ms: "Slot", zh: "老虎机" },
    description: {
      en: "Video slots from established studios, with rules and paytables shown inside each game.",
      ms: "Slot video daripada studio terkenal. Peraturan dan jadual bayaran dipaparkan dalam permainan.",
      zh: "来自成熟工作室的电子游戏。规则与赔付表在游戏内显示。",
    },
  },
  {
    id: "live-casino",
    slug: "live-casino",
    image: "/assets/categories/live.webp",
    imageAlt: {
      en: "Evolution baccarat and roulette artwork",
      ms: "Karya baccarat dan rolet Evolution",
      zh: "Evolution 百家乐与轮盘画面",
    },
    name: { en: "Live Casino", ms: "Kasino Langsung", zh: "真人娱乐场" },
    description: {
      en: "Table games hosted in real time. Betting windows and table limits appear on the live screen.",
      ms: "Permainan meja secara langsung. Had meja dan tempoh pertaruhan tertera pada skrin.",
      zh: "实时主持的桌面游戏。投注时间和桌台限额显示在画面上。",
    },
  },
  {
    id: "sports",
    slug: "sports",
    image: "/assets/categories/sports.webp",
    imageAlt: {
      en: "A World Cup trophy, football and basketball on a stadium pitch",
      ms: "Trofi Piala Dunia, bola sepak dan bola keranjang di stadium",
      zh: "球场上的世界杯奖杯、足球和篮球",
    },
    name: { en: "Sports", ms: "Sukan", zh: "体育" },
    description: {
      en: "Match markets for football, basketball and other sports. Prices update inside the sports lobby.",
      ms: "Pasaran perlawanan bola sepak, bola keranjang dan sukan lain. Harga dikemas kini dalam lobi sukan.",
      zh: "足球、篮球等赛事盘口。赔率在体育大厅内更新。",
    },
  },
  {
    id: "fishing",
    slug: "fishing",
    image: "/assets/categories/fishing.webp",
    imageAlt: {
      en: "Jackpot Fishing 2 artwork with a shark and an octopus",
      ms: "Karya Jackpot Fishing 2 dengan jerung dan sotong",
      zh: "Jackpot Fishing 2 的鲨鱼与章鱼画面",
    },
    name: { en: "Fishing", ms: "Memancing", zh: "捕鱼" },
    description: {
      en: "Arcade-style fishing games. Weapon stakes and fish values are shown in the game, not on this page.",
      ms: "Permainan memancing gaya arked. Nilai taruhan dan ikan dipaparkan dalam permainan, bukan di halaman ini.",
      zh: "街机式捕鱼游戏。炮值和鱼的分值在游戏内显示，不在本页列出。",
    },
  },
  {
    id: "4d",
    slug: "4d",
    image: "/assets/categories/4d.webp",
    imageAlt: {
      en: "EKOR lottery machine with numbered balls",
      ms: "Mesin loteri EKOR dengan bola bernombor",
      zh: "EKOR 摇奖机与号码球",
    },
    name: { en: "4D", ms: "4D", zh: "4D" },
    description: {
      en: "Four-digit number games in the format Malaysian players already know. Draws and prize tables are confirmed in the lobby.",
      ms: "Permainan nombor empat digit yang biasa kepada pemain di Malaysia. Cabutan dan jadual hadiah disahkan dalam lobi.",
      zh: "马来西亚玩家熟悉的四位数字游戏。开奖与奖金表以大厅显示为准。",
    },
  },
  {
    id: "lottery",
    slug: "lottery",
    image: "/assets/categories/4d.webp",
    imageAlt: {
      en: "EKOR draw machine used for lottery games",
      ms: "Mesin cabutan EKOR untuk permainan loteri",
      zh: "用于彩票游戏的 EKOR 摇奖机",
    },
    name: { en: "Lottery", ms: "Loteri", zh: "彩票" },
    description: {
      en: "Number draws beside 4D. Available games, stakes and results are listed in the number-games area.",
      ms: "Cabutan nombor di samping 4D. Permainan, taruhan dan keputusan disenaraikan di bahagian nombor.",
      zh: "与 4D 并列的数字开奖。可用游戏、投注额和结果在数字游戏区列出。",
    },
  },
  {
    id: "arcade",
    slug: "arcade",
    image: "/assets/categories/arcade.webp",
    imageAlt: {
      en: "Playtech lobby artwork",
      ms: "Karya lobi Playtech",
      zh: "Playtech 大厅画面",
    },
    name: { en: "Arcade", ms: "Arked", zh: "街机" },
    description: {
      en: "Faster casual games that sit outside slots and live tables. Each title explains its own rules on screen.",
      ms: "Permainan kasual yang lebih pantas di luar slot dan meja langsung. Setiap tajuk menerangkan peraturannya sendiri.",
      zh: "老虎机和真人桌之外节奏更快的休闲游戏。每款游戏会在画面中说明规则。",
    },
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
