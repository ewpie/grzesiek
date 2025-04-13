import awardLogo from './assets/nagrody.png';
import awardLogo2 from './assets/warsaw-film-festival.png';


import foto1_1 from './assets/movie1-1.jpg';
import foto1_2 from './assets/movie1-2.jpg';
import foto1_3 from './assets/movie1-3.jpg';
import foto1_4 from './assets/movie1-4.jpg';

export const siteTexts = {
    pl:{
        bio: "bio/kontakt",
        contact: "Kontakt:",
        presskit: "Presskit",
        rights: "©2024 Grzegorz Piekarski. Wszelkie prawa zastrzeżone."        
    },
    eng:{
        bio: "bio/contact",
        contact: "Contact:",
        presskit: "Presskit",
        rights: "©2024 Grzegorz Piekarski. All Rights Reserved."    
    }
}


export const movies = [
    {
    pl: {
        movieTitle: "NIEWOLNIK",
        movieSubtitle: "film fabularny",
        production: "produkcja: SF Katowice",
        duration: "2021 / 29 min",
        description: "Nikodem odbywa wyrok w ramach nowego programu penitencjarnego, polegającego na pracy w domu Mai i Łukasza, którzy mają nad nim pełną władzę. Pozytywne rozpatrzenie apelacji i odzyskanie wolności przez Nikodema zaskakuje domowników. Chociaż mogliby się rozejść i nigdy więcej nie spotkać, pozostają razem na jeszcze jeden dzień.",
        awards: [
            {
                title: "Festiwal Polskich Filmów Fabularnych Gdynia",
                subtitle: "konkurs 2021",
                src: awardLogo
            },
            {
                title: "Festiwal Ekstra Filmów",
                subtitle: "konkurs 2034",
                src: awardLogo2
            }

        ]
    },
    eng: {
        movieTitle: "SLAVE",
        movieSubtitle: "feature film",
        production: "production: SF Katowice",
        duration: "2021 / 29 min",
        description: "Nikodem is serving a sentence as part of a new penitentiary program, working at Maja and Łukasz’s house under their complete control. The positive appeal decision and Nikodem’s release surprise the hosts. Although they could part ways and never meet again, they stay together for one more day.",
        awards: [
            {
                title: "Festival in english name in Gdynia",
                subtitle: " 2021",
                src: awardLogo
            },
            {
                title: "Festival Ekstra Movie",
                subtitle: " 2034",
                src: awardLogo2
            }

        ]
    },
    photos:[
        { src: foto1_1, id: 0 },
        { src: foto1_2, id: 1 },
        { src: foto1_3, id: 2 },
        { src: foto1_4, id: 3 }
    ],    
},
{
    pl: {
        movieTitle: "FILM DRUGI",
        movieSubtitle: "film fabularny",
        production: "produkcja: SF Katowice",
        duration: "2021 / 29 min",
        description: "OPIS MFOPzckmem vmev ;lvm ków. Chociaż mogliby się rozejść i nigdy więcej nie spotkać, pozostają razem na jeszcze jeden dzień.",
        awards: [
            {
                title: "Festiwal Polskich Filmów Fabularnych Gdynia",
                subtitle: "konkurs 2021",
                src: awardLogo
            },
            {
                title: "Festiwal Ekstra Filmów",
                subtitle: "konkurs 2034",
                src: awardLogo2
            }

        ]
    },
    eng: {
        movieTitle: "MOVIE SECOND",
        movieSubtitle: "feature film",
        production: "production: SF Katowice",
        duration: "2021 / 29 min",
        description: "vnwekvnlwlvke kw dkmlw  clwml clwmcl clwmtive appeal decision and Nikodem’s release surprise the hosts. Although they could part ways and never meet again, they stay together for one more day.",
        awards: [
            {
                title: "Festival in english name in Gdynia",
                subtitle: " 2021",
                src: awardLogo
            },
            {
                title: "Festival Ekstra Movie",
                subtitle: " 2034",
                src: awardLogo2
            }

        ]
    },
    photos:[
        { src: foto1_1, id: 0 },
        { src: foto1_2, id: 1 },
        { src: foto1_3, id: 2 },
        { src: foto1_4, id: 3 }
    ],    
}


]

export const awards = [
    {
        title: "Festiwal Polskich Filmów Fabularnych Gdynia",
        subtitle: "konkurs 2021",
        src: awardLogo
    },
    {
        title: "Festiwal Ekstra Filmów",
        subtitle: "konkurs 2034",
        src: awardLogo2
    }
];

