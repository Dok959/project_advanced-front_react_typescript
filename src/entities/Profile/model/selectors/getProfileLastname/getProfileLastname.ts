import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileLastname = (state: StateSchema): string =>
    state?.profile?.data?.lastname ?? '';
