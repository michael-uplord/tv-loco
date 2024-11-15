// Get the theme from localStorage or null if not set
let theme = localStorage.getItem('color-mode');

// Set the initial theme based on localStorage or system preference
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
} else if (theme === 'light') {
  document.documentElement.classList.add('light');
} else {
  // Fallback to system preference if no theme is set
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.add('light');
  }
}

// Listen for changes in system color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  // If localStorage is not set, fall back to system preference
  if (!localStorage.getItem('color-mode')) {
    const theme = event.matches ? 'dark' : 'light';

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }
});

// Allow users to toggle theme and save to localStorage
const toggleTheme = (newTheme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('color-mode', 'dark');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-mode', 'light');
  }
};
