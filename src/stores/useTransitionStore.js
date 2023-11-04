import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTransitionStore = defineStore('transitionStore', {
  state: () => ({
    showModal: false,
  }),

  getters: {
  },

  actions: {
    toggleModal(payload) {
      this.showModal = payload;
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTransitionStore, import.meta.hot));
