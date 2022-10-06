import { createAction, createReducer} from '@reduxjs/toolkit'




const update = createAction('omdb/update');
const initialState = {
  modbs: []
}

const reducer = createReducer(initialState, async (builder) => {
  builder
    .addCase(update, (state, action)=>{   
      const movie = [...action.payload];
      return {...state, modbs: [...movie]}
      // state.modbs = action.payload;
    })
    .addDefaultCase((state, action) => {return {...state}})
})

export default reducer;