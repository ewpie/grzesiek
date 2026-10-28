import './App.css';
import Movie from './components/Movie';
import Media from './components/Media';
import ContactForm from './components/ContactForm';
import { siteTexts, movies, medias } from './data';
import bioFoto from './assets/bioFoto.jpg';

import { useState } from 'react';
import { Helmet } from "react-helmet";


function App() {
    const [language, setLanguage] = useState('pl');
    const t = siteTexts[language]

    return (<>

        {/* Dane strukturalne (JSON-LD), Open Graph i canonical są w public/index.html */}
        <Helmet htmlAttributes={{ lang: language === 'pl' ? 'pl' : 'en' }}>
            <title>{t.seoTitle}</title>
            <meta name="description" content={t.seoDescription} />
        </Helmet>
        <div className="App">
            <header className="header">
                <div className="header-left">
                    <h1 className="name">GRZEGORZ PIEKARSKI</h1>
                    <h2 className={`profession nav-${t.lang}`}>{t.profession}</h2>
                </div>
                <div className="header-right">
                    <div className="nav">
                        <a href="#bio">{t.bio}</a>
                    </div>
                    <div className="nav">
                        <a href="#kontakt">{t.contactNav}</a>
                    </div>
                    <div className="nav">
                        <button className="lang-toggle" onClick={() => setLanguage(language === 'pl' ? 'eng' : 'pl')}>
                            {language === 'pl' ? 'ENG' : 'PL'}
                        </button>
                    </div>

                </div>
            </header>
            <main>
                {movies.map((movie, index) => (
                    <Movie key={index} photos={movie.photos} awards={movie[language].awards} movieData={movie[language]}></Movie>
                ))}
                <div className="align-center">
                    <div id="bio" className="bio site-wrap">
                        <div className="bio-photo bio-left">
                            <img className="bio-photo-img" src={bioFoto} alt="Grzegorz Piekarski – reżyser, scenarzysta i operator filmowy" />
                        </div>
                        <div className="bio-text bio-right">
                            <p>GRZEGORZ PIEKARSKI</p>
                            <p dangerouslySetInnerHTML={{ __html: t.bioDescription }}></p>
                        </div>
                    </div>
                </div>
                <Media medias={medias}></Media>
            </main>
            <footer className="footer">
                <div className="footer-wrap align-center">
                    <div className="site-wrap footer-up">
                        <div id="kontakt" className="footer-up-left">
                            <p>{t.contact}</p>
                            <ContactForm t={t} />
                            {/* <p>{t.presskit}</p> */}
                        </div>
                    </div>
                    <div className="site-wrap">
                        <hr className="hr" />
                    </div>
                    <div className="site-wrap footer-down">
                        <p>{t.rights}</p>
                    </div>
                </div>
            </footer>
        </div>
    </>


    );
}

export default App;
