document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const submenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const submenu = document.querySelector(`[data-submenu="${submenuId}"]`);
        if (submenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
            }
            targetElement.classList.toggle('_sub-menu-active');
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
}
