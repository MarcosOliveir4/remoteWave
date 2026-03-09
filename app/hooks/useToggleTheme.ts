import { useTheme } from 'next-themes';
import { Theme } from '../shared/model';

export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(resolvedTheme === Theme.dark ? Theme.light : Theme.dark);
  };

  return { theme: resolvedTheme, toggle };
}
