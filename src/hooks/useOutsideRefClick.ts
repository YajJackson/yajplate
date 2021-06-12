import { useEffect } from 'react'

export const useOutsideRefClick = (ref: React.RefObject<any>, callback: Function) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current != null && !ref.current.contains(event.target)) callback()
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [ref])
}
