const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.art-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const dialog = document.getElementById('art-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogMedium = document.getElementById('dialog-medium');
const dialogDimensions = document.getElementById('dialog-dimensions');
const dialogYear = document.getElementById('dialog-year');
const dialogArt = document.getElementById('dialog-art');

function resetDialogArtwork(sourceButton) {
  dialogArt.className = 'dialog-artwork artwork-placeholder';
  const sourcePlaceholder = sourceButton.querySelector('.artwork-placeholder');
  [...sourcePlaceholder.classList].forEach(className => {
    if (className.startsWith('tone-')) dialogArt.classList.add(className);
  });
}

document.querySelectorAll('.art-open').forEach(button => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.title;
    dialogMedium.textContent = button.dataset.medium;
    dialogDimensions.textContent = button.dataset.dimensions;
    dialogYear.textContent = button.dataset.year;
    resetDialogArtwork(button);

    const image = button.dataset.image;
    if (image) {
      dialogArt.style.background = `center / cover no-repeat url("${image}")`;
    } else {
      dialogArt.style.background = '';
    }

    dialog.showModal();
  });
});

document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());

dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog?.open) dialog.close();
});
