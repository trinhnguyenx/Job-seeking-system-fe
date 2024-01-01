<script setup lang="ts">
import DefaultLayout from "../src/views/home/index.vue"
import { markRaw, ref, watch } from "vue"
import { useRoute } from "vue-router"

// handle dynamic layout
const route = useRoute()
const layouts = {
    default: DefaultLayout,
} as Record<string, typeof DefaultLayout>
const layout = ref()
// you can use router afterEach instead
watch(
    () => route.meta.layout as string | undefined,
    (layoutName: string | undefined) => {
        if (layoutName === "404") {
            layout.value = undefined
            return
        }
        try {
            layout.value = markRaw(layouts[layoutName || "default"])
        } catch (err) {
            layout.value = markRaw(layouts["default"])
        }
    },
    { immediate: true }
)

// sometimes layout changing are not so smooth, so you can use this and show a loading screen to hide the layout changing
const isLoadingLayout = ref<boolean>(true)
setTimeout(() => {
    isLoadingLayout.value = false
}, 600)
</script>

<template>
    <!-- the loading screen that mentioned above -->
    <div v-if="isLoadingLayout" class="loading">
        <img src="./assets/vue.svg" alt="Loading" class="w-[10vw]" />
        <p>Loading..</p>
    </div>

    <Transition name="fade">
        <component v-if="!isLoadingLayout" :is="layout">
            <RouterView />
        </component>
    </Transition>
</template>

<style lang="scss" scoped>
/*
    Enter and leave animations can use different
    durations and timing functions.
*/
.fade-enter-active {
    transition: all 0.3s ease;
}

.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
        font-size: 2rem;
        font-weight: 700;
        @include gradient-text;
    }
}
</style>
