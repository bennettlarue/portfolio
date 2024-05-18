<template>
    <div style="font-family: Syne;" class="text-softBlack h-screen">
        <div class="p-8 px-14 rounded-md m-auto">
            <Nav />

            <div class="lg:pr-20 lg:bottom-52 md:bottom-52 lg:left-20">
                <div class="fade-in-text" style="--fade-in-duration: 0.5s;">
                    <h1 class="gradientText font-bold text-5xl py-2 border-b border-softBlack">Projects</h1>
                </div>

                <div class="space-y-14 mt-8 fade-in-text" style="--fade-in-duration: 0.5s;">
                    <Postcard
                        title="The Mountain Echo"
                        image="https://i.imgur.com/3xfaepe.png"
                        description="A full-stack web application for The Mountain Echo, Mount St. Mary's University's school newspaper, providing a modern content management system and interactive user experience. Built with Next.js, Node.js, Express, Strapi CMS, and PostgreSQL. The application offers a user-friendly interface for readers to engage with articles through likes, comments, and author following. Administrators can easily create, edit, and publish content using the Strapi CMS. The Express server handles business logic, user authentication via Firebase, and secure database interactions. Hosted on DigitalOcean and Vercel for scalability and reliability. This project showcases expertise in building comprehensive web solutions, integrating headless CMS, and delivering personalized user experiences through features like article recommendations based on reading history."
                        repositoryLink="https://echo-client-six.vercel.app/"
                        videoLink="https://i.imgur.com/BAgBuuF.png"
                        demoLink=null
                        :technologies="['Next.js', 'Express.js', 'Strapi CMS', 'Node.js', 'Tailwind CSS', 'Firebase']"
                    ></Postcard>

                    <Postcard
                        title="ChatGPT Clone"
                        image="https://i.imgur.com/FTGxLDk.png"
                        description="A full-stack web application that replicates the functionality of ChatGPT, built with React, Tailwind CSS, Node.js, Express, MongoDB, and the OpenAI API. Users can create custom conversations, assign predefined personalities to the AI chatbot, and engage in natural language interactions. The responsive UI provides a smooth experience across devices, with features like conversation history and creation. This project showcases proficiency in modern web development technologies and integration with cutting-edge AI services."
                        repositoryLink="https://chat-gpt-clone-omega-seven.vercel.app/"
                        videoLink="https://i.imgur.com/0FuKOBy.png"
                        :technologies="['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'OpenAI API']"
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
