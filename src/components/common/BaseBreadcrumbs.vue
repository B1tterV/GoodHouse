<script setup lang="ts">
// Icons
import RightArrowIcon from '@/assets/icons/arrow-narrow-right.svg'

// Types
import type { PropType } from 'vue';

defineProps({
  crumbs: { type: Array as PropType<Array<{ name: string; path: string}>>, required: true }
})
</script>

<template>
    <div class="breadcrumbs wrapper">
      <router-link to="/" class="breadcrumbs__item">Главная</router-link>
      <span class="breadcrumbs__separator">
        <RightArrowIcon filled />
      </span>
      <template v-for="(crumb, index) in crumbs" :key="index">
        <router-link
            v-if="index !== crumbs.length - 1" 
            :to="crumb.path" 
            class="breadcrumbs__item"
        >
          {{ crumb.name }}
        </router-link>
        <span v-else class="breadcrumbs__item breadcrumbs__item--current">
          {{ crumb.name }}
        </span>
        <span v-if="index !== crumbs.length - 1" class="breadcrumbs__separator">
            <RightArrowIcon filled />
        </span>
      </template>
    </div>
</template>

<style scoped lang="scss">
.breadcrumbs{
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    &__item{
        @include UI-16-20-500;
        cursor: pointer;
        color: $text-secondary;
        text-decoration: none;

        &:hover {
            color: $text-link;
        }
    }
}
</style>