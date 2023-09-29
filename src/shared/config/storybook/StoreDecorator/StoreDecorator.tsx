import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { type ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { articleCommentsListReducer } from 'features/ArticleCommentList';

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleCommentsListReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn): JSX.Element => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };
