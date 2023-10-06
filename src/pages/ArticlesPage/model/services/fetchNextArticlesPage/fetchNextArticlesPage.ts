import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumPage,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNumPage(getState());

    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch<any>(
            fetchArticlesList({
                page: page + 1,
            }),
        );
    }
});
