import axios, { AxiosInstance } from 'axios'

class ApiClient {
    defaultHeaders: any
    client: AxiosInstance

    constructor(options: { headers?: any, baseURL?: string } = {}) {
        console.log('Init HTTP client', options?.baseURL)

        this.defaultHeaders = options.headers || {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // По какой то причине не смог настроить переменные окружения.
        // this.client = axios.create({
        //     baseURL: process.env.API_URL ? process.env.API_URL : '',
        //     headers: this.defaultHeaders
        // })

        this.client = axios.create({
            baseURL: options.baseURL ? options.baseURL : '',
            headers: this.defaultHeaders
        })
    }
}

const http: ApiClient = new ApiClient({ baseURL: 'https://jsonplaceholder.typicode.com' })

export default http