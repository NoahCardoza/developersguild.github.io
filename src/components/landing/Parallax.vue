<template>
  <v-parallax
    dark
    height="300"
    :src="require('@/assets/parallax.jpg')">
    <v-layout
      id="parallax-overlay"
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-light mb-3">Developers' Guild - De Anza</h1>
      <h4 class="subheading">A project based programming club.</h4>
    </v-layout>
  </v-parallax>
</template>

<style>
/*
  removed padding from the sides so the
  #parallax-overlay covers the whole image
*/
.v-parallax__content {
  padding: 0;
}

/*
  used to overlay a semi transparent dark tint
  to increase text contrast and legibility
*/
#parallax-overlay {
  background-color: #0000006F;
  text-shadow: 0px 0px 30px black;
}
</style>
