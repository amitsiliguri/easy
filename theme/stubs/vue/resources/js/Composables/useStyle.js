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
      warning: "bg-yellow-500",
      danger: "bg-rose-500",
      success: "bg-lime-500",
      transparent: "bg-transpanet",
      default: "bg-zinc-100 dark:bg-zinc-700",
    }[bgType.toString()];
  });

  const setHoverBackground = computed(() => {
    let hoverBgType =
      getBackgroundType.value === ""
        ? usePage().props.value.theme
        : getBackgroundType.value;
    return {
      primary: "hover:bg-blue-600 dark:hover:bg-blue-400",
      warning: "hover:bg-yellow-600 dark:hover:bg-yellow-400",
      danger: "hover:bg-rose-600 dark:hover:bg-rose-400",
      success: "hover:bg-lime-600 dark:hover:bg-lime-400",
      transparent: "hover:bg-zinc-900/5",
      default: "hover:bg-zinc-200 dark:bg-zinc-900",
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
        warning: "outline-yellow-500",
        danger: "outline-rose-500",
        success: "outline-lime-500",
        transparent: "outline-transparent",
        default: "outline-zinc-200",
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
      warning: "hover:outline-yellow-600 hover:bg-yellow-600/5",
      danger: "hover:outline-rose-600 hover:bg-rose-600/5",
      success: "hover:outline-lime-600 hover:bg-lime-600/5",
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
      warning: "text-yellow-500",
      danger: "text-rose-500",
      success: "text-lime-500",
      default: "text-zinc-500",
      transparent: "text-zinc-500",
      white: "text-zinc-200",
    }[textType.toString()];
  });

  const setHoverTextColor = computed(() => {
    let hoverTextType =
      getTextType.value === ""
        ? usePage().props.value.theme
        : getTextType.value;
    return {
      primary: "hover:text-blue-600 dark:hover:text-blue-400",
      warning: "hover:text-yellow-600 dark:hover:text-yellow-400",
      danger: " hover:text-rose-600 dark:hover:text-rose-200",
      success: "hover:text-lime-600 dark:hover:text-lime-400",
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
      sm: "px-1 py-0.5",
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
  };
}
