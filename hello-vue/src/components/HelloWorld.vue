<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    add message from the server VVV-->
    <h2>{{ helloMessage}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //  add new data function:
  data() {
    return {
      helloMessage: ''
    }
  },
  props: {
    msg: String
  },
//  Vue has a special function called Mounted.
//  It gets called as the Vue component comes onto the screen.
//  Nice place to do initial set up, configuration, fetching data,
//    or anything that has to happen as the app is loaded.
  mounted() {
    this.$hello_api.getHelloMessage().then( resp => {
      this.helloMessage = resp.message
    })
  //      getHelloMessage is returning a promise, so must return .then
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
