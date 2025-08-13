<script setup lang="ts">
// Icons
import ArrowBackIcon from '@/assets/icons/common/arrow-back.svg'
import CalculatorIcon from '@/assets/icons/services/calculator.svg'
import MenuIcon from '@/assets/icons/menu-03.svg'
import StarIcon from '@/assets/icons/common/star-01.svg'

// Components
import BaseButton from './components/common/BaseButton.vue'

const router = useRouter()

const linkItems = ref([
  {
    icon: MenuIcon,
    name: "Каталог товаров",
    description: "Найдите идеальный вариант среди тысяч товаров",
    link: '/catalog'
  },
  {
    icon: StarIcon,
    name: "Горящие акции",
    description: "Специальные предложения — экономия до 50%",
    link: '/promo'
  },
  {
    icon: CalculatorIcon,
    name: "Помощь и сервис",
    description: "Консультация экспертов и быстрая поддержка",
    link: '/services'
  }
])
</script>

<template>
    <div class="error-page">
        <div class="error-page__content">
            <div class="title">Страница не найдена</div>
            <div class="description">
                Возможно, вы ввели неверный URL страницы, а может
                она переехала в другой раздел или просто страница
                временно недоступна 
            </div>
            <div class="buttons">
                <BaseButton
                    text="Назад"
                    is-outlined
                    :left-icon="ArrowBackIcon"
                    color="dark"
                    @click="router.back()"
                />
                <BaseButton
                    text="На главную"
                    color="red"
                    @click="router.push('/')"
                />
            </div>
            <div class="links">
                <div
                    v-for="(linkItem, linkItemIndex) in linkItems"
                    :key="`linkItem-${linkItemIndex}`"
                    class="link-item"
                    @click="router.push(linkItem.link)"
                >
                    <div class="link-item__icon">
                        <component :is="linkItem.icon" filled />
                    </div>
                    <div class="link-item__text">
                        <div class="item-title">{{ linkItem.name }}</div>
                        <div class="item-description">{{ linkItem.description }}</div>
                    </div>
                    <ArrowBackIcon class="link-item__arrow" filled />
                </div>
            </div>
        </div>
        <div class="error-page__bg">404</div>
    </div>
</template>

<style scoped lang="scss">
.error-page{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;

    background: $block-light;
    &__bg{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;

        font-weight: 400;
        font-size: 600px;
        color: rgba(0, 0, 0, 0.04);
        user-select: none;
    }
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 650px;
        z-index: 2;
        .title{
            @include UI-48-52-600;
            margin-bottom: 10px;
            text-align: center;
            text-align: center;
        }
        .description{
            @include UI-18-24-400;
            color: $text-secondary;
            margin-bottom: 40px;
            text-align: center;
        }
        .buttons{
            display: flex;
            gap: 15px;
            margin-bottom: 60px;
            .base-button {
                width: fit-content;
                padding: 0 25px;
            }
        }
        .links{
            width: 100%;
            padding: 0 25px;
            .link-item{
                cursor: pointer;
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 30px;
                padding: 20px 0;
                border-bottom: 1px solid $block-gray-8p;
                
                &__icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid $block-dark-80p;
                    border-radius: 5px;
                    width: 48px;
                    height: 48px;

                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }
                &__text{
                    flex: 1;
                    .item-title{
                        @include UI-18-24-600;
                        margin-bottom: 2px;
                    }
                    .item-description{
                        color: $text-secondary;
                    }
                }
                &__arrow{
                    transform: rotate(180deg);
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    transition: all 0.3s ease;
                    color: $icon-dark;
                }

                &:first-child {
                    border-top: 1px solid $block-gray-8p;
                }

                &:hover {
                    .link-item__arrow{
                        transform: translateX(20px) rotate(180deg);
                    }
                }
            }
        }
    }
}
</style>