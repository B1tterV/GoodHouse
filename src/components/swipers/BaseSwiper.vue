<script setup lang="ts">
// Icons
import ArrowRightIcon from '@/assets/icons/arrow-narrow-right.svg'

// Modules
import { Navigation } from 'swiper/modules';
import { ref, useSlots } from 'vue';

// Components
import { Swiper, SwiperSlide } from 'swiper/vue';
import BaseButton from '@/components/common/BaseButton.vue';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Types
import type { Swiper as SwiperType } from 'swiper'

defineProps({
  slidesPerView: { type: Number, default: 1 },
  spaceBetween: { type: Number, default: 50 },
  navigation: { type: Boolean, default: true }
})

const modules = [Navigation]

const swiperInstance = ref<SwiperType | null>(null)

const slots = useSlots()

/**
 * Извелкаем ноды из слотов
 */
const getSlideNodes = () => {
  if (!slots.default) return []
  const slotContent = slots.default()
  return slotContent.length === 1 && Array.isArray(slotContent[0].children) 
    ? slotContent[0].children 
    : slotContent
}

// Навигация
const goNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext()
}

const goPrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev()
}
</script>

<template>
    <div class="base-swiper">
        <swiper
            :slidesPerView="slidesPerView"
            :space-between="spaceBetween"
            :modules="modules"
            @swiper="(swiper) => swiperInstance = swiper"
        >
            <swiper-slide v-for="(node, index) in getSlideNodes()" :key="index">
                <component :is="node" />
            </swiper-slide>
        </swiper>
        <BaseButton
            color="white"
            :icon="ArrowRightIcon"
            class="base-swiper__arrow base-swiper__arrow_prev"
            @click="goPrev()"
        />
        <BaseButton
            color="white"
            :icon="ArrowRightIcon"
            class="base-swiper__arrow base-swiper__arrow_next"
            @click="goNext()"
        />
    </div>
</template>

<style scoped lang="scss">
:deep(.base-button_white) {
    svg {
        color: $icon-gray;
    }
}

.base-swiper{
    position: relative;
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
}

:deep(.swiper-slide){
    height: auto;
}
</style>
