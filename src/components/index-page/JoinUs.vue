<script setup lang="ts">
// Modules
import { ref } from 'vue';

// Icons
import RightArrowIcon from '@/assets/icons/arrow-narrow-right.svg'

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';

const email = ref<string>("")
</script>

<template>
    <div class="join-us wrapper">
        <div class="join-us__content">
            <div class="title">
                Группа Компаний Гуд Хаус приглашает к сотрудничеству строителей, архитекторов, дизайнеров
            </div>
            <div class="description">
                В основе нашего предложения лежит предоставление вам расширенной системы бонусов и
                скидок, которую вы получите за рекомендации нашей продукции своим клиентам. Согласно
                нашему предложению, сотрудничество с Гуд Хаус не потребует от вас никаких финансовых
                вложений и временных затрат, а ваши клиенты, последовав совету приобрести продукцию в
                нашей компании, получат возможность воспользоваться одним из лучших предложений на рынке
                кровельных, фасадных материалов, комплектующих для стройки и благоустройства от ведущих брендов.
            </div>
            <BaseButton color="half-white">
                Сотрудничество
                <RightArrowIcon filled />
            </BaseButton>
        </div>
        <div class="join-us__form">
            <img src="/images/join-us.jpg" alt="join-us">
            <div class="form-input">
                <BaseInput v-model="email" name="Эл. почта" placeholder="youpost@mail.ru" />
                <BaseButton text="Отправить заявку" color="red" />
            </div>
            <div class="policy">
                Нажимая на кнопку, я соглашаюсь с <router-link to="/">политикой обработки <br>
                данных</router-link> и <router-link to="/">пользовательским соглашением</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.join-us{
    display: flex;
    gap: 88px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    background: $block-black-secondary;
    padding-top: 60px;
    padding-bottom: 60px;

    &__content{
        .title{
            @include UI-28-100p-400;
            margin-bottom: 8px;
            color: $text-light;
        }
        .description{
            @include UI-18-24-400;
            margin-bottom: 36px;
            color: $text-light-opacity;
        }
        :deep(.base-button) {
            svg {
                color: $icon-light;
            }
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 469px;

        img {
            border-radius: 8px;
        }

        .form-input{
            position: relative;
            display: flex;
            .base-input {
                width: calc(100% - 160px);
            }
            .base-button {
                @include UI-16-20-500;
                white-space: nowrap;
                position: absolute;
                right: 0;
            }
        }

        .policy{
            @include UI-14-100p-400;
            color: $text-light-opacity;
            a {
                color: $text-light-opacity;
            }
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;

        &__form {
            width: 100%;

            .form-input{
                .base-button{
                    position: relative;
                }
                .base-input{
                    max-width: 100% !important;
                    width: 100%;
                    margin-right: 10px;
                }
            }

        }
    }

    @media (max-width: 520px) {
        &__form {
            .form-input{
                flex-direction: column;
                gap: 10px;
            }
        }
    }
}
</style>