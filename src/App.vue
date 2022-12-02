<template>
  <div>
    <header-page @keyWord="sendKey"></header-page>
    <main-page></main-page>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  methods: {
    sendKey() {

    },
  },
};
</script>

<style lang="scss">
@import 'bootstrap';

</style>
