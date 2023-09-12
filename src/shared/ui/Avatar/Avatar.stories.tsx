import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
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
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
