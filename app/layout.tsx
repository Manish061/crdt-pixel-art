import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col max-h-20 gap-5 bg-sky-950">
        <header className="bg-sky-700 px-10 py-5 flex gap-10 text-slate-200 text-2xl">
          <section>
            <Link
              className="p-1 focus:outline-1 focus:outline-dashed focus:outline-slate-200"
              href="/"
            >
              CRDT
            </Link>
          </section>
          <aside>
            <ul className="flex gap-10">
              <li>
                <Link
                  className="p-1 focus:outline-1 focus:outline-dashed focus:outline-slate-200"
                  href="/pixel-art"
                >
                  Collaborative Pixel Art
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  title="Coming up soon"
                  className="p-1 focus:outline-1 focus:outline-dashed focus:outline-slate-200"
                >
                  Collaborative Editor
                </Link>
              </li>
            </ul>
          </aside>
        </header>
        <main className="px-10 text-slate-200 flex min-h-screen min-w-full flex-col gap-10">
          {children}
        </main>
      </body>
    </html>
  );
}
