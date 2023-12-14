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
    class="min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins block justify-around"
  >
<!--     <div
      v-if="currentAnime"
      class="flex flex-col gap-6"
    >
      <img class="p-8 h-120 w-64 translate-y-0"
        :src="currentAnime.coverArt"
        :alt="currentAnime.name"
      />
      <h1 class="text-white-800 text-4xl font-bold">
        {{ currentAnime.name }}
      </h1>
      <p class="text-blue-800 text-xl translate-y-5 text-justify inline-block">
        {{ currentAnime.description }}
      </p>
    </div> -->
    <div class="img">
        <img :src="currentAnime.coverArt" :alt="currentAnime.name"/>
    </div>
    <div class="name">
        <h1>
            {{ currentAnime.name }}
        </h1>
    </div>
    <div class="desc">
        {{ currentAnime.description }}
    </div>
  </main>
</template>

<style scoped lang="postcss">
.img {
    @apply -mx-0 -my-0 float-right
}
.name{
    @apply text-center translate-y-5 text-4xl text-red-500
}
.desc{
    @apply translate-y-10 overflow-hidden
}
</style>