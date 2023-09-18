document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Aquí puedes implementar el código para enviar el formulario (por ejemplo, mediante AJAX).
        // Simularemos el envío exitoso con un retraso de 2 segundos en este ejemplo.
        setTimeout(function () {
            form.reset();
            successMessage.style.display = "block";
        }, 2000);
    });
});
