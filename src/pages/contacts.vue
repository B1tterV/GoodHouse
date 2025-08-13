<script setup lang="ts">
// Icons
import TelegarmIcon from '@/assets/icons/telegarm.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import PhoneIncomingIcon from '@/assets/icons/phone-incoming-01.svg'
import MarkerPinIcon from "@/assets/icons/marker-pin-03.svg"

// Components
import YandexMap from '~/components/YandexMap.vue';
import BaseBreadcrumbs from '@/components/common/BaseBreadcrumbs.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const addresses = [
  {
    place: "Проспект Мира, 103",
    phone: "+7 8552-450-590",
    workDates: "Пн-Пт 09:00–18:00; Сб 10:00–14:00",
    email: "chelny@mygood.house",
    coords: [55.764045, 52.444616]
  },
]

const crumbs = [
  { name: "Контакты", path: "/contacts"},
]

const showrooms = [
 {
    name: "Проспект Мира, 103",
    coords: [55.764045, 52.444616],
    photo1: "/images/showrooms/showroom1.jpg",
    photo2: "/images/showrooms/showroom2.jpg",
    photo3: "/images/showrooms/showroom3.jpg",
 }
]
</script>

<template>
    <div class="contancts-page">
        <BaseBreadcrumbs :crumbs="crumbs" />
        <div class="contancts-page__wrapper wrapper">
            <div class="places">
                <div class="places__info">
                    <div class="title">Адреса</div>
                    <div class="addresses">
                        <div
                            v-for="(address, addressIndex) in addresses"
                            :key="`address-${addressIndex}`"
                            class="address-item"
                        >
                            <div class="address-item__place">{{ address.place }}</div>
                            <div class="address-item__phone">{{ address.phone }}</div>
                            <div class="address-item__work-dates">{{ address.workDates }}</div>
                            <div class="address-item__email">{{ address.email }}</div>
                        </div>
                    </div>
                    <div class="buttons">
                        <BaseButton color="blue" :icon="TelegarmIcon" size="xs" />
                        <BaseButton color="green" :icon="WhatsappIcon" size="xs" />
                        <BaseButton color="red" text="Заказать звонок" :icon="PhoneIncomingIcon" />
                    </div>
                </div>
                <YandexMap
                    class="places__map"
                    :addresses="addresses"
                />
            </div>
            <div class="showrooms">
                <div
                    v-for="(showroom, showroomIndex) in showrooms"
                    :key="`showroom-${showroomIndex}`"
                    class="showroom-item"
                >
                    <div class="showroom-item__left">
                        <div class="showroom-item__text">
                            <p>{{ showroom.name }}</p>
                            <BaseButton color="dark" :icon="MarkerPinIcon" text="Показать на карте" />
                        </div>
                        <img :src="showroom.photo1" alt="showroom">
                    </div>
                    <div class="showroom-item__center">
                        <img :src="showroom.photo2" alt="showroom">
                    </div>
                    <div class="showroom-item__right">
                        <img :src="showroom.photo3" alt="showroom">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.contancts-page{
    &__wrapper{
        background: $block-light;
        border-radius: 16px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
        margin-bottom: 16px;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .places{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        gap: 16px;
        height: 600px;
        margin-bottom: 48px;
        
        &__info{
            .title{
                @include UI-28-100p-400;
                margin-bottom: 16px;
            }
            .addresses{
                padding: 24px 0;

                .address-item{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    &__place{
                        @include UI-24-30-400;
                    }
                    &__phone{
                        @include UI-18-24-400;
                    }
                    &__work-dates{
                        @include UI-18-24-400;
                    }
                    &__email{
                        @include UI-18-24-400;
                        color: $text-link;
                        text-decoration: none;
                    }
                }
            }
            .buttons{
                display: flex;
                gap: 8px;

                .base-button_xs {
                    min-width: 47px;

                    :deep(svg) {
                        width: 21px;
                        height: 21px;
                    }
                }
            }
        }

        &__map{
            height: 600px;
        }
    }

    .showrooms{
        display: flex;
        flex-direction: column;
        gap: 8px;

        .showroom-item{
            display: flex;
            gap: 16px;
            padding: 24px;
            border-radius: 16px;
            background: $block-gray;

            &__text{
                padding: 24px;
                p{
                    @include UI-24-30-400;
                    margin-bottom: 24px;
                }
            }

            &__left{
                display: flex;
                flex-direction: column;
                gap: 16px;

                img {
                    flex: 1;
                }
            }

            &__left, 
            &__right {
                width: 380px;
            }

            &__center{
                flex: 1;
            }

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 16px;
                overflow: hidden;
            }
        }
    }
}
</style>