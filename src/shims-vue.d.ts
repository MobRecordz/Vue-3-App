declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare interface IHttpParams {
  [key: string]: any
}

declare interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

declare interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

declare interface IUserPost {
  id: number,
  title: string,
  body: string,
  user?: IUser
}

declare enum PostsPageProvides {
  filteredPostsList = 'filteredPostsList',
  currentPage = 'currentPage',
  isLoading = 'isLoading',
  searchQuery = 'searchQuery',
  updateSearchQuery = 'updateSearchQuery'
}