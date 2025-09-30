<script setup lang="ts">
// Modules
import { useRouter } from 'vue-router';

// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'

// Components
import BaseSwiper from '@/components/swipers/BaseSwiper.vue';
import NewsCard from '@/components/cards/NewsCard.vue';
import NewsCardSkeleton from '@/components/cards/NewsCardSkeleton.vue';

// Composables
import { useWindowSize } from '@/composables/useWindowSize';

// Types
import type { PropType } from 'vue';

defineProps({
  title: { type: String, required: true },
  isРighlightingTitle: { type: Boolean, required: true },
  link: { type: Object as PropType<{ name: "", href: "" }>, required: true },
  items: { type: Array, required: true }
})

const router = useRouter()

const { width: windowWidth, isLoading } = useWindowSize();

const slidesPerView = computed(() => {
  if (windowWidth.value <= 800) {
    return 1;
  } else if (windowWidth.value <= 1024) {
    return 2;
  } else if (windowWidth.value <= 1439) {
    return 3;
  } else if (windowWidth.value <= 1720) {
    return 4;
  }
  return 5;
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
                <template v-if="isLoading">
                    <template
                    v-for="index in slidesPerView"
                    :key="`news-skeleton-${index}`"
                    >
                    <NewsCardSkeleton />
                    </template>
                </template>
                
                <template v-else>
                    <template
                    v-for="(newsItem, index) in items"
                    :key="`news-${index}`"
                    >
                    <NewsCard
                        :image="newsItem.image"
                        :date="newsItem.date"
                        :description="newsItem.description"
                        :link="newsItem.link"
                    />
                    </template>
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

    @media (max-width: 1024px) {
        :deep(.news-card) {
            max-width: 100%;
        }
    }
}
</style>