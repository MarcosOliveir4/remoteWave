import { act, renderHook } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { Theme } from '../shared/model';
import { useToggleTheme } from './useToggleTheme';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}));

describe('useToggleTheme', () => {
  it.each([
    { current: Theme.dark, expected: Theme.light },
    { current: Theme.light, expected: Theme.dark },
  ])('should toggle theme from $current to $expected', ({ current, expected }) => {
    const setTheme = vi.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useTheme as any).mockReturnValue({
      resolvedTheme: current,
      setTheme,
    });

    const { result } = renderHook(() => useToggleTheme());

    act(() => {
      result.current.toggle();
    });

    expect(setTheme).toHaveBeenCalledWith(expected);
  });
});
