import { Admin } from "@/interface/admin";
import { getAllUser } from "@/services/user.service";
import { createSlice } from "@reduxjs/toolkit";

const userState:Admin[]=[]
const userReducer=createSlice({
    name:"user",
    initialState:{
        user:userState,

    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUser.fulfilled,(state, action)=>{
            state.user=action.payload
        })
    }
})
export default userReducer.reducer