<script>
import Nav from '~/components/common/Nav.vue';

export default {
    components: {
        Nav // Registering the Nav component
    },
};
</script>

<template>
    <div style="font-family: Syne;" class="text-white h-screen">
        <div class="p-8 rounded-md m-auto">
            <!-- Navigation -->
            <Nav/>

            <div class="pt-5 lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
                <!-- About Me section -->
                <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                    <h1 class="gradientText font-bold text-5xl py-2 border-b"> About Me</h1>
                </div>
                <div class="lg:grid pt-8 items-center">
                    <!-- Profile Image and Name -->
                    <div class="col-span-1 flex justify-center lg:pt-10">
                        <div class="space-y-2 lg:pb-8 pb-7 fade-in-text" style="--fade-in-duration: 0.5s;">
                            <img src="https://i.imgur.com/ZSWRyd6.jpg" width="180" class="rounded-full border"/>
                            <h1 class="text-2xl flex justify-center">Ben Smith</h1>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="col-span-3 space-y-3 lg:pl-14">
                        <p class="text-lg fade-in-text flex justify-start" style="--fade-in-duration: 0.5s; font-family: Roboto;">
                            <!-- Add your description here -->
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>                        
                    </div>
                    <!-- Skills -->
                    <div class="col-span-4 pt-3">
                        <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                            <h1 class="text-3xl gradientText font-bold">My Skills</h1>
                        </div> 
                        <p class="space-x-3 space-y-3 flex flex-wrap items-baseline fade-in-text" style="--fade-in-duration: 0.5s;"> 
                            <span class="bg-yellow-600 p-2 rounded-sm text-2xl">JavaScript</span>
                            <span class="bg-blue-700 p-2 rounded-sm text-2xl">React</span>
                            <span class="bg-red-500 p-2 rounded-sm text-2xl">HTML</span>
                            <span class="bg-sky-500 p-2 rounded-sm text-lg">CSS</span>
                            <span class="bg-green-600 p-2 rounded-sm text-lg">Node.js</span>
                            <span class="bg-blue-500 p-2 rounded-sm text-lg">Python</span>
                            <span class="bg-cyan-600 p-2 rounded-sm text-lg">Tailwind</span>
                            <span class="bg-gray-500 p-2 rounded-sm text-lg">Express.js</span>
                            <span class="bg-emerald-500 p-2 rounded-sm text-sm">Vue</span>
                            <span class="bg-red-400 p-2 rounded-sm text-sm">Java</span>
                            <span class="bg-orange-500 p-2 rounded-sm text-sm">MySQL</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>