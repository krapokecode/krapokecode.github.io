<template>
  <Layout class="home">
    <h3 id="title">เล่าไปเรื่อยล่าสุด</h3>
    <div id="list-post-container">
      <card v-for="{ node } in $page.allBlogPost.edges" :key="node.id"
        :coverImage="node.image.src"
        :link="node.path"
        :title="node.title"
        :date="node.date"
        :author="node.author"
        :description="node.description"
        />
    </div>
  </Layout>
</template>
<script>
  import card from '@/components/card'
  export default{
    components:{
      card
    }
  }
</script>
<page-query>
  query Home ($page: Int) {
    allBlogPost (perPage: 3,page: $page) {
      edges {
        node {
          id
          date (format: "D MMMM, YYYY")
          title
          path
          content
          description
          author
          image
        }
      }
    }
  }
</page-query>

<style scoped>
#list-post-container{
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#title{
  margin-top: 30px;
  font-family: 'Mali', cursive;
  text-align: center;
}
</style>
