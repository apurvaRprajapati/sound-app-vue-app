import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
    state: () => ({ 
        songs:[
            {
                'id': 1,
                'url': "http://127.0.0.1:8000/testsong.mp3",
                'name' : 'Preparation',
                'duration': '2:48',
                'artist': 'Jonath Mann'
            },
            {
                'id': 2,
                'url': "http://127.0.0.1:8000/testsong.mp3",
                'name': 'Romantic love part 2',
                'duration': '0:48',
                'artist': 'Josiah Mann'
            },
            {
              'id': 3,
              'url': "http://127.0.0.1:8000/testsong.mp3",
              'name': 'Romantic love part 2',
              'duration': '0:48',
              'artist': 'Josiah Mann'
          },
          {
            'id': 4,
            'url': "http://127.0.0.1:8000/testsong.mp3",
            'name': 'Romantic love part 2',
            'duration': '0:48',
            'artist': 'Josiah Mann'
          },
          {
            'id': 5,
            'url': "http://127.0.0.1:8000/testsong.mp3",
            'name': 'Romantic love part 2',
            'duration': '0:48',
            'artist': 'Josiah Mann'
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
        this.activeSong.currentProgress = progress
      },
      setPrevRef(refName) {
        this.prevRef = refName
      }
    }
  })
