export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`} data-aos="fade-up">
      <div className={`mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] ${light ? 'text-[#d6a85f]' : 'text-[#98621f]'}`}>
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>
      <h2 className={`font-display text-4xl leading-[0.98] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-[#2a1710]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${light ? 'text-white/68' : 'text-[#6e625d]'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
