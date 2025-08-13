<script setup lang="ts">
// Components
import ProductsSwiper from '~/components/swipers/ProductsSwiper.vue'
import CatalogMenu from '@/components/blocks/CatalogMenu.vue';
import OurAdvantages from '~/components/blocks/OurAdvantages.vue';

// Store
import { useProductsStore } from "~/stores/public/products";

const productStore = useProductsStore();

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

const salesCards = [
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285737,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285738,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285739,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285710,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285711,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "%",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285712,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  }
]

const topSellersCards = [
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285713,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285714,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285715,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285721,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285722,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    tag: "Хит",
    image: "/images/products/new-product-1.png",
    prevPrice: 999,
    currentPrice: 599,
    code: 1285723,
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  }
]
</script>

<template>
  <div class="catalog-page">
    <CatalogMenu />
    <OurAdvantages />
    <div class="catalog-page__new-products">
      <ProductsSwiper
        :items="newProductCards"
        :link="{ name: 'Все новинки', href: '/'}"
        title="Новинки"
      />
    </div>
    <div class="catalog-page__sales-products">
      <ProductsSwiper
        :items="salesCards"
        :link="{ name: 'Все акции', href: '/'}"
        isРighlightingTitle
        title="Акции"
      />
    </div>
    <div class="catalog-page__sales-products">
      <ProductsSwiper
        :items="topSellersCards"
        :link="{ name: 'Все хиты', href: '/'}"
        title="Хиты продаж"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog-page{
  .catalog-menu {
    margin-bottom: 16px;
  }

  .our-advantages{
    margin-bottom: 16px;
  }

  &__new-products{
    margin-bottom: 16px;
  }

  &__sales-products{
    margin-bottom: 16px;
  }

  @media (max-width: 1720px) {
    &__menu{
      .nav-cards{
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }

  @media (max-width: 1220px) {
    &__menu{
      .nav-cards{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
