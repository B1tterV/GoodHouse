<script setup lang="ts">
// Modules
import { computed } from 'vue';

// Icons
import ShoppingBagIcon from '@/assets/icons/shopping-bag-03.svg'
import BarChartIcon from '@/assets/icons/bar-chart-square-02.svg'
import HeartRoundedIcon from '@/assets/icons/heart-rounded.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import ProductCardCounter from '@/components/cards/ProductCardCounter.vue';

// Store
import { useCartStore } from '@/stores/public/cart'

const props = defineProps({
  tag: { type: String, default: null },
  image: { type: String, default: null },
  imageAlt: { type: String, default: null },
  prevPrice: { type: Number, default: null },
  currentPrice: { type: Number, default: null },
  code: { type: Number, required: true },
  description: { type: String, required: true },
})

const router = useRouter()
const cartStore = useCartStore()

const formatedPrice = computed(() => {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(
        props.currentPrice,
    )
})

const addToCart = () => {
    cartStore.cart.push({
      code: props.code,
      price: props.currentPrice,
    })
}

const removeFromCart = () => {
    const cartIndex = cartStore.cart.findIndex(item => item.code === props.code)
    cartStore.cart.splice(cartIndex, 1)
}

const countInCart = computed(() => cartStore.cart.filter(item => item.code === props.code))
</script>

<template>
    <div class="product-card">
        <div v-if="tag" class="product-card__tag">{{ tag }}</div>
        <div
            class="product-card__image"
            @click="router.push('/catalog/test/test')"
        >
            <img :src="image" :alt="imageAlt || description" width="234" height="176">
        </div>
        <div class="product-card__content">
            <div class="product-card__price">
                <div class="preview-price">{{ prevPrice }}</div>
                <div class="current-price">{{ formatedPrice }}</div>
                <div class="additional-price-text">шт</div>
            </div>
            <div class="product-card__code">{{ code }}</div>
            <div class="product-card__description">{{ description }}</div>
        </div>
        <div class="product-card__buttons">
            <BaseButton
                v-if="!countInCart.length"
                color="red"
                text="В корзину"
                :icon="ShoppingBagIcon"
                @click="addToCart()"
            />
            <ProductCardCounter
                v-else
                :count="countInCart.length"
                @add="addToCart()"
                @remove="removeFromCart()"
            />
            <BaseButton color="gray" :icon="HeartRoundedIcon"/>
            <BaseButton color="gray" :icon="BarChartIcon"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-card{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    width: 298px;
    transition: all 0.5s ease;
    height: auto;
    
    &__tag{
        @include UI-16-20-500;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 8px;
        padding: 0px 8px;
        width: fit-content;
        height: 20px;

        background: $block-dark;
        color: $text-light;
    }

    &__image{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 240px;
        margin-bottom: 26px;
        border-radius: 8px;
        padding: 36px;
        transition: all 0.3s ease;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &__price{
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 19px;

        .preview-price{
            @include UI-14-20-400;
            color: $text-secondary;
            text-decoration: line-through;
        }
        .current-price{
            @include UI-24-20-400;
        }
        .additional-price-text{
            @include UI-16-20-500;
            color: $text-secondary;
        }
    }

    &__code{
        @include UI-16-20-500;
        color: $text-secondary;
        margin-bottom: 4px;
    }

    &__description{
        @include UI-18-24-400;
        margin-bottom: 26px;
        transition: all 0.5s ease;
    }

    &__buttons{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__content{
        border-left: 1px solid transparent;
        padding-left: 16px;
        transition: all 0.5s ease;
        flex: 1;
    }

    &:hover {
        .product-card {
            &__image {
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
                padding: 32px;
            }
            &__content{
                border-left: 1px solid $block-red;
            }

            &__description{
                color: $text-link;
            }
        }
    }
}
</style>