<template>
  <div>
    <label for="myDropdown">Select a product Id:</label>
    <select id="myDropdown" v-model="selectedProduct">
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>

    <p>Product Id: {{ selectedProduct }}</p>
    <div class="card">
      <div class="title">{{ productDetail?.title }}</div> 
      <div class="thumbnail"><img :src="productDetail?.image"></div>
      <div class="description">{{ productDetail?.description }}</div>
      <div class="wrapper-meta">
        <span class="price">${{ productDetail?.price }}</span>
        <span class="rate">☆ {{ productDetail?.rating?.rate }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedProduct = ref<number>(1);

const { $api } = useNuxtApp();

const {
    data: productDetail,
    pending,
    error
  } = await $api.products.getProduct(
    selectedProduct,
    {
      watch: [selectedProduct]
    }
  );

</script>

<style>
:root {
  --card-height: 324px;
  --card-width: 288px;
}

.card {
  background: #fff;
  border-radius: 19px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #fff;
  margin: 20px;
  margin-top: 40px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: var(--card-height);
  width: var(--card-width);
  overflow: hidden;
  position: relative;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.card .title {
  font-weight: 700;
  color: rgb(197, 131, 8);
}

.card .thumbnail {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.card .thumbnail > img {
  height: 150px;
  object-fit: contain;
}

.card .description {
  margin-top: 1rem;
  font-size: 13px;
}

.card .wrapper-meta {
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 font-size: 14px;
 font-weight: 700;
 margin-top: 2rem;
}
</style>