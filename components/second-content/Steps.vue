<template>
  <div class="steps">
    <div class="steps-title container">
      Как проходят занятия в нашей онлайн школе
    </div>
    <div class="steps-items container">
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 1
        </div>
        <div class="steps-items__item_text">
          Можно начать обучение <span>сразу после оплаты</span>.
        </div>
        <img src="~assets/images/cards.png" alt="cards" class="steps-items__item_image">
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 2
        </div>
        <div class="steps-items__item_text">
          Проходить уроки можно в любые <span>дни и время, удобное для вас</span>. Доступ к курсу дается на <span>3 месяца</span> после оплаты.
        </div>
        <img src="~assets/images/clock.png" alt="clock" class="steps-items__item_image">
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 3
        </div>
        <div class="steps-items__item_text">
          25 уроков, которые вы можете проходить <span>в удобном для вас темпе</span>.
        </div>
        <img src="~assets/images/note.png" alt="note" class="steps-items__item_image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.steps {
  background: url("../../assets/images/second-steps-f-bg.png") no-repeat center p2r(0);
  height: p2r(664);
  @include sm {
    height: p2r(1272);
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    color: $black-d;
    text-align: center;
    padding-top: p2r(160);
    padding-bottom: p2r(80);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      padding-top: p2r(131);
      padding-bottom: p2r(40);
    }
  }
  &-items {
    display: flex;
    justify-content: space-between;
    @include sm {
      flex-wrap: wrap;
    }
    &__item {
      width: p2r(347);
      height: p2r(424);
      background-color: $blue-ll;
      border-radius: p2r(24);
      padding-top: p2r(24);
      padding-right: p2r(24);
      padding-left: p2r(24);
      position: relative;
      @include sm {
        width: p2r(312);
        height: unset;
        margin-bottom: p2r(40);
      }
      &_title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
        line-height: p2r(48);
        margin-bottom: p2r(25);
        color: $black-d;
        @include sm {
          font-size: p2r(24);
          line-height: p2r(32);
          margin-bottom: p2r(16);
        }
      }
      &_text {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        color: $black-d;
        @include sm {
          margin-bottom: p2r(178);
        }
        span {
          font-family: $raleway-bold;
        }
      }
      img {
        position: absolute;
        bottom: 0;
        transform: translateX(50%);
        right: 50%;
      }
    }
  }
}
</style>
