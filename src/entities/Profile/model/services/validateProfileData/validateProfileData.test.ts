import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
    firstname: 'Oleg',
    lastname: 'King',
    username: 'El',
    age: 22,
    country: Country.Armenia,
    city: 'asd',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('успешная валидация данных', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('ошибка валидации, не указаны имя и фамилия', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('ошибка валидации, не корректный возраст', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('ошибка валидации, отсутствие страны', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('ошибка валидации, отсутствие всех данных', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
