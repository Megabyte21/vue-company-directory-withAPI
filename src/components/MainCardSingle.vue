<script setup>
import { ref, onMounted} from 'vue';
import { faker } from '@faker-js/faker'
import useAPI from '@/composables/useAPI';
const { getAnime } = useAPI()


const props = defineProps({
  anime: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt:"2023-01-01",
        animeID: "123",
        name: "This is a Title",
        description:"District Research Officer",
        updatedAt:"2023-01-01",
      }
    },
  },
})

const selectCard = () => {
  console.log(`${props.anime.name} selected`)
}


</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-image">
            <img src="" alt="" srcset="" />
        </div>
        <div class="card-details">
           <p class="card-details-name">{{ props.anime.name }}</p>
           <p class="card-details-quote">{{ props.anime.description }}</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card {
    @apply cursor-pointer overflow-hidden rounded-md bg-blue-200 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;
    &-image {
        img {
        @apply mx-auto rounded-full object-contain;
        }
    }
     &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-3xl font-thin tracking-wider text-red-800;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-blue-700;
      }
      &-quote {
        @apply pt-4 text-lg italic text-green-800;
      }
    }
}
</style>