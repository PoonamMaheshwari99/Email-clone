import {createAsyncThunk ,createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        setCounter:0,
        setS:0,
        setT:0

        
        //sendMessageIsOpen:false
    },

    reducers:{
        //openSendMessage
        Increment: (state) =>{
            //state.sendMessageIsOpen=true
            state.setCounter+=1
        },
        IncrementS:(state)=>{
            state.setS+=1
        },
        IncrementT:(state)=>{
            state.setT+=1

        },
        //closeSendMessage
        Decrement: (state) =>{
            //state.sendMessageIsOpen=false
            state.setCounter-=1
        },

        DecrementS: (state) =>{
            state.setS-=1
        },
        DecrementT:(state) =>{
            state.setT-=1
        }
    },
});

export const {Increment, IncrementS,IncrementT ,Decrement,DecrementS,DecrementT} = counterSlice.actions;

export const selectSetCounter = (state: { counter: { setCounter: any; }; }) => state.counter.setCounter;
export const selectSetS = (state: { counter: { setS: any; }; }) => state.counter.setS;
export const selectSetT = (state: { counter: { setT: any; }; }) => state.counter.setT;

export default counterSlice.reducer;