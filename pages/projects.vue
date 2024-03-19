<template>
    <div style="font-family: Syne;" class="text-white h-screen">
        <div class="p-8 rounded-md m-auto">
            <Nav />

            <div class="lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
                <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                    <h1 class="gradientText font-bold text-5xl py-2 border-b">Projects</h1>
                </div>

                <div class="space-y-14 mt-8 fade-in-text" style="--fade-in-duration: 0.5s;">
                    <Postcard
                        title="ChatGPT Clone"
                        image="https://i.imgur.com/FTGxLDk.png"
                        description="A full-stack web application that replicates the functionality of ChatGPT, built with React, Tailwind CSS, Node.js, Express, MongoDB, and the OpenAI API. Users can create custom conversations, assign predefined personalities to the AI chatbot, and engage in natural language interactions. The responsive UI provides a smooth experience across devices, with features like conversation history and creation. This project showcases proficiency in modern web development technologies and integration with cutting-edge AI services."
                        repositoryLink="https://github.com/bennettlarue/ChatGPT-Clone"
                        videoLink="https://www.youtube.com/embed/-9M6hheqpSw?autoplay=1&vq=hd1080"
                        :technologies="['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'OpenAI API']"
                    ></Postcard>

                    <Postcard
                        title="CommitPal"
                        image="https://i.imgur.com/3xfaepe.png"
                        description="A full-stack web application designed to assist developers in setting and achieving coding goals through gamification. Built with React, Tailwind CSS, Node.js, Express, and MongoDB. Users can define a target number of commits for their public repositories and earn points for completing their self-imposed goals. The app integrates with the GitHub API for accurate commit tracking and features a responsive design for seamless usage across devices. This project showcases expertise in web development, third-party API integration, and creating engaging user experiences through gamification principles."
                        repositoryLink="https://github.com/bennettlarue/CommitPal"
                        demoLink=null
                        :technologies="['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'GitHub API']"
                    ></Postcard>

                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '~/components/common/Nav.vue';
import Postcard from '~/components/common/Postcard.vue';

export default {
    components: {
        Nav,
        Postcard
    }
};
</script>
