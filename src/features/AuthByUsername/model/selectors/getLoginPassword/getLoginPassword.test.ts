import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('ожидаемый возврат пароля', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '123123',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });

    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
