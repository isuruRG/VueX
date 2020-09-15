<template>
  <div id="app">
    {{this.$store.state.test}}
    <h3 v-for="(post,index) in posts" :key="index">{{post.title}}</h3>
    <!-- <pre>{{$store.state.posts}}</pre> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch('loadPost');
  },
  computed:{
      ...mapState([
          'posts'
      ])
  }
}
</script>

