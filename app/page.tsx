import Link from "next/link";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#FAF8F5] text-[#2C2623] dark:bg-[#1C1816] dark:text-[#F3ECE6]">
      <div className="grain pointer-events-none absolute inset-0 opacity-70 dark:opacity-30" />
      <Header />

      <main className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-16">
        <section className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#2C2623]/70 dark:text-[#F3ECE6]/70">
            A considered reading life
          </p>
          <h1 className="mt-5 font-serif text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.03em] text-[#2C2623] sm:text-7xl dark:text-[#F3ECE6]">
            Stay with the story.
          </h1>
          <p className="mt-6 max-w-md font-serif text-lg leading-8 text-[#2C2623]/75 sm:text-xl dark:text-[#F3ECE6]/75">
            Wells House is a quiet home for books with something to say. Read
            slowly. Return often.
          </p>
          <Link
            href="/catalogue"
            className="mt-9 inline-flex items-center rounded-full bg-[#2C2623] px-6 py-3.5 text-sm tracking-wide text-[#FAF8F5] transition hover:bg-[#3a322e] dark:bg-[#F3ECE6] dark:text-[#1C1816] dark:hover:bg-white"
          >
            Explore the catalogue →
          </Link>
        </section>

        <section
          className="relative mx-auto flex min-h-[460px] w-full max-w-[440px] items-center justify-center pb-6 sm:min-h-[520px]"
          aria-label="Featured titles"
        >
          <div className="absolute h-64 w-64 rounded-full bg-[#e8d8c8]/70 blur-3xl dark:bg-[#3a2d26]/80 sm:h-80 sm:w-80" />

          <article className="absolute left-0 top-[4%] z-10 w-[56%] max-w-[250px] -rotate-[12deg] overflow-hidden rounded-[4px] bg-[#C45C3E] shadow-[12px_22px_40px_rgba(44,38,35,0.22)] sm:w-[250px]">
            <div className="absolute inset-y-0 left-0 w-[10px] bg-black/15" />
            <div className="flex aspect-[2/3] flex-col justify-between p-5 pl-7 text-[#FAF8F5]">
              <div>
                <h2 className="font-serif text-[1.85rem] leading-[1.05] tracking-tight">
                  The Tide
                </h2>
                <p className="mt-3 text-xs tracking-wide opacity-85">
                  Mara Venn
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                Novel
              </p>
            </div>
          </article>

          <article className="absolute bottom-[2%] right-0 z-20 w-[58%] max-w-[258px] rotate-[9deg] overflow-hidden rounded-[4px] bg-[#1A4548] shadow-[14px_24px_44px_rgba(44,38,35,0.28)] sm:w-[258px]">
            <div className="absolute inset-y-0 left-0 w-[10px] bg-black/20" />
            <div className="flex aspect-[2/3] flex-col justify-between p-5 pl-7 text-[#E8F0EE]">
              <div>
                <h2 className="font-serif text-[1.85rem] leading-[1.05] tracking-tight">
                  Afterlight
                </h2>
                <p className="mt-3 text-xs tracking-wide opacity-85">
                  Jonas Vale
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                Essays
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
