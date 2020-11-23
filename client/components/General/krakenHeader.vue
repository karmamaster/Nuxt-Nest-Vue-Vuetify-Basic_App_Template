<template>
  <div id="navigationBar">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="white lighten-4" class="pa-4" align="center" justify="center" >
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <img src="/icon.png" />
        </v-avatar>

        <div>Kraken Technologies</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, linkRef] in links" :key="icon" link :to="linkRef">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <footer :padless="true" class="sticky-card after-sticky">
    <v-card flat tile class="text-center ">
      <v-card-title min-height="70" class="justify-center paymethodBG" >
        <img
          :height="35"
          v-for="payMethod in payMethodImgs"
          :key="payMethod"
          class=""
          :src="`/images/footerImgs/${payMethod}`"
        />
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Kraken Tech</strong>
      </v-card-text>
    </v-card>
  </footer>
  </div>
  
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Home', '/'],
      ['mdi-send', 'Contact', '/contact'],
      ['mdi-delete', 'New Account', '/newaccount'],
    ],
    payMethodImgs: [
      'pay_bitcoin.png',
      'pay_payeer.png',
      'pay_paypal.png',
    ],
  }),
}
</script>


<style>
.paymethodBG {
  background-color: antiquewhite;
}

.sticky-card {
  width: 100%;
  position: fixed;
  z-index: 1;
  /* centering */
}

.after-sticky {
  bottom: 0;
}
</style>