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
import EasyRangeDatePicker from "@/Components/Form/Input/DatePicker/Range.vue";
import EasyFileUpload from "@/Components/Form/Input/Upload/File.vue";

import EasyCard from "@/Components/Theme/Card.vue";
// import EasyLinkButton from "@/Components/Theme/LinkButton.vue";

import PageButtons from "@/Components/Page/Dashboard/Buttons.vue";
import PageIconButtons from "@/Components/Page/Dashboard/IconButtons.vue";
import PageModal from "@/Components/Page/Dashboard/Modal.vue";
import PageBadge from "@/Components/Page/Dashboard/Badge.vue";
import PageChip from "@/Components/Page/Dashboard/Chip.vue"

import { Head } from "@inertiajs/inertia-vue3";

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
    multiSelect: ["value1", "value6", "value4", "value3"],
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
    date: "",
    dateRange: { "start": "2022-9-20", "end": "2022-10-12" },
});

// const toggleConfirmModal = (status) => {
//     showConfirmModal.value = status;
// };
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
                <PageChip />
                <br /><br />
                <PageBadge />
                <br /><br />
                <PageModal />
                <br /><br />
                <PageButtons />
                <br /><br />
                <PageIconButtons />
                <br /><br />
                <form action="#">
                    <easy-card seperated>
                        <template #header> Card Header </template>

                        <easy-toggle v-model:checked="input.toggle" class="my-4" />

                        <EasyFileUpload />
                        {{input.dateRange}}
                        <EasyRangeDatePicker v-model="input.dateRange" outlined/>
                        <br /> <br />
                        {{ input.date }}
                        <EasySingleDatePicker v-model="input.date" />
                        <EasyMultiSelect :options="input.options" v-model="input.multiSelect" id="selectExample"
                            name="selectExample" label="Some Select Label" class="my-4" />
                        {{ input.multiSelect }}
                        <EasyCheckBoxes :options="input.options" v-model="input.checkboxGroup" id="radioGroupExample2"
                            name="radioGroupExample2" label="Checkbox group label" class="my-4" />

                        <easy-select :options="input.options" v-model="input.select" id="selectExample"
                            name="selectExample" label="Some Select Label" class="my-4" />

                        <easy-input icon="solid-person" placeholder="Some placeholder" id="email" type="email" required
                            autofocus autocomplete="username" v-model="input.text" class="my-4" />

                        <easy-input icon="solid-person" placeholder="Some number placeholder" id="number" type="number"
                            required v-model="input.number" class="my-4" />

                        <easy-text-area v-model="input.textArea" id="textArea" label="Text area label" class="my-4" />

                        <easy-range-slider v-model="input.range" :min="400" :max="1000" :step="10" class="my-4" />

                        <EasyCheckBox v-model:checked="input.singleCheckBox" id="checkBoxExample"
                            label="Some Check Box Label" class="my-4" />

                        <EasyRadioButtons :options="input.options" v-model="input.radioGroup" id="radioGroupExample"
                            name="radioGroupExample" label="Some Radio Label 2" class="my-4" />

                        <EasyTimePicker v-model="input.time" id="timePickerExample" label="Time picker"
                            error="Invalid time" hint="Time is required" class="my-4" />
                        <template #footer> Card Footer </template>
                    </easy-card>
                </form>
                {{ input }}


                <!-- <span>Link</span> <br /> -->
                <!-- <easy-link-button class="m-1" small> Small Link </easy-link-button>
                <easy-link-button class="m-1" color="primary" rounded>
                    Primary Link
                </easy-link-button>
                <easy-link-button class="m-1" rounded color="danger" outlined elevate>
                    Danger Outlined Link </easy-link-button><br /><br /> -->

                <easy-card color="default">
                    <template #header> Card Header </template>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularized in the 1960s with
                    the release of Leeriest sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Lauds PageMaker
                    including versions of Lorem Ipsum. Contrary to popular belief, Lorem
                    Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClinton, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consenter, from a
                    Lorem Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the uncountable source. Lorem Ipsum
                    comes from sections 1.10.32 and 1.10.33 of "de Minibus Bonum et
                    Malory" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during
                    the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amen..", comes from a line in section 1.10.32.

                    <template #footer> Card Footer </template>
                </easy-card>
                <br />
                <br />
                
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
