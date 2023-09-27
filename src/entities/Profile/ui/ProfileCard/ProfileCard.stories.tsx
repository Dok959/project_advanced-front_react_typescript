import type { Meta, StoryObj } from '@storybook/react';

// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
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
    args: {
        data: {
            firstname: 'Oleg',
            lastname: 'King',
            username: 'El',
            age: 22,
            country: Country.Armenia,
            city: 'asd',
            currency: Currency.USD,
            avatar: AvatarImg,
        },
    },
    // decorators: [StoreDecorator({})],
};

export const ProfileCardIsLoading: Story = {
    args: {
        isLoading: true,
    },
    // decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const ProfileCardWithError: Story = {
    args: {
        error: 'error',
    },
    // decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
