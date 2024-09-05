const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenuItems = document.querySelector('.mobile-menu-items');
const allMobileMenu = document.querySelectorAll('.mobile-menu-items a');
menuIcon.addEventListener('click', () => {
    mobileMenuItems.classList.add("active")
})

closeIcon.addEventListener('click', () => {
    mobileMenuItems.classList.remove("active")
})

allMobileMenu.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenuItems.classList.remove("active")
    })  // close the menu when a menu item is clicked  // ^^
})
