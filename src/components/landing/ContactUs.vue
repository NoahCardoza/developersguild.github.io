<template>
  <v-container id="contact-us" tag="section">
    <v-card color="secondary" class="pa-3">
      <v-container grid-list-xl pa-0>
        <v-layout wrap>
          <v-flex xs12 md5>
            <div class="font-weight-bold subheading mb-3">Recive Updates</div>
            <p>
              Enter your email address to subscribe club updates
              and receive event notifications and meeting
              reminders by email.
            </p>
            <v-form
              ref="form"
              target="_blank"
              :action="'https://formspree.io/' + contact.sendTo"
              method="POST">
              <v-layout wrap pa-2>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  name="email"
                  solo
                  style="max-width: 400px;"
                  required
                ></v-text-field>
                <v-btn
                  :block="$vuetify.breakpoint.xsOnly"
                  class="ma-0"
                  color="primary"
                  style="height: 48px"
                  @click="submit"
                >
                  Subscribe
                </v-btn>
              </v-layout>
            </v-form>
          </v-flex>
          <v-flex
            xs12
            md6
            offset-md1
          >
            <div class="font-weight-bold subheading">Contact</div>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar
                  color="info"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    email
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>EMAIL</v-list-tile-title>
                <v-list-tile-sub-title>
                  <a target="_blank" :href="'mailto:' + contact.email">{{ contact.email }}</a>
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="info"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    map
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>ADDRESS</v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ contact.address }}
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="info"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    phone
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>PHONE</v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ contact.phone }}
                </v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    console.log(this.contact)
  },
  data () {
    return {
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: mapState(['contact']),
  methods: {
    submit () {
      const { form } = this.$refs
      console.log(form)
      if (form.validate()) {
        form.$el.submit()
      }
    }
  }
}
</script>
