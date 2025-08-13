<script setup lang="ts">
// Components
import YandexMap from '@/components/YandexMap.vue'

defineProps({
  title: { type: String, default: "Адреса" },
  isReverse: { type: Boolean, default: false },
  noPadding: { type: Boolean, default: false },
})

const addresses = [
  {
    place: "Проспект Мира, 103",
    phone: "+7 8552-450-590",
    workDates: "Пн-Пт 09:00–18:00; Сб 10:00–14:00",
    email: "chelny@mygood.house",
    coords: [55.764045, 52.444616]
  },
]
</script>

<template>
    <div
        class="our-adresses wrapper"
        :class="{'no-padding': noPadding}"
    >
        <div class="our-adresses__conetnt">
            <div v-if="title" class="title">{{ title }}</div>
            <div
                class="adresses-content"
                :class="{'is-reverse': isReverse}"
            >
                <div class="adresses">
                    <div
                        v-for="(adress, adressIndex) in addresses"
                        :key="`adress-${adressIndex}`"
                        class="adress-item"
                    >
                        <div class="adress-item__place">{{ adress.place }}</div>
                        <div class="adress-item__phone">{{ adress.phone }}</div>
                        <div class="adress-item__work-dates">{{ adress.workDates }}</div>
                        <a :href="`mailto:${adress.email}`" class="adress-item__email">
                            {{ adress.email }}
                        </a>
                    </div>
                </div>
                <div class="location">
                    <YandexMap :addresses="addresses" />
                    <div class="addresses-cards">
    
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<style scoped lang="scss">
.our-adresses{
    display: flex;
    gap: 16px;
    padding-top: 60px;
    padding-bottom: 60px;

    &.no-padding{
        padding: 0;
    }

    &__conetnt{
        flex: 1;

        .title{
            @include UI-28-100p-400;
            margin-bottom: 16px;
        }

        .adresses{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 24px 0;
            margin-bottom: 16px;

            .adress-item{
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

        .adresses-content{
            display: flex;
            flex-direction: column;
            &.is-reverse{
                flex-direction: column-reverse;
            }
        }
    }
    &__photos{
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;

        .adress-item{
            overflow: hidden;
            position: relative;
            border-radius: 8px;

            img {
                object-fit: cover;
                filter: brightness(50%);
            }

            &__text{
                @include UI-28-100p-400;
                position: absolute;
                width: fit-content;
                height: fit-content;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                color: $text-light;
                z-index: 2;
                text-align: center;
            }
        }
    }
}
</style>