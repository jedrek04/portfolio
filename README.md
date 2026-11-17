# portfolio

my personal website, live at **[jedrek.dev](https://jedrek.dev)**

a single page with my projects, work experience and studies. dark, a bit colorful, with some small details like a blinking cursor and tiles that glow where your mouse is.

## stack

- react + vite
- plain css, no frameworks
- docker + nginx for hosting
- self-hosted on my own server

## how it's built

i wanted it to be easy to change without digging through code, so all the content lives in one file, `src/data.js`. adding a new project or job is just copying one block and changing the text.

```
src/
  data.js         all the content
  index.css       all the styles
  App.jsx         puts the sections together
  components/     one small file per section
public/
  cv.pdf
  favicon.svg
```

## run it yourself

you only need docker:

```bash
git clone https://github.com/jedrek04/portfolio.git
cd portfolio
docker compose up -d --build
```

then open http://localhost:8080

or without docker, if you have node:

```bash
npm install
npm run dev
```

## use it for your own site

feel free to fork it. swap the content in `src/data.js`, change the colors at the top of `src/index.css` and you have your own portfolio. a star or a link back is always appreciated :)
