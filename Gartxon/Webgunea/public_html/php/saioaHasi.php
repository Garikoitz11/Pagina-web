<?php
    $hostname = "db";
    $username = "admin";
    $password = "test";
    $db = "Gartxon";

    //$Erabiltzaile = "izena";
    //$Pasahitza = "pasahitza";

    //session_start();
    //$_SESSION["izena"] = $Erabiltzaile;

    $conn = mysqli_connect($hostname,$username,$password,$db);
    
    if (!$conn) {
        echo 'Error';
    }
    else{
        echo 'noerror';
    }
    
    /*$query = mysqli_query($conn, "SELECT*FROM Erregistroa WHERE Erabiltzailea = '$Erabiltzaile' && Pasahitza1 = '$Pasahitza")
       or die (mysqli_error($conn));
    
    $filas=mysqli_num_rows($query);

    if($filas){
        
        //header("location:home.php");
        include("datuakAldatu.php");
    
    }else{
        ?>
        <?php
        include("Erregistroa.html");
    
        ?>
        <h1 class="bad">ERABILTZAILE EDO PASAHITZA OKERRAK</h1>
        <?php
    }
    mysqli_free_result($resultado);
    mysqli_close($conexion);*/
?>