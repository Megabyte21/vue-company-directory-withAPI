<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker'
import useAPI from '@/composables/useAPI';
const {getDepartment} = useAPI()

const selectCard = () => {
    console.log(`${props.employee.name} selected`)
}

const props = defineProps({
  employee: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt:"2023-01-01",
        departmentID:"123",
        email:"John.Doe@example.com",
        employeeID:"123",
        name:"John Doe",
        quote:"A Really Cool Quote",
        title:"District Research Officer",
        updatedAt:"2023-01-01",
      }
    },
  },
})

const departmentResponse = await getDepartment(props.employee.departmentID)
const department = ref(departmentResponse)
</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-image">
            <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
            <p class="card-details-name">{{ props.employee.name }}</p>
            <p class="card-details-job">{{ props.employee.title }}, {{ department.name }}</p>
            <p class="card-details-email">{{ props.employee.email }}</p>
            <p class="card-details-quote">{{ props.employee.quote }}</p>
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