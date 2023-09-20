import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                // Задержка для демонстрации работы
                resolve(import('./ArticlesPage'));
            }, 1500);
        }),
);
