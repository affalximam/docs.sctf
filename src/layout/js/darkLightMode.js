
  (function () {
    try {
      var stored = localStorage.getItem('sctf-theme');
      var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  })();