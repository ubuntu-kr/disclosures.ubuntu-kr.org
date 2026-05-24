const sideNavigation = document.getElementById("drawer");

/**
 * Setup Side Drawer to work in Mobile Devices
 * 
 * @param {HTMLElement} sideNavigation The side navigation element
 */
function setupNavigation(sideNavigation) {
    /**
     * Close Drawer with Escape Key
     * @param {KeyboardEvent} e Keyboard key down event
     */
    function closeDrawerByKey(e) {
        if (e.key === "Escape") {
            toggleDrawer(sideNavigation, false);
        }
    }

    /**
     * Toggle drawer by buttons
     * @param {Event} e Button click event
     * @param {HTMLElement} side Side Navigation Element
     */
    function toggleDrawerByButton(e, side) {
        e.preventDefault();

        if (side) {
            side.classList.remove("is-drawer-hidden");
            toggleDrawer(side, !side.classList.contains("is-drawer-expanded"));
        }
    }

    const toggles = sideNavigation.querySelectorAll(".js-drawer-toggle");
    const drawerPart = sideNavigation.querySelector(".p-side-navigation__drawer");
    
    drawerPart.addEventListener("animationend", () => {
        if (!sideNavigation.classList.contains("is-drawer-expanded")) {
            sideNavigation.classList.add("is-drawer-hidden");
        }
    });
    toggles.forEach(function (toggle) {
        toggle.addEventListener("click", (event) => {toggleDrawerByButton(event, sideNavigation)});
    });
    
    window.addEventListener("keydown", (e) => {closeDrawerByKey(e)});
}

/**
 * Toggles the expanded/collapsed classes on side navigation element.
 * 
 * @param {HTMLElement} sideNavigation The side navigation element.
 * @param {Boolean} show Whether to show or hide the drawer.
 */
function toggleDrawer(sideNavigation, show) {
    expandedSidenavContainer = show ? sideNavigation : null;
    const toggleButtonOutsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle, .js-drawer-toggle');
    const toggleButtonInsideDrawer = sideNavigation.querySelector('.p-side-navigation__toggle--in-drawer');

    if (sideNavigation) {
        if (show) {
            sideNavigation.classList.remove('is-drawer-collapsed');
            sideNavigation.classList.add('is-drawer-expanded');

            toggleButtonInsideDrawer.focus();
            toggleButtonOutsideDrawer.setAttribute('aria-expanded', true);
            toggleButtonInsideDrawer.setAttribute('aria-expanded', true);
        } else {
            sideNavigation.classList.remove('is-drawer-expanded');
            sideNavigation.classList.add('is-drawer-collapsed');

            toggleButtonOutsideDrawer.focus();
            toggleButtonOutsideDrawer.setAttribute('aria-expanded', false);
            toggleButtonInsideDrawer.setAttribute('aria-expanded', false);
        }
    }
}

setupNavigation(sideNavigation);
