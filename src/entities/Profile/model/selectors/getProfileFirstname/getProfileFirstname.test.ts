import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstname } from './getProfileFirstname';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileFirstname.test', () => {
    test('ожидаемый возврат имени', () => {
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
        expect(getProfileFirstname(state as StateSchema)).toBe(data.firstname);
    });

    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstname(state as StateSchema)).toBe('');
    });
});
