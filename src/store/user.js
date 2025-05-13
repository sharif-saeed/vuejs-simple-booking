import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: localStorage.getItem('currentUser') || ''
  }),
  actions: {
    login(username) {
      this.currentUser = username
      localStorage.setItem('currentUser', username)
    },
    logout() {
      this.currentUser = ''
      localStorage.removeItem('currentUser')
    }
  }
})