<template>
  <!-- Contact form -->
  <form id="contact-form" ref="contactForm" @submit.prevent="handleSubmit" class="rounded-md m-auto text-softBlack bg-transparent">
    <input type="hidden" name="contact_number" value="697483">
    <!-- Name input -->
    <div class="form-group mb-4">
      <label for="name" class="block">Name:</label>
      <input type="text" id="name" name="user_name" v-model="formData.name" class="w-full border border-softBlack rounded-md px-3 py-2 bg-transparent text-softBlack"> 
    </div>
    <!-- Email input -->
    <div class="form-group mb-4">
      <label for="email" class="block">Email:</label>
      <input type="email" id="email" name="user_email" v-model="formData.email" class="w-full border border-softBlack rounded-md px-3 py-2 bg-transparent text-softBlack"> 
    </div>
    <!-- Message textarea -->
    <div class="form-group mb-4">
      <label for="message" class="block">Message:</label>
      <textarea id="message" name="message" v-model="formData.message" class="w-full border border-softBlack rounded-md px-3 py-2 bg-transparent text-softBlack" style="min-height: 150px;"></textarea> 
    </div>
    <!-- Submit button -->
    <button type="submit" class="btn-hover color-1 text-white font-bold py-3 px-6 rounded-lg block mx-auto">Send</button>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    // Initialize emailjs with public key
    emailjs.init({
      publicKey: '0i-nrgDo-0A58LNMx',
    });
  },
  methods: {
    async handleSubmit() {
      try {
        // Send form data using emailjs
        await emailjs.sendForm('service_cj36z9q', 'template_zregfnp', this.$refs.contactForm)
          .then(() => {
            console.log('SUCCESS!');
            this.$router.push('/thanks'); // Redirect to "/thanks"

          }, (error) => {
            console.log('FAILED...', error);
          });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  }
}
</script>