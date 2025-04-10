<template>
   <header class="page-header">
      <div class="page-header__container">
         <div class="page-header__logo-wrap">
            <SvgLogo class="page-header__logo" />
            <h4 class="page-header__logo-text">People<span class="page-header__logo-text-red">Live</span></h4>
            <div class="page-header__logo-circle"></div>
         </div>
         <nav class="page-header__nav">
            <button type="button" class="page-header__nav-item">Главная</button>
            <button type="button" class="page-header__nav-item">Правила</button>
            <button type="button" class="page-header__nav-item">Контакты</button>
         </nav>
      </div>
   </header>
</template>

<script>
   import SvgLogo from "@/components/svg/SvgLogo";
   export default {
      name: 'App',
      // components: {
         // SvgLogo
      // }
      SvgLogo: SvgLogo
   }
</script>


<style lang="less">
.container() {
   max-width: 1380px;
   width: 100%;
   margin: 0 auto;
   padding: 0 20px;
}

@brown: #3B3342;
@light_gray: rgb(220, 220, 220); //цвет подложки
@light_orange: #eb7069;
@dark_orange: #ee372d;
@light_green: #ace2d9;
@white: #fff;
@black: #000;
@font1: 'Outfit', sans-serif;
@font2: 'Roboto', sans-serif;


* {
   margin: 0;
   padding: 0;
}

body,
html {
   font-size: 16px;
   font-family: @font2;
}

button {
   background-color: transparent;
   border: none;
   cursor: pointer;
}

body {
   background-color: @light_gray;
}

.page-header {
   background-color: @brown;

   &__container {
      .container();
      height: 60px;
      display: flex;
      align-items: center;
   }

   &__logo {
      width: 36px;
      color: @light_green;
   }

   &__logo-wrap {
      display: flex;
   }

   &__logo-text {
      margin-left: 10px;
      color: @white;
      font-size: 26px;
      font-family: @font1;
   }

   &__logo-text-red {
      color: @dark_orange;
   }

   &__logo-circle {
      position: relative;
      top: 12px;
      margin-left: 10px;
      width: 15px;
      height: 15px;
      background-color: @dark_orange;
      border-radius: 50%;
      animation: flicker 2s ease infinite;
   }

   &__nav {
      display: flex;
      align-items: center;
      margin-left: auto;
   }

   &__nav-item {
      color: @white;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.2s ease-out;

      &+& {
         margin-left: 20px;
      }

      &:hover {
         @media (hover: hover) {
            color: @light_orange;
         }
      }

      &:active {
         color: @light_orange;
      }
   }
}

@keyframes flicker {
   from {
      opacity: 1;
   }

   50% {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
}
</style>