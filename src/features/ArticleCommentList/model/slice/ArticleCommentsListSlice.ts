import {
    type PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import type { Comment } from 'entities/Comment';
import type { StateSchema } from 'app/providers/StoreProvider';
import type { ArticleCommentsListSchema } from '../types/ArticleCommentListSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsComments ?? commentsAdapter.getInitialState(),
);

const ArticleCommentsListSlice = createSlice({
    name: 'ArticleCommentsListSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentsListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchCommentsByArticleId.fulfilled,
            (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// export const { actions: articleCommentsListActions } = ArticleCommentsListSlice;
export const { reducer: articleCommentsListReducer } = ArticleCommentsListSlice;
