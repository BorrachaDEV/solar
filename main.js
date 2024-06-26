let ul = document.querySelector('nav .ul');

function openMenu() {
    console.log('openMenu called');
    ul.classList.add('open');
}

function closeMenu() {
    console.log('closeMenu called');
    ul.classList.remove('open');
}
