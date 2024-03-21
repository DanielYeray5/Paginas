
    // Arreglo para almacenar los datos de las mascotas
    var mascotasRegistradas = [];

    // Función para mostrar los datos en forma de lista
    function mostrarDatosEnLista() {
        // Obtener el elemento ul donde se mostrarán los datos
        var datosList = document.getElementById("datosList");
        // Limpiar la lista antes de volver a mostrar los datos
        datosList.innerHTML = "";

        // Recorrer el arreglo de mascotas registradas
        mascotasRegistradas.forEach(function (mascota) {
            // Crear un nuevo elemento li
            var nuevoItem = document.createElement("li");
            // Establecer el contenido del elemento li con los datos de la mascota
            nuevoItem.innerHTML = `<strong>Nombre:</strong> ${mascota.nombre}, <strong>Contacto:</strong> ${mascota.contacto}, <strong>Padecimiento:</strong> ${mascota.padecimiento}`;
            // Crear un elemento de imagen y establecer su src
            var nuevaImagen = document.createElement("img");
            nuevaImagen.src = mascota.foto;
            nuevaImagen.style.maxWidth = "180px"; // Establecer un tamaño máximo para la imagen
            nuevoItem.appendChild(nuevaImagen); // Agregar la imagen como hijo del elemento li
            // Agregar el elemento li a la lista
            datosList.appendChild(nuevoItem);
        });
    }

    // Agregar un event listener al botón de registrar
    document.getElementById("registrarBtn").addEventListener("click", function (event) {
        event.preventDefault();
        var nombreMascota = document.getElementById("nombreMascota").value;
        var contacto = document.getElementById("contacto").value;
        var padecimiento = document.getElementById("padecimiento").value;
        var fotoMascota = document.getElementById("fotoMascota").files[0]; // Archivo de la foto seleccionada

        // Crear un objeto con los datos de la mascota
        var mascota = {
            nombre: nombreMascota,
            contacto: contacto,
            padecimiento: padecimiento,
            foto: URL.createObjectURL(fotoMascota) // URL de la foto de la mascota
        };

        // Agregar el objeto al arreglo
        mascotasRegistradas.push(mascota);

        // Llamar a la función para mostrar los datos en forma de lista
        mostrarDatosEnLista();

        // Resto del código para limpiar los campos de entrada...
    });
