<script>
import Nav from '~/components/common/Nav.vue'; // Importing the Nav component
import ContactForm from '~/components/common/ContactForm.vue'; // Importing the ContactForm component

export default {
  components: {
  Nav, // Registering the Nav component
  ContactForm // Registering the ContactForm component
  },
};
</script>

<template>
  <div style="font-family: Syne;" class="text-softBlack h-screen">
    <div class="p-8 px-14 rounded-md m-auto">
      <Nav/> <!-- Rendering the Nav component -->
      <div class="pt-5 lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
        <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
          <h1 class="gradientText font-bold text-5xl py-2 border-b border-softBlack"> Contact</h1> <!-- Displaying the "Contact" heading -->
        </div>
        <div class="pt-8 items-center">
          <div class="flex justify-center py-6 text-xl fade-in-text" style="--fade-in-duration: 0.5s;">
              <p class="text-center">
                You can reach me at <span class="gradientLink font-bold">smithbennettlarue@gmail.com</span> or connect with me on <span class="gradientLink font-bold">LinkedIn</span>.
                <br/>Or, send me a message using the form below.
              </p>
          </div>
          <div class="flex justify-center">
            <div class="fade-in-text lg:w-1/2 md:w-2/3 w-full" style="--fade-in-duration: 1s;">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>