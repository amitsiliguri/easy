<script setup>
import { reactive, ref, onMounted } from "vue";

import EasyDropdown from "@/Components/Theme/Dropdown.vue";
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return "";
    },
  },
  label: {
    type: String,
    default() {
      return "Time Input Label";
    },
  },
  id: {
    type: String,
    default() {
      return "";
    },
  },
  hint: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  error: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
});

const emit = defineEmits(["update:modelValue"]);

const clock = ref(null);

const active = ref(false);

const data = reactive({
  time: {
    hr: "--",
    min: "--",
    sec: "--",
    meridiem: "AM",
  },
  active: "hr",
});

onMounted(() => {
  if (props.modelValue !== "") {
    setPropsTime(props.modelValue.split(":"));
  }
});

const setPropsTime = (time) => {
  if (time[0] > 12 && time[0] < 24) {
    data.time.hr = time[0] - 12;
    data.time.meridiem = "PM";
  } else if (time[0] <= 12) {
    data.time.hr = time[0];
  } else {
    data.time.hr = 0;
  }
  data.time.min = time[1] < 60 ? time[1] : 0;
  data.time.sec = time[2] < 60 ? time[2] : 0;
  setHandle();
};

const setPosition = (number, align = 0.5) => {
  let radius = 10 - 1;
  let angle = getAngle(number);
  let getY = Math.sin((angle * Math.PI) / 180) * radius;
  let getX = Math.cos((angle * Math.PI) / 180) * radius;
  getY = getY + 10 - align;
  getX = getX + 10 - align;
  return (
    "top:" +
    parseFloat(getY).toFixed(2) +
    "rem; left:" +
    parseFloat(getX).toFixed(2) +
    "rem"
  );
};

const getAngle = (number) => {
  let gap = data.active === "hr" ? 30 : 6;
  let angle = gap * parseInt(number);
  angle += 270;
  angle = angle >= 360 ? angle - 360 : angle;
  return angle;
};

const canPrintNumber = (number) => {
  if (number % 5 === 0) {
    return true;
  }
  return false;
};

const setTime = (value, type) => {
  switch (type) {
    case "hr":
      data.time.hr = value;
      setActive("min");
      break;
    case "min":
      data.time.min = value;
      setActive("sec");
      break;
    default:
      data.time.sec = value;
      break;
  }
  setDefaultTime();
  setHandle();
  emitValue();
};

const setActive = (type) => {
  setTimeout(() => {
    data.active = type;
  }, "300");
};

const setDefaultTime = () => {
  if (data.time.hr === "--") data.time.hr = "12";
  if (data.time.min === "--") data.time.min = "00";
  if (data.time.sec === "--") data.time.sec = "00";
};

const emitValue = () => {
  if (
    data.time.hr !== "--" &&
    data.time.min !== "--" &&
    data.time.sec !== "--"
  ) {
    let hr = data.time.hr;
    if (data.time.meridiem === "PM" && data.time.hr < 12) {
      hr = data.time.hr + 12;
    }
    if (data.time.meridiem === "AM" && data.time.hr === 12) {
      hr = 0;
    }
    let value =
      showTime(hr) +
      ":" +
      showTime(data.time.min) +
      ":" +
      showTime(data.time.sec);
    emit("update:modelValue", value);
  }
};

const showTime = (value) => {
  return ("0" + value).slice(-2);
};

const setAmPm = () => {
  if (data.time.meridiem === "AM") {
    data.time.meridiem = "PM";
  } else {
    data.time.meridiem = "AM";
  }
  emitValue();
};

const setHandle = () => {
  let angle = 270;
  switch (data.active) {
    case "hr":
      if (data.time.hr !== "--") {
        angle = getAngle(parseInt(data.time.hr));
      }
      break;
    case "min":
      if (data.time.min !== "--") {
        angle = getAngle(parseInt(data.time.min));
      }
      break;
    case "sec":
      if (data.time.sec !== "--") {
        angle = getAngle(parseInt(data.time.sec));
      }
      break;
    default:
      angle = 270;
      break;
  }
  return (
    "transform: rotate(" +
    angle +
    "deg) scaleY(1); transform-origin: center left;"
  );
};

const updateActiveStatus = (status) => {
  active.value = status;
};
</script>

<template>
  <div class="my-2">
    <input-lebel
      @click="updateActiveStatus(true)"
      :for="props.id"
      :label="props.label"
      :active="active"
    />
    <easy-dropdown
      align="left"
      width="96"
      :close-on-content-click="false"
      :trigger-open="active"
      :content-classes="['pb-1', 'bg-white', 'dark:bg-zinc-800']"
      :trigger-classes="[
        'bg-transparent',
        'flex',
        'items-center',
        'w-full',
        'outline',
        'p-2',
        'hover:outline-zinc-900',
        'dark:hover:outline-zinc-500',
        'rounded',
        'cursor-pointer',
      ]"
      :trigger-active-classes="[
        'outline-blue-600',
        'dark:outline-blue-400',
        'outline-2',
      ]"
      :trigger-inactive-classes="['outline-zinc-400', 'dark:outline-zinc-600', 'outline-1']"
      @open-status="updateActiveStatus"
    >
      <template #trigger>
        <easy-icons icon="clock" />
        <span class="mx-1"> {{ showTime(data.time.hr) }} </span> :
        <span class="mx-1"> {{ showTime(data.time.min) }} </span> :
        <span class="mx-1"> {{ showTime(data.time.sec) }} </span>
        <span class="ml-1">{{ data.time.meridiem }}</span>
      </template>

      <template #content>
        <div
          :id="props.id"
          class="
            w-full
            h-20
            bg-blue-500
            text-4xl
            flex
            items-center
            p-2
            rounded-t-md
          "
        >
          <span
            @click="setActive('hr')"
            class="cursor-pointer"
            :class="{ 'text-white dark:text-zinc-800': data.active == 'hr' }"
          >
            {{ showTime(data.time.hr) }}
          </span>
          :
          <span
            @click="setActive('min')"
            class="cursor-pointer"
            :class="{ 'text-white dark:text-zinc-800': data.active == 'min' }"
          >
            {{ showTime(data.time.min) }}
          </span>
          :
          <span
            @click="setActive('sec')"
            class="cursor-pointer"
            :class="{ 'text-white dark:text-zinc-800': data.active == 'sec' }"
          >
            {{ showTime(data.time.sec) }}
          </span>
          <span class="ml-2">{{ data.time.meridiem }}</span>
        </div>

        <div
          ref="clock"
          class="
            relative
            w-80
            h-80
            mx-auto
            my-4
            rounded-full
            bg-zinc-100
            dark:bg-zinc-900
            transition
            duration-200
          "
        >
          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="data.active == 'hr'" class="w-80 h-80">
              <template v-for="(hr, index) in 12" :key="index">
                <div
                  class="
                    absolute
                    text-center
                    w-4
                    h-4
                    rounded-full
                    cursor-pointer
                    text-xs
                    hover:bg-zinc-300
                    dark:hover:bg-zinc-700
                    hover:ring-4 hover:ring-zinc-200
                    dark:hover:ring-zinc-800
                    ease-in-out
                    duration-200
                    active:ring-8
                  "
                  :style="setPosition(hr)"
                  @click="setTime(hr, 'hr')"
                >
                  {{ showTime(hr) }}
                </div>
              </template>
            </div>

            <div v-else-if="data.active == 'min'" class="w-full h-full">
              <template v-for="(min, index) in 60" :key="index">
                <div
                  v-if="canPrintNumber(min - 1)"
                  class="
                    absolute
                    text-center
                    w-4
                    h-4
                    rounded-full
                    cursor-pointer
                    text-xs
                    hover:bg-zinc-300
                    dark:hover:bg-zinc-700
                    hover:ring-4 hover:ring-zinc-200
                    dark:hover:ring-zinc-800
                    ease-in-out
                    duration-200
                    active:ring-8
                  "
                  :style="setPosition(min - 1)"
                  @click="setTime(min - 1, 'min')"
                >
                  {{ showTime(min - 1) }}
                </div>
                <div
                  v-else
                  class="
                    absolute
                    text-center
                    w-2
                    h-2
                    rounded-full
                    cursor-pointer
                    bg-zinc-200/25
                    dark:bg-zinc-800/25
                    hover:bg-zinc-300
                    dark:hover:bg-zinc-700
                    hover:ring-2 hover:ring-zinc-200
                    dark:hover:ring-zinc-800
                    ease-in-out
                    duration-200
                    active:ring-4
                  "
                  :style="setPosition(min - 1, 0.25)"
                  @click="setTime(min - 1, 'min')"
                ></div>
              </template>
            </div>

            <div v-else-if="data.active == 'sec'" class="w-full h-full">
              <template v-for="(sec, index) in 60" :key="index">
                <div
                  v-if="canPrintNumber(sec - 1)"
                  class="
                    absolute
                    text-center
                    w-4
                    h-4
                    rounded-full
                    cursor-pointer
                    text-xs
                    hover:bg-zinc-300
                    dark:hover:bg-zinc-700
                    hover:ring-4 hover:ring-zinc-200
                    dark:hover:ring-zinc-800
                    ease-in-out
                    duration-200
                    active:ring-8
                  "
                  :style="setPosition(sec - 1)"
                  @click="setTime(sec - 1, 'sec')"
                >
                  {{ showTime(sec - 1) }}
                </div>
                <div
                  v-else
                  class="
                    absolute
                    text-center
                    w-2
                    h-2
                    rounded-full
                    cursor-pointer
                    bg-zinc-200/25
                    dark:bg-zinc-800/25
                    hover:bg-zinc-300
                    dark:hover:bg-zinc-700
                    hover:ring-2 hover:ring-zinc-200
                    dark:hover:ring-zinc-800
                    ease-in-out
                    duration-200
                    active:ring-4
                  "
                  :style="setPosition(sec - 1, 0.25)"
                  @click="setTime(sec - 1, 'sec')"
                ></div>
              </template>
            </div>
          </transition>

          <div
            class="
              w-32
              h-1
              bg-blue-300
              absolute
              left-[10rem]
              top-[9.9rem]
              rounded
              ease-out
              duration-200
            "
            :style="setHandle()"
          ></div>

          <div
            class="
              absolute
              text-center
              w-8
              h-8
              rounded-full
              left-[9rem]
              top-[9rem]
              flex
              items-center
              justify-center
              cursor-pointer
              bg-zinc-100
              dark:bg-zinc-800
              hover:bg-zinc-300
              dark:hover:bg-zinc-700
              hover:ring-4 hover:ring-zinc-200
              dark:hover:ring-zinc-800
              ease-in-out
              duration-200
              active:ring-8
            "
            @click="setAmPm()"
          >
            <easy-icons
              :icon="data.time.meridiem === 'AM' ? 'light' : 'dark'"
            />
          </div>
        </div>
      </template>
    </easy-dropdown>
    <input-hint class="block mt-1" :hint="props.hint" />
    <input-error class="block" :message="props.error" />
  </div>
</template>
