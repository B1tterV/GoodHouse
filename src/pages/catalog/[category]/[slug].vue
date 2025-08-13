<script setup lang="ts">
// Icons
import ShoppingBagIcon from '@/assets/icons/shopping-bag-03.svg'
import CursorIcon from '@/assets/icons/cursor-01.svg'
import RightArrowIcon from '@/assets/icons/arrow-narrow-right.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import OurServices from '@/components/index-page/OurServices.vue';
import ProductGallerySwiper from '~/components/swipers/ProductGallerySwiper.vue';
import DocsSwiper from '~/components/swipers/DocsSwiper.vue';
import ProductsSwiper from '~/components/swipers/ProductsSwiper.vue';
import OurAdvantages from '~/components/blocks/OurAdvantages.vue';

// Store
import { useProductsStore } from "~/stores/public/products";

const productStore = useProductsStore();
const route = useRoute()

const productsImages = [
  '/images/products/new-product-1.png',
  '/images/products/new-product-2.png',
  '/images/products/new-product-3.png',
  '/images/products/new-product-4.png',
  '/images/products/new-product-5.png',
  '/images/products/new-product-6.png',
  '/images/products/new-product-7.png',
  '/images/products/new-product-8.png',
]

const characteristics = ref([
  { name: "Артикул", value: "2610016" },
  { name: "Бренд", value: "Porotherm" },
  { name: "Вес, кг", value: "16.4" },
  { name: "Водопоглощение, %", value: "19 ± 2%" },
  { name: "Завод", value: "Wienerberger в Кипрево (Владимирская область)" },
  { name: "Количество NF", value: "12.35" },
  { name: "Количество м3/поддон", value: "1.269" },
  { name: "Количество шт/м3", value: "39.4" },
  { name: "Марка морозостойкости", value: "F50" },
  { name: "Теплопроводность", value: "0,135-0,144 Вт/м°С" },
])

const otherSizes = ref([
  { id: 1, value: "500*380*219" },
  { id: 2, value: "500*80*219" },
  { id: 3, value: "500*200*219" },
  { id: 4, value: "500*250*219" },
  { id: 5, value: "500*140*219" },
  { id: 6, value: "500*180*219" },
  { id: 7, value: "500*28*219" },
  { id: 8, value: "500*380*219" },
])

const certificateCards = [
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "2017",
    description: "Технология выполнения кладочных работ из крупноформатных блоков ",
    linkText: "Читать"
  },
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "Бесплатно",
    description: "Краткое описание сертификата",
    linkText: "Читать"
  },
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "Бесплатно",
    description: "Краткое описание сертификата",
  },
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "Бесплатно",
    description: "Краткое описание сертификата",
    linkText: "Читать"
  },
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "Бесплатно",
    description: "Краткое описание сертификата",
    linkText: "Читать"
  },
  {
    tag: "PDF",
    img: "/images/certificate-about.jpg",
    smallInfo: "Бесплатно",
    description: "Краткое описание сертификата",
    linkText: "Читать"
  }
]

const newProductCards = [
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285731,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285732,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285733,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285734,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285735,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "New",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285736,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  }
]

// async function getProducts() {
//   const response = await productStore?.getProducts();
//   if (response?.status?.value === "success") {
//     const data = response?.data?.value
//     console.log(data)
//   }
// }

onMounted(() => {
    console.log(route)
//   getProducts()
});
</script>

<template>
    <div class="product-page">
        <div class="product wrapper">
            <div class="product__slider">
                <ProductGallerySwiper :images="productsImages" />
            </div>
            <div class="product__info">
                <div class="actions">
                    <div class="actions__id">2610016</div>
                </div>
                <div class="name">
                    <p>Керамический блок Porotherm 44 М100 12,35 НФ, 250*440*219 мм</p>
                    <div class="country">
                        <img src="/images/countries/country1.svg" width="24" height="16" alt="country1">
                    </div>
                </div>
                <div class="price-info">
                    <div class="price-info__price">
                        <div class="old-price">999</div>
                        <div class="current-price">172.62</div>
                        <div class="value">шт/м2</div>
                    </div>
                    <div class="price-info__discount">-33%</div>
                    <div class="price-info__availability">В наличии</div>
                </div>
                <div class="buttons">
                    <BaseButton color="red" :icon="ShoppingBagIcon" text="В корзину" />
                    <BaseButton color="dark" :icon="CursorIcon" text="Купить в 1 клик" />
                </div>
                <nuxt-link to="/payment-info" class="conditions">
                    Условия доставки и оплаты
                </nuxt-link>
                <div class="characteristics">
                    <div class="characteristics__list">
                        <div
                            v-for="(characteristic, characteristicIndex) in characteristics.slice(0, 5)"
                            :key="`characteristic-${characteristicIndex}`"
                            class="characteristic-item"
                        >
                            <div class="characteristic-item__name">{{ characteristic.name }}</div>
                            <div class="characteristic-item__line" />
                            <div class="characteristic-item__value">{{ characteristic.value }}</div>
                        </div>
                    </div>
                    <div class="characteristics__more">Все характеристики</div>
                </div>
                <div class="availability">
                    <div class="availability__text">Наличие</div>
                    <div class="availability__description">Набережные Челны Мира, дом 103</div>
                </div>
                <div class="small-description">
                    <div class="small-description__text">
                        Блок керамический поризованный Porotherm 44 используется в строительстве
                        несущих наружных и внутренних однослойных стен. Толщина стены составит
                        440 мм. Блоки соединяются между собой структурой «паз-гребень», при этом
                        вертикальный шов не заполняется кладочным раствором. Не требует дополнительной теплоизоляции.
                    </div>
                    <div class="small-description__more">Описание</div>
                </div>
                <div class="other-sizes">
                    <div class="other-sizes__title">Другие размеры</div>
                    <div class="other-sizes__sizes">
                        <div
                            v-for="(size, sizeIndex) in otherSizes"
                            :key="`size-${sizeIndex}`"
                            class="size-item"
                        >
                            <div class="size-item__value">{{ size.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more-info wrapper">
            <div class="more-info__list"></div>
            <div class="more-info__content">
                <div class="characteristics">
                    <div class="characteristics__list">
                        <div
                            v-for="(characteristic, characteristicIndex) in characteristics"
                            :key="`characteristic-${characteristicIndex}`"
                            class="characteristic-item"
                        >
                            <div class="characteristic-item__name">{{ characteristic.name }}</div>
                            <div class="characteristic-item__line" />
                            <div class="characteristic-item__value">{{ characteristic.value }}</div>
                        </div>
                    </div>
                    <div class="characteristics__more">Все характеристики</div>
                </div>
                <div class="description">
                    <div class="description__title">Описание</div>
                    <div class="description__content">
                        Применение: строительство несущих стен толщиной 44 см. Для сооружения перегородок рекомендуется применять РТН 8 и РТН 12.
                        <br>
                        Преимущества блоков Porotherm. Быстрое возведение стен. Использование блоков Porotherm позволяет многократно ускорить процесс возведение стен, благодаря их крупному формату и небольшому весу. Один блок заменяет до 14 кирпичей в кладке!
                        <br>
                        Экономия на кладочном растворе. За счет соединения «паз-гребень», блоки Porotherm идеально стыкуются друг с другом и не заполняются раствором в вертикальном шве, а значит, вам понадобится значительно меньше кладочного раствора!
                        Экономия на отделочных материалах. Отличная геометрия блоков Porotherm даёт ощутимую экономию на штукатурке при выравнивании стен.
                        Экономия на отоплении и кондиционировании. Пористая структура материала и пустотность блоков Porotherm, а также отсутствие мостиков холода в кладке, позволяют снизить потери тепла зданием. Зимой блоки максимально долго сохраняют тепло, а летом — прохладу.
                        Строительство зданий до 10 этажей. Высокое значение марки прочности блоков Porotherm М100 позволяет возводить дома до 10 этажей без дополнительного укрепления кладки.
                        Стены выдержат любой вес. Стены из блоков Porotherm позволяют крепить на них что угодно. От картин и светильников до кухонной мебели, дверных и оконных рам и отопительных радиаторов.
                        Долговечность. Благодаря морозостойкости, дом, построенный из блоков Porotherm, будет служить и вам, и вашим детям многие годы.
                        Здоровый микроклимат в доме. Отличная аккумулирующая способность и высокая паропроницаемость блоков Porotherm обеспечивают сбалансированную влажность воздуха в помещении, а также снижают риск появления плесени и грибков, вредных для здоровья.
                        Отделочные работы сразу после завершения строительства. Из-за низкой остаточной влажности блоки Porotherm не подвержены усадке, что позволяет приступать к отделочным работам сразу же после завершения строительства дома.
                        Тишина и спокойствие в доме. Уровень звукоизоляциии стены из керамических блоков Porotherm составляет более 55 децибелов. Этого достаточно, чтобы надежно защитить ваш дом от лишних звуков с улицы и внутри помещения: громких разговоров или шума от проходящей рядом дороги.
                    </div>
                </div>
            </div>
            <DocsSwiper
                :items="certificateCards"
                title="Документация"
            />

        </div>
        <div class="showrooms wrapper">
            <div class="showrooms__left">
                <div class="text">
                    <div class="text__title">
                        Приглашаем <br> в шоурумы
                    </div>
                    <div class="text__description">
                        Узнать адреса, график работы, посмотреть все фото и ознакомиться <br>
                        с дополнительной информацией для посетителей
                    </div>
                    <BaseButton color="gray" :iconRight="RightArrowIcon" text="Подробнее" />
                </div>
                <img src="/images/showrooms/product-showroom-1.jpg" alt="product-showroom">
            </div>
            <img class="showroom-img" src="/images/showrooms/product-showroom-2.jpg" alt="product-showroom">
            <img class="showroom-img" src="/images/showrooms/product-showroom-3.jpg" alt="product-showroom">
        </div>
        <div class="more-products">
            <ProductsSwiper
                :items="newProductCards"
                :link="{ name: 'Все новинки', href: '/'}"
                title="Новинки"
            />
            <ProductsSwiper
                :items="newProductCards"
                :link="{ name: 'Все новинки', href: '/'}"
                title="Новинки"
            />
            <ProductsSwiper
                :items="newProductCards"
                :link="{ name: 'Все новинки', href: '/'}"
                title="Новинки"
            />
        </div>
        <OurServices />
        <OurAdvantages />
    </div>
</template>

<style scoped lang="scss">
.product-page{
    .product{
        display: flex;
        gap: 64px;
        padding-top: 60px;
        padding-bottom: 60px;
        background: $block-light;
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
        margin-bottom: 16px;

        &__info{
            .actions{
                display: flex;
                gap: 16px;
                margin-bottom: 26px;
                &__id{
                    @include UI-16-20-500;
                    color: $text-secondary;
                }
            }
            .name{
                position: relative;
                @include UI-24-30-400;
                margin-bottom: 24px;

                p{
                    width: 90%;
                }

                .country{
                    position: absolute;
                    right: 0;
                    top: 2px;
                }
            }
            .price-info{
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 16px;
                &__price{
                    display: flex;
                    align-items: end;
                    gap: 6px;
                    .old-price{
                        @include UI-20-100p-400;
                        text-decoration: line-through;
                        color: $text-secondary;
                    }
                    .current-price{
                        @include UI-36-40-400;
                        line-height: 30px;
                    }
                    .value{
                        @include UI-16-20-500;
                        color: $text-secondary;
                    }
                }
                &__discount,
                &__availability {
                    @include UI-16-20-500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 24px;
                    border-radius: 8px;
                    padding: 0px 8px;
                    background: $block-red;
                    color: $text-white;
                }
                &__availability{
                    background: $text-secondary;
                }
            }
            .buttons{
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 8px;

                :deep(svg) {
                    width: 20px;
                    height: 20px;
                    margin-bottom: 0;
                }
            }
            .conditions {
                @include UI-18-24-400;
                display: inline-block;
                color: $text-link;
                text-decoration: none;
                margin-bottom: 24px;
            }
            .availability{
                @include UI-18-24-400;
                display: flex;
                gap: 8px;
                margin-bottom: 24px;
                &__text{
                    color: $text-secondary;
                }
            }
            .small-description{
                margin-bottom: 24px;
                &__text {
                    @include UI-18-24-400;
                    margin-bottom: 16px;
                }
                &__more {
                    @include UI-18-24-400;
                    cursor: pointer;
                    color: $text-link;
                }
            }
            .other-sizes{
                &__title{
                    @include UI-18-24-400;
                    margin-bottom: 16px;
                }
                &__sizes{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;

                    .size-item{
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        background: $block-gray-6p;
                        padding: 0 16px;
                        height: 42px;
                        width: fit-content;
                        transition: all 0.3s ease;
                        &__value {
                            @include UI-16-20-500;
                            color: $text-secondary;
                        }

                        &:hover {
                            background: $block-gray-8p;
                        }
                    }
                }
            }
            .characteristics{
                margin-bottom: 24px;
            }
        }
    }
    .more-info {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding-top: 60px;
        padding-bottom: 60px;
        background: $block-light;
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
        margin-bottom: 16px;

        &__content{
            .description{
                &__title {
                    @include UI-20-100p-400;
                    margin-bottom: 24px;
                }
                &__content{
                    @include UI-18-24-400;
                }
            }
        }
    }
    .characteristics{
        margin-bottom: 60px;
        max-width: 520px;
        width: 100%;
        &__list{
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 16px;
            .characteristic-item{
                display: flex;
                align-items: end;
                width: 100%;
                gap: 8px;

                &__name{
                    @include UI-18-24-400;
                    color: $text-secondary;
                }

                &__line{
                    border-bottom: 1px dashed $text-secondary;
                    margin-bottom: 6px;
                    flex: 1;
                }

                &__value {
                    @include UI-18-24-400;
                    max-width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        &__more {
            @include UI-18-24-400;
            cursor: pointer;
            color: $text-link;
        }
    }
    .our-services{
        margin-bottom: 16px;
    }
    .more-products{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 16px;
    }
    .showrooms{
        display: flex;
        gap: 16px;
        justify-content: space-between;
        padding-top: 60px;
        padding-bottom: 60px;
        &__left {
            display: flex;
            flex-direction: column;
            width: 381px;
            gap: 16px;
            .text {
                padding: 24px;
                &__title {
                    @include UI-28-100p-400;
                    margin-bottom: 8px;
                }
                &__description {
                    @include UI-18-24-400;
                    margin-bottom: 24px;
                    color: $text-primary-opacity;
                }
                :deep(.base-button) {
                    svg {
                        color: $icon-gray;
                    }
                }
            }
            img {
                flex: 1;
            }
        }

        img {
            border-radius: 16px;
            object-fit: cover;
        }
    }
}
</style>