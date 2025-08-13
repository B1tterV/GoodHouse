<script setup lang="ts">
// Icons
import LogoIcon from '@/assets/icons/logo.svg'
import PhoneIncomingIcon from '@/assets/icons/phone-incoming-01.svg'
import TelegarmIcon from '@/assets/icons/telegarm.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue'

const pages = [
  { name: "О компании", link: "/" },
  { name: "Примеры работ", link: "/" },
  { name: "Услуги", link: "/" },
  { name: "Новости", link: "/" },
  { name: "Оплата и доставка", link: "/" },
  { name: "Сотрудничество", link: "/" },
  { name: "Сертификаты", link: "/" },
  { name: "Строителям", link: "/" },
  { name: "Прайс-листы", link: "/" },
  { name: "Контакты", link: "/" },
]

const catalogs = [
  { name: "Акции и скидки", link: "/" },
  { name: "Благоустройство", link: "/" },
  { name: "Облицованный кирпич", link: "/" },
  { name: "Кровельные материалы", link: "/" },
  { name: "Строительные смеси", link: "/" },
  { name: "Фасадные материалы", link: "/" },
  { name: "Тротуарная плитка", link: "/" },
  { name: "Аксессуары", link: "/" },
  { name: "Обустройство кровли", link: "/" },
  { name: "Стеновые блоки", link: "/" },
]

const conacts = [
  {
    place: "Проспект Мира, 103",
    phone: "+7 8552-450-590",
    email: "chelny@mygood.house",
  },
  {
    place: "Казанский проспект, 164с3",
    phone: "+7 8552-92-45-42",
    email: "a.mingazov@mygood.house",
  }
]
</script>

<template>
    <div class="footer wrapper">
        <div class="footer__policy">
            <LogoIcon filled />
            <div class="copytight">
                2025 © Компания «Гуд Хаус»<br>Все права защищены
            </div>
            <router-link class="privacy-policy" to="/">
                Политика конфиденциальности
            </router-link>
        </div>
        <div class="footer__pages">
            <div class="footer-title">GOODHOUSE</div>
            <div class="footer-items">
                <router-link
                    v-for="(page, pageIndex) in pages"
                    :key="`page-${pageIndex}`"
                    class="footer-item"
                    :to="page.link"
                >
                    {{ page.name }}
                </router-link>
            </div>
        </div>
        <div class="footer__catalog">
            <div class="footer-title">КАТАЛОГ</div>
            <div class="footer-items">
                <router-link
                    v-for="(catalog, catalogIndex) in catalogs"
                    :key="`catalog-${catalogIndex}`"
                    class="footer-item"
                    :to="catalog.link"
                >
                    {{ catalog.name }}
                </router-link>
            </div>
        </div>
        <div class="footer__contacts">
            <div class="footer-title">КОНТАКТЫ</div>
            <div class="addresses">
                <div
                    v-for="(conact, conactIndex) in conacts"
                    :key="`conact-${conactIndex}`"
                    class="address"
                >
                    <div class="address__place">{{ conact.place }}</div>
                    <div class="address__phone">{{ conact.phone }}</div>
                    <a :href="`mailto:${conact.email}`" class="address__email">{{ conact.email }}</a>
                </div>
            </div>
            <div class="contact-us">
                <div class="contact-us__title">Свяжитесь с нами</div>
                <div class="contact-us__buttons">
                    <BaseButton color="blue" :icon="TelegarmIcon" size="xs" />
                    <BaseButton color="green" :icon="WhatsappIcon" size="xs" />
                    <BaseButton color="red" text="Заказать звонок" :icon="PhoneIncomingIcon" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer{
    display: flex;
    gap: 30px;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 60px;

    .footer-title{
        @include UI-16-20-600;
        margin-bottom: 16px;
    }

    .footer-items{
        display: flex;
        flex-direction: column;
        gap: 16px;
        .footer-item{
            @include UI-18-24-400;
            color: $text-primary;
            text-decoration: none;

            &:hover{
                color: $text-link;
            }
        }
    }


    &__policy{
        display: flex;
        flex-direction: column;
        gap: 16px;
        .copytight{
            @include UI-18-24-400;
            color: $text-primary-opacity;
        }
        .privacy-policy{
            @include UI-18-24-400;
            color: $text-link;
            text-decoration: none;
        }

        svg {
            width: 148px;
            height: auto;
        }
    }

    &__contacts{
        display: flex;
        flex-direction: column;
        .addresses{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .address{
                &__place,
                &__phone,
                &__email{
                    @include UI-18-24-400;
                    color: $text-primary-opacity;
                }

                &__email{
                    color: $text-link;
                    text-decoration: none;
                }
            }
        }
        .contact-us{
            width: 380px;
            border-radius: 16px;
            padding: 24px;
            backdrop-filter: blur(20px);
            background: $block-light;

            &__title{
                @include UI-18-24-400;
                margin-bottom: 24px;
            }

            &__buttons{
                display: flex;
                gap: 8px;
            }
        }
    }

    @media (max-width: 1220px) {
        &__contacts{
            .contact-us{
                width: 325px;
            }
        }
    }
}
</style>