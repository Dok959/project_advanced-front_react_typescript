import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn): JSX.Element => {
        return (
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>
        );
    };
