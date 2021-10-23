function validar(){
	


    var nombre = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
    var apellido = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
   
   
   
        var fechancto = document.getElementById("JaiotzaData").value.split("-"); 
        var fechavalida = new Date(parseInt(fechancto[0]),parseInt(fechancto[1]-1),parseInt(fechancto[2]));
        var hoy = new Date();
       
        var anoncto = fechavalida.getFullYear();
       //   var mesncto = fechavalida.getMonth();
       //   var diancto = fechavalida.getDate();
   
        var anohoy = hoy.getFullYear();
       //   var meshoy = hoy.getMonth();
       //   var diahoy = hoy.getDate(); 
       
   
   
       
        var telefono = /^[0-9]{9}$/;
   
   
   
       
          var expresiondni = /^[0-9]{8}[A-Z]$/;
          var dni = document.getElementById("NAN").value;
          var letradni = dni.substring(8, 9);
       var numdni =  parseInt(dni.substring(0, 8));
       var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
       var letracorrecta = letras[numdni % 23];
   
   
   
   
        var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
       
       
       if (!nombre.test(document.getElementById("nombre").value)){
           alert ("Nombre no valido");
           return false;
       }
   
       else if (!apellido.test(document.getElementById("abizena").value)){
           alert ("Apellido no valido");
           return false;
       }
   
       
       
   
       else if (isNaN(fechavalida)){
            alert("Fecha introducida incorrecta");
            return false;
        }
   
       else if (anoncto <=  1930){
           alert("Fecha introducida incorrecta");
           return false;
       }
       
        else if ( anohoy - anoncto < 18 ){
            alert ("Tienes que ser mayor de edad"); 
            return false;  
        }
     
      
       
   
        else if (!telefono.test(document.getElementById("telefono").value)){
            alert("Teléfono introducido incorrecto");
            return false;
        }
   
   
       
        
   
       else if (!expresiondni.test(document.getElementById("NAN").value)){
           alert("DNI introducido incorrecto");
           return false;
           }
           
        else if(letradni != letracorrecta){
               alert("DNI incorrecto");
               return false;
             }
               
           
           
       
       
       
       
       
       
        else if (!email.test(document.getElementById("correo").value)){
            alert("Correo introducido incorrecto");
            return false;
        }
   
        
      return true;
      
    }