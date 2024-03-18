document.addEventListener('DOMContentLoaded', function() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 5;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    if (typeof FontAwesomeConfig === 'undefined') {
        console.log('Font Awesome is not loaded');
    } else {
        console.log('Font Awesome is loaded');
    }

    var favoriteIcons = document.querySelectorAll('.material-symbols-outlined');

    favoriteIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            if (icon.classList.contains('favorite-click')) {
                icon.classList.remove('favorite-click');
                icon.classList.remove('material-icons-outlined');
                icon.classList.add('material-symbols-outlined');
                icon.style.color = 'white';
            } else {
                icon.classList.add('favorite-click');
                icon.classList.remove('material-symbols-outlined');
                icon.classList.add('material-icons-outlined');
                icon.style.color = 'red';
            }
        });
    });
});

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Thanks for your reservation!");
});

document.getElementById("signup-submit").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Thanks for signing up, welcome to the family!");
});

document.getElementById("signin-submit").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Welcome back!");
});

document.getElementById("pay").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Thank you for becoming a member! Your suport keeps us running. Now you can use your new paid features.");
});