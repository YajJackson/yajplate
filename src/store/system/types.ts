import { User, UserLoginResponse } from '@api/auth'

export const UPDATE_SESSION = 'UPDATE_SESSION'
export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const UPDATE_USER = 'UPDATE_USER'

export interface SystemState {
    loggedIn: boolean
    user: User | null
    sessionToken?: string
}

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION
    payload: SystemState
}
interface UserSignInAction {
    type: typeof USER_SIGN_IN
    payload: {
        sessionToken: UserLoginResponse['jwt']
        user: UserLoginResponse['user']
    }
}
interface UpdateUserAction {
    type: typeof UPDATE_USER
    payload: {
        user: User
    }
}
interface UserSignOutAction {
    type: typeof USER_SIGN_OUT
}

export type SystemActionTypes =
    | UpdateSessionAction
    | UserSignInAction
    | UserSignOutAction
    | UpdateUserAction
