// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el tiempo de duración de la animación de la máquina de escribir
    const typewriterDuration = 4000; // 4 segundos

    // Mostrar el formulario de inicio de sesión después de que termine la animación
    setTimeout(function() {
        document.getElementById('login-form').classList.remove('hidden');
    }, typewriterDuration);

    // Mostrar el div de contraseña después de hacer clic en "Continuar"
    document.getElementById('continue-btn').addEventListener('click', function() {
        // Ocultar el botón de continuar
        this.style.display = 'none';

        // Mostrar el div de la contraseña
        document.getElementById('password-div').classList.remove('hidden');
    });
});
