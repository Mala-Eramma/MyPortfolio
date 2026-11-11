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

const list = document.getElementById("skillList");

function showSkills(key) {
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

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;

    roleEl.style.opacity = 0;

    setTimeout(() => {
        roleEl.textContent = roles[roleIndex];
        roleEl.style.opacity = 1;
    }, 220);

}, 2400);


// MOBILE NAVIGATION

document.querySelector(".menu").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("open");
    });
});


// LET'S CONNECT CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.target;

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    const formNote = document.getElementById("formNote");

    if (!name || !email || !message) {
        formNote.textContent = "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formNote.textContent = "Opening your email application...";

    window.location.href =
        `mailto:ramappamala43@gmail.com?subject=${subject}&body=${body}`;
});


// CERTIFICATE ANIMATIONS

const certificateCards = document.querySelectorAll(".cert-card");

const certificateObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            certificateCards.forEach((card, index) => {
                if (card === entry.target) {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 200);
                }
            });
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