import type { PaymentMethod } from "@/content/types";

export const paymentMethods: PaymentMethod[] = [
  {
    id: "tng",
    name: "Touch 'n Go eWallet",
    logo: "/assets/payments/tng.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "Listed on xe8 for deposits and withdrawals. Send funds only after the cashier shows Touch 'n Go, and use an account in the same name.",
      ms: "Disenaraikan di xe8 untuk deposit dan pengeluaran. Hantar dana hanya selepas kaunter memaparkan Touch 'n Go, dan guna akaun dengan nama yang sama.",
      zh: "xe8 的存款和提款都列出 Touch 'n Go。收银台显示该方式后再转账，并使用同名账户。",
    },
  },
  {
    id: "maybank",
    name: "Maybank2u",
    logo: "/assets/payments/maybank.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "Maybank2u is one of the methods xe8 names for deposits and withdrawals. Approve the payment in your own Maybank session.",
      ms: "Maybank2u ialah antara kaedah yang xe8 namakan untuk deposit dan pengeluaran. Luluskan bayaran dalam sesi Maybank anda sendiri.",
      zh: "Maybank2u 是 xe8 写明的存款和提款方式之一。请在你自己的 Maybank 会话里批准付款。",
    },
  },
  {
    id: "boost",
    name: "Boost",
    logo: "/assets/payments/boost.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "Boost is listed with the other xe8 e-wallets for deposits and withdrawals. Use it when the cashier shows Boost.",
      ms: "Boost disenaraikan bersama e-dompet xe8 yang lain untuk deposit dan pengeluaran. Gunakannya apabila kaunter memaparkan Boost.",
      zh: "Boost 与其他 xe8 电子钱包一起用于存款和提款。收银台显示 Boost 时再使用。",
    },
  },
  {
    id: "grabpay",
    name: "GrabPay",
    logo: "/assets/payments/grabpay.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "GrabPay is listed on xe8 for deposits and withdrawals. This page does not set a wallet limit.",
      ms: "GrabPay disenaraikan di xe8 untuk deposit dan pengeluaran. Halaman ini tidak menetapkan had dompet.",
      zh: "GrabPay 在 xe8 上用于存款和提款。本页不设定钱包限额。",
    },
  },
  {
    id: "duitnow",
    name: "DuitNow",
    logo: "/assets/payments/duitnow.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "DuitNow is listed for xe8 deposits and withdrawals. Copy the reference exactly as the cashier shows it.",
      ms: "DuitNow disenaraikan untuk deposit dan pengeluaran xe8. Salin rujukan tepat seperti yang ditunjukkan kaunter.",
      zh: "DuitNow 用于 xe8 的存款和提款。参考号必须与收银台显示的完全一致。",
    },
  },
  {
    id: "usdt",
    name: "USDT",
    logo: "/assets/payments/usdt.webp",
    deposit: true,
    withdrawal: true,
    summary: {
      en: "USDT appears on the xe8 payment board. Use the network and address shown in the cashier for that visit.",
      ms: "USDT muncul pada papan pembayaran xe8. Guna rangkaian dan alamat yang ditunjukkan kaunter untuk lawatan itu.",
      zh: "USDT 出现在 xe8 的支付方式中。请使用当次收银台显示的网络和地址。",
    },
  },
];
