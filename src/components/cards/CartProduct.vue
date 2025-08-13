<script setup lang="ts">
// Icons
import CloseIcon from '@/assets/icons/x-close.svg'

// Components
import ProductCardCounter from '@/components/cards/ProductCardCounter.vue';

const props = defineProps({
  image: { type: String, required: true },
  article: { type: Number, required: true },
  name: { type: String, required: true },
  oldPrice: { type: Number, default: null },
  currentPrice: { type: Number, required: true },
  tag: { type: String, default: null },
})

const productCount = ref(1)

const addCount = () => {
  productCount.value += 1
}

const minusCount = () => {
  if (productCount.value > 1)
    productCount.value -= 1
}

const totalPrice = computed(() => {
  return productCount.value * props.currentPrice
})
</script>

<template>
    <div class="cart-product">
        <div class="cart-product__image">
            <div v-if="tag" class="tag">{{ tag }}</div>
            <img :src="image" :alt="`cart-product-${article}`">
        </div>
        <div class="cart-product__info">
            <div class="article">{{ article }}</div>
            <div class="name">{{ name }}</div>
        </div>
        <div class="cart-product__price">
            <div class="old-price">{{ oldPrice }}</div>
            <div class="current-price">{{ currentPrice }}₽</div>
            <div class="value">шт</div>
        </div>
        <ProductCardCounter
            :count="productCount"
            @add="addCount"
            @remove="minusCount()"
        />
        <div class="cart-product__total-price">
            {{ totalPrice }}₽
        </div>
        <div class="cart-product__remove">
            <CloseIcon filled />
        </div>
    </div>
</template>

<style scoped lang="scss">
.cart-product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border-radius: 8px;
    padding: 0px 24px 0px 0px;
    background: $block-gray;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.03);
    height: 148px;

    &__image{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: $block-light;
        border-radius: 8px;
        height: 100%;
        width: 266px;

        .tag {
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


        img {
            height: 74px;
            width: auto;
            object-fit: cover;
        }
    }
    &__info{
        padding: 16px;
        flex: 1;
        max-width: 414px;

        .article{
            @include UI-16-20-500;
            margin-bottom: 4px;
            color: $text-secondary;
        }
        .name{
            @include UI-18-24-400;
        }
    }
    &__price{
        display: flex;
        align-items: center;
        gap: 6px;
        .old-price{
            @include UI-16-20-500;
            text-decoration: line-through;
            color: $text-secondary;
        }
        .current-price{
            @include UI-24-30-400;
            line-height: 83%;
        }
        .value {
            @include UI-16-20-500;
            color: $text-secondary;
        }
    }
    &__total-price{
        @include UI-24-30-400;
        line-height: 83%;
        min-width: 100px;
        text-align: right;
    }
    &__remove{
        cursor: pointer;
        svg {
            color: $icon-red;
            width: 20px;
            height: 20px;
        }
    }
}
</style>