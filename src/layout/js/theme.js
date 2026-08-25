(function () {
    try {
      var stored = localStorage.getItem('skawanctf-theme');
      var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();