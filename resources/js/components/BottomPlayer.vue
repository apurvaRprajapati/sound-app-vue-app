<template>
  <div class="row col-lg-12"  style="position: fixed;bottom: 0;width: 100%;height: auto;">
    <div class="col-lg-2" style="padding-left: 55px;padding-bottom: 12px;">
      <label><b>Romantic love part 2</b></label><br>
      <label>Josiah Mann</label>
    </div>
    <div class="col-lg-1">
      <a @click="playPauseBtm()" class="play-pause-btn" data-cy="song-play-btn">
        <svg viewBox="0 0 32 32" ref="playBottom" width="16" class="music-play-svg">
            <g>
              <path stroke="none" d="M7.76 28.8v-25.6l20.48 12.8z M7.76 29.76c-0.128 0-0.32-0.064-0.448-0.128-0.32-0.192-0.512-0.512-0.512-0.832v-25.6c0-0.32 0.192-0.64 0.512-0.832s0.704-0.128 0.96 0l20.48 12.8c0.256 0.192 0.448 0.512 0.448 0.832s-0.192 0.64-0.448 0.832l-20.48 12.8c-0.192 0.064-0.32 0.128-0.512 0.128zM8.72 4.928v22.144l17.664-11.072-17.664-11.072z">
              </path>
            </g>
        </svg>
        <svg ref="pauseBottom" viewBox="0 0 32 32" width="16" class="music-pause-svg d-none">
          <g>
            <path stroke="none" d="M10.88 30.080c-1.408 0-2.56-1.152-2.56-2.56v-22.4c0-1.408 1.152-2.56 2.56-2.56s2.56 1.152 2.56 2.56v22.4c0 1.408-1.152 2.56-2.56 2.56z M21.12 30.080c-1.408 0-2.56-1.152-2.56-2.56v-22.4c0-1.408 1.152-2.56 2.56-2.56s2.56 1.152 2.56 2.56v22.4c0 1.408-1.152 2.56-2.56 2.56z">
            </path>
          </g>
        </svg>
      </a>
    </div>
    <div class="col-lg-5">
      <div id="bottomWaveSurf"></div>
    </div>
    <div class="col-lg-2">
      <b-form-slider :value="5"></b-form-slider>
    </div>
  </div>
</template>
  
  <script>
  import { useSongStore } from '../store/modules/song'
  export default {
    setup() {
        var songArray = useSongStore()
        console.log(songArray)
        return { songArray }
    },
    name: 'BottomPlayer',
    middleware: 'auth',
    computed: {
        activeSong() {
            return this.songArray.activeSong
        },
        prevRef() {
            return this.songArray.prevRef
        },
        songs() {
            return this.songArray.songs
        }
    },
    methods: {
      playPauseBtm() {
       
        const reference =  'surf' + this.activeSong.id
        //const wave = this.$refs[reference][0].waveSurfer
        console.log(this.activeSong.id)
        console.log(reference)
        console.log(this.$refs)
        // if (wave.isPlaying()){
        //       wave.pause()
        //       // this.pauseSong(refName)
        //       // this.$refs['play'+songId][0].classList.remove("d-none")
        //       // this.$refs['pause'+songId][0].classList.add("d-none")
        // } else {
        //   wave.play()
        //       // this.playSong(refName)
        //       // this.$refs['play'+songId][0].classList.add("d-none")
        //       // this.$refs['pause'+songId][0].classList.remove("d-none")
        // }
      }
    }
  }
   
  </script>
  