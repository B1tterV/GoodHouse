<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';

defineProps({
  src: { type: String, required: true },
  title: { type: String, default: null },
  description: { type: String, default: null },
  buttonName: { type: String, default: null }
})
</script>

<template>
    <div class="big-swiper-card">
        <img class="big-swiper-card__image" :src="src" :alt="title || 'Card image'">
        <div
            v-if="title || description"
            class="big-swiper-card__card"
        >
            <div v-if="title" class="title">{{ title }}</div>
            <div v-if="description" class="description">{{ description }}</div>
            <BaseButton v-if="buttonName" :text="buttonName" color="white" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.big-swiper-card{
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    &__image{
        width: 100%;
        object-fit: cover;
    }
    &__card{
        position: absolute;
        left: 16px;
        bottom: 16px;
        padding: 24px;
        backdrop-filter: blur(20px);
        background: $block-dark-60p;
        border-radius: 8px;
        max-width: 369px;

        .title{
            @include UI-28-100p-400;
            color: $text-light;
        }
        .description {
            @include UI-18-24-400;
            margin-top: 8px;
            color: $text-light;
        }
        .base-button {
            @include UI-16-20-500;
            margin-top: 24px;
        }
    }
}
</style>