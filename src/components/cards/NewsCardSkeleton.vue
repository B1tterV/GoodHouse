<template>
    <div class="news-card-skeleton">
        <div class="skeleton__image"></div>
        <div class="skeleton__content">
            <div class="skeleton__date">
                <div class="skeleton-line short"></div>
            </div>
            <div class="skeleton__description">
                <div class="skeleton-line long"></div>
                <div class="skeleton-line medium"></div>
            </div>
            <div class="skeleton__link">
                <div class="skeleton-line very-short"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news-card-skeleton {
    cursor: pointer;
    max-width: 300px;
    
    .skeleton__image {
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 10px;
        height: 200px; // Примерная высота изображения
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    .skeleton__content {
        padding: 16px;
        border-left: 1px solid #f0f0f0;
        
        .skeleton__date {
            margin-bottom: 4px;
            
            .skeleton-line.short {
                width: 80px;
                height: 16px;
                border-radius: 4px;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
            }
        }
        
        .skeleton__description {
            margin-bottom: 16px;
            
            .skeleton-line {
                height: 18px;
                border-radius: 4px;
                margin-bottom: 6px;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                
                &.long {
                    width: 100%;
                }
                
                &.medium {
                    width: 70%;
                }
            }
        }
        
        .skeleton__link {
            .skeleton-line.very-short {
                width: 60px;
                height: 16px;
                border-radius: 4px;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
            }
        }
    }
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>