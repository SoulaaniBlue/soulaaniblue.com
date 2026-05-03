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

// ---------- Inline newsletter forms (keep visitors on‑site) ----------
(function () {
    // Matches every form pointing to Formspree (pop‑up + inline mailing‑list)
    document.addEventListener('submit', function (e) {
        const form = e.target;
        if (!form || form.tagName !== 'FORM') return;
        const action = form.getAttribute('action') || '';
        if (!action.startsWith('https://formspree.io/')) return;

        // Already handled by Formspree's own AJAX? If so, don't double‑handle.
        if (form.dataset.ajax === 'true') return;

        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
            submitBtn.textContent = 'SENDING…';
            submitBtn.disabled = true;
        }

        const formData = new FormData(form);

        fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(function (response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function () {
            const successMsg = document.createElement('div');
            successMsg.className = 'text-center text-gold font-bold mt-4';
            successMsg.textContent = '✓ Thanks for subscribing!';

            // Replace the form with a success message
            form.parentNode.insertBefore(successMsg, form.nextSibling);
            form.style.display = 'none';

            // Also close the newsletter popup if it was the popup form
            const popup = document.getElementById('newsletter-popup');
            if (popup && form.closest('#newsletter-popup')) {
                popup.classList.add('hidden');
            }
        })
        .catch(function () {
            if (submitBtn) {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
            alert('Oops! Something went wrong. Please try again, or email us directly.');
        });
    });
})();