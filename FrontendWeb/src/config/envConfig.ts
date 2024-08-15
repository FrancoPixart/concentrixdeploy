export const envConfig = {
    backend: {
        host: import.meta.env.VITE_APP_CONCENTRIX_BACK_HOST,
        port: import.meta.env.VITE_APP_CONCENTRIX_BACK_PORT,
    },
    concentrix: {
        token: import.meta.env.VITE_APP_CONCENTRIX_TOKEN
    }
}