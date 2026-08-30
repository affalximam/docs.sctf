(function() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('close-sidebar');

    function openSidebar() {
    mobileSidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
    mobileSidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    }

    if (toggleBtn) {
    toggleBtn.addEventListener('click', openSidebar);
    }

    if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
    overlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar on link click (mobile)
    const mobileLinks = mobileSidebar.querySelectorAll('a');
    mobileLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
    });
})();