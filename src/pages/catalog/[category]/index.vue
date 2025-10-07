<script setup lang="ts">
// Modules
import { ref } from 'vue';

// Icons
import HomeSmileIcon from '@/assets/icons/nav-cards/home-smile.svg'
import ForIcon from '@/assets/icons/nav-cards/for.svg'
import KrovlyaIcon from '@/assets/icons/nav-cards/krovlya.svg'
import layersThreeIcon from '@/assets/icons/nav-cards/layers-three-02.svg'
import PaintbucketIcon from '@/assets/icons/nav-cards/paintbucket.svg'
import FormatSquareIcon from '@/assets/icons/nav-cards/format-square.svg'
import MenuIcon from '@/assets/icons/nav-cards/menu-03.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import BaseButton from '@/components/common/BaseButton.vue'
import BaseFilter from '@/components/filters/BaseFilter.vue';
import BasePagination from '@/components/common/BasePagination.vue';
import ProductCard from '@/components/cards/ProductCard.vue';
import NavCard from '@/components/cards/NavCard.vue';
import BaseBreadcrumbs from '@/components/common/BaseBreadcrumbs.vue';

// Store
import { useProductsStore } from "~/stores/public/products";

// Types
import type { FilterItem } from '@/types/filters'

// Mock
import { generateMockProducts } from '@/stores/public/mockProducts';

const productStore = useProductsStore();
const route = useRoute()

const currentSlug = computed(() => route?.params!.category as string)

const currentPage = ref<number>(1);
const totalPages = ref<number>(1);

const filters = ref<Array<{ title: string; items: FilterItem[]}>>([
  {
    title: "Вид",
    items: [
      { id: 1, name: "Кирпич ручной формовки", value: "k1", selected: false },
      { id: 2, name: "Клинкерный кирпич", value: "k2", selected: false },
      { id: 3, name: "Керамический кирпич", value: "k3", selected: false },
      { id: 4, name: "Длинноформатный кирпич", value: "k4", selected: false }
    ]
  },
  {
    title: "Размер, мм",
    items: [
      { id: 5, name: "215*102*65", value: "r1", selected: false },
      { id: 6, name: "215*102*65", value: "r2", selected: false },
      { id: 7, name: "210*100*65", value: "r3", selected: false },
      { id: 8, name: "240*90*71", value: "r4", selected: false },
      { id: 9, name: "472*313", value: "r5", selected: false },
      { id: 10, name: "456*276", value: "r6", selected: false },
      { id: 11, name: "453*260", value: "r6", selected: false }
    ]
  },
  {
    title: "Бренд",
    items: [
      { id: 12, name: "Керакам", value: "b1", image: '', selected: false },
      { id: 13, name: "Тандем", value: "b2", image: '', selected: false },
      { id: 14, name: "Донские Зори", value: "b3", image: '', selected: false },
      { id: 15, name: "БКЗ", value: "b4", image: '', selected: false },
      { id: 16, name: "Керакам", value: "b5", image: '', selected: false },
      { id: 17, name: "Тандем", value: "b6", image: '', selected: false },
    ]
  },
  {
    title: "Цвет",
    items: [
      { id: 18, name: "Красный", value: "co1", selected: false},
      { id: 19, name: "Желтый", value: "co2", selected: false},
      { id: 20, name: "Коричневый", value: "co3", selected: false},
      { id: 21, name: "Оранжевый", value: "co4", selected: false},
    ]
  },
  {
    title: "Страна",
    items: [
      { id: 22, name: "Россия", value: "c1", selected: false},
      { id: 23, name: "Германия", value: "c2", selected: false},
    ]
  },
  {
    title: "Марка прочности, кг/см2",
    items: [
      { id: 24, name: "100", value: "m1", selected: false},
    ]
  }
])

const products = ref()

const changePage = async () => {
  await getProducts()
}

const helpItems = [
  {
    title: "Чем отличается облицовочный кирпич от обычного?",
    description: `
      В составе облицовочных кирпичей присутствуют в основном только природные
      материалы: глина, известняк, цемент и красители. Лицевой кирпич принимает
      на себя все воздействия окружающей среды, атмосферные осадки, поэтому он
      должен быть достаточно прочным, высокой плотности и долговечным.
    `
  },
  {
    title: "Можно ли строить стены из облицовочного кирпича?",
    description: `
      Внутренние стены обычно строят из рядового кирпича, они называются
      «черновыми», в большинстве случаев они не видны за облицовкой.
      Тратить лицевой кирпич на такие стены не имеет смысла с финансовой точки зрения.
    `
  },
  {
    title: "Сколько служит облицовочный кирпич?",
    description: `
      Срок службы облицовочного кирпича, в зависимости от его вида,
      составляет от 30 до 50 лет. На срок эксплуатации фасадного кирпича
      влияют такие показатели, как прочность, морозостойкость и низкий
      уровень водопоглощения. Самый длительный срок службы у клинкерного кирпича.
    `
  },
  {
    title: "Почему сначала кладут облицовочный кирпич?",
    description: `
      Во-первых, стены из керамзитных блоков без облицовки сильно пострадают
      от дождей и морозов. Во-вторых, кладку из облицовочного кирпича и кладку
      из блоков необходимо перевязывать. Поэтому керамзитный блок и облицовочный
      кирпич лучше класть одновременно, сразу же перевязывать и закладывать
      утеплитель в зазор между ними.
    `
  }
]

const menuNavCards = [
  { icon: HomeSmileIcon, text: "Благоустройство", link: '/catalog' },
  { icon: ForIcon, text: "Облицовочный кирпич", link: '/catalog' },
  { icon: KrovlyaIcon, text: "Кровельные материалы", link: '/catalog' },
  { icon: layersThreeIcon, text: "Обустройство кровли", link: '/catalog' },
  { icon: PaintbucketIcon, text: "Строительные смеси", link: '/catalog' },
  { icon: FormatSquareIcon, text: "Тротуарная плитка", link: '/catalog' },
  { icon: MenuIcon, text: "Все материалы", link: '/catalog' },
]

const crumbs = [
  { name: "Кирпич", path: "/catalog"},
  { name: "Кирпич ручной формовки", path: "/catalog"}
]

async function getProducts() {
  try {
    const response = await productStore?.getProductsByCategory(
      currentSlug.value,
      { page: currentPage.value, size: 24 }
    );
    if (response?.status?.value === "success") {
      const data = response?.data?.value
      products.value = data?.items
      totalPages.value = data.pages
    } else {
      console.warn('Не удалось получить продукты')
    }
  } catch {
    console.warn('Не удалось получить продукты')
  }
}

onMounted(() => {
  setTimeout(async () => {
    await getProducts()
  }, 100)
});
</script>

<template>
    <div class="catalog-page">
        <div class="catalog-page__breadcrumps">
          <BaseBreadcrumbs :crumbs="crumbs" />
        </div>
        <div class="catalog-page__nav-cards wrapper">
          <NavCard
            v-for="(menuNavCard, menuNavCardsIndex) in menuNavCards"
            :key="`menuNavCard-${menuNavCardsIndex}`"
            :icon="menuNavCard.icon"
            :text="menuNavCard.text"
            :link="menuNavCard.link"
          />
        </div>
        <PageFilterContent>
            <template v-slot:filter>
                <div class="catalog-page__filters">
                    <div class="title">Фильтр</div>
                    <div class="filters-content">
                        <BaseFilter
                            v-for="(filter, filterIndex) in filters"
                            :key="`filter-group-${filterIndex}`"
                            :title="filter.title"
                            :items="filter.items"
                        />
                        <BaseButton text="Применить фильтр" color="red" />
                        <BaseButton text="Сбросить всё" color="gray" />
                    </div>
                </div>
            </template>
            <template v-slot:content>
                <div class="catalog-page__content">
                    <div id="catalog" class="catalog">
                        <div class="content-title">Кирпич ручной формовки</div>
                        <img class="banner" src="/images/banner.jpg" alt="banner" width="1200" height="104">
                        <div class="filters">

                        </div>
                        <div class="content">
                          <div class="content__products">
                            <ProductCard
                                v-for="(productCard, productCardIndex) in products"
                                :key="`productCard-${productCardIndex}`"
                                :tag="productCard.tag"
                                :image="productCard.image"
                                :prev-price="productCard.prevPrice"
                                :current-price="productCard.price"
                                :discount="productCard.discount"
                                :code="productCard.article"
                                :description="productCard.text"
                                :slug="productCard.slug"
                                :categorySlug="currentSlug"
                            />
                          </div>
                        </div>
                        <BasePagination
                          v-model="currentPage"
                          :totalPages="totalPages"
                          @update:model-value="changePage()"
                        />
                    </div>
                </div>
            </template>
        </PageFilterContent>
        <div class="catalog-page__help wrapper">
          <div class="help-items">
            <div
              v-for="(helpItem, helpItemIndex) in helpItems"
              :key="`helpItem-${helpItemIndex}`"
              class="help-item"
            >
              <div class="help-item__title"> {{ helpItem.title }} </div>
              <div class="help-item__description"> {{ helpItem.description }} </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.catalog-page{

    .page-filter-content {
      background: $block-light;
      border-radius: 16px;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
      margin-bottom: 16px;
    }

    &__nav-cards{
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    &__filters{
        .title {
            @include UI-18-24-400;
            margin-bottom: 16px;
        }

        .filters-content{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
    &__content {
        .catalog{
            margin-bottom: 24px;

            .banner {
                width: 100%;
                height: 104px;
                border-radius: 8px;
                margin-bottom: 24px;
            }

            .content{
              margin-bottom: 24px;

              &__products{
                display: grid;
                grid-template-columns: repeat(4, 277px);
                gap: 30px;

                .product-card{
                  width: 277px;
                }
              }
            }

        }
    }
    &__help{
      padding-top: 60px;
      padding-bottom: 60px;
      background: $block-light;
      border-radius: 16px;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
      .help-items{
        display: flex;
        flex-direction: column;
        gap: 48px;
        .help-item{
          &__title{
            @include UI-20-100p-400;
            margin-bottom: 16px;
          }
          &__description{
            @include UI-18-24-400;
            color: $text-primary-opacity;
          }
        }
      }
    }
}
</style>