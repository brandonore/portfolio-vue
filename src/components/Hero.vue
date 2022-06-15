<template>
  <div class="lg:relative hero-container col lg:flex">
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
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md">
            <a
              href="#"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:opacity-75 transition-all ease-linear md:py-4 md:text-lg md:px-10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container flex justify-center items-center relative w-full">
      <img
        class="border-2 w-2/4 border-primary rounded-full inset-0"
        src="@/assets/cropped.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
  background-repeat: no-repeat;
  /* border: 2px solid red; */
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1125%26quot%3b)' fill='none'%3e%3cpath d='M508.822%2c367.175C524.877%2c367.185%2c540.953%2c360.525%2c548.702%2c346.464C556.231%2c332.8%2c551.921%2c316.57%2c544.168%2c303.032C536.356%2c289.392%2c524.535%2c277.258%2c508.822%2c276.831C492.482%2c276.387%2c478.097%2c286.826%2c469.982%2c301.015C461.927%2c315.098%2c460.809%2c332.426%2c469.023%2c346.417C477.142%2c360.246%2c492.786%2c367.165%2c508.822%2c367.175' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M90.473%2c105.099C110.38%2c105.999%2c131.115%2c100.315%2c141.931%2c83.579C153.609%2c65.51%2c153.841%2c42.125%2c143.29%2c23.376C132.538%2c4.272%2c112.334%2c-9.49%2c90.473%2c-7.857C70.577%2c-6.371%2c58.75%2c12.553%2c49.758%2c30.363C41.867%2c45.994%2c38.112%2c63.888%2c46.489%2c79.264C55.207%2c95.267%2c72.268%2c104.276%2c90.473%2c105.099' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1249.9662141066622 567.7621037729114L1153.3678677310158 452.6406774410751 1038.2464413991797 549.2390238167213 1134.8447877748258 664.3604501485576z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M584.656%2c304.68C609.779%2c305.715%2c634.988%2c295.718%2c648.132%2c274.283C661.839%2c251.93%2c661.214%2c223.711%2c648.303%2c200.889C635.189%2c177.709%2c611.288%2c162.117%2c584.656%2c162.082C557.967%2c162.047%2c532.899%2c176.974%2c520.723%2c200.723C509.434%2c222.741%2c516.67%2c248.328%2c529.632%2c269.404C541.865%2c289.294%2c561.325%2c303.719%2c584.656%2c304.68' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M294.8060612804054 209.92763661399783L337.11927129951346 126.88328610885046 254.07492079436608 84.5700760897424 211.76171077525802 167.61442659488978z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1217.4265131384545 214.47680197224082L1227.2706558833447 73.69900199413334 1086.4928559052373 63.85485924924316 1076.6487131603471 204.63265922735064z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M201.97307051193454 464.07712859441546L236.61348464615082 564.6801961302014 302.57613804772046 429.4367144601992z' fill='rgba(45%2c 212%2c 191%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1125'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}
</style>
