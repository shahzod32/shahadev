<template>
  <div>
    <Header :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />
    <router-view :searchQuery="searchQuery" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/companents/header.vue'

const searchQuery = ref('')
const router = useRouter()

// Sahifa yuklanganda avtomatik /ovqatlar sahifasiga yo‘naltirish
onMounted(() => {
  if (router.currentRoute.value.path === '/') {
    router.push('/ovqatlar')
  }
})
</script>
