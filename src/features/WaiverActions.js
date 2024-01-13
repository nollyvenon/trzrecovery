import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = `${process.env.REACT_APP_API_URL}`;

export const addWaiverAction = createAsyncThunk(
  "waiver/addWaiverAction",
  async ({ fullname, guardian, signature, startDate }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      await axios.post(
        `${backendURL}/addWaiver`,
        { fullname, guardian, signature, date_signed: startDate },
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

export const deleteWaiverAction = createAsyncThunk(
  "waiver/deleteWaiverAction",
  async (data) => {
    const response = await axios.delete(
      `${backendURL}/deleteWaiver/${data}`
    );
    return response.data.response;
  }
);

export const updateWaiverAction = createAsyncThunk(
  "waiver/updateWaiverAction",
  async (data) => {
    const response = await axios.put(
      `${backendURL}/updateWaiver/${data.id}`,
      {
        fullname: data.fullname,
        guardian: data.guardian,
        signature: data.signature,
        date_signed: data.date_signed
      }
    );
    return response.data.response;
  }
);

