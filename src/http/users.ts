import http from './index'

export default class UsersService {
    static async fetchPostsList(): Promise<IUser[]> {
        try {
            const { data } = await http.client.get('/users')
            return data

        } catch (error) {
            throw error
        }
    }
}
