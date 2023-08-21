import { configureStore } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: StateSchema): ToolkitStore {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
