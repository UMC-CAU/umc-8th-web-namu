import { createSlice } from "@reduxjs/toolkit";

interface modalState {
    isOpen: boolean
}

const initialState:modalState = {
    isOpen: false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        visible:(state)=>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {visible} = modalSlice.actions

const modalReducer = modalSlice.reducer

export default modalReducer