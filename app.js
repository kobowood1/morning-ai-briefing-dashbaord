const segments = Array.from(document.querySelectorAll(".segment"));
const cards = Array.from(document.querySelectorAll(".brief-card"));

function setFilter(filter) {
  segments.forEach((segment) => {
    const active = segment.dataset.filter === filter;
    segment.classList.toggle("active", active);
    segment.setAttribute("aria-pressed", String(active));
  });

  cards.forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.section !== filter;
  });
}

segments.forEach((segment) => {
  segment.addEventListener("click", () => setFilter(segment.dataset.filter));
});
