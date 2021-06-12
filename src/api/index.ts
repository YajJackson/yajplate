import { RootState } from 'store/index'
import { userSignOut } from '@store/system/actions'
import { SystemState } from '@store/system/types'
import axios, { AxiosRequestConfig } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { authAPI } from './auth'

export const API_URL = process.env.API_URL
const api = axios.create({
    baseURL: API_URL || 'http://localhost:1337',
})

const Api = (options: AxiosRequestConfig) => ({
    ...authAPI(api, options),
})

export const useApi = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const systemState: SystemState = useSelector((state: RootState) => state.system) as SystemState
    const options: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${systemState.sessionToken}`,
        },
    }
    api.interceptors.response.use(
        (r) => r,
        (err) => {
            if (401 === err.response.status) {
                dispatch(userSignOut())
                history.replace('/login')
                return Promise.reject(err)
            } else {
                return Promise.reject(err)
            }
        }
    )
    return Api(systemState.loggedIn ? options : {})
}
