import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type Article, ArticleType, ArticleBlockType } from '../types/article';

const data: Article = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'path',
    views: 2020,
    createdAt: '01.01.2023',
    type: [ArticleType.IT],
    blocks: [
        { id: '1', type: ArticleBlockType.TEXT, paragraphs: ['lorem ipsum'] },
    ],
};

describe('profileSlice.test', () => {
    test('получение данных, ожидание', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('получение данных, успешное выполнение', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });

    test('получение данных, ошибка', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected,
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
        });
    });
});
