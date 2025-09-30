<template>
    <div class="product-card-skeleton">
        <div class="skeleton__tag"></div>
        <div class="skeleton__image"></div>
        <div class="skeleton__content">
            <div class="skeleton__price">
                <div class="skeleton-line short"></div>
                <div class="skeleton-line medium"></div>
            </div>
            <div class="skeleton__code">
                <div class="skeleton-line very-short"></div>
            </div>
            <div class="skeleton__description">
                <div class="skeleton-line long"></div>
                <div class="skeleton-line medium"></div>
            </div>
        </div>
        <div class="skeleton__buttons">
            <div class="skeleton-button"></div>
            <div class="skeleton-button small"></div>
            <div class="skeleton-button small"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-card-skeleton {
    display: flex;
    flex-direction: column;
    width: 298px;
    height: 100%;
    position: relative;

    .skeleton__tag {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 60px;
        height: 20px;
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }

    .skeleton__image {
        width: 100%;
        height: 240px;
        border-radius: 8px;
        margin-bottom: 26px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }

    .skeleton__content {
        border-left: 1px solid #f0f0f0;
        padding-left: 16px;
        flex: 1;
        margin-bottom: 26px;
    }

    .skeleton__price {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 19px;
        
        .skeleton-line {
            height: 24px;
            border-radius: 4px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;

            &.short {
                width: 60px;
            }
            &.medium {
                width: 80px;
            }
        }
    }

    .skeleton__code {
        margin-bottom: 4px;
        
        .skeleton-line.very-short {
            width: 40px;
            height: 16px;
            border-radius: 4px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
    }

    .skeleton__description {
        .skeleton-line {
            height: 18px;
            border-radius: 4px;
            margin-bottom: 4px;
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

    .skeleton__buttons {
        display: flex;
        align-items: center;
        gap: 8px;

        .skeleton-button {
            height: 44px;
            border-radius: 8px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;

            &.small {
                width: 44px;
                flex-shrink: 0;
            }
            
            &:first-child {
                flex: 1;
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