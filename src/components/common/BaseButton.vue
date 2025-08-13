<script setup lang="ts">
import { computed, type PropType } from 'vue';

const props = defineProps({
  text: { type: String, default: null},
  size: { type: String as PropType<"md" | "xs">, default: "md"},
  color: {
    type: String as PropType<"red" | "dark" | "gray" | "white" | "green" | "blue"| "half-white">, 
    default: "red"
  },
  icon: { type: String, default: null },
  iconRight: { type: String, default: null },
  iconFilled: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
})

const formatedClasses = computed(() => {
  return [
    `base-button_${props.size}`,
    `base-button_${props.color}`
  ]
})
</script>

<template>
    <button
        class="base-button"
        :class="formatedClasses"
        :disabled="disabled"
    >
        <component :is="icon" :filled="iconFilled" />
        <slot>
            {{ text }}
        </slot>
        <component :is="iconRight" :filled="iconFilled" />
    </button>
</template>

<style scoped lang="scss">
.base-button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Onest', sans-serif;
    padding: 0 16px;
    outline: none;
    border: none;
    border-radius: 8px;
    gap: 8px;
    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.7;
    }

    // Sizes
    &_md{
        height: 42px;
    }

    &_xs{
        padding: 0 13px;
    }

    // Colors
    &_dark {
        background: $block-black-secondary;
        color: $text-light;

        svg {
            color: $icon-light;
        }

        &:hover {
           background: $block-dark; 
        }
    }

    &_red {
        background: $block-red;
        color: $text-light;

        svg {
            color: $icon-light;
        }

        &:hover {
            background: $block-red-hover;
        }
    }

    &_gray {
        background: $block-gray-6p;
        color: $text-secondary;

        svg {
            color: $icon-red;
        }

        &:hover {
            background: $block-gray-8p;
        }
    }

    &_white{
        background: $block-light;
        color: $text-primary;

        svg {
            color: $icon-dark;
        }
    }

    &_green{
        background: $block-green;
        color: $text-light;

        svg {
            color: $icon-light;
        }
    }

    &_blue{
        background: $block-blue;
        color: $text-light;

        svg {
            color: $icon-light;
        }
    }

    &_half-white{
        background: $block-white-16p;
        color: $text-light;

        svg {
            color: $icon-light;
        }
    }
}
</style>