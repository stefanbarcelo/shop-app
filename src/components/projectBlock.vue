<template>
  <div class="projectBlock">
    <a
      href="https://itunes.apple.com/us/artist/migos/569925101"
      target="_blank"
    >
      <div class="box">
        <div class="imgBox">
          <img src="assets/images/ProjectPhoto.png" alt="" />
        </div>
        <div class="details">
          <div class="projectBlock-marquee">
            <h2>
              {{ projName }}
            </h2>
          </div>
        </div>
      </div>
    </a>
    <h3>{{ projName }}</h3>
    <p>
      {{ projDescription }}
    </p>
  </div>
</template>

<script>
export default {
  name: "projectBlock",
  props: {
    projName: String,
    projDescription: String
  }
};
</script>

<style></style>
