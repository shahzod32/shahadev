<template>
  <div class="container">
    <h1 class="title">Shirinliklar</h1>
    <div class="grid">
      <div class="item" v-for="(item, index) in filteredShirinliklar" :key="index">
        <img :src="item.rasm" :alt="item.nomi" class="img" />
        <h2 class="name">{{ item.nomi }}</h2>
        <p class="price">Narxi: {{ item.narx }} so'm</p>
    
      </div>
    </div>
  </div>
  <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
</template>

  <script setup>
  import { computed } from 'vue'
  const props = defineProps(['searchQuery'])
  
  const shirinliklar = [
    { nomi: 'Tort', narx: 25000, rasm: '/src/assets/tort.jpg' },
    { nomi: 'Pirog', narx: 18000, rasm: '/src/assets/pirog.jpg' },
    { nomi: 'Shokolad', narx: 9000, rasm: '/src/assets/shokolad.jpg' },
    { nomi: 'Pechenye', narx: 7000, rasm: '/src/assets/pechenye.jpg' },
    { nomi: 'Muzqaymoq', narx: 10000, rasm: '/src/assets/icecream.jpg' },
    { nomi: 'Rulet', narx: 12000, rasm: '/src/assets/rulet.jpg' },
    { nomi: 'Medovik', narx: 22000, rasm: '/src/assets/medovik.jpg' },
  ]
  
  const filteredShirinliklar = computed(() => {
    if (!props.searchQuery) return shirinliklar
    return shirinliklar.filter(item =>
      item.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
  })
  </script>
  
  
  <style scoped>
  .container {
    padding: 20px;
    text-align: center;
  }
  .men{
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
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
    background-color: #f59e0b;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #d97706;
  }
  </style>
  