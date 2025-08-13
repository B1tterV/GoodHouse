<script setup lang="ts">
// Base modules
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: { type: String, required: true },
  placeholder: { type: String, default: "Я хочу найти: например" },
  name: { type: String, required: true },
})

const proxyValue = computed({
    get() {
        return props.modelValue
    },
    set(newValue: string) {
        emit('update:modelValue', newValue)
    }
})
</script>

<template>
    <div class="base-input">
        <div class="base-input__name">{{ name }}</div>
        <input v-model="proxyValue" type="text" :placeholder="placeholder">
    </div>
</template>

<style scoped lang="scss">
.base-input{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 469px;
    width: 100%;
    background: $block-light;
    border-radius: 8px;
    padding: 0px 16px;
    height: 42px;
    &__name{
        @include UI-16-20-500;
        min-width: 90px;
        width: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 4px;
        color: $text-secondary;
    }

    input {
        @include UI-16-20-500;
        border: none;
        width: 100%;
        z-index: 1;
        background: transparent;
        font-family: 'Onest', sans-serif;

        &::placeholder{
            @include UI-16-20-500;
            color: $text-placeholder;
        }
    }
}
</style>