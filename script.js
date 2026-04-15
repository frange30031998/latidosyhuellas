<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Inicio - Latidos & Huellas</title>

<link rel="stylesheet" href="styles.css">
</head>

<body>

<header>
    <h1>🏠 Inicio</h1>
</header>

<nav>
    <button onclick="irPagina('../index.html')">🏠 Menú</button>
    <button onclick="irPagina('nosostros.html')">🐾 Quiénes Somos</button>
    <button onclick="irPagina('servicios.html')">🩺 Servicios</button>
    <button onclick="irPagina('productos.html')">🛍️ Productos</button>
</nav>

<!-- CONTENIDO -->
<div class="contenedor">

    <!-- INFO -->
    <div class="articulos">
        <div class="articulo">
            <div>
                <h3>Cuidados para tu mascota</h3>
                <p>
                    ✔ Vacunación completa<br>
                    ✔ Desparasitación<br>
                    ✔ Paseos diarios<br>
                    ✔ Alimentación balanceada<br>
                    ✔ Atención de emergencias
                </p>
            </div>

            <img src="https://placedog.net/300" alt="Mascota">
        </div>
    </div>

    <!-- FORMULARIO -->
    <div class="formulario">
        <h3>📅 Solicitar cita</h3>

        <form id="formCita">
            <input type="text" name="mascota" placeholder="Nombre de la mascota" required>

            <select name="servicio" required>
                <option value="" disabled selected>Tipo de servicio</option>
                <option>Consulta general</option>
                <option>Vacunación</option>
                <option>Baño y estética</option>
                <option>Cirugía</option>
                <option>Emergencia</option>
            </select>

            <input type="date" name="fecha" required>
            <input type="time" name="hora" required>

            <input type="text" name="propietario" placeholder="Nombre del propietario" required>
            <input type="tel" name="telefono" placeholder="Teléfono de contacto">

            <button type="submit">✅ Guardar cita</button>
        </form>
    </div>

</div>

<!-- JS -->
<script>
// 🔹 Navegación
function irPagina(pagina) {
    window.location.href = pagina;
}

// 🔹 Formulario → WhatsApp
document.getElementById("formCita").addEventListener("submit", function(e) {
    e.preventDefault();

    let mascota = this.mascota.value.trim();
    let servicio = this.servicio.value.trim();
    let fecha = this.fecha.value;
    let hora = this.hora.value;
    let propietario = this.propietario.value.trim();
    let telefono = this.telefono.value.trim();

    // Mensaje con saltos de línea correctos
    let mensaje = "Hola Latidos & Huellas 🐾\n\n";
    mensaje += "Cordial saludo.\n\n";
    mensaje += "Me gustaría agendar una cita:\n\n";

    mensaje += "👤 Nombre del dueño: " + propietario + "\n";
    mensaje += "🐾 Nombre de la mascota: " + mascota + "\n";
    mensaje += "🏥 Servicio: " + servicio + "\n";
    mensaje += "📅 Fecha: " + fecha + "\n";
    mensaje += "⏰ Hora: " + hora + "\n";
    mensaje += "📞 Teléfono: " + (telefono || "No especificado") + "\n\n";

    mensaje += "Quedo atento(a) a la confirmación.\n\n";
    mensaje += "¡Gracias! 🐾";

    let numero = "573001234567"; // 🔴 CAMBIA POR TU NÚMERO

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});
</script>

</body>
</html>