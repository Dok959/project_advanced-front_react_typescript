import {
    type PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView, type Article } from 'entities/Article';
import type { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articleAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticlesList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articleAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlePageReducer, actions: articlePageActions } =
    articlePageSlice;
