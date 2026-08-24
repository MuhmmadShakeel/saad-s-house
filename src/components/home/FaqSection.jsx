import { useState } from 'react'
import { faqItems } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="section-screen bg-[#f7f4ef]">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:py-24">
        <div className="flex flex-col items-center">
          <SectionHeading
            description="A few helpful details before you visit our Houston boutique or arrange a fitting."
            eyebrow="Good to know"
            title="Frequently asked questions."
          />
        </div>

        <div className="mt-12 border-t border-[#2a1710]/15" data-aos="fade-up">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index
            const answerId = `faq-answer-${index}`
            return (
              <div className="border-b border-[#2a1710]/15" key={item.question}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="font-display text-xl text-[#2a1710] sm:text-2xl">{item.question}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center border border-[#9f6a28]/35 text-[#9f6a28] transition ${isOpen ? 'rotate-45' : ''}`}>
                    <Icon name="plus" size={17} />
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? 'is-open' : ''}`} id={answerId}>
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-[#6e625d]">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
