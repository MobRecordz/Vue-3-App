import http from './index'


export default class PostsService {
    static async fetchPostsList(searchParams: IHttpParams = {}): Promise<IPost[]> {
        try {
            let url = '/posts'

            const params = Object.entries(searchParams)
                                    .map(([key, value]) => `_${key}=${value}`)
                                    .join('&')

            if (params) url += `?${params}`

            const { data } = await http.client.get(url)
            return data

        } catch (error) {
            throw error
        }
    }
}
