import { createSlice } from '@reduxjs/toolkit'

const carCardSlice = createSlice({
    name:'carCard',
    initialState:{
        carCard: null,
    },
    reducers:{
        addCarToCard: (state, action) => {
            state.carCard = action.payload.id;
        },
    }
})

export default carCardSlice