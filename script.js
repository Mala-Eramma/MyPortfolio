const skillData = {
 programming: ["01  Python","02  Object-Oriented Programming","03  Data Structures","04  Problem Solving"],
 frontend: ["01  HTML","02  CSS","03  JavaScript","04  Responsive Web Design"],
 database: ["01  SQL","02  MySQL","03  SQLite"],
 tools: ["01  Git & GitHub","02  Visual Studio Code","03  IDLE","04  MS Office","05  Command Prompt"],
 ai: ["01  AI Application Development","02  Gemini API","03  Django","04  FastAPI"]
};
const list = document.getElementById("skillList");
function showSkills(key){ list.innerHTML = skillData[key].map(x=>`<div class="skill-item">${x}</div>`).join(""); }
showSkills("programming");
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); btn.classList.add("active"); showSkills(btn.dataset.tab);
}));
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
 const f=btn.dataset.filter; document.querySelectorAll(".project-card").forEach(card=>card.style.display=(f==="all"||card.dataset.category.includes(f))?"":"none");
}));
const roles=["Python Developer","Python Full Stack Developer","Web Developer","AI Application Developer","Software Developer"];
let roleIndex=0; const roleEl=document.getElementById("roleText");
setInterval(()=>{roleIndex=(roleIndex+1)%roles.length;roleEl.style.opacity=0;setTimeout(()=>{roleEl.textContent=roles[roleIndex];roleEl.style.opacity=1},220)},2400);
document.querySelector(".menu").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault(); const d=new FormData(e.target);
 const subject=encodeURIComponent("Portfolio enquiry from "+d.get("name"));
 const body=encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\n\n"+d.get("message"));
 window.location.href=`mailto:ramappamala43@gmail.com?subject=${subject}&body=${body}`;
});






const certificateCards = document.querySelectorAll('.cert-card');

const certificateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            certificateCards.forEach((card, i) => {
                if (card === entry.target) {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, i * 200);
                }
            });
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2
});

certificateCards.forEach(card => {
    certificateObserver.observe(card);
});






// Project card cursor-based zoom animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.transformOrigin = `${x}% ${y}%`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transformOrigin = 'center center';
    });
});