<template>
    <div class="row">
        <side-bar></side-bar>
        <div class="col-lg-10">
            <div class="row song-row" v-for="(song) in songs" :key="song.id">
                <div class="col-lg-1">
                    <img width="50px" height="50px" src="https://d3qtavhszl8vzy.cloudfront.net/assets/uploads/music/covers/imaginato.png">
                </div>
                <div class="mb-2 col-lg-1">
                    <!-- <button @click="playSong('surf'+song.id)"> play</button>
                    <button @click="pauseSong('surf'+song.id)"> pause</button> -->
                    <a @click="playPause('surf'+song.id,song.id)" class="play-pause-btn" data-cy="song-play-btn">
                        <svg viewBox="0 0 32 32" :ref="'play'+song.id" width="16" class="music-play-svg">
                            <g>
                                <path stroke="none"
                                       d="M7.76 28.8v-25.6l20.48 12.8z M7.76 29.76c-0.128 0-0.32-0.064-0.448-0.128-0.32-0.192-0.512-0.512-0.512-0.832v-25.6c0-0.32 0.192-0.64 0.512-0.832s0.704-0.128 0.96 0l20.48 12.8c0.256 0.192 0.448 0.512 0.448 0.832s-0.192 0.64-0.448 0.832l-20.48 12.8c-0.192 0.064-0.32 0.128-0.512 0.128zM8.72 4.928v22.144l17.664-11.072-17.664-11.072z">
                                </path>
                            </g>
                        </svg>
                        <svg :ref="'pause'+song.id" viewBox="0 0 32 32" width="16" class="music-pause-svg d-none">
                            <g>
                                <path stroke="none"
                                        d="M10.88 30.080c-1.408 0-2.56-1.152-2.56-2.56v-22.4c0-1.408 1.152-2.56 2.56-2.56s2.56 1.152 2.56 2.56v22.4c0 1.408-1.152 2.56-2.56 2.56z M21.12 30.080c-1.408 0-2.56-1.152-2.56-2.56v-22.4c0-1.408 1.152-2.56 2.56-2.56s2.56 1.152 2.56 2.56v22.4c0 1.408-1.152 2.56-2.56 2.56z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="col-lg-2">
                    <label><b>{{song.name}}</b></label><br>
                    <label>{{song.artist}}</label>
                </div>
                <div class="mb-2 col-lg-6">
                        <wavesurfer :src="song.url" :data-id="song.id" :data-url="song.url" :options="options" :ref="'surf'+song.id"></wavesurfer>
                </div>
                <div class="col-lg-1">
                    <label style="padding: 10px 10px 10px 10px;">{{song.duration}}</label>
                </div>
                <div class="col-lg-1">
                    <div class="row col-lg-12" style="padding: px 10px 10px 10px;">
                        <div class="col-lg-4">
                            <a class="playlist-icon">
                                <svg data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus lg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus-lg mx-auto b-icon bi"><g data-v-41be6633=""><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></g></svg>
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a class="favourite-icon">
                                <svg data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="suit heart" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-suit-heart mx-auto b-icon bi"><g data-v-41be6633=""><path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path></g></svg>
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a class="download-icon">
                                <svg data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi"><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import Button from '../components/Button.vue';
  import Card from '../components/Card.vue';
  import MinimapPlugin from 'wavesurfer.js/src/plugin/minimap/index.js';
  import { useSongStore } from '../store/modules/song'
  import SideBar from './SideBar.vue';
  

  export default {
    components: { Card, Button, SideBar },
    middleware: 'auth',
    name: 'MainPlayer',
    setup() {
        var songArray = useSongStore()
        console.log(songArray)
        return { songArray }
    },
    data: () => ({
        checked:true,
        plugins: [MinimapPlugin],
        // prevRef: null,
        options: {
            barWidth: 3,
            barHeight: 2,
            height: 60,
            barGap: 3,
            progressColor: '#6d6df6',
            waveColor: '#d1d4e3'
        },
        //songs:[],
        file:"http://127.0.0.1:8000/testsong.mp3"
    }),
    created() {
        // console.log("active song")
        // console.log(this.activeSong)
        // this.$nextTick(() => {
        //     if(this.activeSong.id != null) {
        //         const reference =  'surf' + this.activeSong.id
        //         const wave = this.$refs[reference][0].waveSurfer
        //         console.log("mounted + wavesurfer")
        //         console.log(this.$refs[reference])
        //         const currentProgress = this.activeSong.currentProgress
        //         console.log("current progress")
        //         console.log(currentProgress)
        //         wave.on('ready', function() {
        //             wave.setVolume(0.1)
        //             console.log(currentProgress)
        //             wave.skip(currentProgress)
        //             wave.play()
        //             if (wave.getActivePlugins().minimap) {
        //                 wave.destroyPlugin('minimap')
        //             }
        //             wave.registerPlugins([
        //                 MinimapPlugin.create({
        //                 container: '#bottomWaveSurf',
        //                 waveColor: '#d1d4e3',
        //                 barWidth: 3,
        //                 barHeight: 2,
        //                 height: 60,
        //                 progressColor: '#6d6df6',
        //                 }),
        //             ]);
        //         })
        //         const songObj = this.songArray
        //         wave.on('audioprocess', function() {
        //             songObj.setCurrentProgress(wave.getCurrentTime().toFixed())
        //         });
        //     }
        // });
    },
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
        playPause(refName,songId) {
            const wave = this.$refs[refName][0].waveSurfer
            if (wave.isPlaying()){
                this.pauseSong(refName)
                this.$refs['play'+songId][0].classList.remove("d-none")
                this.$refs['pause'+songId][0].classList.add("d-none")
            } else {
                this.playSong(refName)
                this.$refs['play'+songId][0].classList.add("d-none")
                this.$refs['pause'+songId][0].classList.remove("d-none")
            }
        },
        playSong (refName) {
            console.log('refname')
            console.log(refName)
            console.log(this.$refs[refName][0])
            console.log(this.$refs[refName][0].waveSurfer.container.dataset)
            const waveSurfer = this.$refs[refName][0].waveSurfer
            let activeSongId = waveSurfer.container.dataset.id
            let activeSongUrl = waveSurfer.container.dataset.url
            waveSurfer.setVolume(0.1)
            waveSurfer.play()
            var currentProgress = 0
            const songArrayObj = this.songArray
            waveSurfer.on('audioprocess', function() {
                currentProgress = waveSurfer.getCurrentTime().toFixed()
                songArrayObj.setCurrentProgress(currentProgress)
            });
            console.log("prev ref")
            console.log(this.prevRef)
            this.songArray.setActiveSong(activeSongId,activeSongUrl)

            if(this.prevRef != null && this.prevRef != refName) {
                console.log('prev plugin')
                console.log(this.prevRef)
                let preWave = this.$refs[this.prevRef][0].waveSurfer
                preWave.stop()
                preWave.destroyPlugin('minimap')
            }
            this.songArray.setPrevRef(refName) //this.$refs[refName][0]//.waveSurfer
            this.setMiniMapPlugin(refName);
        },
        pauseSong (refName) {
            this.$refs[refName][0].waveSurfer.pause()
        },
        setMiniMapPlugin (refName) {
            const waveSurfer = this.$refs[refName][0].waveSurfer
            if (waveSurfer.getActivePlugins().minimap) {
                waveSurfer.destroyPlugin('minimap')
            }
            waveSurfer.registerPlugins([
                MinimapPlugin.create({
                container: '#bottomWaveSurf',
                waveColor: '#d1d4e3',
                barWidth: 3,
                barHeight: 2,
                height: 60,
                progressColor: '#6d6df6',
                }),
            ]);
        }

  }
  }
  </script>
  