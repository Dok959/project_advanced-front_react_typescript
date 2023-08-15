import { type StoryFn } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn): JSX.Element => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
    };
