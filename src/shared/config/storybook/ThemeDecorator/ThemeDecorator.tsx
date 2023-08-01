import { Decorator, Story, StoryFn, StoryObj } from '@storybook/react';

export const ThemeDecorator = (Story: Story): Decorator => {
    // return <div>{story()}</div>;
    return (
        <div>
            <Story />
        </div>
    );
};
