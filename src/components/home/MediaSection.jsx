import { visualAssets } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

export default function MediaSection() {
  return (
    <section className="section-screen bg-[#f4eee6]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden shadow-[0_30px_70px_rgba(45,25,15,0.16)]" data-aos="fade-right">
          <img alt="Saad’s Tailors featured in the media" className="aspect-[16/10] w-full object-cover" loading="lazy" src={visualAssets.mediaImage} />
          <a
            aria-label="Watch Saad's Tailors videos on YouTube"
            className="absolute inset-0 grid place-items-center bg-[#1b100c]/18 transition hover:bg-[#1b100c]/30"
            href="https://www.youtube.com/user/hotelhomes"
            rel="noreferrer"
            target="_blank"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#b77b2a] text-white shadow-xl transition hover:scale-105">
              <Icon name="play" size={26} />
            </span>
          </a>
        </div>

        <div data-aos="fade-left">
          <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#98621f]">
            <span className="h-px w-8 bg-current" />
            Press & articles
          </div>
          <h2 className="font-display text-4xl leading-[1.02] text-[#2a1710] sm:text-5xl lg:text-6xl">
            Saad’s Tailors in the media.
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#6e625d] sm:text-base">
            Follow Saad and his team for tailoring stories, style guidance, studio moments, and a closer look at the craft behind every fitting.
          </p>
          <a className="button-primary mt-8" href="https://www.youtube.com/user/hotelhomes" rel="noreferrer" target="_blank">
            Watch tailoring videos
            <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
