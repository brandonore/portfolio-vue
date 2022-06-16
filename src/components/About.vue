<template>
  <div
    class="px-4 sm:px-6 lg:px-8 overflow-hidden py-8 mt-8 lg:my-8 bg-slate-50"
  >
    <div class="w-full mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-center lg:max-w-none">
          <h2
            class="leading-6 text-primary font-semibold tracking-wide uppercase"
          >
            About
          </h2>

          <h1
            class="mt-2 text-3xl leading-8 uppercase tracking-tight text-slate-600 sm:text-4xl"
          >
            More about me
          </h1>
        </div>
      </div>
      <div class="relative">
        <div class="relative md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div class="prose text-center text-gray-500 lg:max-w-none pr-8">
              <p>
                Hello! My name is Brandon & I work as a front-end developer. My
                passion for web development started back in late 2016. It
                started as a hobby and after a few years of learning I started
                working as a freelancer.
              </p>

              <p>
                I started out learning basic HTML, CSS & Javascript and
                transitioned to front-end frameworks such as React & Vue. I
                really love the simplicity of Vue and have used it on all of my
                recent projects. I also have some back-end experience as well
                with MySQL and PHP. Backend-as-a-Service providers such as
                Firebase and Supabase are another of my favorites.
              </p>
            </div>
            <div class="mt-6 prose text-center text-gray-500 lg:mt-0">
              <p>
                In my freetime I enjoy video-games, movies, golf and hanging out
                with my girlfriend & our two dogs! I'm also obesessed with
                anything tech related! 😁
              </p>
              <p>
                Some of the technologies/libraries I've been working with
                recently are:
              </p>
              <div class="flex justify-around">
                <ul role="list">
                  <li>Vue.js</li>
                  <li>Supabase</li>
                  <li>Web3.js</li>
                </ul>
                <ul role="list">
                  <li>Quasar</li>
                  <li>Vuetify</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style>
.hero {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
</style>
