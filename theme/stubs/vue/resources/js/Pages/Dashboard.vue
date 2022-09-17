<script setup>
import { ref, reactive } from "vue";

import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";

import EasyCheckBox from "@/Components/Form/Input/Checkbox/Single.vue";
import EasyCheckBoxes from "@/Components/Form/Input/Checkbox/Multiple.vue";
import EasyTimePicker from "@/Components/Form/Input/TimePicker.vue";
import EasyRadioButtons from "@/Components/Form/Input/RadioButton/Multiple.vue";
import EasyInput from "@/Components/Form/Input/Input.vue";
import EasyTextArea from "@/Components/Form/Input/TextArea.vue";
import EasyToggle from "@/Components/Form/Input/Toggle.vue";
import EasyRangeSlider from "@/Components/Form/Input/RangeSlider.vue";
import EasySelect from "@/Components/Form/Input/Select/Single.vue";
import EasyMultiSelect from "@/Components/Form/Input/Select/Multiple.vue";
import EasySingleDatePicker from "@/Components/Form/Input/DatePicker/Single.vue";

import EasyCard from "@/Components/Theme/Card.vue";
import EasyBadge from "@/Components/Theme/Badge.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import EasyLinkButton from "@/Components/Theme/LinkButton.vue";
import EasyDialogModal from "@/Components/Theme/Modal/DialogModal.vue";

import { Head } from "@inertiajs/inertia-vue3";

const showConfirmModal = ref(false);

const input = reactive({
  toggle: true,
  range: {
    min: 410,
    max: 670,
  },
  textArea: "",
  text: "",
  number: "",
  singleCheckBox: true,
  time: "",
  radioGroup: "",
  checkboxGroup: [],
  select: "",
  multiSelect: [ "value1", "value6", "value4", "value3" ],
  options: [
    {
      value: "value1",
      label: "label 1",
    },
    {
      value: "value2",
      label: "label 2",
    },
    {
      value: "value3",
      label: "label 3",
    },
    {
      value: "value4",
      label: "label 4",
    },
    {
      value: "value5",
      label: "label 5",
    },
    {
      value: "value6",
      label: "label 6",
    },
  ],
});

const toggleConfirmModal = (status) => {
  showConfirmModal.value = status;
};
</script>

<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form action="#">
          <easy-card outlined>
            <template #header> Card Header </template>

            <easy-toggle v-model:checked="input.toggle" class="my-4" />

            <EasySingleDatePicker />
            <EasyMultiSelect
              :options="input.options"
              v-model="input.multiSelect"
              id="selectEample"
              name="selectEample"
              label="Some Select Label"
              class="my-4"
            />
            {{ input.multiSelect }}
            <EasyCheckBoxes
              :options="input.options"
              v-model="input.checkboxGroup"
              id="radioGroupExample2"
              name="radioGroupExample2"
              label="Checkbox group label"
              class="my-4"
            />

            <easy-select
              :options="input.options"
              v-model="input.select"
              id="selectEample"
              name="selectEample"
              label="Some Select Label"
              class="my-4"
            />

            <easy-input
              icon="solid-person"
              placeholder="Some placeholder"
              id="email"
              type="email"
              required
              autofocus
              autocomplete="username"
              v-model="input.text"
              class="my-4"
            />

            <easy-input
              icon="solid-person"
              placeholder="Some number placeholder"
              id="number"
              type="number"
              required
              v-model="input.number"
              class="my-4"
            />

            <easy-text-area
              v-model="input.textArea"
              id="textArea"
              label="Text area label"
              class="my-4"
            />

            <easy-range-slider
              v-model="input.range"
              :min="400"
              :max="1000"
              :step="10"
              class="my-4"
            />

            <EasyCheckBox
              v-model:checked="input.singleCheckBox"
              id="checkBoxExample"
              label="Some Check Box Label"
              class="my-4"
            />

            <EasyRadioButtons
              :options="input.options"
              v-model="input.radioGroup"
              id="radioGroupExample"
              name="radioGroupExample"
              label="Some Radio Label 2"
              class="my-4"
            />

            <EasyTimePicker
              v-model="input.time"
              id="timePickerExample"
              label="Time picker"
              error="Invalid time"
              hint="Time is required"
              class="my-4"
            />
            <template #footer> Card Footer </template>
          </easy-card>
        </form>
        {{ input }}

        <br /><br />
        <span>Button</span> <br />
        <easy-button class="m-1" small> Small Button </easy-button>
        <easy-button class="m-1" color="primary" rounded>
          Primary Button
        </easy-button>
        <easy-button class="m-1" rounded color="danger" outlined elevate>
          Danger Outlined Button
        </easy-button>
        <easy-button class="m-1" outlined> Small Button </easy-button>

        <br /><br />

        <span>Link</span> <br />
        <easy-link-button class="m-1" small> Small Link </easy-link-button>
        <easy-link-button class="m-1" color="primary" rounded>
          Primary Link
        </easy-link-button>
        <easy-link-button class="m-1" rounded color="danger" outlined elevate>
          Danger Outlined Link </easy-link-button
        ><br /><br />

        <easy-card outlined>
          <template #header> Card Header </template>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.

          <template #footer> Card Footer </template>
        </easy-card>

        <easy-dialog-modal
          title="Modal Title"
          :show="showConfirmModal"
          @close="toggleConfirmModal(false)"
        >
          <template #content>
            <span class="text-justify"
              >The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.</span
            >
          </template>
          <template #footer> Modal Footer </template>
        </easy-dialog-modal>

        <easy-button
          class="my-1"
          rounded
          color="primary"
          outlined
          elevate
          @click="toggleConfirmModal(!showConfirmModal)"
        >
          Danger Outlined Button
        </easy-button>

        <br />

        <easy-badge align="right" class="mt-4">
          <easy-button type="button" @click="addToast()">
            <easy-icons icon="solid-person" /> Add notification
          </easy-button>
          <template #badgeContent>
            <span class="p-1">100</span>
          </template>
        </easy-badge>
      </div>
    </div>
  </BreezeAuthenticatedLayout>
</template>
