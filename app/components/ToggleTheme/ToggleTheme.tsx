'use client';

import { useToggleTheme } from '@/app/hooks';
import { Theme } from '@/app/shared/model';
import { useEffect, useState } from 'react';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';

export function ToggleTheme() {
  const { theme, toggle } = useToggleTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button data-testid="toggle-button" className="btn btn-square" onClick={toggle}>
      {theme === Theme.dark ? (
        <AiFillSun data-testid="toggle-icon-sun" />
      ) : (
        <AiFillMoon data-testid="toggle-icon-moon" />
      )}
    </button>
  );
}
