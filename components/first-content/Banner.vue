<template>
  <div class="first-content">
    <div class="content container">
      <h2 class="content-title">
        Научим вашего ребенка
        ГОВОРИТЬ
        на английском
      </h2>
      <main-button class="hidden__desktop" :view="'form'">
        Бесплатный пробный урок
      </main-button>
      <div class="content-image">
        <img src="~assets/images/banner-image-f.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '../buttons/MainButton'
export default {
  name: 'Banner',
  components: { MainButton }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.first-content {
  background: url("../../assets/images/banner-f-bg.png") no-repeat top center;
  background-size: cover;
  height: p2r(680);
  margin-top: p2r(-22);
  @include sm {
    background: url("../../assets/images/banner-f-bg-sm.png") no-repeat top center;
    background-size: cover;
  }
}
.content {
  font-family: $raleway-black;
  font-size: p2r(32);
  line-height: p2r(64);
  display: flex;
  align-items: center;
  @include sm {
    flex-wrap: wrap;
    font-size: p2r(21.5);
    line-height: p2r(48);
  }
  &-title {
    margin-top: p2r(-32);
    @include sm {
      margin-top: p2r(27);
      margin-bottom: p2r(40);
    }
  }
  &-image {
    img {
      width: p2r(667);
      height: p2r(680);
      @include sm {
        width: p2r(356);
        height: p2r(348);
        margin-left: p2r(-40);
      }
    }
  }
}
</style>
