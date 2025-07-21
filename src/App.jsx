import './App.css';
import Movie from './components/Movie';
import bioFoto from './assets/bioFoto.jpg';
import { useState } from 'react';

import { siteTexts, movies } from './data';

import React from 'react';

function App() {
    const [language, setLanguage] = useState('pl');
    const t = siteTexts[language]

    return (
        <div className="App">
            <header className="header">
                <div className="header-left">
                    <h1 className="name">Grzegorz Piekarski</h1>
                </div>
                <div className="header-right">
                    <div className="nav">
                        <a id="nav1" href="#bio">{t.bio}</a>
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
                        <div className="bio-photo">
                            <img className="bio-photo-img" src={bioFoto} alt="" />
                        </div>
                        <div className="bio-text">
                            <p>GRZEGORZ PIEKARSKI</p>
                            <p>{t.bioDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-wrap align-center">
                    <div className="site-wrap footer-up">
                        <div className="footer-up-left">
                            <p>{t.contact}</p>
                            <p>gr.piekarski@gmail.com</p>
                            {/* <p>{t.presskit}</p> */}
                        </div>
                        <div className="footer-up-right">
                            <a className="footer-link" href="https://www.imdb.com/name/nm11128545/?ref_=ttawd_awd_1">IMDB</a>
                            <a className="footer-link" href="https://filmpolski.pl/fp/index.php?osoba=11156939">FILM POLSKI</a>
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
    );
}

export default App;
