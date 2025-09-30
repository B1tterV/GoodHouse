<script setup lang="ts">
// Base modules
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Icons
import LogoIcon from '@/assets/icons/logo.svg'
import MenuIcon from '@/assets/icons/menu-03.svg'
import ShoppingBagIcon from '@/assets/icons/shopping-bag-03.svg'
import BarChartIcon from '@/assets/icons/bar-chart-square-02.svg'
import HeartRoundedIcon from '@/assets/icons/heart-rounded.svg'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
import IconSearch from '@/assets/icons/search-sm.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import MenuModal from '@/components/modals/MenuModal.vue'
import MobileSearch from '@/components/modals/MobileSearch.vue'
import MobileNavModal from '@/components/modals/MobileNavModal.vue'

// composables
import { useWindow } from '@/composables/useWindow';

// Store
import { useCartStore } from '@/stores/public/cart'

const router = useRouter()
const cartStore = useCartStore()
const { middleWindow, tabletWindow } = useWindow();

const navs = [
 { name: 'О компании', link: '/about-company'},
 { name: 'Бренды', link: '/brands'},
 { name: 'Акции', link: '/promo'},
 { name: 'Наши проекты', link: '/our-projects'},
 { name: 'Сервис', link: '/services'},
 { name: 'Оплата и доставка', link: '/payment-info'},
 { name: 'Сотрудничество', link: '/cooperation'},
 { name: 'Контакты', link: '/contacts'},
]

const searchValue = ref<string>('')

const menuModalIsOpen = ref<boolean>(false);
const mobileNavIsOpen = ref<boolean>(false);
const mobileSearchIsOpen = ref<boolean>(false);
</script>

<template>
    <header
        class="header"
        @click.stop="menuModalIsOpen = false"
    >
        <div
            class="header__base wrapper"
            :class="{'header__base_rounded': menuModalIsOpen}"
        >
            <LogoIcon class="logo" filled @click="router.push('/')"/>
            <div class="menu">
                <BaseButton
                    v-if="!tabletWindow"
                    color="dark"
                    text="Каталог"
                    :icon="MenuIcon"
                    @click.stop="menuModalIsOpen = !menuModalIsOpen"
                />
                <BaseButton
                    v-if="middleWindow"
                    class="menu__search-btn"
                    color="dark"
                    :icon="IconSearch"
                    @click.stop="mobileSearchIsOpen = !mobileSearchIsOpen"
                />
                <SearchInput v-else v-model="searchValue"/>
            </div>
            <div v-if="!tabletWindow" class="city">
                <div class="city__title">Ваш город</div>
                <div class="city__current">
                    Набережные Челны
                    <ChevronDownIcon filled />
                </div>
            </div>
            <div v-if="!tabletWindow" class="phone">
                <a href="tel:88552924542" class="phone__number">
                    8 8552 92 45 42
                </a>
                <a class="phone__call">
                    Заказать звонок
                </a>
            </div>
            <div v-if="!tabletWindow" class="buttons">
                <BaseButton color="gray" text="1" :icon="HeartRoundedIcon"/>
                <BaseButton color="gray" text="2" :icon="BarChartIcon"/>
                <BaseButton
                    color="red"
                    :text="`${cartStore.totalCartPrice}₽`"
                    :icon="ShoppingBagIcon"
                    @click="router.push('/cart')"
                />
            </div>
            <BaseButton
                v-if="tabletWindow"
                color="dark"
                :icon="MenuIcon"
                class="mobile-menu"
                @click="mobileNavIsOpen = !mobileNavIsOpen"
            />
        </div>
        <div v-if="!tabletWindow" class="header__nav wrapper">
            <ul>
                <li
                    v-for="(nav, navIndex) in navs"
                    :key="`header-nav-${navIndex}`"
                >
                    <router-link :to="nav.link">
                        {{ nav.name }}
                    </router-link>
                </li>
            </ul>
        </div>

        <MenuModal
            :is-open="menuModalIsOpen"
            @close="menuModalIsOpen = false"
            @click.stop
        />
        <MobileSearch
            v-if="mobileSearchIsOpen"
            v-model="searchValue"
            @close="
                mobileSearchIsOpen = false;
                searchValue = ''
            "
        />
        <MobileNavModal
            v-if="mobileNavIsOpen"
            :navs="navs"
            @close="mobileNavIsOpen = false"
        />
    </header>
</template>

<style scoped lang="scss">
.header{
    &__base{
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 42px;
        height: 90px;
        background: $block-light;
        z-index: 101;
        width: 100dvw;

        &_rounded{
            border-radius: 0 0 16px 16px;
        }

        .logo {
            cursor: pointer;
            min-width: 138px;
            height: auto;
        }

        .menu{
            display: flex;
            align-items: center;
            gap: 8px;

            .search-input {
                width: 622px;
            }

            &__search-btn{
                width: 42px;
                padding: 0;
                :deep(svg) {
                    width: 24px;
                    height: 24px;
                    color: $icon-light;
                    margin-bottom: 0;
                }
            }
        }

        .city{
            white-space: nowrap;
            &__title{
                @include UI-16-20-500;
                color: $text-secondary;
                margin-bottom: 2px;
            }
            &__current{
                @include UI-16-20-500;
                color: $text-link;
                cursor: pointer;
            }
        }

        .phone{
            display: flex;
            flex-direction: column;
            &__number{
                @include UI-16-20-500;
                margin-bottom: 2px;
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
                height: 18px;
                text-decoration: none;
            }
        }

        .buttons{
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mobile-menu{
            display: none;
        }

        @media (max-width: 1720px) {
            gap: 30px;

            .menu{
                flex: 1;
                .search-input {
                    width: 490px;
                }
            }
        }

        @media (max-width: 1439px) {

            .mobile-menu{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                min-width: 42px;
            }
        }
    }
    &__nav{
        background: $block-gray;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-top: 90px;
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
                @include UI-14-20-600;
                text-decoration: none;
                color: $text-primary;

                &:hover {
                    color: $text-link;
                }
            }
        }

        .links{
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            .link {
                @include UI-16-20-500;
                cursor: pointer;
                color: $text-secondary;

                &:hover {
                    color: $text-link;
                }
            }
            svg {
                color: $icon-gray;
            }
        }
    }

    @media (max-width: 1024px) {
        position: sticky;
        top: 0;
        z-index: 2000;

        &__base{
            position: relative;
        }
    }
}
</style>