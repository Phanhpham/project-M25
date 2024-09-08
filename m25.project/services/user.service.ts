import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

let url = process.env.NEXT_PUBLIC_VITE_BASE_URL
// api tat ca user 
export const getAllUser:any =createAsyncThunk(
    "user/getAllUser",
    async()=>{
        const response =await axios.get(`${url}/user`)
        return response.data;
    }
)
