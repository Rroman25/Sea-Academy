<template>
  <div class="price">
    <div class="price-title container">
      Стоимость обучения
    </div>
    <div class="price-slider container hidden__mobile">
      <div class="price-slider__item">
        <div class="price-slider__item_subtitle">Пакет</div>
        <div class="price-slider__item_title">
          Самостоятельный
        </div>
        <div class="price-slider__item_sum">
          24 800<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            Доступ ко всем урокам
          </div>
          <div class="price-slider__item_list-item">
            Доступ к словарику
          </div>
          <div class="price-slider__item_list-item">
            Домашние задание + тесты
          </div>
          <div class="price-slider__item_list-item">
            Доступ в телеграмм-канал для общения на английском
          </div>
        </div>
        <main-button :view="'form'" class="price-slider__item_button">
          Купить
        </main-button>
      </div>
      <div class="price-slider__item">
        <div class="price-slider__item_subtitle">Пакет</div>
        <div class="price-slider__item_title">
          С обратной связью
        </div>
        <div class="price-slider__item_sum">
          31 900<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            Доступ ко всем урокам
          </div>
          <div class="price-slider__item_list-item">
            Доступ к словарику
          </div>
          <div class="price-slider__item_list-item">
            Домашние задание + тесты
          </div>
          <div class="price-slider__item_list-item">
            Доступ в телеграмм-канал для общения на английском
          </div>
          <div class="price-slider__item_list-item">
            Обратная связь от куратора
          </div>
          <div class="price-slider__item_list-item">
            Проверка домашних заданий
          </div>
          <div class="price-slider__item_list-item">
            Спикинг клаб раз в неделю
          </div>
          <div class="price-slider__item_list-item">
            Планер-учебник в подарок
          </div>
        </div>
        <main-button :view="'form'">
          Купить
        </main-button>
      </div>
      <div class="price-slider__item">
        <div class="price-slider__item_subtitle">Пакет</div>
        <div class="price-slider__item_title">
          С учителем
        </div>
        <div class="price-slider__item_sum">
          44 700<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            Доступ ко всем урокам
          </div>
          <div class="price-slider__item_list-item">
            Доступ к словарику
          </div>
          <div class="price-slider__item_list-item">
            Домашние задание + тесты
          </div>
          <div class="price-slider__item_list-item">
            Доступ в телеграмм-канал для общения на английском
          </div>
          <div class="price-slider__item_list-item">
            Персональная помощь учителя
          </div>
          <div class="price-slider__item_list-item">
            Обратная связь от куратора
          </div>
          <div class="price-slider__item_list-item">
            Проверка домашних заданий
          </div>
          <div class="price-slider__item_list-item">
            Спикинг клаб раз в неделю
          </div>
          <div class="price-slider__item_list-item">
            Планер-учебник в подарок
          </div>
        </div>
        <main-button :view="'form'">
          Купить
        </main-button>
      </div>
    </div>
    <client-only>
      <div ref="priceSwiper" v-swiper:priceSwiper="swiperOption" class="price-slider container hidden__desktop">
        <div class="swiper-wrapper">
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_subtitle">Пакет</div>
            <div class="price-slider__item_title">
              Самостоятельный
            </div>
            <div class="price-slider__item_sum">
              24 800<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                Доступ ко всем урокам
              </div>
              <div class="price-slider__item_list-item">
                Доступ к словарику
              </div>
              <div class="price-slider__item_list-item">
                Домашние задание + тесты
              </div>
              <div class="price-slider__item_list-item">
                Доступ в телеграмм-канал для общения на английском
              </div>
            </div>
            <main-button :view="'form'" class="price-slider__item_button">
              Купить
            </main-button>
          </div>
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_subtitle">Пакет</div>
            <div class="price-slider__item_title">
              С обратной связью
            </div>
            <div class="price-slider__item_sum">
              31 900<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                Доступ ко всем урокам
              </div>
              <div class="price-slider__item_list-item">
                Доступ к словарику
              </div>
              <div class="price-slider__item_list-item">
                Домашние задание + тесты
              </div>
              <div class="price-slider__item_list-item">
                Доступ в телеграмм-канал для общения на английском
              </div>
              <div class="price-slider__item_list-item">
                Обратная связь от куратора
              </div>
              <div class="price-slider__item_list-item">
                Проверка домашних заданий
              </div>
              <div class="price-slider__item_list-item">
                Спикинг клаб раз в неделю
              </div>
              <div class="price-slider__item_list-item">
                Планер-учебник в подарок
              </div>
            </div>
            <main-button :view="'form'">
              Купить
            </main-button>
          </div>
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_subtitle">Пакет</div>
            <div class="price-slider__item_title">
              С учителем
            </div>
            <div class="price-slider__item_sum">
              44 700<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                Доступ ко всем урокам
              </div>
              <div class="price-slider__item_list-item">
                Доступ к словарику
              </div>
              <div class="price-slider__item_list-item">
                Домашние задание + тесты
              </div>
              <div class="price-slider__item_list-item">
                Доступ в телеграмм-канал для общения на английском
              </div>
              <div class="price-slider__item_list-item">
                Персональная помощь учителя
              </div>
              <div class="price-slider__item_list-item">
                Обратная связь от куратора
              </div>
              <div class="price-slider__item_list-item">
                Проверка домашних заданий
              </div>
              <div class="price-slider__item_list-item">
                Спикинг клаб раз в неделю
              </div>
              <div class="price-slider__item_list-item">
                Планер-учебник в подарок
              </div>
            </div>
            <main-button :view="'form'">
              Купить
            </main-button>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </client-only>
  </div>
</template>

<script>
import MainButton from '../buttons/MainButton'
export default {
  name: 'Price',
  components: { MainButton },
  data () {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.price {
  background: url("../../assets/images/second-price-f-bg.png") no-repeat center p2r(0);
  background-size: cover;
  height: p2r(1040);
  @include sm {
    background: url("../../assets/images/price-f-bg-sm.png") no-repeat center p2r(0);
    background-size: contain;
    height: unset;
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    margin-bottom: p2r(80);
    text-align: center;
    padding-top: p2r(160);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      padding-top: p2r(63);
      margin-bottom: p2r(26);
    }
  }
  &-description {
    font-family: $raleway-bold;
    font-size: p2r(16);
    line-height: p2r(24);
    width: p2r(730);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: p2r(40);
    @include sm {
      width:unset;
      padding-left: p2r(23);
      padding-right: p2r(23);
      margin-bottom: p2r(38);
    }
  }
  &-button {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: p2r(80);
    display: block;
    @include sm {
      display: block;
      width: p2r(312);
      margin-left: p2r(24);
      margin-right: p2r(24);
      margin-bottom: p2r(40);
    }
  }
  &-slider {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    @include sm {
      display: block;
      justify-content: unset;
    }
    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
      @include sm {
        width: max-content;
      }
    }
    &__item {
      width: p2r(347);
      background-color: $white;
      padding: p2r(40) p2r(24) p2r(24);
      border-radius: p2r(24);
      //box-shadow: 0 p2r(24) p2r(40) rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @include sm {
        width: p2r(320);
        margin-right: p2r(20);
      }
      &_subtitle {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: p2r(16);
        font-family: $raleway-exta-bold;
        line-height: p2r(24);
      }
      &_title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
        width: p2r(307);
        line-height: p2r(48);
        margin-bottom: p2r(40);
        text-align: center;
        @include sm {
          font-size: p2r(24);
          line-height: p2r(32);
          margin-bottom: p2r(24);
        }
      }
      &_sum {
        font-family: $outfit-exta-bold;
        font-size: p2r(56);
        line-height: p2r(64);
        color: $blue;
        text-align: center;
        margin-bottom: p2r(40);
        position: relative;
        @include sm {
          font-size: p2r(48);
          line-height: p2r(56);
          margin-bottom: p2r(24);
        }
        sup {
          font-family: $raleway-exta-bold;
          font-size: p2r(24);
          position: absolute;
          top: p2r(-17);
          margin-left: p2r(9);
          @include sm {
            top: p2r(-12);
          }
        }
      }
      &_list {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        display: flex;
        flex-direction: column;
        margin-bottom: p2r(31);
        padding-left: p2r(9);
        @include sm {
          margin-bottom: p2r(16);
        }
        &-item {
          display: flex;
          align-items: center;
          margin-bottom: p2r(8);
          &::before {
            content: '';
            display: block;
            width: p2r(6);
            height: p2r(6);
            background-color: $blue;
            border-radius: 50%;
            margin-right: p2r(16);
          }
        }
      }
      &_button {
        // margin-top: auto;
        display: block;
        margin-top: auto;
        margin-bottom: 0;
      }
    }
  }
}

</style>
<style lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.swiper-pagination {
  @include sm {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: p2r(73);
    margin-top: p2r(33);
  }
}
.swiper-pagination-bullet {
  @include sm {
    border-radius: 50%;
    width: p2r(6);
    height: p2r(6);
    background: $gray;
    &:not(:last-child) {
      margin-right: p2r(18);
    }
  }
}
.swiper-pagination-bullet-active {
  @include sm {
    background: $blue;
  }
}
</style>
