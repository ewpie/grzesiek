import { useState } from 'react';
import { Helmet } from "react-helmet";

// Ekran z hasłem tylko dla wersji pokazowej na GitHub Pages.
// To zasłona przed przypadkowymi osobami, nie prawdziwe zabezpieczenie.
const PREVIEW_HOST = 'ewpie.github.io';
const PASSWORD_HASH = '168d4512937c56a7987e8813690367f6bab340df834b0ebf221c113f06d28a90';
const STORAGE_KEY = 'preview-unlocked';

export function isPreviewHost(hostname) {
    return hostname === PREVIEW_HOST;
}

async function sha256(text) {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(bytes)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readUnlocked() {
    try {
        return localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH;
    } catch {
        return false;
    }
}

export default function PasswordGate({ children }) {
    const isPreview = isPreviewHost(window.location.hostname);
    const [unlocked, setUnlocked] = useState(() => !isPreview || readUnlocked());
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    if (unlocked) {
        return (<>
            {isPreview && <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>}
            {children}
        </>);
    }

    async function submitHandler(event) {
        event.preventDefault();
        if (await sha256(password) === PASSWORD_HASH) {
            try {
                localStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
            } catch { }
            setUnlocked(true);
        } else {
            setError(true);
        }
    }

    return (
        <div className="gate">
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <form className="gate-form" onSubmit={submitHandler}>
                <h1 className="name">GRZEGORZ PIEKARSKI</h1>
                <p>Wersja pokazowa / Preview</p>
                <input
                    className="gate-input"
                    type="password"
                    placeholder="Hasło / Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(false); }}
                    autoFocus
                />
                {error && <p className="gate-error">Złe hasło / Wrong password</p>}
                <button className="lang-toggle gate-button" type="submit">OK</button>
            </form>
        </div>
    );
}
