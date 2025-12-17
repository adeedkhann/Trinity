import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : "",
    responseGem : "",
    responseGroq : "",
    responseHug:"",
    loading : false,
    responded : false,
    theme : true,
}

export const InputSlice = createSlice({
    name : "input",
    initialState,
    reducers:{
        setInput : (state , action) => {
            state.value = action.payload
        },
        setResponseGroq : (state , action)=>{
            state.responseGroq = action.payload
        },
        setResponseGem : (state , action) =>{
            state.responseGem = action.payload
        },
        setLoading : (state , action)=>{
            state.loading = action.payload
        },
        setResponseHug : (state , action)=>{
            state.responseHug = action.payload
        },
        setResponded : (state , action)=>{
            state.responded = action.payload
        },
        setTheme : ((state ,action)=>{
            state.theme = action.payload
        } )

        
    }
})


export const {setInput , setLoading , setResponseGem ,setResponseGroq , setResponseHug , setResponded , setTheme} = InputSlice.actions
export default InputSlice.reducer



