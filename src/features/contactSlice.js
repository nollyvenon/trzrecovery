import { createSlice } from "@reduxjs/toolkit";
import { addContactAction } from "./contactActions";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  contacts: [],
  error: null,
  success: false
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContactAction.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contacts = action.payload;
        localStorage.setItem("contactInfo", JSON.stringify(action.payload));
      })
      .addCase(addContactAction.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
        state.success = false;
      });
    /* .addCase(deleteContactAction.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(deleteContactAction.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.contacts = state.contacts.filter(
         (contact) => contact._id !== action.payload.id
       );
     })
     .addCase(deleteContactAction.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.message = action.payload;
     });*/
  }
});

export default contactSlice.reducer;
