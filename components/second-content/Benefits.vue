<template>
  <div class="benefits">
    <div class="benefits-title container">
      Наши ученики начинают говорить на английском быстрее, ведь мы даем только самую важную информацию
    </div>
    <div class="benefits-items container">
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <Dictionary />
        </div>
        <div class="benefits-items__item_text">
          Учим только нужные слова для практики речи
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <Study />
        </div>
        <div class="benefits-items__item_text">
          Изучаем только те правила, что необходимы для разговора
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <AudioBook />
        </div>
        <div class="benefits-items__item_text">
          Даем много аудиоматериалов и практики разговора
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <Teacher />
        </div>
        <div class="benefits-items__item_text">
          Реальная помощь <br>от преподавателей
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dictionary from '~/assets/images/Dictionary.vue'
import Study from '~/assets/images/Study.vue'
import AudioBook from '~/assets/images/Audio-book.vue'
import Teacher from '~/assets/images/Teacher.vue'

export default {
  name: 'Benefits',
  components: { Teacher, AudioBook, Study, Dictionary }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.benefits {
  background: url("../../assets/images/second-benefits-f-bg.png") no-repeat;
  height: p2r(640);
  background-size: contain;
  margin-top: p2r(160);
  @include sm {
    height: p2r(960);
    margin-top: p2r(63);
  }
  &-title {
    width: p2r(1016);
    text-align: center;
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    @include sm {
      width: p2r(352);
      font-size: p2r(24);
      line-height: p2r(32);
    }
  }
  &-items {
    font-family: $raleway-medium;
    font-size: p2r(16);
    line-height: p2r(24);
    display: flex;
    justify-content: space-between;
    margin-top: p2r(80);
    @include sm {
      flex-wrap: wrap;
      margin-top: p2r(22);
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: p2r(300);
      @include sm {
        justify-content: center;
        width: p2r(312);
        margin-bottom: p2r(16);
      }
      &_image {
        width: p2r(104);
        height: p2r(104);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &_text {
        font-size: p2r(16);
        font-family: $raleway-bold;
        line-height: p2r(24);
        @include sm {
          width: 100%;
        }
      }
    }
  }
}
</style>
