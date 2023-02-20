import {createSlice} from "@reduxjs/toolkit"

const LoginSlice = createSlice({
    name:"login",
    initialState:{
        currentuser : null,
        error : false
    },
    reducers:{
        LoginStart:(state)=>{
            state.currentuser = null
            state.error = false
        },
        LoginSuccess:(state,action)=>{
            state.currentuser = action.payload
            state.error = false
        },
        LoginFailure:(state)=>{
            state.currentuser = null
            state.error = true
        },
        LogoutUser:(state)=>{
            state.currentuser = null
            state.error = false
        }
    }
})
export const {LoginStart,LoginSuccess,LoginFailure,LogoutUser} = LoginSlice.actions
export default LoginSlice.reducer