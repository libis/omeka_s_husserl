document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.facet-active-value').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Voorkom de standaard actie
            const facetName = this.dataset.facetName;
            const facetValue = this.dataset.facetValue;
            console.log(facetName);
            console.log(facetValue);
            const form = document.getElementById('form-facets');
            const checkboxes = form.querySelectorAll(`input[name="${facetName}"][value="${facetValue}"]`);
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false; // Deselecteer de checkbox
            });
            form.submit(); // Dien het formulier opnieuw in
        });
    });
});