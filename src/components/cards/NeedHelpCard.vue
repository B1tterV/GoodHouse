<script setup lang="ts">
// Modules
import { ref } from 'vue';

// Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';

const name = ref<string>("")
const phone = ref<string>("")

const handleSubmit = () => {
    console.log('Отправлено')
}
</script>

<template>
    <div class="need-help-card">
        <div class="need-help-card__title">
            Нужна помощь консультанта?
        </div>
        <div class="need-help-card__description">
            Оставьте заявку, наши специалисты свяжутся с вами <br> в ближайшее время
        </div>
        <form @submit.prevent="handleSubmit" class="need-help-card__form">
            <BaseInput v-model="name" name="Ваше имя" placeholder="Иван" />
            <BaseInput v-model="phone" name="Телефон" placeholder="+7-900-123-45-67" />
            <BaseButton text="Отправить заявку" color="dark" />
        </form>
        <div class="need-help-card__policy">
            Нажимая на кнопку, я соглашаюсь с <router-link to="/">политикой обработки <br>
            данных</router-link> и <router-link to="/">пользовательским соглашением</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.need-help-card{
    background: $block-red;
    border-radius: 8px;
    padding: 24px;
    width: 100%;

    &__title{
        @include UI-28-100p-400;
        margin-bottom: 8px;
        color: $text-light;
    }

    &__description{
        @include UI-18-24-400;
        color: $text-light-opacity;
        margin-bottom: 24px;
    }

    &__form{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        .base-button {
            width: fit-content;
        }
    }

    &__policy{
        @include UI-14-100p-400;
        color: $text-light-opacity;
        a {
            color: $text-light-opacity;
        }
    }
}
</style>