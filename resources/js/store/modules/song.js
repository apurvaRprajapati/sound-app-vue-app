import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
    state: () => ({ 
        songs:[
            {
                'id': 1,
                'url': "http://127.0.0.1:8000/testsong.mp3"
            },
            {
                'id': 2,
                'url': "http://127.0.0.1:8000/testsong.mp3"
            }
        ],
        prevRef:null,
        activeSong: {
            id:null,
            url:'',
            currentProgress:0
        }
    }),
    // getters: {
    //   doubleCount: (state) => state.count * 2,
    // },
    actions: {
      setActiveSong(id,url) {
        this.activeSong.id = id
        this.activeSong.url = url
      },
      setCurrentProgress(progress){
        console.log(progress)
        this.activeSong.currentProgress = progress
      },
      setPrevRef(refName) {
        this.prevRef = refName
      }
    }
  })
