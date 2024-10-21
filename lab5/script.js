document.querySelectorAll(".tabs a").forEach(tab => {
    tab.addEventListener("click", function (event) {
        event.preventDefault();

        // Remove active class from all tabs
        document.querySelectorAll(".tabs a").forEach(item => item.classList.remove("active"));

        // Add active class to the clicked tab
        this.classList.add("active");

        // Hide all content sections
        document.querySelectorAll(".content").forEach(content => content.style.display = "none");

        // Show the content associated with the clicked tab
        const contentId = this.id.replace("tab_", "content_");
        document.getElementById(contentId).style.display = "block";
    });
});
