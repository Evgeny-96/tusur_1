<template>
  <PageHeader />
  <AppHome />
</template>

<script>
// import SvgLogo from "@/components/svg/SvgLogo";
import PageHeader from "@/components/PageHeader";
import AppHome from "@/components/appHome";
export default {
  name: 'App',
  components: {
    PageHeader,
    AppHome
  }
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
@white: #fff;
@light_orange: #eb7069;

.home {
  &__container {
    .container();
  }

  &__list {
    margin-top: 45px;
  }

  &__list-item {
    margin-bottom: 15px;
    padding: 20px 15px;
    box-shadow: 0 0 5px 1px @brown;
    background-color: @white;
  }

  &__item-title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
  }
}
</style>