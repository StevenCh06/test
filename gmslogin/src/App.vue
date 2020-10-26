<template>
  <div id="app">
    <div id="nav">
      <Navigation/>
    </div>
    <router-view/>
  </div>

</template>

<script>
import Navigation from '@/components/layout/Navigation'

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

@import './scss/App.scss';
  
</style>
