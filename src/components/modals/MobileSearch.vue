<script setup lang="ts">
// Components
import SearchInput from '@/components/common/SearchInput.vue'

const emit = defineEmits(['update:modelValue', 'close'])

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
    <div
        class="mobile-search"
        @click="emit('close')"
    >
        <div class="mobile-search__content" @click.stop>
            <SearchInput v-model="proxyValue"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mobile-search{
    @include popup;
    &__content{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: fit-content;
        z-index: 1002;
        background: $block-gray;
        padding: 16px;
        border-radius: 8px 8px 0 0;

        .search-input{
            max-width: 100%;
        }
    }
}
</style>