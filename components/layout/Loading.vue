<template>
  <div v-if="loading" class="loader">
    <div class="cssload-container">
      <div class="cssload-speeding-wheel" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  .cssload-container {
    width: 100%;
    min-height: unset;
    text-align: center;
  }
  .cssload-speeding-wheel {
    width: $global300 / 2;
    height: $global300 / 2;
    margin: 0 auto;
    border: 3px solid $white;
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: cssload-spin 575ms infinite linear;
    -o-animation: cssload-spin 575ms infinite linear;
    -ms-animation: cssload-spin 575ms infinite linear;
    -webkit-animation: cssload-spin 575ms infinite linear;
    -moz-animation: cssload-spin 575ms infinite linear;
  }

  @keyframes cssload-spin {
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-o-keyframes cssload-spin {
    100% {
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-ms-keyframes cssload-spin {
    100% {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes cssload-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes cssload-spin {
    100% {
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
