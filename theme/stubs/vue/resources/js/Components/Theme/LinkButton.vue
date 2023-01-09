<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { computed, onMounted, watch } from "vue";
import { useStyle } from "@/Composables/useStyle.js";
import EasyIcons from "@/Components/Theme/Icons.vue";
const {
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
  setPadding
} = useStyle();

const props = defineProps({
    href: {
        type: String,
        required: false,
        default() {
            return "#";
        },
    },
  label: {
    type: [String, Number],
    required: false,
    default() {
      return "";
    },
  },
  outlined: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  curve: {
    type: String,
    required: false,
    default() {
      return "default";
    },
  },
  elevated: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  small: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  full: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  bold: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  color: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  size: {
    type: String,
    required: false,
    default() {
      return "default";
    },
  },
  icon: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  rightIcon: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
});

onMounted(() => {
  getBackgroundType.value = props.outlined ? "transparent" : props.color;
  getOutlineType.value = props.outlined ? props.color : "transparent";
  getRadiusType.value = props.curve;
  getSize.value = props.size;
  getTextType.value = props.outlined ? props.color : (props.color == "transparent" || props.color == "default") ? "" : "white";
  getPadding.value = {
    sm: "sm",
    default: "default",
    lg: "lg",
  }[props.size.toString()];
});

watch(
  () => props.color,
  (newValue) => {
    getBackgroundType.value = props.outlined ? "transparent" : newValue;
    getTextType.value = props.outlined ? newValue :  (newValue == "transparent" || newValue == "default") ? "" : "white";
    getOutlineType.value = props.outlined ? newValue : (newValue == "transparent" || newValue == "default") ? "" : "white";
  }
);

watch(
  () => props.outlined,
  (newValue) => {
    getBackgroundType.value = newValue ? "transparent" : props.color;
    getTextType.value = newValue ? props.color : (props.color == "transparent" || props.color == "default") ? "" : "white";
    getOutlineType.value = newValue ? props.color : (props.color == "transparent" || props.color == "default") ? "" : "white";
  }
);

watch(
  () => props.curve,
  (newValue) => {
    radiusType.value = newValue;
  }
);

watch(
  () => props.size,
  (newValue) => {
    getSize.value = newValue;

    getPadding.value = {
      sm: "sm",
      default: "default",
      lg: "lg",
    }[newValue.toString()];
  }
);

const iconSize = computed(() => {
  return {
    sm: 12,
    default: 14,
    lg: 16,
  }[props.size.toString()];
});
// "hover:outline-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-600/5"
// "hover:outline-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-600/5"
// "hover:outline-rose-600 hover:text-rose-600 dark:hover:text-rose-200 hover:bg-rose-600/5"
// "hover:outline-green-600 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-600/5"
// "outline-transparent"
// hover:outline-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 hover:bg-zinc-600/5

//outline-blue-500 text-blue-500
//outline-amber-500 text-amber-500
//outline-rose-500 text-rose-500
//outline-green-500 text-green-500
//outline-zinc-200 dark:outline-zinc-900 text-zinc-200 dark:text-zinc-900
// outline-zinc-500 text-zinc-500

//bg-blue-500 text-gray-200
//bg-amber-500 text-gray-200
//bg-rose-500 text-white
//bg-green-500 text-white
//bg-transpanet
//bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400

// hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white
// hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white
// hover:bg-rose-600 dark:hover:bg-rose-400 hover:text-white
// hover:bg-green-600 dark:hover:bg-green-400 hover:text-white
// hover:bg-zinc-900/5 dark:hover:text-white hover:text-gray-600
// hover:bg-zinc-200 hover:text-gray-600 dark:bg-zinc-900 dark:hover:text-white

//rounded-none
//rounded
//rounded-full

// text-xs min-w-[22px] min-h-[22px] px-1
// text-sm min-w-[32px] min-h-[32px] px-2
// text-base min-w-[48px] min-h-[48px] px-3
</script>

<template>
    <Link :href="props.href" 
        class="inline-flex items-center justify-center uppercase tracking-widest transition ease-in-out duration-150"
        :class="[
            setSize,
            setRadius,
            setPadding,
            setTextColor,
            setHoverTextColor,
            props.full ? 'w-full' : '',
            props.bold ? 'font-bold' : '',
            props.elevated ? 'material-shadow' : '',
            props.outlined ? setOutline : setBackground,
            props.outlined ? setHoverOutline : setHoverBackground,
            props.outlined ? setHoverOutline : setHoverBackground,
        ]">
        <EasyIcons v-if="props.icon !== ''" :icon="props.icon" :width="iconSize" :height="iconSize" />
        <span v-if="props.label !== ''" class="mx-1"  v-html="props.label"></span>
        <EasyIcons v-if="props.rightIcon !== ''" :icon="props.rightIcon" :width="iconSize" :height="iconSize" />
    </Link>
</template>
