//nav open and close when click on bruger and close icon
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".nav-burger");
    const navItemsGroup = document.querySelector(".nav-items");
    const navItems = document.querySelectorAll('.nav-item');
    const page = document.querySelector('.content');
    let navopen = false;

    burger.addEventListener("click", function() {
        if(!navopen) {
            navItemsGroup.classList.add("nav-active");
            navItemsGroup.classList.remove("nav-non-active");
            page.classList.add("pageFixed");
            navopen = true;
        }

        else {
            navItemsGroup.classList.remove("nav-active");
            navItemsGroup.classList.add("nav-non-active");
            page.classList.remove("pageFixed");
            navopen = false;
        }

        burger.classList.toggle('burger-open');
    });

    navItems.forEach(function(navItem) {
        navItem.addEventListener("click", function () {
            navItemsGroup.classList.remove("nav-active");
            navItemsGroup.classList.add("nav-non-active");
            page.remove("pageFixed");
            navopen = false;

            burger.classList.remove('burger-open');
        })
    });

});