<template>
  <div>
    <ul>
      <li>{{movie.title}}</li>
      <li>{{movie.original_title}}</li>
      <li>{{movie.original_language}}</li>
      <li>{{movie.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllMovies',
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>

</style>
