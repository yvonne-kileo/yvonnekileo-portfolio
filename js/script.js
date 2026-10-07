/* =========================================================
   YVONNE KILEO PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   2. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


/* =========================================================
   3. DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const savedTheme =
        localStorage.getItem("portfolioTheme");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");
        themeToggle.textContent = "☾";

    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeToggle.textContent = "☾";

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeToggle.textContent = "☼";

        }

    });

}


/* =========================================================
   4. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".intro-section, .featured-section, .home-cta, .featured-preview"
);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("reveal-visible");

    });

}


/* =========================================================
   5. HERO CARD MOUSE TILT
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

const developerCard =
    document.querySelector(".developer-card");


if (heroVisual && developerCard) {

    heroVisual.addEventListener(
        "mousemove",
        function (event) {

            const rectangle =
                heroVisual.getBoundingClientRect();


            const mouseX =
                event.clientX - rectangle.left;


            const mouseY =
                event.clientY - rectangle.top;


            const centerX =
                rectangle.width / 2;


            const centerY =
                rectangle.height / 2;


            const rotateY =
                ((mouseX - centerX) / centerX) * 5;


            const rotateX =
                ((centerY - mouseY) / centerY) * 5;


            developerCard.style.transform =
                "perspective(1000px) " +
                "rotateX(" + rotateX + "deg) " +
                "rotateY(" + rotateY + "deg) " +
                "translateY(-5px)";

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        function () {

            developerCard.style.transform =
                "perspective(1000px) " +
                "rotateX(3deg) " +
                "rotateY(-5deg)";

        }
    );

}


/* =========================================================
   6. BUTTON HOVER EFFECT
========================================================= */

const buttons = document.querySelectorAll(
    ".btn, .nav-button"
);


buttons.forEach(function (button) {

    button.addEventListener(
        "mousemove",
        function (event) {

            const rectangle =
                button.getBoundingClientRect();


            const x =
                event.clientX - rectangle.left;


            const y =
                event.clientY - rectangle.top;


            const moveX =
                (x - rectangle.width / 2) * 0.08;


            const moveY =
                (y - rectangle.height / 2) * 0.08;


            button.style.transform =
                "translate(" +
                moveX +
                "px, " +
                moveY +
                "px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.style.transform = "";

        }
    );

});


/* =========================================================
   7. FLOATING BADGES
========================================================= */

const floatingBadges =
    document.querySelectorAll(".floating-badge");


if (floatingBadges.length > 0) {

    window.addEventListener(
        "mousemove",
        function (event) {

            const mouseX =
                (event.clientX / window.innerWidth) - 0.5;


            const mouseY =
                (event.clientY / window.innerHeight) - 0.5;


            floatingBadges.forEach(
                function (badge, index) {

                    const amount =
                        (index + 1) * 5;


                    badge.style.marginLeft =
                        (mouseX * amount) + "px";


                    badge.style.marginTop =
                        (mouseY * amount) + "px";

                }
            );

        }
    );

}


/* =========================================================
   8. TYPING EFFECT
========================================================= */

const heroEyebrow =
    document.querySelector(".hero-eyebrow");


if (heroEyebrow) {

    const text =
        heroEyebrow.textContent.trim();


    heroEyebrow.textContent = "";


    let currentIndex = 0;


    function typeText() {

        if (currentIndex < text.length) {

            heroEyebrow.textContent +=
                text.charAt(currentIndex);

            currentIndex++;

            setTimeout(
                typeText,
                60
            );

        }

    }


    setTimeout(
        typeText,
        400
    );

}


/* =========================================================
   9. CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");


cursorGlow.className =
    "cursor-glow";


document.body.appendChild(
    cursorGlow
);


document.addEventListener(
    "mousemove",
    function (event) {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================================
   10. ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        }

    }
);


/* =========================================================
   11. CONSOLE MESSAGE
========================================================= */

console.log(
    "Yvonne Kileo Portfolio loaded successfully."
);