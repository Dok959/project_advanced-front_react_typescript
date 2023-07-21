import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>TOGGLE THEME</button>;
};
