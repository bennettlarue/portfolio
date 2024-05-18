<script>
import Nav from '~/components/common/Nav.vue';

export default {
  components: {
    Nav // Registering the Nav component
  },

  mounted() {
    console.log(this.$theme.value); // Access global value
  }
  
};
</script>

<template>
    <div style="font-family: Syne;" class="text-softBlack items-end h-screen bg">
        <div class="p-8 rounded-md m-auto">
            <Nav/>

            <div class="pt-14 lg:pr-20 fixed lg:bottom-52 md:bottom-52 lg:left-20">
              <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                <h1 class="gradientText text-5xl py-2"> Hi, I'm Ben👋</h1>
              </div>
              <h2 class="text-3xl fade-in-text" style="--fade-in-duration: 1s;">an aspiring software developer.</h2>
              <p class="text-2xl pt-5 fade-in-text" style="font-family: Roboto; --fade-in-duration: 1s;">
                Here, you can take a look my
                <span class="gradientLink cursor-pointer">
                  <router-link to="/projects">projects</router-link>
                </span>,
                read
                <span class="gradientLink">
                  <router-link to="/about">about me</router-link>
                </span>,
                view my
                <span class="gradientLink cursor-pointer">
                  <a href="https://lime-ella-67.tiiny.site/" target="_blank">resume</a>
                </span>,
                or get in
                <span class="gradientLink cursor-pointer">
                  <router-link to="/contact">contact</router-link>
                </span>.
              </p>
            </div>

            
        </div>
    </div>

</template>

