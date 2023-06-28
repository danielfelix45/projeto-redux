import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        }
      }
    },
    logoutUser: (state) => {

      return {
        ...state,
        user: null,
      }
    },
    AddAddress: (state, action) => {

      if (action.payload.location === '' || action.payload.number === '') {
        alert('PREEENCHA TODOS OS CAMPOS!')
        return { ...state }
      }

      if (state.user === null) {
        alert("Faça login pra adicionar endereço!")
        return { ...state }
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          }
        }
      }
    },
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null
        }
      }
    },
    fetchUsers: (state) => {
      console.log("Chamou nosso fetch users")
    }
  }
})

export const { createUser, logoutUser, AddAddress, deleteAddress, fetchUsers } = userSlice.actions
export default userSlice.reducer;