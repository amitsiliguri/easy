<script setup>
import { ref, computed, watch } from "vue";
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
  parseISO,
  getDate,
} from "date-fns";
import EasyCard from "@/Components/Theme/Card.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return "";
    },
  },
});
const emit = defineEmits(["update:modelValue"]);
//active => date, month. year
const now = new Date();
const active = ref("date");
const currentPage = ref(now);
const selectedFullDate = ref(
  props.modelValue !== "" ? new Date(props.modelValue) : now
);

watch(selectedFullDate, (newValue) => {
  let dateString =
    getYear(newValue) +
    "-" +
    (getMonth(newValue) + 1) +
    "-" +
    getDate(newValue);
  emit("update:modelValue", dateString);
});

const selectedDate = computed(() => {
  const dateFormat = "d";
  return format(selectedFullDate.value, dateFormat);
});

const selectedMonth = computed(() => {
  const dateFormat = "MMM";
  return format(selectedFullDate.value, dateFormat);
});

const selectedYear = computed(() => {
  return getYear(selectedFullDate.value);
});

const currentPageMonth = computed(() => {
  const dateFormat = "MMMM";
  return format(currentPage.value, dateFormat);
});

const currentPageyear = computed(() => {
  return getYear(currentPage.value);
});

const months = computed(() => {
  const yearFormat = "yyyy";
  let year = format(selectedFullDate.value, yearFormat);
  let date = new Date(year, 0, 1);
  let monthList = [];
  for (let i = 0; i < 4; i++) {
    let quater = [];
    for (let i = 0; i < 3; i++) {
      quater.push({
        value: getMonth(date),
        label: format(date, "MMM"),
        current: isThisMonth(date),
        selected: isSameMonth(date, selectedFullDate.value),
      });
      date = addMonths(date, 1);
    }
    monthList.push(quater);
  }
  return monthList;
});

const years = computed(() => {
  let startYear = subYears(currentPage.value, 10);
  let years = [];
  for (let i = 0; i < 6; i++) {
    let quater = [];
    for (let i = 0; i < 4; i++) {
      quater.push({
        value: getYear(startYear),
        current: isThisYear(startYear),
        selected: isSameYear(startYear, selectedFullDate.value),
      });
      startYear = addYears(startYear, 1);
    }
    years.push(quater);
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
        isSelectedDay: isSameDay(day, selectedFullDate.value),
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
  selectedFullDate.value = day.day;
};

const nextMonth = () => {
  currentPage.value = addMonths(currentPage.value, 1);
  // updateCurrentPage(currentPage.value);
};

const prevMonth = () => {
  currentPage.value = subMonths(currentPage.value, 1);
};

const updateMonth = (month) => {
  selectedFullDate.value = setMonth(selectedFullDate.value, month);
  currentPage.value = setMonth(currentPage.value, month);
  active.value = "year";
};

const updateYear = (year) => {
  selectedFullDate.value = setYear(selectedFullDate.value, year);
  currentPage.value = setYear(currentPage.value, year);
  active.value = "date";
};
</script>

<template>
  <EasyCard elevate color="primary" class="w-80">
    <template #header>
      <EasyButton
        small
        color="primary"
        font-size="lg"
        type="button"
        @click="active = 'date'"
      >
        {{ selectedDate }}
      </EasyButton>
      <EasyButton
        small
        color="primary"
        type="button"
        font-size="lg"
        @click="active = 'month'"
      >
        {{ selectedMonth }}
      </EasyButton>
      <EasyButton
        small
        color="primary"
        type="button"
        font-size="lg"
        @click="active = 'year'"
      >
        {{ selectedYear }}
      </EasyButton>
      <span class="grow"></span>
      <EasyButton
        v-if="active === 'date'"
        rounded
        small
        color="primary"
        type="button"
        @click="prevMonth()"
      >
        <EasyIcons icon="left" />
      </EasyButton>
      <EasyButton
        v-if="active === 'date'"
        rounded
        small
        color="primary"
        type="button"
        @click="nextMonth()"
      >
        <EasyIcons icon="right" />
      </EasyButton>
    </template>
    <table class="w-full table-fixed">
      <thead v-if="active === 'date'">
        <tr>
          <th
            colspan="7"
            class="uppercase text-center text-zinc-400 font-light"
          >
            {{ currentPageMonth }} {{ currentPageyear }}
          </th>
        </tr>
        <tr>
          <th
            class="uppercase text-center"
            v-for="(day, index) in week"
            :key="index"
          >
            <span>{{ day }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="active === 'date'">
          <tr v-for="(week, weekIndex) in dates" :key="weekIndex">
            <td
              v-for="(date, dateIndex) in week"
              :key="dateIndex"
              class="text-center p-1"
            >
              <EasyButton
                v-if="date.isIncurrentMonth"
                rounded
                small
                type="button"
                :disabled="!date.isIncurrentMonth"
                :color="
                  date.isSelectedDay || date.isToday ? 'primary' : 'default'
                "
                :outlined="date.isToday && !date.isSelectedDay"
                @click="selectDate(date)"
              >
                {{ date.formattedDate }}
              </EasyButton>
            </td>
          </tr>
        </template>
        <template v-else-if="active === 'month'">
          <tr v-for="(quarters, quarterOndex) in months" :key="quarterOndex">
            <td
              v-for="(month, monthIndex) in quarters"
              :key="monthIndex"
              class="text-center p-1"
            >
              <EasyButton
                small
                full
                type="button"
                :color="month.selected || month.current ? 'primary' : 'default'"
                :outlined="month.current && !month.selected"
                @click="updateMonth(month.value)"
              >
                {{ month.label }}
              </EasyButton>
            </td>
          </tr>
        </template>
        <template v-else-if="active === 'year'">
          <tr v-for="(quarters, quarterOndex) in years" :key="quarterOndex">
            <td
              v-for="(year, yearIndex) in quarters"
              :key="yearIndex"
              class="text-center p-1"
            >
              <EasyButton
                small
                full
                type="button"
                :color="year.selected || year.current ? 'primary' : 'default'"
                :outlined="year.current && !year.selected"
                @click="updateYear(year.value)"
              >
                {{ year.value }}
              </EasyButton>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </EasyCard>
</template>
