import http from './index'

export default class PostsService {
    static async fetchPostsList(): Promise<IPost[]> {
        try {
            const { data } = await http.client.get('/posts')
            return data

        } catch (error) {
            throw error
        }
    }
}
