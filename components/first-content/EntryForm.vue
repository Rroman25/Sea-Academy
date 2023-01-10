<template>
  <div class="form">
    <div class="form-content">
      <div class="form-content__title">
        {{ title }}
      </div>
      <div class="form-content__description">
        {{ description }}
      </div>
      <form>
        <div class="inputs-wrap">
          <input placeholder="Имя" type="text">
          <input placeholder="Телефон" type="text">
        </div>
        <main-button :view="'form'" class="form-button" @click.native.prevent="entry">
          Записаться
        </main-button>
        <div class="agree">
          Оставляя заявку, вы принимаете условия <a href="#">соглашения</a>
        </div>
      </form>
    </div>
    <div class="form-bg">
      <slot />
    </div>
    <main-modal
      :show="isShowEntryModal"
      :title="'Вы записаны!'"
      :text="'Отличная работа!'"
      :text-info="'Скоро мы с вами свяжемся для дальнейших инструкций'"
      @close="isShowEntryModal = false"
    />
  </div>
</template>

<script>
import MainButton from '../buttons/MainButton'
import MainModal from '../modals/MainModal'
export default {
  name: 'EntryForm',
  components: { MainModal, MainButton },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShowEntryModal: false
    }
  },
  methods: {
    entry () {
      this.isShowEntryModal = true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.form {
  background-color: $yellow;
  display: flex;
  justify-content: space-between;
  @include sm {
    flex-wrap: wrap;
  }
  &-content {
    padding: p2r(80) p2r(120);
    margin-left: auto;
    margin-right: auto;
    @include sm {
      padding: p2r(64) p2r(24);
    }
    &__title {
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      width: p2r(480);
      margin-bottom: p2r(32);
      @include sm {
        width: unset;
        font-size: p2r(24);
        line-height: p2r(32);
        margin-bottom: p2r(25);
      }
    }
    &__description {
      font-family: $raleway-medium;
      font-size: p2r(16);
      line-height: p2r(24);
      width: p2r(480);
      margin-bottom: p2r(40);
      @include sm {
        width: unset;
      }
    }
  }
  &-bg {
    width: p2r(720);
    @include sm {
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    img {
      display: block;
      width: 100%;
      @include sm {
        //width: 110%;
        width: auto;
        height: p2r(320);
      }
    }
  }
  form {
    .inputs-wrap {
      display: flex;
      justify-content: space-between;
      margin-bottom: p2r(24);
      @include sm {
        flex-wrap: wrap;
        margin-bottom: unset;
      }
    }
    input {
      font-family: $raleway-medium;
      font-size: p2r(16);
      padding: p2r(18) p2r(24);
      width: p2r(228);
      background-color: $white;
      border-radius: p2r(16) !important;
      color: $black-d;
      @include sm {
        width: 100%;
        margin-bottom: p2r(16);
      }
      &::placeholder {
        color: $gray;
      }
    }
    .form-button {
      background-color: $blue;
    }
    .agree {
      font-family: $raleway-medium;
      font-size: p2r(14);
      line-height: p2r(24);
      text-align: center;
      margin-top: p2r(24);
      @include sm {
        padding-left: p2r(32);
        padding-right: p2r(32);
        margin-top: p2r(18);
      }
      a {
        font-family: $raleway-exta-bold;
        color: $black-d;
      }
    }
  }
}
</style>
