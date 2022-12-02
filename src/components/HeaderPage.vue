<template>
  <div>
    <div class="container-fluid divh py-3 bg-black">
      <div class="col-8 row row-cols-2 justify-content-end align-items-center m-auto">
        <div class="logo">
          <img src="@/assets/netflix_macos_bigsur_icon_189917.png" alt="">
        </div>
        <div class="filter">
          <label for="search">
            <input type="text" id="search" placeholder="search movie"
            v-model="inputText"
            @keyup.enter="keyWord">
            <button class="btn btn-primary">Ricerca</button>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    keyWord() {
      this.$emit(this.inputText);
    },
  },
};
</script>

<style lang="scss" scoped>
.divh{
  height: 100%;
}
</style>
