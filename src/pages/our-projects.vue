<script setup lang="ts">
// Icons
import TelegarmIcon from '@/assets/icons/telegarm.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'

// Components
import PageFilterContent from '@/components/layout/PageFilterContent.vue';
import BaseButton from '@/components/common/BaseButton.vue'


const projects = [
  {
    title: "Feldhause Klinker & Laumans",
    description: "Описание проекта в несколько строк",
  },
  {
    title: "Feldhause Klinker & Laumans",
    description: "Описание проекта в несколько строк",
  },
  {
    title: "Feldhause Klinker & Laumans",
    description: "Описание проекта в несколько строк",
  }
]
</script>

<template>
    <div class="our-projects-page wrapper">
        <PageFilterContent>
            <template v-slot:filter>
                <div class="our-projects-page__nav-cards">
                    <div class="more-projects">
                        <p>
                            Больше примеров работ <br> в наших социальных <br> сетях
                        </p>
                        <div class="buttons">
                            <BaseButton color="blue" :icon="TelegarmIcon" size="xs" />
                            <BaseButton color="green" :icon="WhatsappIcon" size="xs" />
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:content>
                <div class="our-projects-page__content">
                    <div id="projects" class="projects">
                        <div class="content-title">Наши проекты</div>
                        <div class="projects__cards">
                            <div
                                v-for="(project, projectIndex) in projects"
                                :key="`project-${projectIndex}`"
                                class="project-card"
                            >
                                <div class="project-card__title">{{ project.title }}</div>
                                <div class="project-card__description">{{ project.description }}</div>
                                <div class="project-card__images">
                                    <div class="left-image image-item">
                                        <img src="/images/ideas/idea-1-big.jpg" alt="idea-1">
                                    </div>
                                    <div class="center-image image-item">
                                        <img src="/images/ideas/idea-2.jpg" alt="idea-2">
                                    </div>
                                    <div class="right-image image-item photos">
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
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </PageFilterContent>
    </div>
</template>

<style scoped lang="scss">
.our-projects-page{
    background: $block-light;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    &__nav-cards{
        display: flex;
        flex-direction: column;
        gap: 8px;

        .more-projects {
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            padding: 20px 16px;
            background: $block-light;

            p{
                @include UI-18-24-400;
                margin-bottom: 24px;
            }

            .buttons {
                display: flex;
                gap: 8px;

                :deep(.base-button) {
                    height: 42px;
                }
            }
        }
    }
    &__content {
        .projects{
            margin-bottom: 24px;

            &__cards{
                display: flex;
                flex-direction: column;
                gap: 24px;
                .project-card{
                    background: $block-gray;
                    border-radius: 16px;
                    padding: 16px 24px;

                    &__title{
                        @include UI-20-100p-400;
                        margin-bottom: 16px;
                        text-transform: capitalize;
                    }
                    &__description{
                        @include UI-18-24-400;
                        margin-bottom: 16px;
                        color: $text-primary-opacity;
                    }

                    &__images{
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 16px;
                        height: 600px;
                        .image-item{
                            height: 100%;
    
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 16px;
                            }
                        }
                        .photos {
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
                    }
                }
            }

        }
    }
}
</style>