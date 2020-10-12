<template>
  <div class="posts-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <a-row 
      type='flex' 
      justify='center' 
      :gutter='[8, 8]'
    >
      <a-col :span='16'>
        <PostsActions/>   
      </a-col>
    </a-row>

    <a-row 
      type='flex' 
      justify='center' 
      :gutter='[8, 8]'
    >
      <a-col :span='16'>
        <PostsList/>
      </a-col>
    </a-row>

  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { defineComponent, ref, provide, readonly, computed, onMounted, watch } from 'vue'
import PostsList from '../components/PostsList.vue'
import PostsActions from '../components/PostsActions.vue'
import PostsService from '../http/posts'

export const enum PostsPageProvides {
  filteredPostsList = 'filteredPostsList',
  currentPage = 'currentPage',
  isLoading = 'isLoading',
  searchQuery = 'searchQuery',
  updateSearchQuery = 'updateSearchQuery'
}

export default defineComponent({
  name: 'Home',
  components: {
    PostsList,
    PostsActions
  },
  setup() {
    const isLoading = ref(false)

    const postsList = ref<IPost[]>([])
    const fetchPostsList = async (params?: IHttpParams) => {
        isLoading.value = true
        postsList.value = await PostsService.fetchPostsList(params)
        isLoading.value = false
    }
    
    const searchQuery = ref('')
    const filteredPostsList = computed(() => {
        return postsList.value.filter((post: IPost) => {
            const title = post.title.toLowerCase()

            return title.includes(searchQuery.value.toLowerCase())
        })
    })


    const currentPage = ref(1)
    watch(currentPage, async (page) => {
        await fetchPostsList({ page })
    })

    onMounted(async () => await fetchPostsList({ page: 1 }))
    
    // PostsList.vue
    provide(PostsPageProvides.filteredPostsList, filteredPostsList)
    provide(PostsPageProvides.currentPage, currentPage) // will mutate
    provide(PostsPageProvides.isLoading, readonly(isLoading))

    // PostsActions.vue
    provide(PostsPageProvides.searchQuery, searchQuery) // will mutate

    return {
    }
  }
})
</script>
