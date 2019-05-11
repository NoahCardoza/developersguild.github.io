<template>
  <v-toolbar
    app
    flat
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :href="link.href"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, link)"
        >
          {{ link.title }}
        </v-btn>
        <!-- TODO: implement project search? -->
        <!-- <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        /> -->
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CoreNavigation',
  computed: mapState({
    links: state => state.navigation.links
  }),
  methods: {
    ...mapMutations(['toggleDrawer']),
    onClick (e, link) {
      e.stopPropagation()
      if (link.el) {
        // { offset: -100 }
        this.$vuetify.goTo(link.el)
      }
      // if (item.to || !item.href) return
      // this.$vuetify.goTo(item.href)
    }
  }
}
</script>
