const buttons = document.querySelectorAll('nav button');
const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('search');

// Filter by category
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

// Live search
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});

// Dark Mode Toggle Logic
const toggle = document.getElementById('darkToggle');

// Check saved theme or default to dark
let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === null) {
  document.body.classList.add('dark');
  toggle.checked = true;
} else {
  document.body.classList.remove('dark');
  toggle.checked = false;
}

// Toggle on change
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Model Modal Viewer
const modal = document.getElementById("modelModal");
const modalViewer = document.getElementById("modalModel");
const closeBtn = document.querySelector(".close");

// When any model is clicked
cards.forEach(card => {
  card.addEventListener('click', () => {
    const modelSrc = card.querySelector("model-viewer").getAttribute("src");
    modalViewer.setAttribute("src", modelSrc);
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
  modalViewer.removeAttribute("src"); // stop rendering
});

// Close if clicking outside modal content
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalViewer.removeAttribute("src");
  }
});
