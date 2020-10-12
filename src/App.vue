<template>
  <a-layout class='layout' style='background-color: #fff'>
    <a-loayout-header class='header'>
      <a-row type='flex' align='middle'>
        <a-col :span='4'>App Vue 3</a-col>
        <a-col :span='12'>
          <a-menu :selectedKeys='selectedKeys' mode="horizontal" style='border-bottom: none;'>
            <a-menu-item key="1">
              <router-link to="/">Posts</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/">Users</router-link>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
      

    </a-loayout-header>

    <a-layout-content
      :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
    >
      <router-view/>
    </a-layout-content>
  </a-layout>

    

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { HomeOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    // HomeOutlined,
    // UserOutlined
  },
  data() {
    return {
      selectedKeys: ['1']
    }
  }
}

</script>

<style lang='scss'>

  .header {
    padding: 0 40px;
  }

  .logo {
  
    padding: 0 20px;
    float: left;
  }
  

</style>
