// Función para cambiar el tema
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Actualizar el logo
  updateLogo(newTheme);
  
  // Actualizar el icono del botón
  updateThemeIcon(newTheme);
}

// Función para actualizar el logo según el tema
function updateLogo(theme) {
  const logo = document.querySelector('.logo-representativo');
  if (logo) {
    if (theme === 'light') {
      logo.src = './assets/LogoClaro.png';
      logo.alt = 'Logo Clash of Time';
    } else {
      logo.src = './assets/LogoOscuro.png';
      logo.alt = 'Logo Clash of Time';
    }
  }
}

// Función para actualizar el icono del botón
function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? 'Dark' : 'Light';
  }
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const html = document.documentElement;
  html.setAttribute('data-theme', savedTheme);
  
  updateLogo(savedTheme);
  updateThemeIcon(savedTheme);
  
  // Agregar el event listener al botón
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

