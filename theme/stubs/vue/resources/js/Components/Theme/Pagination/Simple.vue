<script setup>
import EasyLinkButton from "@/Components/Theme/LinkButton.vue";
const props = defineProps({
    nextPageUrl: {
        type: String,
        required: false,
    },
    previousPageUrl: {
        type: String,
        required: false,
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

const setLink = (url) => {
    return (url) ? url : '#';
};
</script>

<template>
    <div class="">
        <EasyLinkButton class="m-1" :href="setLink(previousPageUrl)"
                :elevated="elevated" :curve="props.curve" :size="props.size" icon="left" :outlined="outlined" color="default" title="previous link"/>
        <EasyLinkButton class="m-1" :href="setLink(nextPageUrl)"
                :elevated="elevated" :curve="props.curve" :size="props.size" icon="right" :outlined="outlined" color="default" title="next link"/>
    </div>
</template>
  
