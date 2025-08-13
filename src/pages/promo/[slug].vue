<script setup lang="ts">
// Modules
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Icons
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import NavCard from '@/components/cards/NavCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import ProductCard from '@/components/cards/ProductCard.vue';

// Mock
import { generateMockProducts } from '@/stores/public/mockProducts';

const router = useRouter()

const navCards = [
  { icon: ArrowLeftIcon, text: "Все акции", link: '/promo'},
]

const products = ref(generateMockProducts(4))
</script>

<template>
    <div class="promo-post-page">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="promo-post-page__nav-cards">
                    <NavCard
                        v-for="(navCard, navCardIndex) in navCards"
                        :key="`navCardIndex-${navCardIndex}`"
                        :icon="navCard.icon"
                        :text="navCard.text"
                        :link="navCard.link"
                    />
                </div>
            </template>
            <template v-slot:content>
                <div class="promo-post-page__content">
                    <div class="promo-banner">
                        <img
                            src="/images/promo.jpg"
                            alt="promo"
                            class="promo-banner"
                            width="1200"
                            height="360"
                        >
                    </div>
                    <div class="promo-text">
                        <div class="promo-text__title"> Название акции </div>
                        <div class="promo-text__description">
                            Описание, даты проведения, продающий текст под красочным баннером.
                            Возможно адреса шоурумов, где применимы и неприменимы акции.
                            Описание, даты проведения, продающий текст под красочным баннером.
                            Возможно адреса шоурумов, где применимы и неприменимы акции.
                            Описание, даты проведения, продающий текст под красочным баннером.
                            Возможно адреса шоурумов, где применимы и неприменимы акции.
                        </div>
                    </div>
                    <div class="more-promo">
                        <div class="more-promo__title">Акционные товары</div>
                        <div class="more-promo__cards">
                            <ProductCard
                                v-for="(productCard, productCardIndex) in products"
                                :key="`productCard-${productCardIndex}`"
                                :tag="productCard.tag"
                                :image="productCard.image"
                                :prev-price="productCard.prevPrice"
                                :current-price="productCard.currentPrice"
                                :code="productCard.code"
                                :description="productCard.description"
                            />
                        </div>
                        <BaseButton
                            class="more-promo__btn"
                            color="dark"
                            text="Все акционные товары"
                            @click="router.push('/promo')"
                        />
                    </div>
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.promo-post-page{
    .page-filter-content{
        background: $block-light;
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    }

    &__content{
        .promo-banner{
            width: 100%;
            object-fit: cover;
            margin-bottom: 24px;
        }
        .promo-text{
            margin-bottom: 40px;
            &__title{
                @include UI-24-30-400;
                margin-bottom: 24px;
            }
            &__description{
                @include UI-18-24-400;
            }
        }
        .more-promo{
            &__title {
                @include UI-24-30-400;
                margin-bottom: 24px;
            }
            &__cards{
                display: flex;
                gap: 30px;
                margin-bottom: 40px;
            }
        }
    }
}
</style>