import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('ожидаемый возврат username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
