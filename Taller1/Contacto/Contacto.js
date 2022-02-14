function obtenerDatos()
{
    let nombre=document.getElementById("nombreUsuario").value;
    let email=document.getElementById("emailUsuario").value;
    let edad=document.getElementById("Edad").value;

    let mensajeDatos ="El nombre del usuario: "+nombre+
                      " El email del usuario: "+ email+
                      " La edad del usuario: "+ edad;

    alert(mensajeDatos);


}
