import { createSlice } from '@reduxjs/toolkit'

export const FilterSlice = createSlice({
  name: "Filter",
  initialState:{
    AvailablilityChecker : false,
    NotAvailablilityChecker : false,
    SamsungChecker:false,
    OppoChecker:false,
    VivoChecker:false,
    R1Checker:false,
    R2Checker:false,
    R3Checker:false,
    GB16Checker:false,
    GB32Checker:false,
    GB64Checker:false,
    GB4Checker:false,
    GB8Checker:false,
    G4Checker:false,
    G5Checker:false
  },
  reducers: {
    Availablility: (state,action) =>{
      state.AvailablilityChecker=action.payload;
    },
    NotAvailablility: (state,action) =>{
      state.NotAvailablilityChecker=action.payload;
    },
    Samsung: (state,action) =>{
      state.SamsungChecker=action.payload;
    },
    Oppo: (state,action) =>{
      state.OppoChecker=action.payload;
    },
    Vivo: (state,action) =>{
      state.VivoChecker=action.payload;
    },
    R1: (state,action) =>{
      state.R1Checker=action.payload;
    },
    R2: (state,action) =>{
      state.R2Checker=action.payload;
    },
    R3: (state,action) =>{
      state.R3Checker=action.payload;
    },
    GB16: (state,action) =>{
      state.GB16Checker=action.payload;
    },
    GB32: (state,action) =>{
      state.GB32Checker=action.payload;
    },
    GB64: (state,action) =>{
      state.GB64Checker=action.payload;
    },
    GB4: (state,action) =>{
      state.GB4Checker=action.payload;
    },
    GB8: (state,action) =>{
      state.GB8Checker=action.payload;
    },
    G4: (state,action) =>{
      state.GB4Checker=action.payload;
    },
    G5: (state,action) =>{
      state.GB8Checker=action.payload;
    }
  }
})
export const {Availablility,NotAvailablility,Samsung,Oppo,Vivo,R1,R2,R3,GB16,GB32,GB64,GB4,GB8,G4,G5} = FilterSlice.actions;
export default FilterSlice.reducer;