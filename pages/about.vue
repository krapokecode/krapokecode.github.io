<template>
  <Layout class="home">
    <h3 id="title">เราคือใครและใครคือเรา​ ?</h3>
    <div id="container-detail">
      <card
        coverImage="https://i.imgur.com/OmXL0xx.jpg"
        description="สวัสดีครับ ผมชื่อ Ryan (ไรอั้น) ตอนนี้เรียน Network Engineer อยู่มอเอกชนดังย่านหนองจอก รักการเขียน JavScript มากๆ และแน่นอน ถ้าคุณเห็นผมเขียนบล็อค แสดงว่าตอนนั้นผมขยัน"
      />
      <card
        coverImage="https://i.imgur.com/bTkuhZh.jpg"
        description="สวัสดีครับ ผมชื่อหมิง นักศึกษา ICT ปี 2 ที่เดียวกับไอ้ต้า เป็นคนที่ชื่นชอบการเขียนโปรแกรมและธุรกิจ หากพวกคุณเห็นบล๊อกจากผมแสดงว่าผมว่างอยู่ งานยังไม่เข้า"
      />
      <card
        coverImage="https://i.imgur.com/uzprcyZ.jpg"
        description="สวัสดีครับ ผมชื่อต้า นักศึกษษ ICT ปี 2 ที่เดียวกับไอ้หมิง ชอบเขียนโค๊ดเขียนมานานมากกกกกกแล้วมีอยู่วันนึงอยากเขียนบล๊อกแค่นนั้นแหล่ะครับ ไม่มีไรมาก"
      />
    </div>
  </Layout>
</template>
<script>
import card from "@/components/team-card";
export default {
  components: {
    card
  }
};
</script>
<style scoped>
#container-detail {
  font-family: "Nunito", sans-serif !important;
  width: 80%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  display: flex;
}
.intro-msg {
  color: #209cee;
  font-family: "Mali", cursive !important;
  font-size: 30px;
}

#text {
  line-height: 1.7;
  font-family: "Nunito", sans-serif !important;
  word-wrap: break-word;
}
#title {
  margin-top: 30px;
  font-family: "Mali", cursive;
  text-align: center;
  margin-bottom: 40px;
}

#profile-img {
  display: block;
  margin: auto;
  width: 20%;
  border-radius: 50%;
}

@media only screen and (max-width: 813px) {
  #profile-img {
    width: 70%;
  }
}
</style>
