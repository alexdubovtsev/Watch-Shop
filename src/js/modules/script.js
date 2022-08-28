// import { isMobile } from "./functions.js"

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const submenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const submenu = document.querySelector(`[data-submenu="${submenuId}"]`);
        if (submenu) {
            const activeLink = document.querySelector('._sub-menu-active-link');
            const activeBlock = document.querySelector('._sub-menu-open');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active-link');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('_sub-menu-active');
            }
            document.documentElement.classList.toggle('_sub-menu-active');
            targetElement.classList.toggle('_sub-menu-active-link');
            submenu.classList.toggle('_sub-menu-open');
        } else {
            console.log("Нет подменю....");
        }
        e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__link-catalog')) {
        document.documentElement.classList.toggle('_catalog-active');
        e.preventDefault();
    }
    if (targetElement.closest('.menu-catalog__btn')) {
        document.documentElement.classList.remove('_catalog-active');

        document.querySelector('._sub-menu-active-link') ? document.querySelector('._sub-menu-active-link').classList.remove('_sub-menu-active-link') : null;
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;

        e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__btn')) {
        //document.documentElement.classList.remove('_catalog-active');

        document.documentElement.classList.remove('_sub-menu-active');
        document.querySelector('._sub-menu-active-link') ? document.querySelector('._sub-menu-active-link').classList.remove('_sub-menu-active-link') : null;
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;

        e.preventDefault();
    }
}
