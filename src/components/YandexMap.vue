<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ymaps from 'ymaps'

const props = defineProps({
  addresses: {
    type: Array as () => Array<{
      coords: [number, number]
      place: string
      phone: string
      workDates: string
      email: string
    }>,
    required: true
  },
  zoom: {
    type: Number,
    default: 12
  }
})

const mapContainer = ref<HTMLElement | null>(null)
const mapContainerKey = ref<number>(0)

const updateYmaps = () => {
  mapContainerKey.value += 1
  ymaps
    .load()
    .then(maps => {
    const map = new maps.Map(mapContainer.value, {
      center: props.addresses[0].coords,
      zoom: props.zoom,
      controls: ['zoomControl']
    })

    props.addresses.forEach(address => {
      const placemark = new maps.Placemark(
        address.coords,
        {
          hintContent: address.place,
          balloonContent: `
            <strong>${address.place}</strong><br>
            <a href="tel:${address.phone}">${address.phone}</a><br>
            Часы работы: ${address.workDates}<br>
            <a href="mailto:${address.email}">${address.email}</a>
          `
        },
        {
          preset: 'islands#redDotIcon'
        }
      )
      map.geoObjects.add(placemark)
    })
  }).catch(error => {
    console.error('Failed to load Yandex Maps:', error)
  })
}

onMounted(() => {
  window.addEventListener('resize', updateYmaps);
  updateYmaps();
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateYmaps);
});
</script>

<template>
  <div :key="mapContainerKey" ref="mapContainer" class="yandex-map"></div>
</template>

<style scoped>
.yandex-map {
  width: 100%;
  height: 365px;
  border-radius: 8px;
  overflow: hidden;
}
</style>