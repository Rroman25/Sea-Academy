<template>
  <div class="container error-page">
    <div class="error-page__title">
      На этой странице ничего нет.
    </div>
    <div class="error-page__images">
      {{ code }}
    </div>
    <div class="error-page__message">
      Наша
      <a href="tel: 8 (800) 775 82 33" class="error-page__link hover-animation">
        команда поддержки
      </a>
      с удовольствием поможет найти то, что нужно или вы можете
      <nuxt-link to="/" class="error-page__link hover-animation">
        вернуться на главную
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () {
        return {
          statusCode: 400
        }
      }
    }
  },
  computed: {
    code () {
      return this.error.statusCode || 404
    }
  },
  head () {
    return {
      title: `Ошибка ${this.code}: Страница не найдена`
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/base/grid';
@import '../assets/style/base/colors';
@import '../assets/style/base/fonts';

.error-page {
  margin-top: px2rem(168);
  margin-bottom: px2rem(262);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: $mobile-break-point) {
    margin-top: px2rem(80);
    margin-bottom: px2rem(130-82);
    text-align: left;
  }
  &__link {
    position: relative;
    &:after {
      content: '';
      width: 100%;
      position: absolute;
      left: px2rem(2);
      bottom: px2rem(-5);
    }
  }
  &__images {
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
  &__title {
    margin-bottom: px2rem(40);
    font-size: px2rem(60);
    font-family: $roboto-regular;
    line-height: 115%;

    @media (max-width: $mobile-break-point) {
      margin-bottom: px2rem(30);
      text-align: center;
      font-size: px2rem(30);
      line-height: px2rem(34.5);
    }
  }
  &__message {
    font-size: px2rem(16.03);
    font-family: $roboto-regular;
    line-height: px2rem(23.41);
    opacity: 0.7;

    @media (max-width: $mobile-break-point) {
      text-align: center;
    }
  }
}
</style>
