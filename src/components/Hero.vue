<template>
  <div class="lg:relative lg:pl-12 2xl:pl-0 hero-container col lg:flex">
    <div
      class="flex flex-col justify-center mx-auto w-full pt-16 pb-14 text-center lg:py-48 lg:text-left"
    >
      <div class="px-4 sm:px-8">
        <span class="text-xl font-bold block text-primary">Hello 👋 I'm</span>
        <h1
          class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
        >
          <span class="block">Brandon Ore</span>
          {{ " " }}
          <span class="block text-primary">Front-end Web Developer</span>
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-lg text-slate-500 sm:text-xl md:mt-5 md:max-w-3xl"
        >
          I primarily build front-end & focus on clean, user-friendly
          experiences. Scroll down to see my work or feel free to contact me!
        </p>
        <div class="mt-10 w-1/2 mx-auto lg:mx-0">
          <ContactBtn />
        </div>
      </div>
    </div>
    <div
      class="img-container pb-8 flex justify-center items-center relative w-full"
    >
      <img
        class="border-2 w-2/4 md:w-1/4 lg:w-2/4 border-primary rounded-full inset-0"
        src="@/assets/cropped.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";

export default {
  name: "Hero",
  components: { ContactBtn },
  data() {
    return {};
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
}
.hero-container {
  transform: translateY(10%);
}

@media screen and (min-width: 1024px) {
  .hero-container {
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
  }
}

.img-container {
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='1200' preserveAspectRatio='none' viewBox='0 0 800 1200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1124%26quot%3b)' fill='none'%3e%3cpath d='M290.597%2c1181.695C335.962%2c1180.48%2c377.182%2c1154.806%2c398.565%2c1114.778C418.808%2c1076.884%2c413.981%2c1030.736%2c390.435%2c994.801C369.008%2c962.1%2c329.685%2c949.229%2c290.597%2c949.998C253.033%2c950.737%2c218.749%2c967.726%2c197.339%2c998.6C171.928%2c1035.244%2c151.885%2c1081.107%2c172.124%2c1120.843C193.72%2c1163.243%2c243.031%2c1182.969%2c290.597%2c1181.695' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M583.7462352892755 867.0590905989868L774.5928669662898 797.8025014580206 640.6505825711586 681.3682500005237z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M306.52360545031496 145.47562227586846L325.26979273106025 233.66949939478462 448.18751476906186 161.45327991420857z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M490.39257681465205 224.14849472782268L496.90502689491075 410.6406647184565 683.3971968855446 404.1282146381978 676.8847468052859 217.63604464756395z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M47.82510464863698 427.0963176663519L-68.4147104700468 664.8479153110184 162.61048848805456 652.7403976752014z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M473.30777846104394 1080.7807621409725L485.62798436545404 1256.9679149939143 661.8151372183959 1244.6477090895041 649.4949313139857 1068.4605562365623z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M134.589%2c649.156C154.704%2c647.78%2c171.777%2c637.078%2c183.177%2c620.449C196.737%2c600.67%2c210.67%2c576.158%2c198.992%2c555.213C187.156%2c533.986%2c158.814%2c531.35%2c134.589%2c533.305C114.054%2c534.962%2c97.227%2c547.07%2c85.985%2c564.335C73.317%2c583.79%2c61.392%2c607.849%2c72.935%2c627.992C84.513%2c648.198%2c111.355%2c650.746%2c134.589%2c649.156' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1124'%3e%3crect width='800' height='1200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"); */
}
</style>
