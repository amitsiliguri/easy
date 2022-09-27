import { computed, ref } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

export function useStyle() {
  const getColor = ref("");
  const isOutlined = ref(false);
  const isBgDefault = ref(false);
  const radiusType = ref("default");
  const getSize = ref("default");
  const getPadding = ref("x-padding");

  const theme = () => {
    return getColor.value === ""
      ? usePage().props.value.theme
      : getColor.value;
  };

  const textColor = () => {
    return (theme() == 'transparent' || theme() == 'default') ? theme() : (isOutlined.value || isBgDefault.value) ? theme() : "solid";
  };

  const setBorder = computed(() => {
    let type = isOutlined.value ? theme() : "transparent";
    return (
      "outline outline-1 " +
      {
        primary: "outline-blue-500",
        warning: "outline-yellow-500",
        danger: "outline-rose-500",
        success: "outline-lime-500",
        transparent: "outline-transparent",
        default: "outline-zinc-200",
      }[type.toString()]
    );
  });

  const setTextColor = computed(() => {
    return ({
        primary: "text-blue-500",
        warning: "text-yellow-500",
        danger: "text-rose-500",
        success: "text-lime-500",
        default: "text-zinc-500",
        transparent: "text-zinc-500",
        solid: "text-zinc-200",
      }[textColor().toString()]);
  });

  const setHoverTextColor = computed(() => {
    return ({
        primary: "hover:text-blue-600 dark:hover:text-blue-400",
        warning: "hover:text-yellow-600 dark:hover:text-yellow-400",
        danger: " hover:text-rose-600 dark:hover:text-rose-200",
        success: "hover:text-lime-600 dark:hover:text-lime-400",
        default: "hover:text-zinc-600 dark:hover:text-zinc-400",
        transparent: "hover:text-zinc-600 dark:hover:text-zinc-400",
        solid: "text-white",
      }[textColor().toString()]);
  });

  const setHoverBorder = computed(() => {
    let type = isOutlined.value ? theme() : "transparent";
    return {
      primary:
        "hover:outline-blue-600 hover:bg-blue-600/5",
      warning:
        "hover:outline-yellow-600 hover:bg-yellow-600/5",
      danger:
        "hover:outline-rose-600 hover:bg-rose-600/5",
      success:
        "hover:outline-lime-600 hover:bg-lime-600/5",
      transparent: "outline-transparent",
      default:
        "hover:outline-zinc-600 hover:bg-zinc-600/5",
    }[type.toString()];
  });

  const setBackground = computed(() => {
    return {
      primary: "bg-blue-500",
      warning: "bg-yellow-500",
      danger: "bg-rose-500",
      success: "bg-lime-500",
      transparent: "bg-transpanet",
      default: "bg-zinc-100 dark:bg-zinc-700",
    }[theme().toString()];
  });

  const setHoverBackground = computed(() => {
    return {
      primary: "hover:bg-blue-600 dark:hover:bg-blue-400",
      warning: "hover:bg-yellow-600 dark:hover:bg-yellow-400",
      danger: "hover:bg-rose-600 dark:hover:bg-rose-400",
      success: "hover:bg-lime-600 dark:hover:bg-lime-400",
      transparent: "hover:bg-zinc-900/5",
      default: "hover:bg-zinc-200 dark:bg-zinc-900",
    }[theme().toString()];
  });

  const setRadius = computed(() => {
    return {
      sharp: "rounded-none",
      default: "rounded",
      full: "rounded-full",
    }[radiusType.value.toString()];
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
      "sm-padding": "p-1",
      padding: "p-2",
      "lg-padding": "p-3",
      "sm-x-padding": "px-1",
      "x-padding": "px-2",
      "lg-x-padding": "px-3",
      "sm-l-padding": "pl-1",
      "l-padding": "pl-2",
      "lg-l-padding": "pl-3",
      "sm-r-padding": "pr-1",
      "r-padding": "pr-2",
      "lg-r-padding": "pr-3",
    }[getPadding.value.toString()];
  });

  return {
    getColor,
    isOutlined,
    radiusType,
    getSize,
    setBorder,
    setHoverBorder,
    setBackground,
    setHoverBackground,
    setRadius,
    setSize,
    getPadding,
    setPadding,
    setTextColor,
    setHoverTextColor,
    isBgDefault
  };
}
