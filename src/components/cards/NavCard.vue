<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  icon: { type: String, required: false },
  img: { type: String, required: false },
  text: { type: String, required: true },
  link: { type: String, default: null },
  isHash: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
})

const router = useRouter()

/**
 * Скролит страницу до переданного id
 * @param hash Id элемента (В нашем случау link)
 */
const scrollToHash = (hash: string) => {
  const element = document.querySelector(hash);
  if (element) {
    const offset = 100; // Отступ в пикселях
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

const handleClick = () => {
  if (props.isHash) {
    scrollToHash(props.link)
  } else if (props.link) {
    router.push(props.link)
  }
}
</script>

<template>
    <div
        class="nav-card"
        :class="{ active: isActive }"
        @click="handleClick()"
    >
        <component v-if="icon" class="nav-card__icon" :is="icon" filled />
        <img v-if="img" :src="img" :alt="text" width="20" height="20">
        <div class="nav-card__text">{{ text }}</div>
    </div>
</template>

<style scoped lang="scss">
.nav-card{
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 20px 16px;
    height: 60px;
    background: $block-light;
    transition: all 0.3s ease;

    &.active{
      background: $block-gray-6p;
      box-shadow: none;
    }

    svg {
        color: $icon-gray;
    }

    &__text{
        @include UI-16-20-500;
        white-space: nowrap;
    }

    &__icon{
      min-width: 20px;
      min-height: 20px;
    }

    &:hover {
      .nav-card__text {
          color: $text-link;
      }
    }
}
</style>