<script setup>
import { ref, reactive, computed, watch } from "vue";
import {
    format,
    startOfISOWeek,
    endOfISOWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    isSameMonth,
    isSameDay,
    getMonth,
    getYear,
    subMonths,
    addMonths,
    isThisMonth,
    isThisYear,
    subYears,
    isSameYear,
    addYears,
    setMonth,
    setYear,
    getDate
} from "date-fns";
import EasyCard from "@/Components/Theme/Card.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";

const props = defineProps({
    modelValue: {
        type: Object,
        default() {
            return {
                start: "",
                end: ""
            }
        },
    },
});
const emit = defineEmits(["update:modelValue"]);

const now = new Date();
const active = ref("date");
const currentPage = ref(
    props.modelValue.start !== "" ? new Date(props.modelValue.start) : now
);

const selected = reactive({
    dates: {
        start: props.modelValue.start !== "" ? new Date(props.modelValue.start) : "",
        end: props.modelValue.end !== "" ? new Date(props.modelValue.end) : ""
    }
});

watch(
    () => selected.dates,
    (newValue) => {
        let startDate = (newValue.start !== "") ? getYear(newValue.start) + "-" + (getMonth(newValue.start) + 1) + "-" + getDate(newValue.start) : ""
        let endDate = (newValue.end !== "") ? getYear(newValue.end) + "-" + (getMonth(newValue.end) + 1) + "-" + getDate(newValue.end) : ""
        emit("update:modelValue", {
            start: startDate,
            end: endDate
        });
    },
    { deep: true }
)

const currentPageMonth = computed(() => {
    const dateFormat = "MMM";
    return format(currentPage.value, dateFormat);
});

const currentPageYear = computed(() => {
    return getYear(currentPage.value);
});

const months = computed(() => {
    const yearFormat = "yyyy";
    let year = format(currentPage.value, yearFormat);
    let month = new Date(year, 0, 1);
    let monthList = [];
    for (let i = 0; i < 4; i++) {
        let quatre = [];
        for (let i = 0; i < 3; i++) {
            quatre.push({
                value: getMonth(month),
                label: format(month, "MMM"),
                current: isThisMonth(month),
                selected: isMonthSelected(month),
            });
            month = addMonths(month, 1);
        }
        monthList.push(quatre);
    }
    return monthList;
});

const years = computed(() => {
    let startYear = subYears(new Date(getYear(currentPage.value), 0, 1), 10);
    let years = [];
    for (let i = 0; i < 6; i++) {
        let quatre = [];
        for (let i = 0; i < 4; i++) {
            quatre.push({
                value: getYear(startYear),
                current: isThisYear(startYear),
                selected: isYearSelected(startYear),
            });
            startYear = addYears(startYear, 1);
        }
        years.push(quatre);
    }
    return years;
});

const week = computed(() => {
    const days = [];
    let startDate = startOfISOWeek(currentPage.value);
    for (let i = 0; i < 7; i++) {
        let newDate = addDays(startDate, i);
        days.push(newDate.toLocaleDateString(undefined, { weekday: "short" }));
    }
    return days;
});

const dates = computed(() => {
    const monthStart = startOfMonth(currentPage.value);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfISOWeek(monthStart);
    const endDate = endOfISOWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const dayInfo = {
                day,
                formattedDate,
                isIncurrentMonth: isSameMonth(day, monthStart),
                isToday: isSameDay(day, now),
                isSelectedDay: isDaySelected(day),
            };
            days.push(dayInfo);
            day = addDays(day, 1);
        }
        rows.push(days);
        days = [];
    }
    return rows;
});

const selectDate = (day) => {
    if (selected.dates.start == "") {
        selected.dates.start = day.day
    } else if ((selected.dates.start <= day.day && selected.dates.end == "")) {
        selected.dates.end = day.day
    } else {
        selected.dates.start = day.day
        selected.dates.end = ""
    }
};

const nextMonth = () => {
    currentPage.value = addMonths(currentPage.value, 1);
};

const prevMonth = () => {
    currentPage.value = subMonths(currentPage.value, 1);
};

const updateMonth = (month) => {
    currentPage.value = setMonth(currentPage.value, month);
    active.value = "date";
};

const updateYear = (year) => {
    currentPage.value = setYear(currentPage.value, year);
    active.value = "month";
};

const isDaySelected = (day) => {
    if (selected.dates.start !== "" && (isSameDay(day, selected.dates.start) || (selected.dates.end !== "" && day >= selected.dates.start && day <= selected.dates.end)) ) {
        return true;
    }
    return false;
};

const isYearSelected = (year) => {
    if (selected.dates.start !== "" && (isSameYear(year, selected.dates.start) || (selected.dates.end !== "" && year >= selected.dates.start && year <= selected.dates.end)) ) {
        return true;
    }
    return false;
};

const isMonthSelected = (month) => {
    if (selected.dates.start !== "" && (isSameMonth(month, selected.dates.start) || (selected.dates.end !== "" && month >= selected.dates.start && month <= selected.dates.end)) ) {
        return true;
    }
    return false;
};
</script>

<template>
    <EasyCard elevate color="primary" class="w-96">
        <template #header>
            <EasyButton color="primary" type="button" @click="active = 'year'"
                :label="currentPageMonth + ' ' + currentPageYear" />
            <span class="grow"></span>
            <EasyButton v-if="active === 'date'" color="primary" curve="full" type="button" @click="prevMonth()"
                icon="left" />
            <EasyButton v-if="active === 'date'" color="primary" curve="full" type="button" @click="nextMonth()"
                icon="right" />
        </template>
        <table class="w-full table-fixed">
            <thead v-if="active === 'date'">
                <tr>
                    <th class="uppercase text-center" v-for="(day, index) in week" :key="index">
                        <span>{{ day }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="active === 'date'">
                    <tr v-for="(week, weekIndex) in dates" :key="weekIndex">
                        <td v-for="(date, dateIndex) in week" :key="dateIndex" class="text-center p-1">
                            <EasyButton 
                            v-if="date.isIncurrentMonth" 
                            :disabled="!date.isIncurrentMonth"
                            :color="date.isSelectedDay || date.isToday ? 'primary' : 'transparent'"
                            type="button"
                            full
                            :outlined="date.isToday && !date.isSelectedDay"
                            @click="selectDate(date)"
                            :label="date.formattedDate.toString()" 
                            />
                        </td>
                    </tr>
                </template>
                <template v-else-if="active === 'month'">
                    <tr v-for="(quarters, quarterOndex) in months" :key="quarterOndex">
                        <td v-for="(month, monthIndex) in quarters" :key="monthIndex" class="text-center p-1">
                            <EasyButton
                            :color="month.selected || month.current ? 'primary' : 'transparent'"
                            type="button"
                            full
                            :outlined="month.current && !month.selected" 
                            @click="updateMonth(month.value)"
                            :label="month.label" 
                            />
                        </td>
                    </tr>
                </template>
                <template v-else-if="active === 'year'">
                    <tr v-for="(quarters, quarterOndex) in years" :key="quarterOndex">
                        <td v-for="(year, yearIndex) in quarters" :key="yearIndex" class="text-center p-1">
                            <EasyButton
                            :color="year.selected || year.current ? 'primary' : 'transparent'"
                            type="button"
                            full
                            :outlined="year.current && !year.selected" 
                            @click="updateYear(year.value)"
                            :label="year.value.toString()" 
                            />
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </EasyCard>
</template>
