<template>
  <div class="container">
    <h1 class="title">Ovqatlar</h1>
    <div class="grid">
      <div class="item" v-for="(ovqat, index) in filteredOvqatlar" :key="index">
        <img :src="ovqat.rasm" :alt="ovqat.nomi" class="img" />
        <h2 class="name">{{ ovqat.nomi }}</h2>
        <p class="price">Narxi: {{ ovqat.narx }} so'm</p>
      
      </div>
    </div>
  </div>
  <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
</template>

<script setup>
import { computed } from 'vue'


const props = defineProps(['searchQuery'])
import rasm1 from '@/assets/ovqat1.jfif'
import rasm2 from '@/assets/ovqat2.jpg'
import rasm3 from '@/assets/blob.png'
import rasm4 from '@/assets/shavertovuq.jpg'
import rasm5 from '@/assets/shaver.jpg'
import rasm6 from '@/assets/shavertandir.jpg'
import rasm7 from '@/assets/donar_svin.jpg'

// 🟢 Endi massivda shularni ishlatamiz:
const ovqatlar = [
  { nomi: "Lavash Standart", narx: 30000, rasm: rasm1 },
  { nomi: "Lavash Sirli", narx: 32000, rasm: rasm2 },
  { nomi: "Lavash Tandir", narx: 32000, rasm: rasm3 },
  { nomi: "Shaverma tovuqli", narx: 25000, rasm: rasm4 },
  { nomi: "Shaverma tandir", narx: 18000, rasm: rasm5 },
  { nomi: "Doner", narx: 25000, rasm: rasm6 },
  { nomi: "Big Doner", narx: 28000, rasm: rasm7 },
]
const filteredOvqatlar = computed(() => {
  if (!props.searchQuery) return ovqatlar
  return ovqatlar.filter(ovqat =>
    ovqat.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})
</script>

<style scoped>
.men{
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
}
.container {
  padding: 20px;
  text-align: center;
}
.title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.item {
  background: #fff;
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}
.name {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  font-weight: bold;
}
.price {
  color: #666;
  margin-bottom: 10px;
}
.btn {
  background-color: #22c55e;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #16a34a;
}
</style>
