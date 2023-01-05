<script setup>
import { ref } from "vue";
import EasyCard from "@/Components/Theme/Card.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import EasyTabHeader from "@/Components/Theme/Tab/Header.vue";
import EasyTabCover from "@/Components/Theme/Tab/Cover.vue";
import EasyTabContent from "@/Components/Theme/Tab/Content.vue";

const active = ref(1)
</script>

<template>
    <easy-card seperated>
        <template #header>
            <EasyTabHeader>
                <EasyButton label="Button One" type="button" @click="active = 1" class="flex-none"/>
                <EasyButton label="Button Two" type="button" @click="active = 2" class="flex-none"/>
                <EasyButton label="Button Three" type="button" @click="active = 3" class="flex-none"/>
                <EasyButton label="Button Four" type="button" @click="active = 4" class="flex-none"/>
                <EasyButton label="Button Five" type="button" @click="active = 5" class="flex-none"/>
            </EasyTabHeader>
        </template>
        <EasyTabCover>
            <EasyTabContent :active="active == 1">
                Content One <br>
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
            </EasyTabContent>
            <EasyTabContent :active="active == 2">
                Content Two <br>
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
            </EasyTabContent>
            <EasyTabContent :active="active == 3">
                Content Three <br>
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
            </EasyTabContent>
            <EasyTabContent :active="active == 4">
                Content Four <br>
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
            </EasyTabContent>
            <EasyTabContent :active="active == 5">
                Content Five <br>
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
            </EasyTabContent>
        </EasyTabCover>
    </easy-card>
</template>