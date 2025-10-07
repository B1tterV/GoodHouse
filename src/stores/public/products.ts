import { defineStore, acceptHMRUpdate } from "pinia";

// Icons
import HomeSmileIcon from '@/assets/icons/nav-cards/home-smile.svg'
import ForIcon from '@/assets/icons/nav-cards/for.svg'
import KrovlyaIcon from '@/assets/icons/nav-cards/krovlya.svg'
import layersThreeIcon from '@/assets/icons/nav-cards/layers-three-02.svg'
import PaintbucketIcon from '@/assets/icons/nav-cards/paintbucket.svg'
import FormatSquareIcon from '@/assets/icons/nav-cards/format-square.svg'
import MenuIcon from '@/assets/icons/nav-cards/menu-03.svg'

// Types
import type { CatalogNavCard } from '@/types/catalog'

export const useProductsStore = defineStore("products", () => {

  const menuNavCards = ref<CatalogNavCard[] | null>(null)

  async function getCategories(params = { page: 1, limit: 10 }) {
    const response = await useApi('/categories/', {
      method: 'GET',
      params
    }, {})

    return response
  }

  async function getSubcategories(id: number) {
    const response = await useApi(`/api/subcategories/${id}`, {
      method: "GET",
    }, {});

    return response;
  }

  async function getSubcategoriesByCategorySlug(slug: string) {
    const response = await useApi(`/subcategories/category/${slug}`, {
      method: "GET",
    }, {});

    return response;
  }

  async function getProduct(productSlug: string) {
    const response = await useApi(`/products/${productSlug}`, {
      method: "GET",
    }, {}, true);

    return response;
  }

  async function getProductsByCategory(
    category_slug: string,
    params = { page: 1, size: 10 }
  ) {
    const response = await useApi(`/products/category/${category_slug}`, {
      method: 'GET',
      params
    }, {})

    return response
  }

  return {
    menuNavCards,
    getCategories,
    getSubcategories,
    getSubcategoriesByCategorySlug,
    getProductsByCategory,
    getProduct
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
