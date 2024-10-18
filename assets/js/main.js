let humberger = document.querySelectorAll(".nav-humberger");
let nav = document.querySelectorAll(".right-part");

humberger.forEach((ham) => {
    ham.addEventListener('click', () => {
        nav.forEach((navItem) => {
            navItem.classList.toggle("active");
        });
    });
});
