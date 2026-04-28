function setUpRowAdvancedSearch(wrapper) {
    const customSelectElements = wrapper.getElementsByTagName("select");

    // Create a div around all elements of select
    const allSelectWrapper = document.createElement("DIV");
    allSelectWrapper.className = "all-select-wrapper";
    wrapper.insertBefore(allSelectWrapper, wrapper.firstChild);

    // Move all select elements into the allSelectWrapper
    Array.from(customSelectElements).forEach(selectElement => {
        // Create a div around each select element
        const selectWrapper = document.createElement("DIV");
        selectWrapper.className = "all-select-wrapper__select-wrapper select-wrapper";
        
        // Append the select element to its wrapper
        selectWrapper.appendChild(selectElement);
        
        // Append the individual wrapper to the allSelectWrapper
        allSelectWrapper.appendChild(selectWrapper);
    });

    const allSelectWrappers = wrapper.querySelectorAll(".select-wrapper");

    allSelectWrappers.forEach(selectWrapper => {
        const selectItem = selectWrapper.querySelector("select");

        // Function of select.js
        customSelect(selectWrapper, selectItem);
    });
}

function setUpAdvancedForm() {
    const advancedSearchForm = document.querySelector(".search-filters-advanced");

    if (advancedSearchForm) {
        const selectItemsWrapper = advancedSearchForm.querySelectorAll(".filter");

        selectItemsWrapper.forEach(selectItemRowWrapper => {
            setUpRowAdvancedSearch(selectItemRowWrapper);
        });
    }
}

function clickButtonsPageReload() {
    const advancedSearchSection = document.querySelector(".search-form-advanced");
    const simpleSearchSection = document.querySelector(".search-form-simple");

    if (advancedSearchSection || simpleSearchSection) {
        const addMoreRows = advancedSearchSection.querySelector(".search-filter-plus");

        addMoreRows.addEventListener("click", () => {
            setTimeout(() => {
                const advancedSearchForm = document.querySelector(".search-filters-advanced");
                const selectItemsWrapper = advancedSearchForm.querySelectorAll(".filter");
                const lastItem = selectItemsWrapper[selectItemsWrapper.length - 1];
        
                setUpRowAdvancedSearch(lastItem);
            }, 100);
        });

        const switchButtons = document.querySelectorAll(".switch-search-form-button");
        const checkAdvancedSearch = localStorage.getItem("advanced-search");

        if (checkAdvancedSearch === "yes") {
            advancedSearchSection.classList.add("active");
            simpleSearchSection.classList.remove("active");
            localStorage.removeItem("advanced-search");
        }

        switchButtons.forEach(button => {
            button.addEventListener("click", () => {
                advancedSearchSection.classList.toggle("active");
                simpleSearchSection.classList.toggle("active");
            });
        });

        window.addEventListener("beforeunload", () => {
            if (advancedSearchSection.classList.contains("active")) {
                localStorage.setItem("advanced-search", "yes");
            }
        });

        const sendButton = advancedSearchSection.querySelector(".send-button");
        sendButton.addEventListener("click", element => {
            element.preventDefault();
            localStorage.setItem("advanced-search", "yes");

            const form = advancedSearchSection.querySelector("#form-search"); 

            let qInput = form.querySelector("input[name='q']");
            if (!qInput) {
                qInput = document.createElement("input");
                qInput.type = "hidden";
                qInput.name = "q";
                form.appendChild(qInput);
            }
            qInput.value = '';

            form.submit();
        });      
    }
}

function replaceSwitchButtonAdvancedSearch() {
    const advancedSearchSection = document.querySelector(".search-form-advanced");

    if (advancedSearchSection) {
        const switchButton = advancedSearchSection.querySelector(".switch-search-form-button");
        const advancedSearchForm = document.querySelector(".search-filters-advanced");
        const firstFilter = advancedSearchForm.querySelector(".filter");

        firstFilter.appendChild(switchButton);
    }
}

function changeStylingButtons() {
    const advancedSearchSection = document.querySelector(".search-form-advanced");

    if (advancedSearchSection) {
        const sendButton = advancedSearchSection.querySelector(".search-submit");
        sendButton.classList.add("primary-button", "send-button", "button-text");
        sendButton.name = "submitBtn";

        replaceSwitchButtonAdvancedSearch();

        const addMoreRows = advancedSearchSection.querySelector(".search-filter-plus");
        addMoreRows.innerHTML = "Add row +";
        addMoreRows.classList.add("add-more-row-button", "big-body-text");

        clickButtonsPageReload();
    }
}

window.addEventListener('load', () => {
    setUpAdvancedForm();
    changeStylingButtons();
});