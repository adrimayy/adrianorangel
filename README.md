# adrianorangel.org

My personal site, a grid of colorful project tiles. Plain HTML, one stylesheet and one small script, served by GitHub Pages at [adrianorangel.org](https://www.adrianorangel.org).

```
index.html     Name, one-line intro, a tile per project (each with a drawing), contact links
atlas.html     Where should you live? (how it was made)
songdeck.html  songdeck (how it was made)
vocab.html     Vocab ladders (how they were made)
ehhs.html      EHHS Chrome Extension
columbia-extension.html  Columbia extension (Chrome and Firefox)
csi.html       Columbia Space Initiative
style.css      Shared styles for every page
atlas-facts.js Fills in the atlas's current counts on index.html and atlas.html
earth-now/     Earth Now, the app itself (www.adrianorangel.org/earth-now/): Earth as the eye would see it from space right now
CNAME          Custom domain for GitHub Pages
```

## One domain for every project

This repository is named `adrimayy.github.io`, which makes it the account's own site, so its domain covers every project on the account: a project repository with GitHub Pages turned on appears at `www.adrianorangel.org/<repository name>/` with nothing to set up, and its old `adrimayy.github.io` address redirects there. The atlas is at [www.adrianorangel.org/where-should-adriano-live](https://www.adrianorangel.org/where-should-adriano-live/). Don't rename this repository or give a project its own custom domain, or that stops.

## Numbers that keep themselves current

The atlas publishes its own counts with each release, in [`data/facts.json`](https://github.com/adrimayy/where-should-adriano-live/blob/main/data/facts.json): release, the day it came out, cities, countries, factors, groups, languages. A number on this site that comes from there is written as `<span data-fact="cities">744</span>`, and `atlas-facts.js` replaces it with the live one when the page opens. The number typed in the page is only what shows if that file can't be reached, so nothing here needs editing when the atlas changes.

## Adding a project

1. Copy one of the project pages, such as `songdeck.html`, and rewrite it. Keep the same three parts: what it is, why I made it, and how it works or what I learned.
2. Add a tile for it in `index.html`: copy a `<a class="card">`, pick a background color for `--bg`, draw a small SVG (200×150), and use the same color as `--c` on the project page's `<body>`. If the project has something working online, the name links to that and a second link, "How it was made", goes to its page here. Otherwise the name links to its page here.
3. Commit and push to `main`. GitHub Pages updates in about a minute.

No build step. Open any page in a browser to preview it.

## Earth Now

`earth-now/` is a whole web app in one folder: `index.html` (everything it draws), `sw.js` (keeps it working with no internet), `manifest.json` and `icon.png` (so a phone can add it to the home screen), and `tex/` (NASA maps of the Earth and Moon, and the star list). It is served from this site, not only from inside Claude, because it needs a normal web address to do two things a page inside Claude is not allowed to do: fetch the current cloud map (every three hours, from [clouds.matteason.co.uk](https://github.com/matteason/live-cloud-maps), which contains modified EUMETSAT data) and store itself for offline use. When `index.html` or anything in `tex/` changes, raise the version in the first line of `sw.js`, or phones that already hold the app keep the old copy.
