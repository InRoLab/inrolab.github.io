# Interaction Robotics Lab — uprava zdrojoveho kodu

Toto je **klasicky viacstrankovy staticky web**. Nie je tu editor.html ani
content.js. Texty, fotografie, odkazy a obsah menis priamo v HTML suboroch.

## Struktura

- `index.html` — uvod: velke logo, popis a 5 fotografii
- `about.html` — laboratorium
- `research.html` — vyskumne smery
- `projects.html` — projekty / temy
- `people.html` — clenovia timu
- `publications.html` — publikacie
- `join.html` — moznosti zapojenia
- `contact.html` — kontakty
- `style.css` — povodny dizajn, layout a responzivita
- `custom.css` — jednoduche upravy stylu a farieb
- `script.js` — iba mobilne menu a aktualny rok
- `assets/` — obrazky a ikona stranky

## 1. Ako upravit text

Otvor napr. `index.html` vo VS Code. Vyhladaj odsek zacínajuci
`At the Interaction Robotics Lab` a prepis priamo text medzi `<p>` a `</p>`.
Na inych podstrankach upravuj analogicky ich vlastne HTML subory.

## 2. Ako zmenit uvodne velke logo

Velke logo je zatial kombinaciou HTML `h1.hero-wordmark` a SVG bloku
`div.hero-emblem` v subore **index.html** (zachovali sme aktualny dizajn).

Ak chces namiesto neho vlozit vlastny obrazok:

1. Skopiruj `moje-logo.png` (alebo `.svg`) do `assets/`.
2. V `index.html` vyhladaj blok `<div class="hero-lockup"`.
3. V jeho vnutri nahrad **cely blok** `<div class="hero-emblem">...` aj
   `<h1 class="hero-wordmark">...` tymto jednym riadkom:

```html
<img class="custom-hero-logo" src="assets/moje-logo.png" alt="Interaction Robotics Lab">
<h1 id="hero-title" class="wordmark-accessible-only">Interaction Robotics Lab</h1>
```

4. Velkost zmenis v `custom.css` v pravidle `.custom-hero-logo`.

*Pozor:* Male logo v lavom hornom rohu ma odlisne CSS triedy `brand-mark`
a `brand-type`, a pouziva sa vo vsetkych 8 HTML suboroch.

## 3. Ako vymenit fotografie v mozaike

Do `assets/` vloz vlastne fotografie (napr. `robot1.jpg`). Potom
v `index.html` vyhladaj `id="hero-gallery"` a uprav cesty:

```html
<figure class="gallery-tile">
  <img src="assets/robot1.jpg" alt="Robot pri manipulacii" loading="lazy">
</figure>
```

Mozaika pozostava z 5 poli a ich rozmery su nastavene v `style.css`
triedou `.gallery-tile:nth-child(...)`.
Existujuce fotky su *ilustracne, nie skutocne fotografie noveho laboratoria*.

## 4. Ako zmenit farby a rozmery

Pouzivaj primarne `custom.css`, ktory sa nacitava po `style.css`.
Priame drobne zmeny nemusis robit v povodnom dlhom CSS.

## 5. Ako pridat clena timu alebo publikaciu

Otvor `people.html` alebo `publications.html`, vyhladaj
`id="people-list"` alebo `id="publications-list"`, skopiruj existujuci
`<article>` a uprav jeho obsah. Pri publikaciach odstran uvodny text
`Publication list under preparation.` a nahrad ho `<article class="publication">`.

## 6. Spustenie a publikovanie

Na lokalny nahlad otvor `index.html` dvojklikom v prehliadaci.
Na pohodlne priebezne upravy odporucame Visual Studio Code a Live Server.
Web je pripraveny na GitHub Pages (nahraj vsetky subory spolu do repozitara).

**Zmena v `index.html` sa neprejavi v `about.html`**, lebo ide o
samostatne podstranky. Horna navigacia a paticka su preto rovnake
v kazdom HTML subore; pri zmene menu ich uprav vo vsetkych suboroch.
