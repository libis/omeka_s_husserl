function saveBrowseData() {
    localStorage.setItem('scrollPosition', window.scrollY);
    localStorage.setItem('openSubNav', "true");
    localStorage.setItem('linkRenew', "yes");
}

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

// Initial load
window.addEventListener('load', function() {
    if(window.location.href.includes('item/browse')) {
        checkAndRestoreState();
        setupBrowseIcon();
    }
});

// On resize
window.addEventListener('resize', function() {
    if(window.location.href.includes('item/browse')) {
        checkAndRestoreState();
        setupBrowseIcon();
    }
});