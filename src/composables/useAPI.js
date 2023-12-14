import { ref } from 'vue'
import axios from 'axios'

const animes = ref([])
const games = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(5)
const currentAnime = ref(null)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getAnime = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/animes', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  animes.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const getGames = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/games', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  games.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const fetchAnime = async (id) => {
  const { data } = await api.get(`/api/animes/${id}`)
  currentAnime.value = data
  console.log(data)
}



const useAPI = () => {
  return { animes, games, pages, activePage, loading, pageSize, getAnime, getGames, fetchAnime, currentAnime }
}

export default useAPI