<script setup>
import EasyAccordionCover from "@/Components/Theme/Accordion/Cover.vue";
import EasyAccordionItem from "@/Components/Theme/Accordion/Item.vue";
import EasyAccordionHeader from "@/Components/Theme/Accordion/Header.vue";
import EasyAccordionBody from "@/Components/Theme/Accordion/Body.vue";
</script>
            
<template>
    <EasyAccordionCover outlined>
        <EasyAccordionItem :item-key="1" seperated>
            <EasyAccordionHeader>
                Accordion Item #1
            </EasyAccordionHeader>
            <EasyAccordionBody>
                <strong>This is the first item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
            </EasyAccordionBody>
        </EasyAccordionItem>
        <EasyAccordionItem :item-key="2" seperated>
            <EasyAccordionHeader>
                Accordion Item #2
            </EasyAccordionHeader>
            <EasyAccordionBody>
                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
            </EasyAccordionBody>
        </EasyAccordionItem>
        <EasyAccordionItem :item-key="3">
            <EasyAccordionHeader>
                Accordion Item #3
            </EasyAccordionHeader>
            <EasyAccordionBody>
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
            </EasyAccordionBody>
        </EasyAccordionItem>
    </EasyAccordionCover>

</template>