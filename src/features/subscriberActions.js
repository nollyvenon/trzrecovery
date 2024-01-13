import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = `${process.env.REACT_APP_API_URL}`;

export const addSubscriberAction = createAsyncThunk(
  "subscriber/addSubscriberAction",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      await axios.post(
        `${backendURL}/addSubscriber`,
        { email },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

