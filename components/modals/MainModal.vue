<template>
  <transition name="fade">
    <div v-if="show" class="modal" @click.self="close">
      <div class="modal-wrapper">
        <div class="modal-wrapper__title">
          {{ title }}
        </div>
        <div class="modal-wrapper__text">
          <p>{{ text }}</p>
          <p>{{ textInfo }}</p>
        </div>
        <main-button :view="'form'" @click.native="close">
          OK
        </main-button>
      </div>
    </div>
  </transition>
</template>

<script>
import MainButton from '../buttons/MainButton'
export default {
  name: 'MainModal',
  components: { MainButton },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    textInfo: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  &-wrapper {
    width: p2r(312);
    background-color: $white;
    border-radius: p2r(24);
    padding: p2r(24);
    &__title {
      font-family: $raleway-exta-bold;
      font-size: p2r(24);
      line-height: p2r(32);
      margin-bottom: p2r(24);
      color: $black-d;
    }
    &__text {
      font-family: $raleway-medium;
      font-size: p2r(16);
      line-height: p2r(24);
      color: $black-d;
      margin-bottom: p2r(24);
    }
  }
}
</style>
