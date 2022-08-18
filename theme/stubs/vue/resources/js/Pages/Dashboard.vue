<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import EasyLinkButton from "@/Components/Theme/LinkButton.vue";

import EasyCard from "@/Components/Theme/Card.vue";

import { Head } from "@inertiajs/inertia-vue3";
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
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            Form Components
          </div>
        </div>
        <input-lebel label="Some Input Label" /> <br />
        <input-error message="Some Input Error" /> <br />
        <input-hint hint="Some Input Hint" /> <br /><br />

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
      </div>
    </div>
  </BreezeAuthenticatedLayout>
</template>
