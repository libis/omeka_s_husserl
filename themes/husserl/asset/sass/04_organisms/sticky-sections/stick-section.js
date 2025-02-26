function stickySectionFunctions() { 
    var stickysection = document.querySelector('.sticky-section-wrapper');

    if(stickysection) {
        var image = stickysection.querySelector('.info-wrapper-image');
        var scrollableStickSection = stickysection.querySelector('.scrollable-sticky-section');
        var openImageButton = stickysection.querySelector('.sticky-button');

        if (window.innerWidth < 1024) {
            openImageButton.addEventListener("click", function() {
                var imageSticky = image.classList.contains("be-sticky");
                
                if (!imageSticky) {
                    image.classList.add("be-sticky");
                    scrollableStickSection.classList.add("no-sticky");
                    openImageButton.classList.add('sticky-open');

                    openImageButton.innerHTML = '<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="19" transform="translate(2 2)" fill="#F7F7F7"/><path d="M2.56934 2L21.9996 21" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/><path d="M2 20.9974L21.6073 2.17217" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/></svg>';
                } 

                else {
                    image.classList.remove("be-sticky");
                    scrollableStickSection.classList.remove("no-sticky");
                    openImageButton.classList.remove('sticky-open');
                    openImageButton.innerHTML = '<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>';
                }
            });
        }
        else {
            image.classList.remove("be-sticky");
            scrollableStickSection.classList.remove("no-sticky");
            openImageButton.classList.remove('sticky-open');

            openImageButton.innerHTML = '<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>';
        }
    }
}

// Initial load
window.addEventListener('load', function() {
    stickySectionFunctions();
});

// On resize
window.addEventListener('resize', function() {
    stickySectionFunctions();
});