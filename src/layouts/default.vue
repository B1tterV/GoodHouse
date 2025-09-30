
<script setup lang="ts">
// Modules
import { RouterView } from 'vue-router'

// Components
import DefaultHeader from '@/components/layout/DefaultHeader.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
import DefaultMobileNav from '~/components/layout/DefaultMobileNav.vue';

// composables
import { useWindow } from '@/composables/useWindow';

const { tabletWindow } = useWindow();
</script>

<template>
    <div class="default-layout">
        <DefaultHeader/>
        <div class="default-layout__content">
            <RouterView />
        </div>
        <!-- <DefaultFooter /> -->
        <DefaultMobileNav v-if="tabletWindow" />
    </div>
</template>

<style scoped lang="scss">
.default-layout{
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    &__content{
        flex: 1;
    }
}
</style>