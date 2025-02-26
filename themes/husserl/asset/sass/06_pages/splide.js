document.addEventListener( "DOMContentLoaded", function() {
    var itemPictureSlider = document.querySelector(".item-pictures-slider");

    if(itemPictureSlider) {
        var splide = new Splide( ".item-pictures-slider" );
        splide.mount();

        //create a div and put it as wrapper around the splide navigation
        var splidePagination = itemPictureSlider.querySelector(".splide__pagination");
        const splideNavigationWrapper = document.createElement("div");
        splideNavigationWrapper.className = "item-pictures-slider__item-picture-nav item-picture-nav";
        splidePagination.parentNode.insertBefore(splideNavigationWrapper, splidePagination);
        splideNavigationWrapper.appendChild(splidePagination);

        var previousButton = itemPictureSlider.querySelector(".splide__arrow--prev");
        var nextButton = itemPictureSlider.querySelector(".splide__arrow--next");

        if (itemPictureSlider.contains(previousButton)) {
            splideNavigationWrapper.insertBefore(previousButton, splideNavigationWrapper.firstChild);
        }

        if (itemPictureSlider.contains(nextButton)) {
            splideNavigationWrapper.appendChild(nextButton);
        }

        var splideArrows = itemPictureSlider.querySelector(".splide__arrows");
        splideArrows.remove();
    }
});