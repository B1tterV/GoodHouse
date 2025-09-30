<script setup lang="ts">
// Components
import BaseSwiper from '@/components/swipers/BaseSwiper.vue';
import BigSwiperCard from '@/components/swipers/BigSwiperCard.vue';
import NavCard from '@/components/cards/NavCard.vue';
import ProductsSwiper from '~/components/swipers/ProductsSwiper.vue'
import NewsSwiper from '@/components/swipers/NewsSwiper.vue'
import IdeasBlock from '@/components/index-page/IdeasBlock.vue'
import AboutCompany from '@/components/index-page/AboutCompany.vue'
import OurAdresses from '@/components/index-page/OurAdresses.vue'
import JoinUs from '@/components/index-page/JoinUs.vue'
import OurServices from '@/components/index-page/OurServices.vue'
import NavCardLoading from '~/components/cards/NavCardLoading.vue';

// Store
import { useProductsStore } from "~/stores/public/products";

// Types
import type { CatalogNavCard } from '@/types/catalog'

const productStore = useProductsStore();

const bigSwiperCards = [
  {
    src: "/images/base-big-card-1.jpg",
    title: "Подчеркните дизайн вашего дома",
    description: "Декоративный кирпич подойдёт как для минималистичного, так и для роскошного стиля",
    buttonName: "Под заказ"
  },
  {
    src: "/images/base-big-card-1.jpg",
    title: "Подчеркните дизайн вашего дома 2",
    description: "Декоративный кирпич подойдёт как для минималистичного, так и для роскошного стиля",
    buttonName: "Под заказ"
  }
]

const menuNavCards = computed<CatalogNavCard[] | null>(() => productStore.menuNavCards)

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

const newsCards = [
  {
    image: "/images/news/news-1.jpg",
    date: new Date(),
    link: "/",
    description: "Пополнение ассортимента в шоуруме по адресу Казанский проспект, 164с3"
  },
  {
    image: "/images/news/news-2.jpg",
    date: new Date(),
    link: "/",
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    image: "/images/news/news-3.jpg",
    date: new Date(),
    link: "/",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
  {
    image: "/images/news/news-4.jpg",
    date: new Date(),
    link: "/",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
  {
    image: "/images/news/news-5.jpg",
    date: new Date(),
    link: "/",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
  {
    image: "/images/news/news-6.jpg",
    date: new Date(),
    link: "/",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
]
</script>

<template>
  <div class="index-page">
    <div class="index-page__menu wrapper">
      <BaseSwiper>
        <template
          v-for="(bigSwiperCard, index) in bigSwiperCards"
          :key="`bigSwiperCard-${index}`"
        >
          <BigSwiperCard
            :title="bigSwiperCard.title"
            :description="bigSwiperCard.description"
            :button-name="bigSwiperCard.buttonName"
            :src="bigSwiperCard.src"
          />
        </template>
      </BaseSwiper>
      <div v-if="!menuNavCards" class="nav-cards">
        <NavCardLoading
          v-for="(loadinItem) in 3"
          :key="`loadinItem-${loadinItem}`"
        />
      </div>
      <div v-else class="nav-cards">
        <NavCard
          v-for="(menuNavCard, menuNavCardsIndex) in menuNavCards"
          :key="`menuNavCard-${menuNavCardsIndex}`"
          :img="menuNavCard.image"
          :icon="menuNavCard.icon"
          :text="menuNavCard.name"
          :link="`/catalog/${menuNavCard.slug}`"
        />
      </div>
    </div>
    <div class="index-page__new-products">
      <ProductsSwiper
        :items="newProductCards"
        :link="{ name: 'Все новинки', href: '/'}"
        title="Новинки"
      />
    </div>
    <div class="index-page__sales-products">
      <ProductsSwiper
        :items="salesCards"
        :link="{ name: 'Все акции', href: '/'}"
        isРighlightingTitle
        title="Акции"
      />
    </div>
    <IdeasBlock />
    <div class="index-page__sales-products">
      <ProductsSwiper
        :items="topSellersCards"
        :link="{ name: 'Все хиты', href: '/'}"
        title="Хиты продаж"
      />
    </div>
    <AboutCompany />
    <div class="index-page__sales-products">
      <NewsSwiper
        :items="newsCards"
        :link="{ name: 'Все новости', href: '/'}"
        title="Новости"
      />
    </div>
    <OurServices />
    <OurAdresses />
    <JoinUs />
  </div>
</template>

<style scoped lang="scss">
.index-page{
  &__menu{
    background: $block-gray;
    padding-bottom: 16px;
    padding-top: 16px;
    .base-swiper{
      margin-bottom: 16px;
    }

    .nav-cards{
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      flex-wrap: wrap;
      gap: 8px;
    }
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

  @media (max-width: 1024px) {
    &__menu{
      .nav-cards{
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 600px) {
    &__menu{
      .nav-cards{
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
