import Image from 'next/image'
import Link from 'next/link'

export default function LorePage() {
  return (
    <main className="lore-shell relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/kurogami-world-hero.jpg"
          alt="Kurogami World background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-black/72" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:px-8 lg:px-10">
        <div className="lore-hero rounded-[2rem] border border-white/10 bg-[rgba(7,8,14,0.88)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.38)] sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="lore-kicker">The Lore</p>
            <Link href="/" className="text-sm uppercase tracking-[0.28em] text-[var(--gold)] transition-opacity hover:opacity-80">
              Back to Main
            </Link>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-4xl">
              <h1 className="lore-title text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                The Black God. The World. The Key.
              </h1>
              <div className="lore-divider my-8" />
              <p className="max-w-3xl text-lg leading-8 text-[rgba(233,238,243,0.84)] sm:text-xl">
                In the beginning there was the surface city — bright, loud, transactional. Miami performed. Capital moved in the open. Attention was the currency.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative flex h-[280px] w-full max-w-[340px] items-center justify-center rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(240,194,74,0.16),transparent_60%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/kurogami-load.jpg"
                  alt="Kurogami World logo"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-[1.2rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="lore-section-title">Origin</p>
            <div className="lore-divider-sm my-5" />
            <p className="lore-paragraph">
              Beneath it, another order formed. Kurogami means Black God. Not as spectacle. As origin. The Black God does not beg for belief. The Black God creates a world and lets those who can see it enter.
            </p>
            <p className="lore-paragraph mt-5">
              Kurogami World is that world viewed through a cultural lens — a system where art is not decoration, where artists are not content, and where ownership is not a slogan.
            </p>
          </article>

          <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="lore-section-title">The Two Layers</p>
            <div className="lore-divider-sm my-5" />
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-[var(--gold)]">The Public Face</h2>
                <p className="lore-paragraph mt-2">
                  Kurogami World and the expanding stream network. Artists let the camera run without leaving the creative process. Process becomes presence. Presence becomes network.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--gold)]">The Shadow System</h2>
                <p className="lore-paragraph mt-2">
                  Kurogami. Access. Ownership. Characters. Capital rails. World design. Quiet infrastructure with long memory.
                </p>
              </div>
            </div>
          </article>
        </div>

        <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="lore-section-title">The Key</p>
          <div className="lore-divider-sm my-5" />
          <p className="lore-paragraph">
            Between them sits the Key. The NFT is not a profile picture first. It is passage. It opens the cultural network, founding status, collection rights, deeper system layers as they come online, and the path into the gated virtual expansion.
          </p>
          <p className="lore-paragraph mt-5">
            Founding art is the first form of the Key — hand-drawn by Jay, painted by Lens, activated by Tom, held by those who underwrite the artists and the world forming around them.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="lore-section-title">The Artists</p>
            <div className="lore-divider-sm my-5" />
            <p className="lore-paragraph">
              Kurogami World is for artists, built by artists. Most art is never seen. Artists from earlier eras would have killed for distribution, network, and ownership in one system.
            </p>
            <p className="lore-paragraph mt-5">
              If Picasso had socials, he would have been massive. If Warhol had socials, he might have owned the timeline. Today the tools exist. What was missing was infrastructure that turns creation into continuity. That is Kurogami.
            </p>
          </article>

          <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="lore-section-title">The World</p>
            <div className="lore-divider-sm my-5" />
            <p className="lore-paragraph">
              Shadow Brickell is the mythic district — a quiet city behind the bright one. Global Tribes carry identity across the network. Characters are not mascots. They are visual souls. Factions are not costumes. They are cultural geometries.
            </p>
            <p className="lore-paragraph mt-5">
              The world expands toward a gated GTA6 layer where artists can hold promo rights, place work, sell packs and mods, and build presence inside a living virtual economy.
            </p>
          </article>
        </div>

        <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="lore-section-title">The Principle</p>
          <div className="lore-divider-sm my-5" />
          <p className="lore-paragraph text-xl leading-8 text-white/90">
            Culture above. Systems beneath. The Key connects them.
          </p>
          <p className="lore-paragraph mt-5 text-xl leading-8 text-[var(--gold)]">
            Create. Own. Compound. Belong.
          </p>
        </article>

        <article className="lore-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 text-center sm:p-10">
          <p className="lore-section-title">Next Action</p>
          <div className="lore-divider-sm mx-auto my-5" />
          <p className="lore-paragraph">Move from narrative to position: claim founding art, read the monetary layer, and enter the public network.</p>
          <div className="herocta mt-8 justify-center">
            <Link href="/" className="btn btn-primary">Reserve Founding Art</Link>
            <Link href="/token" className="btn btn-token">Explore $KRG</Link>
            <Link href="/surviving-miami" className="btn btn-secondary">Kurogami World</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
