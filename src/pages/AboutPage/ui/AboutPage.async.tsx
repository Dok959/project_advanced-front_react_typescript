import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        // Задержка для демонстрации работы
        resolve(import('./AboutPage'));
      }, 1500);
    }),
);
