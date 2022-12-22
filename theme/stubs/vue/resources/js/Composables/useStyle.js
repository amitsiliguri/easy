import { computed, ref } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

export function useStyle() {
  const getTextType = ref("");
  const getBackgroundType = ref("");
  const getOutlineType = ref("");
  const getRadiusType = ref("default");
  const getSize = ref("default");
  const getPadding = ref("default");
  // const theme = computed(() => {
  //   return usePage().props.value.theme;
  // });

  const setBackground = computed(() => {
    let bgType =
      getBackgroundType.value === ""
        ? usePage().props.value.theme
        : getBackgroundType.value;
    return {
      primary: "bg-blue-500",
      warning: "bg-amber-500",
      danger: "bg-rose-500",
      success: "bg-green-500",
      transparent: "bg-transpanet",
      default: "bg-zinc-200 dark:bg-zinc-700",
    }[bgType.toString()];
  });

  const setHoverBackground = computed(() => {
    let hoverBgType =
      getBackgroundType.value === ""
        ? usePage().props.value.theme
        : getBackgroundType.value;
    return {
      primary: "hover:bg-blue-600 dark:hover:bg-blue-400",
      warning: "hover:bg-amber-600 dark:hover:bg-amber-400",
      danger: "hover:bg-rose-600 dark:hover:bg-rose-400",
      success: "hover:bg-green-600 dark:hover:bg-green-400",
      transparent: "hover:bg-zinc-900/5",
      default: "hover:bg-zinc-300 dark:bg-zinc-600",
    }[hoverBgType.toString()];
  });

  const setOutline = computed(() => {
    let outlineType =
      getOutlineType.value === ""
        ? usePage().props.value.theme
        : getOutlineType.value;
    return (
      "outline outline-1 " +
      {
        primary: "outline-blue-500",
        warning: "outline-amber-500",
        danger: "outline-rose-500",
        success: "outline-green-500",
        transparent: "outline-transparent",
        default: "outline-zinc-200 dark:outline-zinc-600",
      }[outlineType.toString()]
    );
  });

  const setHoverOutline = computed(() => {
    let hoverOutlineType =
      getOutlineType.value === ""
        ? usePage().props.value.theme
        : getOutlineType.value;
    return {
      primary: "hover:outline-blue-600 hover:bg-blue-600/5",
      warning: "hover:outline-amber-600 hover:bg-amber-600/5",
      danger: "hover:outline-rose-600 hover:bg-rose-600/5",
      success: "hover:outline-green-600 hover:bg-green-600/5",
      transparent: "outline-transparent",
      default: "hover:outline-zinc-600 hover:bg-zinc-600/5",
    }[hoverOutlineType.toString()];
  });

  const setTextColor = computed(() => {
    let textType =
      getTextType.value === ""
        ? usePage().props.value.theme
        : getTextType.value;
    return {
      primary: "text-blue-500",
      warning: "text-amber-500",
      danger: "text-rose-500",
      success: "text-green-500",
      default: "text-zinc-500",
      transparent: "text-zinc-500",
      white: "text-zinc-700 dark:text-zinc-300",
    }[textType.toString()];
  });

  const setHoverTextColor = computed(() => {
    let hoverTextType =
      getTextType.value === ""
        ? usePage().props.value.theme
        : getTextType.value;
    return {
      primary: "hover:text-blue-600 dark:hover:text-blue-400",
      warning: "hover:text-amber-600 dark:hover:text-amber-400",
      danger: " hover:text-rose-600 dark:hover:text-rose-200",
      success: "hover:text-green-600 dark:hover:text-green-400",
      default: "hover:text-zinc-600 dark:hover:text-zinc-400",
      transparent: "hover:text-zinc-600 dark:hover:text-zinc-400",
      white: "hover:text-white",
    }[hoverTextType.toString()];
  });

  const setRadius = computed(() => {
    return {
      sharp: "rounded-none",
      default: "rounded",
      full: "rounded-full",
    }[getRadiusType.value.toString()];
  });

  const setSize = computed(() => {
    return {
      sm: "text-xs min-w-[22px] min-h-[22px]",
      default: "text-sm min-w-[32px] min-h-[32px]",
      lg: "text-base min-w-[48px] min-h-[48px]",
    }[getSize.value.toString()];
  });

  const setPadding = computed(() => {
    return {
      sm: "px-1.5 py-1",
      default: "px-2 py-1",
      lg: "px-3 py-1.5",
      smx: "px-1",
      dx: "px-2",
      lgx: "px-3",
      sml: "pl-1",
      dl: "pl-2",
      lgl: "pl-3",
      smr: "pr-1",
      dr: "pr-2",
      lgr: "pr-3",
    }[getPadding.value.toString()];
  });

  const setBorderColor = computed(() => {
    return {
      primary: "border-blue-500",
      warning: "border-amber-500",
      danger: "border-rose-500",
      success: "border-green-500",
      transparent: "border-transparent",
      default: "border-zinc-200 dark:border-zinc-600",
    }[usePage().props.value.theme.toString()];
  });

  return {
    getTextType,
    setTextColor,
    setHoverTextColor,
    getBackgroundType,
    setBackground,
    setHoverBackground,
    getOutlineType,
    setOutline,
    setHoverOutline,
    getRadiusType,
    setRadius,
    getSize,
    setSize,
    getPadding,
    setPadding,
    setBorderColor,
  };
}
