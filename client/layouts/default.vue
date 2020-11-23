<template>
  <v-app dark>
    <krakenHeader />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <krakenFooter />
  </v-app>
</template>

<script>
import krakenFooter from "@/components/General/krakenFooter.vue";
import krakenHeader from "@/components/General/krakenHeader.vue";

export default {
  components: {
    krakenFooter,
    krakenHeader,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  
}
</script>
