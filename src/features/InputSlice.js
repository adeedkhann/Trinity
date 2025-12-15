import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : "",
    response : "",
    loading : false 
}

export const InputSlice = createSlice({
    name : "input",
    initialState,
    reducers:{
        setInput : (state , action) => {
            state.value = action.payload
        },
        setResponse : (state , action) =>{
            state.response = action.payload
        },
        setLoading : (state , action)=>{
            state.loading = action.payload
        }

        
    }
})


export const {setInput , setLoading , setResponse} = InputSlice.actions
export default InputSlice.reducer



