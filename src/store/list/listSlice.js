import axios from "axios";
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
// createAsyncThunk : Thunk 비동기 작업
export const getList = createAsyncThunk(
    "GET_LIST",
    async () => {
        try{
            const res =await axios.get("http://localhost:8000/list");
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)

const listSlice =  createSlice({
    name: 'list',
    initialState:{
      data:[],
      message:'default'
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled,(state,action)=>{
            state.message = '리스트업 완료';
            state.data=action.payload
        })
    }
})


export default listSlice.reducer