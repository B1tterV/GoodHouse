<script setup lang="ts">
// Icons
import ArrowRightIcon from '@/assets/icons/arrow-narrow-right.svg'

// Modules
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, EffectFade } from 'swiper/modules'

// Components
import BaseButton from '@/components/common/BaseButton.vue';

// Types
import type { Swiper as SwiperType } from 'swiper'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/effect-fade'

const props = defineProps<{
  images: string[]
}>()

const thumbsSwiper = ref<SwiperType | null>(null)
const mainSwiper = ref<SwiperType | null>(null)

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper
}

const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper
}

// Навигация
const goNext = () => {
  if (mainSwiper.value) mainSwiper.value.slideNext()
}

const goPrev = () => {
  if (mainSwiper.value) mainSwiper.value.slidePrev()
}
</script>

<template>
  <div class="product-gallery-swiper">
    <div class="product-gallery-swiper__main-slider_wrapper">
        <Swiper
          :modules="[EffectFade, Navigation, Thumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
          effect="fade"
          @swiper="setMainSwiper"
          class="product-gallery-swiper__main-slider"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="`Product image ${index + 1}`" class="main-image">
          </SwiperSlide>
        </Swiper>
    
        <BaseButton
            color="white"
            :icon="ArrowRightIcon"
            class="product-gallery-swiper__arrow product-gallery-swiper__arrow_prev"
            @click="goPrev()"
        />
        <BaseButton
            color="white"
            :icon="ArrowRightIcon"
            class="product-gallery-swiper__arrow product-gallery-swiper__arrow_next"
            @click="goNext()"
        />
    </div>

    <Swiper
      @swiper="setThumbsSwiper"
      :slidesPerView="6"
      :spaceBetween="8"
      :freeMode="true"
      :watchSlidesProgress="true"
      class="product-gallery-swiper__thumbs-slider"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Thumbnail ${index + 1}`" class="thumb-image">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.product-gallery-swiper {
    max-width: 774px;
    margin: 0 auto;

    &__main-slider{
        height: 600px;
        margin-bottom: 8px;

        &_wrapper{
            position: relative;
        }

        .main-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__arrow {
        z-index: 2;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);

        &_prev{
            left: 17px;
            transform: rotate(180deg);
        }
        &_next{
            right: 17px;
        }
    }

    &__thumbs-slider{
        height: 80px;

        .thumb-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            cursor: pointer;
            opacity: 1;
            transition: opacity 0.3s;
            padding: 8px;
        }

        .swiper-slide-thumb-active .thumb-image {
            opacity: 0.5;
        }
    }
}
</style>