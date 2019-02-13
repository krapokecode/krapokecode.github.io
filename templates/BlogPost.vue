<template>
  <Layout>
    <div class="article">
      <g-image :src="$page.blogPost.image" class="cover-image" />
      <h3 id="title">{{ $page.blogPost.title }}</h3>
      <p id="short-title">
        {{ $page.blogPost.date }}, By {{ $page.blogPost.author }}
      </p>
      <div id="blog-container" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
      author
    }
  }
</page-query>

<style>
.cover-image {
  margin-top: 30px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  display: block;
}

#title {
  margin-top: 30px;
  font-family: "Mali", cursive !important;
  text-align: center;
}

#short-title {
  text-align: center;
  color: #a6a6a6;
}

p > img,
img {
  border: none !important;
  border-radius: 0px !important;
}

p,
a,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif !important;
}

.qoute {
  border-left: 5px solid #209cee;
  margin-left: 30px;
}
#blog-container {
  /* box-shadow: 15px 28px 25px -18px rgba(0,0,0,0.2); */
  text-indent: 30px;
  font-size: 18px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  line-height: 1.6;
}

@media only screen and (max-width: 812px) {
  .article {
    width: 95%;
    margin: auto;
  }
  .cover-image {
    margin-top: 45px;
    width: 95%;
  }
  .qoute {
    border-left: 5px solid #209cee;
    margin-left: 10px;
    padding-left: 10px;
  }
}
</style>
