<template>
  <div>
    <!-- <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
      </card>
    </div> -->
    <section>
  <div class="">
    <div class="home-video-wrapper">
       <video style=" object-fit: cover;" class="video" muted="" autoplay="" playsinline="">
          <source src="https://soundstaging.jonathanmann.tech/assets/video/home-video.mp4" type="video/mp4">
       </video>
    </div>
  </div>
 </section>
    <!-- <main-player></main-player> -->
    <!-- <card class="mb-2 mt-2">
      <div class="mb-2">
          <button @click="playSong($event,'surfNew')"> play</button>
          <button @click="pauseSong($event,'surfNew')"> pause</button>
        </div>
      <div>
        <wavesurfer :src="file" :options="options" ref="surfNew"></wavesurfer>
      </div>
    </card> -->
    <!-- <div id="waveformComponentdiv">
      <wavesurfer id="waveformComponentdiv" :src="file" :options="options" ref="surf"></wavesurfer>
    </d
  components: { Button },iv> -->

  <!-- <bottom-player></bottom-player> -->
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import BottomPlayer from '../components/BottomPlayer.vue';
//import MinimapPlugin from 'wavesurfer.js/src/plugin/minimap/index.js';
import MainPlayer from '../components/MainPlayer.vue';

// import axios from 'axios'
export default {
  components: { Card, Button, BottomPlayer, MainPlayer },
  middleware: 'auth',
  data: () => ({
    // plugins: [MinimapPlugin],
    // prevRef: null,
    // options: {
    //     barWidth: 3,
    //     barHeight: 2,
    //     height: 60,
    //     barGap: 3,
    //     progressColor: '#6d6df6',
    //     waveColor: '#d1d4e3'
    // },
    // songs:[
    //   {
    //     'id': 1,
    //     'url': "http://127.0.0.1:8000/testsong.mp3"
    //   },
    //   {
    //     'id': 2,
    //     'url': "http://127.0.0.1:8000/testsong.mp3"
    //   }
    // ],
    // file:"http://127.0.0.1:8000/testsong.mp3"
   
  }),
  mounted() {
    // console.log(this.$refs.surf);
    // console.log(this.$refs.surf.waveSurfer); 
    // console.log(this.$refs.surf.waveSurfer.getActivePlugins());
    // this.$refs.surf.waveSurfer.on('play', () => {
    //     console.log('play')
    //     this.$refs.surf.waveSurfer.registerPlugins([
    //     this.waveSurfer.MinimapPlugin.create(
    //                 {
    //                     container: "#bottomWaveSurf",
    //                     waveColor: '#d1d4e3',
    //                     barWidth: 3,
    //                     barHeight: 2,
    //                     height: 60,
    //                     barGap: 3,
    //                     progressColor: '#6d6df6',
    //                 }
    //             )
    //     ]);
    // })
    
   
  },
  methods: {
    // playSong ($event, refName) {
    //   console.log('refname')
    //   console.log(refName)
    //   console.log(this.$refs[refName][0])
    //   this.$refs[refName][0].waveSurfer.setVolume(0.1)
    //   this.$refs[refName][0].waveSurfer.play()
    //   if(this.prevRef != null && this.prevRef != refName) {
    //     console.log('prev plugin')
    //     console.log(this.prevRef)
    //     let preWave = this.$refs[this.prevRef][0].waveSurfer
    //     preWave.stop()
    //     preWave.destroyPlugin('minimap')
    //   }
    //   this.prevRef = refName//this.$refs[refName][0]//.waveSurfer
    //   const waveSurfer = this.$refs[refName][0].waveSurfer
    //   if (waveSurfer.getActivePlugins().minimap) {
    //     waveSurfer.destroyPlugin('minimap')
    //   }
    //   waveSurfer.registerPlugins([
    //     MinimapPlugin.create({
    //       container: '#bottomWaveSurf',
    //       waveColor: '#d1d4e3',
    //       barWidth: 3,
    //       barHeight: 2,
    //       height: 60,
    //       progressColor: '#6d6df6',
    //     }),
    //   ]);
    // },
    // pauseSong ($event,refName) {
    //   this.$refs[refName][0].waveSurfer.pause()
    // },
  },
  computed: {
    // player() {
    //   return this.$refs.surfNew.wavesurfer
    // }
  },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
