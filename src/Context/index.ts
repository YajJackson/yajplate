import { User } from '_types/index'
import { createContext } from 'react'

export const UserContext = createContext<User | null>(null)
