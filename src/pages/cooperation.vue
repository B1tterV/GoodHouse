<script setup lang="ts">
// Icons
import MailIcon from '@/assets/icons/coop/mail-02.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import NavCard from '@/components/cards/NavCard.vue';
import NeedMoreInfo from '@/components/blocks/NeedMoreInfo.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const navCards = [
  { icon: MailIcon, text: "Заявка на сотрудничество", link: '#coop'},
]
</script>

<template>
    <div class="cooperation-page wrapper">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="cooperation-page__nav-cards">
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
                <div class="cooperation-page__content">
                    <div id="coop" class="coop">
                        <div class="content-title">Сотрудничество</div>
                        <img
                            src="/images/coop.jpg"
                            alt="coop"
                            class="coop__image"
                            width="1200"
                            height="360"
                        >
                        <div class="content-description">
                            Группа Компаний Гуд Хаус приглашает к сотрудничеству
                            строителей, архитекторов, дизайнеров, заинтересованных
                            в долгосрочном и взаимовыгодном партнерстве.
                        </div>
                        <div class="content-description">
                            Наша совместная работа, направленная на привлечение большего
                            числа клиентов и удовлетворение их потребностей, принесет выгоду
                            обеим сторонам сотрудничества: Вы, в первую очередь, получаете
                            большой выбор высококачественных материалов для реализации Ваших
                            идей, великолепный сервис и удобства для работы с Вашими заказчиками,
                            во вторую, бонусы и скидки при взаимодействии с нашей компании.
                            Также в нашем лице вы приобретаете надежного партнера с
                            многолетним опытом работы и безупречной деловой репутацией.
                        </div>
                        <div class="coop__info">
                            <div class="title">Система бонусов и скидок партнерам без финансовых вложений</div>
                            <p>
                                В основе нашего предложения лежит предоставление вам расширенной
                                системы бонусов и скидок, которую вы получите за рекомендации нашей
                                продукции своим клиентам. Согласно нашему предложению,
                                сотрудничество с Гуд Хаус не потребует от вас никаких
                                финансовых вложений и временных затрат, а ваши клиенты,
                                последовав совету приобрести продукцию в нашей компании,
                                получат возможность воспользоваться одним из лучших предложений
                                на рынке кровельных, фасадных материалов, комплектующих для
                                стройки и благоустройства от ведущих брендов.
                            </p>
                            <p>
                                Если вас заинтересовало наше предложение, то позвоните для
                                обсуждения деталей по указанным на сайте телефонам, и
                                вы получите исчерпывающую информацию от наших экспертов.
                                Каждый вопрос о сотрудничестве рассматривается индивидуально:
                                предварительные расчеты и ожидаемая выгода от сотрудничества на
                                подходящих для вас условиях позволит принять взвешенное и обдуманное решение.
                            </p>
                            <p>
                                Многие наши постоянные покупатели стали надежными партнерами и
                                добрыми друзьями Компании Гуд Хаус, мы ценим их доверие и в знак
                                признательности предлагаем нашим партнерам дополнительные бонусы и бесплатные услуги.
                            </p>
                            <BaseButton
                                color="dark"
                                text="Подать заявку на сотрудничество"
                                :icon="MailIcon"
                            />
                        </div>
                    </div>
                    <NeedMoreInfo />
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.cooperation-page{
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    &__nav-cards{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__content {
        .coop{
            margin-bottom: 24px;

            &__image{
                margin-bottom: 24px;
                border-radius: 8px;
                object-fit: cover;
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 6;
            }

            &__info{
                border-radius: 16px;
                padding: 16px 24px;
                background: $block-gray;
                margin-bottom: 24px;

                .title{
                    @include UI-20-100p-400;
                    margin-bottom: 24px;
                }

                p{
                    @include UI-18-24-400;
                    color: $text-primary-opacity;

                    &:not(:last-child) {
                        margin-bottom: 24px;
                    }
                    &:last-child {
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }

    :deep(.base-button) {
        svg {
            color: $icon-light !important;
        }
    }
}
</style>