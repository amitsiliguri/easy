<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  align: {
    default: "",
  },
  triggerOpen: {
    default: false,
  },
  width: {
    default: "100",
  },
  closeOnContentClick: {
    type: Boolean,
    default() {
      return true;
    },
  },
  contentClasses: {
    default: () => ["py-1", "bg-white"],
  },
  triggerClasses: {
    default: () => [],
  },
  triggerActiveClasses: {
    default: () => [],
  },
  triggerInactiveClasses: {
    default: () => [],
  },
  triggerOnlyByProps: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

const emit = defineEmits(["openStatus"]);

const closeOnEscape = (e) => {
  if (open.value && e.key === "Escape") {
    open.value = false;
  }
};

const open = ref(false);

onMounted(() => document.addEventListener("keydown", closeOnEscape));
onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));

const widthClass = computed(() => {
  return {
    48: "w-48",
    96: "w-96",
    100: "w-full",
  }[props.width.toString()];
});

const alignmentClasses = computed(() => {
  if (props.align === "left") {
    return "origin-top-left left-0";
  } else if (props.align === "right") {
    return "origin-top-right right-0";
  } else {
    return "origin-top";
  }
});

const triggerActivityClasses = computed(() => {
  if (open.value) {
    return props.triggerActiveClasses;
  } else {
    return props.triggerInactiveClasses;
  }
});

watch(
  () => props.triggerOpen,
  (newValue) => {
    open.value = newValue;
  }
);

watch(open, (newValue) => {
  emit("openStatus", newValue);
});

const toggle = () => {
  if (!props.triggerOnlyByProps) {
    open.value = !open.value;
  }
};

const effect = (classes, scale, scaleY) => {
  let scaleType = (props.width == 100) ? scaleY : scale
  return classes + ' ' + scaleType
};

</script>

<template>
  <div class="relative">
    <div @click="toggle()" :class="[triggerClasses, triggerActivityClasses]">
      <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>
    <transition
      enter-active-class="transition ease-out duration-200"
      :enter-from-class="effect('transform opacity-0','scale-0','scale-y-0')"
      :enter-to-class="effect('transform opacity-100','scale-100','scale-y-100')"
      leave-active-class="transition ease-in duration-75"
      :leave-from-class="effect('transform opacity-100','scale-100','scale-y-100')"
      :leave-to-class="effect('transform opacity-0','scale-0','scale-y-0')"
    >
      <div
        v-show="open"
        class="absolute z-50 mt-2 rounded-md shadow-lg transform-gpu"
        :class="[widthClass, alignmentClasses]"
        style="display: none"
        @click="open = props.closeOnContentClick ? false : open"
      >
        <div
          class="rounded-md ring-1 ring-black ring-opacity-5"
          :class="contentClasses"
        >
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
