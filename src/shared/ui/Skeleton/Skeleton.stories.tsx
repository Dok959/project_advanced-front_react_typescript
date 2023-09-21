import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
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
        width: '100%',
        height: '100px',
    },
};

export const Curcle: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CurcleDark: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalOrange: Story = {
    args: {
        width: '100%',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const CurcleOrange: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
