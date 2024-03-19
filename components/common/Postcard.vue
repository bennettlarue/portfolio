<template>
  <div>
    <!-- Post title -->
    <h2 class="font-bold text-3xl mb-3">{{ title }}</h2>
    <div class="">
      <!-- Post image -->
      <div class="relative my-5" style="padding-top: 30.25%;">
        <iframe
            class="absolute top-0 left-0 lg:w-2/3 w-full h-full"
            src="https://www.youtube.com/embed/-9M6hheqpSw?autoplay=1&vq=hd1080"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>

        <div class="space-x-4 py-5">
            <!-- Repository link -->
            <a :href="repositoryLink" class="gradientLink font-bold text-2xl">View Repository</a>
        </div>

      <div style="font-family: Roboto;">
        <!-- Post description -->
        <p class="text-lg">{{ description }}</p>
        
        <div class="py-4">
          <p class="font-bold text-lg">Created With</p>
          <p class="mt-2 flex flex-wrap">
            <!-- Technologies -->
            <span v-for="tech in technologies" :key="tech" :class="getTechnologyClass(tech)">{{ tech }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Post title
    title: String,
    // Post image URL
    image: String,
    // Post description
    description: String,
    // Link to the repository
    repositoryLink: String,
    // Link to the demo
    demoLink: String,
    // Array of technologies used in the post
    technologies: Array,
  },
  methods: {
    // Get the CSS class for a technology
    getTechnologyClass(tech) {
      const techColors = {
        React: 'bg-blue-600',
        'Express.js': 'bg-green-700',
        MongoDB: 'bg-green-900',
        'Node.js': 'bg-green-600',
        'Tailwind CSS': 'bg-indigo-700',
        'OpenAI API': 'bg-red-600',
        'GitHub API': 'bg-black',
        'Next.js': 'bg-gray-900',
        Firebase: 'bg-yellow-500',
        'Strapi CMS': 'bg-purple-600',
      };
      return `${techColors[tech] || 'bg-gray-700'} p-2 text-white`;
    },
  },
};
</script>
