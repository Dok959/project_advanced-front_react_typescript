import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ProfilePage.module.scss';
// import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const { className = '' } = props;
    // const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch<any>(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;