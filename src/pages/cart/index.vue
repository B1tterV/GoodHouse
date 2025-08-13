<script setup lang="ts">
// Icons
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseRadio from '~/components/common/BaseRadio.vue';
import CartProduct from '~/components/cards/CartProduct.vue';

// Utils
import { wordFormater } from '@/utils/wordFormater'


const router = useRouter()

const cartProducts = [
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

const formatedTitleCount = () => {
    return `${cartProducts.length} ${wordFormater(cartProducts.length, ["товар", "товара", "товаров"])}`
}
</script>

<template>
    <div class="cart-page wrapper">
        <div class="cart-page__content">
            <div class="order-structure">
                <div class="title">Корзина <span>{{ formatedTitleCount() }}</span></div>
                <div class="order-structure__products">
                    <CartProduct
                        v-for="(cartProduct, cartProductIndex) in cartProducts"
                        :key="`cartProduct-${cartProductIndex}`"
                        :image="cartProduct.image"
                        :article="cartProduct.code"
                        :name="cartProduct.description"
                        :oldPrice="cartProduct.prevPrice"
                        :currentPrice="cartProduct.currentPrice"
                        :tag="cartProduct.tag"
                    />
                </div>
            </div>
        </div>
        <div class="cart-page__sidebar">
            <div class="sidebar-card sidebar-card__info">
                <div class="title">Условия заказа</div>
                <div class="total">
                    <div class="total__subtext">Итого:</div>
                    <div
                        class="total__item"
                    >
                        <div class="name">{{ formatedTitleCount() }}</div>
                        <div class="line"/>
                        <div class="value">1 299₽</div>
                    </div>
                </div>
                <BaseButton
                    color="red"
                    text="Перейти к оформлению"
                    @click="router.push('/cart/checkout')"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cart-page{
    display: flex;
    gap: 32px;
    padding-top: 60px;
    padding-bottom: 60px;
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
    &__content{
        flex: 1;
        .title{
            @include UI-24-30-400;
            margin-bottom: 24px;

            span{
                @include UI-14-20-500;
                color: $text-secondary;
            }
        }
        .order-structure{
            margin-bottom: 24px;
            &__products{
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }
        .making-order{
            display: flex;
            flex-direction: column;
            gap: 24px;

            .title{
                margin-bottom: 0;
            }

            .data-block{
                display: flex;
                flex-direction: column;
                gap: 24px;
                background: $block-gray;
                border-radius: 16px;
                padding: 24px;
                &__title{
                    @include UI-20-100p-400;
                }
                &__type{
                    display: flex;
                    gap: 48px;
                    flex-wrap: wrap;
                }
                &__form{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                &__description{
                    @include UI-18-24-400;
                    max-width: 470px;
                }
            }
        }
    }
    &__sidebar{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 377px;
        .sidebar-card{
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            padding: 20px 16px;
            background: $block-light;

            .title{
                @include UI-16-20-600;
                margin-bottom: 10px;
            }

            &__info{
                .total{
                    margin-bottom: 20px;
                    &__subtext{
                        @include UI-12-20-400;
                        color: $text-secondary;
                        height: 15px;
                    }
                    &__item{
                        display: flex;
                        align-items: end;
                        width: 100%;
                        gap: 8px;
    
                        .name{
                            @include UI-18-24-400;
                        }
    
                        .line{
                            border-bottom: 1px dashed $text-secondary;
                            margin-bottom: 6px;
                            flex: 1;
                        }
    
                        .value {
                            @include UI-18-24-400;
                            max-width: 80%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
                .description{
                    @include UI-16-20-500;
                    margin-bottom: 24px;
                    color: $text-primary-opacity;

                    a {
                        color: $text-link;
                        text-decoration: none;
                    }
                }
                :deep(.base-button) {
                    @include UI-16-20-500;
                    width: 100%;
                }
            }
        }
    }
}
</style>