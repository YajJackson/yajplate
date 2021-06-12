export const Storage = {
    save: (key: string, data: any, expireMin?: number) => {
        const entry = {
            value: JSON.stringify(data),
            timestamp: expireMin ? Date.now() + expireMin * 60 * 1000 : false,
        }
        try {
            localStorage.setItem(key, JSON.stringify(entry))
        } catch {
            console.warn(`Error saving '${key}' to localStorage`, { data })
        }
        return data
    },
    load: (key: string) => {
        try {
            const entry = JSON.parse(localStorage.getItem(key) ?? '')
            if (!entry) return false
            if (entry.timestamp) {
                return Date.now() < entry.timestamp && JSON.parse(entry.value)
            }
            return JSON.parse(entry.value)
        } catch {
            console.warn(`Error retrieving '${key}' from localStorage`)
            return false
        }
    },
    remove: (keys: Array<string> = [], callback?: () => any | void): boolean => {
        try {
            keys.forEach((k) => localStorage.removeItem(k))
        } catch {
            return false
        }
        if (callback) callback()
        return true
    },
    clear: localStorage.clear,
}

export const truncate = (input: string, max: number) =>
    input.length > 5 ? `${input.substring(0, max)}...` : input

export async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export function parseJwt(token) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )
    return JSON.parse(jsonPayload)
}

export const formatCurrency = (num: number, currency: string = 'USD') =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num)

export const formatDate = (dateString: string | number) => {
    const formatter = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    })
    return formatter.format(new Date(dateString))
}

export const distinct = <T>(array: T[], key: string): T[] => {
    const result: T[] = []
    const map = new Map()
    for (const item of array) {
        if (!map.has(item[key])) {
            map.set(item[key], true)
            result.push(item)
        }
    }
    return result
}

export const formatPhoneNumber = (s: string) => {
    var cleaned = ('' + s).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return s
}

export const clamp = (x: number, lower: number, upper: number): number => {
    let r = x
    if (x < lower) r = lower
    if (x > upper) r = upper
    return r
}

export const smoothstep = (x: number = 1, l: number = 0, r: number = 1): number => {
    const y = clamp((x - l) / (r - l), 0, 1)
    return y * y * (3 - 2 * y)
}
export const getBase64 = (file) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}

export const capitalize = (s?: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// Randomize array in-place using Durstenfeld shuffle algorithm
export const shuffleArray = (array: any[]) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

export const getRandomElementFromArray = <T>(items: T[]) =>
    items[Math.floor(Math.random() * items.length)]

export const randomIntFromRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const chunkArray = <T>(arr: T[], size: number) => {
    return arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / size)
        if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [] as T[]
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [] as T[][])
}
