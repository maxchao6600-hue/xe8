import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#09090b", color: "#f6f3ee", fontFamily: "Georgia, serif" }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "6rem 1.25rem" }}>
          <p style={{ letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4b483", fontFamily: "sans-serif", fontSize: 12 }}>
            404
          </p>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 400 }}>This page is not in the lobby</h1>
          <p style={{ color: "#a39e94", lineHeight: 1.6 }}>
            The link may be old. Continue in English, Malay or Chinese.
          </p>
          <p style={{ display: "flex", gap: 16, fontFamily: "sans-serif" }}>
            <Link href="/en" style={{ color: "#d4b483" }}>English</Link>
            <Link href="/ms" style={{ color: "#d4b483" }}>Bahasa Melayu</Link>
            <Link href="/zh" style={{ color: "#d4b483" }}>中文</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
