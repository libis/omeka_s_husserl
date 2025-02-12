document.addEventListener("DOMContentLoaded", function() {
    function initializeCustomSelect() {
        const customSelectElements = document.getElementsByClassName("search-advanced-item-select");
      
        Array.from(customSelectElements).forEach((customSelect) => {
          const selectElement = customSelect.getElementsByTagName("select")[0];
          const selectLength = selectElement.length;
      
          // Create a new DIV that will act as the selected item
          const selectedDiv = document.createElement("DIV");
          selectedDiv.setAttribute("class", "search-advanced-item-select__select-form-item select-form-item body-text");
          selectedDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
          customSelect.appendChild(selectedDiv);
      
          // Create a new DIV that will contain the option list
          const optionsDiv = document.createElement("DIV");
          optionsDiv.setAttribute("class", "select-items select-hide");
      
          for (let j = 0; j < selectLength; j++) {
            const optionDiv = document.createElement("DIV");
            optionDiv.setAttribute("class", "select-item body-text");
            optionDiv.innerHTML = selectElement.options[j].innerHTML;
            optionDiv.addEventListener("click", function(e) {
              const selectBox = this.parentNode.parentNode.getElementsByTagName("select")[0];
              const selectedDiv = this.parentNode.previousSibling;
      
              Array.from(selectBox.options).forEach((option, index) => {
                if (option.innerHTML === this.innerHTML) {
                  selectBox.selectedIndex = index;
                  selectedDiv.innerHTML = this.innerHTML;
                }
              });
      
              selectedDiv.click();
            });
            optionsDiv.appendChild(optionDiv);
          }
      
          customSelect.appendChild(optionsDiv);
      
          selectedDiv.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            selectedDiv.classList.toggle("select-open");
            this.classList.toggle("select-arrow-active");
          });
        });
      
        document.addEventListener("click", closeAllSelect);
      }
      
      function closeAllSelect(element) {
        const selectItems = document.getElementsByClassName("select-items");
        const selectSelected = document.getElementsByClassName("select-form-item");
      
        Array.from(selectSelected).forEach((item, index) => {
          if (element !== item) {
            item.classList.remove("select-arrow-active");
            item.classList.remove("select-open");
          }
        });
      
        Array.from(selectItems).forEach((item, index) => {
          if (!Array.from(selectSelected).includes(element)) {
            item.classList.add("select-hide");
          }
          if (element !== item.previousSibling) { 
            item.classList.add("select-hide");
        }
        });
      }
      
      // Initialize the custom select elements
      initializeCustomSelect();
});