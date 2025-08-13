<script setup lang="ts">
</script>

<template>
  <div class="nav-card-loading">
    <div class="nav-card-loading__icon" />
    <div class="nav-card-loading__text" />
  </div>
</template>

<style scoped lang="scss">
.nav-card-loading {
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 20px 16px;
  height: 60px;
  background: $block-light;

  &__icon{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $block-gray-8p;
    position: relative;
    animation: text_opacity 1.5s infinite ease-in-out;
    margin-right: 4px;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: $block-gray-8p;
        opacity: 0.6;
    }
    
    &::before {
        animation: text_opacity 1.5s infinite ease-in-out 0.5s;
    }
    
    &::after {
        animation: text_opacity 1.5s infinite ease-in-out 1s;
    }
  }

  &__text{
    width: 100px;
    height: 12px;
    border-radius: 4px;
    background-color: $block-gray-8p;
    position: relative;
    animation: text_opacity 1.5s infinite ease-in-out;
    margin-right: 8px;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background-color: $block-gray-8p;
        opacity: 0.6;
    }
    
    &::before {
        animation: text_opacity 1.5s infinite ease-in-out 0.5s;
    }
    
    &::after {
        animation: text_opacity 1.5s infinite ease-in-out 1s;
    }
  }
}
</style>