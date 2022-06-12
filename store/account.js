import { getAuth, onAuthStateChanged } from 'firebase/auth'
export const state = () => {
  account: null
}

export const mutations = {
  getAccount(state) {
    state.account = onAuthStateChanged(state.auth, (user) => {
      if (user) {
        return user
      } else {
        return null
      }
    })
  },
}
