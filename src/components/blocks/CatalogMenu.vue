<script setup lang="ts">
// Components
import NavCard from '@/components/cards/NavCard.vue';
import NavCardLoading from '~/components/cards/NavCardLoading.vue';

// Store
import { useProductsStore } from "~/stores/public/products";

// Types
import type {
    CatalogNavCard,
    SubcategoryItem
} from '@/types/catalog'

const emit = defineEmits(['close'])

const props = defineProps({
  isModal: { type: Boolean, default: false },
  showAllCard: { type: Boolean, default: false },
  selectedCard: { type: String, default: null }
})

const router = useRouter()
const productStore = useProductsStore();

const menuNavCards = computed<CatalogNavCard[] | null>(() => JSON.parse(JSON.stringify(productStore.menuNavCards)))
const selectedCard = ref<CatalogNavCard | null>(null);

const subcategories = ref<SubcategoryItem[] | null>(null)

async function getSubcategories() {
    try {
        if (selectedCard.value?.id) {
            const response = await productStore?.getSubcategoriesByCategorySlug(selectedCard.value.slug);
            if (response?.status?.value === "success") {
              subcategories.value = response?.data?.value as SubcategoryItem[]
            }
        } else {
            console.warn('Возникла ошибка при получении подкатегорий')
        }
    } catch {
        console.warn('Возникла ошибка при получении подкатегорий')
    }
}

const changeCategory = async (menuNavCard: CatalogNavCard) => {
    selectedCard.value = menuNavCard;
    await getSubcategories()
}

onMounted(async () => {
  setTimeout(async () => {
      if (menuNavCards.value) selectedCard.value = menuNavCards.value[0]
      if (!props.showAllCard && menuNavCards.value?.find(e => e.id === -1)) {
        menuNavCards.value = menuNavCards.value.pop()
      }
      await getSubcategories()
  }, 100);

});
</script>

<template>
    <div class="catalog-menu wrapper">
        <div v-if="!menuNavCards" class="catalog-menu__cards">
            <NavCardLoading
                v-for="(loadinItem) in 3"
                :key="`loadinItem-${loadinItem}`"
            />
        </div>
        <div v-else class="catalog-menu__cards">
            <NavCard
                v-for="(menuNavCard, menuNavCardsIndex) in menuNavCards"
                :key="`menuNavCard-${menuNavCardsIndex}`"
                :img="menuNavCard.icon"
                :icon="menuNavCard.iconComponent"
                :text="menuNavCard.text"
                :isActive="menuNavCard?.id === selectedCard?.id"
                @click="changeCategory(menuNavCard)"
            />
        </div>
        <div v-if="selectedCard" class="catalog-menu__content">
            <div class="header">
                <div class="header__title">{{ selectedCard.text }}</div>
                <div v-if="isModal" class="header__link" @click="emit('close')">Скрыть меню</div>
            </div>
            <div v-if="subcategories" class="items">
                <div
                    v-for="(item, itemIndex) in subcategories"
                    :key="`item-${itemIndex}`"
                    class="item"
                    @click="
                        router.push(`/catalog/${selectedCard.slug}?types[]=${item.slug}`);
                        emit('close')
                    "
                >
                    <div class="item__image">
                        <img :src="item.image" :alt="item.name" width="205" height="188">
                    </div>
                    <div class="item__name">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.catalog-menu{
    display: flex;
    gap: 137px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    background: $block-light;
    padding-top: 60px;
    padding-bottom: 60px;
    z-index: 100;
    width: 100dvw;
    border-radius: 16px;
    &__cards{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 274px;
    }

    &__content{
        width: 100%;
        .header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
            &__title{
                @include UI-24-30-400;
            }
            &__link {
                @include UI-14-20-400;
                cursor: pointer;
                color: $text-link;
            }
        }

        .items{
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            .item{
                cursor: pointer;
                transition: all 0.3s ease;
                &__image{
                    padding: 36px;
                    margin-bottom: 24px;
                    img {
                        object-fit: cover;
                    }
                }
                &__name{
                    @include UI-18-24-400;
                }

                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }
}
</style>