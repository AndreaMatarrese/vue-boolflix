<template>
    <div class="container-fluid">
      <all-movies v-for="allmovie in arrMovies"
        :key="allmovie.id"
        :movie="allmovie"></all-movies>
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
      apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=26c9b6b928e136a4909604d120f23340&query=mercoledi&language=it-IT',
      arrMovies: null,
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
      });
  },
};
</script>

<style lang="scss">

</style>
