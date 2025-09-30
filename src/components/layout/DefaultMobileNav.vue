
<script setup lang="ts">
// Icons
import HomeSmileIcon from '@/assets/icons/nav-cards/home-smile.svg'
import ShoppingBagIcon from '@/assets/icons/shopping-bag-03.svg'
import BarChartIcon from '@/assets/icons/bar-chart-square-02.svg'
import HeartRoundedIcon from '@/assets/icons/heart-rounded.svg'
import MenuIcon from '@/assets/icons/nav-cards/menu-03.svg'

const router = useRouter()
const route = useRoute()

const navs = ref([
  {
    name: "Главная",
    link: "/",
    icon: HomeSmileIcon,
    exact: true
  },
  {
    name: "Сравнения",
    link: "/compare",
    icon: BarChartIcon,
  },
  {
    name: "Каталог",
    link: "/catalog",
    icon: MenuIcon,
  },
  {
    name: "Корзина",
    link: "/cart",
    icon: ShoppingBagIcon,
  },
  {
    name: "Избранное",
    link: "/favorite",
    icon: HeartRoundedIcon,
  }
])

const activeTab = ref('')

// Отслеживаем изменения маршрута
watch(() => route.path, (newPath) => {
  updateActiveTab(newPath)
})

// Инициализируем при монтировании
onMounted(() => {
  updateActiveTab(route.path)
})

function updateActiveTab(path: string) {
  const nav = navs.value.find(n => 
    n.link === '/' ? path === '/' : path.startsWith(n.link)
  )
  if (nav) {
    activeTab.value = nav.link
  }
}

function navigateTo(link: string) {
  activeTab.value = link // Сразу обновляем активную вкладку
  router.push(link)
}

const isActive = (link: string) => activeTab.value === link
</script>

<template>
    <div class="default-mobile-nav">
        <div class="default-mobile-nav__tabs">
            <div
                v-for="(nav, navIndex) in navs"
                :key="`nav-${navIndex}`"
                class="tab-item"
                :class="{ active: isActive(nav.link) }"
                @click="navigateTo(nav.link)"
            >
                <component :is="nav.icon" filled />
                <div class="tab-item__name">{{ nav.name }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.default-mobile-nav{
    position: sticky;
    height: 60px;
    width: 100vw;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    box-shadow: 0 -2px 8px #00000026;
    z-index: 11;
    background-color: #fff;

    &__tabs{
        display: flex;
        padding: 0;
        height: 100%;
        align-items: center;
        width: 100vw;
        background: #fff;
        margin: 0;
        list-style: none;
        justify-content: space-around;

        .tab-item{
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
                color: $icon-gray;
                width: 22px;
                height: 22px;
            }

            &__name {
                @include UI-12-20-400;
                color: $text-secondary;
            }

            &.active {
                svg {
                    color: $icon-red;
                }

                .tab-item__name {
                    color: $text-link;
                }
            }
        }
    }
}
</style>