import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ScrollSaveSchema } from '../types/ScrollSaveSchema';
const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
