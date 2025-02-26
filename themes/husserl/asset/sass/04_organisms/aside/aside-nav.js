// if the user clicks on a element to open the child element the browser will keep the scrollposition and change the url to reload
function saveBrowseData(event) {
    localStorage.setItem('scrollPosition', window.scrollY);
    localStorage.setItem('openSubNav', "true");
    localStorage.setItem('linkRenew', "yes");
    var element = event.target;
    window.location.href = element.dataset.link;
}

// if a page is reloaded on the browse item page. If this reload is effected by clicking on a item to see the child's it will restore the scroll position
function checkAndRestoreState() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    const openSubNav = localStorage.getItem('openSubNav');
    var linkRenew = localStorage.getItem('linkRenew');

    if (linkRenew == "yes") {
        if (scrollPosition) {
            setTimeout(function() {
                document.documentElement.style.scrollBehavior = 'auto';
                window.scrollTo(0, parseInt(scrollPosition, 10));
                document.documentElement.style.scrollBehavior = 'smooth';
            }, 0); 
        }
        if (openSubNav) {
            if(window.innerWidth < 1024) {
                var browseTreeStructure = document.getElementsByClassName('browse-tree-structure')[0];
                browseTreeStructure.classList.add("open-treeStructure");
            }
        }
        localStorage.setItem('linkRenew', "no");
    }
}

// if we are on a device smaller than a desktop it will check if the user want to show the browse navigation or want to close it 
function setupBrowseIcon() {
    if (window.innerWidth < 1024) {
        const browseIcon = document.querySelector(".browse-item-nav");
        var browseAside = document.querySelector(".browse-aside");

        if (browseAside) {
            var browseTreeStructure = browseAside.getElementsByClassName('browse-tree-structure')[0];

            if (browseIcon) {
                browseIcon.addEventListener("click", function() {
                    var browseOpen = browseTreeStructure.classList.contains("open-treeStructure");

                    if (!browseOpen) {
                        browseTreeStructure.classList.add("open-treeStructure");
                    } else {
                        browseTreeStructure.classList.remove("open-treeStructure");
                    }
                });
            }
        }
    }
}

// if we are on a device smaller than a desktop it will check if the user want to open the filter navigation or want to close it
function setupFilterIcon() {
    if (window.innerWidth < 1024) {
        const filterIcon = document.querySelector(".filter-item-nav");
        const page = document.querySelector('.content');
        var facetsList = document.getElementsByClassName('facet-items-content')[0];

        if (filterIcon) {
            filterIcon.addEventListener("click", function() {
                var filterOpen = facetsList.classList.contains("open-facets-list");
                var searchNav = document.querySelector(".search-nav");
                
                if (!filterOpen) {
                    facetsList.classList.add("open-facets-list");
                    searchNav.classList.add("aside-nav-fixed");
                    page.classList.add("pageFixed");
                } 
                else {
                    facetsList.classList.remove("open-facets-list");
                    searchNav.classList.remove("aside-nav-fixed");
                    page.classList.remove("pageFixed");
                }
            });
        }
    }
    else {
        const filterIcon = document.querySelector(".filter-item-nav");
        const page = document.querySelector('.content');
        var facetsList = document.getElementsByClassName('facet-items-content')[0];

        if (filterIcon) {
            var searchNav = document.querySelector(".search-nav");
            facetsList.classList.remove("open-facets-list");
            searchNav.classList.remove("aside-nav-fixed");
            page.classList.remove("pageFixed");
        }
    }
}

//This function will replace the search / browse navigation to another div if we are on a device smaller than a dekstop
function moveBrowseSearchNav() {
    var browseSearchNav = document.querySelector('.browse-search-nav');
    var resultWrapper = document.querySelector('.result-wrapper');
    var browseSearchAside = document.querySelector('.browse-search-aside');

    if (window.innerWidth <= 1024) {
        if (browseSearchAside.contains(browseSearchNav)) {
            resultWrapper.insertBefore(browseSearchNav, resultWrapper.firstChild);
        }
    } 
    else {
        if (!browseSearchAside.contains(browseSearchNav)) {
            browseSearchAside.insertBefore(browseSearchNav, browseSearchAside.firstChild);
        }
    }
}

// Initial load
window.addEventListener('load', function() {
    if(window.location.href.includes('item/browse')) {
        checkAndRestoreState();
        setupBrowseIcon();
        moveBrowseSearchNav();
    }
    if(window.location.href.includes('/search')) {
        setupFilterIcon();
        moveBrowseSearchNav();
    }
});

// On resize
window.addEventListener('resize', function() {
    if(window.location.href.includes('item/browse')) {
        checkAndRestoreState();
        setupBrowseIcon();
        moveBrowseSearchNav();
    }
    if(window.location.href.includes('/search')) {
        setupFilterIcon();
        moveBrowseSearchNav();
    }
});