import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentList: [],
    studentEdit: undefined,
}

const baiTapFormSlice = createSlice({
    name: 'baiTapForm',
    initialState,
    reducers: {
        addStudent: (state, { payload }) => {
            state.studentList.push(payload)
        },
        deleteStudent: (state, { payload }) => {
            state.studentList = state.studentList.filter((std) => std.maSV !== payload)
        },
        editStudent: (state, { payload }) => {
            state.studentEdit = payload
        },
        updateStudent: (state, { payload }) => {
            state.studentList = state.studentList.map((std) => {
                if (std.maSV === payload.maSV) {
                    return payload
                }
                return std
            })

            state.studentEdit = undefined
        },
    },
    extraReducers: () => {},
});

export const { reducer: baiTapFormReducer, actions: baiTapFormActions } = baiTapFormSlice;
