import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchShopFromServer = createAsyncThunk(
  "shopContent/fetchShopFromServer",
  async () => {
    const res = await fetch(
      "https://shopping-cart-3919c-default-rtdb.firebaseio.com/products.json"
    );
    const json = await res.json();
    return json;
  }
);

const shopContentSlice = createSlice({
  name: "shopContent",
  initialState: {
    content: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShopFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      })
      .addCase(fetchShopFromServer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default shopContentSlice;
export { fetchShopFromServer };
