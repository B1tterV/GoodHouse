<script setup lang="ts">
// Icons
import BrushIcon from '@/assets/icons/services/brush-03.svg'
import ScaleIcon from '@/assets/icons/services/scale-01.svg'
import CalculatorIcon from '@/assets/icons/services/calculator.svg'
import EyeIcon from '@/assets/icons/services/eye.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import NavCard from '@/components/cards/NavCard.vue';
import NeedMoreInfo from '@/components/blocks/NeedMoreInfo.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const navCards = [
  { icon: BrushIcon, text: "Колеровка", link: '#tinting'},
  { icon: ScaleIcon, text: "Распил", link: '#sawn'},
  { icon: CalculatorIcon, text: "Расчет материалов", link: '#materialsCalc'},
  { icon: EyeIcon, text: "Шеф-монтаж", link: '#supervisionInstall'},
]

const sawnItems = [
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" },
  { name: "Вид реза и описание", price: "45" }
]
</script>

<template>
    <div class="services-page wrapper">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="services-page__nav-cards">
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
                <div class="services-page__content">
                    <div id="tinting" class="tinting">
                        <div class="content-title">Колеровка</div>
                        <div class="content-description">
                            Колеровка  – это процесс добавления пигментов в базовую краску
                            для достижения нужного оттенка. Магазины оснащены современным
                            оборудованием, позволяющим создавать тысячи различных цветов.
                        </div>
                        <div class="tinting__info">
                            <div class="title">Зачем нужна колеровка?</div>
                            <div class="description">
                                Колеровка позволяет вам персонализировать цвет краски,
                                создавая уникальные оттенки, которые невозможно найти в
                                готовых продуктах. Это особенно полезно для тех, кто хочет
                                подчеркнуть индивидуальность своего дома или офиса.
                            </div>
                        </div>
                    </div>
                    <div id="sawn" class="sawn">
                        <div class="content-title">Распил</div>
                        <div class="sawn__info">
                            <div class="title">Сколько стоит распил</div>
                            <div class="sawn-items">
                                <div
                                    v-for="(sawnItem, sawnItemIndex) in sawnItems"
                                    :key="`sawnItem-${sawnItemIndex}`"
                                    class="sawn-item"
                                >
                                    <div class="sawn-item__name">
                                        {{ sawnItem.name }}
                                    </div>
                                    <div class="sawn-item__border"></div>
                                    <div class="sawn-item__price">
                                        {{ sawnItem.price }} ₽ / пил
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-text">
                            У нас вы можете заказать качественный распил стройматериалов,
                            деревянных и пластиковых изделий, а также листового материала.
                            Работаем на современном оборудовании с высокой точностью.
                        </div>
                    </div>
                    <div id="materialsCalc" class="materials-calc">
                        <div class="content-title">Расчет материалов</div>
                        <div class="content-description">
                            Мы предлагаем комплексные решения любых задач: от
                            проектирования и производства товаров на заказ до услуг по
                            установке, ремонту и обустройству вашей квартиры, дома и сада.
                        </div>
                        <BaseButton
                            color="dark"
                            text="Заказать услугу"
                            :icon="CalculatorIcon"
                        />
                    </div>
                    <div id="supervisionInstall" class="supervision-install">
                        <div class="content-title">Шеф-монтаж</div>
                        <div class="content-description">
                            Eсли оказалось, что у вас есть собственные подрядчики,
                            на вентиляционные работы, монтаж кондиционеров, а так же
                            установку входной двери, мы по вашему желанию выполним шеф
                            монтаж, если вы не понимаете всех тонкостей и у вас для этого
                            нет времени. Мы же считаем, что проводить подобный контроль
                            должен опытный специалист и во избежание ситуаций описанной
                            ниже, делать это нужно обязательно.
                        </div>
                        <div class="content-description">
                            Почему это важно? Потому что такие работы проводятся на
                            этапе черновой отделки , если что то будет упущено подрядчиками,
                            установлено или смонтировано неправильно, то в дальнейшем их устранение
                            принесёт дополнительные расходы и увеличение срока ремонта.
                        </div>
                        <div class="content-description">
                            Только неправильно установленная входная дверь,
                            может испортить эстетический вид и портить всю картину ремонта.
                        </div>
                        <div class="content-description">
                            Спектр услуг по шеф монтажу очень большой и если вам требуется данная
                            услуга как отдельная, без заказа ремонта у нас, звоните нам и мы вас
                            проконсультируем и скажем сможем ли мы вам чем помочь.
                        </div>
                        <BaseButton
                            color="dark"
                            text="Заказать услугу"
                            :icon="EyeIcon"
                        />
                    </div>
                    <NeedMoreInfo />
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.services-page{
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    &__nav-cards{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__content {
        .tinting{
            margin-bottom: 24px;

            &__info{
                border-radius: 16px;
                padding: 16px 24px;
                background: $block-gray;
                .title {
                    @include UI-20-100p-400;
                    margin-bottom: 16px;
                }
                .description {
                    @include UI-18-24-400;
                }
            }
        }
        .sawn {
            margin-bottom: 24px;

            &__info{
                border-radius: 16px;
                padding: 16px 24px;
                background: $block-gray;
                margin-bottom: 24px;

                .title{
                    @include UI-20-100p-400;
                    margin-bottom: 24px;
                }

                .sawn-items{
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    .sawn-item{
                        display: flex;
                        gap: 8px;
                        white-space: nowrap;
                        &__name {
                            @include UI-18-24-400;
                            color: $text-secondary;
                        }
                        &__border {
                            max-width: 500px;
                            width: 100%;
                            border-bottom: 1px dashed #777689;
                            margin-bottom: 5px;
                        }
                        &__price {
                            @include UI-18-24-400;
                        }
                    }
                }
            }
        }
        .materials-calc {
            margin-bottom: 24px;
        }
        .supervision-install {
            margin-bottom: 24px;
        }
    }

    :deep(.base-button) {
        svg {
            color: $icon-light;
        }
    }

    @media (max-width: 1024px) {
        &__content {
            .sawn {
                &__info{
                    .sawn-items{
                        .sawn-item{
                            &__name {
                                @include UI-14-20-600;
                            }
                            &__price {
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