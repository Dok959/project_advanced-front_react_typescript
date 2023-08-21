import { type DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('Ожидаемый возврат счетчика', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({
            value: 10,
        });
    });
});
