export const localStorageKey = 'react-list-currentUser'

export const loadFromLocalStorage = (key: string = localStorageKey) => {
    try {
        const serializedState = localStorage.getItem(key)

        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveToLocalStorage = (serializedState: string, key: string = localStorageKey) => {
    try {
        localStorage.setItem(key, serializedState)
    } catch (err) {
        // ignore errors
    }
}
