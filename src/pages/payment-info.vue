<script setup lang="ts">
// Icons
import WalletIcon from '@/assets/icons/payments-info/wallet-02.svg'
import BoxIcon from '@/assets/icons/payments-info/box.svg'
import CarIcon from '@/assets/icons/payments-info/car-01.svg'
import BankNoteIcon from '@/assets/icons/payments-info/bank-note-02.svg'
import CreditCardIcon from '@/assets/icons/payments-info/credit-card-02.svg'
import BankIcon from '@/assets/icons/payments-info/bank.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import NavCard from '@/components/cards/NavCard.vue';
import OurAdresses from '@/components/index-page/OurAdresses.vue'
import NeedMoreInfo from '@/components/blocks/NeedMoreInfo.vue'

const navCards = [
  { icon: WalletIcon, text: "Оплата", link: '#payment'},
  { icon: BoxIcon, text: "Доставка", link: '#delivery'},
  { icon: CarIcon, text: "Самовывоз", link: '#pickup'},
]

const deliveryList = [
  `
    Поставка Товара осуществляется автомобильным транспортом Покупателя или Поставщика,
    что оговаривается в Спецификации. Поставщик имеет право привлекать
    третьих лиц для доставки товара Покупателю.
  `,
  `
    Доставка осуществляется до места, куда автомобиль может проехать
    без нарушения ПДД и риска повреждения транспортного средства.
  `,
  `
    Стоимость доставки зависит от вида транспортного средства, адреса доставки и сезона. 
    Точную стоимость доставки уточняйте у менеджеров. Наши менеджеры подскажут Вам
    наиболее подходящий и выгодный способ доставки.
  `
]

const pickupList = [
  `
    Самовывоз со склада — выгодная и удобная опция для многих покупателей.
    Покупатель может заехать и забрать товар самостоятельно при наличии
    правильно оформленных документов установленного образца. 
  `,
  `
    Рекомендуем использовать Яндекс и другие онлайн карты для быстрого
    поиска и ориентирования по прокладке пути до склада. 
  `
]

const paymentCards = [
  {
    icon: BankNoteIcon,
    title: "Наличный расчет",
    description: `
        Вы можете оплатить свой заказ наличными в выставочном зале компании (шоу-руме).
        Оплата принимается только в рублях.
    `
  },
  {
    icon: CreditCardIcon,
    title: "Банковская Карта",
    description: `
        Оплатить заказ банковской картой можно непосредственно в
        выставочном зале компании (шоу-руме). К оплате принимаются банковские
        карты платежных систем МИР, Visa, Visa Electron, MasterCard, Maestro.
    `
  },
  {
    icon: BankIcon,
    title: "Безналичный расчет для юридических лиц",
    description: `
        Для юридических лиц предусмотрена оплата по безналичному расчету,
        путем выставления счета. Для этого нужно оформить заказ на сайте или
        по телефону. После согласования заказа, необходимо предоставить
        реквизиты юридического лица, для выставления счета. Отгрузка товара
        осуществляется после зачисления денежных средств на р/с компании. При передаче
        оплаченного заказа предоставляются необходимые документы. При наличии
        товара на складе вы сможете получить его на следующий рабочий день
        после поступления оплаты и по договоренности с менеджером отдела продаж.
    `
  }
]
</script>

<template>
    <div class="payment-info-page wrapper">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="payment-info-page__nav-cards">
                    <NavCard
                        v-for="(navCard, navCardIndex) in navCards"
                        :key="`navCardIndex-${navCardIndex}`"
                        :icon="navCard.icon"
                        :text="navCard.text"
                        :link="navCard.link"
                        isHash
                    />
                </div>
            </template>
            <template v-slot:content>
                <div class="payment-info-page__content">
                    <div id="payment" class="payment">
                        <div class="content-title">Оплата</div>
                        <div class="content-description">
                            ГК «ГудХаус» производит расчеты с покупателями,
                            поставщиками и партнерами согласно законодательству РФ.
                        </div>
                        <div class="payment__cards">
                            <div
                                v-for="(paymentCard, paymentCardIndex) in paymentCards"
                                :key="`paymentCard-${paymentCardIndex}`"
                                class="payment-card"
                            >
                                <component class="payment-card__icon" :is="paymentCard.icon" filled />
                                <div class="payment-card__content">
                                    <div class="title">{{ paymentCard.title }}</div>
                                    <div class="description">{{ paymentCard.description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="delivery" class="delivery">
                        <div class="content-title">Доставка</div>
                        <img
                            src="/images/blank-cargo-truck-road.jpg"
                            alt="blank-cargo-truck-road"
                            class="delivery__image"
                            width="1200"
                            height="360"
                        >
                        <ol class="content-list">
                            <li
                                v-for="(listItem, listItemIndex) in deliveryList"
                                :key="`deliveryList-${listItemIndex}`"
                            >
                               {{ listItem }}
                            </li>
                        </ol>
                    </div>
                    <div id="pickup" class="pickup">
                        <div class="content-title">Самовывоз</div>
                        <ol class="content-list">
                            <li
                                v-for="(listItem, listItemIndex) in pickupList"
                                :key="`pickupList-${listItemIndex}`"
                            >
                               {{ listItem }}
                            </li>
                        </ol>
                    </div>
                    <div id="addresses" class="addresses">
                        <div class="content-title">Адреса складов</div>
                        <OurAdresses title="" isReverse noPadding />
                    </div>
                    <NeedMoreInfo />
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.payment-info-page{
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    &__nav-cards{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__content {
        .payment{
            margin-bottom: 24px;

            &__cards{
                display: flex;
                flex-direction: column;
                gap: 8px;

                .payment-card{
                    display: flex;
                    gap: 48px;
                    border-radius: 16px;
                    padding: 16px 24px;
                    width: 100%;
                    background: $block-gray;

                    &__icon{
                        width: 48px;
                        height: 48px;
                        min-width: 48px;
                        min-height: 48px;
                        color: $icon-dark;
                    }
                    &__content{
                        .title{
                            @include UI-20-100p-400;
                            margin-bottom: 16px;
                        }
                        .description{
                            @include UI-18-24-400;
                        }
                    }
                }
            }
        }
        .delivery {
            margin-bottom: 24px;
            &__image{
                margin-bottom: 24px;
                border-radius: 8px;
                object-fit: cover;
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 6;
            }
        }
        .pickup {
            margin-bottom: 24px;
        }
    }

    @media (max-width: 1024px) {
        &__content {
            .payment{
                &__cards{
                    .payment-card{
                        flex-direction: column;
                        gap: 10px;

                        &__content{
                            .title{
                                @include UI-14-20-600;
                                margin-bottom: 10px;
                            }
                            .description{
                                @include UI-14-20-400;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>