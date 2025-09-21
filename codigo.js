const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const PaginaActiva = () => {
    const header = document.querySelector('header'); 

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 110);

    navLinks.forEach(link => {
            link.classList.remove('active');
        });

    sections.forEach(section => {
        section.classList.remove('active');
    });
    
}
  
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            PaginaActiva();
            
            link.classList.add('active');
            
            setTimeout(() => {
                sections[idx].classList.add('active');
            },110);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        PaginaActiva();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        },110);
    }
});


const expecienciaBtn = document.querySelectorAll('.experiencia-btn');

expecienciaBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const experienciaDetail = document.querySelectorAll('.experiencia-detail');
        
        expecienciaBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        experienciaDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        experienciaDetail[idx].classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // evita recargar la página

        emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
            .then(() => {
                alert("✅ Tu mensaje fue enviado con éxito. ¡Gracias por contactarme!");
                form.reset();
            }, (error) => {
                console.error("Error:", error);
                alert("❌ Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
            });
    });
});
