import {
    SystemActionTypes,
    SystemState,
    UPDATE_SESSION,
    UPDATE_USER,
    USER_SIGN_IN,
    USER_SIGN_OUT,
} from '@store/system/types'

import { Storage } from '@lib/helpers'

const USER_CACHE = 'USER_CACHE'
const JWT_SESSION_TOKEN = 'JWT_SESSION_TOKEN'
const user = Storage.load(USER_CACHE) || null
const sessionToken = Storage.load(JWT_SESSION_TOKEN) || null
const initialState: SystemState = {
    loggedIn: !!user,
    user: user,
    sessionToken: sessionToken,
}

export const systemReducer = (state = initialState, action: SystemActionTypes): SystemState => {
    switch (action.type) {
        case UPDATE_SESSION: {
            return { ...state, ...action.payload }
        }
        case USER_SIGN_IN: {
            Storage.save(USER_CACHE, action.payload.user)
            Storage.save(JWT_SESSION_TOKEN, action.payload.sessionToken)
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                sessionToken: action.payload.sessionToken,
            }
        }
        case UPDATE_USER: {
            Storage.save(USER_CACHE, action.payload.user)
            return {
                ...state,
                user: action.payload.user,
            }
        }
        case USER_SIGN_OUT: {
            Storage.remove([USER_CACHE, JWT_SESSION_TOKEN])
            return { ...state, loggedIn: false, user: null }
        }
        default:
            return state
    }
}
