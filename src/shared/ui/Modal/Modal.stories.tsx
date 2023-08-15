import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
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
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
