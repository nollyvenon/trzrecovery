import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getUser = createAsyncThunk(
    'users/getUser',
    async ({userId}, {rejectWithValue}) => {
        try {

            fetch(`${process.env.REACT_APP_API_URL}users/${userId}`, {
                method: 'GET',
                mode: "cors",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "Content-Language": "en",
                    "X-AppApiToken": `${process.env.REACT_APP_API_TOKEN}`,
                    "X-AppType": "docs",
                }
            }).then(response => {
                return response.json()
            })
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const userSlice = createSlice({
    name: 'userdata',
    initialState: {
        userdata: [],
        entities: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.entities.push(action.payload);
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    }
});
export const selUser = (state) => state.userdata.entities;
export const userStatus = (state) => state.userdata.loading;
export const getUserError = (state) => state.userdata.error;

export default userSlice.reducer;