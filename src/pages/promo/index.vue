<script setup lang="ts">
// Modules
import { ref } from 'vue';

// Components
import BaseBreadcrumbs from '@/components/common/BaseBreadcrumbs.vue';
import NewsCard from '@/components/cards/NewsCard.vue';
import BasePagination from '@/components/common/BasePagination.vue';

const crumbs = [
  { name: "Акции", path: "/promo"},
]

const currentPage = ref<number>(1);
const totalPages = ref<number>(17)

const promoCards = [
  {
    image: "/images/news/news-1.jpg",
    date: new Date(),
    link: "/promo/news-1",
    description: "Пополнение ассортимента в шоуруме по адресу Казанский проспект, 164с3"
  },
  {
    image: "/images/news/news-2.jpg",
    date: new Date(),
    link: "/promo/news-2",
    description: "Кирпич ручной работы WO14 Болдино ТМ Донские зори"
  },
  {
    image: "/images/news/news-3.jpg",
    date: new Date(),
    link: "/promo/news-3",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
  {
    image: "/images/news/news-4.jpg",
    date: new Date(),
    link: "/promo/news-4",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  },
  {
    image: "/images/news/news-5.jpg",
    date: new Date(),
    link: "/promo/news-5",
    description: "20% скидки на клинкерную плитку при заказе онлайн"
  }
]
</script>

<template>
    <div class="promo-page">
        <BaseBreadcrumbs :crumbs="crumbs" />
        <div class="promo-page__content wrapper">
            <div class="title">Акции</div>
            <div class="cards">
                <NewsCard
                    v-for="(promoCard, promoCardIndex) in promoCards"
                    :key="`promoCard-${promoCardIndex}`"
                    :image="promoCard.image"
                    :date="promoCard.date"
                    :description="promoCard.description"
                    :link="promoCard.link"
                />
            </div>
            <BasePagination
                v-model="currentPage"
                :totalPages="totalPages"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.promo-page{
    &__content{
        background: $block-light;
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
        padding-top: 60px;
        padding-bottom: 60px;

        .title{
            margin-bottom: 24px;
        }

        .cards{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 28px;
            overflow: hidden;
            margin-bottom: 24px;
        }
    }
}
</style>