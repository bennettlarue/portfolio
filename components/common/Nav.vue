<template>
  <div>
    <nav style="font-family: Syne;" class="text-softBlack">
      <!-- Button for small screens -->
      <div class="flex justify-end">
        <button @click="toggleSidebar" class="block lg:hidden">
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <!-- Sidebar menu for small screens -->
      <div v-if="showSidebar" class="fixed inset-0 bg-softBlack text-white bg-opacity-95 z-50">
        <div class="flex justify-end">
          <button @click="toggleSidebar" class="p-4">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-center h-full">
          <ul class="text-3xl space-y-3 fade-in-text" style="--fade-in-duration: 0.3s;">
            <li class="fade-in-text"><router-link to="/">Home</router-link></li>
            <li class="fade-in-text"><router-link to="/projects">Projects</router-link></li>
            <li class="fade-in-text"><router-link to="/about">About</router-link></li>
            <li class="fade-in-text"><router-link to="/contact">Contact</router-link></li>
            <li class="fade-in-text"><a href="https://lime-ella-67.tiiny.site/" target="_blank">Resume</a></li>
            <li class="flex space-x-5 pt-2">
              <button class="p-2 btn-hover color-1 rounded-md fade-in-text">
                <a href="https://www.linkedin.com/in/bennett-smith-2bb520270/">
                <img src="https://i.imgur.com/vSinYFl.png" width="25"/>
                </a>
              </button>
              <button class="p-1.5 btn-hover color-2 rounded-full fade-in-text">
                <a href="https://github.com/bennettlarue">
                <img src="https://i.imgur.com/4niHLsP.png" width="33"/>
              </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- Normal navbar for larger screens -->
      <ul class="hidden lg:flex justify-end space-x-7 text-2xl items-center">
        <li class="gradientHover"><router-link to="/">Home</router-link></li>
        <li class="gradientHover"><router-link to="/projects">Projects</router-link></li>
        <li class="gradientHover"><router-link to="/about">About</router-link></li>
        <li class="gradientHover"><router-link to="/contact">Contact</router-link></li>
        <li class="gradientHover"><a href="https://lime-ella-67.tiiny.site/" target="_blank">Resume</a></li>
        <li>
            <button  class="p-1.5 btn-hover color-1 rounded-md fade-in-text">
              <a href="https://www.linkedin.com/in/bennett-smith-2bb520270/">
                <img src="https://i.imgur.com/vSinYFl.png" width="20"/>
              </a>
            </button>
        </li>
        <li>
          <button class="p-1.5 btn-hover color-2 rounded-full fade-in-text" href="">
              <a href="https://github.com/bennettlarue">
                <img src="https://i.imgur.com/4niHLsP.png" width="25"/>
              </a>
          </button>
        </li>
        
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },

  computed: {
    globalValue() {
      return this.$theme.value; // Access global value
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  }
}
</script>
