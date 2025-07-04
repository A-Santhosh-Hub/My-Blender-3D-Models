const search = document.getElementById("search");
const buttons = document.querySelectorAll("nav button");
const cards = document.querySelectorAll(".card");

// Search Filter
search.addEventListener("keyup", () => {
  const term = search.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "" : "none";
  });
});

// Category Filter
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      card.style.display = (filter === "all" || category === filter) ? "" : "none";
    });
  });
});
