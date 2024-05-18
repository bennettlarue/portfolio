import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    // Initial global value
    let light = true;

    // Method to set the global value
    const toggleLight = () => {
        light = !light;
        console.log("Theme is now", light ? "light" : "dark");
    };

    // Inject global value and method to context as $globalValue
    nuxtApp.provide("theme", {
        value: light,
        set: toggleLight,
    });
});
