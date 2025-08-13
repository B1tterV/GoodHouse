<script setup lang="ts">
// Modules
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Components
import BaseSwiper from '@/components/swipers/BaseSwiper.vue';
import DocumentCard from '@/components/cards/DocumentCard.vue';

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true }
})

const router = useRouter()

const slidesPerView = ref<number>(5);

const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 1439 ? 3 : window.innerWidth <= 1720 ? 4 : 5;
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
    <div class="docs-swiper wrapper">
        <div class="docs-swiper__header">
            <div class="title">{{ title }}</div>
        </div>
        <div class="docs-swiper__content">
            <BaseSwiper
                :slides-per-view="slidesPerView"
                :space-between="30"
            >
                <template
                    v-for="(docsCard, docsCardIndex) in items"
                    :key="`docsCard-${docsCardIndex}`"
                >
                    <DocumentCard
                        :tag="docsCard.tag"
                        :img="docsCard.img"
                        :smallInfo="docsCard.smallInfo"
                        :description="docsCard.description"
                        :linkText="docsCard.linkText"
                        :link="docsCard?.link ? docsCard.link : '/'"
                    />
                </template>
            </BaseSwiper>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.base-swiper) {
    .base-swiper__arrow{
        bottom: inherit;
        top: 100px;
    }
    .base-swiper__arrow_prev{
        left: -25px;
    }
    .base-swiper__arrow_next{
        right: -25px;
    }
}

.docs-swiper {
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
}
</style>