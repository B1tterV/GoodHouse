<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
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
    <div
        class="base-raido"
        @click="proxyValue = value"
    >
        <input
            v-model="proxyValue"
            class="base-raido__input"
            type="radio"
            :name="name"
            :value="value"
            :checked="proxyValue == value"
        />
        <div class="base-raido__label">{{ label }}</div>
    </div>
</template>

<style scoped lang="scss">
.base-raido{
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    &__input{
        cursor: pointer;
        // appearance: none;

        border-radius: 100%;
        width: 16px;
        height: 16px;
        padding: 3px;
        border: 3px solid $block-gray-6p;
        
        &:checked {
            accent-color: $block-red;
        }
    }
    &__label{
        @include UI-16-20-500;
    }
}
</style>