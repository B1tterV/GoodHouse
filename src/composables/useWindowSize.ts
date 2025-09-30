export function useWindowSize() {
  const width = ref(0);
  const height = ref(0);
  const isLoading = ref<boolean>(true)

  const update = () => {
    if (typeof window !== 'undefined') {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      update();
      window.addEventListener('resize', update);
      isLoading.value = false
    }
  });

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', update);
    }
  });

  return { width, height, isLoading };
}