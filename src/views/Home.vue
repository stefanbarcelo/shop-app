<template>
  <div class="home">
    <div class="wrapper">
      <HomeHeader />
      <NameBanner />
      <GeminiBanner />
      <div class="homeGrid">
        <projectBlock
          class="projectBlock1"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
		<projectBlock
          class="projectBlock2"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
		<projectBlock
          class="projectBlock3"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
		<projectBlock
          class="projectBlock4"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
        <projectBlock
          class="projectBlock5"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
      </div>
      <GeminiBanner />
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/homeHeader";
import NameBanner from "../components/nameBanner";
import GeminiBanner from "../components/geminiBanner";
import projectBlock from "../components/projectBlock";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  components: {
    HomeHeader,
    NameBanner,
    GeminiBanner,
    projectBlock
  }
};
</script>

<style src="../scss/main.scss" lang="scss"></style>
