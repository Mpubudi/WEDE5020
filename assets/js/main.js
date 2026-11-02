/* EcoReach Youth Foundation — Part 3 JavaScript enhancements */
(function () {
  'use strict';

  // Accessible responsive navigation.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close menu' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  // Live project search with accessible result feedback.
  const search = document.querySelector('#project-search');
  const projectList = document.querySelector('#project-list');
  const searchStatus = document.querySelector('#search-status');
  if (search && projectList) {
    const cards = Array.from(projectList.querySelectorAll('.card'));
    search.addEventListener('input', function () {
      const term = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach(function (card) {
        const match = card.textContent.toLocaleLowerCase().includes(term);
        card.hidden = !match;
        if (match) visible += 1;
      });
      if (searchStatus) searchStatus.textContent = visible + (visible === 1 ? ' project found.' : ' projects found.');
    });
  }

  // Click-to-enlarge image gallery (lightbox).
  const lightbox = document.querySelector('#image-lightbox');
  if (lightbox) {
    const lightboxImage = lightbox.querySelector('img');
    const caption = lightbox.querySelector('p');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let previousFocus = null;
    document.querySelectorAll('.gallery-image').forEach(function (image) {
      image.addEventListener('click', function () {
        previousFocus = document.activeElement;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        caption.textContent = image.dataset.lightbox || image.alt;
        lightbox.hidden = false;
        closeButton.focus();
      });
    });
    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImage.removeAttribute('src');
      if (previousFocus) previousFocus.focus();
    }
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (event) {
      if (!lightbox.hidden && event.key === 'Escape') closeLightbox();
    });
  }

  // Client-side validation and AJAX form submission to the PHP handler.
  document.querySelectorAll('.ajax-form').forEach(function (form) {
    const status = form.querySelector('.form-status');
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () { field.removeAttribute('aria-invalid'); });
      field.addEventListener('change', function () { field.removeAttribute('aria-invalid'); });
    });
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      let firstInvalid = null;
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        if (field.type === 'hidden' || field.disabled) return;
        let valid = field.checkValidity();
        if (field.type === 'tel' && field.value.trim()) valid = /^[+]?[0-9 ()-]{7,20}$/.test(field.value.trim());
        field.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        if (status) { status.classList.add('error'); status.textContent = 'Please check the highlighted fields and correct the information.'; }
        return;
      }
      const button = form.querySelector('button[type="submit"]');
      const originalText = button ? button.textContent : '';
      if (button) { button.disabled = true; button.textContent = 'Submitting…'; }
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || 'The form could not be submitted.');
        if (status) { status.classList.add('success'); status.textContent = result.message || 'Thank you. Your information has been received.'; }
        form.reset();
        form.querySelectorAll('[aria-invalid]').forEach(function (field) { field.removeAttribute('aria-invalid'); });
      } catch (error) {
        if (status) { status.classList.add('error'); status.textContent = error.message + ' Please try again or contact the organisation directly.'; }
      } finally {
        if (button) { button.disabled = false; button.textContent = originalText; }
      }
    });
  });
})();
