import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
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

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    firstname: 'Oleg',
                    lastname: 'King',
                    username: 'El',
                    age: 22,
                    country: Country.Armenia,
                    city: 'asd',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    firstname: 'Oleg',
                    lastname: 'King',
                    username: 'El',
                    age: 22,
                    country: Country.Armenia,
                    city: 'asd',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};
