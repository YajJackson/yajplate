import { useEffect, useState } from 'react'

export enum ScrollDirection {
    SCROLL_UP = 'up',
    SCROLL_DOWN = 'down',
}

export const useScrollDirection = (
    thresholdPixels: number = 10,
    initialDirection: ScrollDirection = ScrollDirection.SCROLL_UP,
    off: boolean = false
) => {
    const [scrollDir, setScrollDir] = useState(initialDirection)

    useEffect(() => {
        const threshold = thresholdPixels || 0
        let lastScrollY = window.pageYOffset
        let ticking = false

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                // We haven't exceeded the threshold
                ticking = false
                return
            }

            setScrollDir(
                scrollY > lastScrollY ? ScrollDirection.SCROLL_DOWN : ScrollDirection.SCROLL_UP
            )
            lastScrollY = scrollY > 0 ? scrollY : 0
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir)
                ticking = true
            }
        }

        /**
         * Bind the scroll handler if `off` is set to false.
         * If `off` is set to true reset the scroll direction.
         */
        !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection)

        return () => window.removeEventListener('scroll', onScroll)
    }, [initialDirection, thresholdPixels, off])

    return scrollDir
}
