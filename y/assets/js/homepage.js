
document.addEventListener("scroll", function() {
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    var section1 = document.getElementById("section1");
    var section2 = document.getElementById("section2");

    if (scrollPos < section1.offsetTop + section1.offsetHeight / 1) {
        section1.scrollIntoView({ behavior: "smooth" });
    } else {
        section2.scrollIntoView({ behavior: "smooth" });
    }
});

// Add smooth scrolling to all links
$('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

window.addEventListener("load", function () {
    document.body.style.opacity = 1;
});


