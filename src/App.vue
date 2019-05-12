<template>
  <div id="app">
    <v-app dark>
      <Navigation/>
      <Drawer/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navigation: () => import('@/components/core/Navigation'),
    Drawer: () => import('@/components/core/Drawer')
  }
}
</script>

<style>
#app {
  margin-top: 40px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */

}
</style>
