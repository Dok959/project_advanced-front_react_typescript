import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps): JSX.Element => {
    const { className = '' } = props;
    // const { t } = useTranslation('articles');

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    useInitialEffect(() => {
        dispatch<any>(fetchArticlesList());
        dispatch(articlePageActions.initState());
    });

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
