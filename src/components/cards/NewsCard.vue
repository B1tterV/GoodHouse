<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useRouter } from 'vue-router';

defineProps({
  image: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
})

const router = useRouter()
</script>

<template>
    <div
        class="news-card"
        @click="router.push(link)"
    >
        <div class="news-card__image">
            <img :src="image" :alt="description">
        </div>
        <div class="news-card__content">
            <div class="date">
                {{ dayjs(date).locale('ru').format("D MMMM") }}
            </div>
            <div class="description">
                {{ description }}
            </div>
            <vue-router class="link" :to="link">Читать</vue-router>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news-card{
    cursor: pointer;
    max-width: 300px;
    &__image{
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 10px;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    &__content{
        padding: 16px;
        border-left: 1px solid transparent;

        .date{
            @include UI-16-20-500;
            margin-bottom: 4px;
            color: $text-secondary;
        }

        .description{
            @include UI-18-24-400;
            display: flex;
            align-items: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 16px;
            height: 40px;
        }

        .link{
            @include UI-16-20-500;
            color: $text-link;
        }
    }

    &:hover {
        .news-card__content{
            border-left: 1px solid $block-red;
        }
    }
}
</style>