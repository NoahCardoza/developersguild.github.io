<template>
  <div>
    <Parallax/>
    <ContactUs/>
  </div>
</template>

<script>
import ContactUs from '@/components/landing/ContactUs'
import Parallax from '@/components/landing/Parallax'

export default {
  name: 'Landing',
  components: {
    ContactUs,
    Parallax
  }
}
</script>

<style>
</style>
