// import { createStore } from "vuex";
// import { Book } from "../types";

// interface State {
//   favorites: Book[];
//   cart: Book[];
// }

// export const store = createStore<State>({
//   state: {
//     favorites: [],
//     cart: [],
//   },
//   mutations: {
//     // ---- Избранное ----
//     setFavorites(state, list: Book[]) {
//       state.favorites = list;
//     },
//     toggleFavorite(state, book: Book) {
//       const index = state.favorites.findIndex((b) => b.id === book.id);
//       if (index === -1) state.favorites.push(book);
//       else state.favorites.splice(index, 1);
//       localStorage.setItem("favorites", JSON.stringify(state.favorites));
//     },

//     // ---- Корзина ----
//     addToCart(state, book: Book) {
//       const index = state.cart.findIndex((b) => b.id === book.id);
//       if (index === -1) state.cart.push({ ...book, quantity: 1 } as any);
//       else (state.cart[index] as any).quantity += 1;
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     loadCartFromStorage(state) {
//       const raw = localStorage.getItem("cart");
//       state.cart = raw ? JSON.parse(raw) : [];
//     },
//   },
//   actions: {
//     loadFavorites({ commit }) {
//       try {
//         const raw = localStorage.getItem("favorites");
//         const list = raw ? JSON.parse(raw) : [];
//         commit("setFavorites", list);
//       } catch {
//         commit("setFavorites", []);
//       }
//     },
//     toggleFavorite({ commit }, book: Book) {
//       commit("toggleFavorite", book);
//     },
//     addToCart({ commit }, book: Book) {
//       commit("addToCart", book);
//     },
//     loadCart({ commit }) {
//       commit("loadCartFromStorage");
//     },
//   },
//   getters: {
//     getFavorites: (state) => state.favorites,
//     isFavorite: (state) => (id: number) => state.favorites.some((b) => b.id === id),
//     getCart: (state) => state.cart,
//     cartCount: (state) => state.cart.reduce((sum, b: any) => sum + (b.quantity || 1), 0),
//   },
// });


import { createStore } from "vuex";

export const store = createStore({
  state: {
    cart: [],
    favorites: [],
  },

  getters: {
    // КОРЗИНА
    getCart(state) {
      return state.cart;
    },
    cartCount(state) {
      return state.cart.reduce((sum, b) => sum + b.quantity, 0);
    },

    // ИЗБРАННОЕ
    getFavorites(state) {
      return state.favorites;
    },
  },

  mutations: {
    // ---- КОРЗИНА ----
    loadCartFromStorage(state) {
      const saved = localStorage.getItem("cart");
      if (saved) state.cart = JSON.parse(saved);
    },

    addToCart(state, book) {
      const existing = state.cart.find((b) => b.id === book.id);

      if (existing) {
        if (existing.quantity < 100) existing.quantity++;
      } else {
        state.cart.push({
          ...book,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, id) {
      state.cart = state.cart.filter((b) => b.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    changeQuantity(state, { id, quantity }) {
      const item = state.cart.find((b) => b.id === id);
      if (!item) return;

      if (quantity < 1) quantity = 1;
      if (quantity > 100) quantity = 100;

      item.quantity = quantity;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setCart(state, list) {
      state.cart = list;
      localStorage.setItem("cart", JSON.stringify(list));
    },

    // ---- ИЗБРАННОЕ ----
    loadFavorites(state) {
      const saved = localStorage.getItem("favorites");
      if (saved) state.favorites = JSON.parse(saved);
    },

    toggleFavorite(state, book) {
      const exists = state.favorites.find((b) => b.id === book.id);

      if (exists) {
        state.favorites = state.favorites.filter((b) => b.id !== book.id);
      } else {
        state.favorites.push(book);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});
