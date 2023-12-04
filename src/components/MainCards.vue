<script setup>
import useAPI from '@/composables/useAPI';
import MainCardSingle from '@/components/MainCardSingle.vue';

const { animes } = useAPI()
</script>

<template>
    <div class="sub-wrapper">
        <Suspense>
            <MainCardSingle v-for="anime in animes" :key="anime.animeID" :anime="anime"/>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped lang="postcss">
.sub-wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ;
}
</style>