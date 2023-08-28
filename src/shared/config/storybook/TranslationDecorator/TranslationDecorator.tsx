import { type StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { Suspense } from 'react';

export const TranslationDecorator =
    // eslint-disable-next-line react/display-name
    (Story: StoryFn): JSX.Element => {
        return (
            <I18nextProvider i18n={i18nForTests}>
                <Suspense fallback="">
                    <Story />
                </Suspense>
            </I18nextProvider>
        );
    };
