import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userActions, type User } from 'entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// enum LoginError {
//     INCORRECT_DATA = '',
//     SERVER_ERROR = '',
// }

// eslint-disable-next-line @typescript-eslint/ban-types
function isEmpty(obj: Object): boolean {
    return Object.keys(obj).length === 0;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            authData,
        );

        // 20
        if (response.data === null || isEmpty(response.data)) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('error');
    }
});
