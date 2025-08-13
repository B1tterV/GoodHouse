<script setup lang="ts">

</script>

<template>
    <div class="phone-card">
        <div class="phone-card__phone">+7-917-396-09-06</div>
        <div class="phone-card__description">
            Нет времени ждать? Позвоните нам на горячую линию
        </div>
        <img class="phone-card__image" src="/images/phone-big.png" alt="phone" width="173" height="180">
    </div>
</template>

<style scoped lang="scss">
.phone-card{
    backdrop-filter: blur(20px);
    background: $block-black-secondary;
    border-radius: 8px;
    padding: 24px;
    width: 380px;
    min-width: 380px;

    &__phone{
        @include UI-36-40-400;
        margin-bottom: 8px;
        color: $text-light;
    }

    &__description{
        @include UI-18-24-400;
        color: $text-light-opacity;
    }

    &__image{
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
        bottom: 0;
    }
}
</style>