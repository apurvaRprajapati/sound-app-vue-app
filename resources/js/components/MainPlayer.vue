<template>
    <div class="row">
        <div class="col-lg-2 px-5">
            <h2 class="text-bold-l mt-4 font-circular-std">FILTERS</h2>
            <hr>
            
            <p id="categories" class="cursor-point text-bold-l mb-2 dropdown-toggle font-circular-std" data-toggle="collapse" v-b-toggle="'collapse-1'">Genres and Moods</p>
            <b-collapse id="collapse-1" class="mt-2">
            
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Happy-and-Positive">HAPPY AND POSITIVE</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Sad-and-Emotional%C2%A0%F0%9F%98%A5">SAD AND EMOTIONAL</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Cinematic">CINEMATIC</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Horror">HORROR</a>
                                                   
            </b-collapse>
            <p id="good-part-toggle" class="cursor-point text-bold-l mb-2 dropdown-toggle font-circular-std" data-toggle="collapse" v-b-toggle="'good-part'" style="margin-top:20px">Start at the Good Part!
            </p>
            <b-collapse id="good-part">
                <label>Off</label>
                    <toggle-button color="rgb(114, 0, 255)"></toggle-button>
                <label>On</label>   
            </b-collapse>
            <p id="vocals-only-toggle" class="cursor-point text-bold-l mb-2 dropdown-toggle font-circular-std" data-toggle="collapse" v-b-toggle="'vocals-only'" style="margin-top:20px">Vocals Only</p>
                <b-collapse id="vocals-only" class="collapse custom-control custom-switch custom-filter-switch app-switch mb-2 font-circular-std">
                    <label>Off</label>
                        <toggle-button color="rgb(114, 0, 255)"></toggle-button>
                    <label>On</label>   
                </b-collapse>

            <p id="bpm-toggle" style="margin-top:20px" class="cursor-point text-bold-l mb-0 dropdown-toggle font-circular-std" data-toggle="collapse" v-b-toggle="'bpm'">Speed</p> 
                <b-collapse id="bpm" style="margin-left:16px; padding-top: 10px;" class="collapse">
                        <div class="custom-control custom-checkbox app-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" value="">
                            <label class="custom-control-label font-circular-std" for="customCheck1">Slow</label>
                        </div>
                        <div class="custom-control custom-checkbox app-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2" value="">
                            <label class="custom-control-label font-circular-std" for="customCheck2">Medium</label>
                        </div>
                        <div class="custom-control custom-checkbox app-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck3" value="">
                            <label class="custom-control-label font-circular-std" for="customCheck3">Fast</label>
                        </div>
                </b-collapse>   
        </div>
        <div class="col-lg-10">
            <card class="" v-for="(song) in songs" :key="song.id">
                <div class="row">
                    <div class="mb-2">
                        <button @click="playSong('surf'+song.id)"> play</button>
                        <button @click="pauseSong('surf'+song.id)"> pause</button>
                    </div>
                    <div>
                        <wavesurfer :src="song.url" :data-id="song.id" :data-url="song.url" :options="options" :ref="'surf'+song.id"></wavesurfer>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>
  
  <script>
  import Button from '../components/Button.vue';
  import Card from '../components/Card.vue';
  import MinimapPlugin from 'wavesurfer.js/src/plugin/minimap/index.js';
  import { useSongStore } from '../store/modules/song'

  export default {
    components: { Card, Button },
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
        console.log("active song")
        console.log(this.activeSong)
        this.$nextTick(() => {
            if(this.activeSong.id != null) {
                const reference =  'surf' + this.activeSong.id
                const wave = this.$refs[reference][0].waveSurfer
                console.log("mounted + wavesurfer")
                console.log(this.$refs[reference])
                const currentProgress = this.activeSong.currentProgress
                console.log("current progress")
                console.log(currentProgress)
                wave.on('ready', function() {
                    wave.setVolume(0.1)
                    console.log(currentProgress)
                    wave.skip(currentProgress)
                    wave.play()
                    if (wave.getActivePlugins().minimap) {
                        wave.destroyPlugin('minimap')
                    }
                    wave.registerPlugins([
                        MinimapPlugin.create({
                        container: '#bottomWaveSurf',
                        waveColor: '#d1d4e3',
                        barWidth: 3,
                        barHeight: 2,
                        height: 60,
                        progressColor: '#6d6df6',
                        }),
                    ]);
                })
                const songObj = this.songArray
                wave.on('audioprocess', function() {
                    songObj.setCurrentProgress(wave.getCurrentTime().toFixed())
                });
            }
        });
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
                console.log(waveSurfer.getCurrentTime().toFixed())
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
  