<script setup>
import { ref } from 'vue';
import EasyCollapse from "@/Components/Theme/Collapse.vue";
import EasyButton from "@/Components/Theme/Button.vue";

const show = ref(true);

const toggle = () => {
  show.value = !show.value
};
</script>
            
<template>
    <EasyButton class="m-1" color="primary" curve="sharp" label="Toggle Collapse" elevated @click="toggle()"/> 
    <EasyCollapse :show="show">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
        ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident.
    </EasyCollapse>  
</template>