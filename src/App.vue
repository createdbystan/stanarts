<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
    export default {
      name: 'App',
        components: {
          Header,
          Footer
        }
    }
</script>

<style lang="scss">
  @import './assets/styles/variables.scss';
  @import './assets/styles/main.scss';
  @import './assets/styles/media-queries.scss';
</style>
