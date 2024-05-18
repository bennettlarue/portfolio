<template>
  <div class=" text-softBlack">
    <!-- Post title -->
    <h2 class="font-bold text-3xl mb-3">{{ title }}</h2>
      <div class="space-x-7 lg:flex items-center">
        <!-- Post image -->
          <img
              class="lg:w-1/2  h-full shadow-lg"
              :src="videoLink"
          />

      <div class="lg:w-1/2">
        <div class="space-x-4 py-5">
          <!-- Repository link -->
          <a :href="repositoryLink" class="gradientLink font-bold text-2xl ring-2 p-1 rounded">Live Site ↗</a>
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
    videoLink: String,
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
