document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const offcanvasMenu = document.getElementById('offcanvas-menu');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', function () {
        offcanvasMenu.style.right = '0';
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
    });

    overlay.addEventListener('click', function () {
        offcanvasMenu.style.right = '-250px';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    });
});

