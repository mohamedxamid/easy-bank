const modifiers = {
    menubarTogglerActive: "menubar-toggler--active",
    siteHeaderActive: "site-header--active"
}

const elSiteHeader = document.querySelector('.site-header');
const elMenubarToggler = elSiteHeader.querySelector('.js-menubar-toggler');

if (elMenubarToggler) {
    elMenubarToggler.addEventListener('click', function() {
        elMenubarToggler.classList.toggle(modifiers.menubarTogglerActive);
        elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
    })
}