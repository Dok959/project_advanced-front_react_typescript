import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileLastname } from './getProfileLastname';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileLastname.test', () => {
    test('ожидаемый возврат фамилии', () => {
        const data = {
            firstname: 'Oleg',
            lastname: 'King',
            username: 'El',
            age: 22,
            country: Country.Armenia,
            city: 'asd',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileLastname(state as StateSchema)).toBe(data.lastname);
    });

    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLastname(state as StateSchema)).toBe('');
    });
});
