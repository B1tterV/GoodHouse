<script setup lang="ts">
// Modules
import { ref } from 'vue';

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import BaseButton from '@/components/common/BaseButton.vue'
import BaseFilter from '@/components/filters/BaseFilter.vue';
import BasePagination from '@/components/common/BasePagination.vue';
import BrandsSwiper from '~/components/swipers/BrandsSwiper.vue';
import BaseBreadcrumbs from '@/components/common/BaseBreadcrumbs.vue';
import NeedMoreInfo from '@/components/blocks/NeedMoreInfo.vue'
import SearchInput from '@/components/common/SearchInput.vue'

// Types
import type { FilterItem } from '@/types/filters'

// Mock
import { generateMockProducts } from '@/stores/public/mockProducts';

const currentPage = ref<number>(1);
const totalPages = ref<number>(17);

const filters = ref<Array<{ title: string; items: FilterItem[]}>>([
  {
    title: "Категории",
    items: [
      { id: 1, name: "Вентилируемый фасад", value: "k1", selected: false },
      { id: 2, name: "Водосточные системы", value: "k2", selected: false },
      { id: 3, name: "Террасные пластины", value: "k3", selected: false },
      { id: 4, name: "Штукатурные системы", value: "k4", selected: false },
      { id: 4, name: "Вентилируемый фасад", value: "k5", selected: false }
    ]
  },
])

const changePage = () => {
}

const crumbs = [
  { name: "Бредны", path: "/brands"},
]

const brands = [
  {
    brand: {
        image: "/images/brands/brand-1.png",
        name: "AQUASYSTEM",
        items: [
          { name: "Вентилируемый фасад", count: "42" },
          { name: "Водосточные системы", count: "193" },
        ]
    },
    items: generateMockProducts(24)
  },
  {
    brand: {
        image: "/images/brands/brand-2.png",
        name: "ATLAS CONCORDE RUSSIA",
        items: [
          { name: "Террасные пластины", count: "12" },
        ]
    },
    items: generateMockProducts(24)
  },
  {
    brand: {
        image: "/images/brands/brand-3.png",
        name: "BORGE",
        items: [
          { name: "Снегозадержатели", count: "12" },
        ]
    },
    items: generateMockProducts(24)
  }
]

const searchValue = ref<string>("")
</script>

<template>
    <div class="catalog-page">
        <div class="catalog-page__breadcrumps">
          <BaseBreadcrumbs :crumbs="crumbs" />
        </div>
        <PageFilterContent>
            <template v-slot:filter>
                <div class="catalog-page__filters">
                    <div class="title">Фильтр</div>
                    <div class="filters-content">
                        <div class="filters-content__search">
                            <div class="search-title">Поиск по брендам</div>
                            <SearchInput
                                v-model="searchValue"
                                placeholder="Например"
                                placeholderAddition="Borge"
                            />
                        </div>
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
                    <div id="brands" class="brands">
                        <div class="content-title">Бренды</div>
                        <div class="content">
                          <div class="content__brands">
                            <div
                                v-for="(brand, brandIndex) in brands"
                                :key="`brand-${brandIndex}`"
                                class="brand-item"
                            >
                                <div class="brand-item__card">
                                    <div class="image">
                                        <img :src="brand.brand.image" alt="brand">
                                    </div>
                                    <div class="name">
                                        {{ brand.brand.name }}
                                    </div>
                                    <div class="items">
                                        <div
                                            v-for="(brandItem, brandItemIndex) in brand.brand.items"
                                            :key="`brandItem-${brandItemIndex}`"
                                            class="item"
                                        >
                                            <div class="item__name">{{ brandItem.name }}</div>
                                            <div class="item__count">{{ brandItem.count }}</div>
                                        </div>
                                        <div class="all-products">Вся продукция бренда</div>
                                    </div>
                                </div>
                                <BrandsSwiper
                                    class="brand-item__swiper"
                                    :items="brand.items"
                                />
                            </div>
                          </div>
                        </div>
                        <BasePagination
                          v-model="currentPage"
                          :totalPages="totalPages"
                          @update:model-value="changePage()"
                        />
                    </div>
                    <NeedMoreInfo />
                </div>
            </template>
        </PageFilterContent>
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

            &__search{
                align-items: center;
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
                border-radius: 8px;
                padding: 16px;
                background: $block-light;

                .search-title{
                    @include UI-16-20-500;
                    margin-bottom: 16px;
                }
            }
        }
    }
    &__content {
        .brands{
            margin-bottom: 24px;
            overflow: hidden;
            .content{
                &__brands{
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    margin-bottom: 24px;
    
                    .brand-item{
                        display: flex;
                        gap: 64px;
                        border-radius: 8px;
                        background: $block-gray;
                        padding: 16px;

                        &__card{
                            display: flex;
                            flex-direction: column;
                            width: 283px;

                            .image{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: relative;
                                width: 100%;
                                height: 240px;
                                padding: 36px;
                                background: $block-light;
                                margin-bottom: 16px;
                                border-radius: 8px;

                                img {
                                    object-fit: cover;
                                }
                            }

                            .name{
                                @include UI-18-24-400;
                            }

                            .items{
                                display: flex;
                                flex-direction: column;
                                gap: 14px;
                                flex: 1;
                                justify-content: flex-end;

                                .item{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    &__name {
                                        @include UI-18-24-400;
                                        max-width: 80%;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }
                                    &__count {
                                        @include UI-18-24-400;
                                    }
                                }

                                .all-products{
                                    @include UI-18-24-400;
                                    cursor: pointer;
                                    color: $text-link;
                                }
                            }
                        }

                        &__swiper{
                            width: calc(100% - 353px) !important;
                        }
                    }
                }
            }
        }
    }
}
</style>