var body = document.body;
function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");

    if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300); 
        body.classList.remove("no-scroll");
    } else {
        dropdownMenu.style.display = "flex";
        setTimeout(() => {
            dropdownMenu.classList.add("show");
        }, 10); 
        body.classList.add("no-scroll");
    }
}

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-110px"; // Adjust this value to hide the header
    } else {
        // Scrolling up
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
