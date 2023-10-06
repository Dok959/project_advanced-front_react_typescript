import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({
    className = '',
}: NotFoundPageProps): JSX.Element => {
    const { t } = useTranslation('notFoundPage');
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
