<template>
  <div class="card" style="width: 30%;margin: 20px;">
    <img :src="coverImage" />
    <p class="card-text">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: ["coverImage", "description"]
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
  padding: 20px;
  line-height: 1.5;
}
.date {
  color: #a7a7a7;
}
img {
  display: inline-block;
  height: 300px;
  object-fit: cover;
}
</style>
