<script setup lang="ts">
// Components
import CatalogMenu from '@/components/blocks/CatalogMenu.vue';

const emit = defineEmits(['close'])

defineProps({
  isOpen: { type: Boolean, default: false }
})
</script>

<template>
    <Transition name="menu-modal">
        <div
          v-if="isOpen"
          class="menu-modal__content wrapper"
        >
            <div class="bg"></div>
            <div class="close-bg" @click="emit('close')"></div>
            <CatalogMenu isModal @close="emit('close')"/>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
/* Анимация */
.menu-modal-enter-active,
.menu-modal-leave-active {
//   transition: opacity 0.3s ease;
  
  .menu-modal__content {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
}

.menu-modal-enter-from,
.menu-modal-leave-to {
  opacity: 0;
  
  .menu-modal__content {
    transform: translateY(-100px);
    opacity: 0;
  }
}

.menu-modal{
    opacity: 0;

    &__content{
        :deep(.catalog-menu) {
            position: fixed;
            top: 92px;
            left: 0;
        }
    
        .bg, .close-bg{
            position: fixed;
            top: 0;
            left: 0;
            height: 92px;
            background: $block-gray;
            width: 100dvw;
            z-index: 100;
        }

        .close-bg {
          height: 100dvh;
          background: $block-gray-6p;
        }
    }
}

</style>