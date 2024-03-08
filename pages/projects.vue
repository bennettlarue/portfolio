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
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        repositoryLink=null
                        demoLink=null
                        :technologies="['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'OpenAI API']"
                    ></Postcard>

                    <Postcard
                        title="CommitPal"
                        image="https://i.imgur.com/3xfaepe.png"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        repositoryLink=null
                        demoLink=null
                        :technologies="['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'GitHub API']"
                    ></Postcard>

                    <Postcard
                        title="Mount Echo"
                        image="https://i.imgur.com/3xfaepe.png"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        repositoryLink=null
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
