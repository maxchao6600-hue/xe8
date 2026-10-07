import type { Category } from "@/content/types";

export const categories: Category[] = [
  {
    id: "slots",
    slug: "slots",
    image: "/images/cat-slots.jpg",
    imageAlt: {
      en: "Dark slot reels lit by a warm spotlight",
      ms: "Gulungan slot gelap dengan cahaya hangat",
      zh: "暖光下的深色老虎机转轮",
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
    image: "/images/cat-live.jpg",
    imageAlt: {
      en: "A private baccarat table in low warm light",
      ms: "Meja baccarat peribadi dalam cahaya hangat",
      zh: "暖光中的私人百家乐牌桌",
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
    image: "/images/cat-sports.jpg",
    imageAlt: {
      en: "A football pitch at night under warm floodlights",
      ms: "Padang bola pada waktu malam di bawah lampu hangat",
      zh: "暖色灯光下的夜间足球场",
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
    image: "/images/cat-fishing.jpg",
    imageAlt: {
      en: "Fish moving through a shaft of gold light underwater",
      ms: "Ikan bergerak melalui alur cahaya emas di dalam air",
      zh: "鱼群穿过水下的一道金色光柱",
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
    image: "/images/cat-4d.jpg",
    imageAlt: {
      en: "Four ivory number tiles on black stone",
      ms: "Empat jubin nombor gading di atas batu hitam",
      zh: "黑石上的四枚象牙色数字牌",
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
    image: "/images/cat-lottery.jpg",
    imageAlt: {
      en: "Gold and ivory spheres in a black velvet tray",
      ms: "Sfera emas dan gading di dalam dulang baldu hitam",
      zh: "黑丝绒托盘中的金色与象牙色圆球",
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
    image: "/images/games/game-arcade.jpg",
    imageAlt: {
      en: "A dark arcade cabinet with a warm abstract screen",
      ms: "Kabinet arked gelap dengan skrin abstrak yang hangat",
      zh: "深色街机柜，屏幕上是温暖的抽象画面",
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
