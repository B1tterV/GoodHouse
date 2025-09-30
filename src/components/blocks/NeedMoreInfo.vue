<script setup lang="ts">
// Components
import NeedHelpCard from '@/components/cards/NeedHelpCard.vue';
import PhoneCard from '@/components/cards/PhoneCard.vue';
</script>

<template>
    <div class="need-more-info">
        <NeedHelpCard />
        <PhoneCard />
    </div>
</template>

<style scoped lang="scss">
.need-more-info{
    display: flex;
    gap: 16px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;

        .phone-card {
            height: 350px;
            width: 100%;
            min-width: auto;
        }
    }
}
</style>