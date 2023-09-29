import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
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

export const CommentListNormal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: '123',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'hello world',
                user: { id: '2', username: 'Sveta' },
            },
            {
                id: '3',
                text: 'asdasd',
                user: { id: '1', username: 'Vasya' },
            },
        ],
    },
};

export const CommentListIsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
