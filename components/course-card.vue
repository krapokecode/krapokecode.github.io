<template>
  <g-link :to="link">
    <div class="card" style="width: 18rem;margin: 20px;">
      <img :src="coverImage" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <h5 class="card-subtitle">
          <span class="date">จำนวนบทความ {{ articlesNumber }}</span>
        </h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  </g-link>
</template>
<script>
export default {
  props: ["link", "coverImage", "title", "articlesNumber", "description"]
};
</script>
<style scoped>
a,
a:visited {
  color: inherit;
  background-image: none;
}
.card-title,
.card-text {
  font-family: "Mali", cursive !important;
}
.date {
  color: #a7a7a7;
}
img {
  height: 200px;
}
</style>
