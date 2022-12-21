let lastScrollTop = 0;
nav = doucment.getElementById('nav');

window.addEventListener('scroll, function() {
    const scrollTop = widow.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});