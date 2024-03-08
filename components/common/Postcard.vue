<template>
    <div>
        <!-- Post title -->
        <h2 class="font-bold text-3xl mb-3">{{ title }}</h2>
        <div class="xl:flex">
            <!-- Post image -->
            <img :src="image" width="600" class="xl:block hidden border rounded-md mb-5"/>
            <div class="lg:px-5  space-y-5" style="font-family: Roboto;" >   
                <!-- Post description -->
                <p class="">{{ description }}</p>
                <div class="lg:flex space-x-4">
                    <!-- Repository link -->
                    <a :href="repositoryLink" class="underline font-bold text-lg">View Repository</a>
                    <!-- Demo link -->
                    <a :href="demoLink" class="underline font-bold text-lg">View Demonstration</a>
                </div>
                <div>
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
        technologies: Array
    },
    methods: {
        // Get the CSS class for a technology
        getTechnologyClass(tech) {
            const techColors = {
                'React': 'bg-blue-600',
                'Express.js': 'bg-green-700',
                'MongoDB': 'bg-green-900',
                'Node.js': 'bg-green-600',
                'Tailwind CSS': 'bg-indigo-700',
                'OpenAI API': 'bg-red-600',
                'GitHub API': 'bg-black'
            };
            return `${techColors[tech] || 'bg-gray-700'} p-2 text-white`;
        }
    }
}
</script>
