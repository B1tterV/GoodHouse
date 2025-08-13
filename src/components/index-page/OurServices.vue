<script setup lang="ts">
// Modules
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// Icons
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'

// Components
import ServiceCard from '@/components/cards/ServiceCard.vue';
import NeedHelpCard from '@/components/cards/NeedHelpCard.vue';

const router = useRouter()

const servicesCards = [
  {
    src: "/images/services-cards/service-card-1.jpg",
    title: "Колеровка",
    description: `
        Цвет краски выбирается по специальны таблицам с
        использованием оборудования и программ для точной колеровки
    `,
    link: "/"
  },
  {
    src: "/images/services-cards/service-card-2.jpg",
    title: "Распил",
    description: `
        Профессиональное оборудование для резки кирпича гарантирует
        высокий уровень качества и точности спила
    `,
    link: "/"
  },
  {
    src: "/images/services-cards/service-card-3.jpg",
    title: "Расчет материалов",
    description: `
        Поможем точно рассчитать количество кирпича, керамического блока,
        цветного раствора, черепицы для кровли
    `,
    link: "/"
  },
  {
    src: "/images/services-cards/service-card-4.jpg",
    title: "Шеф-монтаж",
    description: `
        Специалист, управляющий монтажными работами,
        следящий за качеством и соответствием стандартов
    `,
    link: "/"
  }
]

const slidesPerView = ref<number>(4);

const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 1439 ? 2 : window.innerWidth <= 1720 ? 3 : 4;
};

onMounted(() => {
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
    <div class="our-services wrapper">
        <div class="our-services__content">
            <div class="header">
                <div class="header__title">Услуги</div>
                    <div class="header__link" @click="router.push('/')">
                    Все услуги
                    <ChevronDownIcon/>
                </div>
            </div>
            <div class="cards">
                <ServiceCard
                    v-for="(serviceCard, serviceCardIndex) in servicesCards.slice(0, slidesPerView)"
                    :key="`serviceCard-${serviceCardIndex}`"
                    :src="serviceCard.src"
                    :title="serviceCard.title"
                    :description="serviceCard.description"
                    :link="serviceCard.link"
                />
            </div>
        </div>
        <div class="our-services__form">
            <NeedHelpCard />
            <div class="phone-card">
                <div class="phone-card__phone">+7-917-396-09-06</div>
                <div class="phone-card__description">
                    Нет времени ждать? Позвоните нам<br>на горячую линию
                </div>
                <img class="phone-card__image" src="/images/phone.png" alt="phone" width="106" height="110">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.our-services{
    display: flex;
    gap: 30px;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);

    &__content{
        flex: 1;
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 43px;
    
            &__title{
                @include UI-24-20-400;
                &_highlight{
                    @include UI-28-100p-500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: $block-highlight;
                    border-radius: 8px;
                    padding: 2px 8px;
                }
            }
    
            &__link{
                @include UI-16-20-500;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                color: $text-link;
    
                svg {
                    transform: rotate(-90deg);
                    color: $icon-red;
                }
            }
        }
        .cards{
            display: flex;
            gap: 30px;
        }
    }

    &__form{
        width: 517px;
        .need-help{
            margin-bottom: 16px;
            background: $block-red;
            border-radius: 8px;
            padding: 24px;

            &__title{
                @include UI-28-100p-400;
                margin-bottom: 8px;
                color: $text-light;
            }

            &__description{
                @include UI-18-24-400;
                color: $text-light-opacity;
                margin-bottom: 24px;
            }

            &__form{
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 16px;

                .base-button {
                    width: fit-content;
                }
            }

            &__policy{
                @include UI-14-100p-400;
                color: $text-light-opacity;
                a {
                    color: $text-light-opacity;
                }
            }
        }

        .phone-card{
            backdrop-filter: blur(20px);
            background: $block-black-secondary;
            border-radius: 8px;
            padding: 24px;
            margin-top: 16px;

            &__phone{
                @include UI-24-20-400;
                margin-bottom: 8px;
                color: $text-light;
            }

            &__description{
                @include UI-18-24-400;
                color: $text-light-opacity;
            }

            &__image{
                position: absolute;
                right: 24px;
                bottom: 0;
            }
        }
    }
}
</style>