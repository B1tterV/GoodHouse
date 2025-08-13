<script setup lang="ts">
// Icons
import MenuIcon from '@/assets/icons/nav-cards/menu-03.svg'

// Store
import { useProductsStore } from "~/stores/public/products";

// Types
import type { CatalogNavCard } from '@/types/catalog'

const productStore = useProductsStore();

async function getList() {
  const response = await productStore?.getCategories();
  if (response?.status?.value === "success") {
    const data = response?.data?.value as CatalogNavCard[]
    const allCards = data || []
    if(!allCards.find(item => item.id === -1))
      allCards.push({
        id: -1,
        icon: MenuIcon,
        name: "Все материалы",
        slug: ''
      })

    productStore.menuNavCards = allCards
  }
}

onMounted(async () => {
  setTimeout(async () => {
    await nextTick()
    getList()
  }, 1);
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">

</style>
