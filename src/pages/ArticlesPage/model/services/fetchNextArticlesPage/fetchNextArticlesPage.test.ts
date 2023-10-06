import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('успешное получение данных', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });

    test('отмена вызова загрузки, нет записей', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toBeCalled();
    });

    test('отмена вызова загрузки, идёт загрузка', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toBeCalled();
    });
});
