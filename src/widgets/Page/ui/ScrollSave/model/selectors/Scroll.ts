import { createSelector } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import type { ScrollSchema } from '../types/ScrollSaveSchema';

export const getPositionScroll = (state: StateSchema): ScrollSchema =>
    state.scroll.scroll;

export const getPositionScrollByPath = createSelector(
    getPositionScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
