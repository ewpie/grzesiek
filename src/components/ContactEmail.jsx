import { useEffect, useState } from 'react';

// Adres jest zakodowany (base64), żeby boty zbierające e-maile nie znalazły go w kodzie strony.
// Nowy adres: node -e "console.log(Buffer.from('adres@example.com').toString('base64'))"
const ENCODED_EMAIL = 'Z3IucGlla2Fyc2tpQGdtYWlsLmNvbQ==';

export default function ContactEmail() {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        setEmail(atob(ENCODED_EMAIL));
    }, []);

    if (!email) return null;

    return <a className="footer-email" href={`mailto:${email}`}>{email}</a>;
}
