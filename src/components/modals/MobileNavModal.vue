<script setup lang="ts">
// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'

const emit = defineEmits(['close'])

const props = defineProps({
  navs: { type: Array, required: true },
})
</script>

<template>
    <div
        class="mobile-nav-modal"
        @click="emit('close')"
    >
        <div class="mobile-nav-modal__content" @click.stop>
            <div class="city">
                Набережные Челны
                <ChevronDownIcon filled />
            </div>
            <ul>
                <li
                    v-for="(nav, navIndex) in navs"
                    :key="`header-nav-${navIndex}`"
                    @click="emit('close')"
                >
                    <router-link :to="nav.link">
                        {{ nav.name }}
                    </router-link>
                </li>
            </ul>
            <div class="phone">
                <a href="tel:88552924542" class="phone__number">
                    8 8552 92 45 42
                </a>
                <a class="phone__call">
                    Заказать звонок
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mobile-nav-modal{
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

        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 25px;
            a {
                @include UI-14-20-600;
                text-decoration: none;
                color: $text-primary;

                &:hover {
                    color: $text-link;
                }
            }
        }
        
        .city{
            @include UI-16-20-500;
            display: flex;
            align-items: center;
            gap: 5px;
            color: $text-link;
            cursor: pointer;
            margin-bottom: 25px;
            padding: 6px 10px;
            border: 1px solid $block-gray-8p;
            width: fit-content;
            border-radius: 10px;
        }

        .phone{
            display: flex;
            gap: 10px;
            align-items: center;
            &__number{
                @include UI-16-20-500;
                text-decoration: none;
                color: $text-primary;
            }
            &__call{
                @include UI-14-20-400;
                display: inline-block;
                cursor: pointer;
                color: $text-link;
                border-bottom: 1px dashed $text-link;
                width: fit-content;
                text-decoration: none;
            }
        }
    }
}
</style>