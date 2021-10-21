<?php

    $hostname = "db";
    $username = "admin";
    $password = "test";
    $db = "Gartxon";

    $Erabiltzailea=$_POST['usuario'];
    $Izena=$_POST['nombre'];
    $Abizena=$_POST['abizena'];
    $PostaKodea=$_POST['codigoPostal'];
    $NAN=$_POST['NAN'];
    $JaiotzaData=$_POST['JaiotzaData'];
    $Pasahitza=$_POST['password'];
    $PostaElektronikoa=$_POST['correo'];
    $Mugikorra=$_POST['telefono'];
    
    
    $conn = mysqli_connect($hostname,$username,$password,$db);
    mysqli_set_charset($conexion, "utf8");
    
    if ($conn->connect_error) {
      die("Database connection failed: " . $conn->connect_error);
    }
  
    $sartu = "INSERT INTO Erregistroa (Erabiltzailea, Izena, Abizenak, PostaKodea, NAN, JaiotzaData, Pasahitza, PostaElektronikoa, Mugikorra) VALUES ($Erabiltzailea, $Izena, $Abizena, $NAN, $JaiotzaData, $Pasahitza, $PostaElektronikoa, $Mugikorra)";
    
    $query = mysqli_query($conn, $sartu);

    if($query){
      echo "<script>alert('Erabiltzailea erregistratu da');
      window.location='/app'</script>";
    }
    else{
      echo "<script>alert('Ezin izan da erregistratu'); window.history.go(-1);</script>";
    }
?>