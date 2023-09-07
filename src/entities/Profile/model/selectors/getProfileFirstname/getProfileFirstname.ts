import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFirstname = (state: StateSchema): string =>
    state?.profile?.data?.firstname ?? '';
