<script setup>
import { reactive, ref, onMounted } from "vue";
import Card from "@/Components/Theme/Card.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";

const props = defineProps({
    modelValue: {
        type: String,
        default() {
            return "";
        },
    }
});

const emit = defineEmits(["update:modelValue"]);

const clock = ref(null);

const data = reactive({
    time: {
        hr: "--",
        min: "--",
        sec: "--",
        meridiem: "AM"
    },
    active: "hr",
});

onMounted(() => {
    if (props.modelValue !== "") {
        setPropsTime(props.modelValue.split(":"))
    }
});

const setPropsTime = (time) => {
    if (time[0] > 12 && time[0] < 24) {
        data.time.hr = time[0] - 12
        data.time.meridiem = 'PM'
    } else if (time[0] <= 12) {
        data.time.hr = time[0]
    } else {
        data.time.hr = 0
    }
    data.time.min = (time[1] < 60) ? time[1] : 0
    data.time.sec = (time[2] < 60) ? time[2] : 0
};

const setPosition = (number, align = 0.5) => {
    let gap = (data.active === 'hr') ? 30 : 6;
    let angle = gap * parseInt(number)
    let radius = 10 - 1;
    angle = (angle >= 360) ? angle - 360 : angle
    angle += 270
    let getY = Math.sin(angle * Math.PI / 180) * radius
    let getX = Math.cos(angle * Math.PI / 180) * radius
    getY = (getY + 10) - align
    getX = (getX + 10) - align
    return 'top:' + parseFloat(getY).toFixed(2) + 'rem; left:' + parseFloat(getX).toFixed(2) + 'rem'
};

const canPrintNumber = (number) => {
    if (number % 5 === 0) {
        return true
    }
    return false
};

const setTime = (value, type) => {
    switch (type) {
        case 'hr':
            data.time.hr = value
            data.active = 'min'
            break;
        case 'min':
            data.time.min = value
            data.active = 'sec'
            break;
        default:
            data.time.sec = value
            break;
    }
    setDefaultTime()
    emitValue()
};

const setDefaultTime = () => {
    if (data.time.hr === "--") data.time.hr = '12'
    if (data.time.min === "--") data.time.min = '00'
    if (data.time.sec === "--") data.time.sec = '00'
};

const emitValue = () => {
    if (data.time.hr !== "--" && data.time.min !== "--" && data.time.sec !== "--") {
        let hr = data.time.hr
        if (data.time.meridiem === 'PM' && data.time.hr < 12) {
            hr = data.time.hr + 12
        }
        if (data.time.meridiem === 'AM' && data.time.hr === 12) {
            hr = 0
        }
        let value = showTime(hr) + ':' + showTime(data.time.min) + ':' + showTime(data.time.sec)
        emit("update:modelValue", value);
    }
};

const showTime = (value) => {
    return ("0" + value).slice(-2);
};

const setAmPm = () => {
    if (data.time.meridiem === 'AM') {
        data.time.meridiem = 'PM'
    } else {
        data.time.meridiem = 'AM'
    }
    emitValue()
};

</script>

<template>
    <card outlined class="w-96">
        <template #header>
            <span @click="data.active = 'hr'" class="cursor-pointer">
                {{ showTime(data.time.hr) }}
            </span>
            :
            <span @click="data.active = 'min'" class="cursor-pointer">
                {{ showTime(data.time.min) }}
            </span>
            :
            <span @click="data.active = 'sec'" class="cursor-pointer">
                {{ showTime(data.time.sec) }}
            </span>
            <span class="ml-2">{{data.time.meridiem}}</span>
        </template>
        <div class="p-2 overflow-y-auto max-h-[70vh] bg-inherit">
            <div ref="clock"
                class="relative w-80 h-80 m-auto rounded-full bg-zinc-100 dark:bg-zinc-900 transition duration-200">
                <template v-if="data.active == 'hr'">
                    <template v-for="(hr, index) in 12" :key="index">
                        <div class="absolute text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8"
                            :style="setPosition(hr)" @click="setTime(hr, 'hr')">
                            {{ showTime( hr ) }}
                        </div>
                    </template>
                </template>

                <template v-if="data.active == 'min'">
                    <template v-for="(min, index) in 60" :key="index">
                        <div v-if="canPrintNumber(min - 1)"
                            class="absolute text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8"
                            :style="setPosition(min - 1)" @click="setTime(min - 1, 'min')">
                            {{ showTime( min - 1 ) }}
                        </div>
                        <div v-else
                            class="absolute text-center w-2 h-2 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"
                            :style="setPosition(min - 1, 0.25)" @click="setTime(min - 1, 'min')"></div>
                    </template>
                </template>

                <template v-if="data.active == 'sec'">
                    <template v-for="(sec, index) in 60" :key="index">
                        <div v-if="canPrintNumber(sec - 1)"
                            class="absolute text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8"
                            :style="setPosition(sec - 1)" @click="setTime(sec - 1, 'sec')">
                            {{ showTime( sec - 1 ) }}
                        </div>
                        <div v-else
                            class="absolute text-center w-2 h-2 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"
                            :style="setPosition(sec - 1, 0.25)" @click="setTime(sec - 1, 'sec')"></div>
                    </template>
                </template>
                <div class="absolute text-center w-8 h-8 rounded-full left-[9rem] top-[9rem] flex align-center justify-center cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8"
                    @click="setAmPm()">
                    <easy-icons :icon="(data.time.meridiem === 'AM') ? 'light' : 'dark'" />
                </div>
            </div>
        </div>
    </card>
</template>
