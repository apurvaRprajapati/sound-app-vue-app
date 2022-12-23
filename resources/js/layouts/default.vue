<template>
  <div class="main-layout" style="overflow-x: hidden;font-family: 'CircularStd-Medium' !important;background: #ffffffff;">
    <navbar />
    
    <div class="" style="padding-bottom:100px;">
      <child />
      <div v-if="isAuth" class="mt-4 px-4 mb-4">
        <main-player></main-player>
      </div>
    </div>
    
    <div v-if="isAuth" class="mt-4 bottom-player" style="">
      <bottomPlayer />
    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import '../../css/custom.css'
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
