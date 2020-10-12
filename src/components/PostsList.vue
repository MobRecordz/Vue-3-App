<template>
  <div class='todo-list-container' :loading='true'>
        <!-- api dont give info about total items count -->
        <a-pagination 
            v-model:current="currentPage"
            :total="100"
            :disabled='isLoading'
            show-less-items
        />

        <!-- {{ filteredPostsList.length }} -->

        <a-list
            item-layout="vertical"
            :data-source='filteredPostsList'
            :loading='isLoading'
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
import { defineComponent, inject } from 'vue'
import PostsService from '../http/posts'
import { PostsPageProvides } from '../views/PostsPage.vue'

export default defineComponent({
    name: 'PostsList',
    setup() {
        const filteredPostsList = inject(PostsPageProvides.filteredPostsList)
        const isLoading = inject(PostsPageProvides.isLoading)
        const currentPage = inject(PostsPageProvides.currentPage)

        return {
            filteredPostsList,
            currentPage,
            isLoading
        }
    }
})
</script>

<style scoped>

</style>
