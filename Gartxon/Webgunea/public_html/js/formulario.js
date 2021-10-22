//Funcion para usuario
function validarTexto(parametro){
    var patron = /^[a-zA-Z0-9\_\-]{4,16}$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}

//Funcion para nombre
function validarNombre(parametro){
    var patron = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//Funcion para apellido
function validarAbizena(parametro){
    var patron = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//Funcion para codigo postal
function validarCodigoPostal(parametro){
    var patron = /(([1-4][0-9][0-9][0-9][0-9])|(0(?=[1-9][0-9][0-9][0-9]))|(5(?=[0-2][0-9][0-9][0-9])))/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//Funcion para NAN
function validarNAN(dni) {
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            //alert('Dni correcto');
            return true;
        }
    }else{
        //alert('Dni erroneo, formato no válido');
        return false;
    }
}
//Funcion para JaiotzaData
function validarJaiotzaData(parametro){
    var patron = /^(19[3456789]\d|20[01]\d)-\d{2}-\d{2}$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//Funcion para correo
function validarCorreo(parametro){
    var patron = /^\w+([\.-]?\w+)*@(hotmail|outlook|yahoo|live|gmail)*.(com|es)+$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//Funcion para mugikorra
function validarMugikorra(parametro){
    var patron = /^\d{9}$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}

function validarFormulario(){
   
   var formulario = document.addForm; 

   if(formulario.usuario.value == ""){
       document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar nombre del usuario.</div>';
       formulario.usuario.focus();
       return false;
   } else if(validarTexto(formulario.usuario.value)== false){
    document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese usuario.</div>';
    formulario.usuario.value = "";
    formulario.usuario.focus();
    return false;
   }
   else{
       document.getElementById("alerta").innerHTML = "";
   }

   if(formulario.nombre.value == ""){
    //alert("Por favor ingresar nombre");
    document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar nombre .</div>';
    formulario.nombre.focus();
    return false;
    }else if(validarNombre(formulario.nombre.value)== false){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese nombre.</div>';
        formulario.nombre.value = "";
        formulario.nombre.focus();
        return false;
    }
    else{
    document.getElementById("alerta").innerHTML = "";
    }

    if(formulario.abizena.value == ""){
        //alert("Por favor ingresar abizena");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el abizena.</div>';
        formulario.abizena.focus();
        return false;
        } else if(validarAbizena(formulario.abizena.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese abizena.</div>';
            formulario.abizena.value = "";
            formulario.abizena.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }

    if(formulario.codigoPostal.value == ""){
        //alert("Por favor ingresar codigoPostal");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el codigoPostal.</div>';
        formulario.codigoPostal.focus();
        return false;
        } else if(validarCodigoPostal(formulario.codigoPostal.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese codigoPostal.</div>';
            formulario.codigoPostal.value = "";
            formulario.codigoPostal.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }

    if(formulario.NAN.value == ""){
        //alert("Por favor ingresar NAN");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el NAN.</div>';
        formulario.NAN.focus();
        return false;
        } else if(validarNAN(formulario.NAN.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese NAN.</div>';
            formulario.NAN.value = "";
            formulario.NAN.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }

    if(formulario.JaiotzaData.value == ""){
        //alert("Por favor ingresar JaiotzaData");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el JaiotzaData.</div>';
        formulario.JaiotzaData.focus();
        return false;
        } else if(validarJaiotzaData(formulario.JaiotzaData.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese JaiotzaData.</div>';
            formulario.JaiotzaData.value = "";
            formulario.JaiotzaData.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }
    
    if(formulario.correo.value == ""){
        //alert("Por favor ingresar correo");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el correo.</div>';
        formulario.correo.focus();
        return false;
        }  else if(validarCorreo(formulario.correo.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese correo.</div>';
            formulario.correo.value = "";
            formulario.correo.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }
    
    if(formulario.telefono.value == ""){
        //alert("Por favor ingresar telefono");
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar el telefono.</div>';
        formulario.telefono.focus();
        return false;
        } else if(validarMugikorra(formulario.telefono.value)== false){
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite ese telefono.</div>';
            formulario.telefono.value = "";
            formulario.telefono.focus();
            return false;
        }
        else{
        document.getElementById("alerta").innerHTML = "";
        }1
    
       // Baldintzak
        elemento = document.getElementById("terminos");
        if( !elemento.checked ) {
            document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor acepta las baldintzak.</div>';
            return false;
        }

       //Contraseñas iguales
       if(formulario.password.value != formulario.password2.value){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Las contraseñas no son iguales.</div>';
        formulario.password.value ="";
        formulario.password2.value = "";
        formulario.password.focus();
        return false;
       } else {
        document.getElementById("alerta").innerHTML = "";
       }
    

   formulario.submit();
}