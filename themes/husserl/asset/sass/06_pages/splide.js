function deleteSliderStructure(slider, newClassName) {
    var sliderTrack = slider.querySelector('.slider-track');
    var sliderGroup = slider.querySelector('.slider-group');

    slider.innerHTML = sliderGroup.innerHTML;

    sliderTrack.remove();

    slider.className = newClassName; 
}

function restoreSliderStructure(slider, newSliderClassName, trackClassName, groupClassName, nameSlider, navName) {
    var sliderContent = slider.innerHTML;

    slider.innerHTML = "";

    // create 2 empty divs
    var sliderTrack = document.createElement('div');
    var sliderGroup = document.createElement('div');
    var sliderNav = document.createElement('div');

    sliderTrack.className = trackClassName;
    sliderGroup.className = groupClassName;
    sliderNav.className = "splide__arrows " + navName;

    sliderNav.innerHTML = `
        <button class="splide__arrow splide__arrow--prev">
            <img src="../../../../husserl/themes/husserl/asset/img/arrow-right.svg" alt="arrow icon"/>
        </button>
        <ul class="splide__pagination"></ul>
        <button class="splide__arrow splide__arrow--next">
            <img src="../../../../husserl/themes/husserl/asset/img/arrow-right.svg" alt="arrow icon"/>
        </button>
    `;

    slider.appendChild(sliderTrack);
    slider.appendChild(sliderNav);
    sliderTrack.appendChild(sliderGroup);

    sliderGroup.innerHTML = sliderContent;
    slider.className = newSliderClassName; 

    createSplide(nameSlider);
}

function mountSplide(slider) {
    var splide = new Splide(slider, {
        perPage: 4,
        perMove: 1,
        gap: 20,
        breakpoints: {
            768: {
                perPage: 1,
                gap: 0,
            },
            1024: {
                perPage: 2,
                gap: 20,
            },
            1300: {
                perPage: 3,
                gap: 20,
            },
        }
    });
    splide.mount();
}

function createSplide(wichSlider) {
    var itemPictureSlider = document.querySelector(".item-pictures-slider");
    var itemOtherPageSlider = document.querySelector('.item-card-slider');

    if(itemPictureSlider && (wichSlider == "itemPictureSlider" || wichSlider == "all")) {
        var splide = new Splide( ".item-pictures-slider" );
        splide.mount();
    }
    if(itemOtherPageSlider && (wichSlider == "itemOtherPageSlider" || wichSlider == "all")) {
        var newclassSlider = "item-other-pages-section__other-pages-group other-pages-group";
        var items = itemOtherPageSlider.getAttribute('count');

        if (window.innerWidth < 768 && items > 1) {
            mountSplide(itemOtherPageSlider);
        } 
        else if (window.innerWidth < 1024 && items > 2) {
            mountSplide(itemOtherPageSlider);
        } 
        else if (window.innerWidth < 1300 && items > 3) {
            mountSplide(itemOtherPageSlider);
        } 
        else if (items > 4) {
            mountSplide(itemOtherPageSlider);
        } 
        else {
            deleteSliderStructure(itemOtherPageSlider, newclassSlider);
        }
    }
};

function sliderWindowChange() {
    var itemOtherPageGroup = document.querySelector('.other-pages-group');
    var itemOtherPageSlider = document.querySelector('.item-card-slider');

    if(itemOtherPageGroup) {
        var oldClassSlider = "splide item-other-pages-section__item-cards item-cards item-card-slider";
        var oldTrackClass = "splide__track item-card-slider__item-card-slider-track item-card-slider-track slider-track";
        var oldGroupClass = "splide__list item-card-slider-track__item-card-slider-track-list item-card-slider-track-list slider-group";
        var items = itemOtherPageGroup.getAttribute('count');

        if (window.innerWidth < 768  && items > 1) {
            restoreSliderStructure(itemOtherPageGroup, oldClassSlider, oldTrackClass, oldGroupClass, "itemOtherPageSlider", "item-card-nav");
        }
        else if (window.innerWidth < 1024  && items > 2) {
            restoreSliderStructure(itemOtherPageGroup, oldClassSlider, oldTrackClass, oldGroupClass, "itemOtherPageSlider", item-card-nav);
        }
        else if (window.innerWidth < 1300  && items > 3) {
            restoreSliderStructure(itemOtherPageGroup, oldClassSlider, oldTrackClass, oldGroupClass, "itemOtherPageSlider", item-card-nav);
        }
        else if(items > 4) {
            restoreSliderStructure(itemOtherPageGroup, oldClassSlider, oldTrackClass, oldGroupClass, "itemOtherPageSlider", item-card-nav);
        }
    }
    else if(itemOtherPageSlider) {
        var newclassSlider = "item-other-pages-section__other-pages-group other-pages-group";
        var items = itemOtherPageSlider.getAttribute('count');

        if (window.innerWidth < 768 && items <= 1) {
            deleteSliderStructure(itemOtherPageSlider, newclassSlider);
        }
        else if (window.innerWidth < 1024 && window.innerWidth > 768  && items <= 2) {
            deleteSliderStructure(itemOtherPageSlider, newclassSlider);
        }
        else if (window.innerWidth < 1300 && window.innerWidth > 1024  && items <= 3) {
            deleteSliderStructure(itemOtherPageSlider, newclassSlider);
        }
        else if(items <= 4 && window.innerWidth > 1300 ) {
            deleteSliderStructure(itemOtherPageSlider, newclassSlider);
        }
    }
}

// Initial load
window.addEventListener('load', function() {
    var itemPictureSlider = document.querySelector(".item-pictures-slider");
    var itemOtherPageSlider = document.querySelector('.item-card-slider');

    if(itemPictureSlider || itemOtherPageSlider) {
        createSplide("all");
    }
});

// On resize
window.addEventListener('resize', debounce(function() {
    var itemOtherPageGroup = document.querySelector('.other-pages-group');
    var itemOtherPageSlider = document.querySelector('.item-card-slider');

    if(itemOtherPageSlider || itemOtherPageGroup) {
        sliderWindowChange();
    }
}, 200));

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}