import { DependencyList, Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useAsyncState = <T>(
    factory: () => Promise<T>,
    deps: DependencyList,
    // @ts-ignore
    initial: T = undefined
): [T, Dispatch<SetStateAction<T>>] => {
    const [val, setVal] = useState<T>(initial)
    useEffect(() => {
        let cancel = false
        const promise = factory()
        if (promise === undefined || promise === null) return
        promise.then((val) => {
            if (!cancel) {
                setVal(val)
            }
        })
        return () => {
            cancel = true
        }
    }, deps)
    return [val, setVal]
}
