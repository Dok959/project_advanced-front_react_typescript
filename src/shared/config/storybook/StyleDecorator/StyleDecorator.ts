import { type Decorator } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: any): Decorator => {
    console.log(story);

    return story();
};

// export const StyleDecorator = (Story: JSX.IntrinsicAttributes): Decorator => (
//     <div style={{ margin: '3em' }}>
//         <Story />
//     </div>
// );
