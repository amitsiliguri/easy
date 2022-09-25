import { computed, ref } from "vue";
export function useStyle() {
    const colorType = ref('default')
    const isOutlined = ref(false)
    const radiusType = ref('default')
    const getSize = ref('default')

    const setBorder = computed(() => {
        let type = (isOutlined.value) ? colorType.value : 'transparent';
        return  'outline outline-1 ' + {
            primary: "outline-blue-500",
            warning: "outline-yellow-500",
            danger: "outline-rose-500",
            success: "outline-lime-500",
            transparent: "outline-transparent",
            default: "outline-zinc-200 dark:outline-slate-900",
        }[type.toString()];
    });

    const setBackground = computed(() => {
        return {
            primary: "bg-blue-500 text-gray-200",
            warning: "bg-yellow-500 text-gray-200",
            danger: "bg-rose-500 text-white",
            success: "bg-lime-500 text-white",
            transparent: "bg-transpanet",
            default: "bg-zinc-100 dark:bg-neutral-900",
        }[colorType.value.toString()];
    });

    const setHoverBackground = computed(() => {
        return {
            primary: "hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white",
            warning: "hover:bg-yellow-600 dark:hover:bg-yellow-400 hover:text-white",
            danger: "hover:bg-rose-600 dark:hover:bg-rose-400 hover:text-white",
            success: "hover:bg-lime-600 dark:hover:bg-lime-400 hover:text-white",
            transparent: "hover:bg-transpanet",
            default: "hover:bg-zinc-100 hover:text-gray-200 dark:bg-neutral-900 dark:hover:text-white",
        }[colorType.value.toString()];
    });

    const setRadius = computed(() => {
        return {
            sharp: "rounded-none",
            default: "rounded",
            full: "rounded-full",
        }[radiusType.value.toString()];
    });

    const setSize = computed(() => {
        return {
            small: "text-xs py-1 px-2",
            default: "text-base py-1 px-2",
            large: "text-base py-2 px-3",
        }[getSize.value.toString()];
    });

    return { colorType, isOutlined, radiusType, getSize, setBorder, setBackground, setHoverBackground, setRadius, setSize }
}
