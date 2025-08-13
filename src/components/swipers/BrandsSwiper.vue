<script setup lang="ts">
// Modules
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'

// Components
import BaseSwiper from '@/components/swipers/BaseSwiper.vue';
import ProductCard from '@/components/cards/ProductCard.vue'

// Types
import type { PropType } from 'vue';

defineProps({
  title: { type: String, required: true },
  isРighlightingTitle: { type: Boolean, required: true },
  link: { type: Object as PropType<{ name: "", href: "" }>, required: true },
  items: { type: Array, required: true }
})

const router = useRouter()

const slidesPerView = ref<number>(5);

const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 1439 ? 1 : window.innerWidth <= 1720 ? 2 : 3;
};

onMounted(() => {
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView(); // Инициализация при загрузке
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
    <div class="brands-swiper wrapper">
        <div class="brands-swiper__content">
            <BaseSwiper
                :slides-per-view="slidesPerView"
                :space-between="24"
            >
                <template
                    v-for="(productCard, productCardIndex) in items"
                    :key="`productCard-${productCardIndex}`"
                >
                <ProductCard
                    :tag="productCard.tag"
                    :image="productCard.image"
                    :prev-price="productCard.prevPrice"
                    :current-price="productCard.currentPrice"
                    :code="productCard.code"
                    :description="productCard.description"
                />
                </template>
            </BaseSwiper>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.base-swiper) {
    .base-swiper__arrow{
        bottom: 230px;
    }
    .base-swiper__arrow_prev{
        left: -20px;
    }
    .base-swiper__arrow_next{
        right: -16px;
    }
}

:deep(.swiper-slide) {
    display: flex;
    justify-content: center;
}

.brands-swiper {
    // width: 100%;
    &__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 51px;

        .title{
            @include UI-24-20-400;
            &_highlight{
                @include UI-28-100p-500;
                display: flex;
                align-items: center;
                justify-content: center;
                background: $block-highlight;
                border-radius: 8px;
                padding: 2px 8px;
            }
        }

        .link{
            @include UI-16-20-500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
            color: $text-link;

            svg {
                transform: rotate(-90deg);
                color: $icon-red;
            }
        }

    }
    :deep(.product-card) {
        width: 277px;

        .product-card__image{
            background: $block-light !important;
        }
    }
}
</style>