import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import type { ReducersMapObject, DeepPartial } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
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
