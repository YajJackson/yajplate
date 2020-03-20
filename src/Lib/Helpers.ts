export const Storage = {
    save: (key: string, data: any, expireMin?: number) => {
        const entry = {
            value: JSON.stringify(data),
            timestamp: expireMin ? Date.now() + expireMin * 60 * 1000 : false
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
    remove: (keys = [], callback?: () => any | void): boolean => {
        try {
            keys.forEach(k => localStorage.removeItem(k))
        } catch {
            return false
        }
        if (callback) callback()
        return true
    },
    clear: localStorage.clear
}
