import { ToggleTheme } from './components/ToggleTheme';

export default function Home() {
  return (
    <>
      <h1 data-testid="title">Remote Wave</h1>
      <ToggleTheme />
    </>
  );
}
