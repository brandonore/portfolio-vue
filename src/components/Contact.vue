<template>
  <div class="px-4 sm:px-6 lg:px-8 overflow-hidden py-8 mt-8 lg:my-8">
    <div class="w-full mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-center lg:max-w-none">
          <h2
            class="leading-6 text-primary font-semibold tracking-wide uppercase"
          >
            Contact
          </h2>

          <h1
            class="mt-2 text-3xl leading-8 uppercase tracking-tight text-slate-600 sm:text-4xl"
          >
            Reach out to me
          </h1>
        </div>
      </div>
      <div class="relative">
        <div class="relative md:p-6">
          <div class="flex-col flex items-center justify-center">
            <div class="prose text-center text-gray-500">
              <p>
                I'm currently looking for new opportunities so feel free to send
                me a message! I'll get back to you as soon as possible. You can
                use the contact form or send me an
                <a
                  class="text-primary no-underline"
                  href="mailto:brandonore@gmail.com"
                  >email</a
                >.
              </p>
            </div>
            <div class="mt-8 prose text-center text-gray-500">
              <ContactBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";

export default {
  name: "Contact",
  components: { ContactBtn },
  data() {
    return {};
  },
};
</script>

<style></style>
