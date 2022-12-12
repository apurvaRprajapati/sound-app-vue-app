<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
      </card>
    </div>
    <div id="waveformComponentdiv">
      <wavesurfer :src="file" :options="options" ref="surf"></wavesurfer>
      <button @click="play">Play song</button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
//import WaveSurferVue from "vue-wave-surfer/src/VueWaveSurfer";
// import axios from 'axios'
export default {
  components: { Button },
  // components: {
  //   WaveSurferVue,
  // },
  middleware: 'auth',
  
  data: () => ({
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
    this.$nextTick(() => {
      this.$refs.surf.waveSurfer.play()
      // this.wavesurfer = WaveSurferVue.create({
      //   barWidth: 3,
      //   barHeight: 2,
      //   height: 60,
      //   barGap: 3,
      //   progressColor: '#6d6df6',
      //   waveColor: '#d1d4e3'
      // })
      // this.wavesurfer.load('http://127.0.0.1:8000/testsong.mp3')
    })
  },
  methods: {
    // play () {
    //   //let wave = eval(`waveformComponentdiv1`)
    //   // wave.setVolume(5)
    //   // wave.play()
    //   this.$refs.surf.wavesurfer.play()
    // }
  },
    // this.player.play()
    // this.player.on('ready', () => {
    //   console.log('ready')
    // })
    // this.surfer = wavesurfer.create({
    //       container: "#waveformComponentdiv", //+ this.waveformElementId, //Render waveform within this component 
    //       fillParent: false,
    //       scrollParent: true,
    //       minPxPerSec: 60,
    //       mediaControls: true,
    //       cursorColor: "#fff",
    //       cursorWidth: 0,
    //       backend: "MediaElement",
    //       barWidth: 1,
    //       hideScrollbar: true,
    //       pixelRatio: 1,
    //       partialRenter: true,
    //       autoCenter: true,
    //       barWidth: 3,
    //       barHeight: 2,
    //       height: 60,
    //       barGap: 3,
    //       progressColor: '#6d6df6',
    //       waveColor: '#d1d4e3'
    //       });
    //   this.surfer.load('http://127.0.0.1:8000/testsong.mp3'); 
  // },
  // computed: {
  //   player() {
  //     return this.$refs.surf.wavesurfer
  //   }
  // },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
