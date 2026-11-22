// The atlas publishes its own counts with each release (data/facts.json in its repository).
// This puts them into every <span data-fact="cities">744</span> on the page, so the numbers shown here are
// the live release's. The number written in the page is what shows if the file can't be reached.
fetch('https://www.adrianorangel.org/where-should-adriano-live/data/facts.json')
  .then(r => (r.ok ? r.json() : Promise.reject()))
  .then(facts => {
    for (const el of document.querySelectorAll('[data-fact]')) {
      const v = facts[el.dataset.fact];
      if (typeof v === 'number' || typeof v === 'string') el.textContent = v;
    }
  })
  .catch(() => {});
