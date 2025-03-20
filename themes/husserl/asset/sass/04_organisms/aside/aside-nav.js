function handleClickAsideNav(element) {
    if(element.classList.contains("browse-item-nav")) {
        localStorage.setItem('openbrowse', "true");
    }
    if(element.classList.contains("filter-item-nav")) {
        localStorage.setItem('openPopUp', "true");
    }
    window.location.href = element.dataset.link;
}

// if the user clicks on a element to open the child element the browser will keep the scrollposition and change the url to reload
function saveBrowseData(event) {
    localStorage.setItem('scrollPosition', window.scrollY);
    localStorage.setItem('openSubNav', "true");
    localStorage.setItem('linkRenew', "yes");
    const element = event.target.closest('.browse-item-link');
    window.location.href = element.dataset.link;
}

// if a page is reloaded on the browse item page. If this reload is effected by clicking on a item to see the child's it will restore the scroll position
function checkAndRestoreState() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    const openSubNav = localStorage.getItem('openSubNav');
    const linkRenew = localStorage.getItem('linkRenew');

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
                const browseTreeStructure = document.getElementsByClassName('browse-tree-structure')[0];
                browseTreeStructure.classList.add("open-treeStructure");
            }
        }
        localStorage.setItem('linkRenew', "no");
    }
}

function handleBrowseClick(browseTreeStructure, browseIcon) {
    const browseOpen = browseTreeStructure.classList.contains("open-treeStructure");

    if (!browseOpen) {
        browseTreeStructure.classList.add("open-treeStructure");
        browseIcon.classList.add("active-item");
    } 
    else {
        browseTreeStructure.classList.remove("open-treeStructure");
        browseIcon.classList.remove("active-item");
    }
}

// if we are on a device smaller than a desktop it will check if the user want to show the browse navigation or want to close it 
function setupBrowseIcon() {
    if (window.innerWidth < 1024) {
        const browseIcon = document.querySelector(".browse-item-nav");
        const browseAside = document.querySelector(".browse-aside");
        const openbrowse = localStorage.getItem('openbrowse');
        const closeIcon = document.querySelector('.close-browse-search-nav-button');

        if (browseAside) {
            const browseTreeStructure = browseAside.getElementsByClassName('browse-tree-structure')[0];
            if (window.innerWidth < 1024) {
                if (openbrowse === "true") {
                    browseTreeStructure.classList.add("open-treeStructure");
                    browseIcon.classList.add("active-item");
                    localStorage.removeItem('openbrowse');
                }
            }

            if (browseIcon) {
                browseIcon.removeEventListener("click", () => {
                    handleBrowseClick(browseTreeStructure, browseIcon);
                });
        
                browseIcon.addEventListener("click", () => {
                    handleBrowseClick(browseTreeStructure, browseIcon);
                });

                closeIcon.removeEventListener("click", () => {
                    handleBrowseClick(browseTreeStructure, browseIcon);
                });
        
                closeIcon.addEventListener("click", () => {
                    handleBrowseClick(browseTreeStructure, browseIcon);
                });
            }
        }
    }
}

function handleFilterClick(facetsList, filterIcon, page) {
    const filterOpen = facetsList.classList.contains("open-facets-list");
    const searchNav = document.querySelector(".search-nav");
    
    if (!filterOpen) {
        facetsList.classList.add("open-facets-list");
        searchNav.classList.add("aside-nav-fixed");
        filterIcon.classList.add("active-item");
        page.classList.add("pageFixed");
    } 
    else {
        facetsList.classList.remove("open-facets-list");
        searchNav.classList.remove("aside-nav-fixed");
        filterIcon.classList.remove("active-item");
        page.classList.remove("pageFixed");
    }
}

// if we are on a device smaller than a desktop it will check if the user want to open the filter navigation or want to close it
function setupFilterIcon() {
    const openPopUp = localStorage.getItem('openPopUp');
    const filterIcon = document.querySelector(".filter-item-nav");
    const page = document.querySelector('.page');
    const facetsList = document.getElementsByClassName('facet-items-content')[0];
    const closeIcon = document.querySelector('.close-browse-search-nav-button');

    if (filterIcon) {
        if (window.innerWidth < 1024) {
            if (openPopUp === "true") {
                const searchNav = document.querySelector(".search-nav");
                facetsList.classList.add("open-facets-list");
                searchNav.classList.add("aside-nav-fixed");
                filterIcon.classList.add("active-item");
                page.classList.add("pageFixed");
                localStorage.removeItem('openPopUp');
            }
        }

        filterIcon.removeEventListener("click", () => {
            handleFilterClick(facetsList, filterIcon, page);
            facetsList.classList.remove("open-facets-list");
        });

        filterIcon.addEventListener("click", () => {
            handleFilterClick(facetsList, filterIcon, page);
        });

        closeIcon.removeEventListener("click", () => {
            handleFilterClick(facetsList, filterIcon, page);
            facetsList.classList.remove("open-facets-list");
        });

        closeIcon.addEventListener("click", () => {
            handleFilterClick(facetsList, filterIcon, page);
        });
    }
}

//This function will replace the search / browse navigation to another div if we are on a device smaller than a dekstop
function moveBrowseSearchNav() {
    const browseSearchNav = document.querySelector('.browse-search-nav');
    const resultWrapper = document.querySelector('.result-wrapper');
    const browseSearchAside = document.querySelector('.browse-search-aside');

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

    setTimeout(() => setupFilterIcon, 2000);
    setTimeout(() => setupBrowseIcon, 2000);
}

// Initial load
window.addEventListener('load', () => {
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
window.addEventListener('resize', () => {
    if(window.location.href.includes('item/browse')) {
        moveBrowseSearchNav();
    }
    if(window.location.href.includes('/search')) {
        moveBrowseSearchNav();
    }
});