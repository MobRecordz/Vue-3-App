<template>
  <div class='actions'>
      <a-input v-model:value='searchQuery' placeholder="Search" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, onMounted, computed, watch, inject } from 'vue'

import { fetchPostsList } from '../api/posts'
import { fetchUsersList } from '../api/users'

export default defineComponent({
    name: 'PostsActions',
    setup(props) {
        const searchQuery = ref('')
        const updateSearchQuery: any = inject('updateSearchQuery')
        
        watch(searchQuery, (value: string) => {
            updateSearchQuery(value)
        })

        return {
            searchQuery
        }
    }
})
</script>

<style scoped>

</style>
