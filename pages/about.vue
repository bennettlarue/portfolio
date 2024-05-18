<script>
import Nav from '~/components/common/Nav.vue';

export default {
    components: {
        Nav // Registering the Nav component
    },
};
</script>

<template>
    <div style="font-family: Syne;" class="text-softBlack h-screen">
        <div class="p-8 px-14 rounded-md m-auto">
            <!-- Navigation -->
            <Nav/>

            <div class="pt-5 lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
                <!-- About Me section -->
                <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                    <h1 class="gradientText font-bold text-5xl py-2 border-b border-softBlack"> About Me</h1>
                </div>
                <div class="lg:grid pt-8 items-center">
                    <!-- Profile Image and Name -->
                    <div class="col-span-1 flex justify-center lg:pt-10">
                        <div class="space-y-2 lg:pb-8 pb-7 fade-in-text" style="--fade-in-duration: 0.5s;">
                            <img src="https://i.imgur.com/r4N79ep.jpeg" width="180" class="rounded-full"/>
                            <h1 class="text-2xl flex justify-center">Ben Smith</h1>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="col-span-3 space-y-3 lg:pl-14">
                        <div class="text-lg fade-in-text flex justify-start" style="--fade-in-duration: 0.5s; font-family: Roboto;">
                            <div class="space-y-3">
                                <div>
                                Since high school, I have nurtured a passion for programming. 
                                It started with learning to create basic Python programs and building web pages using HTML and CSS. 
                                Now, as a senior majoring in computer science, I have expanded my knowledge of web development through practical projects. 
                                These projects have solidified my grasp of JavaScript, HTML, and CSS, and Node.js. 
                                Additionally, I have utilized web frameworks like React and Next.js, server frameworks such as Express.js, and database platforms like MongoDB, 
                                further enriching my understanding of web development. 
                                
                            </div>
                            <div>
                                My university coursework has provided me with a solid foundation in computer science fundamentals. I have developed a comprehensive understanding of programming principles, SQL databases, cybersecurity, computer architecture, and graphics programming. This well-rounded knowledge has enabled me to approach complex technical challenges with a multifaceted perspective and a deeper appreciation for the intricate interplay of various domains within the field of computer science.
                            </div> 
                            </div>
                        </div>                  
                    </div>

                    <!-- Education -->
                    <div class="col-span-4 pt-3">
                        <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                            <h1 class="text-3xl gradientText font-bold">Education</h1>
                        </div>
                        <div class="fade-in-text flex justify-start" style="--fade-in-duration: 0.5s;">
                            <div class="space-y-3">
                                <div>
                                    <h2 class="text-xl font-bold">Bachelor of Science in Computer Science, <i>Cum Laude</i></h2>
                                    <div class="flex space-x-3">
                                        <p class="text-lg">Mount Saint Mary's University</p>
                                        <p class="text-lg pl">|</p>
                                        <p class="text-lg">Graduated May 2024</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <!-- Skills -->
                    <div class="col-span-4 pt-3">
                        <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                            <h1 class="text-3xl gradientText font-bold">My Skills</h1>
                        </div> 
                        <p class="space-x-3 space-y-3 flex flex-wrap items-baseline fade-in-text text-white" style="--fade-in-duration: 0.5s;"> 
                            <span class="bg-yellow-600 p-2 rounded-sm text-2xl">JavaScript</span>
                            <span class="bg-blue-700 p-2 rounded-sm text-2xl">React</span>
                            <span class="bg-red-500 p-2 rounded-sm text-2xl">HTML</span>
                            <span class="bg-sky-500 p-2 rounded-sm text-lg">CSS</span>
                            <span class="bg-green-600 p-2 rounded-sm text-lg">Node.js</span>
                            <span class="bg-blue-500 p-2 rounded-sm text-lg">Python</span>
                            <span class="bg-cyan-600 p-2 rounded-sm text-lg">Tailwind</span>
                            <span class="bg-gray-500 p-2 rounded-sm text-lg">Express.js</span>
                            <span class="bg-orange-500 p-2 rounded-sm text-lg">MySQL</span>
                            <span class="bg-purple-500 p-2 rounded-sm text-lg">Next.js</span>
                            <span class="bg-emerald-500 p-2 rounded-sm text-sm">Vue</span>
                            <span class="bg-red-400 p-2 rounded-sm text-sm">Java</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>