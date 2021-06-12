import { User } from '@api/auth'
import {
    SystemActionTypes,
    SystemState,
    UPDATE_SESSION,
    UPDATE_USER,
    USER_SIGN_IN,
    USER_SIGN_OUT,
} from '@store/system/types'

export const updateSession = (newSession: SystemState): SystemActionTypes => ({
    type: UPDATE_SESSION,
    payload: newSession,
})
export const userSignIn = (user: User, sessionToken: string): SystemActionTypes => ({
    type: USER_SIGN_IN,
    payload: { user, sessionToken },
})
export const updateUser = (user: User): SystemActionTypes => ({
    type: UPDATE_USER,
    payload: { user },
})
export const userSignOut = (): SystemActionTypes => ({
    type: USER_SIGN_OUT,
})
