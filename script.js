
// SKILLS DATA

const skillData = {
    programming: [
        "01  Python",
        "02  Object-Oriented Programming",
        "03  Data Structures",
        "04  Problem Solving"
    ],

    frontend: [
        "01  HTML",
        "02  CSS",
        "03  JavaScript",
        "04  Responsive Web Design"
    ],

    database: [
        "01  SQL",
        "02  MySQL",
        "03  SQLite"
    ],

    tools: [
        "01  Git & GitHub",
        "02  Visual Studio Code",
        "03  IDLE",
        "04  MS Office",
        "05  Command Prompt"
    ],

    ai: [
        "01  AI Application Development",
        "02  Gemini API",
        "03  Django",
        "04  FastAPI"
    ]
};


// DISPLAY SKILLS

const list = document.getElementById("skillList");

function showSkills(key) {
    if (!list || !skillData[key]) return;

    list.innerHTML = skillData[key]
        .map(item => `<div class="skill-item">${item}</div>`)
        .join("");
}

showSkills("programming");

document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {

        document.querySelectorAll(".tab").forEach(tab => {
            tab.classList.remove("active");
        });

        button.classList.add("active");

        showSkills(button.dataset.tab);
    });
});


// PROJECT FILTERS

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter").forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        document.querySelectorAll(".project-card").forEach(card => {

            card.style.display =
                selectedFilter === "all" ||
                card.dataset.category.includes(selectedFilter)
                    ? ""
                    : "none";

        });

    });

});


// ROTATING DEVELOPER ROLES

const roles = [
    "Python Developer",
    "Python Full Stack Developer",
    "Web Developer",
    "AI Application Developer",
    "Software Developer"
];

let roleIndex = 0;

const roleEl = document.getElementById("roleText");

if (roleEl) {

    setInterval(() => {

        roleIndex = (roleIndex + 1) % roles.length;

        roleEl.style.opacity = 0;

        setTimeout(() => {
            roleEl.textContent = roles[roleIndex];
            roleEl.style.opacity = 1;
        }, 220);

    }, 2400);

}


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

    document.querySelectorAll("#nav a").forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("open");
        });

    });

}


// CONTACT FORM - OPEN GMAIL

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const form = event.target;

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const message = form.elements["message"].value.trim();

        const formNote = document.getElementById("formNote");

        // VALIDATE FORM

        if (!name || !email || !message) {

            formNote.textContent = "Please fill in all fields.";

            return;
        }

        // VALIDATE EMAIL FORMAT

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formNote.textContent = "Please enter a valid email address.";

            return;
        }

        // CREATE EMAIL CONTENT

        const subject = encodeURIComponent(
            "Portfolio enquiry from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        // OPEN GMAIL COMPOSE WINDOW

        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=ramappamala43@gmail.com" +
            "&su=" + subject +
            "&body=" + body;

        formNote.textContent = "Opening Gmail...";

        window.open(gmailUrl, "_blank");

    });

}


// CERTIFICATE ANIMATIONS

const certificateCards = document.querySelectorAll(".cert-card");

if ("IntersectionObserver" in window) {

    const certificateObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const index = Array.from(certificateCards).indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200);

            } else {

                entry.target.classList.remove("show");

            }

        });

    }, {
        threshold: 0.2
    });

    certificateCards.forEach(card => {
        certificateObserver.observe(card);
    });

} else {

    certificateCards.forEach(card => {
        card.classList.add("show");
    });

}


// PROJECT CARD CURSOR-BASED ZOOM ANIMATION

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.transformOrigin = `${x}% ${y}%`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transformOrigin = "center center";

    });

});


// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
