import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios'


export interface Diet {
    id: string;
    title: string;
}


export interface DietsState {
  diets: [];
  status: string
}

const initialState: DietsState = {
  diets: [],
  status: ''
};

export const dietsSlice = createSlice({
  name: "diet",
  initialState,
  reducers: {
  
  },
  extraReducers(builder){
    builder
        .addCase(getDiets.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getDiets.fulfilled, (state,action) =>{
        state.status = 'succeeded'
        state.diets = action.payload
        return
        }
        )
  }
});


export const getDiets = createAsyncThunk('getDiets', async () => {
  try {
    const response = await axios.post('/diets');
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});


export const selectDiets = (state: { diet: DietsState }) => state.diet.diets;
export const dietsStatus = (state: { diet: DietsState }) => state.diet.status;

export default dietsSlice.reducer;