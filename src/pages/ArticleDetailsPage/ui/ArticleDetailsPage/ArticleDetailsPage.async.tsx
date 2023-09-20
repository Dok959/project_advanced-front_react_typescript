import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                // Задержка для демонстрации работы
                resolve(import('./ArticleDetailsPage'));
            }, 1500);
        }),
);
