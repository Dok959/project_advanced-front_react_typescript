import type { Meta, StoryObj } from '@storybook/react';

import ArticlePages from './ArticlesPage';

const meta: Meta<typeof ArticlePages> = {
    title: 'shared/ArticlePages',
    component: ArticlePages,
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
};
