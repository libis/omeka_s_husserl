function deleteSliderStructure(e,r){var t=e.querySelector(".slider-track"),i=e.querySelector(".slider-group");e.innerHTML=i.innerHTML,t.remove(),e.className=r}function restoreSliderStructure(e,r,t,i,n,d){var o=e.innerHTML,a=(e.innerHTML="",document.createElement("div")),l=document.createElement("div"),s=document.createElement("div");a.className=t,l.className=i,s.className="splide__arrows "+d,s.innerHTML=`
        <button class="splide__arrow splide__arrow--prev">
            <img src="../../../../husserl/themes/husserl/asset/img/arrow-right.svg" alt="arrow icon"/>
        </button>
        <ul class="splide__pagination"></ul>
        <button class="splide__arrow splide__arrow--next">
            <img src="../../../../husserl/themes/husserl/asset/img/arrow-right.svg" alt="arrow icon"/>
        </button>
    `,e.appendChild(a),e.appendChild(s),a.appendChild(l),l.innerHTML=o,e.className=r,createSplide(n)}function mountSplide(e){new Splide(e,{perPage:4,perMove:1,gap:20,breakpoints:{768:{perPage:1,gap:0},1024:{perPage:2,gap:20},1300:{perPage:3,gap:20}}}).mount()}function createSplide(e){var r=document.querySelector(".item-pictures-slider"),t=document.querySelector(".item-card-slider");!r||"itemPictureSlider"!=e&&"all"!=e||new Splide(".item-pictures-slider").mount(),!t||"itemOtherPageSlider"!=e&&"all"!=e||(r=t.getAttribute("count"),window.innerWidth<768&&1<r||window.innerWidth<1024&&2<r||window.innerWidth<1300&&3<r||4<r?mountSplide(t):deleteSliderStructure(t,"item-other-pages-section__other-pages-group other-pages-group"))}function sliderWindowChange(){var e,r,t,i,n=document.querySelector(".other-pages-group"),d=document.querySelector(".item-card-slider");n?(e="splide item-other-pages-section__item-cards item-cards item-card-slider",r="splide__track item-card-slider__item-card-slider-track item-card-slider-track slider-track",t="splide__list item-card-slider-track__item-card-slider-track-list item-card-slider-track-list slider-group",i=n.getAttribute("count"),window.innerWidth<768&&1<i?restoreSliderStructure(n,e,r,t,"itemOtherPageSlider","item-card-nav"):(window.innerWidth<1024&&2<i||window.innerWidth<1300&&3<i||4<i)&&restoreSliderStructure(n,e,r,t,"itemOtherPageSlider",item-card-nav)):d&&(n="item-other-pages-section__other-pages-group other-pages-group",i=d.getAttribute("count"),window.innerWidth<768&&i<=1||window.innerWidth<1024&&768<window.innerWidth&&i<=2||window.innerWidth<1300&&1024<window.innerWidth&&i<=3||i<=4&&1300<window.innerWidth)&&deleteSliderStructure(d,n)}function debounce(r,t){let i;return function(...e){clearTimeout(i),i=setTimeout(()=>r.apply(this,e),t)}}window.addEventListener("load",function(){var e=document.querySelector(".item-pictures-slider"),r=document.querySelector(".item-card-slider");(e||r)&&createSplide("all")}),window.addEventListener("resize",debounce(function(){var e=document.querySelector(".other-pages-group");(document.querySelector(".item-card-slider")||e)&&sliderWindowChange()},200));
document.addEventListener("DOMContentLoaded",function(){document.querySelector(".scroll-to-top-button").addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})});
function movePaginationArrows(){var e,t,n,o=document.querySelector(".pagination");o&&(e=o.querySelector(".previous"),t=o.querySelector(".next"),n=o.querySelector(".row-count"),o.contains(e)&&o.insertBefore(e,o.firstChild),o.contains(t)&&o.insertBefore(t,n),paginationFunctions(o,e,t))}function paginationFunctions(e,t,n){var o,i,a,r,s=e.querySelector("form");function c(){a.textContent=o.value||o.placeholder,o.style.width=a.offsetWidth+"px"}s&&(o=s.querySelector(".page-input-top"),i=e.querySelector(".page-count"),e.classList.add("big-body-text"),(r=document.createElement("span")).textContent="Page",r.className="big-body-text",s.insertBefore(r,s.firstChild),o)&&(o.classList.add("big-body-text"),(a=document.createElement("span")).className="input-wrapper",o.parentNode.insertBefore(a,o),c(),o.addEventListener("input",c),s=(r=i.textContent.split(" "))[1],1==o.value&&(t.style.opacity="0.3"),s==o.value&&(n.style.opacity="0.3"),1==o.value&&s==o.value&&(e.style.display="none"),(t=document.createElement("span")).className="page-number",t.textContent=r[1],i.textContent=r[0],i.appendChild(t))}window.addEventListener("load",function(){(window.location.href.includes("/search")||window.location.href.includes("/item/browse")||window.location.href.includes("/item?"))&&movePaginationArrows()});
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".facet-active-value").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.dataset.facetName,t=this.dataset.facetValue,n=(console.log(e),console.log(t),document.getElementById("form-facets"));n.querySelectorAll(`input[name="${e}"][value="${t}"]`).forEach(function(e){e.checked=!1}),n.submit()})})});
function saveBrowseData(e){localStorage.setItem("scrollPosition",window.scrollY),localStorage.setItem("openSubNav","true"),localStorage.setItem("linkRenew","yes");e=e.target.closest(".browse-item-link");window.location.href=e.dataset.link}function checkAndRestoreState(){let e=localStorage.getItem("scrollPosition");var t=localStorage.getItem("openSubNav");"yes"==localStorage.getItem("linkRenew")&&(e&&setTimeout(function(){document.documentElement.style.scrollBehavior="auto",window.scrollTo(0,parseInt(e,10)),document.documentElement.style.scrollBehavior="smooth"},0),t&&window.innerWidth<1024&&document.getElementsByClassName("browse-tree-structure")[0].classList.add("open-treeStructure"),localStorage.setItem("linkRenew","no"))}function setupBrowseIcon(){if(window.innerWidth<1024){let e=document.querySelector(".browse-item-nav"),t=document.querySelector(".browse-aside");var s;t&&(s=t.getElementsByClassName("browse-tree-structure")[0],e)&&e.addEventListener("click",function(){s.classList.contains("open-treeStructure")?(s.classList.remove("open-treeStructure"),e.classList.remove("active-item")):(s.classList.add("open-treeStructure"),e.classList.add("active-item"))})}}function setupFilterIcon(){if(window.innerWidth<1024){let s=document.querySelector(".filter-item-nav"),o=document.querySelector(".content");var n=document.getElementsByClassName("facet-items-content")[0];s&&s.addEventListener("click",function(){var e=n.classList.contains("open-facets-list"),t=document.querySelector(".search-nav");e?(n.classList.remove("open-facets-list"),t.classList.remove("aside-nav-fixed"),s.classList.remove("active-item"),o.classList.remove("pageFixed")):(n.classList.add("open-facets-list"),t.classList.add("aside-nav-fixed"),s.classList.add("active-item"),o.classList.add("pageFixed"))})}else{var e=document.querySelector(".filter-item-nav"),t=document.querySelector(".content"),n=document.getElementsByClassName("facet-items-content")[0];e&&(e=document.querySelector(".search-nav"),n.classList.remove("open-facets-list"),e.classList.remove("aside-nav-fixed"),t.classList.remove("pageFixed"))}}function moveBrowseSearchNav(){var e=document.querySelector(".browse-search-nav"),t=document.querySelector(".result-wrapper"),s=document.querySelector(".browse-search-aside");window.innerWidth<=1024?s.contains(e)&&t.insertBefore(e,t.firstChild):s.contains(e)||s.insertBefore(e,s.firstChild)}window.addEventListener("load",function(){window.location.href.includes("item/browse")&&(checkAndRestoreState(),setupBrowseIcon(),moveBrowseSearchNav()),window.location.href.includes("/search")&&(setupFilterIcon(),moveBrowseSearchNav())}),window.addEventListener("resize",function(){window.location.href.includes("item/browse")&&(checkAndRestoreState(),setupBrowseIcon(),moveBrowseSearchNav()),window.location.href.includes("/search")&&(setupFilterIcon(),moveBrowseSearchNav())});
document.addEventListener("DOMContentLoaded",function(){let n=document.querySelector(".nav-burger"),t=document.querySelector(".nav-items");var e=document.querySelectorAll(".nav-item");let a=document.querySelector(".content"),o=!1;n.addEventListener("click",function(){o=o?(t.classList.remove("navigation-open"),t.classList.add("nav-non-active"),a.classList.remove("pageFixed"),!1):(t.classList.add("navigation-open"),t.classList.remove("nav-non-active"),a.classList.add("pageFixed"),!0),n.classList.toggle("burger-open")}),e.forEach(function(e){e.addEventListener("click",function(){t.classList.remove("navigation-open"),t.classList.add("nav-non-active"),a.remove("pageFixed"),o=!1,n.classList.remove("burger-open")})})});
function stickySectionFunctions(){var t,s,e,i=document.querySelector(".sticky-section-wrapper");i&&(t=i.querySelector(".info-wrapper-image"),s=i.querySelector(".scrollable-sticky-section"),e=i.querySelector(".sticky-button"),window.innerWidth<1024?e.addEventListener("click",function(){t.classList.contains("be-sticky")?(t.classList.remove("be-sticky"),s.classList.remove("no-sticky"),e.classList.remove("sticky-open"),e.innerHTML='<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>'):(t.classList.add("be-sticky"),s.classList.add("no-sticky"),e.classList.add("sticky-open"),e.innerHTML='<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="19" transform="translate(2 2)" fill="#F7F7F7"/><path d="M2.56934 2L21.9996 21" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/><path d="M2 20.9974L21.6073 2.17217" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/></svg>')}):(t.classList.remove("be-sticky"),s.classList.remove("no-sticky"),e.classList.remove("sticky-open"),e.innerHTML='<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>'))}window.addEventListener("load",function(){stickySectionFunctions()}),window.addEventListener("resize",function(){stickySectionFunctions()});
document.addEventListener("DOMContentLoaded",function(){function a(s){var e=document.getElementsByClassName("select-items");let n=document.getElementsByClassName("select-form-item");Array.from(n).forEach((e,t)=>{s!==e&&(e.classList.remove("select-arrow-active"),e.classList.remove("select-open"))}),Array.from(e).forEach((e,t)=>{Array.from(n).includes(s)||e.classList.add("select-hide"),s!==e.previousSibling&&e.classList.add("select-hide")})}var e;e=document.getElementsByClassName("search-advanced-item-select"),Array.from(e).forEach(e=>{var t=e.getElementsByTagName("select")[0],s=t.length;let n=document.createElement("DIV");n.setAttribute("class","search-advanced-item-select__select-form-item select-form-item body-text"),n.innerHTML=t.options[t.selectedIndex].innerHTML,e.appendChild(n);var i=document.createElement("DIV");i.setAttribute("class","select-items select-hide");for(let e=0;e<s;e++){var c=document.createElement("DIV");c.setAttribute("class","select-item body-text"),c.innerHTML=t.options[e].innerHTML,c.addEventListener("click",function(e){let s=this.parentNode.parentNode.getElementsByTagName("select")[0],n=this.parentNode.previousSibling;Array.from(s.options).forEach((e,t)=>{e.innerHTML===this.innerHTML&&(s.selectedIndex=t,n.innerHTML=this.innerHTML)}),n.click()}),i.appendChild(c)}e.appendChild(i),n.addEventListener("click",function(e){e.stopPropagation(),a(this),this.nextSibling.classList.toggle("select-hide"),n.classList.toggle("select-open"),this.classList.toggle("select-arrow-active")})}),document.addEventListener("click",a)});