<script setup lang="ts">
// Base modules
import { computed } from 'vue'

// Icons
import IconSearch from '@/assets/icons/search-sm.svg'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: { type: String, required: true },
  placeholder: { type: String, default: "Я хочу найти: например" },
  placeholderAddition: { type: String, default: "облицованный кирпич" },
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
    <div class="search-input">
        <input v-model="proxyValue" type="text">
        <p v-if="!proxyValue" class="search-input__placeholder-additional">
            {{placeholder}} <span> {{ placeholderAddition }}</span>
        </p>
        <IconSearch filled />
    </div>
</template>

<style scoped lang="scss">
.search-input{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 622px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 0px 16px;
    height: 42px;
    input {
        border: none;
        width: 100%;
        z-index: 1;
        background: transparent;
        font-family: 'Onest', sans-serif;
    }

    &__placeholder-additional{
        @include UI-16-20-500;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 16px;
        width: 100%;
        height: fit-content;
        user-select: none;
        color: $text-secondary;

        span {
            @include UI-14-20-400;
            color: $text-link;
            border-bottom: 1px dashed $text-link;
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
}
</style>