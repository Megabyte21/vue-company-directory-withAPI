<script setup>
import { onMounted } from 'vue';
import useAPI from '@/composables/useAPI'
import MainSearch from '@/components/MainSearch.vue';
import MainCards from '@/components/MainCards.vue';
import MainPagination from '@/components/MainPagination.vue';

const { getAnime, loading } = useAPI()

onMounted(async () => {
    await getAnime()
})
</script>

<template>
    <p v-if="loading">Loading...</p>
    <div v-else class="wrapper">
        <MainSearch />
        <MainCards />
        <MainPagination />
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply flex flex-col container mx-auto py-4 gap-4;
}
</style>