import type { PaymentMethod } from "@/content/types";

export const paymentMethods: PaymentMethod[] = [
  {
    id: "fpx",
    name: "FPX",
    deposit: true,
    withdrawal: false,
    summary: {
      en: "Malaysian online banking. You approve the payment in your own bank app or site. Use it only if FPX is listed on the cashier.",
      ms: "Perbankan dalam talian Malaysia. Anda meluluskan bayaran dalam aplikasi atau laman bank anda. Gunakannya hanya jika FPX disenaraikan di kaunter.",
      zh: "马来西亚网上银行。你在自己的银行应用或网页里批准付款。仅当收银台列出 FPX 时使用。",
    },
  },
  {
    id: "duitnow",
    name: "DuitNow",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "A transfer identified by a DuitNow ID or QR. Copy the reference exactly. Withdrawal to DuitNow is available only when the cashier offers it.",
      ms: "Pindahan yang dikenal pasti dengan ID DuitNow atau QR. Salin rujukan dengan tepat. Pengeluaran ke DuitNow hanya tersedia apabila kaunter menawarkannya.",
      zh: "通过 DuitNow ID 或二维码识别的转账。参考号必须完全一致。只有收银台提供时才能提款到 DuitNow。",
    },
  },
  {
    id: "tng",
    name: "Touch 'n Go eWallet",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "An e-wallet many Malaysian players already use. The cashier must show Touch 'n Go before you send funds. Name matching still applies.",
      ms: "E-dompet yang sudah digunakan ramai pemain di Malaysia. Kaunter mesti memaparkan Touch 'n Go sebelum anda menghantar dana. Padanan nama tetap terpakai.",
      zh: "许多马来西亚玩家已经在用的电子钱包。收银台显示 Touch 'n Go 后才能转账。账户姓名仍须一致。",
    },
  },
  {
    id: "grabpay",
    name: "GrabPay",
    deposit: true,
    withdrawal: false,
    summary: {
      en: "An e-wallet checkout. Available for deposit only when GrabPay appears as a cashier option. This page does not set a wallet limit.",
      ms: "Pembayaran e-dompet. Tersedia untuk deposit hanya apabila GrabPay muncul sebagai pilihan kaunter. Halaman ini tidak menetapkan had dompet.",
      zh: "电子钱包结账。只有收银台出现 GrabPay 时才可用于存款。本页不设定钱包限额。",
    },
  },
  {
    id: "bank-transfer",
    name: "Bank transfer",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "A transfer to the account details shown at that moment. Details can change between visits. Do not reuse an old account number from a screenshot or a chat.",
      ms: "Pindahan ke butiran akaun yang ditunjukkan pada ketika itu. Butiran boleh berubah antara lawatan. Jangan guna semula nombor akaun lama daripada tangkapan skrin atau sembang.",
      zh: "转到当时显示的账户资料。资料可能在不同次访问之间改变。不要复用截图或聊天里的旧账号。",
    },
  },
];
