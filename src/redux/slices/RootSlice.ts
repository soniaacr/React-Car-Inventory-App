import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Make',
        model: 'Model',
        year: 'Year',
        color: 'Color',
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor } = rootSlice.actions;