<script setup>
import EasyLinkButton from "@/Components/Theme/LinkButton.vue";
const props = defineProps({
    links: {
        type: Array,
        required: false,
        default() {
            return [];
        },
    },
    curve: {
        type: String,
        required: false,
        default() {
            return "default";
        },
    },
    elevated: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    size: {
        type: String,
        required: false,
        default() {
            return "default";
        },
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

const setColor = (isActive) => {
    return (isActive) ? "" : 'default';
};

const setLink = (url) => {
    return (url) ? url : '#';
};
</script>

<template>
    <div class="flex">
        <template v-for="(pageLink, index) in  links">
            <EasyLinkButton class="m-1" :color="setColor(pageLink.active)" :href="setLink(pageLink.url)"
                :elevated="elevated" :curve="props.curve" :size="props.size" :label="pageLink.label" :outlined="outlined"/>
        </template>
    </div>
</template>
  
