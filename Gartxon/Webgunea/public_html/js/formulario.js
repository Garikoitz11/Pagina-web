/*function onartuPosta(posta) {
    var posta = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
    return posta.test(posta);
    }

    function onartuMugikorra(tel){
        var tel= /^\d{9}$/;
        if(!tel.test(tel)){
            return false;
        }else{
            return true;
        }
    }*/

    const formulario = document.getElementById('formulario'); //Acceder a los id que hemos puesto en el html de Erregistroa
    const inputs = document.querySelectorAll('#formulario input'); //Se almamcenan todos los imputs de nuestro registro
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Acepta letras, numeros, guion y guion_bajo de 4 a 16 dígitos
        izena: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
        abizena: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y espacios, pueden llevar acentos.
        NAN: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i, //Acepta 8 numeros y una letra
        password: /^.{4,12}$/, // 4 a 12 digitos.
        posta: /^\w+([\.-]?\w+)*@(hotmail|outlook|yahoo|live|gmail)*.(com|es)+$/,
        mugikorra: /^\d{9}$/ // 9 numeros.
    }
    
    const campos = {
        usuario: false,
        izena: false,
        abizena: false,
        NAN: false,
        password: false,
        posta: false,
        mugikorra: false
    }
    
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
            case "izena":
                validarCampo(expresiones.izena, e.target, 'izena');
            break;
            case "abizena":
                validarCampo(expresiones.abizena, e.target, 'abizena');
            break;
            case "NAN":
                validarCampo(expresiones.NAN, e.target, 'NAN');
            break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                validarPassword2();
            break;
            case "password2":
                validarPassword2();
            break;
            case "posta":
                validarCampo(expresiones.posta, e.target, 'posta');
            break;
            case "mugikorra":
                validarCampo(expresiones.mugikorra, e.target, 'mugikorra');
            break;
        }
    }
    
    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }
    
    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('password2');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['password'] = true;
        }
    }
    
    inputs.forEach((input) => { // se ejecuta por cada input
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    formulario.addEventListener('submit', (e) => { // usuario presione el boton efecutar una funcion
        e.preventDefault(); //si no va con lo de sgari quitarlo
    
        const terminos = document.getElementById('terminos');
        if(campos.usuario && campos.izena && campos.abizena && campos.NAN && campos.password && campos.posta && campos.mugikorra && terminos.checked ){
            formulario.reset();
    
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
    
   