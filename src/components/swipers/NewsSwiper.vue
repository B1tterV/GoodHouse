<script setup lang="ts">
// Modules
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'

// Components
import BaseSwiper from '@/components/swipers/BaseSwiper.vue';
import NewsCard from '@/components/cards/NewsCard.vue';

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
    <div class="news-swiper wrapper">
        <div class="news-swiper__header">
            <div class="title" :class="{'title_highlight': isРighlightingTitle}">{{ title }}</div>
            <div class="link" @click="router.push(link.href)">
                {{ link.name }}
                <ChevronDownIcon/>
            </div>
        </div>
        <div class="news-swiper__content">
            <BaseSwiper
                :slides-per-view="slidesPerView"
                :space-between="30"
            >
                <template
                    v-for="(newsCard, newsCardIndex) in items"
                    :key="`newsCard-${newsCardIndex}`"
                >
                <NewsCard
                    :image="newsCard.image"
                    :date="newsCard.date"
                    :description="newsCard.description"
                    :link="newsCard.link"
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

.news-swiper {
    padding-top: 60px;
    padding-bottom: 60px;
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
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