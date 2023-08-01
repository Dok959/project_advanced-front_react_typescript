import { Decorator, type Preview } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

import 'app/styles/index.scss';

// const myDecorator: Decorator = (Story) => (<div><Story /></div >);

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [(Story) => StyleDecorator(Story)],
    // decorators: [myDecorator],
};

export default preview;
// addDecorator(StyleDecorator);
