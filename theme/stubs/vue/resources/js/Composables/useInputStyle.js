import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

export function useInputStyle() {
  const setInputBorder = computed(() => {
    return "ring-1 ring-zinc-400 dark:ring-zinc-600";
  });

  const setInputHoverBorder = computed(() => {
    return "hover:ring-2 hover:ring-zinc-900 dark:hover:ring-zinc-500";
  });

  const setInputFocusBorder = computed(() => {
    return (
      "focus:ring-2 " +
      {
        primary: "focus:ring-blue-600 dark:focus:ring-blue-400",
        warning: "focus:ring-amber-600 dark:focus:ring-amber-400",
        danger: "focus:ring-rose-600 dark:focus:ring-rose-400",
        success: "focus:ring-green-600 dark:focus:ring-green-400",
        transparent: "focus:ring-zinc-600 dark:focus:ring-zinc-400",
        default: "focus:ring-zinc-600 dark:focus:ring-zinc-400",
      }[usePage().props.value.theme.toString()]
    );
  });

  const setLabelActiveColor = computed(() => {
    return {
      primary: "text-blue-600 dark:text-blue-400",
      warning: "text-amber-600 dark:text-amber-400",
      danger: "text-rose-600 dark:text-rose-400",
      success: "text-green-600 dark:text-green-400",
      transparent: "text-zinc-600 dark:text-zinc-400",
      default: "text-zinc-600 dark:text-zinc-400",
    }[usePage().props.value.theme.toString()];
  });

  return {
    setInputBorder,
    setInputHoverBorder,
    setInputFocusBorder,
    setLabelActiveColor
  };
}
