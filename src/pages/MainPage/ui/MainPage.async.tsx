import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        // Задержка для демонстрации работы
        resolve(import('./MainPage'));
      }, 1500);
    }),
);
