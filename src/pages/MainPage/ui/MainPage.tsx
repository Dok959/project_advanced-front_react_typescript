import { useTranslation } from 'react-i18next';

const MainPage = (): JSX.Element => {
    const { t } = useTranslation();

    // 26.37
    return <div>{t('Главная страница')}</div>;
};

export default MainPage;
