import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: '123', password: 'sad' } }),
    ],
};
export const withError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: 'sad', error: 'ERROR' },
        }),
    ],
};
export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
