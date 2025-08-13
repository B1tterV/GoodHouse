<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
})
</script>

<template>
    <div class="service-card">
        <div class="service-card__image">
            <img :src="src" :alt="title" width="244" height="188">
        </div>
        <div class="service-card__content">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
            <router-link :to="link" class="more">Подробнее</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.service-card{
    &__image{
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 10px;
        min-width: 244px;
        height: 188px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover
        }
    }
    &__content{
        padding: 16px 0;
        .title{
            @include UI-20-100p-400;
            margin-bottom: 8px;
        }
        .description{
            @include UI-18-24-400;
            display: -webkit-box;
            color: $text-dark-opacity-06;
            margin-bottom: 12px;
            overflow: hidden;
            -webkit-line-clamp: 4;
            line-clamp: 4; 
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
        }
        .more{
            @include UI-16-20-500;
            color: $text-link;
            text-decoration: none;
        }
    }
}
</style>