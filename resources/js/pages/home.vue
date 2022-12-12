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
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

// import axios from 'axios'
export default {
  components: { Card, Button },
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
    file: "http://localhost/testsong.mp3",
  }),
  mounted() {
    console.log(this.$refs.surf);
    console.log(this.$refs.surf.waveSurfer); 
    this.$refs.surf.waveSurfer.on('ready', () => {
      console.log('ready')
      //this.$refs.surf.waveSurfer.play();
    })
   
  },
  methods: {
    playSong ($event, refName) {
      console.log('refname')
      console.log(refName)
      this.$refs[refName].waveSurfer.play()
      // this.$refs[refName].waveSurfer.on('ready', () => {
      //   console.log('play')
      //   this.$refs[refName].waveSurfer.play()
      // })
      
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
