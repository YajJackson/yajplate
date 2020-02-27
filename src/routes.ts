import { Home } from '@pages/Home'
import { Login } from '@pages/Login'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/(|home)',
        component: Home
    }
]

export default routes
