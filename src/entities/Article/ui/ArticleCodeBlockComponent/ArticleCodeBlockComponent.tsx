import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (
    props: ArticleCodeBlockComponentProps,
): JSX.Element => {
    const { className = '' } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [
                className,
            ])}
        >
            ArticleCodeBlockComponent
        </div>
    );
};
