import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import { siteTexts } from '../data';

const t = siteTexts.pl;

function fillAndSend() {
  fireEvent.change(screen.getByLabelText(t.formName), { target: { value: 'Jan Kowalski' } });
  fireEvent.change(screen.getByLabelText(t.formEmail), { target: { value: 'jan@example.com' } });
  fireEvent.change(screen.getByLabelText(t.formMessage), { target: { value: 'Dzień dobry' } });
  fireEvent.click(screen.getByRole('button', { name: t.formSend }));
}

afterEach(() => {
  delete global.fetch;
});

test('shows thank you message after successful send', async () => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true }) }));
  render(<ContactForm t={t} />);
  fillAndSend();
  expect(await screen.findByText(t.formSent)).toBeInTheDocument();
  const body = global.fetch.mock.calls[0][1].body;
  expect(body.get('email')).toBe('jan@example.com');
  expect(body.get('website')).toBe('');
});

test('shows email address when sending fails', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('offline')));
  render(<ContactForm t={t} />);
  fillAndSend();
  expect(await screen.findByRole('link', { name: /@/ })).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
});
