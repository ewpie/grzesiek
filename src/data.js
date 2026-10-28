import foto1_1 from './assets/movie01/1.jpg';
import foto1_2 from './assets/movie01/2.jpg';
import foto1_3 from './assets/movie01/3.jpg';
import foto1_4 from './assets/movie01/4.jpg';

import foto2_1 from './assets/movie02/1.jpg';
import foto2_2 from './assets/movie02/2.jpg';
import foto2_3 from './assets/movie02/3.jpg';
import foto2_4 from './assets/movie02/4.jpg';
// import foto2_5 from './assets/movie02/5.jpg';

import media_imdb from './assets/media/00-imdb.png';
import media_filmpolski from './assets/media/00-filmpolski.png';
import media_1 from './assets/media/01-businessdoceurope.png';
import media_2 from './assets/media/02-moderntimesreview.png';
import media_3 from './assets/media/03-rainews.png';
import media_4 from './assets/media/04-culture.png';
import media_5 from './assets/media/05-nowyswiat.png';
import media_6 from './assets/media/06-tokfm.png';
import media_7 from './assets/media/07-trojka.png';
import media_8 from './assets/media/08-czworka.png';



export const siteTexts = {
    pl:{
        lang: "pl",
        bio: "bio/kontakt",
        profession: "REŻYSER | SCENARZYSTA | OPERATOR",
        contact: "Kontakt:",
        presskit: "Presskit",
        rights: "©2025 Grzegorz Piekarski. Wszelkie prawa zastrzeżone.",
        bioDescription: "Reżyser i scenarzysta, urodzony w Warszawie. Absolwent Szkoły Filmowej im. Krzysztofa Kieślowskiego w Katowicach oraz Wydziału Mechatroniki Politechniki Warszawskiej. Stypendysta programu „Młoda Polska” Ministerstwa Kultury i Dziedzictwa Narodowego. Uczestnik programów rozwojowych Doc Lab Poland i dok.incubator. Członek Stowarzyszenia Filmowców Polskich.<br/>Jego fabularny film dyplomowy „Niewolnik” był prezentowany m.in. na Festiwalu Polskich Filmów Fabularnych w Gdyni, Warszawskim Festiwalu Filmowym, Camerimage oraz Nowych Horyzontach. <br/> Pełnometrażowy dokument „Miasto, które wyjechało” miał światową premierę na festiwalu Visions du Réel w Nyonie – jednym z najważniejszych wydarzeń kina dokumentalnego na świecie – gdzie zdobył nagrodę. Film otrzymał także liczne wyróżnienia i nominacje na międzynarodowych festiwalach, a na festiwalu Młodzi i Film w Koszalinie uhonorowano go Wielkim Jantarem za najlepszy debiut dokumentalny."   
    },
    eng:{
        lang: "eng",
        bio: "bio/contact",
        profession: "DIRECTOR | SCRIPTWRITER | CINEMATOGRAPHER",
        contact: "Contact:",
        presskit: "Presskit",
        rights: "©2025 Grzegorz Piekarski. All Rights Reserved.",
        bioDescription: 'Film director and screenwriter, born in Warsaw. A graduate of the Krzysztof Kieślowski Film School in Katowice and the Faculty of Mechatronics at the Warsaw University of Technology. Recipient of the Młoda Polska scholarship from the Ministry of Culture and National Heritage. Participant of the Doc Lab Poland and dok.incubator programs. Member of the Polish Filmmakers Association. <br/> His graduation feature film Slave was screened at the Polish Film Festival in Gdynia, the Warsaw Film Festival, Camerimage, and New Horizons. <br/> His feature-length documentary The Town That Drove Away had its world premiere at Visions du Réel in Nyon – one of the most prestigious documentary film festivals in the world – where it received an award. The film also earned multiple distinctions and nominations at international festivals, and won the Golden Jantar for Best Documentary Debut at the Młodzi i Film Festival in Koszalin.'
    }
}


export const movies = [
//     {
//     pl: {
//         movieTitle: "NOWY TYTUŁ",
//         movieSubtitle: "",
//         production: "",
//         duration: "n",
//         description: "",
//         awards: ["", "", "", ""
//         ]
//     },
//     eng: {
//         movieTitle: "",
//         movieSubtitle: "",
//         production: "",
//         duration: "",
//         description: "",
//         awards:["", "", "", ""
//         ]
//     },
//     photos:[
//         { src: foto3_1, id: 0 },
//         { src: foto3_2, id: 1 },
//         { src: foto3_3, id: 2 },
//         { src: foto3_4, id: 3 }
//     ],    
// },
    {
    pl: {
        movieTitle: "MIASTO, KTÓRE WYJECHAŁO",
        movieSubtitle: "film dokumentalny",
        production: "produkcja: LARMO",
        duration: "2025 / 70 min",
        description: "W Kurdystanie ostatni mieszkańcy antycznego miasta Hasankeyf bezsilnie patrzą, jak dziedzictwo dziewięciu cywilizacji znika pod wodą, po tym jak turecki rząd buduje tamę na rzece Tygrys. Obietnice rozwoju odbierają ludziom ich tożsamość i dawne domy, zastępując je betonowymi, co prawda nowoczesnymi  budowlami, ale pozbawionych dawnej duszy.",
        awards: ["Wygrana - Visions du Réel Nyon - Nagroda Specjalna Jury Młodzieżowego - 2025",
        "Nominacja - Nagrody Międzynarodowego Stowarzyszenia Dokumentalistów - Najlepsze Zdjęcia - 2025",
        "Wygrana - CinemAmbiente Turyn - Główna Nagroda - 2025",
        "Wygrana - Festiwal Debiutów Młodzi i Film w Koszalinie - Wielki Jantar - 2025",
        "Nominacja - Krakowski Festiwal Filmowy - Złoty Lajkonik - 2025",
        "Nominacja - Aegean Film Festival Patmos - Konkurs Główny - 2025",
        "Wygrana - Międzynarodowy Festiwal Filmów Dokumentalnych w Ierapetrze - Nagroda Publiczności - 2025",
        "Nominacja - Nòt Film Fest - Konkurs Główny - 2025",
        "Wygrana - Filmambiente – Międzynarodowy Festiwal Filmów o Środowisku - Najlepsze Zdjęcia - 2025",
        "Wygrana - Festiwal Filmów Ekologicznych w Bozcaadzie - Nagroda Specjalna Jury - 2025",
        "Wygrana - Festiwal Filmów Architektonicznych w Rotterdamie (AFFR) - Główna Nagroda - 2025",
        "Wygrana - CineEco – Międzynarodowy Festiwal Filmów o Środowisku Serra da Estrela - Główna Nagroda - 2025",
        "Wygrana - Lubuskie Lato Filmowe w Łagowie - Złote Grono - 2025",
        "Pokaz - Międzynarodowy Festiwal Filmów Dokumentalnych Porto/Post/Doc - Human Rights in Motion - 2025",
        "Pokaz - Międzynarodowy Festiwal Filmów Dokumentalnych Ji.hlava - Sekcja Constellations (najlepsze nagradzane filmy festiwalowe) - 2025"]
    },
    eng: {
        movieTitle: "THE TOWN THAT DROVE AWAY",
        movieSubtitle: "documentary film",
        production: "production: LARMO",
        duration: "2025 / 70 min",
        description: "In Kurdistan, the last residents of the ancient town of Hasankeyf helplessly watch as the heritage of nine civilizations disappears under the water, after the Turkish government builds a dam on the Tigris River. Promises of development take away their identity and old homes, replacing them with concrete, modern buildings—though lacking the soul they once had.",

        awards:["Winner - Visions du Réel Nyon - Special Youth Jury Prize for Best Medium-Length Film - 2025",
        "Nominee - IDA Documentary Awards - Best Cinematography - 2025",
        "Winner - CinemAmbiente Turin - Grand Prize - 2025",
        "Winner - Debut Festival Young and Film in Koszalin - Grand Jantar - 2025",
        "Nominee - Krakow Film Festival - Golden Hobby Horse - 2025",
        "Nominee - Aegean Film Festival Patmos - Main Competition - 2025",
        "Winner - International Documentary Festival of Ierapetra - Audience Award - 2025",
        "Nominee - Nòt Film Fest - Main Competition - 2025",
        "Winner - Filmambiente – International Environmental Film Festival - Best Cinematography - 2025",
        "Winner - Bozcaada International Festival of Ecological Documentary - Jury Special Award - 2025",
        "Winner - Architecture Film Festival Rotterdam (AFFR) - Grand Prize - 2025",
        "Winner - CineEco – International Environmental Film Festival of Serra da Estrela - Grand Prize - 2025",
        "Winner - Lubuskie Film Summer in Łagów - Golden Grape - 2025",
        "Screening - Porto/Post/Doc Film & Media Festival - Human Rights in Motion - 2025",
        "Screening - Ji.hlava International Documentary Film Festival - Constellations Section (Best Awarded Films from Other Festivals) - 2025"]
    },
    photos:[
        { src: foto2_1, id: 0 },
        { src: foto2_2, id: 1 },
        { src: foto2_3, id: 2 },
        { src: foto2_4, id: 3 }
        // { src: foto2_5, id: 4 }
    ],    
},
    {
    pl: {
        movieTitle: "NIEWOLNIK",
        movieSubtitle: "film fabularny",
        production: "produkcja: SF Katowice",
        duration: "2021 / 29 min",
        description: "Nikodem odbywa wyrok w ramach nowego programu penitencjarnego, polegającego na pracy w domu Mai i Łukasza, którzy mają nad nim pełną władzę. Pozytywne rozpatrzenie apelacji i odzyskanie wolności przez Nikodema zaskakuje domowników. Chociaż mogliby się rozejść i nigdy więcej nie spotkać, pozostają razem na jeszcze jeden dzień.",
        awards: ["Nominacja - Festiwal Filmowy w Gdyni - Konkurs Filmów Krótkometrażowych - 2021",
        "Nominacja - FEST New Directors / New Films - Silver Lynx - 2021",
        "Nominacja - Festiwal Debiutów Młodzi i Film w Koszalinie - Jantar - 2021",
        "Nominacja - Nagroda im. Jana Machulskiego - Najlepsza Reżyseria - 2021",
        "Pokaz - Międzynarodowy Festiwal Sztuki Autorów Zdjęć Filmowych Camerimage - Panorama Etiud Studenckich - 2021",
        "Pokaz - Warszawski Festiwal Filmowy - Sekcja Najlepsze Polskie Filmy Krótkometrażowe - 2021",
        "Pokaz - Międzynarodowy Festiwal Filmowy Nowe Horyzonty - Sekcja Shortlista - 2022"
        ]
    },
    eng: {
        movieTitle: "SLAVE",
        movieSubtitle: "feature film",
        production: "production: SF Katowice",
        duration: "2021 / 29 min",
        description: "Nikodem is serving a sentence as part of a new penitentiary program, working at Maja and Łukasz’s house under their complete control. The positive appeal decision and Nikodem’s release surprise the hosts. Although they could part ways and never meet again, they stay together for one more day.",
        awards:["Nominee - Gdynia Film Festival - Short Film Competition - 2021",
        "Nominee - FEST New Directors / New Films - Silver Lynx - 2021",
        "Nominee - Debut Festival Young and Film in Koszalin - Amber - 2021",
        "Nominee - Jan Machulski Award - Best Directing - 2021",
        "Screening - International Festival of the Art of Cinematographers Camerimage - Student Shorts Panorama - 2021",
        "Screening - Warsaw Film Festival - Best Polish Short Films Section - 2021",
        "Screening - New Horizons International Film Festival - Shortlist Section - 2022"
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


export const medias = [
    { src: media_imdb, href: "https://www.imdb.com/name/nm11128545/?ref_=ttawd_awd_1" },
    { src: media_filmpolski, href: "https://filmpolski.pl/fp/index.php?osoba=11156939" },
    { src: media_1, href: "https://businessdoceurope.com/vdr-medium-length-competition-the-town-that-drove-away-by-grzegorz-piekarski-natalia-pietsch/" },
    { src: media_2, href: "https://www.moderntimes.review/interview-the-town-that-drove-away" },
    { src: media_3, href: "https://www.rainews.it/tgr/piemonte/articoli/2025/06/cinemambiente-vince-il-polacco-the-town-that-drove-away-9734a225-1b5c-4b82-9ab2-1dc201d7ce2e.html" },
    { src: media_4, href: "https://culture.pl/pl/dzielo/miasto-ktore-wyjechalo-rez-grzegorz-piekarski-natalia-pietsch" },
    { src: media_5, href: "https://youtu.be/fp5hTxDyGrU?si=k5KvXE7tEDCnFWRK" },
    { src: media_6, href: "https://audycje.tokfm.pl/podcast/180968,Tureckie-wladze-kontra-Arabowie-i-Kurdowie-Formy-oporu-i-wyrazy-uleglosci-czyli-opowiesc-o-filmie-Miasto-ktore-wyjechalo" },
    { src: media_7, href: "https://trojka.polskieradio.pl/artykul/3530889,najwazniejsi-sa-ludzie-trojka-na-krakowskim-festiwalu-filmowym" },
    { src: media_8, href: "https://www.polskieradio.pl/czworka/audycje/co-ogladac,11603/odcinek/natalia-pietsch-i-grzegorz-piekarski-opowiedzieli-o-filmie-dokumentalnym-miasto-ktore-wyjechalo-czy-warto-zobaczyc-nowy-serial-rekruci,fdfb5c65-8d77-4aed-b001-110caa2aea62" }
];


