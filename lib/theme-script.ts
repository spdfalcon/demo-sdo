/** Runs before React hydration to sync theme class and avoid mismatch with next-themes. */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;
