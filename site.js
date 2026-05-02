// ==========================================
// Soulaani Blue – shared site scripts
// ==========================================

// ---------- Mobile menu toggle ----------
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('open');
            this.setAttribute('aria-expanded', !expanded);
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = mobileMenu.classList.contains('open')
                    ? 'fas fa-times'
                    : 'fas fa-bars';
            }
        });

        // Close menu when a link inside it is clicked
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }
});

// ---------- Newsletter popup ----------
(function () {
    const STORAGE_KEY = 'soulaaniNewsletterPopup';
    const POPUP_DELAY = 5000;        // 5 seconds
    const POPUP_EXPIRY_DAYS = 30;    // show again after 30 days

    function getPopupStatus() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;
        try {
            return JSON.parse(stored);
        } catch (e) {
            return null;
        }
    }

    function setPopupShown() {
        const expiry = Date.now() + POPUP_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            shown: true,
            expires: expiry
        }));
    }

    function shouldShowPopup() {
        const status = getPopupStatus();
        if (!status) return true;
        if (!status.shown) return true;
        if (Date.now() > status.expires) return true;
        return false;
    }

    if (shouldShowPopup()) {
        setTimeout(function () {
            const popup = document.getElementById('newsletter-popup');
            if (popup) popup.classList.remove('hidden');
        }, POPUP_DELAY);
    }

    // Close handlers
    document.addEventListener('DOMContentLoaded', function () {
        const closeBtn = document.getElementById('close-popup');
        const popup = document.getElementById('newsletter-popup');

        function closePopup() {
            if (popup) {
                popup.classList.add('hidden');
                setPopupShown();
            }
        }

        if (closeBtn) closeBtn.addEventListener('click', closePopup);
        if (popup) {
            popup.addEventListener('click', function (e) {
                if (e.target === popup) closePopup();
            });
        }

        const form = popup ? popup.querySelector('form') : null;
        if (form) {
            form.addEventListener('submit', function () {
                setPopupShown();
            });
        }
    });
})();
