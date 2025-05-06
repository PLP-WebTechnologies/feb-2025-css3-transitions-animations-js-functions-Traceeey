const btn = document.getElementById('animateBtn');
const toggle = document.getElementById('darkModeToggle');

// Trigger animation
btn.addEventListener('click', () => {
  btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 600);
});

// Load user preference
window.onload = () => {
  const darkPref = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', darkPref);
  toggle.checked = darkPref;
};

// Save preference to localStorage
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('darkMode', toggle.checked);
});
