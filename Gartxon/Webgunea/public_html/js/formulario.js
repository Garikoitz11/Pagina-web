function validarPosta(posta) {
    var posta = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
    return posta.test(posta);
    }

    function validarMugikorra(tel){
        var tel= /^\d{9}$/;
        if(!tel.test(tel)){
            return false;
        }else{
            return true;
        }
    }
    
   