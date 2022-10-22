import { onMounted, onUnmounted, reactive } from "vue";

export function useSizes() {
  const screen = reactive({
    width: 0,
    height: 0,
  });
  onMounted(() => {
    setSize();
    window.addEventListener("resize", setSize);
  });
  onUnmounted(() => window.removeEventListener("resize", setSize));

  const setSize = () => {
    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
  };

  return { screen };
}
