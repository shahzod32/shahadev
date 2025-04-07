<template>
    <div class="container">
      <h1 class="title">Pizzalar</h1>
      <div class="grid">
        <div
          class="item"
          v-for="(pizza, index) in filteredPizzalar"
          :key="index"
        >
          <img :src="pizza.rasm" :alt="pizza.nomi" class="img" />
          <h2 class="name">{{ pizza.nomi }}</h2>
          <p class="price">Narxi: {{ pizza.narx }} so'm</p>
          <button class="btn">Buyurtma berish</button>
        </div>
      </div>
    </div>
    <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps(['searchQuery'])
  
  const pizzalar = [
    { nomi: "Pizza Margarita", narx: 45000, rasm: "/src/assets/pizza1.jpg" },
    { nomi: "Pizza Pepperoni", narx: 50000, rasm: "/src/assets/pizza2.jpg" },
    { nomi: "Pizza 4 Pishloqli", narx: 55000, rasm: "/src/assets/pizza3.jpg" },
    { nomi: "Pizza Tovuq", narx: 48000, rasm: "/src/assets/pizza4.jpg" },
    { nomi: "Pizza Go'shtli", narx: 52000, rasm: "/src/assets/pizza5.jpg" },
  ]
  
  const filteredPizzalar = computed(() => {
    if (!props.searchQuery) return pizzalar
    return pizzalar.filter(p =>
      p.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
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
    background-color: #f97316;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #ea580c;
  }
  </style>
  