import { createSlice } from "@reduxjs/toolkit";
import { addWaiverAction, deleteWaiverAction, updateWaiverAction } from "./WaiverActions";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  waivers: [],
  error: null,
  success: false
};

const WaiverSlice = createSlice({
  name: "waivers",
  initialState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWaiverAction.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addWaiverAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.waivers.push(action.payload);
        localStorage.setItem("waiverInfo", JSON.stringify(action.payload));
      })
      .addCase(addWaiverAction.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
        state.success = false;
      });

    /*builder
      .addCase(deleteWaiverAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWaiverAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.waivers = state.waivers.filter(
          (waiver) => waiver._id !== action.payload.id
        );
      })
      .addCase(deleteWaiverAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });*/

    builder.addCase(deleteWaiverAction.fulfilled, (state, action) => {
      state.waivers = state.waivers.filter(
        (waiver) => waiver._id !== action.payload.id
      );
      state.response = "delete";
    });

    builder.addCase(updateWaiverAction.fulfilled, (state, action) => {
      const updateItem = action.payload;
      console.log(updateItem);
      const index = state.waivers.findIndex(
        (waiver) => waiver._id === updateItem._id
      );
      if (index !== -1) {
        state.waivers[index] = updateItem;
      }
      state.response = "update";
    });

  }
});

export default WaiverSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  WaiverSlice.actions;