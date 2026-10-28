import { useRef, useState } from 'react';
import ContactEmail from './ContactEmail';
import { isPreviewHost } from './PasswordGate';

// Wysyła wiadomość do public/kontakt.php. PHP działa tylko na hostingu, więc na GitHub Pages formularz jest wyłączony.
export default function ContactForm({ t }) {
    const [status, setStatus] = useState('idle');
    const renderedAt = useRef(Date.now());
    const isPreview = isPreviewHost(window.location.hostname);

    async function submitHandler(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append('elapsed', Math.round((Date.now() - renderedAt.current) / 1000));
        setStatus('sending');
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/kontakt.php`, { method: 'POST', body: data });
            const result = await response.json();
            setStatus(response.ok && result.ok ? 'sent' : 'error');
        } catch {
            setStatus('error');
        }
    }

    if (status === 'sent') {
        return <p className="contact-info">{t.formSent}</p>;
    }

    return (
        <form className="contact-form" onSubmit={submitHandler}>
            <input className="contact-input" name="name" type="text" required maxLength={100}
                placeholder={t.formName} aria-label={t.formName} />
            <input className="contact-input" name="email" type="email" required
                placeholder={t.formEmail} aria-label={t.formEmail} />
            <textarea className="contact-input" name="message" required maxLength={5000} rows={5}
                placeholder={t.formMessage} aria-label={t.formMessage} />
            <input className="contact-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            {isPreview && <p className="contact-info">{t.formPreview}</p>}
            {status === 'error' && <p className="contact-info">{t.formError} <ContactEmail /></p>}
            <button className="contact-button" type="submit" disabled={isPreview || status === 'sending'}>
                {status === 'sending' ? t.formSending : t.formSend}
            </button>
        </form>
    );
}
