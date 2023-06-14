document.addEventListener("DOMContentLoaded", function(event) {
    const filterButtons = document.querySelectorAll(".filter-button");
  
    filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const filterValue = this.getAttribute("data-filter");
  
        const imageWrappers = document.querySelectorAll(".image-wrapper");
  
        imageWrappers.forEach(function(wrapper) {
          if (filterValue === "all") {
            wrapper.style.display = "block";
          } else if (wrapper.classList.contains(filterValue)) {
            wrapper.style.display = "block";
          } else {
            wrapper.style.display = "none";
          }
        });
  
        filterButtons.forEach(function(button) {
          button.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  });
  