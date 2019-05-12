<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-tile-title v-text="link.title" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'CoreDrawer',
  computed: {
    ...mapState({
      links: store => store.navigation.links
    }),
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onClick (e, link) {
      e.stopPropagation()
      // e.stopPropagation()
      // if (item.to === '/') {
      //   this.$vuetify.goTo(0)
      //   this.setDrawer(false)
      //   return
      // }
      if (link.el) {
        // { offset: -100 }
        this.$vuetify.goTo(link.el)
      }
      this.setDrawer(false)
    }
  }
}
</script>
