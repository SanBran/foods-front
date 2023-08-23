import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios'


export interface Recipe {
    id: string;
    title: string;
    image: string;
    summary: string;
    healthScore: number;
    steps: string;
    createdInDb: boolean;
}


export interface RecipesState {
  recipes: [];
  status: string
}

const initialState: RecipesState = {
  recipes: [],
  status: ''
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
  
  },
  extraReducers(builder){
    builder
        .addCase(getRecipes.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getRecipes.fulfilled, (state,action) =>{
        state.status = 'succeeded'
        state.recipes = action.payload
        return
        }
        )
  }
});


export const getRecipes = createAsyncThunk('getRecipes', async () => {
  try {
    const response = await axios.post('/recipes');
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});


export const selectRecipes = (state: { recipe: RecipesState }) => state.recipe.recipes;
export const recipesStatus = (state: { recipe: RecipesState }) => state.recipe.status;

export default recipesSlice.reducer;