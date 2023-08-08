import { type StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn): JSX.Element => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
