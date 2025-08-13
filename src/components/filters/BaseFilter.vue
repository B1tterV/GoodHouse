<script setup lang="ts">
// Modules
import { computed, ref } from 'vue';

// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'

// Types
import type { PropType } from 'vue';
import type { FilterItem } from '@/types/filters'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array as PropType<FilterItem[]>, required: true }
})

const getCurrentItemIcon = (selected: boolean) => {
  return selected ? MinusIcon : PlusIcon
}

const toggleSelect = (item: FilterItem) => {
  item.selected = !item.selected
}

const isOpenContent = ref<boolean>(true)
const contentRef = ref<HTMLElement | null>(null)
const contentHeight = ref<string>('auto')
const showItemsCount = ref<number>(4)
const formatedShowMoreText = computed(() => {
  return showItemsCount.value <= 4 ? "Показать больше" : "Показать меньше"
})

const toggleContent = () => {
  if (!contentRef.value) return
  
  if (!isOpenContent.value) {
    // Перед открытием устанавливаем точную высоту
    contentHeight.value = `${contentRef.value.scrollHeight}px`
    // После анимации возвращаем auto для корректного отображения при изменении содержимого
    setTimeout(() => { contentHeight.value = 'auto' }, 300)
  } else {
    // Перед закрытием фиксируем текущую высоту
    contentHeight.value = `${contentRef.value.scrollHeight}px`
    // Даём время для применения новой высоты перед анимацией
    setTimeout(() => { contentHeight.value = '0px' }, 10)
  }
  
  isOpenContent.value = !isOpenContent.value
}

const handleShowMoreClick = () => {
  if (showItemsCount.value <= 4) {
    showItemsCount.value = props.items.length
  } else {
    showItemsCount.value = 4
  }
}
</script>

<template>
    <div class="base-filter">
        <div
          class="base-filter__header"
          @click="toggleContent"
        >
            <div class="name">{{ title }}</div>
            <div class="drop-down">
              <ChevronDownIcon filled />
            </div>
        </div>
        <div
          ref="contentRef"
          class="base-filter__content"
          :class="{'is-open': isOpenContent}"
          :style="{ height: contentHeight }"
        >
          <div class="content-wrapper">
            <div
              v-for="item in items.slice(0, showItemsCount)"
              :key="`filter-item-${item.id}`"
              class="filter-item"
              @click="toggleSelect(item)"
            >
              <div
                class="filter-item__select"
                :class="{'selected': item.selected}"
              >
                <component :is="getCurrentItemIcon(item.selected)" filled />
              </div>
              <div class="filter-item__name">{{ item.name }}</div>
              <div class="filter-item__image"></div>
            </div>
            <div
              v-if="items.length > 4"
              class="show-more"
              @click="handleShowMoreClick()"
            >
              {{ formatedShowMoreText }}
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.base-filter{
  align-items: center;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 16px;
  background: $block-light;

  &__header{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .name{
      @include UI-16-20-500;
    }

    .drop-down {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
    
    .content-wrapper {
      display: flex;
      flex-direction: column;
    }

    .filter-item{
      cursor: pointer;
      display: flex;
      gap: 8px;
      padding: 8px 0;
      &:first-child{
        padding-top: 16px;
      }
      &:last-child {
        padding-bottom: 0;
      }
      &__select{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        min-width: 16px;
        min-height: 16px;
        background: $block-gray-6p;
        border-radius: 4px;
        transition: all 0.3s ease;

        svg {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          color: $icon-gray;
          width: 8px;
          height: 8px;
        }

        &.selected{
          background: $block-red;

          svg {
            color: $icon-light;
          }
        }
      }
    }

    .show-more {
      @include UI-14-20-400;
      cursor: pointer;
      margin-top: 8px;
      color: $text-link;
    }
  }
}
</style>