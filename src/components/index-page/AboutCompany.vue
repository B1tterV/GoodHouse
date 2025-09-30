<script setup lang="ts">
// Icons
import UnionIcon from "@/assets/icons/union.svg"
import RightArrowIcon from '@/assets/icons/arrow-narrow-right.svg'

// Components
import BaseButton from "@/components/common/BaseButton.vue";

const advantageCards = [
  {
    title: "Широкий ассортимент продукции",
    description: "От базовых, как кровля и фасады, до современных инноваций"
  },
  {
    title: "Гибкие условия сотрудничества",
    description: "Мы предлагаем расширенную систему бонусов и скидок за рекомендации нашей продукции"
  },
  {
    title: "Консультирование клиентов",
    description: `
        Обращайтесь любым удобным способом — мы подготовим предложение
        с учетом ваших пожеланий и согласуем все этапы
    `
  },
  {
    title: "Качество продукции",
    description: `
        Компания Good House обеспечивает высокое качество строительных материалов,
        проводя строгий контроль на всех этапах производства согласно современным стандартам
    `
  }
]
</script>

<template>
    <div class="about-company wrapper">
        <div class="info">
            <div class="info__about-us">
                <div class="title">О компании</div>
                <div class="description">
                    ГК «Гуд Хаус» основана в 2011 году с целью обеспечения
                    профессионального подхода к комплектации строительных объектов через
                    сотрудничество с партнерами и строителями.
                    <br><br>
                    На данный момент наша компания имеет офисы-шоу-румы в городах Казань и Набережные Челны.
                    Главные принципы работы компании - качественное, комплексное и своевременное выполнение
                    обязательств перед заказчиками и деловыми партнерами.
                </div>
                <BaseButton text="О компании" color="red"/>
            </div>
            <div class="info__certificate">
                <div class="title">Все товары компании сертифицированы</div>
                <BaseButton color="gray">
                    Сертификаты
                    <RightArrowIcon filled />
                </BaseButton>
                <img class="certificate-image" src="/images/certificate.jpg" alt="certificate">
            </div>
        </div>
        <div class="image">
            <UnionIcon class="image__icon"/>
            <img src="/images/about-us.jpg" alt="about-us" width="518" height="600">
        </div>
        <div class="advantages">
            <div
                v-for="(advantageCard, advantageCardIndex) in advantageCards"
                :key="`advantageCard-${advantageCardIndex}`"
                class="advantage-card"
            >
                <div class="advantage-card__title">{{ advantageCard.title }}</div>
                <div class="advantage-card__description">{{ advantageCard.description }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.about-company{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
    .info{
        &__about-us{
            margin-bottom: 16px;
            padding: 0 24px 24px 24px;
            .title {
                @include UI-28-100p-400;
                margin-bottom: 8px;
            }
            .description {  
                @include UI-18-24-400;
                margin-bottom: 24px;
            }
        }
        &__certificate{
            position: relative;
            padding: 24px;
            overflow: hidden;

            .title{
                @include UI-18-24-400;
                width: 220px;
                margin-bottom: 24px;
            }

            :deep(.base-button) {
                svg {
                    color: $icon-gray;
                }
            }

            .certificate-image{
                position: absolute;
                right: -20px;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }
    }
    .image{
        position: relative;
        height: fit-content;
        &__icon{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            color: $icon-light;
            z-index: 2;
        }
        img {
            border-radius: 16px;
            object-fit: cover;
        }
    }
    .advantages{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 24px;
        padding: 104px 24px 24px 24px;
        .advantage-card{
            padding-left: 16px;
            border-left: 1px solid $block-red;
            &__title{
                @include UI-20-100p-400;
                margin-bottom: 8px;
            }
            &__description{
                @include UI-18-24-400;
                color: $block-dark-80p;
            }
        }
    }

    @media (max-width: 1439px) {
        display: flex;
        gap: 15px;

        .image{
            display: none;
        }

        .advantages{
            justify-content: flex-start;
            padding-top: 24px;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
    }
}
</style>