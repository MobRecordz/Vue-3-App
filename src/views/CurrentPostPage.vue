<template>
  <div class="posts-page">
      CURRENT POST {{ $route.params.id }}
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <a-row type='flex' justify='center'>
      <a-col :span='16'>
        <PostsActions/>   
        <PostsList/>
      </a-col>
    </a-row> -->

  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { defineComponent, ref, provide } from 'vue'
// import PostsList from '../components/PostsList.vue'
// import PostsActions from '../components/PostsActions.vue'

export default defineComponent({
  name: 'CurrentPostPage',
  components: {},
  setup() {
    // const searchQuery = ref('')

    // const updateSearchQuery = (value: string) => {
    //   searchQuery.value = value
    // }

    // provide('searchQuery', searchQuery)
    // provide('updateSearchQuery', updateSearchQuery)
  }
})
</script>
