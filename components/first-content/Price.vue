<template>
  <div class="price">
    <div class="price-title container">
      Стоимость обучения
    </div>
    <div class="price-description container">
      Бесплатный пробный урок: на пробном уроке наш учитель пообщается с вашим ребенком и подберет для вас
      индивидуальную систему обучения.
    </div>
    <main-button class="price-button">
      Записаться
    </main-button>
    <div class="price-slider container hidden__mobile">
      <div class="price-slider__item">
        <div class="price-slider__item_title">
          1 месяц
        </div>
        <div class="price-slider__item_sum">
          11 900<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            20 уроков в месяц
          </div>
        </div>
        <main-button :view="'form'" class="price-slider__item_button" @click.native="buy">
          Купить
        </main-button>
      </div>
      <div class="price-slider__item">
        <div class="price-slider__item_title">
          3 месяца
        </div>
        <div class="price-slider__item_sum">
          22 000<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            20 уроков в месяц
          </div>
          <div class="price-slider__item_list-item">
            в пакет входит 60 уроков
          </div>
        </div>
        <main-button :view="'form'" @click.native="buy">
          Купить
        </main-button>
      </div>
      <div class="price-slider__item">
        <div class="price-slider__item_title">
          6 месяцев
        </div>
        <div class="price-slider__item_sum">
          39 000<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div class="price-slider__item_list-item">
            20 уроков в месяц
          </div>
          <div class="price-slider__item_list-item">
            в пакет входит 120 уроков
          </div>
        </div>
        <main-button :view="'form'" @click.native="buy">
          Купить
        </main-button>
      </div>
    </div>
    <client-only>
      <div ref="priceSwiper" v-swiper:priceSwiper="swiperOption" class="price-slider container hidden__desktop">
        <div class="swiper-wrapper">
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_title">
              1 месяц
            </div>
            <div class="price-slider__item_sum">
              11 900<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                20 уроков в месяц
              </div>
            </div>
            <main-button :view="'form'" class="price-slider__item_button" @click.native="buy">
              Купить
            </main-button>
          </div>
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_title">
              3 месяца
            </div>
            <div class="price-slider__item_sum">
              22 000<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                20 уроков в месяц
              </div>
              <div class="price-slider__item_list-item">
                в пакет входит 60 уроков
              </div>
            </div>
            <main-button :view="'form'" @click.native="buy">
              Купить
            </main-button>
          </div>
          <div class="price-slider__item swiper-slide">
            <div class="price-slider__item_title">
              6 месяцев
            </div>
            <div class="price-slider__item_sum">
              39 000<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div class="price-slider__item_list-item">
                20 уроков в месяц
              </div>
              <div class="price-slider__item_list-item">
                в пакет входит 120 уроков
              </div>
            </div>
            <main-button :view="'form'" @click.native="buy">
              Купить
            </main-button>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </client-only>
    <main-modal
      :show="isShowPayModal"
      :title="'Спасибо за оплату!'"
      :text="'Вы великолепны!'"
      :text-info="'Вся необходимая информация отправлена вам на email.'"
      @close="isShowPayModal = false"
    />
  </div>
</template>

<script>
import MainButton from '../buttons/MainButton'
import MainModal from '../modals/MainModal'
export default {
  name: 'Price',
  components: { MainModal, MainButton },
  data () {
    return {
      isShowPayModal: false,
      swiperOption: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 28,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      }
    }
  },
  methods: {
    buy () {
      this.isShowPayModal = true
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
  background: url("../../assets/images/price-f-bg.png") no-repeat center p2r(0);
  background-size: contain;
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
    margin-bottom: p2r(40);
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
      @include sm {
        width: p2r(320);
        margin-right: p2r(20);
      }
      &_title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
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
