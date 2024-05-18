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
    <div style="font-family: Syne;" class="text-white h-screen">
        <div class="p-8 px-14 rounded-md m-auto">
            <Nav/> <!-- Rendering the Nav component -->
            <div class="pt-5 lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
                <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                    <h1 class="gradientText font-bold text-5xl py-2 border-b"> Contact</h1>
                </div>
                <div class="pt-16 items-center flex justify-center text-2xl">
                        Thank you for reaching out! I'll get back to you as soon as possible.
                </div>
                <div class="pt-5 flex justify-center">
                    <router-link to="/" class="gradientLink">Go back to home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>