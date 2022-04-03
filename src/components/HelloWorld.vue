<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 @click="increment">{{ count }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store.getters.count;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
  methods: {
    increment() {
      //! Invoke a mutation handler
      // this.$store.commit("increment", { amount: 10 });

      //! Invoke a action handler
      this.$store.dispatch("incrementAsync", { amount: 10 });
    },
  },
};
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
