import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chairBookings: [],
    chairBookeds: [],
}

const baiTapMovieBookingSlice = createSlice({
    name: 'baiTapMovieBooking',
    initialState,
    reducers: {
        // Xứ lý action đồng bộ
        setChairBookings: (state, action) => {
            console.log('action: ', action)
            const index = state.chairBookings.findIndex(
                (item) => item.soGhe === action.payload.soGhe
            )
            if (index !== -1) {
                state.chairBookings.splice(index, 1)
            } else {
                state.chairBookings.push(action.payload)
            }
            // immerjs
        },
        setChairBookeds: (state, { payload }) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        },
    },

    extraReducers: () => {}, // xử lý action bất đồng bộ (call API)
})

export const { reducer: baiTapMovieBookingReducer, actions: baiTapMovieBookingActions } =
    baiTapMovieBookingSlice
