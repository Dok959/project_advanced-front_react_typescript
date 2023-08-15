import { type ReactNode, useMemo, useState } from 'react';
import {
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from '../lib/ThemeContext';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
