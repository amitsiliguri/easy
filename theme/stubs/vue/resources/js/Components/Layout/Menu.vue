<script setup>
import { reactive, onMounted } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import EasyButton from '@/Components/Theme/Button.vue';
import EasyAccordionCover from "@/Components/Theme/Accordion/Cover.vue";
import EasyAccordionItem from "@/Components/Theme/Accordion/Item.vue";
import EasyAccordionHeader from "@/Components/Theme/Accordion/Header.vue";
import EasyAccordionBody from "@/Components/Theme/Accordion/Body.vue";
import { Link } from '@inertiajs/inertia-vue3';

const menu = reactive({
    submenu: []
});

onMounted(() => {
    showSubMenu(usePage().props.value.menu['introduction'].children )
})

const showSubMenu = (submenu) => {
    menu.submenu = submenu
}
</script>
<template>
    <div class="h-full w-16 lg:rounded-tr-xl bg-white dark:bg-zinc-900 p-2">
        <template v-if="$page.props.menu.length !== 0">
            <template v-for="(root, index) in $page.props.menu">
                <EasyButton type="button" color="transparent" size="lg" curve="full" :icon="root.icon" class="mb-2"
                    @click="showSubMenu(root.children)" />
            </template>
        </template>
    </div>
    <div class="bg-zinc-100 dark:bg-zinc-800 w-full p-2 lg:h-[56rem] overflow-y-auto">
        <template v-if="menu.submenu.length !== 0">
            <EasyAccordionCover flat transparent>
                <template v-for="(item, name, index) in menu.submenu">
                    <template v-if="item.children.length !== 0">
                        <EasyAccordionItem :item-key="(index + 1)">
                            <EasyAccordionHeader>
                                {{ item.title }}
                            </EasyAccordionHeader>
                            <EasyAccordionBody>
                                <template v-for="(subItem, subIndex) in item.children">
                                    <Link href="#" class="block pl-8 pt-4 pr-4 pb-4">
                                    {{ subItem.title }}
                                    </Link>
                                </template>
                            </EasyAccordionBody>
                        </EasyAccordionItem>
                    </template>
                    <template v-else>
                        <Link href="#" class="block p-4">
                        {{ item.title }}
                        </Link>
                    </template>
                </template>
            </EasyAccordionCover>
        </template>
    </div>
</template>