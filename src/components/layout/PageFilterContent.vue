<script setup lang="ts">
defineProps({
  filterTitle: { type: String, default: null }
})
</script>

<template>
    <div class="page-filter-content wrapper">
        <div class="page-filter-content__filters">
            <div v-if="filterTitle" class="filter-title">{{ filterTitle }}</div>
            <div class="filter-content">
                <slot name="filter" />
            </div>
        </div>
        <div class="page-filter-content__content">
            <slot name="content" />
        </div>
    </div>
</template>


<style scoped lang="scss">
.page-filter-content{
    display: flex;
    gap: 116px;
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
    width: 100%;
    &__filters {
        width: 294px;
        min-width: 274px;
        height: 100dvh;
        position: sticky;
        top: calc(90px + 20px);
        align-self: flex-start;
        overflow-y: auto;
        max-height: calc(100vh - 110px); 

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-thumb {
            background: transparent;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        .filter-title {
            @include UI-18-24-400;
            margin-bottom: 16px;
            position: sticky;
            top: 0;
            background: white; /* чтобы текст не накладывался при прокрутке */
            z-index: 1;
            padding-bottom: 10px;
        }
        
        .filter-content {
            background: transparent;
            /* убираем position: sticky отсюда, так как sticky теперь на родителе */
            padding-bottom: 20px; /* отступ снизу для красоты */
            padding: 2px 10px;
        }
    }

    &__content{
        width: 100%;
        max-width: 1200px;

        :deep(.content-title) {
            @include UI-24-30-400;
            margin-bottom: 24px;
        }
        :deep(.content-description) {
            @include UI-18-24-400;
            margin-bottom: 24px;
        }
        :deep(.content-text) {
            @include UI-18-24-400;
        }
        :deep(.content-list) {
            list-style-type: disc;

            li {
                @include UI-18-24-400;
            }
        }
    }
}
</style>