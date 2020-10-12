<template>
  <div class='todo-list-container'>
      <a-list
        item-layout="vertical"
        :data-source='filteredPostsList'
      >
        <template v-slot:renderItem='{ item }'>
            <a-list-item>
                <template v-slot:actions>
                    <a-button @click='router.push({ name: "CurrentPost" })'>More</a-button>
                </template>
                <a-list-item-meta
                    :description="item.body"
                >
                <template v-slot:title>
                    <router-link :to='`/posts/${item.id}`'>
                        {{ item.title.charAt(0).toUpperCase() + item.title.slice(1) }}
                    </router-link>
                    <!-- <a href="https://www.antdv.com/">{{ item.title.charAt(0).toUpperCase() + item.title.slice(1) }}</a> -->
                </template>
                    <!-- <template v-slot:avatar>
                        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </template> -->
                </a-list-item-meta>
            </a-list-item>
        </template>

      </a-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, onMounted, computed, inject } from 'vue'

import PostsService from '../http/posts'
// import UsersService from '../http/users'

export default defineComponent({
    name: 'PostsList',
    props: {
        searchQuery: {
            type: String,
            default: ''
        }
    },

    setup(props) {

        const postsList = ref<IPost[]>([])
        const fetchPostsList = async () => {
            postsList.value = await PostsService.fetchPostsList()
        }

        const searchQuery: any = inject('searchQuery')
        const filteredPostsList = computed(() => {
            return postsList.value.filter((post: IPost) => {
                const title = post.title.toLowerCase()

                return title.includes(searchQuery.value.toLowerCase())
            })
        })

        onMounted(async () => await fetchPostsList())

        return {
            postsList,
            fetchPostsList,
            filteredPostsList
        }
    }
})
</script>

<style scoped>

</style>
