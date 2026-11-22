# adrianorangel.org

My personal site. Plain HTML, one small stylesheet and one small script, served by GitHub Pages at [adrianorangel.org](https://www.adrianorangel.org).

```
index.html     Name, one-line intro, project list, contact links
atlas.html     Where should you live? (how it was made)
songdeck.html  songdeck (how it was made)
vocab.html     Vocab ladders (how they were made)
csi.html       Columbia Space Initiative
style.css      Shared styles for every page
atlas-facts.js Fills in the atlas's current counts on index.html and atlas.html
CNAME          Custom domain for GitHub Pages
```

## One domain for every project

This repository is named `adrimayy.github.io`, which makes it the account's own site, so its domain covers every project on the account: a project repository with GitHub Pages turned on appears at `www.adrianorangel.org/<repository name>/` with nothing to set up, and its old `adrimayy.github.io` address redirects there. The atlas is at [www.adrianorangel.org/where-should-adriano-live](https://www.adrianorangel.org/where-should-adriano-live/). Don't rename this repository or give a project its own custom domain, or that stops.

## Numbers that keep themselves current

The atlas publishes its own counts with each release, in [`data/facts.json`](https://github.com/adrimayy/where-should-adriano-live/blob/main/data/facts.json): release, the day it came out, cities, countries, factors, groups, languages. A number on this site that comes from there is written as `<span data-fact="cities">744</span>`, and `atlas-facts.js` replaces it with the live one when the page opens. The number typed in the page is only what shows if that file can't be reached, so nothing here needs editing when the atlas changes.

## Adding a project

1. Copy one of the project pages, such as `songdeck.html`, and rewrite it. Keep the same three parts: what it is, why I made it, and how it works or what I learned.
2. Add one line for it to the list in `index.html`. If the project has something working online, the name links to that and a second link, "How it was made", goes to its page here. Otherwise the name links to its page here.
3. Commit and push to `main`. GitHub Pages updates in about a minute.

No build step. Open any page in a browser to preview it.
