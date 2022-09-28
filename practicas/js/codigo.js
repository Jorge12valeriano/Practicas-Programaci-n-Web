window.addEventListener("load",function(){
    //Auí va el codigo que se ejecuta despues de cargar la pagina
    formulario=this.document.getElementById("formulario");

    formulario.addEventListener("submit", function (){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("pwd").value;

        //alert("El nombre es " + nombre + "con contraseña " + pass);

        let respuesta = document.getElementById("result");

        if (nombre == "G7S21" && pass == "Si se puede"){
            respuesta.innerText="Se acepto el ingreso a el sistema...";
            respuesta.style.color="blue";
            respuesta.style.fontSize="3em";
            respuesta.style.width="500px";
            respuesta.style.height="130px";
            respuesta.style.backgroundColor="whithe";
        }else{
            respuesta.innerText="Estas mal de tu cabeza";
            respuesta.style.color="red";
            respuesta.style.fontSize="2em";
            respuesta.style.width="500px";
            respuesta.style.height="150px";
            respuesta.style.backgroundColor="cyan";
        }

    });

});