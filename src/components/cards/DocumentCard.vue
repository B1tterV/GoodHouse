<script setup lang="ts">
defineProps({
  tag: { type: String, required: true },
  img: { type: String, required: true },
  smallInfo: { type: String, required: true },
  description: { type: String, required: true },
  linkText: { type: String, required: true },
  link: { type: String, required: true },
})

const router = useRouter()
</script>

<template>
    <div
        class="document-card"
        @click="router.push(link)"
    >
        <div class="document-card__image">
            <div class="tag">{{ tag }}</div>
            <img :src="img" alt="certificateCard">
        </div>
        <div class="document-card__content">
            <div class="small-info">{{ smallInfo }}</div>
            <div class="description">{{ description }}</div>
            <div class="link">{{ linkText }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.document-card{
    &__image{
        position: relative;
        height: 148px;
        width: 100%;
        background: $block-light;
        border-radius: 8px;
        margin-bottom: 10px;
        .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 10px;
            left: 10px;
            height: 20px;
            padding: 0 8px;
            background: $block-red;
            color: $text-white;
            border-radius: 8px;
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 56px;
            height: 76px;
            object-fit: cover;
        }
    }
    &__content {
        padding: 16px;
        .small-info {
            @include UI-16-20-500;
            margin-bottom: 4px;
            color: $text-secondary;
        }
        .description{
            @include UI-18-24-400;
            max-width: 230px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 16px;
        }
        .link {
            @include UI-16-20-500;
            cursor: pointer;
            color: $text-link;
        }
    }
}
</style>