import { render, screen } from '@testing-library/react';
import PasswordGate, { isPreviewHost } from './PasswordGate';

test('password is required only on GitHub Pages', () => {
  expect(isPreviewHost('ewpie.github.io')).toBe(true);
  expect(isPreviewHost('localhost')).toBe(false);
  expect(isPreviewHost('gpiekarski.com')).toBe(false);
});

test('outside GitHub Pages content is shown without password', () => {
  render(<PasswordGate><p>treść strony</p></PasswordGate>);
  expect(screen.getByText('treść strony')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText(/Hasło/)).not.toBeInTheDocument();
});
