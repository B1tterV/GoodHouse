<script setup lang="ts">
// Modules
import { computed } from "vue";

// Components
import BaseButton from "./BaseButton.vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: { type: Number, required: true },
  totalPages: { type: Number, default: 1 }
});

const proxyValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: number) {
    emit('update:modelValue', newValue);
  }
});

const pages = computed(() => {
  const current = proxyValue.value;
  const total = props.totalPages;
  const pages = [];

  if (total <= 6) {
    // Показываем все страницы, если их меньше или равно 6
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Сложная логика пагинации для большего количества страниц
    if (current <= 3) {
      // Показываем 1-4, ..., последняя
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    } else if (current > total - 4) {
      // Показываем 1, ..., последние 4 страницы
      pages.push(1);
      pages.push('...');
      for (let i = total - 3; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Показываем 1, ..., текущая-1, текущая, текущая+1, ..., последняя
      pages.push(1);
      pages.push('...');
      pages.push(current - 1);
      pages.push(current);
      pages.push(current + 1);
      pages.push('...');
      pages.push(total);
    }
  }

  return pages;
});

function prevPage() {
  if (proxyValue.value > 1) {
    proxyValue.value -= 1;
  }
}

function nextPage() {
  if (proxyValue.value < props.totalPages) {
    proxyValue.value += 1;
  }
}

function goToPage(page: number | string) {
  if (typeof page === 'number') {
    proxyValue.value = page;
  }
}
</script>

<template>
  <div class="base-pagination">
    <BaseButton
      class="base-pagination__btn base-pagination__btn_prev"
      color="gray"
      text="Назад"
      :disabled="proxyValue === 1"
      @click="prevPage"
    />
    
    <div class="base-pagination__pages">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="page-item"
        :class="{
          'active': page === proxyValue,
          'dots': page === '...'
        }"
        @click="goToPage(page)"
      >
        {{ page }}
      </div>
    </div>

    <BaseButton
      class="base-pagination__btn base-pagination__btn_next"
      color="gray"
      text="Далее"
      :disabled="proxyValue === totalPages"
      @click="nextPage"
    />
  </div>
</template>

<style scoped lang="scss">
.base-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  
  &__pages {
    display: flex;
    gap: 8px;
  }
  
  &__btn {
    @include UI-16-20-500;
    border-radius: 8px;
    padding: 0px 16px;
    height: 42px;
  }
  
  .page-item {
    @include UI-16-20-500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: $block-gray-6p;
    border-radius: 8px;
    color: $text-secondary;
    
    &:hover {
      background-color: $block-gray-8p;
    }
    
    &.active {
      background-color: $block-red;
      color: $text-white;
    }
    
    &.dots {
      cursor: default;
      border: none;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>