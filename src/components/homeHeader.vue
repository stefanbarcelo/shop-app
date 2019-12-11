<template>
  <div class="homeHeader">
    <div class="headerText">
      <h4>Hello, I'm Stefan Barcelo</h4>
      <h2>
        A UI/UX Designer and Front-End Developer who’s always seeking to challenge himself and only wants to deliver the best for his clients.
      </h2>
      <div class="btn">
        <div class="arrow"></div>
        <a>see work</a>
      </div>
    </div>
    <img class="skull" src="../assets/skull.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../scss/main.scss" lang="scss"></style>
