<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
      </card>
    </div>
    
    <card class="mb-2 mt-2">
      <div class="row">
        <div class="mb-2">
          <button @click="playSong($event, 'surf')"> play</button>
          <button @click="pauseSong($event, 'surf')"> pause</button>
        </div>
        <div>
          <wavesurfer :src="file" :options="options" ref="surf"></wavesurfer>
        </div>
       
      </div>
    </card>
    <card class="mb-2 mt-2">
      <div class="mb-2">
          <button @click="playSong($event,'surfNew')"> play</button>
          <button @click="pauseSong($event,'surfNew')"> pause</button>
        </div>
      <div>
        <wavesurfer :src="file" :options="options" ref="surfNew"></wavesurfer>
      </div>
    </card>
    <!-- <div id="waveformComponentdiv">
      <wavesurfer id="waveformComponentdiv" :src="file" :options="options" ref="surf"></wavesurfer>
    </d
  components: { Button },iv> -->

  <bottom-player></bottom-player>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import BottomPlayer from '../components/BottomPlayer.vue';
import MinimapPlugin from 'wavesurfer.js/src/plugin/minimap/index.js';

// import axios from 'axios'
export default {
  components: { Card, Button, BottomPlayer },
  middleware: 'auth',
  data: () => ({
    plugins: [MinimapPlugin],
    options: {
        barWidth: 3,
        barHeight: 2,
        height: 60,
        barGap: 3,
        progressColor: '#6d6df6',
        waveColor: '#d1d4e3'
    },
    file: "http://127.0.0.1:8000/testsong.mp3",
  }),
  mounted() {
    console.log(this.$refs.surf);
    console.log(this.$refs.surf.waveSurfer); 
    console.log(this.$refs.surf.waveSurfer.getActivePlugins());
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
    playSong ($event, refName) {
      console.log('refname')
      console.log(refName)
      this.$refs[refName].waveSurfer.setVolume(0.1);
      this.$refs[refName].waveSurfer.play()
      console.log(this.$refs.surf.waveSurfer.getActivePlugins().minimap)

      this.$refs.surf.waveSurfer.on('play', () => {
        console.log('play')
        this.registerPlugins([
          
          this.MinimapPlugin.create(
                    {
                        container: this.$refs.bottomWaveSurf,
                        waveColor: '#d1d4e3',
                        barWidth: 3,
                        barHeight: 2,
                        height: 60,
                        barGap: 3,
                        progressColor: '#6d6df6',
                    }
                )
        ]);
    })

      // this.$refs.surf.waveSurfer.on('play', () => {
      //   console.log('play')
      //   console.log(this.$refs[refName].waveSurfer.getActivePlugins())
      //   this.$refs[refName].registerPlugins([
      //       this.$refs[refName].minimap.create(
      //               {
      //                   container: this.$refs.bottomWaveSurf,
      //                   waveColor: '#d1d4e3',
      //                   barWidth: 3,
      //                   barHeight: 2,
      //                   height: 60,
      //                   barGap: 3,
      //                   progressColor: '#6d6df6',
      //               }
      //           )]);
      //   })
      
    },
    pauseSong ($event,refName) {
      this.$refs[refName].waveSurfer.pause()
    },
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
