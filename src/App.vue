<template>
  <router-view class="h-full"></router-view>
</template>

<style>
#app {
  font-family: "CeraRegular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-family: "CeraBlack", sans-serif;
}
h2 {
  font-family: "CeraBold", sans-serif;
}
h3 {
  font-family: "CeraRegular", sans-serif;
}
@font-face {
  font-family: "CeraBlack";
  src: local("CeraBlack"), url(./fonts/Cera/CeraBlack.otf) format("truetype");
}
@font-face {
  font-family: "CeraBold";
  src: local("CeraBold"), url(./fonts/Cera/CeraBold.otf) format("truetype");
}
@font-face {
  font-family: "CeraLight";
  src: local("CeraLight"), url(./fonts/Cera/CeraLight.otf) format("truetype");
}
@font-face {
  font-family: "CeraMedium";
  src: local("CeraMedium"), url(./fonts/Cera/CeraMedium.otf) format("truetype");
}
@font-face {
  font-family: "CeraRegular";
  src: local("CeraRegular"),
    url(./fonts/Cera/CeraRegular.otf) format("truetype");
}
@font-face {
  font-family: "CeraThin";
  src: local("CeraThin"), url(./fonts/Cera/CeraThin.otf) format("truetype");
}
</style>
