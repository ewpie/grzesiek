import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { movies } from './data';

test('renders name and Polish movie titles by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'GRZEGORZ PIEKARSKI' })).toBeInTheDocument();
  movies.forEach((movie) => {
    expect(screen.getByText(movie.pl.movieTitle)).toBeInTheDocument();
  });
});

test('contact email is shown as a mailto link', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'gr.piekarski@gmail.com' })).toHaveAttribute('href', 'mailto:gr.piekarski@gmail.com');
});

test('language toggle switches to English', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'ENG' }));
  movies.forEach((movie) => {
    expect(screen.getByText(movie.eng.movieTitle)).toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: 'PL' })).toBeInTheDocument();
});
