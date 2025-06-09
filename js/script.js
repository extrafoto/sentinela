// Arquivo JavaScript para interatividades

// Scroll suave para navegação
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const data = {
            nome: form.nome.value,
            email: form.email.value,
            site: form.site.value
        };

        // Substitua pelo seu webhook real (ex: Make, Zapier, Power Automate)
        const webhookUrl = "https://webhook.seuservico.com/endpoint";

        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Cadastro enviado com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente.");
            }
        })
        .catch(error => {
            console.error("Erro no envio:", error);
            alert("Erro ao enviar. Verifique sua conexão.");
        });
    });
});


    // Validação simples do formulário
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            
            if (name.trim() === '' || email.trim() === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio
            alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos elementos
    const animatedElements = document.querySelectorAll('.step, .plan-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});


