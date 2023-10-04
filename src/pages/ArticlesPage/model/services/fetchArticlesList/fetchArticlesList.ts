import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Article[]>(`/articles/`, {
            params: {
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
