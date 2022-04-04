<template>
  <div id="app">
    <div class="wrapper">
      <div v-for="(productItem,productIndex) in products" :key="productIndex">
        <img :src="productItem.image" :alt="productItem.name">
        <h3>{{ productItem.name }}</h3>
        <div>{{ productItem.price | toCurrency }}</div>
        <div>{{ productItem.color }}</div>
        <div>{{ productItem.date | formatDate }}</div>
        <div v-if="productItem.hot == true">San pham ban chay</div>
        <div v-else>San pham ban khong chay</div>
        <button>Them san pham</button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: [
        {
          id: 1,
          name: "samsung",
          price: 5000,
          date: '08-01-2021',
          hot: true,
          branch: "HanQuoc",
          desc: "day la samsung",
          image: "https://i.pinimg.com/750x/28/8b/09/288b09348d5f9b6fb383187cb5b64be5.jpg",
          color: []
        },
        {
          id: 2,
          name: "redmi",
          price: 4000,
          date: '04-04-2020',
          hot: false,
          branch: "TrungQuoc",
          desc: "day la redmi",
          image: "https://i.pinimg.com/750x/aa/a6/20/aaa620331e91a1b1899ef265828da27d.jpg",
          color: ["white", "black"]
        },
        {
          id: 3,
          name: "apple",
          price: 6000,
          date: '05-06-2021',
          hot: true,
          branch: "My",
          desc: "day la apple",
          image: "https://i.pinimg.com/750x/3a/80/51/3a80511bb9daf274e2de863f320fad7f.jpg",
          color: ["pink", "black"]
        },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 500px;
  height: 500px;
}
</style>
