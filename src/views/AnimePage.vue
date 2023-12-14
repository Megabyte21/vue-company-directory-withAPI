<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchAnime, currentAnime } = useAPI()


const route = useRoute()

const anime = ref('')
onMounted(async () => {
  await fetchAnime(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentAnime.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-blue-900 to-red-600 font-poppins block justify-around"
  >
    <div class="img" v-if="currentAnime">
        <img :src="currentAnime.coverArt" :alt="currentAnime.name"/>
    </div>
    <div class="name" v-if="currentAnime">
        <h1>
            {{ currentAnime.name }}
        </h1>
    </div>
    <div class="desc" v-if="currentAnime">
        {{ currentAnime.description }}
    </div>
  </main>
</template>

<style scoped lang="postcss">
.img {
    @apply float-right;
}
.name{
    @apply text-center translate-y-5 text-4xl text-red-500;
}
.desc{
    @apply inline-block align-top text-green-500 text-lg p-12 m-7;
}
</style>