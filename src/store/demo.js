export default {
  // state as data for stores.
  state: () => ({
    count: 0,

    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  }),

  // getters as computed properties for stores.
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
    count(state) {
      return state.count;
    },
  },

  // The only way to actually change state in a Vuex store is by committing a mutation.
  // Vuex mutations are very similar to events: each mutation has a string type and a handler.
  //! Vuex mutations have to be synchronous
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
  },

  // Actions are similar to mutations, the differences being that:
  // - Instead of mutating the state, actions commit mutations.
  // - Actions can contain arbitrary asynchronous operations.
  //! Vuex actions have to be asynchronous
  actions: {
    incrementAsync(context, payload) {
      setTimeout(() => {
        context.commit("increment", payload);
      }, 500);
    },
  },
  modules: {},
};
