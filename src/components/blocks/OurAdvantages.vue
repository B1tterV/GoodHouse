<script setup lang="ts">
const advantages = ref([
  {
    title: "Широкий ассортимент продукции",
    description: "От базовых, как кровля и фасады, до современных инноваций"
  },
  {
    title: "Гибкие условия сотрудничества",
    description: "Мы предлагаем расширенную систему бонусов и скидок за рекомендации нашей продукции"
  },
  {
    title: "Консультирование клиентов",
    description: `
        Обращайтесь любым удобным способом — мы подготовим
        предложение с учетом ваших пожеланий и согласуем все этапы`
  },
  {
    title: "Качество продукции",
    description: `
        Компания Good House обеспечивает высокое качество строительных
        материалов, проводя строгий контроль на всех этапах
        производства согласно современным стандартам
    `
  },
])
</script>

<template>
    <div class="our-advantages wrapper">
        <div class="our-advantages__title">Преимущества работы с нами</div>
        <div class="our-advantages__items">
            <div
                v-for="(advantage, advantageIndex) in advantages"
                :key="`advantage-${advantageIndex}`"
                class="advantage-item"
            >
                <div class="advantage-item__title">{{ advantage.title }}</div>
                <div class="advantage-item__description">{{ advantage.description }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.our-advantages{
    background: rgba(49, 48, 48, 1);
    padding-top: 60px;
    padding-bottom: 60px;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    color: $text-white;

    &__title{
        @include UI-28-100p-400;
        margin-bottom: 48px;
    }

    &__items{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;

        .advantage-item{
            padding-left: 16px;
            border-left: 1px solid $text-link;
            height: fit-content;
            &__title{
                @include UI-20-100p-400;
                margin-bottom: 8px;
            }
            &__description{
                @include UI-18-24-400;
                color: $text-light-opacity;
            }
        }
    }
}
</style>