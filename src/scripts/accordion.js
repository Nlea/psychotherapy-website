document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    if (!item) return;

    const isActive = item.classList.contains('active');

    // close all items within the same accordion
    const accordion = item.closest('.accordion');
    accordion.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-btn')?.setAttribute('aria-expanded', 'false');
    });

    // when not active, open the item
    if (!isActive) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
