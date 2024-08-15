import axios from 'axios'
import { envConfig } from '../config/envConfig'

export const verifyAuth = async () => {
    const { host, port } = envConfig?.backend || {}

    if (!host || !port) {
        console.error('Error: Host or port is undefined')
        throw new Error('Invalid configuration: Host or port is missing')
    }

    const { data } = await axios.get(`${host}:${port}/v1/store-token`)

    if (data) {
        sessionStorage.setItem('userId', data?.user?.id)
        sessionStorage.setItem('range', data?.range)
        sessionStorage.setItem('roles', JSON.stringify(data?.user?.roles))
    }

    return data
}
