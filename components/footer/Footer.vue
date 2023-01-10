<template>
  <div class="footer">
    <div class="container">
      <div
        class="footer-row"
      >
        <div class="footer-row-logo">
          <div class="footer-row-logo-main">
            <Logo />
          </div>
          <div class="footer-row-logo-sub">
            <SubLogo />
          </div>
        </div>
        <div class="footer-row-list">
          <div v-for="item of list" :key="item.id">
            {{ item.name }}
          </div>
        </div>
        <MainButton class="footer-row-btn hidden__mobile">
          Бесплатный пробный урок
        </MainButton>
        <MainButton class="footer-row-btn hidden__desktop" :view="'form'">
          Бесплатный пробный урок
        </MainButton>
      </div>
      <div
        class="footer-row"
      >
        <div class="footer-row-info">
          <div>
            Оренбург, улица 8 Марта, дом 42, ТРЦ “Восход”, 3 этаж
          </div>
          <div>
            <a href="tel:+88000000000">8 800 000 00 00</a>
          </div>
          <div
            class="footer-row-info-email"
          >
            <a href="mailto:email@example.com">email@example.com</a>
          </div>
        </div>
        <div class="footer-row-social">
          <div>
            <a href="#" target="_blank"><Ints /></a>
          </div>
          <div>
            <a href="#" target="_blank">
              <Tg />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubLogo from 'assets/images/sub-logo.vue'
import Logo from 'assets/images/logo.vue'
import Ints from 'assets/images/ints.vue'
import Tg from 'assets/images/tg.vue'
import MainButton from '~/components/buttons/MainButton.vue'
export default {
  name: 'Footer',
  components: {
    MainButton,
    Logo,
    SubLogo,
    Ints,
    Tg
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'Почему мы?'
        },
        {
          id: 2,
          name: 'О нас'
        },
        {
          id: 3,
          name: 'Занятия'
        },
        {
          id: 4,
          name: 'Стоимость'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_index.scss';
a[href^="tel:"] {
  font-weight: 500;
  color: $white;
  font-size: p2r(16);
}
a[href^="mailto:"] {
  font-weight: 500;
  color: $white;
  font-size: p2r(16);
}
.footer {
  background-color: $black;
  width: 100%;
  padding-top: p2r(86.75);
  height: p2r(352);
  @include sm {
    height: p2r(664);
    padding-top: p2r(70);
  }
  &-row {
    color: $white;
    display: flex;
    justify-content: space-between;
    @include sm {
      &:first-child {
        flex-direction: column;
        height: p2r(280);
      }
      &:last-child {

      }
    }
    &:last-child {
      margin-top: p2r(58);
    }
    &-logo {
      width: p2r(208.29);
      @include sm {
        width: 100%;
      }
      &-main {
        @include sm {
          justify-content: center;
          display:flex;
          margin-bottom: p2r(7);
        }
      }
      &-sub {
        display: flex;
        justify-content: center;
        width: p2r(180);
        @include sm {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &-list {
      display: flex;
      width: p2r(411);
      justify-content: space-between;
      font-family: Raleway-Medium;
      font-style: normal;
      font-weight: 700;
      height: p2r(44);
      font-size: p2r(16);
      line-height: p2r(24);
      align-items: center;
      @include sm {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: p2r(40);
        height: p2r(144);
        margin-bottom: p2r(48);
      }
      div {
        letter-spacing: p2r(0.2);
        @include sm {
          display: flex;
          margin-top: p2r(1);
          justify-content: center;
          letter-spacing: p2r(0.5);
          align-items: center;
          &:nth-child(1) {
            margin-top: p2r(1);
          }
          &:nth-child(2) {
             margin-top: p2r(17);
            letter-spacing: p2r(.3);
          }
          &:nth-child(3) {
            margin-top: p2r(16);
            letter-spacing: p2r(.5);
          }
          &:nth-child(4) {
            margin-top: p2r(16);
            letter-spacing: p2r(.5);
          }
        }
        &:hover {
          color: $blue;
          cursor: pointer;
        }
      }
    }
    &-info {
      font-family: Raleway-Medium;
      font-style: normal;
      font-weight: 500;
      color: $white;
      font-size: p2r(16);
      line-height: p2r(24);
      letter-spacing: .01px;
      @include sm {
        display:flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      &-email {
        letter-spacing: .2px;
      }

    }
    &-social {
      display: flex;
      align-items:flex-end;
      width:p2r(72);
      justify-content: space-between;
      @include sm {
        width: p2r(70);
        margin-top: p2r(32);
        margin-bottom: p2r(39);
      }
      div {
        &:hover {
          cursor: pointer;
        }
      }
    }
    &-btn {
      height:p2r(56);
      width: p2r(261);
      display: flex;
      position: relative;
      bottom: p2r(8);
      letter-spacing: p2r(.4);
      padding-left: p2r(24);
      padding-right: p2r(24);
      @include sm {
        width: 95%;
        display: flex;
        justify-content: center;
        letter-spacing: p2r(.7);
        margin-left: auto;
        margin-right: auto;
      }
    }
    @include sm {
      &:last-child {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
    }
}
}
</style>
