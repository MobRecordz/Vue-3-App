<template>
  <div class='actions'>
      <a-input v-model:value='searchQuery' placeholder="Search" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
import { PostsPageProvides } from '../views/PostsPage.vue'

export default defineComponent({
    name: 'PostsActions',
    setup(props) {
        const searchQuery = inject(PostsPageProvides.searchQuery)

        return {
            searchQuery
        }
    }
})
</script>

<style scoped>

</style>
