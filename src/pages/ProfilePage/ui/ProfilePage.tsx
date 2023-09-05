import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const { className = '' } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
