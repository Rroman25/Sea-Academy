<template>
  <div class="index-page colors__background_blue-l">
    <Header @showBurgerMenu="showBurgerMenu" />
    <first-content v-show="!isShowBurgerMenu" v-if="content === 1" />
    <second-content v-show="!isShowBurgerMenu" v-else-if="content === 2" />
    <third-content v-show="!isShowBurgerMenu" v-else />
    <Footer v-show="!isShowBurgerMenu" />
  </div>
</template>

<script>

import Header from '../components/header/Header'
import FirstContent from '../components/FirstContent'
import SecondContent from '../components/SecondContent'
import ThirdContent from '../components/ThirdContent'
import Footer from '~/components/footer/Footer.vue'
export default {
  components: { ThirdContent, SecondContent, FirstContent, Footer, Header },
  scrollToTop: true,
  data () {
    return {
      isShowBurgerMenu: false
    }
  },
  computed: {
    content () {
      return this.$store.getters['content/get']
    }
  },
  async mounted () {},
  methods: {
    showBurgerMenu (val) {
      this.isShowBurgerMenu = val
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/base/grid';
@import '../assets/style/mixins/grid';
@import '../assets/style/base/colors';
@import '../assets/style/base/fonts';
.index-page {}
</style>
