<template>
    <div class="row">
        <h1>Faq Page</h1>
        <!-- <main-player></main-player> -->
    </div>
</template>

<script>
  import MainPlayer from '../components/MainPlayer.vue';
  export default {
    components: { MainPlayer },
    middleware: 'auth',
    data: () => ({
    }),
    methods: {
    }
  }
</script>
  