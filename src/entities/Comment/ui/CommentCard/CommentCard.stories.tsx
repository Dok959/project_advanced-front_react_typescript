import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
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

export const CommentCardNormal: Story = {
    args: {
        comment: {
            id: '1',
            text: '123',
            user: { id: '1', username: 'Vasya' },
        },
    },
};

export const CommentCardIsLoading: Story = {
    args: {
        comment: {
            id: '1',
            text: '123',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true,
    },
};
