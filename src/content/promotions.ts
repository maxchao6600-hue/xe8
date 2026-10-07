import type { Promotion } from "@/content/types";

export const promotions: Promotion[] = [
  {
    id: "welcome-offer",
    slug: "welcome-offer",
    image: "/images/promo-welcome.jpg",
    imageAlt: {
      en: "A black envelope with a plain gold seal",
      ms: "Sampul hitam dengan cap emas polos",
      zh: "带有素金封印的黑色信封",
    },
    title: {
      en: "Welcome offer",
      ms: "Tawaran alu-aluan",
      zh: "迎新优惠",
    },
    summary: {
      en: "New accounts may see a welcome offer after registration. The value, wagering and expiry are printed on the offer itself.",
      ms: "Akaun baharu mungkin melihat tawaran alu-aluan selepas pendaftaran. Nilai, syarat pertaruhan dan tarikh luput tercetak pada tawaran itu.",
      zh: "新账户在注册后可能会看到迎新优惠。金额、流水和有效期印在优惠本身上。",
    },
    paragraphs: [
      {
        en: "A welcome offer is a promotion aimed at a first deposit or a new account. XE8 shows the live version inside the promotions area after you sign in. This page explains how to read one. It does not publish a percentage, a cap or a wagering multiple, because those figures are only valid when they appear on the offer.",
        ms: "Tawaran alu-aluan ialah promosi untuk deposit pertama atau akaun baharu. XE8 memaparkan versi semasa di bahagian promosi selepas anda log masuk. Halaman ini menerangkan cara membacanya. Ia tidak menerbitkan peratusan, had atau gandaan pertaruhan, kerana angka itu hanya sah apabila tertera pada tawaran.",
        zh: "迎新优惠针对首次存款或新账户。登录后，XE8 会在优惠区显示当前版本。本页说明如何阅读一份优惠，不公布百分比、上限或流水倍数，因为这些数字只有印在优惠上时才有效。",
      },
      {
        en: "Before you opt in, read the eligible games, the minimum deposit if one is stated, the wagering requirement and the expiry. If any of those lines are missing, do not assume a rule. Ask support through the signed-in help panel.",
        ms: "Sebelum menyertai, baca permainan yang layak, deposit minimum jika dinyatakan, syarat pertaruhan dan tarikh luput. Jika mana-mana baris itu tiada, jangan anggap peraturannya. Tanya sokongan melalui panel bantuan selepas log masuk.",
        zh: "领取前请阅读适用游戏、如有写明的最低存款、流水要求以及截止时间。如果其中任何一行没有写明，不要自行假设。请通过登录后的帮助面板询问客服。",
      },
    ],
    eligibility: {
      en: "Shown on the offer. Typically limited to accounts that have not already used a welcome promotion.",
      ms: "Ditunjukkan pada tawaran. Biasanya terhad kepada akaun yang belum menggunakan promosi alu-aluan.",
      zh: "以优惠页面为准。通常限于尚未使用过迎新优惠的账户。",
    },
    terms: [
      {
        en: "Opt in only from the promotion panel inside your account.",
        ms: "Sertai hanya dari panel promosi dalam akaun anda.",
        zh: "只在账户内的优惠面板领取。",
      },
      {
        en: "Wagering, game weighting and expiry are the ones printed on that offer.",
        ms: "Syarat pertaruhan, wajaran permainan dan tarikh luput ialah yang tercetak pada tawaran itu.",
        zh: "流水、游戏权重和有效期以该优惠所印内容为准。",
      },
      {
        en: "This website will not restate a bonus figure that can change.",
        ms: "Laman ini tidak akan menyalin angka bonus yang boleh berubah.",
        zh: "本网站不会转载可能变动的奖金数字。",
      },
    ],
    validity: {
      en: "The end time is displayed on the promotion. If no end time is shown, treat the offer as unavailable until support confirms it.",
      ms: "Masa tamat dipaparkan pada promosi. Jika tiada masa tamat, anggap tawaran itu tidak tersedia sehingga sokongan mengesahkannya.",
      zh: "结束时间显示在优惠上。如果没有结束时间，在客服确认之前请视为不可用。",
    },
    status: "active",
  },
  {
    id: "ongoing-offers",
    slug: "ongoing-offers",
    image: "/images/promo-season.jpg",
    imageAlt: {
      en: "A low glass and blank cards on a dark table",
      ms: "Gelas rendah dan kad kosong di atas meja gelap",
      zh: "深色桌面上的矮杯与空白纸牌",
    },
    title: {
      en: "Ongoing offers",
      ms: "Tawaran berterusan",
      zh: "持续优惠",
    },
    summary: {
      en: "Reload and scheduled offers appear on the same promotions board as the welcome offer. Each one carries its own rules.",
      ms: "Tawaran tambah nilai dan tawaran berjadual muncul di papan promosi yang sama. Setiap satu membawa peraturannya sendiri.",
      zh: "再存和定期优惠与迎新优惠在同一块优惠板上。每一条都有自己的规则。",
    },
    paragraphs: [
      {
        en: "Ongoing offers can include reloads, game-specific campaigns or short scheduled events. They are optional. You do not need to join one to use the lobby, deposit or withdraw.",
        ms: "Tawaran berterusan boleh termasuk tambah nilai, kempen permainan tertentu atau acara berjadual yang singkat. Ia pilihan. Anda tidak perlu menyertai satu untuk menggunakan lobi, deposit atau pengeluaran.",
        zh: "持续优惠可以包括再存、指定游戏活动或短期档期。它们是可选的。不参加也可以使用大厅、存款和提款。",
      },
      {
        en: "Join one offer at a time unless the text says they can be combined. A game that is excluded on the offer does not count, even if you enjoy playing it.",
        ms: "Sertai satu tawaran pada satu masa melainkan teks mengatakan ia boleh digabung. Permainan yang dikecualikan pada tawaran tidak dikira, walaupun anda suka memainkannya.",
        zh: "除非正文写明可以叠加，否则一次只参加一项。优惠中排除的游戏不会计入，即使你常玩它。",
      },
    ],
    eligibility: {
      en: "Printed on each offer. Some are open to every funded account, others are invite-only.",
      ms: "Tercetak pada setiap tawaran. Sesetengahnya terbuka kepada setiap akaun yang sudah dibiayai, yang lain jemputan sahaja.",
      zh: "印在每条优惠上。有的对已存款账户开放，有的仅限邀请。",
    },
    terms: [
      {
        en: "Read excluded games and maximum conversion before you opt in.",
        ms: "Baca permainan yang dikecualikan dan penukaran maksimum sebelum menyertai.",
        zh: "领取前阅读排除游戏和最高转换额。",
      },
      {
        en: "A scheduled offer ends at the time shown, including if a match or event runs long.",
        ms: "Tawaran berjadual tamat pada masa yang ditunjukkan, walaupun perlawanan atau acara berlanjutan.",
        zh: "定期优惠在所示时间结束，即使比赛或活动延长也一样。",
      },
    ],
    validity: {
      en: "Each card in the account shows its own window. This page does not keep a second clock.",
      ms: "Setiap kad dalam akaun menunjukkan tempohnya sendiri. Halaman ini tidak menyimpan jam kedua.",
      zh: "账户里的每张卡片有自己的时间窗。本页不另设倒计时。",
    },
    status: "active",
  },
  {
    id: "vip-access",
    slug: "vip-access",
    image: "/images/promo-vip.jpg",
    imageAlt: {
      en: "A black key and a slim gold card sleeve",
      ms: "Kunci hitam dan sarung kad emas yang nipis",
      zh: "一把黑钥匙与纤薄的金色卡套",
    },
    title: {
      en: "VIP access",
      ms: "Akses VIP",
      zh: "VIP 权限",
    },
    summary: {
      en: "VIP promotions are visible when your account is invited. Thresholds and rewards are not published as fixed public numbers.",
      ms: "Promosi VIP kelihatan apabila akaun anda dijemput. Ambang dan ganjaran tidak diterbitkan sebagai nombor awam yang tetap.",
      zh: "账户受到邀请后才能看到 VIP 优惠。门槛和奖励不作为固定公开数字发布。",
    },
    paragraphs: [
      {
        en: "VIP access is an account status, not a public coupon. If your account qualifies, the VIP area and any attached offers appear after you sign in. This site does not list cashback rates, tier points or gift values.",
        ms: "Akses VIP ialah status akaun, bukan kupon awam. Jika akaun anda layak, bahagian VIP dan tawaran yang dilampirkan muncul selepas anda log masuk. Laman ini tidak menyenaraikan kadar pulangan tunai, mata tier atau nilai hadiah.",
        zh: "VIP 是账户状态，不是公开优惠券。如果账户符合条件，登录后会出现 VIP 区域及附属优惠。本站不列出返水比例、等级积分或礼品金额。",
      },
    ],
    eligibility: {
      en: "By invitation inside the account. Support can tell you whether an invite is open, but only after you sign in.",
      ms: "Melalui jemputan dalam akaun. Sokongan boleh memberitahu sama ada jemputan dibuka, tetapi hanya selepas anda log masuk.",
      zh: "由账户内的邀请决定。登录后客服可以说明是否有邀请，未登录则无法查询。",
    },
    terms: [
      {
        en: "Do not share screenshots of a VIP offer in public chats. Offers can be personal.",
        ms: "Jangan kongsi tangkapan skrin tawaran VIP dalam sembang awam. Tawaran boleh bersifat peribadi.",
        zh: "不要在公开聊天中转发 VIP 优惠截图。优惠可能是个人专属。",
      },
      {
        en: "A VIP offer still has an expiry and a game list. Read both.",
        ms: "Tawaran VIP tetap mempunyai tarikh luput dan senarai permainan. Baca kedua-duanya.",
        zh: "VIP 优惠仍有有效期和游戏列表。两者都要看。",
      },
    ],
    validity: {
      en: "Shown on the invite. An expired invite is not extended by this website.",
      ms: "Ditunjukkan pada jemputan. Jemputan yang luput tidak dilanjutkan oleh laman ini.",
      zh: "以邀请函上的时间为准。本网站不能延长已过期的邀请。",
    },
    status: "active",
  },
  {
    id: "seasonal-events",
    slug: "seasonal-events",
    image: "/images/why.jpg",
    imageAlt: {
      en: "A dark corridor opening onto a warm room",
      ms: "Koridor gelap yang membuka ke bilik hangat",
      zh: "通向暖色房间的深色走廊",
    },
    title: {
      en: "Seasonal events",
      ms: "Acara bermusim",
      zh: "节日活动",
    },
    summary: {
      en: "Festival and sports-calendar events are posted for a fixed window. Join only while the card is live.",
      ms: "Acara perayaan dan kalendar sukan disiarkan untuk tempoh tetap. Sertai hanya semasa kad itu aktif.",
      zh: "节日和体育日历活动会在固定窗口发布。只在卡片有效时参加。",
    },
    paragraphs: [
      {
        en: "Seasonal events follow a calendar, such as a festival period or a tournament week. The card names the dates. When the card is gone, the event is closed, even if the festival itself continues.",
        ms: "Acara bermusim mengikut kalendar, seperti tempoh perayaan atau minggu kejohanan. Kad itu menamakan tarikh. Apabila kad hilang, acara ditutup, walaupun perayaan itu sendiri berterusan.",
        zh: "节日活动按日历进行，例如一段节庆或一个赛事周。卡片会写明日期。卡片下架后活动即结束，即使节日本身还在继续。",
      },
    ],
    eligibility: {
      en: "Any extra condition, such as a selected sport or slot, is written on the event card.",
      ms: "Sebarang syarat tambahan, seperti sukan atau slot terpilih, ditulis pada kad acara.",
      zh: "额外条件，例如指定体育或老虎机，写在活动卡片上。",
    },
    terms: [
      {
        en: "Results and leaderboards, if used, are the ones inside the account.",
        ms: "Keputusan dan papan pendahulu, jika digunakan, ialah yang ada dalam akaun.",
        zh: "如果使用成绩或排行榜，以账户内的为准。",
      },
      {
        en: "This page does not award prizes and does not keep a public leaderboard.",
        ms: "Halaman ini tidak memberikan hadiah dan tidak menyimpan papan pendahulu awam.",
        zh: "本页不发奖，也不保留公开排行榜。",
      },
    ],
    validity: {
      en: "The window on the event card is the only valid window.",
      ms: "Tempoh pada kad acara ialah satu-satunya tempoh yang sah.",
      zh: "活动卡片上的时间窗是唯一有效时间。",
    },
    status: "seasonal",
  },
];

export function getPromotion(slug: string) {
  return promotions.find((item) => item.slug === slug);
}
