import { createStore } from "vuex";
import { Book } from "../types";

interface State {
  favorites: Book[];
}

export const store = createStore<State>({
  state: {
    favorites: [],
  },
  mutations: {
    setFavorites(state, list: Book[]) {
      state.favorites = list;
    },
    toggleFavorite(state, book: Book) {
      const index = state.favorites.findIndex((b) => b.id === book.id);
      if (index === -1) state.favorites.push(book);
      else state.favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  actions: {
    loadFavorites({ commit }) {
      try {
        const raw = localStorage.getItem("favorites");
        const list = raw ? JSON.parse(raw) : [];
        commit("setFavorites", list);
      } catch {
        commit("setFavorites", []);
      }
    },
    toggleFavorite({ commit }, book: Book) {
      commit("toggleFavorite", book);
    },
  },
  getters: {
    isFavorite: (state: State) => (id: number) => state.favorites.some((b) => b.id === id),
    getFavorites: (state: State) => state.favorites,
  },
});
