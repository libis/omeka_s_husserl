document.addEventListener("DOMContentLoaded",function(){var e,r,t,i=document.querySelector(".item-pictures-slider");i&&(new Splide(".item-pictures-slider").mount(),r=i.querySelector(".splide__pagination"),(e=document.createElement("div")).className="item-pictures-slider__item-picture-nav item-picture-nav",r.parentNode.insertBefore(e,r),e.appendChild(r),r=i.querySelector(".splide__arrow--prev"),t=i.querySelector(".splide__arrow--next"),i.contains(r)&&e.insertBefore(r,e.firstChild),i.contains(t)&&e.appendChild(t),i.querySelector(".splide__arrows").remove())});
document.addEventListener("DOMContentLoaded",function(){document.querySelector(".scroll-to-top-button").addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})});
function movePaginationArrows(){var e=document.querySelector(".pagination"),t=e.querySelector(".previous"),n=e.querySelector(".next"),o=e.querySelector(".row-count");e.contains(t)&&e.insertBefore(t,e.firstChild),e.contains(n)&&e.insertBefore(n,o),paginationFunctions(e,t,n)}function paginationFunctions(e,t,n){var o=e.querySelector("form"),a=o.querySelector(".page-input-top"),i=e.querySelector(".page-count"),e=(e.classList.add("big-body-text"),document.createElement("span")),r=(e.textContent="Page",e.className="big-body-text",o.insertBefore(e,o.firstChild),a.classList.add("big-body-text"),document.createElement("span"));function s(){r.textContent=a.value||a.placeholder,a.style.width=r.offsetWidth+"px"}r.className="input-wrapper",a.parentNode.insertBefore(r,a),s(),a.addEventListener("input",s);e=i.textContent.split(" "),o=e[1],1==a.value&&(t.style.opacity="0.3"),o==a.value&&(n.style.opacity="0.3"),t=document.createElement("span");t.className="page-number",t.textContent=e[1],i.textContent=e[0],i.appendChild(t)}window.addEventListener("load",function(){window.location.href.includes("/search")&&movePaginationArrows()});
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".facet-active-value").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.dataset.facetName,t=this.dataset.facetValue,n=(console.log(e),console.log(t),document.getElementById("form-facets"));n.querySelectorAll(`input[name="${e}"][value="${t}"]`).forEach(function(e){e.checked=!1}),n.submit()})})});
function saveBrowseData(e){localStorage.setItem("scrollPosition",window.scrollY),localStorage.setItem("openSubNav","true"),localStorage.setItem("linkRenew","yes");e=e.target;window.location.href=e.dataset.link}function checkAndRestoreState(){let e=localStorage.getItem("scrollPosition");var t=localStorage.getItem("openSubNav");"yes"==localStorage.getItem("linkRenew")&&(e&&setTimeout(function(){document.documentElement.style.scrollBehavior="auto",window.scrollTo(0,parseInt(e,10)),document.documentElement.style.scrollBehavior="smooth"},0),t&&window.innerWidth<1024&&document.getElementsByClassName("browse-tree-structure")[0].classList.add("open-treeStructure"),localStorage.setItem("linkRenew","no"))}function setupBrowseIcon(){var e,t,o;window.innerWidth<1024&&(e=document.querySelector(".browse-item-nav"),t=document.querySelector(".browse-aside"))&&(o=t.getElementsByClassName("browse-tree-structure")[0],e)&&e.addEventListener("click",function(){o.classList.contains("open-treeStructure")?o.classList.remove("open-treeStructure"):o.classList.add("open-treeStructure")})}function setupFilterIcon(){if(window.innerWidth<1024){var e=document.querySelector(".filter-item-nav");let o=document.querySelector(".content");var s=document.getElementsByClassName("facet-items-content")[0];e&&e.addEventListener("click",function(){var e=s.classList.contains("open-facets-list"),t=document.querySelector(".search-nav");e?(s.classList.remove("open-facets-list"),t.classList.remove("aside-nav-fixed"),o.classList.remove("pageFixed")):(s.classList.add("open-facets-list"),t.classList.add("aside-nav-fixed"),o.classList.add("pageFixed"))})}else{var e=document.querySelector(".filter-item-nav"),t=document.querySelector(".content"),s=document.getElementsByClassName("facet-items-content")[0];e&&(e=document.querySelector(".search-nav"),s.classList.remove("open-facets-list"),e.classList.remove("aside-nav-fixed"),t.classList.remove("pageFixed"))}}function moveBrowseSearchNav(){var e=document.querySelector(".browse-search-nav"),t=document.querySelector(".result-wrapper"),o=document.querySelector(".browse-search-aside");window.innerWidth<=1024?o.contains(e)&&t.insertBefore(e,t.firstChild):o.contains(e)||o.insertBefore(e,o.firstChild)}window.addEventListener("load",function(){window.location.href.includes("item/browse")&&(checkAndRestoreState(),setupBrowseIcon(),moveBrowseSearchNav()),window.location.href.includes("/search")&&(setupFilterIcon(),moveBrowseSearchNav())}),window.addEventListener("resize",function(){window.location.href.includes("item/browse")&&(checkAndRestoreState(),setupBrowseIcon(),moveBrowseSearchNav()),window.location.href.includes("/search")&&(setupFilterIcon(),moveBrowseSearchNav())});
document.addEventListener("DOMContentLoaded",function(){let n=document.querySelector(".nav-burger"),t=document.querySelector(".nav-items");var e=document.querySelectorAll(".nav-item");let a=document.querySelector(".content"),o=!1;n.addEventListener("click",function(){o=o?(t.classList.remove("navigation-open"),t.classList.add("nav-non-active"),a.classList.remove("pageFixed"),!1):(t.classList.add("navigation-open"),t.classList.remove("nav-non-active"),a.classList.add("pageFixed"),!0),n.classList.toggle("burger-open")}),e.forEach(function(e){e.addEventListener("click",function(){t.classList.remove("navigation-open"),t.classList.add("nav-non-active"),a.remove("pageFixed"),o=!1,n.classList.remove("burger-open")})})});
function stickySectionFunctions(){var t,s,e,i=document.querySelector(".sticky-section-wrapper");i&&(t=i.querySelector(".info-wrapper-image"),s=i.querySelector(".scrollable-sticky-section"),e=i.querySelector(".sticky-button"),window.innerWidth<1024?e.addEventListener("click",function(){t.classList.contains("be-sticky")?(t.classList.remove("be-sticky"),s.classList.remove("no-sticky"),e.classList.remove("sticky-open"),e.innerHTML='<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>'):(t.classList.add("be-sticky"),s.classList.add("no-sticky"),e.classList.add("sticky-open"),e.innerHTML='<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="19" transform="translate(2 2)" fill="#F7F7F7"/><path d="M2.56934 2L21.9996 21" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/><path d="M2 20.9974L21.6073 2.17217" stroke="#5D2510" stroke-width="2.5" stroke-linecap="round"/></svg>')}):(t.classList.remove("be-sticky"),s.classList.remove("no-sticky"),e.classList.remove("sticky-open"),e.innerHTML='<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 2.35714C22.3047 2.35714 22.6562 2.71071 22.6562 3.14286V18.8473L22.4121 18.5281L15.7715 9.88527C15.5518 9.59554 15.2051 9.42857 14.8438 9.42857C14.4824 9.42857 14.1406 9.59554 13.916 9.88527L9.86328 15.1594L8.37402 13.0625C8.1543 12.7531 7.80273 12.5714 7.42188 12.5714C7.04102 12.5714 6.68945 12.7531 6.46973 13.0674L2.56348 18.5674L2.34375 18.8719V18.8571V3.14286C2.34375 2.71071 2.69531 2.35714 3.125 2.35714H21.875ZM3.125 0C1.40137 0 0 1.40937 0 3.14286V18.8571C0 20.5906 1.40137 22 3.125 22H21.875C23.5986 22 25 20.5906 25 18.8571V3.14286C25 1.40937 23.5986 0 21.875 0H3.125ZM7.03125 9.42857C7.33904 9.42857 7.64381 9.3676 7.92816 9.24914C8.21252 9.13069 8.47089 8.95706 8.68853 8.73818C8.90617 8.5193 9.07881 8.25945 9.19659 7.97347C9.31438 7.68749 9.375 7.38097 9.375 7.07143C9.375 6.76188 9.31438 6.45537 9.19659 6.16939C9.07881 5.88341 8.90617 5.62356 8.68853 5.40468C8.47089 5.1858 8.21252 5.01217 7.92816 4.89371C7.64381 4.77525 7.33904 4.71429 7.03125 4.71429C6.72346 4.71429 6.41869 4.77525 6.13434 4.89371C5.84998 5.01217 5.59161 5.1858 5.37397 5.40468C5.15633 5.62356 4.98369 5.88341 4.86591 6.16939C4.74812 6.45537 4.6875 6.76188 4.6875 7.07143C4.6875 7.38097 4.74812 7.68749 4.86591 7.97347C4.98369 8.25945 5.15633 8.5193 5.37397 8.73818C5.59161 8.95706 5.84998 9.13069 6.13434 9.24914C6.41869 9.3676 6.72346 9.42857 7.03125 9.42857Z" fill="#5D2510"/></svg>'))}window.addEventListener("load",function(){stickySectionFunctions()}),window.addEventListener("resize",function(){stickySectionFunctions()});
document.addEventListener("DOMContentLoaded",function(){function a(s){var e=document.getElementsByClassName("select-items");let n=document.getElementsByClassName("select-form-item");Array.from(n).forEach((e,t)=>{s!==e&&(e.classList.remove("select-arrow-active"),e.classList.remove("select-open"))}),Array.from(e).forEach((e,t)=>{Array.from(n).includes(s)||e.classList.add("select-hide"),s!==e.previousSibling&&e.classList.add("select-hide")})}var e;e=document.getElementsByClassName("search-advanced-item-select"),Array.from(e).forEach(e=>{var t=e.getElementsByTagName("select")[0],s=t.length;let n=document.createElement("DIV");n.setAttribute("class","search-advanced-item-select__select-form-item select-form-item body-text"),n.innerHTML=t.options[t.selectedIndex].innerHTML,e.appendChild(n);var i=document.createElement("DIV");i.setAttribute("class","select-items select-hide");for(let e=0;e<s;e++){var c=document.createElement("DIV");c.setAttribute("class","select-item body-text"),c.innerHTML=t.options[e].innerHTML,c.addEventListener("click",function(e){let s=this.parentNode.parentNode.getElementsByTagName("select")[0],n=this.parentNode.previousSibling;Array.from(s.options).forEach((e,t)=>{e.innerHTML===this.innerHTML&&(s.selectedIndex=t,n.innerHTML=this.innerHTML)}),n.click()}),i.appendChild(c)}e.appendChild(i),n.addEventListener("click",function(e){e.stopPropagation(),a(this),this.nextSibling.classList.toggle("select-hide"),n.classList.toggle("select-open"),this.classList.toggle("select-arrow-active")})}),document.addEventListener("click",a)});