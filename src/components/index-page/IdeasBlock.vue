<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
    <div class="ideas-block wrapper">
      <div class="info">
        <div class="info__content">
          <div class="title">Идеи и решения</div>
          <div class="description">
            Предлагаем вашему вниманию
            примеры проектов с описанием
            и фотографиями. Это поможет вам
            определить оптимальное решение, соответствующее вашим
            требованиям
          </div>
          <BaseButton color="dark" text="Примеры работ" />
        </div>
        <div class="info__image">
          <img src="/images/ideas/idea-1.jpg" alt="idea-1">
        </div>
      </div>
      <div class="big-photo">
        <img src="/images/ideas/idea-2.jpg" alt="idea-2">
      </div>
      <div class="photos">
        <div class="photos__main">
          <img src="/images/ideas/idea-3.jpg" alt="idea-3">
        </div>
        <div class="photos__cards">
          <img src="/images/ideas/idea-4.jpg" alt="idea-4">
          <img src="/images/ideas/idea-5.jpg" alt="idea-5">
          <div class="more">
            <div class="more__count">134+</div>
            <img src="/images/ideas/idea-6.jpg" alt="idea-6">
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.ideas-block {
    display: flex;
    gap: 16px;
    padding-top: 60px;
    padding-bottom: 60px;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
    .info{
      width: 381px;

      &__content{
        padding: 24px;
        margin-bottom: 23px;

        .title {
          @include UI-28-100p-400;
          margin-bottom: 8px;
        }

        .description {
          @include UI-18-24-400;
          margin-bottom: 24px;
        }
      }

    }
    .big-photo{
      flex: 1;

      img {
        height: 100%;
      }
    }
    .photos{
      width: 380px;

      &__main{
        margin-bottom: 16px;
      }

      &__cards{
        display: flex;
        gap: 16px;
        height: 140px;

        img {
          width: 116px;
        }

        .more{
          cursor: pointer;
          position: relative;

          &__count{
            @include UI-20-20-400;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: fit-content;
            height: fit-content;
            color: $text-light;
            z-index: 2;
          }

          img {
            filter: brightness(50%);
          }
        }
      }
    }

    @media (max-width: 1220px) {
      .info{
        flex: 1;
      }
      .big-photo {
        display: none;
      }
      .photos{
        width: 44%;
      }
    }
}
</style>