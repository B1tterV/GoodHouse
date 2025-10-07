<script setup lang="ts">
// Icons
import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';

const emit = defineEmits(['add', 'remove'])

defineProps({
  count: { type: Number, default: 0 }
})
</script>

<template>
    <div class="product-card-counter">
        <BaseButton color="gray" :icon="MinusIcon" @click.stop="emit('remove')" />
        <div class="product-card-counter__count">{{ count }}</div>
        <BaseButton color="gray" :icon="PlusIcon" @click.stop="emit('add')" />
    </div>
</template>

<style scoped lang="scss">
.product-card-counter{
    background: $block-light;
    border-radius: 8px;
    width: 129px;
    display: flex;
    &__count{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 57px;
        max-width: 57px;
        width: 100%;
    }

    .base-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        padding: 0;
    }
}
</style>