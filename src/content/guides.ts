import type { Guide, GuideCategory } from "@/content/types";
import type { Locale } from "@/i18n/locale";

const author = {
  en: "XE8 Guides",
  ms: "Panduan XE8",
  zh: "XE8 指南",
};

export const guideCategoryLabels: Record<GuideCategory, Record<Locale, string>> = {
  "getting-started": { en: "Getting Started", ms: "Permulaan", zh: "入门" },
  games: { en: "Games", ms: "Permainan", zh: "游戏" },
  slots: { en: "Slots", ms: "Slot", zh: "老虎机" },
  "live-casino": { en: "Live Casino", ms: "Kasino Langsung", zh: "真人娱乐场" },
  sports: { en: "Sports", ms: "Sukan", zh: "体育" },
  payments: { en: "Payments", ms: "Pembayaran", zh: "支付" },
  mobile: { en: "Mobile", ms: "Mudah Alih", zh: "手机" },
  "account-security": { en: "Account & Security", ms: "Akaun & Keselamatan", zh: "账户与安全" },
  "responsible-gaming": { en: "Responsible Gaming", ms: "Permainan Bertanggungjawab", zh: "负责任游戏" },
};

export const guides: Guide[] = [
  {
    id: "getting-started",
    slug: "getting-started",
    category: "getting-started",
    cover: "/images/guide.jpg",
    coverAlt: {
      en: "A notebook and lamp on a dark desk",
      ms: "Buku nota dan lampu di atas meja gelap",
      zh: "深色书桌上的笔记本与台灯",
    },
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-30",
    author,
    title: {
      en: "Getting started on XE8",
      ms: "Bermula di XE8",
      zh: "在 XE8 入门",
    },
    excerpt: {
      en: "A practical first session: account, cashier, lobby and where the rules actually live.",
      ms: "Sesi pertama yang praktikal: akaun, kaunter, lobi dan tempat peraturan sebenar berada.",
      zh: "一次务实的初次使用：账户、收银台、大厅，以及规则真正写在哪里。",
    },
    sections: {
      en: [
        {
          id: "first-session",
          heading: "What to do first",
          level: 2,
          paragraphs: [
            "Open the official XE8 entry, create one account and sign in before you look for a game. The lobby is easier to judge when you can see which categories are switched on for you.",
            "Do not send money to a number someone messages you. Deposits start from the cashier inside the account, and the details on that screen are the ones that count.",
          ],
        },
        {
          id: "lobby",
          heading: "Find your way around the lobby",
          level: 2,
          paragraphs: [
            "The main groups are slots, live casino, sports, fishing, 4D, lottery and arcade. This website uses the same groups so you can read about a category before you open it.",
          ],
          list: [
            "Slots and fishing explain their own stakes inside the game.",
            "Live tables show limits and the betting window on screen.",
            "Sports prices move until a bet is accepted.",
            "4D and lottery need an open draw and a stake type.",
          ],
        },
        {
          id: "where-rules",
          heading: "Where the rules live",
          level: 2,
          paragraphs: [
            "A guide can tell you what a game is. It cannot freeze a paytable, a price or a promotion. If this site and the game disagree, the game, the cashier or the promotion card wins.",
          ],
        },
      ],
      ms: [
        {
          id: "first-session",
          heading: "Apa yang perlu dibuat dahulu",
          level: 2,
          paragraphs: [
            "Buka pintu rasmi XE8, cipta satu akaun dan log masuk sebelum mencari permainan. Lobi lebih mudah dinilai apabila anda nampak kategori yang dibuka untuk anda.",
            "Jangan hantar wang ke nombor yang seseorang mesejkan. Deposit bermula dari kaunter dalam akaun, dan butiran pada skrin itu yang dikira.",
          ],
        },
        {
          id: "lobby",
          heading: "Cari jalan dalam lobi",
          level: 2,
          paragraphs: [
            "Kumpulan utama ialah slot, kasino langsung, sukan, memancing, 4D, loteri dan arked. Laman ini menggunakan kumpulan yang sama supaya anda boleh membaca tentang kategori sebelum membukanya.",
          ],
          list: [
            "Slot dan memancing menerangkan taruhan sendiri dalam permainan.",
            "Meja langsung menunjukkan had dan tempoh pertaruhan pada skrin.",
            "Harga sukan bergerak sehingga pertaruhan diterima.",
            "4D dan loteri memerlukan cabutan yang masih dibuka dan jenis taruhan.",
          ],
        },
        {
          id: "where-rules",
          heading: "Tempat peraturan berada",
          level: 2,
          paragraphs: [
            "Panduan boleh memberitahu apa itu sesuatu permainan. Ia tidak boleh membekukan jadual bayaran, harga atau promosi. Jika laman ini dan permainan tidak sepadan, permainan, kaunter atau kad promosi yang menang.",
          ],
        },
      ],
      zh: [
        {
          id: "first-session",
          heading: "先做什么",
          level: 2,
          paragraphs: [
            "打开官方 XE8 入口，先建立一个账户并登录，再去找游戏。能看到为你开放的分类时，大厅更容易判断。",
            "不要把钱转到别人私聊发来的账号。存款从账户里的收银台开始，以那一屏的资料为准。",
          ],
        },
        {
          id: "lobby",
          heading: "在大厅里找路",
          level: 2,
          paragraphs: [
            "主要分组是老虎机、真人娱乐场、体育、捕鱼、4D、彩票和街机。本网站使用同一套分组，方便你在打开之前先了解一个类别。",
          ],
          list: [
            "老虎机和捕鱼的投注在游戏内说明。",
            "真人桌台在画面上显示限额和投注时间。",
            "体育赔率在注单被接受前都会变动。",
            "4D 和彩票需要仍在开放的期次以及投注类型。",
          ],
        },
        {
          id: "where-rules",
          heading: "规则写在哪里",
          level: 2,
          paragraphs: [
            "指南可以说明一款游戏是什么，但不能冻结赔付表、赔率或优惠。如果本站与游戏不一致，以游戏、收银台或优惠卡片为准。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Do I need the app?",
          ms: "Perlukah saya aplikasi?",
          zh: "一定要安装应用吗？",
        },
        answer: {
          en: "No. The mobile browser is enough for a first session. Install a package only when the official entry offers one.",
          ms: "Tidak. Pelayar mudah alih memadai untuk sesi pertama. Pasang pakej hanya apabila pintu rasmi menawarkannya.",
          zh: "不必。第一次使用，手机浏览器就够了。只有官方入口提供安装包时才安装。",
        },
      },
    ],
  },
  {
    id: "how-to-register",
    slug: "how-to-register",
    category: "getting-started",
    cover: "/images/promo-welcome.jpg",
    coverAlt: {
      en: "A sealed black envelope on dark marble",
      ms: "Sampul hitam berlak pada marmar gelap",
      zh: "深色大理石上的封印黑色信封",
    },
    publishedAt: "2026-08-02",
    updatedAt: "2026-09-30",
    author,
    title: {
      en: "How to register an XE8 account",
      ms: "Cara mendaftar akaun XE8",
      zh: "如何注册 XE8 账户",
    },
    excerpt: {
      en: "The fields a registration form usually asks for, and the mistakes that cause a second account.",
      ms: "Medan yang biasanya diminta borang pendaftaran, dan kesilapan yang menghasilkan akaun kedua.",
      zh: "注册表通常会问的字段，以及导致开出第二个账户的错误。",
    },
    sections: {
      en: [
        {
          id: "before",
          heading: "Before you open the form",
          level: 2,
          paragraphs: [
            "Use the official registration entry. If this website has been given that address, the register page links to it. If not, start from the register control inside the official XE8 app or site, not from a link in a chat.",
            "Register only if online gaming is legal for you and you are an adult. One person should keep one account.",
          ],
        },
        {
          id: "fields",
          heading: "Fields you should expect",
          level: 2,
          paragraphs: [
            "Forms differ, but Malaysian players are usually asked for a username, a password, a mobile number and a currency. Use your own number. The name on the account should match the name you will use to pay.",
          ],
          table: {
            caption: "What to prepare",
            headers: ["Item", "Why it matters"],
            rows: [
              ["Your own mobile number", "Recovery and security checks use it"],
              ["A password you do not reuse", "Stops a leaked password elsewhere opening this account"],
              ["The name on your bank or e-wallet", "Payments in another name are often held"],
            ],
          },
        },
        {
          id: "after",
          heading: "After the account exists",
          level: 2,
          paragraphs: [
            "Sign in, open the cashier and only then choose a method. Read any welcome offer before you opt in. You can deposit without taking a promotion.",
          ],
        },
      ],
      ms: [
        {
          id: "before",
          heading: "Sebelum membuka borang",
          level: 2,
          paragraphs: [
            "Gunakan pintu pendaftaran rasmi. Jika laman ini diberi alamat itu, halaman daftar akan memaut kepadanya. Jika tidak, mulakan dari butang daftar dalam aplikasi atau laman rasmi XE8, bukan dari pautan dalam sembang.",
            "Daftar hanya jika permainan dalam talian sah untuk anda dan anda dewasa. Seorang pemain patut menyimpan satu akaun.",
          ],
        },
        {
          id: "fields",
          heading: "Medan yang boleh dijangka",
          level: 2,
          paragraphs: [
            "Borang berbeza, tetapi pemain di Malaysia biasanya diminta nama pengguna, kata laluan, nombor mudah alih dan mata wang. Gunakan nombor anda sendiri. Nama pada akaun harus sepadan dengan nama yang anda akan guna untuk bayar.",
          ],
          table: {
            caption: "Apa yang perlu disediakan",
            headers: ["Perkara", "Mengapa ia penting"],
            rows: [
              ["Nombor mudah alih anda", "Pemulihan dan semakan keselamatan menggunakannya"],
              ["Kata laluan yang tidak dikitar semula", "Mengelak kata laluan bocor di tempat lain membuka akaun ini"],
              ["Nama pada bank atau e-dompet", "Bayaran atas nama lain sering ditahan"],
            ],
          },
        },
        {
          id: "after",
          heading: "Selepas akaun wujud",
          level: 2,
          paragraphs: [
            "Log masuk, buka kaunter dan barulah pilih kaedah. Baca tawaran alu-aluan sebelum menyertai. Anda boleh deposit tanpa mengambil promosi.",
          ],
        },
      ],
      zh: [
        {
          id: "before",
          heading: "打开表格之前",
          level: 2,
          paragraphs: [
            "使用官方注册入口。如果本网站已配置该地址，注册页会链到那里。如果没有，请从官方 XE8 应用或网站里的注册按钮开始，不要用聊天里的链接。",
            "仅在在线游戏对你合法、且你已成年时注册。一个人应只保留一个账户。",
          ],
        },
        {
          id: "fields",
          heading: "通常会看到的字段",
          level: 2,
          paragraphs: [
            "表格会有差别，但马来西亚玩家通常需要用户名、密码、手机号和货币。请使用自己的号码。账户姓名应与你付款时使用的姓名一致。",
          ],
          table: {
            caption: "事先准备",
            headers: ["项目", "为什么重要"],
            rows: [
              ["你自己的手机号", "找回账户和安全验证会用到"],
              ["不重复使用的密码", "避免其他地方泄露的密码打开这个账户"],
              ["银行或电子钱包上的姓名", "他人姓名的付款经常被暂扣"],
            ],
          },
        },
        {
          id: "after",
          heading: "账户建立之后",
          level: 2,
          paragraphs: [
            "登录，打开收银台，然后再选择方式。领取迎新优惠前先阅读条款。你可以存款而不参加优惠。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "I already have an account and cannot sign in.",
          ms: "Saya sudah ada akaun dan tidak boleh log masuk.",
          zh: "我已有账户但登不进去。",
        },
        answer: {
          en: "Use the recovery step on the official login screen. Registering again creates a second account and often delays withdrawals.",
          ms: "Gunakan langkah pemulihan pada skrin log masuk rasmi. Mendaftar lagi mewujudkan akaun kedua dan sering melambatkan pengeluaran.",
          zh: "请使用官方登录页的找回步骤。再次注册会变成第二个账户，提款也常常因此被延迟。",
        },
      },
    ],
  },
  {
    id: "slots-on-xe8",
    slug: "slots-on-xe8",
    category: "slots",
    cover: "/images/guide-slots.jpg",
    coverAlt: {
      en: "Dark tiles with gold inlay on black lacquer",
      ms: "Jubin gelap dengan hiasan emas di atas lakuer hitam",
      zh: "黑漆面上带金饰的深色牌",
    },
    publishedAt: "2026-08-10",
    updatedAt: "2026-09-18",
    author,
    title: {
      en: "XE8 slots: how to read a game",
      ms: "Slot XE8: cara membaca permainan",
      zh: "XE8 老虎机：如何读懂一款游戏",
    },
    excerpt: {
      en: "What to check inside a slot before you raise the stake, without invented RTP figures.",
      ms: "Apa yang perlu disemak dalam slot sebelum menaikkan taruhan, tanpa angka RTP yang direka.",
      zh: "提高投注前应在老虎机里核对什么，这里不编造 RTP。",
    },
    sections: {
      en: [
        {
          id: "catalog",
          heading: "The catalog is a map",
          level: 2,
          paragraphs: [
            "Game pages on this site name the studio and describe the style of play in plain language. Artwork here is editorial. It is not the studio's key art, and it is not a promise that every title is open in every account.",
          ],
        },
        {
          id: "inside",
          heading: "Check these before you spin",
          level: 2,
          paragraphs: [
            "Open the in-game help. That panel is the paytable. Look for the stake steps, any feature buy, and whether a promotion you joined counts this game.",
          ],
          list: [
            "Stake per spin, not just the balance.",
            "Whether wins tumble, pay on lines, or pay on ways.",
            "A feature that spends extra credits.",
            "The promotion card, if you opted in.",
          ],
        },
        {
          id: "rtp",
          heading: "About return-to-player figures",
          level: 2,
          paragraphs: [
            "Studios publish RTP in the game or in their own help. Those numbers can vary by market. This guide does not repeat them, because a copied figure goes stale.",
          ],
        },
      ],
      ms: [
        {
          id: "catalog",
          heading: "Katalog ialah peta",
          level: 2,
          paragraphs: [
            "Halaman permainan di laman ini menamakan studio dan menerangkan gaya main dalam bahasa biasa. Karya seni di sini bersifat editorial. Ia bukan seni rasmi studio, dan ia bukan janji bahawa setiap tajuk dibuka pada setiap akaun.",
          ],
        },
        {
          id: "inside",
          heading: "Semak ini sebelum spin",
          level: 2,
          paragraphs: [
            "Buka bantuan dalam permainan. Panel itu ialah jadual bayaran. Cari langkah taruhan, pembelian ciri, dan sama ada promosi yang anda sertai mengira permainan ini.",
          ],
          list: [
            "Taruhan setiap spin, bukan hanya baki.",
            "Sama ada kemenangan jatuh, membayar pada garisan, atau pada ways.",
            "Ciri yang menggunakan kredit tambahan.",
            "Kad promosi, jika anda menyertai.",
          ],
        },
        {
          id: "rtp",
          heading: "Tentang angka pulangan pemain",
          level: 2,
          paragraphs: [
            "Studio menerbitkan RTP dalam permainan atau bantuan mereka sendiri. Angka itu boleh berbeza mengikut pasaran. Panduan ini tidak mengulanginya, kerana angka yang disalin akan lapuk.",
          ],
        },
      ],
      zh: [
        {
          id: "catalog",
          heading: "目录只是地图",
          level: 2,
          paragraphs: [
            "本站的游戏页会写明工作室，并用白话说明玩法风格。这里的图片是编辑配图，不是工作室的官方主视觉，也不保证每个账户都能打开每一款。",
          ],
        },
        {
          id: "inside",
          heading: "旋转前核对这些",
          level: 2,
          paragraphs: [
            "打开游戏内帮助。那个面板才是赔付表。查看投注档、是否有购买功能，以及你参加的优惠是否计算这款游戏。",
          ],
          list: [
            "每次旋转的投注，而不只是余额。",
            "获胜是掉落、赔付线还是 ways。",
            "会额外消耗积分的功能。",
            "如果你领取了优惠，核对优惠卡片。",
          ],
        },
        {
          id: "rtp",
          heading: "关于玩家回报率",
          level: 2,
          paragraphs: [
            "工作室在游戏里或自己的帮助文档中公布 RTP。这些数字可能因市场而不同。本指南不转载，因为抄来的数字会过时。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Which slot pays the most?",
          ms: "Slot mana yang paling banyak membayar?",
          zh: "哪台老虎机最容易赢？",
        },
        answer: {
          en: "No guide can answer that for your next spin. Compare the in-game help and play at a stake you can stop.",
          ms: "Tiada panduan boleh menjawabnya untuk spin anda yang seterusnya. Bandingkan bantuan dalam permainan dan main pada taruhan yang anda boleh berhenti.",
          zh: "没有指南能回答你下一转的结果。请比较游戏内帮助，并用你能够停下来的金额去玩。",
        },
      },
    ],
  },
  {
    id: "live-casino-basics",
    slug: "live-casino-basics",
    category: "live-casino",
    cover: "/images/cat-live.jpg",
    coverAlt: {
      en: "An empty baccarat table in warm light",
      ms: "Meja baccarat kosong dalam cahaya hangat",
      zh: "暖光中的空百家乐桌",
    },
    publishedAt: "2026-08-11",
    updatedAt: "2026-09-12",
    author,
    title: {
      en: "Live casino tables on XE8",
      ms: "Meja kasino langsung di XE8",
      zh: "XE8 的真人娱乐场桌台",
    },
    excerpt: {
      en: "How a live table works, and what the roadmap does not tell you.",
      ms: "Cara meja langsung berfungsi, dan apa yang tidak diberitahu oleh peta jalan.",
      zh: "真人桌台如何运作，以及路单并不能告诉你什么。",
    },
    sections: {
      en: [
        {
          id: "round",
          heading: "A round has a clock",
          level: 2,
          paragraphs: [
            "Live baccarat, roulette and game shows close bets before the result. If your chip is still in your hand when the window shuts, it is not a bet. Speed tables simply make that window shorter.",
          ],
        },
        {
          id: "limits",
          heading: "Limits are per table",
          level: 2,
          paragraphs: [
            "Two baccarat tables can show different minimums. Read the limit next to the bet spot. Side bets are optional and are labelled separately.",
          ],
        },
        {
          id: "roadmap",
          heading: "Roadmaps are history",
          level: 2,
          paragraphs: [
            "A roadmap shows recent results. It does not change the next card or the next spin. Use it to follow the shoe, not as a pattern that owes you a result.",
          ],
        },
      ],
      ms: [
        {
          id: "round",
          heading: "Pusingan ada jam",
          level: 2,
          paragraphs: [
            "Baccarat, rolet dan rancangan permainan langsung menutup pertaruhan sebelum keputusan. Jika cip masih di tangan anda apabila tempoh tutup, ia bukan pertaruhan. Meja pantas hanya memendekkan tempoh itu.",
          ],
        },
        {
          id: "limits",
          heading: "Had adalah mengikut meja",
          level: 2,
          paragraphs: [
            "Dua meja baccarat boleh menunjukkan minimum yang berbeza. Baca had di sebelah tempat pertaruhan. Pertaruhan sampingan adalah pilihan dan dilabel berasingan.",
          ],
        },
        {
          id: "roadmap",
          heading: "Peta jalan ialah sejarah",
          level: 2,
          paragraphs: [
            "Peta jalan menunjukkan keputusan terkini. Ia tidak mengubah kad seterusnya atau putaran seterusnya. Gunakannya untuk mengikut kasut, bukan sebagai corak yang berhutang keputusan kepada anda.",
          ],
        },
      ],
      zh: [
        {
          id: "round",
          heading: "每一局都有计时",
          level: 2,
          paragraphs: [
            "真人百家乐、轮盘和游戏秀会在结果出来前停止下注。窗口关闭时筹码还在你手上，就不算下注。极速桌只是把这个窗口缩短。",
          ],
        },
        {
          id: "limits",
          heading: "限额按桌台计算",
          level: 2,
          paragraphs: [
            "两张百家乐桌的最低限额可以不同。请看投注位旁边的限额。边注是可选的，并且单独标注。",
          ],
        },
        {
          id: "roadmap",
          heading: "路单是历史",
          level: 2,
          paragraphs: [
            "路单显示最近的结果。它不会改变下一张牌或下一次转动。用它来跟随这一靴，而不是把它当成欠你一个结果的规律。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "The video froze mid-round. Did my bet count?",
          ms: "Video beku di tengah pusingan. Adakah pertaruhan saya dikira?",
          zh: "视频在局中卡住了。我的注算吗？",
        },
        answer: {
          en: "Check the bet history for that table. A bet that was accepted is listed. A chip that never left your tray is not.",
          ms: "Semak sejarah pertaruhan meja itu. Pertaruhan yang diterima disenaraikan. Cip yang tidak pernah meninggalkan dulang anda tidak dikira.",
          zh: "查看该桌的投注记录。已被接受的注会列出。没有离开筹码托盘的注不算。",
        },
      },
    ],
  },
  {
    id: "sports-markets",
    slug: "sports-markets",
    category: "sports",
    cover: "/images/cat-sports.jpg",
    coverAlt: {
      en: "Floodlights over a night football pitch",
      ms: "Lampu limpah di atas padang bola malam",
      zh: "夜间足球场上的泛光灯",
    },
    publishedAt: "2026-08-14",
    updatedAt: "2026-09-21",
    author,
    title: {
      en: "How XE8 sports markets work",
      ms: "Cara pasaran sukan XE8 berfungsi",
      zh: "XE8 体育盘口如何运作",
    },
    excerpt: {
      en: "Read the market name, know when a price is fixed, and keep fixture rules with the bet.",
      ms: "Baca nama pasaran, ketahui bila harga menjadi tetap, dan simpan peraturan perlawanan bersama pertaruhan.",
      zh: "看清盘口名称，知道赔率何时锁定，并把赛事规则和注单放在一起看。",
    },
    sections: {
      en: [
        {
          id: "price",
          heading: "A price moves until it is accepted",
          level: 2,
          paragraphs: [
            "Pre-match and in-play prices update as the book changes. Your stake is at the price shown when the bet is accepted, which can differ from the number you first tapped.",
          ],
        },
        {
          id: "name",
          heading: "Read the market name",
          level: 2,
          paragraphs: [
            "Match result, handicap and totals are different bets. A football handicap is not the same as the final score. Confirm the line, the period (full time or a half) and the selection before you confirm.",
          ],
        },
        {
          id: "rules",
          heading: "Interruptions",
          level: 2,
          paragraphs: [
            "Postponement, abandonment and retirement are covered by the sports rules for that market. Those rules sit in the sports lobby. A guide cannot settle a bet.",
          ],
        },
      ],
      ms: [
        {
          id: "price",
          heading: "Harga bergerak sehingga diterima",
          level: 2,
          paragraphs: [
            "Harga pra-perlawanan dan semasa permainan dikemas kini apabila buku berubah. Taruhan anda pada harga yang ditunjukkan apabila pertaruhan diterima, yang boleh berbeza daripada nombor yang anda ketuk dahulu.",
          ],
        },
        {
          id: "name",
          heading: "Baca nama pasaran",
          level: 2,
          paragraphs: [
            "Keputusan perlawanan, handicap dan jumlah ialah pertaruhan yang berbeza. Handicap bola sepak tidak sama dengan skor akhir. Sahkan garisan, tempoh (masa penuh atau separuh) dan pilihan sebelum mengesahkan.",
          ],
        },
        {
          id: "rules",
          heading: "Gangguan",
          level: 2,
          paragraphs: [
            "Penangguhan, permainan terbengkalai dan persaraan diliputi peraturan sukan untuk pasaran itu. Peraturan itu ada dalam lobi sukan. Panduan tidak boleh menyelesaikan pertaruhan.",
          ],
        },
      ],
      zh: [
        {
          id: "price",
          heading: "赔率在被接受前都会变",
          level: 2,
          paragraphs: [
            "赛前和滚球赔率会随盘口更新。你的投注锁定在注单被接受时显示的赔率，它可能和你最初点到的数字不同。",
          ],
        },
        {
          id: "name",
          heading: "看清盘口名称",
          level: 2,
          paragraphs: [
            "赛果、让分和大小分是不同的注。足球让球不等于最终比分。确认前请核对盘口、时段（全场或半场）以及你的选项。",
          ],
        },
        {
          id: "rules",
          heading: "比赛中断",
          level: 2,
          paragraphs: [
            "延期、腰斩和退赛由该盘口的体育规则处理。规则在体育大厅里。指南不能结算注单。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Can I cash out?",
          ms: "Bolehkah saya cash out?",
          zh: "可以提前结算吗？",
        },
        answer: {
          en: "Only if that fixture shows a cash-out control. It is not available on every market, and the amount is the one on screen.",
          ms: "Hanya jika perlawanan itu menunjukkan kawalan cash-out. Ia tidak tersedia pada setiap pasaran, dan jumlahnya ialah yang tertera pada skrin.",
          zh: "只有该赛事显示提前结算按钮时才可以。不是每个盘口都有，金额以画面为准。",
        },
      },
    ],
  },
  {
    id: "fishing-games",
    slug: "fishing-games",
    category: "games",
    cover: "/images/cat-fishing.jpg",
    coverAlt: {
      en: "Fish in a shaft of underwater light",
      ms: "Ikan dalam alur cahaya bawah air",
      zh: "水下光柱中的鱼",
    },
    publishedAt: "2026-08-16",
    updatedAt: "2026-09-16",
    author,
    title: {
      en: "Fishing games: stakes, rooms and targets",
      ms: "Permainan memancing: taruhan, bilik dan sasaran",
      zh: "捕鱼游戏：投注、房间和目标",
    },
    excerpt: {
      en: "How fishing games spend credits, and why a bigger weapon is not a strategy by itself.",
      ms: "Cara permainan memancing menggunakan kredit, dan mengapa senjata lebih besar bukan strategi dengan sendirinya.",
      zh: "捕鱼游戏如何消耗积分，以及为什么更大的炮本身不是策略。",
    },
    sections: {
      en: [
        {
          id: "credit",
          heading: "Every shot spends credit",
          level: 2,
          paragraphs: [
            "Fishing games charge the weapon stake when you fire, whether or not the fish is caught. The room you join sets the stake range. Raise the weapon only inside that range, and only with money you already decided to spend.",
          ],
        },
        {
          id: "targets",
          heading: "Targets show their own value",
          level: 2,
          paragraphs: [
            "Ordinary fish and boss targets are labelled in the game. A boss is not a guaranteed catch. This guide does not list a hit rate.",
          ],
        },
        {
          id: "rooms",
          heading: "Pick the room first",
          level: 2,
          paragraphs: [
            "A higher room is a higher stake, not a kinder table. If you cannot read the weapon cost comfortably, step back to a lower room or stop.",
          ],
        },
      ],
      ms: [
        {
          id: "credit",
          heading: "Setiap tembakan menggunakan kredit",
          level: 2,
          paragraphs: [
            "Permainan memancing menolak taruhan senjata apabila anda menembak, sama ada ikan ditangkap atau tidak. Bilik yang anda sertai menetapkan julat taruhan. Naikkan senjata hanya dalam julat itu, dan hanya dengan wang yang sudah anda putuskan untuk belanjakan.",
          ],
        },
        {
          id: "targets",
          heading: "Sasaran menunjukkan nilai sendiri",
          level: 2,
          paragraphs: [
            "Ikan biasa dan sasaran bos dilabel dalam permainan. Bos bukan tangkapan yang dijamin. Panduan ini tidak menyenaraikan kadar kena.",
          ],
        },
        {
          id: "rooms",
          heading: "Pilih bilik dahulu",
          level: 2,
          paragraphs: [
            "Bilik lebih tinggi ialah taruhan lebih tinggi, bukan meja yang lebih baik. Jika anda tidak selesa membaca kos senjata, kembali ke bilik lebih rendah atau berhenti.",
          ],
        },
      ],
      zh: [
        {
          id: "credit",
          heading: "每一炮都消耗积分",
          level: 2,
          paragraphs: [
            "捕鱼游戏在你开炮时扣除炮值，无论是否打中。你进入的房间决定投注范围。只在该范围内提高炮倍，并且只用你已经决定花掉的钱。",
          ],
        },
        {
          id: "targets",
          heading: "目标会标出自己的分值",
          level: 2,
          paragraphs: [
            "普通鱼和首领目标都在游戏里标注。首领不是必中。本指南不列出命中率。",
          ],
        },
        {
          id: "rooms",
          heading: "先选房间",
          level: 2,
          paragraphs: [
            "更高的房间只是更高的投注，不是更好打的桌子。如果炮值让你不舒服，就回到较低的房间或停下来。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Does holding the fire button help?",
          ms: "Adakah menahan butang tembak membantu?",
          zh: "按住开炮键有帮助吗？",
        },
        answer: {
          en: "It spends the weapon stake on every shot. Stop when the session budget is gone, not when a boss is still on screen.",
          ms: "Ia menggunakan taruhan senjata pada setiap tembakan. Berhenti apabila bajet sesi habis, bukan apabila bos masih di skrin.",
          zh: "每一炮都会扣掉炮值。预算用完就停，而不是屏幕上还有首领就继续。",
        },
      },
    ],
  },
  {
    id: "payment-guide",
    slug: "payment-guide",
    category: "payments",
    cover: "/images/payment.jpg",
    coverAlt: {
      en: "A dark card sleeve and a brass coin dish",
      ms: "Sarung kad gelap dan mangkuk syiling loyang",
      zh: "深色卡套与黄铜硬币碟",
    },
    publishedAt: "2026-08-05",
    updatedAt: "2026-10-01",
    author,
    title: {
      en: "XE8 payment methods for Malaysian players",
      ms: "Kaedah pembayaran XE8 untuk pemain di Malaysia",
      zh: "面向马来西亚玩家的 XE8 支付方式",
    },
    excerpt: {
      en: "How to read the cashier, and why a method on this page may still be hidden in your account.",
      ms: "Cara membaca kaunter, dan mengapa kaedah di halaman ini mungkin masih tersembunyi dalam akaun anda.",
      zh: "如何阅读收银台，以及为什么本页提到的方式仍可能不在你的账户里。",
    },
    sections: {
      en: [
        {
          id: "cashier",
          heading: "The cashier is the list",
          level: 2,
          paragraphs: [
            "FPX, DuitNow, Touch 'n Go eWallet, GrabPay and bank transfer are methods Malaysian players commonly ask about. Use one only when the cashier shows it. Limits, if any, are on that screen.",
          ],
        },
        {
          id: "name",
          heading: "Pay from your own name",
          level: 2,
          paragraphs: [
            "The bank account or e-wallet should match the name on your XE8 profile. A transfer from a friend, even with your reference, is a third-party payment.",
          ],
        },
        {
          id: "reference",
          heading: "Copy the reference once",
          level: 2,
          paragraphs: [
            "Account numbers and references can change. Copy them from the current cashier screen. Do not reuse a screenshot from an earlier deposit or from a group chat.",
          ],
        },
      ],
      ms: [
        {
          id: "cashier",
          heading: "Kaunter ialah senarai",
          level: 2,
          paragraphs: [
            "FPX, DuitNow, Touch 'n Go eWallet, GrabPay dan pindahan bank ialah kaedah yang sering ditanya pemain di Malaysia. Gunakan hanya apabila kaunter menunjukkannya. Had, jika ada, ada pada skrin itu.",
          ],
        },
        {
          id: "name",
          heading: "Bayar dari nama anda sendiri",
          level: 2,
          paragraphs: [
            "Akaun bank atau e-dompet harus sepadan dengan nama pada profil XE8 anda. Pindahan daripada rakan, walaupun dengan rujukan anda, ialah pembayaran pihak ketiga.",
          ],
        },
        {
          id: "reference",
          heading: "Salin rujukan sekali",
          level: 2,
          paragraphs: [
            "Nombor akaun dan rujukan boleh berubah. Salinnya dari skrin kaunter semasa. Jangan guna semula tangkapan skrin deposit terdahulu atau daripada sembang kumpulan.",
          ],
        },
      ],
      zh: [
        {
          id: "cashier",
          heading: "收银台才是清单",
          level: 2,
          paragraphs: [
            "FPX、DuitNow、Touch 'n Go eWallet、GrabPay 和银行转账是马来西亚玩家常问的方式。只有收银台显示时才使用。如有限额，写在那个画面上。",
          ],
        },
        {
          id: "name",
          heading: "用你自己的姓名付款",
          level: 2,
          paragraphs: [
            "银行账户或电子钱包应与 XE8 资料上的姓名一致。朋友代转，即使填了你的参考号，也属于第三方付款。",
          ],
        },
        {
          id: "reference",
          heading: "参考号只复制这一次",
          level: 2,
          paragraphs: [
            "账号和参考号可能改变。请从当前收银台画面复制。不要复用以前存款的截图，也不要用来自群聊的资料。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Do you publish processing times?",
          ms: "Adakah anda menerbitkan masa pemprosesan?",
          zh: "你们公布处理时间吗？",
        },
        answer: {
          en: "No. Status in your transaction history is the record. Bank and e-wallet networks add their own time.",
          ms: "Tidak. Status dalam sejarah transaksi ialah rekod. Rangkaian bank dan e-dompet menambah masa mereka sendiri.",
          zh: "不公布。交易记录中的状态才是依据。银行和电子钱包网络还有它们自己的时间。",
        },
      },
    ],
  },
  {
    id: "how-to-deposit",
    slug: "how-to-deposit",
    category: "payments",
    cover: "/images/promo-season.jpg",
    coverAlt: {
      en: "A glass and blank cards on a dark table",
      ms: "Gelas dan kad kosong di atas meja gelap",
      zh: "深色桌上的杯子与空白纸牌",
    },
    publishedAt: "2026-08-06",
    updatedAt: "2026-10-02",
    author,
    title: {
      en: "How to deposit on XE8",
      ms: "Cara deposit di XE8",
      zh: "如何在 XE8 存款",
    },
    excerpt: {
      en: "A cashier sequence you can follow, plus what to do when the balance does not move.",
      ms: "Urutan kaunter yang boleh diikuti, serta apa yang perlu dibuat apabila baki tidak bergerak.",
      zh: "可以照着做的收银台步骤，以及余额不动时该怎么办。",
    },
    sections: {
      en: [
        {
          id: "steps",
          heading: "Deposit steps",
          level: 2,
          paragraphs: [
            "Sign in on the official entry. Open the cashier and choose Deposit. Pick a method that is actually listed, enter an amount inside the limits shown, and complete the bank or wallet confirmation.",
          ],
          list: [
            "Match the amount to the figure you typed.",
            "Paste the reference if one is given. Do not add extra words.",
            "Stay on the confirmation page until it finishes or fails clearly.",
            "Return to transaction history and read the status.",
          ],
        },
        {
          id: "issues",
          heading: "If nothing arrives",
          level: 2,
          paragraphs: [
            "Do not send a second payment to the same old details. Compare the receipt with the cashier screen from that attempt: amount, time, reference and destination. Then contact support while you are signed in, and send that reference.",
          ],
        },
        {
          id: "promo",
          heading: "Promotions are separate",
          level: 2,
          paragraphs: [
            "Opting into an offer can add wagering before a withdrawal. If you only want to add balance, leave the offer unchecked when the cashier gives you that choice.",
          ],
        },
      ],
      ms: [
        {
          id: "steps",
          heading: "Langkah deposit",
          level: 2,
          paragraphs: [
            "Log masuk pada pintu rasmi. Buka kaunter dan pilih Deposit. Pilih kaedah yang benar-benar disenaraikan, masukkan jumlah dalam had yang ditunjukkan, dan selesaikan pengesahan bank atau dompet.",
          ],
          list: [
            "Padankan jumlah dengan angka yang anda taip.",
            "Tampal rujukan jika diberi. Jangan tambah perkataan lain.",
            "Kekal di halaman pengesahan sehingga ia selesai atau gagal dengan jelas.",
            "Kembali ke sejarah transaksi dan baca status.",
          ],
        },
        {
          id: "issues",
          heading: "Jika tiada apa-apa sampai",
          level: 2,
          paragraphs: [
            "Jangan hantar bayaran kedua ke butiran lama yang sama. Bandingkan resit dengan skrin kaunter percubaan itu: jumlah, masa, rujukan dan destinasi. Kemudian hubungi sokongan semasa anda log masuk, dan hantar rujukan itu.",
          ],
        },
        {
          id: "promo",
          heading: "Promosi adalah berasingan",
          level: 2,
          paragraphs: [
            "Menyertai tawaran boleh menambah syarat pertaruhan sebelum pengeluaran. Jika anda hanya mahu menambah baki, biarkan tawaran tidak ditanda apabila kaunter memberi pilihan itu.",
          ],
        },
      ],
      zh: [
        {
          id: "steps",
          heading: "存款步骤",
          level: 2,
          paragraphs: [
            "在官方入口登录。打开收银台并选择存款。选择实际列出的方式，输入画面限额内的金额，然后完成银行或钱包确认。",
          ],
          list: [
            "金额要和你输入的数字一致。",
            "如果给了参考号就粘贴，不要额外加字。",
            "留在确认页，直到它完成或明确失败。",
            "回到交易记录阅读状态。",
          ],
        },
        {
          id: "issues",
          heading: "如果没有到账",
          level: 2,
          paragraphs: [
            "不要用同一组旧资料再转一笔。把收据和那次收银台画面对比：金额、时间、参考号和收款账户。然后在登录状态下联系客服，并提供该参考号。",
          ],
        },
        {
          id: "promo",
          heading: "优惠是分开的",
          level: 2,
          paragraphs: [
            "领取优惠可能在提款前增加流水。如果你只想增加余额，收银台给出选择时就不要勾选优惠。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "The bank app timed out. Should I try again?",
          ms: "Aplikasi bank tamat masa. Patutkah saya cuba lagi?",
          zh: "银行应用超时了。要再试一次吗？",
        },
        answer: {
          en: "Check history first. If the first attempt is still pending, wait. A second transfer can create two deposits.",
          ms: "Semak sejarah dahulu. Jika percubaan pertama masih tertangguh, tunggu. Pindahan kedua boleh mewujudkan dua deposit.",
          zh: "先看记录。如果第一笔仍在处理中，请等待。再转一次可能变成两笔存款。",
        },
      },
    ],
  },
  {
    id: "how-to-withdraw",
    slug: "how-to-withdraw",
    category: "payments",
    cover: "/images/promo-vip.jpg",
    coverAlt: {
      en: "A key and card sleeve on dark stone",
      ms: "Kunci dan sarung kad di atas batu gelap",
      zh: "深色石面上的钥匙与卡套",
    },
    publishedAt: "2026-08-07",
    updatedAt: "2026-10-02",
    author,
    title: {
      en: "How to withdraw from XE8",
      ms: "Cara pengeluaran dari XE8",
      zh: "如何从 XE8 提款",
    },
    excerpt: {
      en: "Requirements you can check yourself, and the reasons a request is often sent back.",
      ms: "Syarat yang boleh anda semak sendiri, dan sebab permohonan sering dikembalikan.",
      zh: "你可以自己核对的要求，以及申请常被退回的原因。",
    },
    sections: {
      en: [
        {
          id: "before",
          heading: "Before you submit",
          level: 2,
          paragraphs: [
            "Sign in and open Withdrawal. Choose a method the cashier is offering. The destination account should be in the same name as your profile. If a promotion is still active, open it and read whether wagering remains.",
          ],
        },
        {
          id: "steps",
          heading: "Withdrawal steps",
          level: 2,
          paragraphs: [
            "Enter an amount the screen allows, confirm the destination, and submit once. The new row in transaction history is your receipt. This website does not quote a processing time.",
          ],
          list: [
            "Same-name bank account or e-wallet.",
            "No active offer you have not finished, unless the offer says withdrawal is allowed.",
            "A method that is listed at that moment.",
            "One request. Do not stack duplicates while the first is pending.",
          ],
        },
        {
          id: "declined",
          heading: "If it is declined",
          level: 2,
          paragraphs: [
            "Read the reason on the transaction. Fix that point — name, method or an unfinished offer — and submit a new request. Sending the same request again without a change usually returns the same result.",
          ],
        },
      ],
      ms: [
        {
          id: "before",
          heading: "Sebelum menghantar",
          level: 2,
          paragraphs: [
            "Log masuk dan buka Pengeluaran. Pilih kaedah yang ditawarkan kaunter. Akaun destinasi harus atas nama yang sama dengan profil anda. Jika promosi masih aktif, bukanya dan baca sama ada syarat pertaruhan masih ada.",
          ],
        },
        {
          id: "steps",
          heading: "Langkah pengeluaran",
          level: 2,
          paragraphs: [
            "Masukkan jumlah yang dibenarkan skrin, sahkan destinasi, dan hantar sekali. Baris baharu dalam sejarah transaksi ialah resit anda. Laman ini tidak menyebut masa pemprosesan.",
          ],
          list: [
            "Akaun bank atau e-dompet nama sama.",
            "Tiada tawaran aktif yang belum selesai, melainkan tawaran membenarkan pengeluaran.",
            "Kaedah yang disenaraikan pada ketika itu.",
            "Satu permohonan. Jangan tindih pendua semasa yang pertama tertangguh.",
          ],
        },
        {
          id: "declined",
          heading: "Jika ditolak",
          level: 2,
          paragraphs: [
            "Baca sebab pada transaksi. Betulkan perkara itu — nama, kaedah atau tawaran yang belum selesai — dan hantar permohonan baharu. Menghantar permohonan yang sama tanpa perubahan biasanya memulangkan hasil yang sama.",
          ],
        },
      ],
      zh: [
        {
          id: "before",
          heading: "提交之前",
          level: 2,
          paragraphs: [
            "登录并打开提款。选择收银台正在提供的方式。收款账户应与资料姓名一致。如果还有进行中的优惠，打开它，看流水是否还没完成。",
          ],
        },
        {
          id: "steps",
          heading: "提款步骤",
          level: 2,
          paragraphs: [
            "输入画面允许的金额，确认收款账户，然后提交一次。交易记录里的新行就是你的回执。本网站不给出处理时间。",
          ],
          list: [
            "同名银行账户或电子钱包。",
            "没有未完成的优惠，除非该优惠写明可以提款。",
            "当时列出的方式。",
            "只提交一次。第一笔还在处理时不要重复提交。",
          ],
        },
        {
          id: "declined",
          heading: "如果被拒绝",
          level: 2,
          paragraphs: [
            "阅读交易上的原因。先改掉那一点——姓名、方式或未完成的优惠——再提交新申请。不改内容重复提交，结果通常一样。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Can support speed a withdrawal up from this website?",
          ms: "Bolehkah sokongan mempercepat pengeluaran dari laman ini?",
          zh: "客服能从本网站加快提款吗？",
        },
        answer: {
          en: "No. Support is inside the signed-in account. This site cannot see your transaction or change its status.",
          ms: "Tidak. Sokongan ada dalam akaun yang sudah log masuk. Laman ini tidak dapat melihat transaksi anda atau mengubah statusnya.",
          zh: "不能。客服在已登录的账户里。本站看不到你的交易，也不能更改状态。",
        },
      },
    ],
  },
  {
    id: "mobile-access",
    slug: "mobile-access",
    category: "mobile",
    cover: "/images/mobile.jpg",
    coverAlt: {
      en: "A black phone on dark stone with an abstract screen",
      ms: "Telefon hitam di atas batu gelap dengan skrin abstrak",
      zh: "深色石面上的黑色手机，屏幕为抽象画面",
    },
    publishedAt: "2026-08-20",
    updatedAt: "2026-09-25",
    author,
    title: {
      en: "XE8 on Android, iOS and the mobile browser",
      ms: "XE8 pada Android, iOS dan pelayar mudah alih",
      zh: "在 Android、iOS 和手机浏览器上使用 XE8",
    },
    excerpt: {
      en: "The browser path is enough. Install only what the official entry offers.",
      ms: "Laluan pelayar memadai. Pasang hanya apa yang ditawarkan pintu rasmi.",
      zh: "浏览器就够用。只安装官方入口提供的内容。",
    },
    sections: {
      en: [
        {
          id: "browser",
          heading: "Start in the browser",
          level: 2,
          paragraphs: [
            "On Android or iOS, open the official address in the mobile browser and sign in. Add it to your home screen from the browser menu if you want a shortcut. That shortcut still opens the site. It is not a separate account.",
          ],
        },
        {
          id: "android",
          heading: "Android packages",
          level: 2,
          paragraphs: [
            "If an Android package is offered, the official entry is the place to get it. Check the address before you install. Refuse files sent by Telegram, WhatsApp or email, even if the sender uses the XE8 name.",
          ],
        },
        {
          id: "ios",
          heading: "iOS",
          level: 2,
          paragraphs: [
            "This site does not point to an App Store listing. If the official entry shows a profile or home-screen step, follow that screen. If it does not, stay in the browser.",
          ],
        },
        {
          id: "sign-in",
          heading: "Signing in on a phone",
          level: 2,
          paragraphs: [
            "Use the same username and password as on desktop. If the browser offers to save the password, only accept that on a phone you control. Sign out on a shared device.",
          ],
        },
      ],
      ms: [
        {
          id: "browser",
          heading: "Mulakan dalam pelayar",
          level: 2,
          paragraphs: [
            "Pada Android atau iOS, buka alamat rasmi dalam pelayar mudah alih dan log masuk. Tambah ke skrin utama dari menu pelayar jika anda mahu pintasan. Pintasan itu tetap membuka laman. Ia bukan akaun berasingan.",
          ],
        },
        {
          id: "android",
          heading: "Pakej Android",
          level: 2,
          paragraphs: [
            "Jika pakej Android ditawarkan, pintu rasmi ialah tempat untuk mendapatkannya. Semak alamat sebelum memasang. Tolak fail yang dihantar melalui Telegram, WhatsApp atau e-mel, walaupun pengirim menggunakan nama XE8.",
          ],
        },
        {
          id: "ios",
          heading: "iOS",
          level: 2,
          paragraphs: [
            "Laman ini tidak menunjuk ke senarai App Store. Jika pintu rasmi menunjukkan langkah profil atau skrin utama, ikut skrin itu. Jika tidak, kekal dalam pelayar.",
          ],
        },
        {
          id: "sign-in",
          heading: "Log masuk di telefon",
          level: 2,
          paragraphs: [
            "Gunakan nama pengguna dan kata laluan yang sama seperti di desktop. Jika pelayar menawarkan untuk menyimpan kata laluan, terima hanya pada telefon yang anda kawal. Log keluar pada peranti kongsi.",
          ],
        },
      ],
      zh: [
        {
          id: "browser",
          heading: "先用浏览器",
          level: 2,
          paragraphs: [
            "在 Android 或 iOS 上，用手机浏览器打开官方地址并登录。如果想要快捷方式，可从浏览器菜单添加到主屏幕。这个快捷方式打开的仍是网站，不是另一个账户。",
          ],
        },
        {
          id: "android",
          heading: "Android 安装包",
          level: 2,
          paragraphs: [
            "如果提供 Android 安装包，请从官方入口获取。安装前核对地址。拒绝 Telegram、WhatsApp 或邮件发来的文件，即使对方使用了 XE8 的名字。",
          ],
        },
        {
          id: "ios",
          heading: "iOS",
          level: 2,
          paragraphs: [
            "本站不指向 App Store 页面。如果官方入口显示描述文件或主屏幕步骤，按那个画面操作。如果没有，就继续用浏览器。",
          ],
        },
        {
          id: "sign-in",
          heading: "在手机上登录",
          level: 2,
          paragraphs: [
            "使用与电脑相同的用户名和密码。如果浏览器要保存密码，只在你自己控制的手机上同意。共用设备请退出登录。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "The site looks cramped. What should I do?",
          ms: "Laman kelihatan sesak. Apa yang patut saya buat?",
          zh: "页面显得很挤。该怎么办？",
        },
        answer: {
          en: "Use the latest version of the phone's browser, and avoid desktop mode. Rotate to portrait for slots that are built that way.",
          ms: "Gunakan versi terkini pelayar telefon, dan elak mod desktop. Putar ke potret untuk slot yang dibina begitu.",
          zh: "使用手机浏览器的最新版本，并避免桌面模式。为竖屏设计的老虎机请转到竖屏。",
        },
      },
    ],
  },
  {
    id: "account-security",
    slug: "account-security",
    category: "account-security",
    cover: "/images/guide-security.jpg",
    coverAlt: {
      en: "A brass padlock beside a black notebook",
      ms: "Gembok loyang di sebelah buku nota hitam",
      zh: "黑色笔记本旁的黄铜挂锁",
    },
    publishedAt: "2026-08-22",
    updatedAt: "2026-10-03",
    author,
    title: {
      en: "Account security on XE8",
      ms: "Keselamatan akaun di XE8",
      zh: "XE8 账户安全",
    },
    excerpt: {
      en: "Passwords, shared devices, and the messages you should ignore.",
      ms: "Kata laluan, peranti kongsi, dan mesej yang patut anda abaikan.",
      zh: "密码、共用设备，以及应该忽略的消息。",
    },
    sections: {
      en: [
        {
          id: "password",
          heading: "Keep the password to yourself",
          level: 2,
          paragraphs: [
            "Support will not ask for your password or a one-time code. Anyone who does is not support. Use a unique password and change it if you typed it on a device you do not trust.",
          ],
        },
        {
          id: "messages",
          heading: "Ignore rescue messages",
          level: 2,
          paragraphs: [
            "A common scam says your account is locked and sends a new link or a new bank account. Close it. Open XE8 yourself from the address you already use, then read any notice inside the account.",
          ],
          list: [
            "No staff member needs your password.",
            "No deposit should go to a personal account named in a chat.",
            "No APK from a stranger is an update.",
          ],
        },
        {
          id: "devices",
          heading: "Shared phones",
          level: 2,
          paragraphs: [
            "Sign out when you finish on a shared phone. Do not save the password in a browser profile that other people use.",
          ],
        },
      ],
      ms: [
        {
          id: "password",
          heading: "Simpan kata laluan untuk diri sendiri",
          level: 2,
          paragraphs: [
            "Sokongan tidak akan meminta kata laluan atau kod sekali guna. Sesiapa yang meminta bukan sokongan. Gunakan kata laluan unik dan tukarkannya jika anda menaipnya pada peranti yang anda tidak percayai.",
          ],
        },
        {
          id: "messages",
          heading: "Abaikan mesej penyelamatan",
          level: 2,
          paragraphs: [
            "Penipuan biasa mengatakan akaun anda dikunci dan menghantar pautan baharu atau akaun bank baharu. Tutupnya. Buka XE8 sendiri dari alamat yang sudah anda guna, kemudian baca sebarang notis dalam akaun.",
          ],
          list: [
            "Tiada kakitangan memerlukan kata laluan anda.",
            "Tiada deposit patut pergi ke akaun peribadi yang dinamakan dalam sembang.",
            "Tiada APK daripada orang yang tidak dikenali adalah kemas kini.",
          ],
        },
        {
          id: "devices",
          heading: "Telefon kongsi",
          level: 2,
          paragraphs: [
            "Log keluar apabila selesai pada telefon kongsi. Jangan simpan kata laluan dalam profil pelayar yang digunakan orang lain.",
          ],
        },
      ],
      zh: [
        {
          id: "password",
          heading: "密码只留给自己",
          level: 2,
          paragraphs: [
            "客服不会索要密码或一次性验证码。索要的人不是客服。请使用单独的密码；如果在不信任的设备上输入过，就更换它。",
          ],
        },
        {
          id: "messages",
          heading: "忽略所谓的紧急通知",
          level: 2,
          paragraphs: [
            "常见骗局会说你的账户被锁，并发来新链接或新的银行账号。关掉它。用你已经在用的地址自己打开 XE8，再阅读账户内的通知。",
          ],
          list: [
            "没有工作人员需要你的密码。",
            "存款不应该转到聊天里指名的私人账户。",
            "陌生人发来的 APK 不是更新。",
          ],
        },
        {
          id: "devices",
          heading: "共用手机",
          level: 2,
          paragraphs: [
            "在共用手机上用完后请退出。不要把密码保存在别人也使用的浏览器配置里。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "I shared my password. What now?",
          ms: "Saya telah berkongsi kata laluan. Apa sekarang?",
          zh: "我把密码告诉别人了。现在怎么办？",
        },
        answer: {
          en: "Change it from the official login if you still can. If you cannot, use signed-in support or the recovery step and say the password is no longer private.",
          ms: "Tukarkannya dari log masuk rasmi jika anda masih boleh. Jika tidak, gunakan sokongan atau langkah pemulihan dan beritahu bahawa kata laluan tidak lagi peribadi.",
          zh: "如果还能登录，就在官方入口修改密码。如果不能，使用已登录客服或找回步骤，并说明密码已经不再私密。",
        },
      },
    ],
  },
  {
    id: "play-responsibly",
    slug: "play-responsibly",
    category: "responsible-gaming",
    cover: "/images/vip.jpg",
    coverAlt: {
      en: "An empty lounge chair by a night window",
      ms: "Kerusi ruang santai kosong di tepi tingkap malam",
      zh: "夜窗边的空休闲椅",
    },
    publishedAt: "2026-08-28",
    updatedAt: "2026-10-04",
    author,
    title: {
      en: "Play with a limit you chose earlier",
      ms: "Bermain dengan had yang anda pilih lebih awal",
      zh: "用你事先选定的限额来玩",
    },
    excerpt: {
      en: "Practical limits, signs to stop, and where to get emotional support in Malaysia.",
      ms: "Had yang praktikal, tanda untuk berhenti, dan tempat mendapatkan sokongan emosi di Malaysia.",
      zh: "实际的限额、该停下来的信号，以及在马来西亚可以寻求情绪支持的地方。",
    },
    sections: {
      en: [
        {
          id: "limit",
          heading: "Decide the money and the time first",
          level: 2,
          paragraphs: [
            "Before you sign in, choose an amount you can lose and a time you will stop. Put that amount aside. Do not raise it because a session went badly, and do not play with rent, wages you need this week, or borrowed money.",
          ],
        },
        {
          id: "stop",
          heading: "Signs to close the session",
          level: 2,
          paragraphs: [
            "Stop if you are chasing a loss, hiding play, or feeling irritable when you are not playing. A promotion is not a reason to continue past the limit you set.",
          ],
          list: [
            "Use deposit or loss limits in the account if those controls are offered.",
            "Ask support about a cooling-off or closure option if you want one.",
            "Do not open a second account to get around a limit.",
          ],
        },
        {
          id: "help",
          heading: "Talk to someone",
          level: 2,
          paragraphs: [
            "Befrienders KL offers confidential emotional support 24 hours a day at +603-7627 2929. It is independent of XE8 and it is not a gambling-settlement service. If you are in immediate danger, contact local emergency services.",
          ],
        },
      ],
      ms: [
        {
          id: "limit",
          heading: "Tentukan wang dan masa dahulu",
          level: 2,
          paragraphs: [
            "Sebelum log masuk, pilih jumlah yang anda mampu hilang dan masa anda akan berhenti. Ketepikan jumlah itu. Jangan naikkan kerana sesi menjadi buruk, dan jangan bermain dengan sewa, gaji yang diperlukan minggu ini, atau wang pinjaman.",
          ],
        },
        {
          id: "stop",
          heading: "Tanda untuk menutup sesi",
          level: 2,
          paragraphs: [
            "Berhenti jika anda mengejar kerugian, menyembunyikan permainan, atau rasa marah apabila tidak bermain. Promosi bukan alasan untuk melepasi had yang anda tetapkan.",
          ],
          list: [
            "Gunakan had deposit atau kerugian dalam akaun jika kawalan itu ditawarkan.",
            "Tanya sokongan tentang pilihan bertenang atau penutupan jika anda mahukannya.",
            "Jangan buka akaun kedua untuk memintas had.",
          ],
        },
        {
          id: "help",
          heading: "Bercakap dengan seseorang",
          level: 2,
          paragraphs: [
            "Befrienders KL menawarkan sokongan emosi sulit 24 jam di +603-7627 2929. Ia bebas daripada XE8 dan ia bukan perkhidmatan penyelesaian perjudian. Jika anda dalam bahaya segera, hubungi perkhidmatan kecemasan tempatan.",
          ],
        },
      ],
      zh: [
        {
          id: "limit",
          heading: "先决定金额和时间",
          level: 2,
          paragraphs: [
            "登录前，先选定你能承受损失的金额和停下的时间。把这笔钱分开。不要因为这一局不顺就提高金额，也不要用房租、这周要用的工资或借来的钱去玩。",
          ],
        },
        {
          id: "stop",
          heading: "该结束的信号",
          level: 2,
          paragraphs: [
            "如果你在追回损失、隐瞒游戏，或不玩时感到烦躁，就停下来。优惠不是越过你自己限额的理由。",
          ],
          list: [
            "如果账户提供存款或损失限额，请使用。",
            "如果你想暂停或关闭，向客服询问冷静期或关闭选项。",
            "不要开第二个账户来绕过限额。",
          ],
        },
        {
          id: "help",
          heading: "找人谈谈",
          level: 2,
          paragraphs: [
            "Befrienders KL 提供 24 小时保密情绪支持，电话 +603-7627 2929。它独立于 XE8，也不是博彩结算服务。如果你处于即时危险，请联系当地紧急服务。",
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          en: "Can XE8 close my account if I ask?",
          ms: "Bolehkah XE8 menutup akaun saya jika saya minta?",
          zh: "如果我要求，XE8 可以关闭账户吗？",
        },
        answer: {
          en: "Ask through signed-in support and keep a record of the request. This website cannot close an account for you.",
          ms: "Tanya melalui sokongan yang sudah log masuk dan simpan rekod permohonan. Laman ini tidak boleh menutup akaun untuk anda.",
          zh: "请通过已登录客服提出，并保留申请记录。本网站不能代你关闭账户。",
        },
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function guidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category);
}
