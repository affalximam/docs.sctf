(function () {
    var STORAGE_KEY = 'sctf-theme';

    function applyTheme(isDark) {
      document.documentElement.classList.toggle('dark', isDark);
      document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      });
    }

    function setTheme(isDark) {
      applyTheme(isDark);
      try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (e) { /* storage unavailable, theme still applies for this session */ }
    }

    // sync toggle buttons' aria-pressed with whatever the head script already applied
    applyTheme(document.documentElement.classList.contains('dark'));

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setTheme(!document.documentElement.classList.contains('dark'));
      });
    });
  })();