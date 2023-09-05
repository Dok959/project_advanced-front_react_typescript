import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                // Задержка для демонстрации работы
                resolve(import('./ProfilePage'));
            }, 1500);
        }),
);
