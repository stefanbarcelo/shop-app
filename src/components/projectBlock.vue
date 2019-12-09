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
          <div class="content">
            <marquee behavior="scroll" direction="right" scrollamount="12">
              <h2>
                {{ projName }} &emsp;
                {{projName }} &emsp;
                {{ projName }} &emsp;
                {{ projName }} &emsp;
                {{projName}} &emsp;
                {{ projName }} &emsp;
                {{ projName }} &emsp;
                {{projName}}  &emsp;
                {{ projName }} &emsp;
                {{ projName }} &emsp;
              </h2>
            </marquee>
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
    projDescription: String,
  }
};
</script>

<style></style>
