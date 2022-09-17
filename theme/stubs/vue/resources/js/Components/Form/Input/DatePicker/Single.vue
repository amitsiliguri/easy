<script setup>
import EasyCard from "@/Components/Theme/Card.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";
</script>

<template>
  <EasyCard elevate color="primary" class="w-96">
    <template #header>
      <span>DD/MM/YYYY</span>
      <span class="grow"></span>
      <EasyButton rounded small color="primary" type="button" class="w-8 h-8">
        <EasyIcons icon="left" />
      </EasyButton>
      <EasyButton rounded small color="primary" type="button" class="w-8 h-8">
        <EasyIcons icon="right" />
      </EasyButton>
    </template>
    <table class="w-full table-fixed">
      <thead>
        <tr>
          <th class="text-center">Sun</th>
          <th class="text-center">Mon</th>
          <th class="text-center">Tue</th>
          <th class="text-center">Wed</th>
          <th class="text-center">Thu</th>
          <th class="text-center">Fri</th>
          <th class="text-center">Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="i">
          <td v-for="j in 7" :key="j" class="text-center p-1">
            {{ j + (i - 1) * 7 }}
          </td>
        </tr>
      </tbody>
    </table>
  </EasyCard>
</template>
