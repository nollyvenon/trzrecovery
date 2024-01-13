import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = `${process.env.REACT_APP_API_URL}`;

export const addContactAction = createAsyncThunk(
  "contacts/addContactAction",
  async ({ name, email, phone, subject, contmessage }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      await axios.post(
        `${backendURL}/addContactMessage`,
        { name, email, phone, subject, contmessage },
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

