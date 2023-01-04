import { onMounted, onUnmounted, reactive, ref } from "vue";

export function useSizes() {
  const elementId = ref(null);
  const size = reactive({
    screen: {
      width: 0,
      height: 0,
    },
    element: {
      width: 0,
      height: 0,
    },
  });
  onMounted(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
    setTimeout(() => {
      setElementSize();
    }, 200);
    window.addEventListener("resize", setElementSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", setScreenSize)
    window.removeEventListener("resize", setElementSize)
  });

  const setScreenSize = () => {
    size.screen.width = window.innerWidth;
    size.screen.height = window.innerHeight;
  };

  const setElementSize = () => {
    if (elementId.value) {
      let obj = document.getElementById(elementId.value)
      size.element.width = obj.clientWidth;
      size.element.height = obj.clientHeight;
    }
  };

  return { size, elementId };
}
