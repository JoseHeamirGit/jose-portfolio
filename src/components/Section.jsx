function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
