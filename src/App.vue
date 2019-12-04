<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"

export default {
	data() {
		return {
			show: false,
			showNavBar: true,
			lastScrollPosition: 0
		};
  },
   components: {
    Navigation
  }
};
</script>

<style>

</style>
