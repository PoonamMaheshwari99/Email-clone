import {createAsyncThunk ,createSlice} from '@reduxjs/toolkit';

export const onchangeSlice = createSlice({
    name: 'onchange',
    initialState:{
        //sendMessageIsOpen:false
        sendonchange:false
    },

    reducers:{
        statusonchange: (state) =>{
            state.sendonchange=true
        },
        Message: (state) =>{
            state.sendonchange=false
        },
    },
});

export const {statusonchange , Message} = onchangeSlice.actions;

export const selectSendonchange = (state: { onchange: { sendonchange: any }; }) => state.onchange.sendonchange;

export default onchangeSlice.reducer;




