import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { type ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn): JSX.Element => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };
