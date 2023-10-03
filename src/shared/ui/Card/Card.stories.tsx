import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Text } from 'shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
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
    args: {
        children: <Text title="text" text="text text" />,
    },
};
