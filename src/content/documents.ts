import type { L10n } from "@/lib/utils";

export type DocumentSection = {
  heading: L10n;
  paragraphs: L10n[];
  list?: L10n[];
};

export type DocumentPage = {
  path: string;
  image: string;
  title: L10n;
  description: L10n;
  lede: L10n;
  imageAlt: L10n;
  sections: DocumentSection[];
};

const about: DocumentPage = {
  path: "/about",
  image: "/images/why.jpg",
  title: {
    en: "About XE8 Malaysia",
    ms: "Tentang XE8 Malaysia",
    zh: "关于 XE8 Malaysia",
  },
  description: {
    en: "What XE8 Malaysia is for: slots, live casino, sports, fishing, 4D and mobile access, explained without invented company history.",
    ms: "Untuk apa XE8 Malaysia: slot, kasino langsung, sukan, memancing, 4D dan akses mudah alih, tanpa sejarah syarikat yang direka.",
    zh: "XE8 Malaysia 用来做什么：老虎机、真人娱乐场、体育、捕鱼、4D 和手机访问。这里不编造公司历史。",
  },
  lede: {
    en: "XE8 is an online gaming platform for players in Malaysia. This site explains the lobby. It is not a software company, a jobs board or a financial service.",
    ms: "XE8 ialah platform permainan dalam talian untuk pemain di Malaysia. Laman ini menerangkan lobi. Ia bukan syarikat perisian, papan kerja atau perkhidmatan kewangan.",
    zh: "XE8 是面向马来西亚玩家的在线游戏平台。本站说明大厅。它不是软件公司、招聘站或金融服务。",
  },
  imageAlt: {
    en: "A dark corridor opening onto a warm room",
    ms: "Koridor gelap yang membuka ke bilik hangat",
    zh: "通向暖色房间的深色走廊",
  },
  sections: [
    {
      heading: { en: "The gaming rooms", ms: "Bilik permainan", zh: "游戏房间" },
      paragraphs: [
        {
          en: "The catalog is grouped into slots, live casino, sports, fishing, 4D, lottery and arcade. A game page names the studio and points you to the in-game rules. It does not replace them.",
          ms: "Katalog dikumpulkan kepada slot, kasino langsung, sukan, memancing, 4D, loteri dan arked. Halaman permainan menamakan studio dan menunjuk anda ke peraturan dalam permainan. Ia tidak menggantikannya.",
          zh: "目录分为老虎机、真人娱乐场、体育、捕鱼、4D、彩票和街机。游戏页写明工作室，并指向游戏内规则，而不是取代它们。",
        },
      ],
    },
    {
      heading: { en: "Mobile and support", ms: "Mudah alih dan sokongan", zh: "手机与支持" },
      paragraphs: [
        {
          en: "You can use a mobile browser. Support for an account question sits inside the signed-in help panel. This website does not publish a phone number or an email address that has not been issued for that purpose.",
          ms: "Anda boleh menggunakan pelayar mudah alih. Sokongan untuk soalan akaun ada dalam panel bantuan selepas log masuk. Laman ini tidak menerbitkan nombor telefon atau e-mel yang tidak dikeluarkan untuk tujuan itu.",
          zh: "你可以使用手机浏览器。账户问题的支持在登录后的帮助面板里。本网站不公布未经为此目的发布的电话或邮箱。",
        },
      ],
    },
    {
      heading: { en: "Responsible play", ms: "Permainan bertanggungjawab", zh: "负责任游戏" },
      paragraphs: [
        {
          en: "Play only if it is legal for you, and only with money set aside for entertainment. The responsible gaming page explains limits and where to find independent emotional support.",
          ms: "Bermain hanya jika ia sah untuk anda, dan hanya dengan wang yang diketepikan untuk hiburan. Halaman permainan bertanggungjawab menerangkan had dan tempat mendapatkan sokongan emosi yang bebas.",
          zh: "仅在对你合法时玩，并且只用预留作娱乐的钱。负责任游戏页面说明限额，以及哪里可以获得独立的情绪支持。",
        },
      ],
    },
  ],
};

const contact: DocumentPage = {
  path: "/contact",
  image: "/images/guide.jpg",
  title: { en: "Contact XE8 support", ms: "Hubungi sokongan XE8", zh: "联系 XE8 客服" },
  description: {
    en: "How to reach XE8 support from inside your account, and which questions this website can already answer.",
    ms: "Cara menghubungi sokongan XE8 dari dalam akaun, dan soalan yang sudah boleh dijawab laman ini.",
    zh: "如何从账户内联系 XE8 客服，以及本网站已经能回答哪些问题。",
  },
  lede: {
    en: "Account support is inside the signed-in help panel. This page does not invent a hotline, an email address or opening hours.",
    ms: "Sokongan akaun ada dalam panel bantuan selepas log masuk. Halaman ini tidak mereka talian, alamat e-mel atau waktu operasi.",
    zh: "账户支持在登录后的帮助面板里。本页不编造热线、邮箱或营业时间。",
  },
  imageAlt: {
    en: "A notebook on a dark desk",
    ms: "Buku nota di atas meja gelap",
    zh: "深色书桌上的笔记本",
  },
  sections: [
    {
      heading: { en: "Use the account panel", ms: "Gunakan panel akaun", zh: "使用账户面板" },
      paragraphs: [
        {
          en: "Sign in and open support from the lobby. Have the transaction reference ready if the question is about a deposit or a withdrawal. Hours, when they are shown, are on that panel because they can change.",
          ms: "Log masuk dan buka sokongan dari lobi. Sediakan rujukan transaksi jika soalan tentang deposit atau pengeluaran. Waktu, apabila dipaparkan, ada pada panel itu kerana ia boleh berubah.",
          zh: "登录后从大厅打开客服。如果问题关于存款或提款，请准备交易参考号。营业时间如果显示，会在那个面板上，因为它可能改变。",
        },
      ],
      list: [
        {
          en: "Deposit and withdrawal status: transaction history first, then support.",
          ms: "Status deposit dan pengeluaran: sejarah transaksi dahulu, kemudian sokongan.",
          zh: "存款和提款状态：先看交易记录，再找客服。",
        },
        {
          en: "Promotions: the offer card, then support if a line is missing.",
          ms: "Promosi: kad tawaran, kemudian sokongan jika ada baris yang tiada.",
          zh: "优惠：先看优惠卡片，如果缺了一行再问客服。",
        },
        {
          en: "Guides on this site cover registration, payments, mobile access and security.",
          ms: "Panduan di laman ini merangkumi pendaftaran, pembayaran, akses mudah alih dan keselamatan.",
          zh: "本站指南涵盖注册、支付、手机访问和安全。",
        },
      ],
    },
    {
      heading: { en: "This website cannot see your account", ms: "Laman ini tidak dapat melihat akaun anda", zh: "本网站看不到你的账户" },
      paragraphs: [
        {
          en: "A message sent only to this informational site cannot move a balance or reset a password. Use the official login screen for recovery.",
          ms: "Mesej yang dihantar hanya ke laman maklumat ini tidak boleh menggerakkan baki atau menetapkan semula kata laluan. Gunakan skrin log masuk rasmi untuk pemulihan.",
          zh: "只发给这个说明网站的消息不能改变余额或重置密码。请使用官方登录页找回账户。",
        },
      ],
    },
  ],
};

const terms: DocumentPage = {
  path: "/terms",
  image: "/images/guide-security.jpg",
  title: { en: "Terms of use", ms: "Terma penggunaan", zh: "使用条款" },
  description: {
    en: "The terms for using the XE8 Malaysia information site, including age, local law and the limit of what this website decides.",
    ms: "Terma penggunaan laman maklumat XE8 Malaysia, termasuk umur, undang-undang tempatan dan had apa yang laman ini putuskan.",
    zh: "XE8 Malaysia 信息网站的使用条款，包括年龄、当地法律，以及本网站不能决定的范围。",
  },
  lede: {
    en: "These terms cover this website. The lobby, cashier and games have their own rules, and those rules win if they differ.",
    ms: "Terma ini meliputi laman web ini. Lobi, kaunter dan permainan mempunyai peraturan sendiri, dan peraturan itu menang jika berbeza.",
    zh: "这些条款适用于本网站。大厅、收银台和游戏有各自的规则；如果不同，以那些规则为准。",
  },
  imageAlt: {
    en: "A brass lock on a dark desk",
    ms: "Gembok loyang di atas meja gelap",
    zh: "深色书桌上的黄铜锁",
  },
  sections: [
    {
      heading: { en: "Who may use the site", ms: "Siapa yang boleh menggunakan laman", zh: "谁可以使用本站" },
      paragraphs: [
        {
          en: "This website is for adults. Do not use it if online gaming is not permitted for you. Nothing here is an invitation to break local law.",
          ms: "Laman ini untuk orang dewasa. Jangan gunakannya jika permainan dalam talian tidak dibenarkan untuk anda. Tiada apa di sini jemputan untuk melanggar undang-undang tempatan.",
          zh: "本网站面向成年人。如果在线游戏对你不被允许，请不要使用。这里的内容不是邀请你违反当地法律。",
        },
      ],
    },
    {
      heading: { en: "Information, not a bet", ms: "Maklumat, bukan pertaruhan", zh: "信息，不是注单" },
      paragraphs: [
        {
          en: "Game descriptions, promotion notes and payment guides are explanations. They are not a stake, a quote or a promise of a processing time. Confirm the live screen before you act.",
          ms: "Penerangan permainan, nota promosi dan panduan pembayaran ialah penjelasan. Ia bukan taruhan, sebut harga atau janji masa pemprosesan. Sahkan skrin semasa sebelum bertindak.",
          zh: "游戏说明、优惠笔记和支付指南是解释。它们不是注单、报价或处理时间承诺。行动前请确认实时画面。",
        },
      ],
    },
    {
      heading: { en: "Accounts", ms: "Akaun", zh: "账户" },
      paragraphs: [
        {
          en: "One person should keep one account. You are responsible for the password and for payments made from your own name. This website cannot close, reopen or pay an account.",
          ms: "Seorang pemain patut menyimpan satu akaun. Anda bertanggungjawab atas kata laluan dan pembayaran dari nama anda sendiri. Laman ini tidak boleh menutup, membuka semula atau membayar akaun.",
          zh: "一个人应只保留一个账户。你负责密码，以及以你本人姓名进行的付款。本网站不能关闭、重开或支付一个账户。",
        },
      ],
    },
  ],
};

const privacy: DocumentPage = {
  path: "/privacy",
  image: "/images/guide-security.jpg",
  title: { en: "Privacy", ms: "Privasi", zh: "隐私" },
  description: {
    en: "What the XE8 Malaysia website stores. Account data stays in the gaming platform, not in this informational site.",
    ms: "Apa yang disimpan laman XE8 Malaysia. Data akaun kekal dalam platform permainan, bukan di laman maklumat ini.",
    zh: "XE8 Malaysia 网站保存什么。账户数据留在游戏平台，不在这个说明网站上。",
  },
  lede: {
    en: "This informational site does not ask you to create an account and does not take a deposit. The signed-in platform is a separate place.",
    ms: "Laman maklumat ini tidak meminta anda mencipta akaun dan tidak menerima deposit. Platform yang memerlukan log masuk ialah tempat yang berasingan.",
    zh: "这个说明网站不要求你在这里开户，也不接收存款。需要登录的平台是另一个地方。",
  },
  imageAlt: {
    en: "A lock beside a closed notebook",
    ms: "Gembok di sebelah buku nota tertutup",
    zh: "合上的笔记本旁的锁",
  },
  sections: [
    {
      heading: { en: "What this site handles", ms: "Apa yang dikendalikan laman ini", zh: "本站处理什么" },
      paragraphs: [
        {
          en: "Pages are static guides. There is no registration form on this site that stores a password or a payment card. If a future official entry link is configured, that destination has its own privacy notice.",
          ms: "Halaman ialah panduan statik. Tiada borang pendaftaran di laman ini yang menyimpan kata laluan atau kad pembayaran. Jika pautan pintu rasmi dikonfigurasi kemudian, destinasi itu mempunyai notis privasinya sendiri.",
          zh: "页面是静态指南。本站没有会保存密码或支付卡的注册表。如果以后配置了官方入口链接，那个目的地有自己的隐私说明。",
        },
      ],
    },
    {
      heading: { en: "Server logs", ms: "Log pelayan", zh: "服务器日志" },
      paragraphs: [
        {
          en: "A normal web host may keep technical logs such as IP address and the page requested, for security and operations. This site does not sell that information, and it does not add an advertising tracker.",
          ms: "Hos web biasa mungkin menyimpan log teknikal seperti alamat IP dan halaman yang diminta, untuk keselamatan dan operasi. Laman ini tidak menjual maklumat itu, dan ia tidak menambah penjejak iklan.",
          zh: "普通网站主机可能为安全和运维保留技术日志，例如 IP 地址和所请求的页面。本站不出售这些信息，也不加入广告追踪器。",
        },
      ],
    },
    {
      heading: { en: "Your gaming account", ms: "Akaun permainan anda", zh: "你的游戏账户" },
      paragraphs: [
        {
          en: "Profile, payment and play history belong to the signed-in platform. Ask support there if you want to review or close that account. This website cannot export it.",
          ms: "Profil, pembayaran dan sejarah permainan milik platform yang memerlukan log masuk. Tanya sokongan di sana jika anda mahu menyemak atau menutup akaun itu. Laman ini tidak boleh mengeksportnya.",
          zh: "资料、支付和游戏记录属于需要登录的平台。如果你想查看或关闭该账户，请在那里联系客服。本网站无法导出。",
        },
      ],
    },
  ],
};

const responsible: DocumentPage = {
  path: "/responsible-gaming",
  image: "/images/vip.jpg",
  title: {
    en: "Responsible gaming",
    ms: "Permainan bertanggungjawab",
    zh: "负责任游戏",
  },
  description: {
    en: "Practical limits, signs to stop, and independent emotional support for players using XE8.",
    ms: "Had praktikal, tanda untuk berhenti, dan sokongan emosi bebas untuk pemain yang menggunakan XE8.",
    zh: "实际限额、该停下来的信号，以及给 XE8 玩家的独立情绪支持。",
  },
  lede: {
    en: "Gaming should stay inside money and time you chose before you signed in. If it does not, stop and talk to someone.",
    ms: "Permainan patut kekal dalam wang dan masa yang anda pilih sebelum log masuk. Jika tidak, berhenti dan bercakap dengan seseorang.",
    zh: "游戏应留在你登录前就选定的金额和时间里。如果不是这样，请停下来并找人谈谈。",
  },
  imageAlt: {
    en: "An empty chair in a quiet night lounge",
    ms: "Kerusi kosong di ruang santai malam yang sunyi",
    zh: "安静夜色休息室里的空椅子",
  },
  sections: [
    {
      heading: { en: "Set the limit first", ms: "Tetapkan had dahulu", zh: "先设定限额" },
      paragraphs: [
        {
          en: "Decide the amount and the clock before the session. Do not use rent, money you need this week, or borrowed funds. Do not raise the amount to chase a loss.",
          ms: "Tentukan jumlah dan jam sebelum sesi. Jangan guna sewa, wang yang diperlukan minggu ini, atau dana pinjaman. Jangan naikkan jumlah untuk mengejar kerugian.",
          zh: "开局前先决定金额和时间。不要用房租、这周要用的钱或借款。不要为了追回损失而提高金额。",
        },
      ],
      list: [
        {
          en: "Use deposit or loss limits in the account if they are offered.",
          ms: "Gunakan had deposit atau kerugian dalam akaun jika ditawarkan.",
          zh: "如果账户提供存款或损失限额，请使用。",
        },
        {
          en: "Ask signed-in support about a cooling-off period or closure.",
          ms: "Tanya sokongan tentang tempoh bertenang atau penutupan.",
          zh: "向已登录客服询问冷静期或关闭账户。",
        },
        {
          en: "Do not open a second account to avoid a limit.",
          ms: "Jangan buka akaun kedua untuk mengelak had.",
          zh: "不要开第二个账户来回避限额。",
        },
      ],
    },
    {
      heading: { en: "Independent help", ms: "Bantuan bebas", zh: "独立帮助" },
      paragraphs: [
        {
          en: "Befrienders KL offers confidential emotional support 24 hours a day at +603-7627 2929. It is not run by XE8 and it does not settle bets. If you are in immediate danger, contact local emergency services.",
          ms: "Befrienders KL menawarkan sokongan emosi sulit 24 jam di +603-7627 2929. Ia tidak dikendalikan oleh XE8 dan ia tidak menyelesaikan pertaruhan. Jika anda dalam bahaya segera, hubungi perkhidmatan kecemasan tempatan.",
          zh: "Befrienders KL 提供 24 小时保密情绪支持，电话 +603-7627 2929。它不由 XE8 运营，也不结算投注。如果你处于即时危险，请联系当地紧急服务。",
        },
      ],
    },
  ],
};

export const documents = { about, contact, terms, privacy, responsible };
