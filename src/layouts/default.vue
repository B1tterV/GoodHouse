
<script setup lang="ts">
// Modules
import { RouterView } from 'vue-router'

// Components
import DefaultHeader from '@/components/layout/DefaultHeader.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
</script>

<template>
    <DefaultHeader/>
    <RouterView />
    <DefaultFooter />
</template>

<style scoped lang="scss">
</style>