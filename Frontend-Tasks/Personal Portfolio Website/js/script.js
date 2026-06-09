document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if(name.length < 3){
            alert("Please enter a valid name.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            alert("Please enter a valid email.");
            return;
        }

        if(subject.length < 3){
            alert("Please enter a valid subject.");
            return;
        }

        if(message.length < 10){
            alert("Message should be at least 10 characters.");
            return;
        }

        document.getElementById("successAlert")
                .classList.remove("d-none");

        localStorage.setItem("lastMessage", JSON.stringify({
            name,
            email,
            subject,
            message
        }));

        this.reset();

        setTimeout(() => {
            document.getElementById("successAlert")
                    .classList.add("d-none");
        }, 4000);

    });
}



const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
    });
});




const progressBars =
document.querySelectorAll(".progress-bar");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        const width = bar.innerText;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "2s";
            bar.style.width = width;

        }, 500);

    });
});



const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const resumeBtn =
document.querySelector(".btn-primary");

if(resumeBtn){

    resumeBtn.addEventListener("click", function(e){

        e.preventDefault();

        alert(
            "Add your resume PDF link here."
        );

      
    });
}


window.addEventListener("load", () => {

    setTimeout(() => {

        console.log(
            "Welcome to Mohammad Jahangeer's Portfolio"
        );

    }, 1000);
});