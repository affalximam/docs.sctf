
  (function () {
    var STORAGE_KEY = 'sctf-theme';

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      });
    }

    function setTheme(theme) {
      applyTheme(theme);
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage unavailable, theme still applies for this session */ }
    }

    // sync toggle buttons' aria-pressed with whatever the head script already set
    applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  })();