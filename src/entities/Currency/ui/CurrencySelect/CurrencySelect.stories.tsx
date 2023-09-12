import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
