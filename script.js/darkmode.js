document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Carregar tema salvo no localStorage
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        themeIcon.classList.add("bi-sun");
        themeIcon.classList.remove("bi-moon");
    } else {
        body.classList.remove("dark");
        themeIcon.classList.add("bi-moon");
        themeIcon.classList.remove("bi-sun");
    }

    // Função para alternar o tema
    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.contains("dark");

        // Alterna entre os temas
        if (isDark) {
            body.classList.remove("dark");
            body.classList.add("light");
            themeIcon.classList.remove("bi-sun");
            themeIcon.classList.add("bi-moon");
            window.localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
            themeIcon.classList.remove("bi-moon");
            themeIcon.classList.add("bi-sun");
            window.localStorage.setItem("theme", "dark");
        }
    });

    // Carrossel - controles manuais
    let currentSlide = 1;
    const slides = document.querySelectorAll(".slide");
    const radioButtons = document.querySelectorAll("input[name='radio-btn']");

    // Função para mover para o próximo slide
    const nextSlide = () => {
        currentSlide = (currentSlide % slides.length) + 1;
        document.getElementById("radio" + currentSlide).checked = true;
    };

    // Intervalo automático para alternar os slides a cada 2 segundos
    setInterval(nextSlide, 2000);

    // Atualiza os slides automaticamente
    radioButtons.forEach((button) => {
        button.addEventListener("change", () => {
            currentSlide = parseInt(button.id.replace("radio", ""));
        });
    });
});
