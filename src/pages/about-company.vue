<script setup lang="ts">
// Icons
import InfoCircleIcon from '@/assets/icons/about-company/info-circle.svg'
import CertificateIcon from '@/assets/icons/about-company/certificate-01.svg'
import ShowRoomIcon from '@/assets/icons/about-company/building-02.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import NavCard from '@/components/cards/NavCard.vue';
import NeedMoreInfo from '@/components/blocks/NeedMoreInfo.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import DocumentCard from '~/components/cards/DocumentCard.vue';

const navCards = [
  { icon: InfoCircleIcon, text: "О компании", link: '#about'},
  { icon: CertificateIcon, text: "Сертификаты", link: '#certificates'},
  { icon: ShowRoomIcon, text: "Шоурумы", link: '#showrooms'},
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

const certificateCards = [
  {
    tag: "PDF",
    img: "images/certificate-about.jpg",
    smallInfo: "2017",
    description: "Краткое описание сертификата",
    linkText: "Смотреть"
  },
  {
    tag: "PDF",
    img: "images/certificate-about.jpg",
    smallInfo: "2017",
    description: "Краткое описание сертификата",
    linkText: "Смотреть"
  },
  {
    tag: "PDF",
    img: "images/certificate-about.jpg",
    smallInfo: "2017",
    description: "Краткое описание сертификата",
    linkText: "Смотреть"
  },
  {
    tag: "PDF",
    img: "images/certificate-about.jpg",
    smallInfo: "2017",
    description: "Краткое описание сертификата",
    linkText: "Смотреть"
  }
]
</script>

<template>
    <div class="services-page wrapper">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="services-page__nav-cards">
                    <NavCard
                        v-for="(navCard, navCardIndex) in navCards"
                        :key="`navCardIndex-${navCardIndex}`"
                        :icon="navCard.icon"
                        :text="navCard.text"
                        :link="navCard.link"
                        isHash
                    />
                </div>
            </template>
            <template v-slot:content>
                <div class="services-page__content">
                    <div id="about" class="about">
                        <div class="content-title">О компании</div>
                        <img
                            src="/images/about.jpg"
                            alt="about"
                            class="about__image"
                            width="1200"
                            height="360"
                        >
                        <div class="content-description">
                            Идея создания торговой компании ГК  «Гуд Хаус» зародилась в 2011 году,
                            основной целью которой являлось налаживание профессионального подхода в сфере
                            комплектации объектов строительными материалами высокого класса через партнеров
                            посредников, архитекторов, проектировщиков, строительные компании и др.
                            На данный момент наша компания имеет офисы-шоу-румы в городах Казань
                            и Набережные Челны. Главные принципы работы компании - качественное,
                            комплексное и своевременное выполнение обязательств перед
                            заказчиками и деловыми партнерами.
                            <br><br>
                            В выставочных залах нашей компании, для Вашего удобства, представлен
                            широкий ассортимент предлагаемой продукции - российский и европейский
                            облицовочный кирпич, фасадная плитка "под кирпич", фиброцементный
                            сайдинг, керамические и газобетонные блоки для несущих стен, натуральная,
                            керамическая, гибкая черепица, напольная клинкерная плитка и ступени,
                            тротуарный клинкерный кирпич и брусчатка. А также представлены
                            различные сопутствующие материалы для строительства: материалы для
                            СФТК (штукатурные фасады), сухие строительные смеси, цветные и
                            «теплые» кладочные растворы, аксессуары для кровли, строительный
                            инструмент и многое другое.
                            <br><br>
                            За эти годы наша компания получила большое количество положительных
                            отзывов и благодарностей за высокий профессионализм, качество и
                            организованность при выполнении работ. Все возложенные работы
                            выполнялись в установленные сроки и с высоким уровнем ответственности.
                            <br><br>
                            Доверив нашей организации комплектацию объектов,
                            вы получите не только качество и профессиональный
                            подход, оперативность исполнения и оптимальные цены,
                            но также и надежного партнера, строящего свои отношения
                            с заказчиком на доверительной, долгосрочной и взаимовыгодной основе.
                        </div>
                        
                    </div>
                    <div id="certificates" class="certificates">
                        <div class="certificates__title">Сертификаты</div>
                        <div class="certificates__cards">
                            <DocumentCard
                                v-for="(certificateCard, certificateCardIndex) in certificateCards.splice(0, 4)"
                                :key="`certificateCard-${certificateCardIndex}`"
                                :tag="certificateCard.tag"
                                :img="certificateCard.img"
                                :smallInfo="certificateCard.smallInfo"
                                :description="certificateCard.description"
                                linkText="Смотреть"
                                link="/"
                            />
                        </div>
                    </div>
                    <div id="showrooms" class="showrooms">
                        <div class="content-title">Шоурумы</div>
                        <div class="showrooms__items">
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
                    <NeedMoreInfo />
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.services-page{
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    &__nav-cards{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__content {
        .about{
            margin-bottom: 24px;

            &__image{
                margin-bottom: 24px;
                border-radius: 8px;
                object-fit: cover;
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 6;
            }
        }
        .certificates{
            margin-bottom: 24px;
            background: $block-gray;
            border-radius: 16px;
            padding: 16px 24px;

            &__title{
                @include UI-20-100p-400;
                margin-bottom: 48px;
            }
            &__cards{
                display: grid;
                grid-template-columns: repeat(4, 265px);
                gap: 30px;

                .certificates-card{
                    &__image{
                        position: relative;
                        height: 148px;
                        width: 100%;
                        background: $block-light;
                        border-radius: 8px;
                        margin-bottom: 10px;
                        .tag {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            height: 20px;
                            padding: 0 8px;
                            background: $block-red;
                            color: $text-white;
                            border-radius: 8px;
                        }
                        img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            width: 56px;
                            height: 76px;
                            object-fit: cover;
                        }
                    }
                    &__content {
                        padding: 16px;
                        .year {
                            @include UI-16-20-500;
                            margin-bottom: 4px;
                            color: $text-secondary;
                        }
                        .description{
                            @include UI-18-24-400;
                            max-width: 230px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            margin-bottom: 16px;
                        }
                        .link {
                            @include UI-16-20-500;
                            cursor: pointer;
                            color: $text-link;
                        }
                    }
                }
            }
        }
        .showrooms{
            &__items{
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
    }

    :deep(.base-button) {
        svg {
            color: $icon-light;
        }
    }
}
</style>