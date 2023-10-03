import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView): JSX.Element[] =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo(function ArticleList(
    props: ArticleListProps,
): JSX.Element {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;
    // const { t } = useTranslation();

    if (isLoading) {
        return (
            <div
                className={classNames('cls.ArticleList', {}, [
                    className,
                    cls[view],
                ])}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article): JSX.Element => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
            />
        );
    };

    return (
        <div
            className={classNames('cls.ArticleList', {}, [
                className,
                cls[view],
            ])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});