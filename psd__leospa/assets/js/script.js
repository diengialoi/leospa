
// Open - Close Menu mobile icon
const menuMobile = document.querySelector('.js-header__menu-mobile')
const modalMobile = document.querySelector('.js-modal')
const headerNav = document.querySelector('.js-header__nav')
        // toggle menu mobile
        function toggleMenuMobile() {
            headerNav.classList.toggle  ('open')
            modalMobile.style.display = 'flex'
        }
menuMobile.addEventListener('click', toggleMenuMobile)

        // Đóng menu mobile khi click modal

        function closeMenuMobile() {
            headerNav.classList.remove('open')
            modalMobile.style.display = 'none'
        }
modalMobile.addEventListener('click', closeMenuMobile)
