<script setup>
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
// import EasyButton from "@/Components/Theme/Button.vue";
</script>

<template>
    <fieldset>
        <input-lebel for="file-upload" label="File Upload" />
        <div
            class="min-h-[42px] mt-1 flex items-center bg-transparent block w-full border border-zinc-400 dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-500 focus:border-blue-600 dark:focus:border-blue-400 rounded">
            <label for="file-upload" class="px-2 py-1">
                <EasyIcons icon="clip" />
            </label>
            <label for="file-upload" class="grow cursor-pointer px-2 py-1">No file choosen</label>
        </div>
        <input id="file-upload" type="file" class="hidden" ref="fileUpload">
        <input-hint class="block mt-1" hint="file input hint" />
        <input-error class="block" message="file input error" />
    </fieldset>
</template>