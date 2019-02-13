<template>
  <Layout class="home">
    <h3 id="title">เล่าไปเรื่อย</h3>
    <div id="list-post-container">
      <card
        v-for="{ node } in $page.allBlogPost.edges"
        :key="node.id"
        :coverImage="node.image.src"
        :link="node.path"
        :title="node.title"
        :date="node.date"
        :author="node.author"
        :description="node.description"
      />
    </div>
    <Pager :info="$page.allBlogPost.pageInfo" class="pagination" />
  </Layout>
</template>
<script>
import card from "@/components/card";
import { Pager } from "gridsome";
export default {
  components: {
    card,
    Pager
  }
};
</script>
<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page,order: DESC,perPage: 6) @paginate{
      pageInfo {
      totalPages
      currentPage
    }
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
.pagination {
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.pagination > a {
  padding: 10px;
}
#list-post-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#title {
  margin-top: 30px;
  font-family: "Mali", cursive;
  text-align: center;
}
</style>
