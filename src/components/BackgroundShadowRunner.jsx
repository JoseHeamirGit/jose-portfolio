import { useEffect, useRef, useState } from 'react'

function useRunnerVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateVisibility = () => {
      setIsVisible(desktopQuery.matches && !motionQuery.matches)
    }

    updateVisibility()
    desktopQuery.addEventListener('change', updateVisibility)
    motionQuery.addEventListener('change', updateVisibility)

    return () => {
      desktopQuery.removeEventListener('change', updateVisibility)
      motionQuery.removeEventListener('change', updateVisibility)
    }
  }, [])

  return isVisible
}

function BackgroundShadowRunner() {
  const isVisible = useRunnerVisibility()
  const lastScrollY = useRef(0)
  const frameId = useRef(null)
  const [runnerStyle, setRunnerStyle] = useState({
    opacity: 0.03,
    transform: 'translate3d(-28vw, 10vh, 0) rotate(-5deg)',
  })
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    const interpolate = (progress, start, end) =>
      start + (end - start) * progress

    const updateRunner = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      const clampedProgress = Math.min(Math.max(progress, 0), 1)
      const latestScrollY = window.scrollY

      if (latestScrollY !== lastScrollY.current) {
        setDirection(latestScrollY > lastScrollY.current ? 1 : -1)
        lastScrollY.current = latestScrollY
      }

      const x = interpolate(clampedProgress, -28, 112)
      const y = interpolate(clampedProgress, 10, 66)
      const rotate =
        clampedProgress < 0.5
          ? interpolate(clampedProgress / 0.5, -5, 4)
          : interpolate((clampedProgress - 0.5) / 0.5, 4, -2)
      const opacity =
        clampedProgress < 0.18
          ? interpolate(clampedProgress / 0.18, 0.03, 0.1)
          : clampedProgress < 0.82
            ? interpolate((clampedProgress - 0.18) / 0.64, 0.1, 0.08)
            : interpolate((clampedProgress - 0.82) / 0.18, 0.08, 0.035)

      setRunnerStyle({
        opacity,
        transform: `translate3d(${x}vw, ${y}vh, 0) rotate(${rotate}deg)`,
      })
    }

    const requestUpdate = () => {
      if (frameId.current !== null) {
        return
      }

      frameId.current = window.requestAnimationFrame(() => {
        frameId.current = null
        updateRunner()
      })
    }

    updateRunner()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (frameId.current !== null) {
        window.cancelAnimationFrame(frameId.current)
      }
    }
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-screen w-screen overflow-hidden md:block"
      aria-hidden="true"
      style={runnerStyle}
    >
      <svg
        viewBox="0 0 360 190"
        className="shadow-runner-svg w-[300px] lg:w-[380px]"
        style={{ transform: `scaleX(${direction})` }}
      >
        <defs>
          <linearGradient id="runner-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfffea" />
            <stop offset="45%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="runner-blur">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern
            id="runner-data"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M2 12H10M14 12H22M12 2V10M12 14V22"
              stroke="#86efac"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />
            <circle cx="12" cy="12" r="2" fill="#bbf7d0" opacity="0.75" />
          </pattern>
        </defs>

        <g filter="url(#runner-blur)">
          <path
            className="shadow-runner-glow"
            d="M76 95C31 87 22 48 47 28C72 8 112 24 118 56C124 86 98 105 76 95ZM113 84C124 54 152 34 187 38C218 42 237 62 238 88C254 82 276 84 291 99C312 120 304 151 279 162C252 174 226 158 219 134C202 148 174 151 149 141C120 130 105 108 113 84ZM239 81C253 55 282 46 305 58C323 67 326 87 312 101C293 91 269 88 239 81ZM137 130C121 144 97 150 75 143C89 132 105 123 127 116C130 120 133 125 137 130ZM211 134C219 153 215 170 199 181C191 164 190 149 196 134H211ZM150 141C137 155 116 161 97 156C107 143 122 136 142 134L150 141Z"
            fill="url(#runner-glow)"
          />
          <path
            d="M76 95C31 87 22 48 47 28C72 8 112 24 118 56C124 86 98 105 76 95ZM113 84C124 54 152 34 187 38C218 42 237 62 238 88C254 82 276 84 291 99C312 120 304 151 279 162C252 174 226 158 219 134C202 148 174 151 149 141C120 130 105 108 113 84ZM239 81C253 55 282 46 305 58C323 67 326 87 312 101C293 91 269 88 239 81ZM137 130C121 144 97 150 75 143C89 132 105 123 127 116C130 120 133 125 137 130ZM211 134C219 153 215 170 199 181C191 164 190 149 196 134H211ZM150 141C137 155 116 161 97 156C107 143 122 136 142 134L150 141Z"
            fill="url(#runner-data)"
          />
          <path
            d="M149 86H210M170 64V116M196 72V126M229 96H278M247 112H296"
            fill="none"
            stroke="#bbf7d0"
            strokeLinecap="round"
            strokeWidth="3"
            opacity="0.55"
          />
          <circle cx="220" cy="75" r="5" fill="#ecfccb" opacity="0.85" />
          <circle cx="295" cy="82" r="3.5" fill="#bfdbfe" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}

export default BackgroundShadowRunner
