export enum USER_ROLE {
    NONE = 'none',
    AUTHENTICATED = 'Authenticated',
    PUBLIC = 'Public',
}
export type User = {
    id: number
    username: string
    display_name: string
    csrf_token: string
    email: string
    phone_number?: string
    provider: string
    confirmed: boolean
    blocked?: boolean
    role: {
        id: USER_ROLE
        name: string
        description: string
        type: string
    }
    api_token?: string
    created_at: string
    updated_at: string
    photo?: Media
}
export type UserLoginCredentials = {
    identifier: string
    password: string
}
export type UserRegisterCredentials = {
    display_name: string
    username: string
    email: string
    password: string
}
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE'
export type UserLoginResponse = {
    type: typeof USER_LOGIN_RESPONSE
    jwt: string
    user: User
}
export const FORGOT_PASSWORD_RESPONSE = 'FORGOT_PASSWORD_RESPONSE'
export type FORGOT_PASSWORD_REQUEST_PARAMS = {
    email: string
}
export type ForgotPasswordResponse = {
    type: typeof FORGOT_PASSWORD_RESPONSE
    forgotPasswordResponse: {
        ok: boolean
    }
}
export const PASSWORD_RESET_RESPONSE = 'PASSWORD_RESET_RESPONSE'
export type PASSWORD_RESET_REQUEST_PARAMS = {
    password: string
    passwordConfirmation: string
    code: string
}
export type PasswordResetResponse = {
    type: typeof PASSWORD_RESET_RESPONSE
    passwordResetResponse: {
        jwt: string
        user: User
    }
}
export const USER_UPDATE_RESPONSE = 'USER_UPDATE_RESPONSE'
export type USER_UPDATE_REQUEST_PARAMS = {
    username?: User['username']
    display_name?: User['display_name']
    phone_number?: User['phone_number']
    photo?: User['photo']
}
export type UserUpdateResponse = {
    type: typeof USER_UPDATE_RESPONSE
    userUpdateResponse: {
        user: User
    }
}

import { APIErrorResponse, API_ERROR_RESPONSE, Media } from './types'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export const authAPI = (api: AxiosInstance, options: AxiosRequestConfig) => ({
    auth: {
        update: async (
            params: USER_UPDATE_REQUEST_PARAMS | FormData,
            config?: AxiosRequestConfig
        ): Promise<UserUpdateResponse | APIErrorResponse> =>
            await api.put(`/users/update`, params, config || options).then(
                ({ data }) => ({ userUpdateResponse: data, type: USER_UPDATE_RESPONSE }),
                ({ response }) => ({ ...(response || { data: {} }).data, type: API_ERROR_RESPONSE })
            ),
        forgotPassword: async (
            params: FORGOT_PASSWORD_REQUEST_PARAMS
        ): Promise<ForgotPasswordResponse | APIErrorResponse> =>
            await api.post(`/auth/forgot-password`, params, options).then(
                ({ data }) => ({
                    forgotPasswordResponse: data,
                    type: FORGOT_PASSWORD_RESPONSE,
                }),
                ({ response }) => ({ ...(response || { data: {} }).data, type: API_ERROR_RESPONSE })
            ),
        resetPassword: async (
            params: PASSWORD_RESET_REQUEST_PARAMS
        ): Promise<PasswordResetResponse | APIErrorResponse> =>
            await api.post(`/auth/reset-password`, params, options).then(
                ({ data }) => ({
                    passwordResetResponse: data,
                    type: PASSWORD_RESET_RESPONSE,
                }),
                ({ response }) => ({ ...(response || { data: {} }).data, type: API_ERROR_RESPONSE })
            ),
        login: async (
            userCredentials: UserLoginCredentials
        ): Promise<UserLoginResponse | APIErrorResponse> =>
            await api.post('auth/local', userCredentials).then(
                ({ data }) => {
                    return { ...data, type: USER_LOGIN_RESPONSE }
                },
                ({ response }) => ({ ...(response || { data: {} }).data, type: API_ERROR_RESPONSE })
            ),
        register: async (
            userCredentials: UserRegisterCredentials
        ): Promise<UserLoginResponse | APIErrorResponse> =>
            await api.post('auth/local/register', userCredentials).then(
                ({ data }) => {
                    return { ...data, type: USER_LOGIN_RESPONSE }
                },
                ({ response }) => ({ ...(response || { data: {} }).data, type: API_ERROR_RESPONSE })
            ),
    },
})
