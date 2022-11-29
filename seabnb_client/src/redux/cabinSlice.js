import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_CREATE_CABIN_URL = "/api/cabins/";
const API_GET_ALL_CABIN_URL = "/api/cabins/";
const API_GET_USER_CABIN_URL = "/api/cabins/me";
const API_DELETE_CABIN_URL = "/api/cabins/";

const initialState = {
  cabins: [],
  isError: false,
  isSuccess: false,
  isLoading: true,
  message: "",
};

//Create asyncThunk for creating Cabins
export const createCabin = createAsyncThunk(
  "cabin/createCabin",
  async (cabinInfo, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.post(
        API_CREATE_CABIN_URL,
        cabinInfo,
        config
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUserCabin = createAsyncThunk(
  "cabin/getUserCabin",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(API_GET_USER_CABIN_URL, config);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllCabins = createAsyncThunk(
  "cabin/getAllCabins",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(API_GET_ALL_CABIN_URL, config);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCabin = createAsyncThunk(
  "cabin/deleteCabin",
  async (cabinId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.delete(
        API_DELETE_CABIN_URL + cabinId,
        config
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const cabinSlice = createSlice({
  name: "cabin",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCabin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCabin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cabins.push(action.payload);
      })
      .addCase(createCabin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getUserCabin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCabin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cabins = action.payload;
      })
      .addCase(getUserCabin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getAllCabins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCabins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cabins = action.payload;
      })
      .addCase(getAllCabins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteCabin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCabin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cabins = state.cabins.filter(
          (cabin) => cabin._id !== action.payload.id
        );
      })
      .addCase(deleteCabin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cabinSlice.actions;
export default cabinSlice.reducer;
