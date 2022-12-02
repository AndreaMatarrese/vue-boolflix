<template>
    <div class="container-fluid main-div">
      <div class="list">
        <all-movies v-for="allmovie in arrMovies"
        :key="allmovie.id"
        :movie="allmovie"></all-movies>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import AllMovies from './AllMovies.vue';

export default {
  components: {
    AllMovies,
  },
  name: 'MainPage',
  data() {
    return {
      apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=26c9b6b928e136a4909604d120f23340&query=mercoledi',
      arrMovies: null,
    };
  },
  created() {
    axios.get(this.apiUrl)
      .then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
      });
  },
};
</script>

<style lang="scss">
.main-div{
  height: 100vh;
  background-color: #212121;
}
</style>
