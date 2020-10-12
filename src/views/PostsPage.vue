<template>
  <div class="posts-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <a-row type='flex' justify='center'>
      <a-col :span='16'>
        <PostsActions/>   
        <PostsList/>
      </a-col>
    </a-row>

  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { defineComponent, ref, provide, readonly } from 'vue'
import PostsList from '../components/PostsList.vue'
import PostsActions from '../components/PostsActions.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PostsList,
    PostsActions
  },
  setup() {
    const searchQuery = ref('')
    const updateSearchQuery = (value: string) => {
      searchQuery.value = value
    }

    provide('searchQuery', readonly(searchQuery))
    provide('updateSearchQuery', updateSearchQuery)
  }
})
</script>
