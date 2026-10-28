# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Właścicielka projektu pisze po polsku — odpowiadaj po polsku.

## Projekt

Jednostronicowa strona-portfolio reżysera Grzegorza Piekarskiego (docelowa domena: gpiekarski.pl). Create React App (`react-scripts` 5), React 18, bez routera i bez backendu.

## Komendy

- `npm start` — serwer deweloperski na `http://localhost:3000`
- `npm run build` — build produkcyjny do `build/`
- `npm test` — Jest w trybie watch; pojedynczy test: `npm test -- -t "nazwa testu"`, jednorazowo bez watch: `npm test -- --watchAll=false`
- `npm run deploy` — build + publikacja na GitHub Pages (gałąź `gh-pages`, pakiet `gh-pages`)

`src/App.test.js` sprawdza, że tytuły wszystkich filmów z `data.js` renderują się w obu językach i działa przełącznik PL/ENG.

## Architektura

- **Cała treść jest w `src/data.js`**, komponenty tylko ją renderują:
  - `siteTexts` — teksty interfejsu w dwóch językach (`pl` / `eng`), w tym `bioDescription`, renderowane przez `dangerouslySetInnerHTML` (można używać HTML, np. `<br>`).
  - `movies` — tablica filmów; każdy ma obiekty `pl` i `eng` (tytuł, podtytuł, produkcja, czas, opis, `awards`) oraz `photos` (`{ src, id }`). Na górze tablicy jest zakomentowany szablon nowego filmu.
  - `medias` — logotypy mediów z linkami do artykułów.
- Zdjęcia i logotypy są importowane w `data.js` z `src/assets/` (filmy w `movieNN/`, media w `media/`). Nowy film = dodać folder ze zdjęciami, importy i obiekt w `movies` (kolejność w tablicy = kolejność na stronie, najnowszy na górze).
- `App.jsx` trzyma stan języka (`'pl'` / `'eng'`) i przełącznik PL/ENG; przekazuje `movie[language]` do `Movie`. Każdy tekst musi istnieć w obu językach.
- `Movie` → `MovieSlider` (karuzela zdjęć, FontAwesome strzałki) + lista `MovieAward`.
- Style w jednym pliku `src/App.css` (zmienne CSS w `:root`, fonty „Now” z `src/fonts/`). Meta/SEO przez `react-helmet` w `App.jsx` oraz w `public/index.html`.

## Deploy — dwa cele, uwaga na `homepage`

Pole `"homepage"` w `package.json` decyduje o ścieżkach w buildzie i musi pasować do celu:

1. **GitHub Pages (wersja pokazowa / robocza)** — `"homepage": "https://ewpie.github.io/grzesiek/"`, potem `npm run deploy`. To jest obecny etap prac.
2. **Hosting produkcyjny (jchost, domena gpiekarski.pl)** — `"homepage": "."`, `npm run build`, a następnie ręczne podmienienie całej zawartości `public_html` (z podfolderami) na **zawartość** folderu `build/` przez menedżer plików hostingu.

`public/.htaccess` (przepisywanie wszystkiego na `index.html`) trafia do buildu i jest potrzebny na hostingu Apache.
