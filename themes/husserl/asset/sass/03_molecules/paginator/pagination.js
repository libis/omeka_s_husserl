//This function will replace the pagination arrows
function movePaginationArrows() {
    var paginationNav = document.querySelector('.pagination');

    if(paginationNav) {
        var previousButton = paginationNav.querySelector('.previous');
        var nextButton = paginationNav.querySelector('.next');
        var rowCounter = paginationNav.querySelector('.row-count');

        if (paginationNav.contains(previousButton)) {
            paginationNav.insertBefore(previousButton, paginationNav.firstChild);
        }

        if (paginationNav.contains(nextButton)) {
            paginationNav.insertBefore(nextButton, rowCounter);
        }

        paginationFunctions(paginationNav, previousButton, nextButton);
    }
}

function paginationFunctions(pagination, previousButton, nextButton) {
    const form = pagination.querySelector('form');

    if(form) {
        var input = form.querySelector('.page-input-top');
        const endpage = pagination.querySelector('.page-count');

        pagination.classList.add('big-body-text');

        // add span element for the text page
        const Pagespan = document.createElement('span');
        Pagespan.textContent = 'Page';
        Pagespan.className = 'big-body-text';

        form.insertBefore(Pagespan, form.firstChild);

        if(input) {
            // add class on the input field
            input.classList.add('big-body-text');

            //add span for flexible width input field
            var inputSpan = document.createElement('span');
            inputSpan.className = 'input-wrapper';
            input.parentNode.insertBefore(inputSpan, input);

            //make input flexible 
            function adjustInputWidth() {
                inputSpan.textContent = input.value || input.placeholder;
                input.style.width = inputSpan.offsetWidth + 'px';
            }
            
            // change width when page is loaded
            adjustInputWidth();
            
            // change width when input change
            input.addEventListener('input', adjustInputWidth);

            //change opacity of buttons when page is first or last
            const endpagetext = endpage.textContent;
            const endpageParts = endpagetext.split(' ');
            const endpageNumber = endpageParts[1];

            if (input.value == 1) {
                previousButton.style.opacity = '0.3';
            }
            if (endpageNumber == input.value) {
                nextButton.style.opacity = '0.3';
            }
            if (input.value == 1 && endpageNumber == input.value) {
                pagination.style.display = "none";
            }
            
            const numberSpan = document.createElement('span');
            numberSpan.className = 'page-number';
            numberSpan.textContent = endpageParts[1];
            endpage.textContent = endpageParts[0];
            endpage.appendChild(numberSpan);
        }
    }
}

// Initial load
window.addEventListener('load', function() {
    if(window.location.href.includes('/search')) {
        movePaginationArrows();
    }
    else if(window.location.href.includes('/item/browse')) {
        movePaginationArrows();
    }
    else if(window.location.href.includes('/item?')) {
        movePaginationArrows();
    }
});