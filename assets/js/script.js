// Scroll morbido tra le sezioni con controllo di sicurezza

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Validazione del modulo di contatto con messaggio Bootstrap

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;

            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                return;
            }

            // Rimuove messaggi di successo precedenti (se presenti)
            let existingMessage = document.querySelector(".alert-success");
            if (existingMessage) {
                existingMessage.remove();
            }

            // Crea e aggiunge il messaggio di successo con Bootstrap
            const successMessage = document.createElement("div");
            successMessage.className = "alert alert-success mt-3";
            successMessage.innerText = "Messaggio inviato con successo!";
            form.appendChild(successMessage);

            // Resetta il form dopo 3 secondi
            setTimeout(() => {
                form.reset();
                form.classList.remove("was-validated");
                successMessage.remove();
            }, 3000);
        });
    }
});
