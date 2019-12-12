<template>
  <div class="home">
    <div class="wrapper">
      <HomeHeader />
      <!-- <NameBanner /> -->
      <GeminiBanner />
      <div class="homeGrid">
        <projectBlock
          class="block1"
          projName="gaggan"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
        <projectBlock
          class="block2"
          projName="nordstrom"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
        <projectBlock
          class="block3"
          projName="Trueframe"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />

        <projectBlock
          class="block4"
          projName="gallery"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
        <projectBlock
          class="block5"
          projName="contact"
          projDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
			tempor  incididunt ut labore  et dolore magna aliqua. "
        />
      </div>
      <GeminiBanner />
      <ContactSection />
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/homeHeader";
// import NameBanner from "../components/nameBanner";
import GeminiBanner from "../components/geminiBanner";
import projectBlock from "../components/projectBlock";
import ContactSection from "../components/contactSection";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  components: {
    HomeHeader,
    // NameBanner,
    GeminiBanner,
    projectBlock,
    ContactSection
  }
};
</script>

<style src="../scss/main.scss" lang="scss"></style>
