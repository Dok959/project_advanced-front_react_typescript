import { Country } from 'entities/Country';
import { ValidateProfileError, type ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    firstname: 'Oleg',
    lastname: 'King',
    username: 'El',
    age: 22,
    country: Country.Armenia,
    city: 'asd',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('проверка установки только для чтения', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('проверка отмены изменений', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { lastname: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('проверка сохранения изменений', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            form: {
                username: '123456',
            },
        });
    });

    test('проверка сохранения изменений, ожидание', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('проверка сохранения изменений, успешное выполнение', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
