//Obtener el formulario
const FRM_LO = document.getElementById("log");
const usUser = document.getElementById("usuario");
const contraseña = document.getElementById("contra");
const msjError = document.getElementById("mensaje");

const usuarios = [{
    usuario: "DanielYeray5",
    contraseña: "12345"
},{
    usuario: "JuanCarlos3",
    contraseña: "juancarlos"
}
]

const eventoFormulario = (event) => {
    event.preventDefault();
    let user = usUser.value;
    let password = contraseña.value;
    let coincidencias = usuarios.filter(
        (usuario) => usuario.usuario === user
        );
        if(coincidencias.length > 0){
            if(coincidencias[0].contraseña === password){
                window.location = "/inicio/home.html";
            }else{
                msjError.textContent="Contraseña incorrecta.";
            }
        }else{
            msjError.textContent="Usuario o contraseña incorrecto";
        }

}
FRM_LO.addEventListener("submit", eventoFormulario);