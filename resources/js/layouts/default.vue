<template>
  <div class="main-layout" style="overflow-x: hidden;">
    <navbar />
    
    <div class="mt-4">
      <child />
      <div v-if="isAuth" class="mt-4 px-4">
        <main-player></main-player>
      </div>
    </div>
    
    <div v-if="isAuth" class="mt-4" style="position: fixed;width: 100vw;height: 90px;left: 0px;bottom: 0px;background-color: rgb(255, 255, 255);
    border-top: 1px solid rgb(227, 231, 237);z-index: 400;display: flex;-webkit-box-pack: justify;justify-content: space-between;">
      <bottomPlayer />
    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '~/components/Navbar'
import BottomPlayer from '~/components/BottomPlayer.vue'
import MainPlayer from '../components/MainPlayer.vue';
import store from '~/store'

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    BottomPlayer,
    MainPlayer
  },
  computed: {
    isAuth: function () {
      return store.getters['auth/check']
    }
  }
}
</script>
