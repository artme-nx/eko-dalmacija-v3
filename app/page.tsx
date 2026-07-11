import { Crate } from "@/components/ui/crate";

const IMG = {
  hero: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
  crateVeg: "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29",
  coast: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a",
  garden: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  seafood: "https://images.unsplash.com/photo-1544025162-d76694265947",
  oliveOil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
  grill: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
  tomatoes: "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
  rivaLights: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
  market: "https://images.unsplash.com/photo-1610348725531-843dff563e2c",
};

function img(url: string, w: number, q = 78) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

// Deterministic hand-stacked tilt/offset per index — never random per
// render, so static export + hydration always agree pixel-for-pixel.
const TILT = ["-1.6deg", "1.1deg", "-0.8deg", "1.7deg", "-1.2deg", "0.9deg", "-1.9deg", "1.3deg"];
const LIFT = [0, 22, 10, 30, 6, 24, 14, 34];

const MENU = [
  {
    tag: "IZ VRTA",
    title: "Za početak",
    items: [
      { name: "Salata s povrćem sezone", desc: "Ono što je toga dana stiglo iz vrta — rajčica, blitva, tikvice, domaće maslinovo ulje." },
      { name: "Pršut, sir i masline", desc: "Domaći pršut i ovčji sir iz zaleđa, uz masline i topli kruh iz peći." },
    ],
  },
  {
    tag: "S MORA",
    title: "Iz mora",
    items: [
      { name: "Škampi na buzaru", desc: "U umaku od rajčice, bijelog vina i češnjaka, uz kruh za umakanje." },
      { name: "Riba dana s gradela", desc: "Ulov dana, jednostavno pripremljen — maslinovo ulje, limun, blitva." },
      { name: "Crni rižot", desc: "Rižot bojan sipinim crnilom, s plodovima mora." },
    ],
  },
  {
    tag: "S GRADELA",
    title: "Ispod peke i s gradela",
    items: [
      { name: "Hobotnica ispod peke", desc: "Sočna hobotnica s krumpirom, maslinovim uljem i ružmarinom." },
      { name: "Domaći odrezak", desc: "Meso iz okolice, sezonsko povrće, umak po izboru." },
    ],
  },
  {
    tag: "ZA KRAJ",
    title: "Slatki kraj",
    items: [
      { name: "Rožata", desc: "Dalmatinski klasik — karamel krema po starinskom receptu." },
      { name: "Voćna plata sezone", desc: "Ono što je toga tjedna najslađe dozrelo." },
    ],
  },
];

const ATMOSFERA = [
  { img: IMG.rivaLights, tag: "RIVA", title: "Pogled na more", desc: "Stol uz samu rivu, u srcu Vodica — more na dohvat ruke od prvog do zadnjeg zalogaja." },
  { img: IMG.coast, tag: "CENTAR", title: "Centar Vodica", desc: "Nekoliko koraka od šetnice, lako dostupno, uvijek u pogonu grada." },
  { img: IMG.garden, tag: "GLAZBA", title: "Živa glazba svaki dan", desc: "Svake večeri netko svira — atmosfera koja traje dugo u noć." },
];

const DOJMOVI = [
  "Gosti ističu ljubazno i profesionalno osoblje te brzu uslugu.",
  "Hvale kvalitetu hrane i poštene, pristupačne cijene.",
  "Poseban dojam ostavlja pogled na more i večernja atmosfera uz živu glazbu.",
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* HERO — signboard crate propped up front-of-stall, smaller crates
          stacked around it like produce boxes on display. */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <Crate
              dark
              tag="KONOBA · VODICE"
              rotate="-0.8deg"
              className="relative z-20 flex-1 px-7 py-10 md:px-12 md:py-14"
            >
              <span className="text-label block mb-5" style={{ color: "var(--wood-light)" }}>
                Riva · Centar Vodica
              </span>
              <h1
                className="font-display"
                style={{
                  fontSize: "var(--hero-title-size)",
                  lineHeight: "var(--hero-title-leading)",
                  color: "var(--background)",
                }}
              >
                Iz vrta i s mora, <em className="italic" style={{ color: "var(--paprika)" }}>ravno na tanjur.</em>
              </h1>
              <p className="mt-6 max-w-[46ch] text-[1.02rem]" style={{ color: "var(--wood-light)" }}>
                Konoba Eko Dalmacija stoji uz samu rivu Vodica — domaća dalmatinska
                kuhinja od pažljivo birane namirnice, uz pogled na more i živu
                glazbu koja svira svaku večer.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#jelovnik"
                  className="rounded-sm px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.14em] font-medium transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--paprika)", color: "var(--background)" }}
                >
                  Pogledaj jelovnik
                </a>
                <a
                  href="#kontakt"
                  className="border-b-2 pb-1 text-[0.92rem] transition-colors hover:text-[var(--paprika)]"
                  style={{ borderColor: "var(--wood)", color: "var(--background)" }}
                >
                  Kako do nas →
                </a>
              </div>
            </Crate>

            <div className="mt-8 flex shrink-0 flex-row gap-5 md:mt-0 md:w-64 md:flex-col">
              <Crate
                tag="EKO"
                rotate="2.1deg"
                offsetY={12}
                className="relative z-10 flex-1 overflow-hidden p-0"
              >
                <img
                  src={img(IMG.crateVeg, 480)}
                  alt="Sanduci sa svježim domaćim povrćem"
                  className="h-36 w-full object-cover md:h-44"
                  loading="eager"
                />
              </Crate>
              <Crate
                tag="ULOV DANA"
                rotate="-1.6deg"
                offsetY={26}
                className="relative z-10 hidden flex-1 overflow-hidden p-0 md:block"
              >
                <img
                  src={img(IMG.seafood, 480)}
                  alt="Plodovi mora pripremljeni na tanjuru"
                  className="h-36 w-full object-cover md:h-44"
                  loading="lazy"
                />
              </Crate>
            </div>
          </div>
        </div>
      </section>

      {/* THREE SMALL FACT CRATES — like tags nailed to the front of the
          stall. No fabricated numbers — only confirmed facts. */}
      <section className="pb-4">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Pogled na more", "Centar Vodica", "Glazba uživo svaki dan"].map((label, i) => (
              <Crate
                key={label}
                rotate={TILT[i]}
                offsetY={LIFT[i] / 2}
                className="px-6 py-4 text-center"
              >
                <span className="font-display text-lg md:text-xl" style={{ color: "var(--foreground)" }}>
                  {label}
                </span>
              </Crate>
            ))}
          </div>
        </div>
      </section>

      {/* PRIČA — the eco/organic philosophy, told plainly */}
      <section id="prica" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <Crate
              tag="PRIČA"
              rotate="-1.1deg"
              className="relative z-10 overflow-hidden p-0"
            >
              <img
                src={img(IMG.tomatoes, 800)}
                alt="Domaće rajčice i povrće u drvenom sanduku"
                className="h-72 w-full object-cover md:h-[26rem]"
                loading="lazy"
              />
            </Crate>
            <Crate
              dark
              rotate="0.7deg"
              offsetY={20}
              className="relative z-20 px-7 py-9 md:px-10 md:py-12"
            >
              <span className="text-label block mb-5" style={{ color: "var(--wood-light)" }}>
                Ime kao obećanje
              </span>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.7rem)", color: "var(--background)" }}
              >
                Kuhamo onako kako <em className="italic" style={{ color: "var(--paprika)" }}>zemlja i more</em> toga dana daju.
              </h2>
              <p className="mb-4 max-w-[48ch]" style={{ color: "var(--wood-light)" }}>
                Naziv Eko Dalmacija nosimo kao smjer, ne kao natpis na zidu:
                birati namirnice pažljivo, kuhati polako i posluživati ono što
                raste u našoj zemlji i more ponudi toga jutra.
              </p>
              <p className="max-w-[48ch]" style={{ color: "var(--wood-light)" }}>
                Jelovnik se mijenja sa sezonom, a ne obrnuto — jer dalmatinska
                kuhinja je oduvijek bila kuhinja onoga što je pri ruci.
              </p>
            </Crate>
          </div>
        </div>
      </section>

      {/* JELOVNIK — market-table cluster of crates, deliberately uneven */}
      <section id="jelovnik" className="py-24 md:py-32" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--paprika)" }}>
              Jelovnik
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--foreground)" }}>
              Ponuda sa <em className="italic" style={{ color: "var(--paprika)" }}>stola za stolom</em>
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
              Ilustrativan izbor jela u duhu domaće, eko-orijentirane dalmatinske
              kuhinje — točna ponuda ovisi o sezoni i ulovu dana.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {MENU.map((group, i) => (
              <Crate
                key={group.title}
                tag={group.tag}
                rotate={TILT[i]}
                offsetY={LIFT[i]}
                className="relative px-7 py-9 md:px-9"
              >
                <h3 className="font-display text-2xl mb-5" style={{ color: "var(--foreground)" }}>
                  {group.title}
                </h3>
                <div className="flex flex-col">
                  {group.items.map((d) => (
                    <div key={d.name} className="border-b py-3.5 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                      <div className="font-display text-lg" style={{ color: "var(--foreground)" }}>
                        {d.name}
                      </div>
                      <div className="mt-1 text-[0.9rem]" style={{ color: "var(--muted-foreground)" }}>
                        {d.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </Crate>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSFERA — photo crates, stacked like boxes leaned along a wall */}
      <section id="atmosfera" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--paprika)" }}>
              Atmosfera
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--foreground)" }}>
              Riva, more i <em className="italic" style={{ color: "var(--paprika)" }}>glazba do kasno</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ATMOSFERA.map((a, i) => (
              <Crate
                key={a.title}
                tag={a.tag}
                rotate={TILT[i + 3]}
                offsetY={LIFT[i + 3]}
                className="relative overflow-hidden p-0 pb-6"
              >
                <img src={img(a.img, 700)} alt={a.title} className="h-56 w-full object-cover" loading="lazy" />
                <div className="px-6 pt-5">
                  <h3 className="font-display text-xl mb-2" style={{ color: "var(--foreground)" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {a.desc}
                  </p>
                </div>
              </Crate>
            ))}
          </div>
        </div>
      </section>

      {/* DOJMOVI — paraphrased aggregate visitor impressions, no invented
          named quotes or fabricated star ratings */}
      <section className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--paprika)" }}>
              Prema dojmovima posjetitelja
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", color: "var(--foreground)" }}>
              Što kažu <em className="italic" style={{ color: "var(--paprika)" }}>gosti</em>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:items-stretch">
            {DOJMOVI.map((d, i) => (
              <Crate
                key={d}
                rotate={TILT[i]}
                className="max-w-sm px-7 py-8 text-center md:flex-1"
              >
                <p className="font-display text-lg leading-snug" style={{ color: "var(--foreground)" }}>
                  {d}
                </p>
              </Crate>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Crate dark rotate="-0.4deg" className="relative overflow-hidden p-0 md:grid md:grid-cols-2">
            <div className="p-8 md:p-14">
              <span className="text-label block mb-5" style={{ color: "var(--wood-light)" }}>
                Posjetite nas
              </span>
              <h2 className="font-display mb-8" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", color: "var(--background)" }}>
                Tu smo, uz <em className="italic" style={{ color: "var(--paprika)" }}>rivu</em>
              </h2>

              <div className="mb-6">
                <div className="text-label mb-2" style={{ color: "var(--paprika)" }}>Lokacija</div>
                <p style={{ color: "var(--wood-light)" }}>Riva u centru Vodica, uz samo more.</p>
              </div>

              <div className="mb-6">
                <div className="text-label mb-2" style={{ color: "var(--paprika)" }}>Radno vrijeme</div>
                <p style={{ color: "var(--wood-light)" }}>Otvoreno svaki dan, uz živu glazbu u večernjim satima.</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Konoba+Eko+Dalmacija+Vodice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.14em] font-medium"
                style={{ background: "var(--paprika)", color: "var(--background)" }}
              >
                Pronađi nas na karti
              </a>
            </div>
            <div className="min-h-[280px] md:min-h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Konoba+Eko+Dalmacija+Vodice&output=embed"
                loading="lazy"
                title="Konoba Eko Dalmacija — Vodice"
                className="h-full w-full min-h-[280px] border-0 md:min-h-[420px]"
              />
            </div>
          </Crate>
        </div>
      </section>

      {/* FOOTER — low crate-plank shelf */}
      <footer
        className="pt-16 pb-8"
        style={{ backgroundColor: "var(--wood-dark)", backgroundImage: "var(--crate-slat-gradient)" }}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--background)" }}>
                Eko <em className="italic" style={{ color: "var(--paprika)" }}>Dalmacija</em>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--wood-light)" }}>
                Konoba na rivi u Vodicama. Domaća dalmatinska kuhinja, pogled
                na more i živa glazba svaku večer.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--paprika)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--wood-light)" }}>
                <a href="#prica" className="hover:text-[var(--paprika)]">Priča</a>
                <a href="#jelovnik" className="hover:text-[var(--paprika)]">Jelovnik</a>
                <a href="#atmosfera" className="hover:text-[var(--paprika)]">Atmosfera</a>
                <a href="#kontakt" className="hover:text-[var(--paprika)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--paprika)" }}>Lokacija</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--wood-light)" }}>
                <p>Riva, centar Vodica</p>
                <p>Vodice, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--wood)", color: "var(--wood-light)" }}
          >
            <span>© 2026 Konoba Eko Dalmacija · Vodice</span>
            <span>Riva · Centar grada</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
